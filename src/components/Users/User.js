import React, { useState } from "react";
import axios from "axios";

const User = ({ user }) => {
  const [bio, setBio] = useState(null);

  const getUserBio = async user => {
    const userBio = await axios.get(
      `https://api.github.com/users/${user}?client_id=${
        process.env.REACT_APP_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    if (userBio.data.bio) {
      setBio(userBio.data.bio);
    } else {
      setBio("There is no user bio available");
    }
  };

  if (!bio) {
    getUserBio(user.login);
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="user-header">
          <img
            className="profile-image"
            src={user.avatar_url}
            alt=""
            style={{ width: "60px" }}
          />
          <h4 className="card-title">{user.login}</h4>{" "}
        </div>
        <h6 className="card-subtitle mb-2 text-muted"> {bio}</h6>
        <div className="user-buttons">
          <a
            className="btn btn-outline-secondary"
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Profile
          </a>
          <a
            className="btn btn-outline-secondary"
            href={user.html_url + "?tab=repositories"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repos
          </a>
        </div>
      </div>
    </div>
  );
};

export default User;
