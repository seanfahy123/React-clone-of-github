import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a
          className="navbar-brand"
          href="https://github.com/seanfahy123/React-clone-of-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github in React
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="navbar-collapse collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Repos">
                Repos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="About">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
