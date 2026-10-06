import React, { useState } from "react";
import  storiesHero from "../images/stories1.jpg";
const Stories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [completed, setCompleted] = useState([]);

  const stories = [
    {
      id: 1,
      title: "The Kind Rabbit",
      emoji: "🐰",
      story: `Once there was a little rabbit who lived in a beautiful forest.

One day, the rabbit saw a small bird that was hurt and could not fly. The rabbit felt sorry for the bird and brought some food and water.

The rabbit took care of the bird every day. After a few days, the bird became healthy and flew happily again.

The rabbit was happy because it had helped a friend.`,
      moral: "Kindness makes the world a happier place.",
    },

    {
      id: 2,
      title: "The Lion and the Mouse",
      emoji: "🦁",
      story: `One day, a lion was sleeping under a tree. A little mouse accidentally ran over the lion.

The lion caught the mouse, but the mouse asked the lion to let him go. The lion kindly let the mouse go.

A few days later, the lion was caught in a hunter's net. The mouse heard the lion and quickly came to help.

The mouse cut the net with his sharp teeth and the lion became free.`,
      moral: "Even a small friend can be a great help.",
    },

    {
      id: 3,
      title: "The Thirsty Crow",
      emoji: "🐦",
      story: `One hot day, a crow was very thirsty. It searched everywhere for water.

At last, the crow found a pot with a little water inside. The water was too low for the crow to reach.

The crow thought carefully. It found some small stones and dropped them into the pot one by one.

The water slowly came up. The crow was finally able to drink the water and happily flew away.`,
      moral: "Think wisely and never give up.",
    },
  ];

  const openStory = (story) => {
    setSelectedStory(story);
  };

  const completeStory = (id) => {
    if (!completed.includes(id)) {
      setCompleted((previous) => [...previous, id]);
    }
  };

  const isCompleted = (id) => {
    return completed.includes(id);
  };

  return (
    <div className="stories-page">

     

      <section
        className="stories-hero"
                   style={{
                          backgroundImage: `
                            url(${storiesHero})
                          `,
                        }}
                      >
      
        <div className="stories-hero-overlay">
          <h1>Moral Stories</h1>

          <p>Read • Learn • Be Kind • Grow 🌟</p>

          <button
            onClick={() =>
              document
                .getElementById("stories-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Reading
          </button>
        </div>
      </section>

    

      <section className="stories-intro">
        <h2>Let's Read and Learn! 📖</h2>

        <p>
          Moral stories help us learn good habits, kind behaviour and
          important values. Read each story carefully and discover
          something good from every story.
        </p>

        <p className="story-highlight">
          Read a story • Learn a lesson • Earn a chocolate 🍫
        </p>
      </section>

    
      {!selectedStory && (
        <section className="stories-section" id="stories-section">

          <h2>Choose a Story</h2>

          <div className="story-cards">

            {stories.map((story) => (
              <div className="story-card" key={story.id}>

                <div className="story-emoji">
                  {story.emoji}
                </div>

                <div className="story-card-content">

                  <h3>{story.title}</h3>

                  <p>
                    Read this short story and learn a beautiful
                    life lesson.
                  </p>

                  {isCompleted(story.id) ? (
                    <div className="completed-message">
                      ✓ Completed 🍫
                    </div>
                  ) : (
                    <button
                      className="read-button"
                      onClick={() => openStory(story)}
                    >
                      📖 Read Story
                    </button>
                  )}

                </div>

              </div>
            ))}

          </div>

    
          <div className="reward-box">

            <h3>🍫 Your Chocolate Rewards</h3>

            <div className="chocolate-list">

              {stories.map((story) => (
                <span
                  key={story.id}
                  className={
                    isCompleted(story.id)
                      ? "chocolate earned"
                      : "chocolate"
                  }
                >
                  {isCompleted(story.id) ? "🍫" : "🔒"}
                </span>
              ))}

            </div>

            <p>
              You earned {completed.length} out of {stories.length}{" "}
              chocolates!
            </p>

            {completed.length === stories.length && (
              <h4>
                 Amazing! You completed all the stories!
              </h4>
            )}

          </div>

        </section>
      )}

     

      {selectedStory && (
        <section className="story-reading">

          <button
            className="back-button"
            onClick={() => setSelectedStory(null)}
          >
            ← Back to Stories
          </button>

          <div className="story-reading-card">

            <div className="story-reading-emoji">
              {selectedStory.emoji}
            </div>

            <h2>{selectedStory.title}</h2>

            <div className="story-content">

              {selectedStory.story
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

            </div>

            <div className="moral-box">

              <h3>🌟 What We Learn</h3>

              <p>{selectedStory.moral}</p>

            </div>

            {!isCompleted(selectedStory.id) ? (
              <button
                className="complete-button"
                onClick={() => {
                  completeStory(selectedStory.id);
                  setSelectedStory(null);
                }}
              >
                ✅ Complete Story
              </button>
            ) : (
              <div className="already-completed">
                🎉 Story Completed! 🍫
              </div>
            )}

          </div>

        </section>
      )}

    </div>
  );
};

export default Stories;