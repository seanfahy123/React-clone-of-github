import React from "react";
import User from "./User";

const Users = props => {
  return (
    <div>
      {props.apiData.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
