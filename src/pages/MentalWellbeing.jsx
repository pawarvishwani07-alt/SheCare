import BackToHome from "../components/BackToHome";
import "./MentalWellbeing.css";

function MentalWellbeing() {
  const wellbeingTips = [
    {
      icon: "🧘‍♀️",
      title: "Manage Stress",
      text: "Take short breaks, practice relaxation and give yourself time to rest."
    },
    {
      icon: "😴",
      title: "Get Enough Sleep",
      text: "A regular sleep routine can support your mood, energy and overall well-being."
    },
    {
      icon: "💬",
      title: "Talk to Someone",
      text: "Sharing your feelings with someone you trust can help you feel supported."
    },
    {
      icon: "🚶‍♀️",
      title: "Stay Active",
      text: "Regular physical activity can support both physical and emotional well-being."
    },
    {
      icon: "❤️",
      title: "Practice Self-Care",
      text: "Make time for activities that help you relax, recharge and feel comfortable."
    },
    {
      icon: "🌿",
      title: "Take Time to Relax",
      text: "Try activities such as breathing exercises, reading, music or spending time outdoors."
    }
  ];

  return (
    <div className="mental-page">

      {/* HERO */}
      <section className="mental-hero">
        <div className="mental-hero-content">

          <span className="mental-label">
            WOMEN'S HEALTH AWARENESS
          </span>

          <h1>
            Mental Well-being
            <span> & Emotional Health</span>
          </h1>

          <p>
            Understanding your emotions and taking care of
            your mental well-being are important parts of a healthy life.
          </p>

          <div className="mental-icon">🧠</div>

        </div>
      </section>

      {/* BACK TO HOME */}
      <BackToHome />

      {/* INTRODUCTION */}
      <section className="mental-intro">

        <div className="mental-heading">
          <span>UNDERSTAND YOUR WELL-BEING</span>

          <h2>Why Mental Well-being Matters</h2>

          <p>
            Mental well-being affects how we think, feel and
            manage everyday situations. Taking care of your
            mental health is just as important as taking care
            of your physical health.
          </p>
        </div>

      </section>

      {/* TIPS */}
      <section className="mental-section">

        <div className="mental-heading">
          <span>HEALTHY HABITS</span>

          <h2>Ways to Support Your Well-being</h2>

          <p>
            Simple everyday habits can help support emotional
            balance and overall well-being.
          </p>
        </div>

        <div className="mental-grid">

          {wellbeingTips.map((tip, index) => (
            <div className="mental-card" key={index}>

              <div className="mental-card-icon">
                {tip.icon}
              </div>

              <h3>{tip.title}</h3>

              <p>{tip.text}</p>

            </div>
          ))}

        </div>

      </section>

      {/* WHEN TO SEEK HELP */}
      <section className="mental-help">

        <div className="mental-help-icon">
          🤝
        </div>

        <div>
          <h2>When to Seek Support</h2>

          <p>
            If difficult feelings, stress or changes in mood
            are affecting your daily life for a long time,
            consider talking to a qualified mental health
            professional or a trusted person.
          </p>
        </div>

      </section>

      {/* AWARENESS BANNER */}
      <section className="mental-banner">

        <div className="mental-banner-icon">
          🌸
        </div>

        <div>
          <h2>Your mental health matters</h2>

          <p>
            Taking care of yourself is not selfish.
            It is an important part of overall well-being.
          </p>
        </div>

      </section>

      {/* DISCLAIMER */}
      <section className="mental-disclaimer">

        <strong>Health Awareness Disclaimer:</strong>

        <p>
          This information is provided for educational awareness
          only and should not replace professional medical advice.
        </p>

      </section>

    </div>
  );
}

export default MentalWellbeing;