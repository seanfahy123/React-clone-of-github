import React from "react";
import User from "./User";

const Users = ({ apiData }) => {
  return (
    <div id="userDisplay">
      {apiData.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
