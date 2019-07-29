import React, { Fragment } from "react";
import Repo from "./Repo";

const Repos = ({ apiData }) => {
  return (
    <Fragment>
      {apiData.map(repo => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </Fragment>
  );
};

export default Repos;
