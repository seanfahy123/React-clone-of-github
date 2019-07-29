import React, { Fragment } from "react";
import User from "./User";

const Users = ({ apiData }) => {
  return (
    <Fragment>
      {apiData.map(user => (
        <User key={user.id} user={user} />
      ))}
    </Fragment>
  );
};

export default Users;
