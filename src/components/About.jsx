import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">

        <div className="about-hero-content">

          <h1>Learning Today, Growing Tomorrow</h1>

          <p>
            "Every child has the ability to learn,
            explore, and achieve great things."
          </p>

        </div>

      </section>


      <section className="why-section">

        <div className="why-content">

          <h2>Why Choose Kids Learner?</h2>

          <p>
            Kids Learner provides a simple and enjoyable learning
            environment where children can learn at their own pace.
          </p>

          <div className="why-cards">

            <div className="why-card">
              <span>📚</span>
              <h3>Fun Learning</h3>
              <p>
                Learning activities are designed to make education
                enjoyable and interesting.
              </p>
            </div>

            <div className="why-card">
              <span>🧠</span>
              <h3>Improve Skills</h3>
              <p>
                Children can improve their knowledge, thinking,
                and problem-solving skills.
              </p>
            </div>

            <div className="why-card">
              <span>🌟</span>
              <h3>Learn & Grow</h3>
              <p>
                We encourage children to explore new ideas and
                learn something new every day.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="learn-section">

        <h2>What Can You Learn?</h2>

        <p className="learn-intro">
          Explore different subjects and make your learning journey fun!
        </p>


        <div className="learning-cards">

          <div className="learning-card">

            <div className="learning-card-content">

              <h3>English</h3>

              <p>
                Learn new words, improve vocabulary, and practice
                simple English activities.
              </p>

              <Link to="/english" className="learn-btn">
                Learn English
              </Link>

            </div>

          </div>


          <div className="learning-card">


            <div className="learning-card-content">

              <h3>Mathematics</h3>

              <p>
                Practice numbers, addition, subtraction,
                multiplication, and other fun activities.
              </p>

              <Link to="/maths" className="learn-btn">
                Learn Mathematics
              </Link>

            </div>

          </div>

          <div className="learning-card">


            <div className="learning-card-content">

              <h3>General Knowledge</h3>

              <p>
                Discover interesting facts about animals,
                science, sports, countries, and nature.
              </p>

              <Link to="/gk" className="learn-btn">
                Explore GK
              </Link>

            </div>

          </div>


          <div className="learning-card">

            <div className="learning-card-content">

              <h3>Moral Stories</h3>

              <p>
                Read simple and meaningful stories that teach
                children valuable life lessons.
              </p>

              <Link to="/stories" className="learn-btn">
                Read Stories
              </Link>

            </div>

          </div>

        </div>

      </section>

      <section className="testimonial-section">

        <h2>What Parents Say</h2>

        <p className="testimonial-intro">
          Hear what parents think about their children's
          learning experience.
        </p>


        <div className="testimonial-cards">

          <div className="testimonial-card">

            <div className="quote">❝</div>

            <p>
              Kids Learner has made learning more enjoyable for
              my child. The activities are simple and interesting.
            </p>

            <h4>— Anitha, Parent</h4>

          </div>


          <div className="testimonial-card">

            <div className="quote">❝</div>

            <p>
              My child enjoys exploring different subjects on
              this platform. It has made learning a fun experience.
            </p>

            <h4>— Rahul, Parent</h4>

          </div>


          <div className="testimonial-card">

            <div className="quote">❝</div>

            <p>
              I really like the simple design and educational
              activities. My child loves using Kids Learner.
            </p>

            <h4>— Meera, Parent</h4>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About