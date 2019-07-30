import React from "react";

const Repo = ({ repo }) => {
  console.log(repo);

  const getDescription = () => {
    const description = repo.description;
    if (description != null) {
      if (description.length < 250) {
        return description;
      } else {
        return `${description.substring(0, 260)}....`;
      }
    } else {
      return "there is no available description";
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="user-header">
          <h4 className="card-title">{repo.name}</h4>
        </div>
        <div className="secondary-info">
          <div>
            <i className="fas fa-star" />
            {repo.stargazers_count}
          </div>
          <div>
            <i className="fas fa-exclamation-circle" />
            {repo.open_issues}
          </div>
          <div>
            <i className="fas fa-eye" />
            {repo.watchers}
          </div>
          <div>
            <i className="fas fa-code-branch" />
            {repo.forks}
          </div>
        </div>
        <h6 className="card-subtitle mb-2 text-muted">{getDescription()}</h6>
        <div className="user-buttons">
          <a
            className="btn btn-outline-secondary"
            href={repo.svn_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
          <a
            className="btn btn-outline-secondary"
            href={repo.svn_url + "/issues"}
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
