import React, { Fragment } from "react";

const IssuesButton = ({ url }) => {
  return (
    <Fragment>
      <a
        className="btn btn-outline-secondary"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Issues
      </a>
    </Fragment>
  );
};

export default IssuesButton;
