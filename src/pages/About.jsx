import BackToHome from "../components/BackToHome";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* About Hero */}
      <section className="about-hero">
        <p className="about-label">ABOUT SHECARE</p>

        <h1>
          Understanding Health.
          <br />
          <span>Empowering Women.</span>
        </h1>

        <p>
          SheCare is a women's health awareness platform
          created to make important health information simple,
          accessible and easy to understand.
        </p>
      </section>
      <BackToHome />


      {/* Mission */}
      <section className="about-section">

        <div className="about-card">
          <div className="about-icon">🌸</div>

          <h2>Our Mission</h2>

          <p>
            Our mission is to improve women's health awareness
            by providing organized educational information about
            important health topics and healthy lifestyle practices.
          </p>
        </div>


        <div className="about-card">
          <div className="about-icon">💗</div>

          <h2>Why SheCare?</h2>

          <p>
            Many women may have questions about their health but
            may not know where to find simple and understandable
            information. SheCare brings important awareness topics
            together in one platform.
          </p>
        </div>

      </section>


      {/* What We Cover */}
      <section className="what-we-cover">

        <p className="about-label">WHAT WE COVER</p>

        <h2>
          Learn. Understand. Take Care.
        </h2>

        <div className="cover-grid">

          <div className="cover-card">
            <span>🩸</span>
            <h3>Menstrual Health</h3>
            <p>
              Awareness about periods, hygiene and
              common menstrual concerns.
            </p>
          </div>

          <div className="cover-card">
            <span>🥗</span>
            <h3>Nutrition</h3>
            <p>
              Learn about balanced nutrition and
              important nutrients.
            </p>
          </div>

          <div className="cover-card">
            <span>🧼</span>
            <h3>Hygiene</h3>
            <p>
              Learn healthy personal and menstrual
              hygiene practices.
            </p>
          </div>

          <div className="cover-card">
            <span>🧠</span>
            <h3>Mental Well-being</h3>
            <p>
              Awareness about stress, emotional
              well-being and self-care.
            </p>
          </div>

          <div className="cover-card">
            <span>🩺</span>
            <h3>Preventive Care</h3>
            <p>
              Understand the importance of regular
              health check-ups.
            </p>
          </div>

          <div className="cover-card">
            <span>📚</span>
            <h3>Health Education</h3>
            <p>
              Simple educational information to
              encourage better health awareness.
            </p>
          </div>

        </div>

      </section>


      {/* Disclaimer */}
      <section className="about-disclaimer">

        <h3>Important Information</h3>

        <p>
          SheCare is an educational health-awareness platform.
          It does not provide medical diagnosis or treatment.
          Users should consult qualified healthcare professionals
          for personal medical concerns.
        </p>

      </section>

    </div>
  );
}

export default About;