import React, { Fragment, useState } from "react";
import Search from "../layout/Search";
import axios from "axios";
import Users from "../Users/Users";

const ReposPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [apiData, setApiData] = useState([]);

  const searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setApiData(res.data.items);
    setLoaded(true);
  };

  if (loaded === false) {
    return <Search searchUsers={searchUsers} searchType={"Repos"} />;
  } else {
    return (
      <Fragment>
        <Search searchUsers={searchUsers} searchType={"Repos"} />
        <Users apiData={apiData} />
      </Fragment>
    );
  }
};

export default ReposPage;
