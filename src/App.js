import React from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/Users/UsersContent";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container content">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
