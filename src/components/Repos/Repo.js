import React from "react";

const Repo = ({ repo }) => {
  console.log(repo);

  const getDescription = () => {
    const description = repo.description;
    if (description != null) {
      if (description.length < 300) {
        return description;
      } else {
        return `${description.substring(0, 300)}....`;
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
          {/* <a
            className="btn btn-outline-secondary"
            href={user.html_url + "?tab=repositories"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repos
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Repo;
