import React from "react";

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
          <a
            className="btn btn-outline-secondary"
            href={data.svn_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
          <a
            className="btn btn-outline-secondary"
            href={data.svn_url + "/issues"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Issues
          </a>
        </div>
      </div>
    </div>
  );
};

export default Repo;
