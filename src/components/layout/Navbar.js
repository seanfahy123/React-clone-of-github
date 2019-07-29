import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  console.log(props);
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
              <NavLink className="nav-link" to="/Users">
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Repos">
                Repos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Events">
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
