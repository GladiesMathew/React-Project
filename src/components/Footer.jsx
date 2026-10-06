import React from 'react'

function Footer() {
  return (
    <footer className="footer">

      <div className="container">
        <div className="row">

         
          <div className="col-lg-3 col-md-6 mb-4">
            <h4 className="footer-logo">Kids Learner</h4>

            <p className="footer-description">
              A fun and interactive learning platform designed
              to help children learn, explore and grow.
            </p>
          </div>


         
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Quick Links</h5>

            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/english">English</a></li>
              <li><a href="/mathematics">Mathematics</a></li>
            </ul>
          </div>


        
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Learning</h5>

            <ul className="footer-links">
              <li><a href="/general-knowledge">General Knowledge</a></li>
              <li><a href="/quiz">Fun Quiz</a></li>
              <li><a href="/activities">Activities</a></li>
              <li><a href="/Moral-stories">Moral stories</a></li>
            </ul>
          </div>


          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Contact Us</h5>

            <p className="contact-item">
              📧 kidslearner@gmail.com
            </p>

            <p className="contact-item">
              📞 +91 98765 43210
            </p>

            <p className="contact-item">
              📍 Kerala, India
            </p>
          </div>

        </div>


        
        <hr className="footer-line" />


      
        <div className="footer-bottom">

          <p>
            © 2026 Kids Learner. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;