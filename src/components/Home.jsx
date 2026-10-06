import React from "react";
import { Link } from "react-router-dom";
import kids2 from "../images/kids2.jpg";
function Home() {
  return (

    <div className="home">
      <div className="home-hero">

        <div className="hero-content">
          <h1>Learn Today, Shine Tomorrow!</h1>

           <a href="#learning" className="start-btn">
            Start Learning
          </a>
        </div>

      </div>

      <div className="about">
        <div className="about-content">

          <h2>About Kids Learner</h2>

          <p>
            Kids Learner is a fun and interactive learning platform
            designed especially for children. It helps kids learn
            new things in a simple and enjoyable way. Children can 
            explore English, Mathematics, General Knowledge, Moral 
            Stories, and fun quizzes. Our aim is to make learning 
            interesting while helping children improve their knowledge,
            creativity,and problem-solving skills. We believe that every 
            child can learn, explore, and grow with the right learning environment.
          </p>

        </div>

        <div className="about-image">

          <img
            src={kids2}
            alt=""
          />

        </div>

      </div>

         <div id="learning" className="learning-section">

        <h2>Explore Our Learning Platform</h2>

        <p>
          Choose a subject and start your learning journey!
        </p>


        <div className="learning-buttons">

          <a href="/english" className="learning-btn">
            English
          </a>

          <a href="/maths" className="learning-btn">
            Mathematics
          </a>

          <a href="/stories" className="learning-btn">
            Moral Stories
          </a>

          <a href="/gk" className="learning-btn">
            General Knowledge
          </a>

        </div>

      </div>


    </div>


  )
}
export default Home