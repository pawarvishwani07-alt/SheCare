import { Link } from "react-router-dom";
import "./SelfCare.css";

function SelfCare() {
  const selfCareTips = [
    {
      icon: "🧘‍♀️",
      title: "Relaxation",
      text: "Take some quiet time for yourself through breathing exercises, meditation or other relaxing activities."
    },
    {
      icon: "😴",
      title: "Healthy Sleep",
      text: "Maintain a regular sleep routine and give your body enough time to rest and recover."
    },
    {
      icon: "🥗",
      title: "Healthy Eating",
      text: "Choose a balanced variety of foods and stay hydrated throughout the day."
    },
    {
      icon: "🚶‍♀️",
      title: "Stay Active",
      text: "Include physical activity that you enjoy, such as walking, stretching, dancing or exercise."
    },
    {
      icon: "📖",
      title: "Personal Time",
      text: "Make time for hobbies, reading, music or activities that help you feel refreshed."
    },
    {
      icon: "💗",
      title: "Emotional Care",
      text: "Recognize your feelings and talk to someone you trust when you need support."
    }
  ];

  return (
    <div className="selfcare-page">

      {/* HERO */}
      <section className="selfcare-hero">
        <div className="selfcare-hero-content">

          <span className="selfcare-label">
            WOMEN'S HEALTH AWARENESS
          </span>

          <h1>
            Self-Care
            <span> & Everyday Wellness</span>
          </h1>

          <p>
            Self-care means taking time to support your physical,
            emotional and mental well-being.
          </p>

          <div className="selfcare-icon">🌸</div>

        </div>
      </section>

      {/* BACK TO DASHBOARD */}
      <div className="back-home-container">
        <Link to="/dashboard" className="back-home-btn">
          ← Back to Dashboard
        </Link>
      </div>

      {/* INTRO */}
      <section className="selfcare-intro">

        <div className="selfcare-heading">

          <span>TAKE CARE OF YOURSELF</span>

          <h2>Why Self-Care Matters</h2>

          <p>
            Self-care is not only about relaxation. It includes
            healthy everyday habits that support your overall
            health and well-being.
          </p>

        </div>

      </section>

      {/* SELF CARE CARDS */}
      <section className="selfcare-section">

        <div className="selfcare-heading">

          <span>HEALTHY HABITS</span>

          <h2>Simple Ways to Practice Self-Care</h2>

          <p>
            Choose healthy habits that fit comfortably into
            your daily routine.
          </p>

        </div>

        <div className="selfcare-grid">

          {selfCareTips.map((tip, index) => (
            <div className="selfcare-card" key={index}>

              <div className="selfcare-card-icon">
                {tip.icon}
              </div>

              <h3>{tip.title}</h3>

              <p>{tip.text}</p>

            </div>
          ))}

        </div>

      </section>

      {/* SELF CARE CHECKLIST */}
      <section className="selfcare-checklist">

        <div className="checklist-content">

          <div className="checklist-icon">
            ✅
          </div>

          <div>
            <h2>Your Daily Self-Care Checklist</h2>

            <ul>
              <li>Drink enough water</li>
              <li>Get adequate rest</li>
              <li>Eat balanced meals</li>
              <li>Move your body</li>
              <li>Take some personal time</li>
              <li>Check in with your emotions</li>
            </ul>
          </div>

        </div>

      </section>

      {/* SUPPORT */}
      <section className="selfcare-support">

        <div className="selfcare-support-icon">
          🤝
        </div>

        <div>
          <h2>Asking for Help Is Also Self-Care</h2>

          <p>
            You do not have to handle everything alone. Talking
            to a trusted person or qualified professional can
            be an important part of taking care of yourself.
          </p>
        </div>

      </section>

      {/* BANNER */}
      <section className="selfcare-banner">

        <div className="selfcare-banner-icon">
          💗
        </div>

        <div>
          <h2>Make yourself a priority</h2>

          <p>
            Small healthy habits can become an important part
            of your everyday wellness.
          </p>
        </div>

      </section>

      {/* DISCLAIMER */}
      <section className="selfcare-disclaimer">

        <strong>Health Awareness Disclaimer:</strong>

        <p>
          This information is provided for educational awareness
          only and should not replace professional medical advice.
        </p>

      </section>

    </div>
  );
}

export default SelfCare;