import BackToHome from "../components/BackToHome";
import "./Nutrition.css";

function Nutrition() {
  return (
    <div className="nutrition-page">

      {/* Hero */}
      <section className="nutrition-hero">

        <div className="nutrition-hero-content">
          <p className="nutrition-label">
            SHECARE • HEALTH AWARENESS
          </p>

          <h1>
            Nutrition &
            <br />
            <span>Healthy Eating</span>
          </h1>

          <p>
            Learn about balanced nutrition, important nutrients
            and healthy eating habits that support women's health
            and everyday well-being.
          </p>
        </div>

        <div className="nutrition-icon">
          🥗
        </div>

      </section>


      {/* Back to Home */}
      <BackToHome />


      {/* Introduction */}
      <section className="nutrition-section">

        <div className="nutrition-heading">
          <p>KNOW YOUR NUTRITION</p>

          <h2>Why is Nutrition Important?</h2>
        </div>

        <div className="nutrition-info">

          <p>
            Good nutrition provides the body with energy and
            nutrients needed for growth, development and everyday
            activities.
          </p>

          <p>
            A balanced diet can include a variety of fruits,
            vegetables, whole grains, protein-rich foods and
            healthy sources of fats.
          </p>

        </div>

      </section>


      {/* Essential Nutrients */}
      <section className="nutrition-section nutrition-light">

        <div className="nutrition-heading">

          <p>ESSENTIAL NUTRIENTS</p>

          <h2>What Does Your Body Need?</h2>

          <span>
            Different nutrients have different roles in the body.
          </span>

        </div>


        <div className="nutrient-grid">

          <div className="nutrient-card">

            <div className="nutrient-icon">🥬</div>

            <h3>Iron</h3>

            <p>
              Helps the body make healthy red blood cells.
              Iron-rich foods include leafy greens, beans,
              lentils and fortified foods.
            </p>

          </div>


          <div className="nutrient-card">

            <div className="nutrient-icon">🥛</div>

            <h3>Calcium</h3>

            <p>
              Supports strong bones and teeth. Sources include
              dairy products, fortified foods and some leafy
              vegetables.
            </p>

          </div>


          <div className="nutrient-card">

            <div className="nutrient-icon">🍊</div>

            <h3>Vitamins</h3>

            <p>
              Vitamins support many body functions. Eating a
              variety of fruits and vegetables can provide
              different vitamins.
            </p>

          </div>


          <div className="nutrient-card">

            <div className="nutrient-icon">🥜</div>

            <h3>Protein</h3>

            <p>
              Protein helps build and maintain muscles and other
              tissues. Sources include pulses, eggs, dairy,
              nuts and other protein-rich foods.
            </p>

          </div>

        </div>

      </section>


      {/* Healthy Habits */}
      <section className="nutrition-section">

        <div className="nutrition-heading">

          <p>HEALTHY HABITS</p>

          <h2>Simple Ways to Eat Better</h2>

        </div>


        <div className="habits-grid">

          <div className="habit-card">
            <span>✓</span>
            <p>Include a variety of fruits and vegetables.</p>
          </div>

          <div className="habit-card">
            <span>✓</span>
            <p>Choose whole grains and fibre-rich foods.</p>
          </div>

          <div className="habit-card">
            <span>✓</span>
            <p>Drink enough water throughout the day.</p>
          </div>

          <div className="habit-card">
            <span>✓</span>
            <p>Include protein-rich foods in your meals.</p>
          </div>

          <div className="habit-card">
            <span>✓</span>
            <p>Limit excessive highly processed foods.</p>
          </div>

          <div className="habit-card">
            <span>✓</span>
            <p>Try to maintain regular, balanced meals.</p>
          </div>

        </div>

      </section>


      {/* Awareness Banner */}
      <section className="nutrition-banner">

        <div>

          <p>HEALTH AWARENESS</p>

          <h2>
            Nourish Your Body,
            <br />
            Support Your Well-being.
          </h2>

          <p>
            Healthy eating is about balance, variety and
            sustainable habits rather than following extreme
            diets.
          </p>

        </div>

        <div className="nutrition-banner-icon">
          💗
        </div>

      </section>


      {/* Disclaimer */}
      <section className="nutrition-disclaimer">

        <h3>Important Information</h3>

        <p>
          SheCare provides general health-awareness information
          for educational purposes. Individual nutritional needs
          can vary. Speak with a qualified healthcare professional
          or registered dietitian for personalized advice.
        </p>

      </section>

    </div>
  );
}

export default Nutrition;