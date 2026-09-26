import { useState } from "react";
import { Link } from "react-router-dom";
import "./NutritionPlanner.css";

function NutritionPlanner() {
  const [planNumber, setPlanNumber] = useState(0);

  const mealPlans = [
    {
      breakfast: {
        icon: "🌅",
        title: "Breakfast",
        meal: "Vegetable Poha + Curd",
        description:
          "A light and filling breakfast with vegetables and protein-rich curd."
      },
      lunch: {
        icon: "🍱",
        title: "Lunch",
        meal: "Roti + Dal + Mixed Vegetables + Salad",
        description:
          "A balanced meal with carbohydrates, protein, vegetables and fibre."
      },
      snack: {
        icon: "🍎",
        title: "Evening Snack",
        meal: "Fruit + Handful of Nuts",
        description:
          "Choose a seasonal fruit with a small portion of nuts."
      },
      dinner: {
        icon: "🌙",
        title: "Dinner",
        meal: "Vegetable Khichdi + Curd",
        description:
          "A simple and comforting dinner with grains, lentils and vegetables."
      }
    },

    {
      breakfast: {
        icon: "🌅",
        title: "Breakfast",
        meal: "Idli + Sambar",
        description:
          "A simple South Indian breakfast with fermented food and lentils."
      },
      lunch: {
        icon: "🍱",
        title: "Lunch",
        meal: "Rice + Rajma + Vegetable Salad",
        description:
          "A satisfying meal combining grains, legumes and fresh vegetables."
      },
      snack: {
        icon: "🍎",
        title: "Evening Snack",
        meal: "Roasted Makhana + Fruit",
        description:
          "A light snack option with a seasonal fruit."
      },
      dinner: {
        icon: "🌙",
        title: "Dinner",
        meal: "Roti + Paneer Bhurji + Vegetables",
        description:
          "A balanced dinner with protein and vegetables."
      }
    },

    {
      breakfast: {
        icon: "🌅",
        title: "Breakfast",
        meal: "Vegetable Upma + Fruit",
        description:
          "A warm breakfast with vegetables and a serving of fresh fruit."
      },
      lunch: {
        icon: "🍱",
        title: "Lunch",
        meal: "Roti + Chana + Vegetable Sabzi + Salad",
        description:
          "A fibre-rich meal with legumes, vegetables and whole grains."
      },
      snack: {
        icon: "🍎",
        title: "Evening Snack",
        meal: "Sprouts Chaat",
        description:
          "A refreshing snack made with sprouts and vegetables."
      },
      dinner: {
        icon: "🌙",
        title: "Dinner",
        meal: "Dal Rice + Vegetable Stir-Fry",
        description:
          "A simple meal combining protein, grains and vegetables."
      }
    }
  ];

  const currentPlan = mealPlans[planNumber];

  const generatePlan = () => {
    setPlanNumber((previous) => (previous + 1) % mealPlans.length);
  };

  return (
    <div className="nutrition-planner-page">

      <div className="nutrition-planner-container">

        {/* BACK TO DASHBOARD */}
        <Link to="/dashboard" className="back-home-btn">
          ← Back to Dashboard
        </Link>

        {/* HEADER */}
        <div className="nutrition-planner-header">

          <div className="nutrition-planner-icon">
            🥗
          </div>

          <h1>Nutrition & Healthy Meal Planner</h1>

          <p>
            Plan balanced meals and make healthier food choices
            throughout your day.
          </p>

        </div>

        {/* DAILY PLAN */}
        <div className="meal-plan-card">

          <div className="meal-plan-heading">
            <div>
              <span className="section-small-label">
                TODAY'S PLAN
              </span>

              <h2>Healthy Daily Meal Plan</h2>
            </div>

            <span className="plan-number">
              Plan {planNumber + 1}
            </span>
          </div>

          {/* MEALS */}
          <div className="meal-grid">

            <div className="meal-card">
              <div className="meal-icon">
                {currentPlan.breakfast.icon}
              </div>

              <div className="meal-content">
                <span className="meal-time">
                  {currentPlan.breakfast.title}
                </span>

                <h3>
                  {currentPlan.breakfast.meal}
                </h3>

                <p>
                  {currentPlan.breakfast.description}
                </p>
              </div>
            </div>

            <div className="meal-card">
              <div className="meal-icon">
                {currentPlan.lunch.icon}
              </div>

              <div className="meal-content">
                <span className="meal-time">
                  {currentPlan.lunch.title}
                </span>

                <h3>
                  {currentPlan.lunch.meal}
                </h3>

                <p>
                  {currentPlan.lunch.description}
                </p>
              </div>
            </div>

            <div className="meal-card">
              <div className="meal-icon">
                {currentPlan.snack.icon}
              </div>

              <div className="meal-content">
                <span className="meal-time">
                  {currentPlan.snack.title}
                </span>

                <h3>
                  {currentPlan.snack.meal}
                </h3>

                <p>
                  {currentPlan.snack.description}
                </p>
              </div>
            </div>

            <div className="meal-card">
              <div className="meal-icon">
                {currentPlan.dinner.icon}
              </div>

              <div className="meal-content">
                <span className="meal-time">
                  {currentPlan.dinner.title}
                </span>

                <h3>
                  {currentPlan.dinner.meal}
                </h3>

                <p>
                  {currentPlan.dinner.description}
                </p>
              </div>
            </div>

          </div>

          {/* GENERATE PLAN */}
          <div className="generate-plan-area">

            <button
              className="generate-plan-btn"
              onClick={generatePlan}
            >
              🔄 Generate Another Meal Plan
            </button>

            <p>
              Explore different balanced meal combinations.
            </p>

          </div>

        </div>

        {/* HYDRATION */}
        <div className="hydration-card">

          <div className="hydration-icon">
            💧
          </div>

          <div className="hydration-content">

            <h2>Stay Hydrated</h2>

            <p>
              Remember to drink water regularly throughout
              the day. Your water needs may vary depending
              on activity, weather and individual needs.
            </p>

            <Link
              to="/water-tracker"
              className="hydration-btn"
            >
              Open Water Tracker →
            </Link>

          </div>

        </div>

        {/* HEALTHY FOOD CHOICES */}
        <div className="healthy-food-section">

          <div className="section-heading">
            <span>🥦</span>

            <div>
              <h2>Healthy Food Choices</h2>

              <p>
                Include a variety of nutritious foods in your
                daily meals.
              </p>
            </div>
          </div>

          <div className="food-choice-grid">

            <div className="food-choice-card">
              <span>🥬</span>
              <h3>Vegetables</h3>
              <p>
                Add different colourful vegetables to your meals.
              </p>
            </div>

            <div className="food-choice-card">
              <span>🍊</span>
              <h3>Fruits</h3>
              <p>
                Choose fresh and seasonal fruits when possible.
              </p>
            </div>

            <div className="food-choice-card">
              <span>🥛</span>
              <h3>Protein & Dairy</h3>
              <p>
                Include options such as dal, beans, eggs,
                paneer or curd.
              </p>
            </div>

            <div className="food-choice-card">
              <span>🌾</span>
              <h3>Whole Grains</h3>
              <p>
                Choose whole grains such as oats, brown rice
                and whole wheat.
              </p>
            </div>

            <div className="food-choice-card">
              <span>🥜</span>
              <h3>Nuts & Seeds</h3>
              <p>
                Add suitable portions of nuts and seeds
                to your meals.
              </p>
            </div>

            <div className="food-choice-card">
              <span>🥣</span>
              <h3>Balanced Meals</h3>
              <p>
                Try to include different food groups in your
                meals.
              </p>
            </div>

          </div>

        </div>

        {/* DAILY HABITS */}
        <div className="nutrition-habits-card">

          <h2>🌿 Simple Nutrition Habits</h2>

          <div className="nutrition-habits">

            <div className="nutrition-habit">
              <span>✓</span>
              <p>Eat a variety of foods.</p>
            </div>

            <div className="nutrition-habit">
              <span>✓</span>
              <p>Include fruits and vegetables regularly.</p>
            </div>

            <div className="nutrition-habit">
              <span>✓</span>
              <p>Drink water throughout the day.</p>
            </div>

            <div className="nutrition-habit">
              <span>✓</span>
              <p>Choose appropriate portions.</p>
            </div>

            <div className="nutrition-habit">
              <span>✓</span>
              <p>Limit highly processed foods when possible.</p>
            </div>

            <div className="nutrition-habit">
              <span>✓</span>
              <p>Maintain regular meal timings.</p>
            </div>

          </div>

        </div>

        {/* HEALTH AWARENESS NOTE */}
        <div className="nutrition-disclaimer">

          <strong>Health Awareness Note:</strong>

          <p>
            This meal planner provides general nutrition
            awareness and is not a personalised medical diet.
            Individual nutritional needs can vary. If you have
            a medical condition, food allergy, or specific
            dietary requirement, consult a qualified healthcare
            professional or registered dietitian.
          </p>

        </div>

      </div>

    </div>
  );
}

export default NutritionPlanner;