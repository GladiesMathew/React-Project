import React, { useState } from "react";
import  mathsHero from "../images/maths2.jpg";

const Maths = () => {
  const [level, setLevel] = useState(null);

  const [beginnerScore, setBeginnerScore] = useState(0);
  const [intermediateScore, setIntermediateScore] = useState(0);
  const [advancedScore, setAdvancedScore] = useState(0);

  const [answered, setAnswered] = useState({});
  const [feedback, setFeedback] = useState({});


  const beginnerQuestions = [
    {
      id: "b1",
      question: "🍎 🍎 🍎 🍎 🍎",
      text: "How many apples are there?",
      options: ["4", "5", "6", "7"],
      answer: "5",
    },
    {
      id: "b2",
      question: "🍊 🍊 🍊 🍊",
      text: "How many oranges are there?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      id: "b3",
      question: "⭐ ⭐ ⭐ ⭐ ⭐ ⭐",
      text: "How many stars are there?",
      options: ["5", "6", "7", "8"],
      answer: "6",
    },
    {
      id: "b4",
      question: "🐶 🐶 🐶",
      text: "How many dogs are there?",
      options: ["2", "3", "4", "5"],
      answer: "3",
    },
  ];


  const additionQuestions = [
    {
      id: "a1",
      question: "5 + 3 = ?",
      options: ["7", "8", "9", "10"],
      answer: "8",
    },
    {
      id: "a2",
      question: "7 + 6 = ?",
      options: ["12", "13", "14", "15"],
      answer: "13",
    },
    {
      id: "a3",
      question: "9 + 8 = ?",
      options: ["15", "16", "17", "18"],
      answer: "17",
    },
    {
      id: "a4",
      question: "12 + 5 = ?",
      options: ["15", "16", "17", "18"],
      answer: "17",
    },
  ];

  const subtractionQuestions = [
    {
      id: "s1",
      question: "9 - 4 = ?",
      options: ["4", "5", "6", "7"],
      answer: "5",
    },
    {
      id: "s2",
      question: "15 - 7 = ?",
      options: ["6", "7", "8", "9"],
      answer: "8",
    },
    {
      id: "s3",
      question: "18 - 9 = ?",
      options: ["7", "8", "9", "10"],
      answer: "9",
    },
    {
      id: "s4",
      question: "20 - 6 = ?",
      options: ["12", "13", "14", "15"],
      answer: "14",
    },
  ];

  const advancedQuestions = [
    {
      id: "ad1",
      question: "6 + 7 = ?",
      options: ["11", "12", "13", "14"],
      answer: "13",
    },
    {
      id: "ad2",
      question: "20 - 8 = ?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
    {
      id: "ad3",
      question: "4 × 5 = ?",
      options: ["15", "20", "25", "30"],
      answer: "20",
    },
    {
      id: "ad4",
      question: "9 + 6 - 3 = ?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
    {
      id: "ad5",
      question: "7 × 3 = ?",
      options: ["18", "20", "21", "24"],
      answer: "21",
    },
    {
      id: "ad6",
      question: "25 - 10 + 5 = ?",
      options: ["15", "18", "20", "25"],
      answer: "20",
    },
  ];


  const checkAnswer = (questionId, selectedAnswer, correctAnswer, levelName) => {
    if (answered[questionId]) return;

    const isCorrect = selectedAnswer === correctAnswer;

    setAnswered((previous) => ({
      ...previous,
      [questionId]: true,
    }));

    setFeedback((previous) => ({
      ...previous,
      [questionId]: isCorrect ? "correct" : "wrong",
    }));

    if (isCorrect) {
      if (levelName === "beginner") {
        setBeginnerScore((previous) => previous + 1);
      }

      if (levelName === "intermediate") {
        setIntermediateScore((previous) => previous + 1);
      }

      if (levelName === "advanced") {
        setAdvancedScore((previous) => previous + 1);
      }
    }
  };

  const ScoreBoard = ({ score, total }) => {
    const percentage = Math.round((score / total) * 100);

    let message = "";

    if (percentage === 100) {
      message = "🌟 Amazing! Perfect Score!";
    } else if (percentage >= 70) {
      message = "👏 Great job! Keep learning!";
    } else if (percentage >= 40) {
      message = "😊 Good effort! Keep practicing!";
    } else {
      message = "💪 Keep trying! You can do it!";
    }

    return (
      <div className="math-score-board">
        <div className="score-icon">🏆</div>

        <div className="score-content">
          <h3>Your Score</h3>

          <div className="score-number">
            {score} / {total}
          </div>

          <div className="math-progress-container">
            <div
              className="math-progress-bar"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>

          <p>{message}</p>
        </div>
      </div>
    );
  };

  const QuestionCard = ({ question, levelName }) => {
    return (
      <div className="math-question-card">
        <h3>{question.question}</h3>

        {question.text && <p>{question.text}</p>}

        <div className="math-options">
          {question.options.map((option) => (
            <button
              key={option}
              className={`math-option ${
                feedback[question.id] === "correct" &&
                option === question.answer
                  ? "correct-option"
                  : ""
              } ${
                feedback[question.id] === "wrong" &&
                option !== question.answer
                  ? ""
                  : ""
              }`}
              onClick={() =>
                checkAnswer(
                  question.id,
                  option,
                  question.answer,
                  levelName
                )
              }
              disabled={answered[question.id]}
            >
              {option}
            </button>
          ))}
        </div>

        {feedback[question.id] === "correct" && (
          <p className="correct-feedback">✅ Correct! Great job!</p>
        )}

        {feedback[question.id] === "wrong" && (
          <p className="wrong-feedback">
            ❌ Wrong! The correct answer is {question.answer}.
          </p>
        )}
      </div>
    );
  };

  const resetGame = () => {
    setLevel(null);

    setBeginnerScore(0);
    setIntermediateScore(0);
    setAdvancedScore(0);

    setAnswered({});
    setFeedback({});
  };

  return (
    <div className="maths-page">

  
      <section
        className="maths-hero"
                 style={{
                   backgroundImage: `
                     url(${mathsHero})
                   `,
                 }}
               >
        <div className="maths-hero-overlay">
          <h1>Learn Mathematics</h1>

          <p>
            Count, Add, Subtract and Multiply!
          </p>

          <button
            onClick={() =>
              document
                .getElementById("maths-intro")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Learning
          </button>
        </div>
      </section>

    

      <section className="maths-intro" id="maths-intro">
        <h2>Let's Learn Mathematics! 🧮</h2>

        <p>
          Mathematics helps us understand numbers and solve problems in
          our everyday life. Here, you can learn counting, addition,
          subtraction and multiplication in a simple and fun way.
        </p>

        <p className="maths-learning-line">
          Count • Add • Subtract • Multiply • Have Fun!
        </p>
      </section>

     

      {!level && (
        <section className="maths-level-section">
          <h2>Choose Your Level</h2>

          <div className="maths-level-cards">

            <div className="maths-level-card beginner-card">
              <div className="level-emoji">🌱</div>

              <h3>Beginner</h3>

              <p>
                Start with counting objects and numbers.
              </p>

              <span>4 Questions</span>

              <button onClick={() => setLevel("beginner")}>
                Start Beginner
              </button>
            </div>

            <div className="maths-level-card intermediate-card">
              <div className="level-emoji">⭐</div>

              <h3>Intermediate</h3>

              <p>
                Practice addition and subtraction.
              </p>

              <span>8 Questions</span>

              <button onClick={() => setLevel("intermediate")}>
                Start Intermediate
              </button>
            </div>

            <div className="maths-level-card advanced-card">
              <div className="level-emoji">🚀</div>

              <h3>Advanced</h3>

              <p>
                Solve mixed mathematics questions.
              </p>

              <span>6 Questions</span>

              <button onClick={() => setLevel("advanced")}>
                Start Advanced
              </button>
            </div>

          </div>
        </section>
      )}

      

      {level === "beginner" && (
        <section className="maths-activity">

          <button className="back-button" onClick={() => setLevel(null)}>
            ← Back to Levels
          </button>

          <h2>🌱 Beginner - Count the Items</h2>

          <p className="activity-description">
            Look at the pictures carefully and count how many items you
            can see.
          </p>

          <ScoreBoard score={beginnerScore} total={4} />

          <div className="math-question-container">
            {beginnerQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                levelName="beginner"
              />
            ))}
          </div>

          <button className="reset-button" onClick={resetGame}>
            🔄 Start Again
          </button>

        </section>
      )}


      {level === "intermediate" && (
        <section className="maths-activity">

          <button className="back-button" onClick={() => setLevel(null)}>
            ← Back to Levels
          </button>

          <h2>⭐ Intermediate Mathematics</h2>

          <p className="activity-description">
            Practice addition and subtraction. Choose the correct answer.
          </p>

          <ScoreBoard score={intermediateScore} total={8} />


          <div className="math-topic">
            <h3>➕ Addition</h3>

            {additionQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                levelName="intermediate"
              />
            ))}
          </div>


          <div className="math-topic">
            <h3>➖ Subtraction</h3>

            {subtractionQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                levelName="intermediate"
              />
            ))}
          </div>

          <button className="reset-button" onClick={resetGame}>
            🔄 Start Again
          </button>

        </section>
      )}


      {level === "advanced" && (
        <section className="maths-activity">

          <button className="back-button" onClick={() => setLevel(null)}>
            ← Back to Levels
          </button>

          <h2>🚀 Advanced Mathematics</h2>

          <p className="activity-description">
            Solve the mixed questions using addition, subtraction and
            multiplication.
          </p>

          <ScoreBoard score={advancedScore} total={6} />

          <div className="math-question-container">
            {advancedQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                levelName="advanced"
              />
            ))}
          </div>

          <button className="reset-button" onClick={resetGame}>
            🔄 Start Again
          </button>

        </section>
      )}

    </div>
  );
};

export default Maths;