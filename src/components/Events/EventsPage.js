import React, { useState } from "react";
import Search from "../Layout/Search";
import axios from "axios";

const EventsPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [apiData, setApiData] = useState([]);

  const searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${text}&client_id=${
        process.env.REACT_APP_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    setApiData(res.data.items);
    setLoaded(true);
  };

  if (loaded === false) {
    return <Search searchUsers={searchUsers} searchType={"Events"} />;
  } else {
    console.log(apiData);
    return null;
  }
};

export default EventsPage;
