import { useState } from "react";
import { Link } from "react-router-dom";
import "./Games.css";

const habitQuestions = [
  {
    question: "Drinking enough water every day is a healthy habit.",
    answer: "Healthy",
    explanation: "Staying hydrated helps your body function properly."
  },
  {
    question: "Skipping meals regularly is a healthy habit.",
    answer: "Unhealthy",
    explanation: "Regular balanced meals can help support energy and overall health."
  },
  {
    question: "Getting enough sleep is important for your well-being.",
    answer: "Healthy",
    explanation: "Good sleep supports physical and emotional well-being."
  },
  {
    question: "Ignoring unusual or persistent health symptoms is a good idea.",
    answer: "Unhealthy",
    explanation: "Persistent or unusual symptoms should be discussed with a healthcare professional."
  },
  {
    question: "Regular physical activity can support a healthy lifestyle.",
    answer: "Healthy",
    explanation: "Regular movement can support physical and mental well-being."
  }
];

const mythQuestions = [
  {
    question: "You should avoid talking about mental health problems.",
    answer: "Myth",
    explanation: "Talking to a trusted person or healthcare professional can be an important part of getting support."
  },
  {
    question: "A balanced diet can support overall health.",
    answer: "Fact",
    explanation: "A balanced diet provides nutrients that help support normal body functions."
  },
  {
    question: "Only older women need to care about their health.",
    answer: "Myth",
    explanation: "Health awareness and healthy habits are important at every stage of life."
  },
  {
    question: "Regular physical activity can support physical and mental well-being.",
    answer: "Fact",
    explanation: "Regular movement can contribute to physical fitness and overall well-being."
  },
  {
    question: "Ignoring persistent or unusual symptoms is always safe.",
    answer: "Myth",
    explanation: "Persistent or unusual symptoms should be discussed with a healthcare professional."
  }
];

const memoryCards = [
  {
    id: 1,
    icon: "💧",
    title: "Hydration",
    text: "Drinking enough water supports normal body functions."
  },
  {
    id: 2,
    icon: "😴",
    title: "Sleep",
    text: "Adequate sleep supports physical and emotional well-being."
  },
  {
    id: 3,
    icon: "🥗",
    title: "Nutrition",
    text: "A balanced diet provides important nutrients."
  },
  {
    id: 4,
    icon: "🏃‍♀️",
    title: "Activity",
    text: "Regular movement can support a healthy lifestyle."
  }
];

const selfCareQuestions = [
  {
    question: "Which activity can help you relax after a stressful day?",
    options: [
      "Taking a few quiet minutes to relax",
      "Ignoring your feelings",
      "Skipping sleep",
      "Avoiding everyone"
    ],
    answer: "Taking a few quiet minutes to relax"
  },
  {
    question: "Which habit can support healthy sleep?",
    options: [
      "Keeping a regular sleep routine",
      "Using screens all night",
      "Skipping sleep regularly",
      "Drinking lots of caffeine before bed"
    ],
    answer: "Keeping a regular sleep routine"
  },
  {
    question: "Which activity can support emotional well-being?",
    options: [
      "Talking to someone you trust",
      "Keeping every problem to yourself",
      "Ignoring stress",
      "Avoiding all social contact"
    ],
    answer: "Talking to someone you trust"
  },
  {
    question: "Which is an example of healthy self-care?",
    options: [
      "Making time for rest and relaxation",
      "Ignoring persistent symptoms",
      "Skipping meals",
      "Never taking breaks"
    ],
    answer: "Making time for rest and relaxation"
  }
];

function Games() {
  const [selectedGame, setSelectedGame] = useState(null);

  /* HABIT GAME */
  const [habitQuestion, setHabitQuestion] = useState(0);
  const [habitScore, setHabitScore] = useState(0);
  const [habitAnswer, setHabitAnswer] = useState("");
  const [habitResult, setHabitResult] = useState(false);

  /* MYTH GAME */
  const [mythQuestion, setMythQuestion] = useState(0);
  const [mythScore, setMythScore] = useState(0);
  const [mythAnswer, setMythAnswer] = useState("");
  const [mythResult, setMythResult] = useState(false);

  /* MEMORY GAME */
  const [memorySelected, setMemorySelected] = useState([]);
  const [memoryMatched, setMemoryMatched] = useState([]);
  const [memoryMoves, setMemoryMoves] = useState(0);
  const [memoryComplete, setMemoryComplete] = useState(false);

  /* SELF CARE GAME */
  const [selfCareQuestion, setSelfCareQuestion] = useState(0);
  const [selfCareScore, setSelfCareScore] = useState(0);
  const [selfCareAnswer, setSelfCareAnswer] = useState("");
  const [selfCareResult, setSelfCareResult] = useState(false);

  const games = [
    {
      id: "habits",
      icon: "🌸",
      title: "Healthy Habit Challenge",
      description:
        "Test your knowledge about healthy and unhealthy daily habits.",
      color: "pink"
    },
    {
      id: "myth",
      icon: "💡",
      title: "Myth or Fact",
      description:
        "Learn interesting facts and clear common women's health myths.",
      color: "purple"
    },
    {
      id: "memory",
      icon: "🧠",
      title: "Health Memory Match",
      description:
        "Match women's health topics with their correct information.",
      color: "blue"
    },
    {
      id: "selfcare",
      icon: "💗",
      title: "Self-Care Challenge",
      description:
        "Choose healthy self-care activities and build positive habits.",
      color: "rose"
    }
  ];

  /* =========================
     HABIT GAME
  ========================= */

  const startHabitGame = () => {
    setHabitQuestion(0);
    setHabitScore(0);
    setHabitAnswer("");
    setHabitResult(false);
    setSelectedGame("habits");
  };

  const answerHabit = (answer) => {
    if (habitAnswer) return;

    setHabitAnswer(answer);

    if (answer === habitQuestions[habitQuestion].answer) {
      setHabitScore((previous) => previous + 1);
    }
  };

  const nextHabitQuestion = () => {
    if (habitQuestion < habitQuestions.length - 1) {
      setHabitQuestion((previous) => previous + 1);
      setHabitAnswer("");
    } else {
      setHabitResult(true);
    }
  };

  const playHabitAgain = () => {
    setHabitQuestion(0);
    setHabitScore(0);
    setHabitAnswer("");
    setHabitResult(false);
  };

  /* =========================
     MYTH GAME
  ========================= */

  const startMythGame = () => {
    setMythQuestion(0);
    setMythScore(0);
    setMythAnswer("");
    setMythResult(false);
    setSelectedGame("myth");
  };

  const answerMyth = (answer) => {
    if (mythAnswer) return;

    setMythAnswer(answer);

    if (answer === mythQuestions[mythQuestion].answer) {
      setMythScore((previous) => previous + 1);
    }
  };

  const nextMythQuestion = () => {
    if (mythQuestion < mythQuestions.length - 1) {
      setMythQuestion((previous) => previous + 1);
      setMythAnswer("");
    } else {
      setMythResult(true);
    }
  };

  const playMythAgain = () => {
    setMythQuestion(0);
    setMythScore(0);
    setMythAnswer("");
    setMythResult(false);
  };

  /* =========================
     MEMORY GAME
  ========================= */

  const startMemoryGame = () => {
    setMemorySelected([]);
    setMemoryMatched([]);
    setMemoryMoves(0);
    setMemoryComplete(false);
    setSelectedGame("memory");
  };

  const selectMemoryCard = (id) => {
    if (
      memorySelected.includes(id) ||
      memoryMatched.includes(id) ||
      memorySelected.length === 2
    ) {
      return;
    }

    const newSelected = [...memorySelected, id];
    setMemorySelected(newSelected);

    if (newSelected.length === 2) {
      setMemoryMoves((previous) => previous + 1);

      const first = memoryCards.find(
        (card) => card.id === newSelected[0]
      );

      const second = memoryCards.find(
        (card) => card.id === newSelected[1]
      );

      if (first.title === second.title) {
        setMemoryMatched((previous) => [
          ...previous,
          first.id,
          second.id
        ]);

        setMemorySelected([]);

        if (memoryMatched.length + 2 === memoryCards.length) {
          setMemoryComplete(true);
        }
      } else {
        setTimeout(() => {
          setMemorySelected([]);
        }, 700);
      }
    }
  };

  const playMemoryAgain = () => {
    setMemorySelected([]);
    setMemoryMatched([]);
    setMemoryMoves(0);
    setMemoryComplete(false);
  };

  /* =========================
     SELF CARE GAME
  ========================= */

  const startSelfCareGame = () => {
    setSelfCareQuestion(0);
    setSelfCareScore(0);
    setSelfCareAnswer("");
    setSelfCareResult(false);
    setSelectedGame("selfcare");
  };

  const answerSelfCare = (answer) => {
    if (selfCareAnswer) return;

    setSelfCareAnswer(answer);

    if (
      answer ===
      selfCareQuestions[selfCareQuestion].answer
    ) {
      setSelfCareScore((previous) => previous + 1);
    }
  };

  const nextSelfCareQuestion = () => {
    if (
      selfCareQuestion <
      selfCareQuestions.length - 1
    ) {
      setSelfCareQuestion((previous) => previous + 1);
      setSelfCareAnswer("");
    } else {
      setSelfCareResult(true);
    }
  };

  const playSelfCareAgain = () => {
    setSelfCareQuestion(0);
    setSelfCareScore(0);
    setSelfCareAnswer("");
    setSelfCareResult(false);
  };

  /* =========================
     CLOSE GAME
  ========================= */

  const closeGame = () => {
    setSelectedGame(null);

    setHabitQuestion(0);
    setHabitScore(0);
    setHabitAnswer("");
    setHabitResult(false);

    setMythQuestion(0);
    setMythScore(0);
    setMythAnswer("");
    setMythResult(false);

    setMemorySelected([]);
    setMemoryMatched([]);
    setMemoryMoves(0);
    setMemoryComplete(false);

    setSelfCareQuestion(0);
    setSelfCareScore(0);
    setSelfCareAnswer("");
    setSelfCareResult(false);
  };

  return (
    <div className="games-page">

      {/* HERO */}
      <section className="games-hero">
        <div className="games-hero-content">

          <span className="games-badge">
            🎮 SheCare Interactive
          </span>

          <h1>
            Learn, Play & <span>Take Care</span>
          </h1>

          <p>
            Explore fun and educational women's health games
            designed to make health awareness more interesting.
          </p>

        </div>
      </section>


      {/* GAME CARDS */}
      <section className="games-section">

        <div className="games-section-heading">
          <span>✨ PLAY & LEARN</span>

          <h2>Choose a Game</h2>

          <p>
            Learn important health information while having fun.
          </p>
        </div>


        <div className="games-grid">

          {games.map((game) => (

            <div
              className={`game-card ${game.color}`}
              key={game.id}
            >

              <div className="game-icon">
                {game.icon}
              </div>

              <h3>{game.title}</h3>

              <p>{game.description}</p>

              <button
                className="play-game-btn"
                onClick={() => {
                  if (game.id === "habits") {
                    startHabitGame();
                  } else if (game.id === "myth") {
                    startMythGame();
                  } else if (game.id === "memory") {
                    startMemoryGame();
                  } else if (game.id === "selfcare") {
                    startSelfCareGame();
                  }
                }}
              >
                Play Game →
              </button>

            </div>
          ))}

        </div>
      </section>

      {/* BACK TO Dashboard */}
<div className="back-home-container">
  <Link to="/dashboard" className="back-home-btn">
    ← Back to Dashboard
  </Link>
</div>

      {/* INFORMATION */}
      <section className="games-info">

        <div className="games-info-icon">
          🌷
        </div>

        <div>
          <h2>Learn While You Play</h2>

          <p>
            SheCare games are designed to make women's health
            awareness simple, interactive and enjoyable.
          </p>
        </div>

      </section>


      {/* =========================
          HEALTHY HABIT GAME
      ========================= */}

      {selectedGame === "habits" && (

        <div className="game-modal-overlay">

          <div className="game-modal healthy-game-modal">

            {!habitResult ? (

              <>
                <button
                  className="game-modal-close"
                  onClick={closeGame}
                >
                  ×
                </button>

                <div className="modal-game-icon">
                  🌸
                </div>

                <div className="game-progress">
                  Question {habitQuestion + 1} of{" "}
                  {habitQuestions.length}
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width:
                        `${
                          ((habitQuestion + 1) /
                            habitQuestions.length) *
                          100
                        }%`
                    }}
                  />
                </div>

                <h2>
                  Healthy Habit Challenge
                </h2>

                <p className="game-question">
                  {
                    habitQuestions[habitQuestion]
                      .question
                  }
                </p>

                <div className="answer-buttons">

                  <button
                    className={`answer-btn healthy ${
                      habitAnswer === "Healthy"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      answerHabit("Healthy")
                    }
                    disabled={habitAnswer !== ""}
                  >
                    ✅ Healthy
                  </button>

                  <button
                    className={`answer-btn unhealthy ${
                      habitAnswer === "Unhealthy"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      answerHabit("Unhealthy")
                    }
                    disabled={habitAnswer !== ""}
                  >
                    ❌ Unhealthy
                  </button>

                </div>

                {habitAnswer && (
                  <div
                    className={`answer-feedback ${
                      habitAnswer ===
                      habitQuestions[habitQuestion]
                        .answer
                        ? "correct"
                        : "wrong"
                    }`}
                  >

                    {habitAnswer ===
                    habitQuestions[habitQuestion]
                      .answer
                      ? "🎉 Correct!"
                      : "💡 Not quite!"}

                    <p>
                      {
                        habitQuestions[
                          habitQuestion
                        ].explanation
                      }
                    </p>

                  </div>
                )}

                {habitAnswer && (
                  <button
                    className="next-question-btn"
                    onClick={nextHabitQuestion}
                  >
                    {habitQuestion ===
                    habitQuestions.length - 1
                      ? "See My Result 🏆"
                      : "Next Question →"}
                  </button>
                )}

              </>

            ) : (

              <>
                <div className="result-icon">
                  🏆
                </div>

                <h2>Game Complete!</h2>

                <div className="final-score">
                  <span>Your Score</span>

                  <strong>
                    {habitScore} /{" "}
                    {habitQuestions.length}
                  </strong>
                </div>

                <p className="result-message">
                  {habitScore ===
                  habitQuestions.length
                    ? "Amazing! 🌟 You got every answer correct!"
                    : habitScore >= 3
                    ? "Great job! 💗 You have good health awareness."
                    : "Good try! 🌷 Keep learning about your health."}
                </p>

                <div className="result-buttons">

                  <button
                    className="modal-start-btn"
                    onClick={playHabitAgain}
                  >
                    🔄 Play Again
                  </button>

                  <button
                    className="close-game-btn"
                    onClick={closeGame}
                  >
                    Back to Games
                  </button>

                </div>
              </>

            )}

          </div>
        </div>
      )}


      {/* =========================
          MYTH OR FACT GAME
      ========================= */}

      {selectedGame === "myth" && (

        <div className="game-modal-overlay">

          <div className="game-modal healthy-game-modal">

            {!mythResult ? (

              <>
                <button
                  className="game-modal-close"
                  onClick={closeGame}
                >
                  ×
                </button>

                <div className="modal-game-icon">
                  💡
                </div>

                <div className="game-progress">
                  Question {mythQuestion + 1} of{" "}
                  {mythQuestions.length}
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width:
                        `${
                          ((mythQuestion + 1) /
                            mythQuestions.length) *
                          100
                        }%`
                    }}
                  />
                </div>

                <h2>Myth or Fact</h2>

                <p className="game-question">
                  {
                    mythQuestions[mythQuestion]
                      .question
                  }
                </p>

                <div className="answer-buttons">

                  <button
                    className={`answer-btn myth-answer ${
                      mythAnswer === "Myth"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      answerMyth("Myth")
                    }
                    disabled={mythAnswer !== ""}
                  >
                    ❌ Myth
                  </button>

                  <button
                    className={`answer-btn fact-answer ${
                      mythAnswer === "Fact"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      answerMyth("Fact")
                    }
                    disabled={mythAnswer !== ""}
                  >
                    ✅ Fact
                  </button>

                </div>

                {mythAnswer && (
                  <div
                    className={`answer-feedback ${
                      mythAnswer ===
                      mythQuestions[mythQuestion]
                        .answer
                        ? "correct"
                        : "wrong"
                    }`}
                  >

                    {mythAnswer ===
                    mythQuestions[mythQuestion]
                      .answer
                      ? "🎉 Correct!"
                      : "💡 Not quite!"}

                    <p>
                      {
                        mythQuestions[
                          mythQuestion
                        ].explanation
                      }
                    </p>

                  </div>
                )}

                {mythAnswer && (
                  <button
                    className="next-question-btn"
                    onClick={nextMythQuestion}
                  >
                    {mythQuestion ===
                    mythQuestions.length - 1
                      ? "See My Result 🏆"
                      : "Next Question →"}
                  </button>
                )}

              </>

            ) : (

              <>
                <div className="result-icon">
                  🏆
                </div>

                <h2>Great Job!</h2>

                <div className="final-score">
                  <span>Your Score</span>

                  <strong>
                    {mythScore} /{" "}
                    {mythQuestions.length}
                  </strong>
                </div>

                <p className="result-message">
                  {mythScore ===
                  mythQuestions.length
                    ? "Amazing! 🌟 You cleared all the myths!"
                    : mythScore >= 3
                    ? "Great work! 💗 Keep learning and spreading health awareness."
                    : "Good try! 🌷 There is always more to learn."}
                </p>

                <div className="result-buttons">

                  <button
                    className="modal-start-btn"
                    onClick={playMythAgain}
                  >
                    🔄 Play Again
                  </button>

                  <button
                    className="close-game-btn"
                    onClick={closeGame}
                  >
                    Back to Games
                  </button>

                </div>
              </>

            )}

          </div>
        </div>
      )}


      {/* =========================
          MEMORY MATCH GAME
      ========================= */}

      {selectedGame === "memory" && (

        <div className="game-modal-overlay">

          <div className="game-modal memory-game-modal">

            <button
              className="game-modal-close"
              onClick={closeGame}
            >
              ×
            </button>

            {!memoryComplete ? (

              <>
                <div className="modal-game-icon">
                  🧠
                </div>

                <h2>
                  Health Memory Match
                </h2>

                <p className="memory-intro">
                  Match each health topic with its
                  correct information.
                </p>

                <div className="memory-stats">
                  <span>
                    Moves: <strong>{memoryMoves}</strong>
                  </span>

                  <span>
                    Matches:{" "}
                    <strong>
                      {memoryMatched.length / 2}
                    </strong>
                    /4
                  </span>
                </div>

                <div className="memory-grid">

                  {memoryCards.map((card) => {

                    const isSelected =
                      memorySelected.includes(card.id);

                    const isMatched =
                      memoryMatched.includes(card.id);

                    return (
                      <button
                        key={card.id}
                        className={`memory-card ${
                          isSelected ? "memory-selected" : ""
                        } ${
                          isMatched ? "memory-matched" : ""
                        }`}
                        onClick={() =>
                          selectMemoryCard(card.id)
                        }
                        disabled={isMatched}
                      >

                        {!isSelected &&
                        !isMatched ? (
                          <span className="memory-question">
                            ?
                          </span>
                        ) : (
                          <>
                            <span className="memory-icon">
                              {card.icon}
                            </span>

                            <strong>
                              {card.title}
                            </strong>

                            <small>
                              {card.text}
                            </small>
                          </>
                        )}

                      </button>
                    );
                  })}

                </div>

                <button
                  className="next-question-btn"
                  onClick={playMemoryAgain}
                >
                  🔄 Restart Game
                </button>

              </>

            ) : (

              <>
                <div className="result-icon">
                  🧠
                </div>

                <h2>
                  Memory Master!
                </h2>

                <div className="final-score">
                  <span>Total Moves</span>

                  <strong>
                    {memoryMoves}
                  </strong>
                </div>

                <p className="result-message">
                  🎉 You matched all the health topics!
                  Great memory and great learning!
                </p>

                <div className="result-buttons">

                  <button
                    className="modal-start-btn"
                    onClick={playMemoryAgain}
                  >
                    🔄 Play Again
                  </button>

                  <button
                    className="close-game-btn"
                    onClick={closeGame}
                  >
                    Back to Games
                  </button>

                </div>
              </>

            )}

          </div>
        </div>
      )}


      {/* =========================
          SELF CARE CHALLENGE
      ========================= */}

      {selectedGame === "selfcare" && (

        <div className="game-modal-overlay">

          <div className="game-modal healthy-game-modal">

            {!selfCareResult ? (

              <>
                <button
                  className="game-modal-close"
                  onClick={closeGame}
                >
                  ×
                </button>

                <div className="modal-game-icon">
                  💗
                </div>

                <div className="game-progress">
                  Question {selfCareQuestion + 1} of{" "}
                  {selfCareQuestions.length}
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width:
                        `${
                          ((selfCareQuestion + 1) /
                            selfCareQuestions.length) *
                          100
                        }%`
                    }}
                  />
                </div>

                <h2>
                  Self-Care Challenge
                </h2>

                <p className="game-question">
                  {
                    selfCareQuestions[
                      selfCareQuestion
                    ].question
                  }
                </p>

                <div className="selfcare-options">

                  {selfCareQuestions[
                    selfCareQuestion
                  ].options.map((option) => (

                    <button
                      key={option}
                      className={`selfcare-option ${
                        selfCareAnswer === option
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        answerSelfCare(option)
                      }
                      disabled={
                        selfCareAnswer !== ""
                      }
                    >
                      {option}
                    </button>

                  ))}

                </div>

                {selfCareAnswer && (

                  <div
                    className={`answer-feedback ${
                      selfCareAnswer ===
                      selfCareQuestions[
                        selfCareQuestion
                      ].answer
                        ? "correct"
                        : "wrong"
                    }`}
                  >

                    {selfCareAnswer ===
                    selfCareQuestions[
                      selfCareQuestion
                    ].answer
                      ? "🎉 Correct!"
                      : "💡 Not quite!"}

                    <p>
                      Healthy self-care includes
                      taking care of your physical
                      and emotional well-being.
                    </p>

                  </div>

                )}

                {selfCareAnswer && (

                  <button
                    className="next-question-btn"
                    onClick={nextSelfCareQuestion}
                  >
                    {selfCareQuestion ===
                    selfCareQuestions.length - 1
                      ? "See My Result 🏆"
                      : "Next Question →"}
                  </button>

                )}

              </>

            ) : (

              <>
                <div className="result-icon">
                  💗
                </div>

                <h2>
                  Self-Care Complete!
                </h2>

                <div className="final-score">

                  <span>Your Score</span>

                  <strong>
                    {selfCareScore} /{" "}
                    {selfCareQuestions.length}
                  </strong>

                </div>

                <p className="result-message">
                  {selfCareScore ===
                  selfCareQuestions.length
                    ? "Amazing! 🌸 You know how to take care of yourself!"
                    : selfCareScore >= 3
                    ? "Great job! 💗 Keep practicing healthy self-care."
                    : "Good try! 🌷 Keep learning about healthy self-care."}
                </p>

                <div className="result-buttons">

                  <button
                    className="modal-start-btn"
                    onClick={playSelfCareAgain}
                  >
                    🔄 Play Again
                  </button>

                  <button
                    className="close-game-btn"
                    onClick={closeGame}
                  >
                    Back to Games
                  </button>

                </div>
              </>

            )}

          </div>
        </div>
      )}

    </div>
  );
}

export default Games;