import API_URL from "../config";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./BMI.css";

function BMI() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");

  const [result, setResult] = useState(null);
  const [saveStatus, setSaveStatus] = useState("");

  const calculateBMI = async (e) => {
    e.preventDefault();

    setSaveStatus("");

    const feetValue = Number(feet);
    const inchesValue = Number(inches || 0);
    const weightValue = Number(weight);

    // Validate input
    if (
      !feetValue ||
      feetValue <= 0 ||
      weightValue <= 0 ||
      inchesValue < 0 ||
      inchesValue >= 12
    ) {
      setResult({
        error: "Please enter a valid height and weight."
      });

      return;
    }

    // Convert height into meters
    const totalInches = feetValue * 12 + inchesValue;
    const heightInMeters = totalInches * 0.0254;

    // Calculate BMI
    const bmi =
      weightValue / (heightInMeters * heightInMeters);

    let category = "";
    let message = "";

    // BMI category
    if (bmi < 18.5) {
      category = "Underweight";

      message =
        "Your BMI is below the general healthy range. Consider maintaining a balanced diet and healthy lifestyle.";
    } else if (bmi < 25) {
      category = "Normal Weight";

      message =
        "Your BMI is within the general healthy range. Continue maintaining healthy habits.";
    } else if (bmi < 30) {
      category = "Overweight";

      message =
        "Your BMI is above the general healthy range. Regular activity and balanced nutrition can support overall health.";
    } else {
      category = "Obesity";

      message =
        "Your BMI is in the obesity range. Consider discussing your overall health with a qualified healthcare professional.";
    }

    const bmiValue = Number(bmi.toFixed(1));

    // Show BMI result immediately
    setResult({
      bmi: bmiValue,
      category: category,
      message: message
    });

    // Save BMI to backend
    try {
      const response = await fetch(`
        ${API_URL}/api/bmi`, 
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          credentials: "include",

          body: JSON.stringify({
            heightFeet: feetValue,
            heightInches: inchesValue,
            weightKg: weightValue,
            bmi: bmiValue,
            category: category
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setSaveStatus(
          data.message || "BMI could not be saved."
        );

        return;
      }

      // Visible success message
      setSaveStatus(
        "BMI record saved successfully."
      );

    } catch (error) {
      console.error("BMI backend error:", error);

      setSaveStatus(
        "BMI calculated, but it could not be saved to the server."
      );
    }
  };

  // Reset calculator
  const resetBMI = () => {
    setFeet("");
    setInches("");
    setWeight("");
    setResult(null);
    setSaveStatus("");
  };

  return (
    <div className="bmi-page">

      <div className="bmi-container">

        {/* BACK TO DASHBOARD */}
      <div className="back-home-container">
        <Link to="/dashboard" className="back-home-btn">
          ← Back to Dashboard
        </Link>
      </div>

        {/* HEADER */}
        <div className="bmi-header">

          <div className="bmi-icon">
            ⚖️
          </div>

          <h1>BMI Calculator</h1>

          <p>
            Calculate your Body Mass Index and understand
            your general weight category.
          </p>

        </div>


        {/* FORM */}
        <form
          className="bmi-form"
          onSubmit={calculateBMI}
        >

          {/* HEIGHT */}
          <div className="bmi-input-group">

            <label>Height</label>

            <div className="height-inputs">

              {/* FEET */}
              <div className="input-with-unit">

                <input
                  type="number"
                  placeholder="Feet"
                  value={feet}
                  onChange={(e) =>
                    setFeet(e.target.value)
                  }
                  min="1"
                  max="8"
                />

                <span>ft</span>

              </div>


              {/* INCHES */}
              <div className="input-with-unit">

                <input
                  type="number"
                  placeholder="Inches"
                  value={inches}
                  onChange={(e) =>
                    setInches(e.target.value)
                  }
                  min="0"
                  max="11"
                />

                <span>in</span>

              </div>

            </div>

          </div>


          {/* WEIGHT */}
          <div className="bmi-input-group">

            <label>Weight</label>

            <div className="input-with-unit">

              <input
                type="number"
                placeholder="Enter your weight"
                value={weight}
                onChange={(e) =>
                  setWeight(e.target.value)
                }
                min="1"
              />

              <span>kg</span>

            </div>

          </div>


          {/* CALCULATE BUTTON */}
          <button
            type="submit"
            className="bmi-button"
          >
            Calculate BMI
          </button>


          {/* RESET BUTTON */}
          <button
            type="button"
            className="bmi-reset-button"
            onClick={resetBMI}
          >
            Reset
          </button>

        </form>


        {/* ERROR MESSAGE */}
        {result?.error && (
          <div className="bmi-error">
            {result.error}
          </div>
        )}


        {/* BMI RESULT */}
        {result && !result.error && (

          <div className="bmi-result">

            <div className="result-title">

              <span>📊</span>

              <h2>Your BMI Result</h2>

            </div>


            <div className="bmi-number">
              {result.bmi}
            </div>


            <div className="bmi-category">
              {result.category}
            </div>


            <p className="bmi-message">
              {result.message}
            </p>


            {/* SAVE STATUS */}
            {saveStatus && (
              <div className="bmi-save-message">
                {saveStatus}
              </div>
            )}

          </div>

        )}


        {/* BMI INFORMATION */}
        <div className="bmi-info">

          <h2>BMI Categories</h2>

          <div className="bmi-category-grid">

            <div className="category-card">

              <strong>
                Below 18.5
              </strong>

              <span>
                Underweight
              </span>

            </div>


            <div className="category-card">

              <strong>
                18.5 – 24.9
              </strong>

              <span>
                Normal Weight
              </span>

            </div>


            <div className="category-card">

              <strong>
                25 – 29.9
              </strong>

              <span>
                Overweight
              </span>

            </div>


            <div className="category-card">

              <strong>
                30 or above
              </strong>

              <span>
                Obesity
              </span>

            </div>

          </div>

        </div>


        {/* DISCLAIMER */}
        <div className="bmi-disclaimer">

          <strong>
            Health Awareness Note:
          </strong>

          <p>
            BMI is a general screening measure and does not
            provide a medical diagnosis. Individual health
            can depend on many other factors.
          </p>

        </div>

      </div>

    </div>
  );
}

export default BMI;