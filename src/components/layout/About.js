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
    </div>
  );
};
export default About;
