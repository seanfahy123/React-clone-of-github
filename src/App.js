import React, { StrictMode } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import UsersPage from "./components/Users/UsersPage";
import ReposPage from "./components/Repos/ReposPage";
import About from "./components/Layout/About";
import NotFound from "./components/Layout/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {
  return (
    <StrictMode>
      <Router>
        <Navbar />
        <div className="container" id="content">
          <Switch>
            <Redirect from="/" exact to="/Users" />
            <Route exact path="/Users" component={UsersPage} />
            <Route exact path="/Repos" component={ReposPage} />>
            <Route exact path="/About" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </StrictMode>
  );
};

export default App;
