import React from 'react'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">

      
        <a className="navbar-brand kids-logo" href="/">
          Kids Learner
        </a>

       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

     
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/About">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/English">
                English
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Maths">
                Mathematics
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Gk">
                General Knowledge
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Stories">
                stories
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;