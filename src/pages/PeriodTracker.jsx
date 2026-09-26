import API_URL from "../config";
import { useState } from "react";
import "./PeriodTracker.css";
import { Link } from "react-router-dom";
function PeriodTracker() {
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleLength, setCycleLength] = useState("28");
  const [periodDuration, setPeriodDuration] = useState("5");

  const [result, setResult] = useState(null);

  const calculateCycle = async (e) => {
    e.preventDefault();

    if (!lastPeriodDate || !cycleLength || !periodDuration) {
      setResult({
        error: "Please enter all the required information.",
      });
      return;
    }

    const cycle = Number(cycleLength);
    const duration = Number(periodDuration);

    if (cycle < 21 || cycle > 35) {
      setResult({
        error: "Please enter a cycle length between 21 and 35 days.",
      });
      return;
    }

    if (duration < 1 || duration > 10) {
      setResult({
        error: "Please enter a period duration between 1 and 10 days.",
      });
      return;
    }

    const startDate = new Date(`${lastPeriodDate}T00:00:00`);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const nextPeriod = new Date(startDate);
    nextPeriod.setDate(nextPeriod.getDate() + cycle);

    const cycleDay =
      Math.floor(
        (today - startDate) / (1000 * 60 * 60 * 24)
      ) + 1;

    const normalizedCycleDay =
      cycleDay > 0
        ? ((cycleDay - 1) % cycle) + 1
        : 1;

    let phase = "";

    if (normalizedCycleDay <= duration) {
      phase = "Menstrual Phase";
    } else if (normalizedCycleDay <= 13) {
      phase = "Follicular Phase";
    } else if (normalizedCycleDay <= 16) {
      phase = "Ovulation Phase";
    } else {
      phase = "Luteal Phase";
    }

    const fertileStart = new Date(startDate);
    fertileStart.setDate(
      fertileStart.getDate() + cycle - 14 - 5
    );

    const fertileEnd = new Date(startDate);
    fertileEnd.setDate(
      fertileEnd.getDate() + cycle - 14 + 1
    );

    const formatDate = (date) => {
      return date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    };

    let suggestions = [];

    if (phase === "Menstrual Phase") {
      suggestions = [
        "Gentle walking",
        "Light stretching",
        "Relaxation exercises",
        "Stay hydrated",
      ];
    } else if (phase === "Follicular Phase") {
      suggestions = [
        "Walking",
        "Light cardio",
        "Yoga",
        "Strength exercises",
      ];
    } else if (phase === "Ovulation Phase") {
      suggestions = [
        "Walking",
        "Strength training",
        "Swimming",
        "Moderate cardio",
      ];
    } else {
      suggestions = [
        "Light exercise",
        "Yoga",
        "Walking",
        "Relaxation exercises",
      ];
    }

    setResult({
      cycleDay: normalizedCycleDay,
      phase,
      nextPeriod: formatDate(nextPeriod),
      fertileWindow:
        `${formatDate(fertileStart)} – ${formatDate(fertileEnd)}`,
      suggestions,
    });

    // Save data to backend
    try {
      const response = await fetch(
        `${API_URL}/api/period`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            lastPeriodDate: lastPeriodDate,
            cycleLength: cycle,
            periodDuration: duration,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error(
          "Period tracker save failed:",
          data.message
        );
        return;
      }

      console.log(
        "Period tracker saved:",
        data.message
      );
    } catch (error) {
      console.error(
        "Period tracker backend error:",
        error
      );
    }
  };

  const resetTracker = () => {
    setLastPeriodDate("");
    setCycleLength("28");
    setPeriodDuration("5");
    setResult(null);
  };

  // Exercise video searches
  const exerciseVideos = {
    "Gentle walking": {
      icon: "🚶‍♀️",
      description: "A simple low-impact movement activity.",
      videoUrl:
        "https://www.youtube.com/results?search_query=gentle+walking+exercise+for+women",
    },

    "Light stretching": {
      icon: "🤸‍♀️",
      description: "Gentle stretches for flexibility and relaxation.",
      videoUrl:
        "https://www.youtube.com/results?search_query=gentle+stretching+exercise+for+women",
    },

    "Relaxation exercises": {
      icon: "🧘‍♀️",
      description: "Simple relaxation and breathing exercises.",
      videoUrl:
        "https://www.youtube.com/results?search_query=relaxation+breathing+exercise+for+women",
    },

    "Walking": {
      icon: "🚶‍♀️",
      description: "A simple activity for everyday movement.",
      videoUrl:
        "https://www.youtube.com/results?search_query=walking+workout+for+women+beginner",
    },

    "Light cardio": {
      icon: "❤️",
      description: "Low-impact cardio suitable for beginners.",
      videoUrl:
        "https://www.youtube.com/results?search_query=low+impact+cardio+workout+for+women+beginner",
    },

    "Yoga": {
      icon: "🧘‍♀️",
      description: "Gentle yoga movements for flexibility and relaxation.",
      videoUrl:
        "https://www.youtube.com/results?search_query=gentle+yoga+for+women+beginner",
    },

    "Strength exercises": {
      icon: "💪",
      description: "Beginner-friendly bodyweight strength exercises.",
      videoUrl:
        "https://www.youtube.com/results?search_query=beginner+strength+workout+for+women",
    },

    "Strength training": {
      icon: "🏋️‍♀️",
      description: "Basic strength-training movements for general fitness.",
      videoUrl:
        "https://www.youtube.com/results?search_query=beginner+strength+training+for+women",
    },

    "Swimming": {
      icon: "🏊‍♀️",
      description: "A low-impact full-body activity.",
      videoUrl:
        "https://www.youtube.com/results?search_query=beginner+swimming+exercise+for+women",
    },

    "Moderate cardio": {
      icon: "🏃‍♀️",
      description: "Moderate cardio movements for general fitness.",
      videoUrl:
        "https://www.youtube.com/results?search_query=moderate+cardio+workout+for+women",
    },

    "Light exercise": {
      icon: "🌿",
      description: "Gentle movement for everyday wellness.",
      videoUrl:
        "https://www.youtube.com/results?search_query=light+exercise+workout+for+women+beginner",
    },

    "Stay hydrated": {
      icon: "💧",
      description: "Remember to maintain adequate hydration.",
      videoUrl:
        "https://www.youtube.com/results?search_query=hydration+health+women",
    },
  };

  return (
    <div className="period-page">

      <div className="period-container">
        
        <Link to="/dashboard" className="back-home-btn">
    ← Back to Dashboard
  </Link>

        {/* HEADER */}
        <div className="period-header">

          <div className="period-icon">
            🌸
          </div>

          <h1>
            Period Tracker
          </h1>

          <p>
            Track your menstrual cycle and understand
            your general cycle pattern.
          </p>

        </div>


        {/* FORM */}
        <form
          className="period-form"
          onSubmit={calculateCycle}
        >

          <div className="period-input-group">

            <label>
              Last Period Date
            </label>

            <input
              type="date"
              value={lastPeriodDate}
              onChange={(e) =>
                setLastPeriodDate(e.target.value)
              }
            />

          </div>


          <div className="period-input-group">

            <label>
              Average Cycle Length
            </label>

            <div className="period-input-unit">

              <input
                type="number"
                value={cycleLength}
                onChange={(e) =>
                  setCycleLength(e.target.value)
                }
                min="21"
                max="35"
              />

              <span>
                days
              </span>

            </div>

            <small>
              Common cycle lengths are around 21–35 days.
            </small>

          </div>


          <div className="period-input-group">

            <label>
              Period Duration
            </label>

            <div className="period-input-unit">

              <input
                type="number"
                value={periodDuration}
                onChange={(e) =>
                  setPeriodDuration(e.target.value)
                }
                min="1"
                max="10"
              />

              <span>
                days
              </span>

            </div>

          </div>


          <button
            type="submit"
            className="period-button"
          >
            Calculate Cycle
          </button>


          <button
            type="button"
            className="period-reset-button"
            onClick={resetTracker}
          >
            Reset
          </button>

        </form>


        {/* ERROR */}
        {result?.error && (
          <div className="period-error">
            {result.error}
          </div>
        )}


        {/* RESULT */}
        {result && !result.error && (

          <div className="period-result">

            <div className="period-result-title">

              <span>
                📅
              </span>

              <h2>
                Your Cycle Information
              </h2>

            </div>


            <div className="period-result-grid">

              <div className="period-result-card">

                <span>
                  Current Cycle Day
                </span>

                <strong>
                  Day {result.cycleDay}
                </strong>

              </div>


              <div className="period-result-card">

                <span>
                  Current Phase
                </span>

                <strong>
                  {result.phase}
                </strong>

              </div>


              <div className="period-result-card">

                <span>
                  Estimated Next Period
                </span>

                <strong>
                  {result.nextPeriod}
                </strong>

              </div>


              <div className="period-result-card">

                <span>
                  Approximate Fertile Window
                </span>

                <strong>
                  {result.fertileWindow}
                </strong>

              </div>

            </div>


            {/* WELLNESS SUGGESTIONS */}
            <div className="period-suggestions">

              <div className="suggestion-heading">

                <div>
                  <span className="suggestion-main-icon">
                    🌿
                  </span>
                </div>

                <div>
                  <h3>
                    General Wellness Suggestions
                  </h3>

                  <p>
                    Simple activities based on your current cycle phase.
                  </p>
                </div>

              </div>


              <div className="suggestion-list">

                {result.suggestions.map(
                  (suggestion, index) => {

                    const video =
                      exerciseVideos[suggestion];

                    return (
                      <div
                        className="suggestion-item"
                        key={index}
                      >

                        <div className="suggestion-info">

                          <div className="suggestion-icon">
                            {video?.icon || "🌿"}
                          </div>

                          <div>

                            <strong>
                              {suggestion}
                            </strong>

                            <p>
                              {video?.description ||
                                "A simple wellness activity."}
                            </p>

                          </div>

                        </div>


                        {video && (
                          <a
                            href={video.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="watch-video-btn"
                          >
                            ▶ Watch Video
                          </a>
                        )}

                      </div>
                    );
                  }
                )}

              </div>

            </div>


            {/* EXERCISE VIDEO SECTION */}
            <div className="exercise-video-section">

              <div className="exercise-video-header">

                <div className="exercise-video-icon">
                  🎥
                </div>

                <div>

                  <h3>
                    Exercise Video Guide
                  </h3>

                  <p>
                    Explore beginner-friendly exercise videos
                    related to your suggested activities.
                  </p>

                </div>

              </div>


              <div className="exercise-video-note">

                <span>
                  💡
                </span>

                <p>
                  Choose gentle or comfortable activities
                  and stop if you experience pain, dizziness
                  or unusual discomfort.
                </p>

              </div>

            </div>

          </div>

        )}


        {/* INFORMATION */}
        <div className="period-info">

          <h2>
            Understanding Your Cycle
          </h2>

          <div className="phase-grid">

            <div className="phase-card">

              <span>
                🌸
              </span>

              <h3>
                Menstrual Phase
              </h3>

              <p>
                The period begins and the uterine
                lining is shed.
              </p>

            </div>


            <div className="phase-card">

              <span>
                🌱
              </span>

              <h3>
                Follicular Phase
              </h3>

              <p>
                The body prepares for ovulation
                and hormone levels change.
              </p>

            </div>


            <div className="phase-card">

              <span>
                🌼
              </span>

              <h3>
                Ovulation Phase
              </h3>

              <p>
                Ovulation usually occurs around
                the middle of the cycle.
              </p>

            </div>


            <div className="phase-card">

              <span>
                🌙
              </span>

              <h3>
                Luteal Phase
              </h3>

              <p>
                The body prepares for the next
                menstrual cycle.
              </p>

            </div>

          </div>

        </div>


        {/* DISCLAIMER */}
        <div className="period-disclaimer">

          <strong>
            Health Awareness Note:
          </strong>

          <p>
            This tracker provides approximate cycle
            information for awareness and planning.
            Menstrual cycles can naturally vary from
            person to person. It should not be used
            as a medical diagnosis or as a method of
            contraception.
          </p>

        </div>

      </div>

    </div>
  );
}

export default PeriodTracker;