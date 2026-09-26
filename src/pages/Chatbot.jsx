import { useState } from "react";
import { Link } from "react-router-dom";
import "./Chatbot.css";

function getSheCareResponse(input) {
  const text = input.toLowerCase().trim();

  // ================= GREETING =================

  if (
    /^(hi|hello|hey|hii|hiii|good morning|good afternoon|good evening)$/.test(
      text
    )
  ) {
    return {
      text: "Hello! 👋 I'm SheCare AI. How can I help you today?",
      showGoogle: false
    };
  }

  // ================= THANK YOU =================

  if (
    text === "thank" ||
    text === "thanks" ||
    text === "thank you" ||
    text.includes("thank you so much")
  ) {
    return {
      text: "You're very welcome! 💗 I'm always happy to help.",
      showGoogle: false
    };
  }

  // ================= SORRY =================

  if (
    text === "sorry" ||
    text === "i am sorry" ||
    text === "i'm sorry"
  ) {
    return {
      text:
        "That's completely okay! 😊 You can ask me anything about women's health awareness.",
      showGoogle: false
    };
  }

  // ================= HELP =================

  if (
    text === "help" ||
    text === "help me" ||
    text === "what can you do" ||
    text === "how can you help"
  ) {
    return {
      text:
        "I can help you with women's health awareness topics such as periods, menstrual hygiene, nutrition, hydration, stress, sleep, self-care, PCOS, thyroid health, and exercise. 🌸",
      showGoogle: false
    };
  }

  // ================= PERIODS =================

  if (
    text.includes("period") ||
    text.includes("menstruation") ||
    text.includes("menstrual cycle")
  ) {
    return {
      text:
        "A menstrual cycle is the regular process in which the body prepares for a possible pregnancy. Cycle length and period length can vary between people. Tracking your cycle can help you understand your personal pattern.",
      showGoogle: true
    };
  }

  // ================= PERIOD PAIN =================

  if (
    text.includes("period pain") ||
    text.includes("period cramps") ||
    text.includes("cramps") ||
    text.includes("menstrual pain")
  ) {
    return {
      text:
        "Mild period cramps are common and may improve with rest, gentle movement, a warm compress, hydration, and relaxation. If the pain is severe, unusual, suddenly worse, or affects daily activities, speak with a healthcare professional.",
      showGoogle: true
    };
  }

  // ================= HEAVY BLEEDING =================

  if (
    text.includes("heavy period") ||
    text.includes("heavy bleeding") ||
    text.includes("too much bleeding")
  ) {
    return {
      text:
        "Heavy or unusually long menstrual bleeding can have different causes. If bleeding is very heavy, lasts unusually long, happens repeatedly, or makes you feel weak or unwell, seek medical advice.",
      showGoogle: true
    };
  }

  // ================= IRREGULAR PERIOD =================

  if (
    text.includes("irregular period") ||
    text.includes("late period") ||
    text.includes("missed period") ||
    text.includes("period is late")
  ) {
    return {
      text:
        "Periods can sometimes become irregular because of stress, changes in routine, weight changes, exercise, hormonal changes, or other factors. If irregular or missed periods continue, consider discussing them with a healthcare professional.",
      showGoogle: true
    };
  }

  // ================= MENSTRUAL HYGIENE =================

  if (
    text.includes("period hygiene") ||
    text.includes("menstrual hygiene") ||
    text.includes("sanitary pad") ||
    text.includes("pad hygiene")
  ) {
    return {
      text:
        "Good menstrual hygiene includes changing menstrual products regularly, washing your hands before and after changing them, keeping the genital area clean, and disposing of used products properly.",
      showGoogle: true
    };
  }

  // ================= NUTRITION =================

  if (
    text.includes("nutrition") ||
    text.includes("healthy food") ||
    text.includes("healthy diet") ||
    text.includes("what should i eat")
  ) {
    return {
      text:
        "A balanced diet can include vegetables, fruits, whole grains, protein sources, healthy fats, and enough fluids. Iron, calcium, protein, and important vitamins are useful nutrients to include in a balanced diet.",
      showGoogle: true
    };
  }

  // ================= IRON =================

  if (
    text.includes("iron") ||
    text.includes("iron rich") ||
    text.includes("anemia")
  ) {
    return {
      text:
        "Iron is important for making healthy red blood cells. Iron-containing foods include beans, lentils, leafy green vegetables, fortified foods, eggs, and meat. If you think you may have anemia, a healthcare professional can help determine the cause.",
      showGoogle: true
    };
  }

  // ================= WATER =================

  if (
    text.includes("water") ||
    text.includes("hydration") ||
    text.includes("dehydration") ||
    text.includes("drink water")
  ) {
    return {
      text:
        "Staying hydrated supports normal body functions. Drink water regularly throughout the day and pay attention to increased fluid needs during hot weather or physical activity.",
      showGoogle: true
    };
  }

  // ================= SLEEP =================

  if (
    text.includes("sleep") ||
    text.includes("can't sleep") ||
    text.includes("cannot sleep") ||
    text.includes("insomnia")
  ) {
    return {
      text:
        "Good sleep supports physical and emotional well-being. Try keeping a regular sleep schedule, reducing screen use before bed, creating a comfortable sleep environment, and following a relaxing bedtime routine.",
      showGoogle: true
    };
  }

  // ================= STRESS =================

  if (
    text.includes("stress") ||
    text.includes("stressed") ||
    text.includes("tension")
  ) {
    return {
      text:
        "Stress can affect physical and emotional well-being. Helpful habits may include regular movement, enough sleep, relaxation exercises, talking with someone you trust, and taking time for yourself.",
      showGoogle: true
    };
  }

  // ================= MENTAL WELL-BEING =================

  if (
    text.includes("mental health") ||
    text.includes("mental wellbeing") ||
    text.includes("feeling sad") ||
    text.includes("anxiety") ||
    text.includes("depressed")
  ) {
    return {
      text:
        "Mental well-being is an important part of overall health. Talking with someone you trust, maintaining healthy routines, staying active, getting enough sleep, and taking breaks can help. If difficult feelings continue or interfere with daily life, consider speaking with a qualified mental health professional.",
      showGoogle: true
    };
  }

  // ================= HYGIENE =================

  if (
    text.includes("hygiene") ||
    text.includes("personal hygiene") ||
    text.includes("cleanliness")
  ) {
    return {
      text:
        "Good personal hygiene includes regular bathing, handwashing, oral care, clean clothes, skin care, and appropriate intimate hygiene. These habits can support general health and comfort.",
      showGoogle: true
    };
  }

  // ================= SELF CARE =================

  if (
    text.includes("self care") ||
    text.includes("self-care") ||
    text.includes("take care of myself") ||
    text.includes("relax")
  ) {
    return {
      text:
        "Self-care means taking regular care of your physical and emotional well-being. Healthy food, enough sleep, movement, relaxation, personal time, and staying connected with supportive people are useful parts of self-care.",
      showGoogle: true
    };
  }

  // ================= EXERCISE =================

  if (
    text.includes("exercise") ||
    text.includes("workout") ||
    text.includes("physical activity")
  ) {
    return {
      text:
        "Regular physical activity can support overall health, strength, mood, and well-being. Comfortable activities can include walking, stretching, yoga, swimming, or other enjoyable movement.",
      showGoogle: true
    };
  }

  // ================= PCOS =================

  if (
    text.includes("pcos") ||
    text.includes("polycystic ovary")
  ) {
    return {
      text:
        "PCOS is a hormonal condition that can affect menstrual cycles, ovulation, skin, hair, and metabolism. Symptoms can vary between people. If you are concerned about possible PCOS, a healthcare professional can evaluate your symptoms.",
      showGoogle: true
    };
  }

  // ================= THYROID =================

  if (
    text.includes("thyroid") ||
    text.includes("thyroid problem")
  ) {
    return {
      text:
        "The thyroid helps regulate several body functions, including metabolism. Thyroid conditions can affect energy, weight, temperature sensitivity, and menstrual patterns. Persistent symptoms should be discussed with a healthcare professional.",
      showGoogle: true
    };
  }

  // ================= ENDOMETRIOSIS =================

  if (text.includes("endometriosis")) {
    return {
      text:
        "Endometriosis is a condition in which tissue similar to the lining of the uterus grows outside the uterus. It can cause pelvic pain, painful periods, or other symptoms. A healthcare professional can help with evaluation and treatment.",
      showGoogle: true
    };
  }

  // ================= BONE HEALTH =================

  if (
    text.includes("osteoporosis") ||
    text.includes("bone health")
  ) {
    return {
      text:
        "Bone health is supported by adequate calcium and vitamin D, regular weight-bearing activity, healthy nutrition, and other healthy habits. Individual needs can vary, so discuss concerns with a healthcare professional.",
      showGoogle: true
    };
  }

  // ================= PREGNANCY =================

  if (
    text.includes("pregnant") ||
    text.includes("pregnancy")
  ) {
    return {
      text:
        "Pregnancy-related questions can depend on individual circumstances. For concerns about pregnancy, pregnancy symptoms, medicines, or prenatal care, a qualified healthcare professional should provide personalized guidance.",
      showGoogle: true
    };
  }

  // ================= DOCTOR =================

  if (
    text.includes("doctor") ||
    text.includes("medical help") ||
    text.includes("should i see a doctor")
  ) {
    return {
      text:
        "If a symptom is severe, persistent, unusual, getting worse, or affecting your normal activities, it is a good idea to seek advice from a healthcare professional. SheCare AI provides general health awareness information and does not replace medical care.",
      showGoogle: false
    };
  }

  // ================= EMERGENCY =================

  if (
    text.includes("emergency") ||
    text.includes("fainting") ||
    text.includes("unconscious") ||
    text.includes("difficulty breathing") ||
    text.includes("can't breathe") ||
    text.includes("cannot breathe")
  ) {
    return {
      text:
        "If someone has a serious or potentially life-threatening problem, seek immediate emergency medical help rather than relying on an AI assistant.",
      showGoogle: false
    };
  }

  // ================= UNKNOWN QUESTION =================

  return {
    text:
      "I'm SheCare AI 🌸. I currently focus on women's health awareness. You can ask me about periods, period pain, menstrual hygiene, nutrition, hydration, sleep, stress, self-care, exercise, PCOS, thyroid health, or when to seek medical help.",
    showGoogle: true
  };
}


function Chatbot() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "Hello! 👋 I'm SheCare AI. How can I help you today?"
    }
  ]);

  const [loading, setLoading] = useState(false);


  // Google Search
  const searchGoogle = (query) => {
    const googleUrl =
      "https://www.google.com/search?q=" +
      encodeURIComponent(query);

    window.open(
      googleUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };


  // Send message
  const handleSend = (e) => {
    e.preventDefault();

    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    // Add user message
    setMessages((previousMessages) => [
      ...previousMessages,
      {
        sender: "user",
        text: userMessage
      }
    ]);

    setMessage("");
    setLoading(true);


    // Small delay for natural chatbot effect
    setTimeout(() => {

      const result =
        getSheCareResponse(userMessage);

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: "bot",
          text: result.text,
          searchQuery: result.showGoogle
            ? userMessage
            : null
        }
      ]);

      setLoading(false);

    }, 500);
  };


  return (
    <div className="chatbot-page">

      <div className="chatbot-container">


        {/* ================= HEADER ================= */}

        <div className="chatbot-header">

          <div className="chatbot-profile">

            <div className="chatbot-icon">

              <img
                src="/shecare-ai-logo.png"
                alt="SheCare AI"
              />

            </div>


            <div className="chatbot-title">

              <h1>
                SheCare AI Assistant
              </h1>


              <div className="chatbot-status">

                <span className="status-dot"></span>

                <span>
                  Online
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* ================= NOTICE ================= */}

        <div className="chatbot-notice">

          <div className="notice-symbol">
            💡
          </div>


          <div className="notice-text">

            <strong>
              Women's Health Assistant
            </strong>

            <p>
              Ask about periods, nutrition,
              hygiene, hydration, sleep,
              stress, or self-care.
            </p>

          </div>

        </div>


        {/* ================= CHAT MESSAGES ================= */}

        <div className="chat-messages">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`message ${msg.sender}`}
            >

              {msg.sender === "bot" && (

                <div className="message-avatar">

                  <img
                    src="/shecare-ai-logo.png"
                    alt="SheCare AI"
                  />

                </div>

              )}


              <div className="message-content">

                <span className="message-name">

                  {msg.sender === "bot"
                    ? "SheCare AI"
                    : "You"}

                </span>


                <div className="message-bubble">

                  {msg.text}

                </div>


                {/* GOOGLE SEARCH ONLY WHEN NEEDED */}

                {msg.sender === "bot" &&
                  msg.searchQuery && (

                    <button
                      type="button"
                      className="google-search-btn"
                      onClick={() =>
                        searchGoogle(
                          msg.searchQuery
                        )
                      }
                    >
                      🔎 Search on Google
                    </button>

                  )}

              </div>

            </div>

          ))}


          {/* ================= THINKING ================= */}

          {loading && (

            <div className="message bot">

              <div className="message-avatar">

                <img
                  src="/shecare-ai-logo.png"
                  alt="SheCare AI"
                />

              </div>


              <div className="message-content">

                <span className="message-name">
                  SheCare AI
                </span>


                <div className="message-bubble typing-bubble">

                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>

                </div>

              </div>

            </div>

          )}

        </div>


        {/* ================= INPUT ================= */}

        <form
          className="chat-input-area"
          onSubmit={handleSend}
        >

          <input
            type="text"
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            placeholder="Ask SheCare AI..."
            disabled={loading}
          />


          <button
            type="submit"
            disabled={
              loading ||
              !message.trim()
            }
          >

            {loading
              ? "..."
              : "Send"}

            {!loading && (
              <span className="send-icon">
                ➤
              </span>
            )}

          </button>

        </form>


        {/* ================= FOOTER ================= */}

        <div className="chatbot-footer">

          <Link to="/dashboard">
            ← Back to Dashboard
          </Link>


          <span>
            SheCare • Health Awareness
          </span>

        </div>

      </div>

    </div>
  );
}

export default Chatbot;
