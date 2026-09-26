import BackToHome from "../components/BackToHome";
import "./Hygiene.css";

function Hygiene() {
  const hygieneTips = [
    {
      icon: "🚿",
      title: "Daily Bathing",
      text: "Take a regular bath to keep your body clean and fresh."
    },
    {
      icon: "🧼",
      title: "Hand Hygiene",
      text: "Wash your hands regularly, especially before eating and after using the toilet."
    },
    {
      icon: "🪥",
      title: "Oral Hygiene",
      text: "Brush your teeth twice a day and maintain regular dental care."
    },
    {
      icon: "🩲",
      title: "Intimate Hygiene",
      text: "Keep the intimate area clean and dry. Use gentle products and avoid harsh chemicals."
    },
    {
      icon: "👕",
      title: "Clean Clothes",
      text: "Wear clean clothes and change undergarments regularly."
    },
    {
      icon: "🧴",
      title: "Skin Care",
      text: "Keep your skin clean and moisturized according to your skin needs."
    }
  ];

  return (
    <div className="hygiene-page">

      <section className="hygiene-hero">
        <div className="hygiene-hero-content">
          <span className="hygiene-label">
            WOMEN'S HEALTH AWARENESS
          </span>

          <h1>
            Personal Hygiene
            <span> & Everyday Wellness</span>
          </h1>

          <p>
            Simple hygiene habits can help support women's
            everyday health, comfort and confidence.
          </p>

          <div className="hygiene-icon">🧼</div>
        </div>
      </section>

      <BackToHome />

      <section className="hygiene-section">
        <div className="hygiene-heading">
          <span>DAILY HABITS</span>
          <h2>Healthy Hygiene Practices</h2>
          <p>
            Small daily habits can make an important difference
            in maintaining personal health and well-being.
          </p>
        </div>

        <div className="hygiene-grid">
          {hygieneTips.map((tip, index) => (
            <div className="hygiene-card" key={index}>
              <div className="hygiene-card-icon">
                {tip.icon}
              </div>

              <h3>{tip.title}</h3>

              <p>{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hygiene-banner">
        <div className="hygiene-banner-icon">🌸</div>

        <div>
          <h2>Take care of yourself every day</h2>
          <p>
            Good hygiene is an important part of
            overall health and well-being.
          </p>
        </div>
      </section>

      <section className="hygiene-disclaimer">
        <strong>Health Awareness Disclaimer:</strong>
        <p>
          This information is for educational awareness only
          and should not replace professional medical advice.
        </p>
      </section>

    </div>
  );
}

export default Hygiene;