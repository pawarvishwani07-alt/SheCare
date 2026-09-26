import { useState } from "react";
import { Link } from "react-router-dom";
import "./WaterTracker.css";

function WaterTracker() {
  const [waterIntake, setWaterIntake] = useState(0);

  const dailyGoal = 8;

  const addGlass = () => {
    if (waterIntake < dailyGoal) {
      setWaterIntake(waterIntake + 1);
    }
  };

  const removeGlass = () => {
    if (waterIntake > 0) {
      setWaterIntake(waterIntake - 1);
    }
  };

  const resetTracker = () => {
    setWaterIntake(0);
  };

  const progress = Math.min(
    (waterIntake / dailyGoal) * 100,
    100
  );

  return (
    <div className="water-page">

      <div className="water-container">

        <Link to="/dashboard" className="back-home-btn">
          ← Back to Dashboard
        </Link>

        {/* HEADER */}
        <div className="water-header">

          <div className="water-icon">
            💧
          </div>

          <h1>Water Intake Tracker</h1>

          <p>
            Track your daily water intake and stay hydrated
            throughout the day.
          </p>

        </div>

        {/* DAILY GOAL */}
        <div className="water-goal-card">

          <div className="water-goal-title">
            <span>💧</span>
            <h2>Today's Water Goal</h2>
          </div>

          <div className="water-goal-number">
            {waterIntake}
            <span> / {dailyGoal} glasses</span>
          </div>

          <div className="water-progress">
            <div
              className="water-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p>
            {waterIntake === 0
              ? "Start your day by drinking a glass of water."
              : waterIntake < dailyGoal
              ? `${dailyGoal - waterIntake} glasses remaining for today's goal.`
              : "Great job! You reached your daily water goal. 💙"}
          </p>

        </div>

        {/* WATER GLASSES */}
        <div className="water-glasses-section">

          <h2>Track Your Water</h2>

          <p>
            Add one glass every time you drink water.
          </p>

          <div className="water-glasses">

            {Array.from({ length: dailyGoal }).map(
              (_, index) => (
                <div
                  key={index}
                  className={`water-glass ${
                    index < waterIntake
                      ? "filled"
                      : ""
                  }`}
                >
                  💧
                </div>
              )
            )}

          </div>

          {/* BUTTONS */}
          <div className="water-buttons">

            <button
              className="water-add-btn"
              onClick={addGlass}
            >
              + Add Glass
            </button>

            <button
              className="water-remove-btn"
              onClick={removeGlass}
            >
              − Remove Glass
            </button>

          </div>

          <button
            className="water-reset-btn"
            onClick={resetTracker}
          >
            Reset
          </button>

        </div>

        {/* HYDRATION TIPS */}
        <div className="water-tips">

          <h2>💡 Hydration Tips</h2>

          <div className="water-tip-grid">

            <div className="water-tip-card">
              <span>🌅</span>
              <h3>Start Early</h3>
              <p>
                Begin your day with a glass of water.
              </p>
            </div>

            <div className="water-tip-card">
              <span>🍎</span>
              <h3>Eat Water-Rich Foods</h3>
              <p>
                Include fruits and vegetables in your meals.
              </p>
            </div>

            <div className="water-tip-card">
              <span>🏃‍♀️</span>
              <h3>Stay Hydrated</h3>
              <p>
                Drink more water during physical activity.
              </p>
            </div>

            <div className="water-tip-card">
              <span>⏰</span>
              <h3>Drink Regularly</h3>
              <p>
                Take small amounts of water throughout the day.
              </p>
            </div>

          </div>

        </div>

        {/* AWARENESS NOTE */}
        <div className="water-disclaimer">

          <strong>Health Awareness Note:</strong>

          <p>
            Water needs can vary depending on factors such as
            activity, weather, diet and individual health.
            This tracker is only for general health awareness.
          </p>

        </div>

      </div>

    </div>
  );
}

export default WaterTracker;