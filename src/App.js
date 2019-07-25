import React from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/Users/Users";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container content">
        <Users />
      </div>
    </div>
  );
}

export default App;
