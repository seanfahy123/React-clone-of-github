import React, { Fragment, useState } from "react";
import axios from "axios";
import Search from "../Layout/Search";
import MapApi from "../MapApi";
import Repo from "./Repo";
import Loading from "../Layout/Loading";

const ReposPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setloading] = useState(false);
  const [apiData, setApiData] = useState([]);

  const searchRepos = async text => {
    if (!text) {
      return;
    }

    setloading(true);

    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${text}&client_id=${
        process.env.REACT_APP_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    setApiData(res.data.items);
    setLoaded(true);
    setloading(false);
  };

  return (
    <Fragment>
      <Search search={searchRepos} searchType={"Repos"} />
      {loaded && (
        <div className="APIDisplay">
          <MapApi apiData={apiData} Child={Repo} />
        </div>
      )}
      {loading && <Loading />}
    </Fragment>
  );
};

export default ReposPage;
