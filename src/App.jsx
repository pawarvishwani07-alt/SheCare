import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import NutritionPlanner from "./pages/NutritionPlanner";
import WaterTracker from "./pages/WaterTracker";
import About from "./pages/About";
import HealthTopics from "./pages/HealthTopics";
import MenstrualHealth from "./pages/MenstrualHealth";
import Nutrition from "./pages/Nutrition";
import Hygiene from "./pages/Hygiene";
import MentalWellbeing from "./pages/MentalWellbeing";
import PreventiveCare from "./pages/PreventiveCare";
import HealthConditions from "./pages/HealthConditions";
import SelfCare from "./pages/SelfCare";
import Games from "./pages/Games";
import Resources from "./pages/Resources";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/Chatbot";
import BMI from "./pages/BMI";
import PeriodTracker from "./pages/PeriodTracker";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingAI from "./components/FloatingAI";

import "./App.css";


// =========================
// HOME PAGE
// =========================

function Home() {
  return (
    <div className="app">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="welcome-text">
            WELCOME TO SHECARE
          </p>

          <h1>
            Your Health.
            <br />
            Your Awareness.
            <br />
            <span>Your Well-being.</span>
          </h1>

          <p className="hero-description">
            Learn, understand and take care of your health
            with simple and reliable women's health awareness
            information.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Explore Health Topics
            </button>

            <button className="secondary-btn">
              Take Awareness Quiz
            </button>

          </div>

        </div>


        {/* Hero Visual */}
        <div className="hero-visual">

          <div className="main-circle">
            🌸
          </div>

          <div className="floating-card card-one">
            🩷 Menstrual Health
          </div>

          <div className="floating-card card-two">
            🥗 Nutrition
          </div>

          <div className="floating-card card-three">
            🩺 Preventive Care
          </div>

        </div>

      </section>


      {/* Health Topics */}
      <section className="topics" id="topics">

        <div className="section-title">

          <p>EXPLORE</p>

          <h2>Take Care of Your Health</h2>

        </div>


        <div className="topic-container">

          {/* Menstrual Health */}
          <div className="topic-card">

            <div className="topic-icon">
              🩷
            </div>

            <h3>
              Menstrual Health
            </h3>

            <p>
              Learn about periods, menstrual hygiene,
              common symptoms and healthy practices.
            </p>

            <button>
              Learn More →
            </button>

          </div>


          {/* Nutrition */}
          <div className="topic-card">

            <div className="topic-icon">
              🥗
            </div>

            <h3>
              Nutrition
            </h3>

            <p>
              Understand balanced nutrition and
              important nutrients for women's health.
            </p>

            <button>
              Learn More →
            </button>

          </div>


          {/* Hygiene */}
          <div className="topic-card">

            <div className="topic-icon">
              🧼
            </div>

            <h3>
              Personal Hygiene
            </h3>

            <p>
              Learn simple hygiene practices for
              maintaining everyday health.
            </p>

            <button>
              Learn More →
            </button>

          </div>


          {/* Preventive Care */}
          <div className="topic-card">

            <div className="topic-icon">
              🩺
            </div>

            <h3>
              Preventive Care
            </h3>

            <p>
              Understand the importance of regular
              health check-ups and preventive care.
            </p>

            <button>
              Learn More →
            </button>

          </div>

        </div>

      </section>


      {/* Awareness Section */}
      <section className="awareness">

        <div>

          <p className="welcome-text">
            HEALTH AWARENESS
          </p>

          <h2>
            Knowledge is the First Step
            Towards Better Health.
          </h2>

          <p>
            SheCare helps women and girls learn about
            important health topics through simple,
            educational and easy-to-understand information.
          </p>

          <button className="primary-btn">
            Start Exploring
          </button>

        </div>

      </section>


      {/* Disclaimer */}
      <section className="disclaimer">

        <h3>
          Important Information
        </h3>

        <p>
          SheCare is an educational health-awareness platform.
          The information provided is for general awareness and
          does not replace professional medical advice, diagnosis
          or treatment.
        </p>

      </section>


      {/* Home Footer */}
      <Footer />

    </div>
  );
}


// =========================
// PROTECTED ROUTE
// =========================

function ProtectedRoute({ children }) {

  const [checking, setChecking] = useState(true);

  const [authenticated, setAuthenticated] = useState(false);


  useEffect(() => {

    const checkLogin = async () => {

      try {

        const response = await fetch(
          "http://localhost:5000/api/me",
          {
            credentials: "include",
          }
        );


        if (response.ok) {

          setAuthenticated(true);

        } else {

          setAuthenticated(false);

        }

      } catch (error) {

        console.error(
          "Authentication check failed:",
          error
        );

        setAuthenticated(false);

      } finally {

        setChecking(false);

      }

    };


    checkLogin();

  }, []);


  // Checking login
  if (checking) {

    return (
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "16px",
          color: "#d63384",
        }}
      >
        Checking your login...
      </div>
    );

  }


  // Not logged in
  if (!authenticated) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }


  // Logged in
  return children;
}


// =========================
// MAIN APP
// =========================

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ================= ABOUT ================= */}

        <Route
          path="/about"
          element={<About />}
        />


        {/* ================= HEALTH TOPICS ================= */}

        <Route
          path="/topics"
          element={<HealthTopics />}
        />


        {/* ================= MENSTRUAL HEALTH ================= */}

        <Route
          path="/menstrual-health"
          element={<MenstrualHealth />}
        />


        {/* ================= NUTRITION ================= */}

        <Route
          path="/nutrition"
          element={<Nutrition />}
        />


        {/* ================= HYGIENE ================= */}

        <Route
          path="/hygiene"
          element={<Hygiene />}
        />


        {/* ================= MENTAL WELLBEING ================= */}

        <Route
          path="/mental-wellbeing"
          element={<MentalWellbeing />}
        />


        {/* ================= PREVENTIVE CARE ================= */}

        <Route
          path="/preventive-care"
          element={<PreventiveCare />}
        />


        {/* ================= HEALTH CONDITIONS ================= */}

        <Route
          path="/health-conditions"
          element={<HealthConditions />}
        />


        {/* ================= SELF CARE ================= */}

        <Route
          path="/self-care"
          element={<SelfCare />}
        />


        {/* ================= GAMES ================= */}

        <Route
          path="/games"
          element={<Games />}
        />


        {/* ================= RESOURCES ================= */}

        <Route
          path="/resources"
          element={<Resources />}
        />


        {/* ================= REGISTER ================= */}

        <Route
          path="/register"
          element={<Register />}
        />


        {/* ================= LOGIN ================= */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* ================= DASHBOARD ================= */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


        {/* ================= CHATBOT ================= */}

        <Route
          path="/chatbot"
          element={
            <ProtectedRoute>
              <Chatbot />
            </ProtectedRoute>
          }
        />


        {/* ================= BMI ================= */}

        <Route
          path="/bmi"
          element={<BMI />}
        />


        {/* ================= PERIOD TRACKER ================= */}

        <Route
          path="/period-tracker"
          element={<PeriodTracker />}
        />


        {/* ================= WATER TRACKER ================= */}

        <Route
          path="/water-tracker"
          element={<WaterTracker />}
        />


        {/* ================= NUTRITION PLANNER ================= */}

        <Route
          path="/nutrition-planner"
          element={<NutritionPlanner />}
        />


        {/* ================= FALLBACK ================= */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>


      {/* =========================================
          SHECARE AI AGENT
          GLOBAL — AVAILABLE ON EVERY PAGE
      ========================================= */}

      <FloatingAI />

    </BrowserRouter>

  );
}


export default App;