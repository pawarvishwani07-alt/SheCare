import API_URL from "../config";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/me`, 
          {
            credentials: "include",
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        }
      } catch (error) {
        console.error("Failed to load user:", error);
      }
    };

    loadUser();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`${API_URL}/api/logout`, {
        method: "POST",
        credentials: "include",
      });

      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      navigate("/login");
    }
  };

  return (
    <div className="dashboard-page">

      {/* =====================================================
          DASHBOARD HEADER
      ===================================================== */}

      <header className="dashboard-header">

        {/* LOGO */}
        <div className="dashboard-logo">
          <Link to="/">
            <img
              src="/shecare-logo.png"
              alt="SheCare Logo"
            />
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav className="dashboard-nav">

          <Link to="/topics">
            Health Topics
          </Link>

          <Link to="/games">
            Games
          </Link>

          <Link to="/resources">
            Resources
          </Link>

          <Link to="/bmi">
            BMI
          </Link>

          <Link to="/period-tracker">
            Period Tracker
          </Link>

          <Link to="/water-tracker">
            Water Intake
          </Link>

          <Link to="/nutrition-planner">
            Nutrition
          </Link>

          <Link to="/topics">
            Women's Wellness
          </Link>

        </nav>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="dashboard-header-logout"
        >
          Logout
        </button>

      </header>


      {/* =====================================================
          WELCOME SECTION
      ===================================================== */}

      <section className="dashboard-welcome">

        <div className="welcome-text">

          <span className="welcome-badge">
            🌸 SheCare Dashboard
          </span>

          <h1>
            Welcome{user ? `, ${user.name}` : ""}!
          </h1>

          <p>
            Your personal space to learn, understand and take care
            of your health through reliable health awareness information.
          </p>

        </div>

        <div className="welcome-icon">
          🩷
        </div>

      </section>


      {/* =====================================================
          MAIN FEATURES
      ===================================================== */}

      <section className="dashboard-features">

        <div className="dashboard-card">

          <div className="card-icon">🩺</div>

          <h2>Health Topics</h2>

          <p>
            Explore important women's health topics and learn
            about your body, hygiene, nutrition and common conditions.
          </p>

          <Link to="/topics" className="dashboard-card-btn">
            Explore Topics →
          </Link>

        </div>


        <div className="dashboard-card">

          <div className="card-icon">🌿</div>

          <h2>Self-Care</h2>

          <p>
            Discover simple everyday habits that can support
            your physical and emotional well-being.
          </p>

          <Link to="/self-care" className="dashboard-card-btn">
            Explore Self-Care →
          </Link>

        </div>


        <div className="dashboard-card">

          <div className="card-icon">🧠</div>

          <h2>Quiz Game</h2>

          <p>
            Test your knowledge and learn useful facts about
            women's health through an interactive quiz.
          </p>

          <Link to="/games" className="dashboard-card-btn">
            Play Games →
          </Link>

        </div>


        <div className="dashboard-card">

          <div className="card-icon">🤖</div>

          <h2>SheCare AI</h2>

          <p>
            Ask the SheCare AI Assistant general women's
            health-awareness questions.
          </p>

          <Link to="/chatbot" className="dashboard-card-btn">
            Ask SheCare AI →
          </Link>

        </div>


        <div className="dashboard-card">

          <div className="card-icon">📚</div>

          <h2>Resources</h2>

          <p>
            Find useful health-awareness information and
            trusted resources in one place.
          </p>

          <Link to="/resources" className="dashboard-card-btn">
            View Resources →
          </Link>

        </div>


        <div className="dashboard-card">

          <div className="card-icon">💗</div>

          <h2>Women's Wellness</h2>

          <p>
            Build awareness about menstrual health, nutrition,
            hygiene, mental well-being and preventive care.
          </p>

          <Link to="/topics" className="dashboard-card-btn">
            Learn More →
          </Link>

        </div>


        <div className="dashboard-card">

          <div className="card-icon">⚖️</div>

          <h2>BMI Calculator</h2>

          <p>
            Calculate your BMI and understand your general
            weight category for health awareness.
          </p>

          <Link to="/bmi" className="dashboard-card-btn">
            Calculate BMI →
          </Link>

        </div>


        <div className="dashboard-card">

          <div className="card-icon">🌸</div>

          <h2>Period Tracker</h2>

          <p>
            Track your menstrual cycle and understand
            your general cycle pattern and phases.
          </p>

          <Link
            to="/period-tracker"
            className="dashboard-card-btn"
          >
            Track My Cycle →
          </Link>

        </div>


        <div className="dashboard-card">

          <div className="card-icon">💧</div>

          <h2>Water Intake Tracker</h2>

          <p>
            Track your daily water intake and stay hydrated
            throughout the day.
          </p>

          <Link
            to="/water-tracker"
            className="dashboard-card-btn"
          >
            Track Water →
          </Link>

        </div>


        <div className="dashboard-card">

          <div className="card-icon">🥗</div>

          <h2>Nutrition & Meal Planner</h2>

          <p>
            Explore healthy meal ideas and plan balanced
            meals for your day.
          </p>

          <Link
            to="/nutrition-planner"
            className="dashboard-card-btn"
          >
            Plan My Meals →
          </Link>

        </div>

      </section>


      {/* =====================================================
          QUICK ACCESS
      ===================================================== */}

      <section className="dashboard-quick">

        <div className="quick-heading">

          <span>✨</span>

          <div>
            <h2>Quick Access</h2>
            <p>Quickly explore important health topics.</p>
          </div>

        </div>

        <div className="quick-links">

          <Link to="/menstrual-health">
            🩷 Menstrual Health
          </Link>

          <Link to="/nutrition">
            🥗 Nutrition
          </Link>

          <Link to="/hygiene">
            🧼 Hygiene
          </Link>

          <Link to="/mental-wellbeing">
            🧠 Mental Well-being
          </Link>

          <Link to="/preventive-care">
            🩺 Preventive Care
          </Link>

          <Link to="/health-conditions">
            📋 Health Conditions
          </Link>

        </div>

      </section>


      {/* =====================================================
          AWARENESS MESSAGE
      ===================================================== */}

      <section className="dashboard-awareness">

        <div className="awareness-icon">
          🌸
        </div>

        <div>

          <h2>Your Health Matters</h2>

          <p>
            Understanding your health is the first step toward
            making informed decisions. Keep learning, stay aware
            and seek professional medical advice when needed.
          </p>

        </div>

      </section>


      {/* =====================================================
          BOTTOM
      ===================================================== */}

      <div className="dashboard-bottom">

        <Link to="/" className="dashboard-home-btn">
          ← Back to Home
        </Link>

        <button
          onClick={handleLogout}
          className="dashboard-logout-btn"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;