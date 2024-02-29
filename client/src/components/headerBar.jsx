import React from "react";

const HeaderBar = () => {
  return (
    <>
      <nav className="navbar fixed-top " data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Coding Yaar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav5"
            aria-controls="navbarNav5"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav5">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  What I Do?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Portfolio</a>
              </li>

              <li className="nav-item">
                <a className="nav-link">Client Speak</a>
              </li>

              <li className="nav-item">
                <a className="nav-link">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
};

export default HeaderBar;
