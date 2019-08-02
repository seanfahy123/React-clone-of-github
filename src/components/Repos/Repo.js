import React from "react";
import RepoButton from "../Layout/RepoButton";
import IssuesButton from "../Layout/IssuesButton";

const Repo = ({ data }) => {
  const getDescription = () => {
    const description = data.description;
    if (description != null && description.length < 250) {
      return description;
    } else if (description != null) {
      return `${description.substring(0, 260)}....`;
    } else {
      return "there is no available description";
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="user-header">
          <h4 className="card-title">{data.name}</h4>
        </div>
        <div className="secondary-info">
          <div>
            <i className="fas fa-star" />
            {data.stargazers_count}
          </div>
          <div>
            <i className="fas fa-exclamation-circle" />
            {data.open_issues}
          </div>
          <div>
            <i className="fas fa-eye" />
            {data.watchers}
          </div>
          <div>
            <i className="fas fa-code-branch" />
            {data.forks}
          </div>
        </div>
        <h6 className="card-subtitle mb-2 text-muted">{getDescription()}</h6>
        <div className="card-buttons">
          <RepoButton url={data.svn_url} />
          <IssuesButton url={data.svn_url + "/issues"} />
        </div>
      </div>
    </div>
  );
};

export default Repo;
