import React from "react";

const User = props => {
  return (
    <div className="card" key={props.user.id}>
      <div className="card-body">
        <h4 className="card-title">{props.user.login}</h4>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <img
          src={props.user.avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <a
          className="card-link"
          href={props.user.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Profile
        </a>
        <a
          className="card-link"
          href={props.user.html_url + "?tab=repositories"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repos
        </a>
      </div>
    </div>
  );
};

// const userStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(2, 1fr)",
//   gridGap: "1rem"
// };

export default User;
