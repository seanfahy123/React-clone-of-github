import React, { useState } from "react";
import axios from "axios";
import ReposButton from "../Buttons/ReposButton";
import ProfileButton from "../Buttons/ProfileButton";

const User = ({ data }) => {
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
    getUserBio(data.login);
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="user-header">
          <img
            className="profile-image"
            src={data.avatar_url}
            alt=""
            style={{ width: "60px" }}
          />
          <h4 className="card-title">{data.login}</h4>{" "}
        </div>
        <h6 className="card-subtitle mb-2 text-muted">{bio}</h6>
        <div className="card-buttons">
          <ProfileButton url={data.html_url} />
          <ReposButton url={data.html_url + "?tab=repositories"} />
        </div>
      </div>
    </div>
  );
};

export default User;
