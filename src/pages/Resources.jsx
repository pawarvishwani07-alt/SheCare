import { Link } from "react-router-dom";
import "./Resources.css";

function Resources() {
  return (
    <div className="resources-page">

      {/* Hero Section */}
      <section className="resources-hero">

        <div className="resources-hero-content">
          <span className="resources-badge">
            📚 SheCare Resources
          </span>

          <h1>Health Information & Resources</h1>

          <p>
            Explore reliable health-awareness information,
            useful guidance and trusted resources to help you
            understand women's health better.
          </p>
        </div>

        <div className="resources-hero-icon">
          📖
        </div>

      </section>


      {/* Health Information */}
      <section className="resource-section">

        <div className="section-title">
          <span>🩷</span>

          <div>
            <h2>Health Information</h2>
            <p>Learn about important areas of women's health.</p>
          </div>
        </div>

        <div className="resource-grid">

          <Link to="/menstrual-health" className="resource-card">
            <div className="resource-icon">🩷</div>
            <h3>Menstrual Health</h3>
            <p>
              Learn about menstrual health, hygiene,
              common symptoms and when to seek professional help.
            </p>
            <span>Learn More →</span>
          </Link>

          <Link to="/nutrition" className="resource-card">
            <div className="resource-icon">🥗</div>
            <h3>Nutrition & Diet</h3>
            <p>
              Understand important nutrients and healthy
              eating habits for overall well-being.
            </p>
            <span>Learn More →</span>
          </Link>

          <Link to="/hygiene" className="resource-card">
            <div className="resource-icon">🧼</div>
            <h3>Personal Hygiene</h3>
            <p>
              Discover simple hygiene practices that can
              support everyday health and well-being.
            </p>
            <span>Learn More →</span>
          </Link>

          <Link to="/health-conditions" className="resource-card">
            <div className="resource-icon">🩺</div>
            <h3>Health Conditions</h3>
            <p>
              Explore general awareness information about
              common women's health conditions.
            </p>
            <span>Learn More →</span>
          </Link>

        </div>

      </section>


      {/* Mental Well-being */}
      <section className="resource-section">

        <div className="section-title">
          <span>🧠</span>

          <div>
            <h2>Mental Well-being</h2>
            <p>Take care of your emotional and mental well-being.</p>
          </div>
        </div>

        <div className="resource-highlight">

          <div className="highlight-icon">
            🌿
          </div>

          <div>
            <h3>Understanding Mental Well-being</h3>

            <p>
              Learn about stress management, healthy sleep,
              emotional care, relaxation and the importance
              of asking for support when needed.
            </p>

            <Link to="/mental-wellbeing">
              Explore Mental Well-being →
            </Link>
          </div>

        </div>

      </section>


      {/* Preventive Care */}
      <section className="resource-section">

        <div className="section-title">
          <span>🩺</span>

          <div>
            <h2>Preventive Care</h2>
            <p>Learn how awareness and regular care can support health.</p>
          </div>
        </div>

        <div className="resource-highlight">

          <div className="highlight-icon">
            🔍
          </div>

          <div>
            <h3>Stay Aware of Your Health</h3>

            <p>
              Learn about routine health check-ups, preventive
              screenings, vaccinations, healthy lifestyle habits
              and knowing your health history.
            </p>

            <Link to="/preventive-care">
              Explore Preventive Care →
            </Link>
          </div>

        </div>

      </section>


      {/* Trusted Resources */}
      <section className="resource-section">

        <div className="section-title">
          <span>🌐</span>

          <div>
            <h2>Trusted Health Resources</h2>
            <p>
              Use reliable sources when looking for additional
              health information.
            </p>
          </div>
        </div>

        <div className="trusted-grid">

          <div className="trusted-card">
            <div className="trusted-icon">🏥</div>

            <h3>Healthcare Professionals</h3>

            <p>
              For personal symptoms, concerns or medical
              decisions, consult a qualified healthcare professional.
            </p>
          </div>

          <div className="trusted-card">
            <div className="trusted-icon">🏛️</div>

            <h3>Government Health Services</h3>

            <p>
              Prefer official government health departments
              and public health services for verified information.
            </p>
          </div>

          <div className="trusted-card">
            <div className="trusted-icon">📖</div>

            <h3>Reliable Health Information</h3>

            <p>
              Check whether health information comes from
              recognized medical or public health organizations.
            </p>
          </div>

        </div>

      </section>


      {/* AI Assistant */}
      <section className="resource-ai">

        <div className="resource-ai-icon">
          🤖
        </div>

        <div className="resource-ai-content">

          <span>SheCare AI Assistant</span>

          <h2>Have a health-awareness question?</h2>

          <p>
            Ask the SheCare AI Assistant for general
            women's health-awareness information.
          </p>

          <Link to="/chatbot">
            Ask SheCare AI →
          </Link>

        </div>

      </section>


      {/* Important Notice */}
      <section className="resource-notice">

        <div className="notice-icon">
          💡
        </div>

        <div>
          <h3>Important Health Notice</h3>

          <p>
            SheCare provides general health-awareness and
            educational information. It is not a substitute
            for professional medical advice, diagnosis or treatment.
            For personal health concerns, consult a qualified
            healthcare professional.
          </p>
        </div>

      </section>


      {/* Back */}
      <div className="resources-bottom">

        <Link to="/dashboard" className="resources-dashboard-btn">
          ← Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default Resources;