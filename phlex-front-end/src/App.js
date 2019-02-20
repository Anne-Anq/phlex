import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import ResultPage from "./components/resultPage";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/result" render={props => <ResultPage {...props} />} />
          <Route
            path="/join"
            render={props => <h1>I am the Become a photographer page</h1>}
          />
          <Route
            path="/register"
            render={props => <h1>I am the register page</h1>}
          />
          <Route path="/login" render={props => <h1>I am the login page</h1>} />
          <Route path="/" render={props => <h1>I am the home page</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
