import BackToHome from "../components/BackToHome";
import "./PreventiveCare.css";

function PreventiveCare() {
  const preventiveTips = [
    {
      icon: "🩺",
      title: "Regular Check-ups",
      text: "Regular health check-ups can help you stay aware of changes in your health."
    },
    {
      icon: "🩸",
      title: "Know Your Health",
      text: "Keep track of important health information and discuss concerns with a healthcare professional."
    },
    {
      icon: "🎗️",
      title: "Health Screenings",
      text: "Age-appropriate health screenings can help identify certain health concerns early."
    },
    {
      icon: "💉",
      title: "Vaccinations",
      text: "Stay informed about recommended vaccinations and discuss them with a qualified healthcare professional."
    },
    {
      icon: "🥗",
      title: "Healthy Lifestyle",
      text: "Balanced nutrition, physical activity, adequate sleep and healthy habits support overall well-being."
    },
    {
      icon: "📋",
      title: "Know Your Family History",
      text: "Understanding your family health history can help you discuss possible risk factors with your doctor."
    }
  ];

  return (
    <div className="preventive-page">

      {/* HERO */}
      <section className="preventive-hero">
        <div className="preventive-hero-content">

          <span className="preventive-label">
            WOMEN'S HEALTH AWARENESS
          </span>

          <h1>
            Preventive Care
            <span> & Healthy Living</span>
          </h1>

          <p>
            Prevention and regular health awareness can help
            women make informed decisions about their health.
          </p>

          <div className="preventive-icon">🩺</div>

        </div>
      </section>

      {/* BACK TO HOME */}
      <BackToHome />

      {/* INTRODUCTION */}
      <section className="preventive-intro">

        <div className="preventive-heading">

          <span>STAY INFORMED</span>

          <h2>Why Preventive Care Matters</h2>

          <p>
            Preventive care focuses on maintaining health,
            identifying possible concerns early and making
            informed health decisions.
          </p>

        </div>

      </section>

      {/* PREVENTIVE TIPS */}
      <section className="preventive-section">

        <div className="preventive-heading">

          <span>HEALTHY PRACTICES</span>

          <h2>Important Preventive Habits</h2>

          <p>
            Simple health practices can help you stay informed
            and support your overall well-being.
          </p>

        </div>

        <div className="preventive-grid">

          {preventiveTips.map((tip, index) => (
            <div className="preventive-card" key={index}>

              <div className="preventive-card-icon">
                {tip.icon}
              </div>

              <h3>{tip.title}</h3>

              <p>{tip.text}</p>

            </div>
          ))}

        </div>

      </section>

      {/* WHEN TO GET HELP */}
      <section className="preventive-help">

        <div className="preventive-help-icon">
          💗
        </div>

        <div>
          <h2>Don't Ignore Changes in Your Health</h2>

          <p>
            If you notice unusual, persistent or concerning
            changes in your health, consider discussing them
            with a qualified healthcare professional.
          </p>
        </div>

      </section>

      {/* AWARENESS BANNER */}
      <section className="preventive-banner">

        <div className="preventive-banner-icon">
          🌸
        </div>

        <div>
          <h2>Prevention starts with awareness</h2>

          <p>
            Learn about your health and make informed decisions
            with the help of qualified healthcare professionals.
          </p>
        </div>

      </section>

      {/* DISCLAIMER */}
      <section className="preventive-disclaimer">

        <strong>Health Awareness Disclaimer:</strong>

        <p>
          This information is provided for educational awareness
          only and should not replace professional medical advice.
        </p>

      </section>

    </div>
  );
}

export default PreventiveCare;