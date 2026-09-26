import BackToHome from "../components/BackToHome";
import "./HealthConditions.css";

function HealthConditions() {
  const conditions = [
    {
      icon: "🩸",
      title: "Anemia",
      text: "Anemia can occur when the body does not have enough healthy red blood cells. Iron deficiency is one common cause."
    },
    {
      icon: "🦋",
      title: "Thyroid Conditions",
      text: "Thyroid problems can affect energy, mood, metabolism and other body functions."
    },
    {
      icon: "🌸",
      title: "PCOS",
      text: "Polycystic ovary syndrome can affect menstrual cycles, hormones and other aspects of health."
    },
    {
      icon: "🩺",
      title: "Endometriosis",
      text: "Endometriosis is a condition in which tissue similar to the uterine lining grows outside the uterus."
    },
    {
      icon: "🦴",
      title: "Osteoporosis",
      text: "Osteoporosis causes bones to become weaker and more likely to fracture."
    },
    {
      icon: "❤️",
      title: "Heart Health",
      text: "Heart disease can affect women too, making awareness of heart health and risk factors important."
    }
  ];

  return (
    <div className="conditions-page">

      {/* HERO */}
      <section className="conditions-hero">
        <div className="conditions-hero-content">

          <span className="conditions-label">
            WOMEN'S HEALTH AWARENESS
          </span>

          <h1>
            Common Health Conditions
            <span> in Women</span>
          </h1>

          <p>
            Learn basic information about health conditions
            that may affect women and understand when professional
            medical advice may be important.
          </p>

          <div className="conditions-icon">
            🎗️
          </div>

        </div>
      </section>

      {/* BACK TO Dashboard */}
      <BackToDashboard />

      {/* INTRODUCTION */}
      <section className="conditions-intro">

        <div className="conditions-heading">

          <span>HEALTH AWARENESS</span>

          <h2>Know Your Health</h2>

          <p>
            Understanding common health conditions can help
            you recognize changes in your body and have informed
            conversations with healthcare professionals.
          </p>

        </div>

      </section>

      {/* CONDITIONS */}
      <section className="conditions-section">

        <div className="conditions-heading">

          <span>COMMON CONDITIONS</span>

          <h2>Conditions You Should Know About</h2>

          <p>
            These topics are provided for general awareness
            and do not represent a diagnosis.
          </p>

        </div>

        <div className="conditions-grid">

          {conditions.map((condition, index) => (
            <div
              className="condition-card"
              key={index}
            >

              <div className="condition-card-icon">
                {condition.icon}
              </div>

              <h3>{condition.title}</h3>

              <p>{condition.text}</p>

            </div>
          ))}

        </div>

      </section>

      {/* WARNING / SUPPORT */}
      <section className="conditions-help">

        <div className="conditions-help-icon">
          🩺
        </div>

        <div>
          <h2>When Should You Seek Medical Advice?</h2>

          <p>
            If you experience persistent, unusual or concerning
            symptoms, speak with a qualified healthcare professional.
            Avoid self-diagnosing based only on information found online.
          </p>
        </div>

      </section>

      {/* AWARENESS BANNER */}
      <section className="conditions-banner">

        <div className="conditions-banner-icon">
          🌸
        </div>

        <div>
          <h2>Awareness helps you make informed choices</h2>

          <p>
            Learn about your health, pay attention to changes
            and seek professional guidance when needed.
          </p>
        </div>

      </section>

      {/* DISCLAIMER */}
      <section className="conditions-disclaimer">

        <strong>Health Awareness Disclaimer:</strong>

        <p>
          This information is for educational awareness only.
          It does not provide a diagnosis or replace advice
          from a qualified healthcare professional.
        </p>

      </section>

    </div>
  );
}

export default HealthConditions;