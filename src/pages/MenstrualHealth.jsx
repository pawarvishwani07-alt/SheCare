import BackToHome from "../components/BackToHome";
import "./MenstrualHealth.css";

function MenstrualHealth() {
  return (
    <div className="menstrual-page">


      {/* Hero */}
      <section className="menstrual-hero">

        <div className="menstrual-hero-content">
          <p className="page-label">
            SHECARE • HEALTH AWARENESS
          </p>

          <h1>
            Understanding
            <br />
            <span>Menstrual Health</span>
          </h1>

          <p>
            Learn about periods, menstrual hygiene, common
            symptoms and healthy practices in a simple and
            easy-to-understand way.
          </p>
        </div>

        <div className="menstrual-icon">
          🩸
        </div>

      </section>
      <BackToHome />


      {/* Introduction */}
      <section className="menstrual-section">

        <div className="section-heading">
          <p>KNOW YOUR BODY</p>

          <h2>What is Menstruation?</h2>
        </div>

        <div className="info-box">

          <p>
            Menstruation, commonly called a period, is a natural
            part of the menstrual cycle. It occurs when the lining
            of the uterus is shed and leaves the body through the
            vagina.
          </p>

          <p>
            Periods can vary from person to person. Understanding
            your menstrual cycle can help you notice changes and
            take better care of your health.
          </p>

        </div>

      </section>


      {/* Hygiene */}
      <section className="menstrual-section light-section">

        <div className="section-heading">
          <p>STAY HEALTHY</p>

          <h2>Menstrual Hygiene</h2>

          <span>
            Simple practices can help maintain menstrual hygiene.
          </span>
        </div>

        <div className="hygiene-grid">

          <div className="hygiene-card">
            <div>🩷</div>
            <h3>Change Period Products</h3>
            <p>
              Change pads, tampons or other menstrual products
              regularly according to their instructions and your
              flow.
            </p>
          </div>

          <div className="hygiene-card">
            <div>🧼</div>
            <h3>Maintain Cleanliness</h3>
            <p>
              Keep the genital area clean and wash regularly with
              water and gentle products when appropriate.
            </p>
          </div>

          <div className="hygiene-card">
            <div>🗑️</div>
            <h3>Dispose Properly</h3>
            <p>
              Wrap and dispose of used disposable menstrual
              products safely and hygienically.
            </p>
          </div>

          <div className="hygiene-card">
            <div>💧</div>
            <h3>Stay Hydrated</h3>
            <p>
              Drink enough water and maintain healthy daily
              habits during your period.
            </p>
          </div>

        </div>

      </section>


      {/* Common Symptoms */}
      <section className="menstrual-section">

        <div className="section-heading">
          <p>COMMON EXPERIENCES</p>

          <h2>Common Period Symptoms</h2>
        </div>

        <div className="symptoms-list">

          <div>✓ Abdominal cramps</div>
          <div>✓ Back pain</div>
          <div>✓ Bloating</div>
          <div>✓ Mood changes</div>
          <div>✓ Tiredness</div>
          <div>✓ Headache</div>

        </div>

      </section>


      {/* When to seek help */}
      <section className="help-section">

        <div>
          <p className="page-label">
            IMPORTANT
          </p>

          <h2>
            When should you seek
            <br />
            professional help?
          </h2>

          <p>
            If you experience unusually severe pain, very heavy
            bleeding, significant changes in your usual cycle,
            fainting, or other concerning symptoms, consider
            speaking with a qualified healthcare professional.
          </p>
        </div>

        <div className="help-icon">
          🩺
        </div>

      </section>


      {/* Disclaimer */}
      <section className="menstrual-disclaimer">

        <h3>Important Information</h3>

        <p>
          SheCare provides general health-awareness information
          for educational purposes. It does not replace advice,
          diagnosis or treatment from a qualified healthcare
          professional.
        </p>

      </section>

    </div>
  );
}

export default MenstrualHealth;