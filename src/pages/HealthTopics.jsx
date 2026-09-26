import BackToHome from "../components/BackToHome";
import { Link } from "react-router-dom";
import "./HealthTopics.css";

function HealthTopics() {
  const topics = [
    {
      icon: "🩸",
      title: "Menstrual Health",
      description:
        "Learn about periods, menstrual hygiene, cycle awareness and common menstrual concerns.",
      link: "/menstrual-health",
    },
    {
      icon: "🥗",
      title: "Nutrition & Diet",
      description:
        "Understand balanced nutrition, essential nutrients and healthy eating habits.",
      link: "/nutrition",
    },
    {
      icon: "🧼",
      title: "Personal Hygiene",
      description:
        "Learn simple hygiene practices that support everyday health and well-being.",
      link: "/hygiene",
    },
    {
      icon: "🧠",
      title: "Mental Well-being",
      description:
        "Learn about stress, emotional well-being, self-care and maintaining a healthy mind.",
      link: "/mental-wellbeing",
    },
    {
      icon: "🩺",
      title: "Preventive Care",
      description:
        "Understand regular health check-ups, screenings and healthy preventive practices.",
      link: "/preventive-care",
    }, 
    {
      icon: "🎗️",
      title: "Common Health Conditions",
      description:
        "Learn basic awareness about health conditions that commonly affect women.",
      link: "/health-conditions",
    },
  ];

  return (
    <div className="health-topics-page">

      {/* Page Header */}
      <section className="topics-hero">

        <div className="topics-hero-content">

          <p className="topics-label">
            SHECARE • HEALTH EDUCATION
          </p>

          <h1>
            Women's Health
            <br />
            <span>Topics</span>
          </h1>

          <p>
            Explore important women's health topics and learn
            simple, reliable information to improve health awareness
            and everyday well-being.
          </p>

        </div>

        <div className="topics-hero-icon">
          🌸
        </div>

      </section>


      {/* Topics Section */}
      <section className="all-topics">

        <div className="topics-heading">

          <p>EXPLORE TOPICS</p>

          <h2>
            Learn About Your Health
          </h2>

          <span>
            Choose a topic to learn more.
          </span>

        </div>


        <div className="health-topic-grid">

          {topics.map((topic, index) => (

            <div className="health-topic-card" key={index}>

              <div className="health-topic-icon">
                {topic.icon}
              </div>

              <h3>
                {topic.title}
              </h3>

              <p>
                {topic.description}
              </p>

              <Link
                to={topic.link}
                className="topic-learn-btn"
              >
                Learn More →
              </Link>

            </div>

          ))}

        </div>

      </section>


      {/* Awareness Banner */}
      <section className="health-awareness-banner">

        <div>

          <p>HEALTH AWARENESS</p>

          <h2>
            Small Steps Can Make
            <br />
            a Big Difference.
          </h2>

          <p>
            Understanding your body and health can help you
            make informed decisions and seek professional
            care when needed.
          </p>

        </div>

        <div className="banner-icon">
          💗
        </div>

      </section>


      {/* Disclaimer */}
      <section className="topics-disclaimer">

        <h3>Important Information</h3>

        <p>
          The information provided by SheCare is for general
          health awareness and educational purposes only. It is
          not a substitute for professional medical advice,
          diagnosis or treatment.
        </p>

      </section>

      
      {/* BACK TO Dashboard */}
<div className="back-home-container">
  <Link to="/dashboard" className="back-home-btn">
    ← Back to Dashboard
  </Link>
</div>

    </div>
  );
}

export default HealthTopics;