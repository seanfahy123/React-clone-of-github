import React, { Fragment } from "react";

const ReposButton = ({ url }) => {
  return (
    <Fragment>
      <a
        className="btn btn-outline-secondary"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Profile
      </a>
    </Fragment>
  );
};

export default ReposButton;
