import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import db from "./database.js";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());

function requireAuth(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Authentication required."
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired session."
    });
  }
}

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "SheCare backend is running successfully!"
  });
});


// ==============================
// REGISTER USER
// ==============================
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please fill all fields."
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters."
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    const existingUser = db
      .prepare("SELECT id FROM users WHERE email = ?")
      .get(cleanEmail);

    if (existingUser) {
      return res.status(409).json({
        message: "This email is already registered."
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const statement = db.prepare(`
      INSERT INTO users (name, email, password)
      VALUES (?, ?, ?)
    `);

    statement.run(
      name.trim(),
      cleanEmail,
      hashedPassword
    );

    res.status(201).json({
      message: "Registration successful!"
    });

  } catch (error) {
    console.error("Registration error:", error);

    res.status(500).json({
      message: "Something went wrong during registration."
    });
  }
});


// ==============================
// LOGIN USER
// ==============================
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter email and password."
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    const user = db
      .prepare("SELECT * FROM users WHERE email = ?")
      .get(cleanEmail);

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password."
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password."
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({
      message: "Login successful!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      message: "Something went wrong during login."
    });
  }
});


// ==============================
// GET LOGGED-IN USER
// ==============================
app.get("/api/me", requireAuth, (req, res) => {
  try {
    const user = db
      .prepare(
        "SELECT id, name, email FROM users WHERE id = ?"
      )
      .get(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found."
      });
    }

    res.json({
      user
    });

  } catch (error) {
    console.error("User check error:", error);

    res.status(500).json({
      message: "Something went wrong."
    });
  }
});
// ==============================
// SHECARE AI CHAT
// ==============================
app.post("/api/chat", requireAuth, async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        message: "Please enter a message."
      });
    }

    const userMessage = message.trim();

    console.log("User question:", userMessage);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",

      contents: userMessage,

      config: {
        systemInstruction:
          "You are SheCare AI, a helpful and friendly AI assistant. " +
          "Answer naturally and clearly. " +
          "You can help with general knowledge, education, college work, programming, projects, writing, rewriting, explanations, career guidance, mathematics, technology, health awareness, and everyday questions. " +
          "Understand informal language, Hinglish, short questions, and spelling mistakes. " +
          "Use simple and easy-to-understand language. " +
          "When the user asks for something to be written, provide the draft directly. " +
          "When the user asks for an explanation, explain it clearly. " +
          "For health-related questions, provide general educational information only. Do not diagnose conditions or prescribe medicines. " +
          "If a health question describes serious or unusual symptoms, recommend professional medical evaluation. " +
          "For emergencies, advise the user to seek immediate local emergency medical care. " +
          "Use Google Search when current, recent, changing, or otherwise web-based information would improve the answer. " +
          "When Google Search is used, base factual claims on the available search results and avoid making unsupported claims. " +
          "Be respectful, supportive, accurate, and concise unless the user asks for more detail.",

        tools: [
          {
            googleSearch: {}
          }
        ]
      }
    });

    console.log("AI response received.");

    const groundingMetadata =
      response?.candidates?.[0]?.groundingMetadata;

    const sources = [];

    if (groundingMetadata?.groundingChunks) {
      for (const chunk of groundingMetadata.groundingChunks) {
        if (chunk.web?.uri) {
          sources.push({
            title: chunk.web.title || "Web source",
            url: chunk.web.uri
          });
        }
      }
    }

    const uniqueSources = sources.filter(
      (source, index, array) =>
        index ===
        array.findIndex(
          (item) => item.url === source.url
        )
    );

    res.json({
      reply:
        response?.text ||
        "I could not generate an answer right now.",

      sources: uniqueSources
    });

  } catch (error) {
    console.error("Gemini AI error:", error);

    res.status(500).json({
      message:
        error?.message ||
        "Unable to get an AI response right now."
    });
  }
});
          
app.post("/api/bmi", requireAuth, async (req, res) => {
  try {
    const {
      heightFeet,
      heightInches,
      weightKg,
      bmi,
      category
    } = req.body;

    if (
      heightFeet === undefined ||
      heightInches === undefined ||
      weightKg === undefined ||
      bmi === undefined ||
      !category
    ) {
      return res.status(400).json({
        message: "Please provide all BMI information."
      });
    }

    const userId = req.user.id;

    const statement = db.prepare(`
      INSERT INTO bmi_records
      (
        user_id,
        height_feet,
        height_inches,
        weight_kg,
        bmi,
        category
      )
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    const result = statement.run(
      userId,
      Number(heightFeet),
      Number(heightInches),
      Number(weightKg),
      Number(bmi),
      category
    );

    res.json({
      message: "BMI record saved successfully.",
      recordId: result.lastInsertRowid
    });

  } catch (error) {
    console.error("BMI save error:", error);

    res.status(500).json({
      message: "Unable to save BMI record."
    });
  }
});

app.post("/api/period", requireAuth, async (req, res) => {
  try {
    const {
      lastPeriodDate,
      cycleLength,
      periodDuration
    } = req.body;

    if (
      !lastPeriodDate ||
      cycleLength === undefined ||
      periodDuration === undefined
    ) {
      return res.status(400).json({
        message: "Please provide all period tracker information."
      });
    }

    const userId = req.user.id;

    const statement = db.prepare(`
      INSERT INTO period_records
      (
        user_id,
        last_period_date,
        cycle_length,
        period_duration
      )
      VALUES (?, ?, ?, ?)
    `);

    const result = statement.run(
      userId,
      lastPeriodDate,
      Number(cycleLength),
      Number(periodDuration)
    );

    res.json({
      message: "Period tracker record saved successfully.",
      recordId: result.lastInsertRowid
    });

  } catch (error) {
    console.error("Period tracker save error:", error);

    res.status(500).json({
      message: "Unable to save period tracker record."
    });
  }
});

// ==============================
// WATER INTAKE TRACKER
// ==============================
app.post("/api/water", requireAuth, async (req, res) => {
  try {
    const {
      waterIntake,
      dailyGoal
    } = req.body;

    if (
      waterIntake === undefined ||
      dailyGoal === undefined
    ) {
      return res.status(400).json({
        message: "Please provide water intake information."
      });
    }

    const userId = req.user.id;

    const statement = db.prepare(`
      INSERT INTO water_records
      (
        user_id,
        water_intake,
        daily_goal
      )
      VALUES (?, ?, ?)
    `);

    const result = statement.run(
      userId,
      Number(waterIntake),
      Number(dailyGoal)
    );

    res.json({
      message: "Water intake saved successfully.",
      recordId: result.lastInsertRowid
    });

  } catch (error) {
    console.error("Water intake save error:", error);

    res.status(500).json({
      message: "Unable to save water intake."
    });
  }
});

// ==============================
// NUTRITION / MEAL PLANNER
// ==============================
app.post("/api/nutrition", requireAuth, async (req, res) => {
  try {
    const { planNumber } = req.body;

    if (planNumber === undefined) {
      return res.status(400).json({
        message: "Please provide the meal plan number."
      });
    }

    const userId = req.user.id;

    const statement = db.prepare(`
      INSERT INTO nutrition_records
      (
        user_id,
        plan_number
      )
      VALUES (?, ?)
    `);

    const result = statement.run(
      userId,
      Number(planNumber)
    );

    res.json({
      message: "Nutrition plan saved successfully.",
      recordId: result.lastInsertRowid
    });

  } catch (error) {
    console.error("Nutrition plan save error:", error);

    res.status(500).json({
      message: "Unable to save nutrition plan."
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `SheCare server running on port ${PORT}`
  );
});