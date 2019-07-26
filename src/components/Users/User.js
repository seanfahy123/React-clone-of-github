import React from "react";

const User = props => {
  console.log(props.user);
  return (
    <div className="card" key={props.user.id}>
      <div className="card-body">
        <h4 className="card-title">{props.user.login}</h4>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <img
            src={props.user.avatar_url}
            alt=""
            className="round-img"
            style={{ width: "60px" }}
          />
        </p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

export default User;
