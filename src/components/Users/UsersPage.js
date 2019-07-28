import React, { Component, Fragment } from "react";
import Search from "../layout/Search";
import axios from "axios";
import Users from "./Users";

export default class UsersPage extends Component {
  state = {
    loading: true,
    apiData: {},
    searchText: ""
  };

  searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    await this.setState({ apiData: res.data.items, loading: false });
    await console.log("The API has been called");
  };

  render() {
    const { apiData, loading } = this.state;

    if (loading === true) {
      return <Search searchUsers={this.searchUsers} searchType={"Users"} />;
    } else {
      return (
        <Fragment>
          <Search searchUsers={this.searchUsers} searchType={"Users"} />
          <Users apiData={apiData} />
        </Fragment>
      );
    }
  }
}
