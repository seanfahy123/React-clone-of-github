import React from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import UsersPage from "./components/Users/UsersPage";
import ReposPage from "./components/Repos/ReposPage";
import EventsPage from "./components/Events/EventsPage";
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
    <Router>
      <Navbar />
      <div className="container" id="content">
        <Switch>
          <Redirect from="/" exact to="/Users" />
          <Route exact path="/Users" component={UsersPage} />
          <Route exact path="/Repos" component={ReposPage} />
          <Route exact path="/Events" component={EventsPage} />
          <Route exact path="/About" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
