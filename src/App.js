import React from "react";
import Navbar from "./components/layout/Navbar";
import UsersPage from "./components/Users/UsersPage";
import ReposPage from "./components/Repos/ReposPage";
import About from "./components/layout/About";
import NotFound from "./components/layout/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container content">
        <Switch>
          <Redirect from="/" exact to="/Users" />
          <Route exact path="/Users" component={UsersPage} />
          <Route exact path="/Repos" component={ReposPage} />
          <Route exact path="/Events" component={null} />
          <Route exact path="/About" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
