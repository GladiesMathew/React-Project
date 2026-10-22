import React, { useState } from "react";

import taj from "../images/taj.jpg";
import eiffel from "../images/eiffel.jpg";
import gandhi from "../images/gandhi.jpg";
import statue from "../images/statue.jpg";
import burj from "../images/burj.jpg";


export default function Gk() {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState({});
  const [showScore, setShowScore] = useState(false);

  const guessQuestions = [
    {
      id: 1,
      image: taj,
      question: "Can you guess this famous place?",
      answer: "Taj Mahal",
      options: ["Taj Mahal", "India Gate", "Red Fort", "Qutub Minar"],
    },
    {
      id: 2,
      image: eiffel,
      question: "Can you guess this famous tower?",
      answer: "Eiffel Tower",
      options: ["Eiffel Tower", "Big Ben", "Burj Khalifa", "Leaning Tower"],
    },
    {
      id: 3,
      image: gandhi,
      question: "Who is this famous person?",
      answer: "Mahatma Gandhi",
      options: [
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "APJ Abdul Kalam",
        "Subhash Chandra Bose",
      ],
    },
    {
      id: 4,
      image: statue,
      question: "Can you guess this famous statue?",
      answer: "Statue of Liberty",
      options: [
        "Statue of Liberty",
        "Christ the Redeemer",
        "Statue of Unity",
        "The Thinker",
      ],
    },
    {
      id: 5,
      image: burj,
      question: "Can you guess this famous building?",
      answer: "Burj Khalifa",
      options: ["Burj Khalifa", "Taj Mahal", "Eiffel Tower", "Big Ben"],
    },
  ];

  const mcqQuestions = [
    {
      id: 6,
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
      answer: "New Delhi",
    },
    {
      id: 7,
      question: "How many days are there in a week?",
      options: ["5", "6", "7", "8"],
      answer: "7",
    },
    {
      id: 8,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      id: 9,
      question: "Which animal is known as the King of the Jungle?",
      options: ["Tiger", "Elephant", "Lion", "Bear"],
      answer: "Lion",
    },
    {
      id: 10,
      question: "Which is the largest ocean in the world?",
      options: [
        "Indian Ocean",
        "Atlantic Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ];

  const checkAnswer = (questionId, selectedAnswer, correctAnswer) => {
    if (answered[questionId]) {
      return;
    }

    setAnswered({
      ...answered,
      [questionId]: selectedAnswer,
    });

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleFinish = () => {
    setShowScore(true);
  };

  const restartQuiz = () => {
    setScore(0);
    setAnswered({});
    setShowScore(false);
  };

  return (
    <div className="container py-5">

      <h1 className="text-center mb-3">General Knowledge</h1>

      <p className="text-center mb-5">
        Learn something new and test your knowledge!
      </p>

     <h2 className="text-center mb-4">
         Guess the Picture
      </h2>

      {guessQuestions.map((item) => (
        <div className="card shadow-sm p-4 mb-4" key={item.id}>

          <h4>
            {item.id}. {item.question}
          </h4>

          <img
            src={item.image}
            alt="Guess"
            className="img-fluid rounded my-3"
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
            }}
          />

          <div className="d-flex flex-wrap gap-2">
            {item.options.map((option) => (
              <button
                key={option}
                className={`btn ${
                  answered[item.id]
                    ? option === item.answer
                      ? "btn-success"
                      : "btn-secondary"
                    : "btn-outline-primary"
                }`}
                onClick={() =>
                  checkAnswer(item.id, option, item.answer)
                }
                disabled={answered[item.id]}
              >
                {option}
              </button>
            ))}
          </div>

          {answered[item.id] && (
            <p className="mt-3">
              {answered[item.id] === item.answer ? (
                <span className="text-success">
                  ✅ Correct!
                </span>
              ) : (
                <span className="text-danger">
                  ❌ Wrong! Correct answer: {item.answer}
                </span>
              )}
            </p>
          )}
        </div>
      ))}

      <h2 className="text-center my-5">
         Simple GK Questions
      </h2>

      {mcqQuestions.map((item) => (
        <div className="card shadow-sm p-4 mb-4" key={item.id}>

          <h4>
            {item.id}. {item.question}
          </h4>

          <div className="mt-3">
            {item.options.map((option) => (
              <button
                key={option}
                className={`btn m-1 ${
                  answered[item.id]
                    ? option === item.answer
                      ? "btn-success"
                      : "btn-secondary"
                    : "btn-outline-primary"
                }`}
                onClick={() =>
                  checkAnswer(item.id, option, item.answer)
                }
                disabled={answered[item.id]}
              >
                {option}
              </button>
            ))}
          </div>

          {answered[item.id] && (
            <p className="mt-3">
              {answered[item.id] === item.answer ? (
                <span className="text-success">
                  ✅ Correct!
                </span>
              ) : (
                <span className="text-danger">
                  ❌ Wrong! Correct answer: {item.answer}
                </span>
              )}
            </p>
          )}
        </div>
      ))}
      <div className="text-center mt-5">

        <button
          className="btn btn-primary btn-lg"
          onClick={handleFinish}
        >
          Finish Quiz
        </button>

      </div>
      {showScore && (
        <div className="text-center mt-4 p-4 bg-light rounded">

          <h2> Your Score</h2>

          <h1>
            {score} / 10
          </h1>

          {score === 10 ? (
            <p>🏆 Excellent! You got all the answers correct!</p>
          ) : score >= 7 ? (
            <p>🌟 Great job! Keep learning!</p>
          ) : score >= 5 ? (
            <p>😊 Good try! You can do even better!</p>
          ) : (
            <p>💪 Keep learning and try again!</p>
          )}

          <button
            className="btn btn-success mt-2"
            onClick={restartQuiz}
          >
            Try Again
          </button>

        </div>
      )}

    </div>
  );
}

