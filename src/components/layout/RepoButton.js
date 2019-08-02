import React, { Fragment } from "react";

const RepoButton = ({ url }) => {
  return (
    <Fragment>
      <a
        className="btn btn-outline-secondary"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Repo
      </a>
    </Fragment>
  );
};

export default RepoButton;
