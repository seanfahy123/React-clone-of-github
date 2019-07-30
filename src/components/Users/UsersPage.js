import React, { Fragment, useState } from "react";
import axios from "axios";
import Search from "../Layout/Search";
import MapApi from "../MapApi";
import User from "./User";
import Loading from "../Layout/Loading";

const UsersPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setloading] = useState(false);
  const [apiData, setApiData] = useState([]);

  const searchUsers = async text => {
    if (!text) {
      return;
    }

    setloading(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    setApiData(res.data.items);
    setLoaded(true);
    setloading(false);
  };

  return (
    <Fragment>
      <Search search={searchUsers} searchType={"Users"} />
      {loaded && (
        <div className="APIDisplay">
          <MapApi apiData={apiData} Child={User} />
        </div>
      )}
      {loading && <Loading />}
    </Fragment>
  );
};

export default UsersPage;
