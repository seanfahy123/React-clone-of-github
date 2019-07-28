import React from "react";
import User from "./User";

const Users = props => {
  console.log(props.apiData);
  return (
    <React.Fragment>
      {props.apiData.map(user => (
        <User key={user.id} user={user} />
      ))}
    </React.Fragment>
  );
};

export default Users;
