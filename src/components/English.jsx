import React, { useState } from "react";
import englishHero from "../images/eng2.jpg";

function English() {
  const [level, setLevel] = useState(null);


  const [beginnerScore, setBeginnerScore] = useState(0);
  const [intermediateScore, setIntermediateScore] = useState(0);
  const [advancedScore, setAdvancedScore] = useState(0);

  
  const [answered, setAnswered] = useState({});

  
  const [fillAnswers, setFillAnswers] = useState({});
  const [fillFeedback, setFillFeedback] = useState({});

  const [matchFeedback, setMatchFeedback] = useState({});

  const [sentenceFeedback, setSentenceFeedback] = useState({});

  const [wordFeedback, setWordFeedback] = useState({});

  const [vocabFeedback, setVocabFeedback] = useState({});

  const [soundFeedback, setSoundFeedback] = useState({});

  const [storyFeedback, setStoryFeedback] = useState({});


  const fillQuestions = [
    {
      id: "fill1",
      question: "The sky is ____.",
      answer: "blue",
    },
    {
      id: "fill2",
      question: "A dog can ____.",
      answer: "bark",
    },
    {
      id: "fill3",
      question: "We drink ____ when we are thirsty.",
      answer: "water",
    },
  ];

  const matchQuestions = [
    {
      id: "match1",
      word: "Happy",
      options: ["Joyful", "Angry", "Sad", "Tired"],
      answer: "Joyful",
    },
    {
      id: "match2",
      word: "Big",
      options: ["Tiny", "Large", "Short", "Weak"],
      answer: "Large",
    },
    {
      id: "match3",
      word: "Fast",
      options: ["Slow", "Late", "Quick", "Weak"],
      answer: "Quick",
    },
  ];

  const sentenceQuestions = [
    {
      id: "sentence1",
      question: "I ____ to school every day.",
      options: ["go", "eat", "sleep", "drink"],
      answer: "go",
    },
    {
      id: "sentence2",
      question: "The cat is ____ the table.",
      options: ["on", "run", "eat", "jump"],
      answer: "on",
    },
    {
      id: "sentence3",
      question: "She ____ a beautiful flower.",
      options: ["has", "jump", "drink", "run"],
      answer: "has",
    },
  ];


  const wordQuestions = [
    {
      id: "word1",
      word: "C _ T",
      letters: ["A", "O", "E", "I"],
      answer: "A",
    },
    {
      id: "word2",
      word: "D _ G",
      letters: ["A", "O", "E", "U"],
      answer: "O",
    },
    {
      id: "word3",
      word: "S _ N",
      letters: ["A", "O", "E", "I"],
      answer: "U",
    },
  ];

  const vocabularyQuestions = [
    {
      id: "vocab1",
      question: "What is the meaning of 'Huge'?",
      options: ["Very small", "Very big", "Very slow", "Very short"],
      answer: "Very big",
    },
    {
      id: "vocab2",
      question: "What is the meaning of 'Begin'?",
      options: ["Start", "Finish", "Sleep", "Stop"],
      answer: "Start",
    },
    {
      id: "vocab3",
      question: "What is the meaning of 'Silent'?",
      options: ["Noisy", "Fast", "Quiet", "Happy"],
      answer: "Quiet",
    },
  ];

  const soundQuestions = [
    {
      id: "sound1",
      word: "apple",
      options: ["Apple", "Orange", "Banana", "Mango"],
    },
    {
      id: "sound2",
      word: "elephant",
      options: ["Tiger", "Elephant", "Lion", "Horse"],
    },
    {
      id: "sound3",
      word: "school",
      options: ["School", "Garden", "House", "Park"],
    },
  ];


  const stories = [
    {
      id: "story1",
      title: "The Helpful Little Bird",

      text: `A little bird lived in a big tree.
One day, the bird saw an ant struggling in the water.
The bird dropped a small leaf into the water.
The ant climbed onto the leaf and became safe.
A few days later, the ant saw a hunter near the bird.
The ant quickly warned the bird.
The bird flew away safely.
They both learned that helping others is always a good thing.`,

      questions: [
        {
          id: "story1q1",
          question: "Who was struggling in the water?",
          options: ["The bird", "The ant", "The hunter", "The dog"],
          answer: "The ant",
        },
        {
          id: "story1q2",
          question: "What did the bird give the ant?",
          options: ["A leaf", "A stick", "A flower", "A stone"],
          answer: "A leaf",
        },
        {
          id: "story1q3",
          question: "What is the lesson of the story?",
          options: [
            "Helping others is good",
            "Never help anyone",
            "Birds cannot fly",
            "Ants are dangerous",
          ],
          answer: "Helping others is good",
        },
      ],
    },

    {
      id: "story2",
      title: "The Honest Boy",

      text: `Tom was walking home from school.
He found a wallet on the road.
There was some money inside the wallet.
Tom wanted to keep it, but he decided to find the owner.
He gave the wallet to his teacher.
The teacher found the owner and returned the wallet.
The owner thanked Tom for being honest.`,

      questions: [
        {
          id: "story2q1",
          question: "What did Tom find?",
          options: ["A book", "A wallet", "A toy", "A bag"],
          answer: "A wallet",
        },
        {
          id: "story2q2",
          question: "Who did Tom give the wallet to?",
          options: ["His friend", "His teacher", "His brother", "His father"],
          answer: "His teacher",
        },
        {
          id: "story2q3",
          question: "What quality did Tom show?",
          options: ["Anger", "Laziness", "Honesty", "Fear"],
          answer: "Honesty",
        },
      ],
    },
  ];


  const selectLevel = (selectedLevel) => {
    setLevel(selectedLevel);
  };

  const goBack = () => {
    setLevel(null);
  };



  const giveMark = (questionId, levelName) => {
    if (answered[questionId]) {
      return;
    }

    setAnswered((previous) => ({
      ...previous,
      [questionId]: true,
    }));

    if (levelName === "beginner") {
      setBeginnerScore((previous) => previous + 1);
    }

    if (levelName === "intermediate") {
      setIntermediateScore((previous) => previous + 1);
    }

    if (levelName === "advanced") {
      setAdvancedScore((previous) => previous + 1);
    }
  };


  const resetAll = () => {
    setBeginnerScore(0);
    setIntermediateScore(0);
    setAdvancedScore(0);

    setAnswered({});

    setFillAnswers({});
    setFillFeedback({});
    setMatchFeedback({});
    setSentenceFeedback({});
    setWordFeedback({});
    setVocabFeedback({});
    setSoundFeedback({});
    setStoryFeedback({});
  };


  const Feedback = ({ status }) => {
    if (!status) return null;

    if (status === "correct") {
      return <p className="correct-feedback">✓ Correct!</p>;
    }

    return <p className="wrong-feedback">✗ Wrong! Try again.</p>;
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
      <div className="score-board">

        <div className="score-icon">
          🏆
        </div>

        <div>
          <h3>Your Score</h3>

          <div className="score-number">
            {score} / {total}
          </div>

          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>

          <p className="score-message">
            {message}
          </p>
        </div>

      </div>
    );
  };

  const checkFill = (question) => {
    const answer = (fillAnswers[question.id] || "")
      .trim()
      .toLowerCase();

    if (answer === question.answer) {
      setFillFeedback((previous) => ({
        ...previous,
        [question.id]: "correct",
      }));

      giveMark(question.id, "beginner");
    } else {
      setFillFeedback((previous) => ({
        ...previous,
        [question.id]: "wrong",
      }));
    }
  };

  const checkMatch = (question, answer) => {
    if (answer === question.answer) {
      setMatchFeedback((previous) => ({
        ...previous,
        [question.id]: "correct",
      }));

      giveMark(question.id, "beginner");
    } else {
      setMatchFeedback((previous) => ({
        ...previous,
        [question.id]: "wrong",
      }));
    }
  };

  const checkSentence = (question, answer) => {
    if (answer === question.answer) {
      setSentenceFeedback((previous) => ({
        ...previous,
        [question.id]: "correct",
      }));

      giveMark(question.id, "beginner");
    } else {
      setSentenceFeedback((previous) => ({
        ...previous,
        [question.id]: "wrong",
      }));
    }
  };

  const checkWord = (question, letter) => {
    if (letter === question.answer) {
      setWordFeedback((previous) => ({
        ...previous,
        [question.id]: "correct",
      }));

      giveMark(question.id, "intermediate");
    } else {
      setWordFeedback((previous) => ({
        ...previous,
        [question.id]: "wrong",
      }));
    }
  };

  const checkVocabulary = (question, answer) => {
    if (answer === question.answer) {
      setVocabFeedback((previous) => ({
        ...previous,
        [question.id]: "correct",
      }));

      giveMark(question.id, "intermediate");
    } else {
      setVocabFeedback((previous) => ({
        ...previous,
        [question.id]: "wrong",
      }));
    }
  };

  const speakWord = (word) => {
    const speech = new SpeechSynthesisUtterance(word);

    speech.lang = "en-US";

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  const checkSound = (question, answer) => {
    if (answer.toLowerCase() === question.word.toLowerCase()) {
      setSoundFeedback((previous) => ({
        ...previous,
        [question.id]: "correct",
      }));

      giveMark(question.id, "intermediate");
    } else {
      setSoundFeedback((previous) => ({
        ...previous,
        [question.id]: "wrong",
      }));
    }
  };

  const checkStory = (question, answer) => {
    if (answer === question.answer) {
      setStoryFeedback((previous) => ({
        ...previous,
        [question.id]: "correct",
      }));

      giveMark(question.id, "advanced");
    } else {
      setStoryFeedback((previous) => ({
        ...previous,
        [question.id]: "wrong",
      }));
    }
  };


  return (
    <div className="english-page">
      <section
        className="english-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.40),
              rgba(0, 0, 0, 0.40)
            ),
            url(${englishHero})
          `,
        }}
      >
        <div className="hero-content">

          <h1>Learn English</h1>

          <p>
            Learn, Practice, Enjoy & Have Fun!
          </p>

          <span>
             Every word you learn makes you stronger
          </span>

        </div>
      </section>

      {!level && (
        <>
          <section className="english-intro">

            <h2>Let's Learn English Together! </h2>

            <p>
              English is a wonderful language that helps us
              communicate with people, read amazing stories,
              discover new ideas, and express ourselves.
            </p>

            <p>
              Here you can learn new words, complete fun activities,
              answer questions, listen to words, and read interesting
              stories.
            </p>

            <h3>Learn • Practice • Enjoy • Have Fun! </h3>

          </section>

          <section className="levels-section">

            <h2>Choose Your Level</h2>

            <p className="level-intro">
              Choose a level and start your English adventure!
            </p>

            <div className="level-cards">

              <button
                className="level-card"
                onClick={() => selectLevel("beginner")}
              >
                <span>🌱</span>

                <h3>Beginner</h3>

                <p>
                  Start learning simple words,
                  sentences and meanings.
                </p>

                <strong>9 Marks</strong>
              </button>

              <button
                className="level-card"
                onClick={() => selectLevel("intermediate")}
              >
                <span>📚</span>

                <h3>Intermediate</h3>

                <p>
                  Improve vocabulary, spelling
                  and listening skills.
                </p>

                <strong>9 Marks</strong>
              </button>

              <button
                className="level-card"
                onClick={() => selectLevel("advanced")}
              >
                <span>🚀</span>

                <h3>Advanced</h3>

                <p>
                  Read stories and test
                  your understanding.
                </p>

                <strong>6 Marks</strong>
              </button>

            </div>

          </section>
        </>
      )}

      {level === "beginner" && (
        <section className="activity-page">

          <button
            className="back-button"
            onClick={goBack}
          >
            ← Back to Levels
          </button>

          <div className="level-heading">
            <span>🌱</span>
            <h2>Beginner English</h2>
            <p>Let's start learning!</p>
          </div>

          <ScoreBoard
            score={beginnerScore}
            total={9}
          />

          <div className="activity-box">

            <div className="activity-title">
              <span>✏️</span>
              <div>
                <h3>Fill in the Blanks</h3>
                <p>Type the correct word.</p>
              </div>
            </div>

            {fillQuestions.map((question, index) => (
              <div
                className="question-card"
                key={question.id}
              >

                <span className="question-number">
                  Question {index + 1}
                </span>

                <h4>{question.question}</h4>

                <input
                  type="text"
                  placeholder="Type your answer"
                  value={fillAnswers[question.id] || ""}
                  onChange={(e) =>
                    setFillAnswers((previous) => ({
                      ...previous,
                      [question.id]: e.target.value,
                    }))
                  }
                />

                <button
                  className="check-button"
                  onClick={() => checkFill(question)}
                >
                  Check Answer
                </button>

                <Feedback
                  status={fillFeedback[question.id]}
                />

              </div>
            ))}

          </div>

          <div className="activity-box">

            <div className="activity-title">
              <span>🔗</span>

              <div>
                <h3>Match the Words</h3>
                <p>Choose a word with a similar meaning.</p>
              </div>
            </div>

            {matchQuestions.map((question, index) => (
              <div
                className="question-card"
                key={question.id}
              >

                <span className="question-number">
                  Question {index + 1}
                </span>

                <h4>{question.word}</h4>

                <div className="options-grid">

                  {question.options.map((option) => (
                    <button
                      key={option}
                      className="option-button"
                      onClick={() =>
                        checkMatch(question, option)
                      }
                    >
                      {option}
                    </button>
                  ))}

                </div>

                <Feedback
                  status={matchFeedback[question.id]}
                />

              </div>
            ))}

          </div>


          <div className="activity-box">

            <div className="activity-title">
              <span>📝</span>

              <div>
                <h3>Complete the Sentence</h3>
                <p>Choose the correct answer.</p>
              </div>
            </div>

            {sentenceQuestions.map((question, index) => (
              <div
                className="question-card"
                key={question.id}
              >

                <span className="question-number">
                  Question {index + 1}
                </span>

                <h4>{question.question}</h4>

                <div className="options-grid">

                  {question.options.map((option) => (
                    <button
                      key={option}
                      className="option-button"
                      onClick={() =>
                        checkSentence(question, option)
                      }
                    >
                      {option}
                    </button>
                  ))}

                </div>

                <Feedback
                  status={sentenceFeedback[question.id]}
                />

              </div>
            ))}

          </div>

          <ScoreBoard
            score={beginnerScore}
            total={9}
          />

        </section>
      )}
      {level === "intermediate" && (
        <section className="activity-page">

          <button
            className="back-button"
            onClick={goBack}
          >
            ← Back to Levels
          </button>

          <div className="level-heading">
            <span>📚</span>
            <h2>Intermediate English</h2>
            <p>Challenge yourself!</p>
          </div>

          <ScoreBoard
            score={intermediateScore}
            total={9}
          />

  

          <div className="activity-box">

            <div className="activity-title">
              <span>🔤</span>

              <div>
                <h3>Complete the Words</h3>
                <p>Choose the missing letter.</p>
              </div>
            </div>

            {wordQuestions.map((question, index) => (
              <div
                className="question-card"
                key={question.id}
              >

                <span className="question-number">
                  Question {index + 1}
                </span>

                <div className="missing-word">
                  {question.word}
                </div>

                <p>Choose the correct letter:</p>

                <div className="letter-options">

                  {question.letters.map((letter) => (
                    <button
                      key={letter}
                      className="letter-button"
                      onClick={() =>
                        checkWord(question, letter)
                      }
                    >
                      {letter}
                    </button>
                  ))}

                </div>

                <Feedback
                  status={wordFeedback[question.id]}
                />

              </div>
            ))}

          </div>

          <div className="activity-box">

            <div className="activity-title">
              <span>📖</span>

              <div>
                <h3>Vocabulary</h3>
                <p>Choose the correct meaning.</p>
              </div>
            </div>

            {vocabularyQuestions.map((question, index) => (
              <div
                className="question-card"
                key={question.id}
              >

                <span className="question-number">
                  Question {index + 1}
                </span>

                <h4>{question.question}</h4>

                <div className="options-grid">

                  {question.options.map((option) => (
                    <button
                      key={option}
                      className="option-button"
                      onClick={() =>
                        checkVocabulary(question, option)
                      }
                    >
                      {option}
                    </button>
                  ))}

                </div>

                <Feedback
                  status={vocabFeedback[question.id]}
                />

              </div>
            ))}

          </div>


          <div className="activity-box">

            <div className="activity-title">
              <span>🔊</span>

              <div>
                <h3>Listen & Find the Word</h3>
                <p>
                  Listen to the word and choose what you hear.
                </p>
              </div>
            </div>

            {soundQuestions.map((question, index) => (
              <div
                className="question-card"
                key={question.id}
              >

                <span className="question-number">
                  Question {index + 1}
                </span>

                <button
                  className="listen-button"
                  onClick={() => speakWord(question.word)}
                >
                  🔊 Listen to the Word
                </button>

                <div className="options-grid">

                  {question.options.map((option) => (
                    <button
                      key={option}
                      className="option-button"
                      onClick={() =>
                        checkSound(question, option)
                      }
                    >
                      {option}
                    </button>
                  ))}

                </div>

                <Feedback
                  status={soundFeedback[question.id]}
                />

              </div>
            ))}

          </div>

          <ScoreBoard
            score={intermediateScore}
            total={9}
          />

        </section>
      )}


      {level === "advanced" && (
        <section className="activity-page">

          <button
            className="back-button"
            onClick={goBack}
          >
            ← Back to Levels
          </button>

          <div className="level-heading">
            <span>🚀</span>
            <h2>Advanced English</h2>
            <p>Read, think and answer!</p>
          </div>

          <ScoreBoard
            score={advancedScore}
            total={6}
          />

          {stories.map((story) => (
            <div
              className="story-box"
              key={story.id}
            >

              <h3>📖 {story.title}</h3>

              <div className="story-text">
                {story.text}
              </div>

              <h4 className="story-question-title">
                Answer the Questions
              </h4>

              {story.questions.map((question, index) => (
                <div
                  className="question-card"
                  key={question.id}
                >

                  <span className="question-number">
                    Question {index + 1}
                  </span>

                  <h4>{question.question}</h4>

                  <div className="options-grid">

                    {question.options.map((option) => (
                      <button
                        key={option}
                        className="option-button"
                        onClick={() =>
                          checkStory(question, option)
                        }
                      >
                        {option}
                      </button>
                    ))}

                  </div>

                  <Feedback
                    status={storyFeedback[question.id]}
                  />

                </div>
              ))}

            </div>
          ))}

          <ScoreBoard
            score={advancedScore}
            total={6}
          />

        </section>
      )}

      {level && (
        <div className="reset-container">

          <button
            className="reset-button"
            onClick={resetAll}
          >
            🔄 Start Again
          </button>

        </div>
      )}

    </div>
  );
}

export default English;