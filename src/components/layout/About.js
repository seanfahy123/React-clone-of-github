import React from "react";

const About = () => {
  return (
    <div>
      <p className="text-primary about">
        This app is designed to allow the user to search GitHub's API for GitHub
        users, repos and events.
      </p>
      <p className="text-primary about">
        It is build using React version {React.version}
      </p>
      <p className="text-primary about">
        Technologies used: React, React-Router, Axios, Fragments and Hooks.
      </p>
      <p className="text-primary about">
        The source code is available here:
        <a
          href="https://github.com/seanfahy123/React-clone-of-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github" />
        </a>
      </p>
    </div>
  );
};
export default About;
