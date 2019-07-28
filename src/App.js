import React from "react";
import Navbar from "./components/layout/Navbar";
import UsersPage from "./components/Users/UsersPage";
import About from "./components/layout/About";
import NotFound from "./components/layout/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container content">
            <Switch>
              <Route exact path="/" component={UsersPage} />
              <Route exact path="/About" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
