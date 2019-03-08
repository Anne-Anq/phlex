import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import getPgs from "./service/pgFakeDb";
//Components
import Navbar from "./components/navbar";
import ResultPage from "./components/resultPage";
import LandingPage from './components/LandingPage';
import Home from "./components/home";
import UserSignup from './components/UserSignup/UserSignupComp';

//Stylesheets
import "./App.css";


class App extends Component {
  state = {
    data: {
      search: {
        photoType: "",
        dateFrom: "",
        basePrice: "300",
        addPrice: "50",
        tradeOk: ""
      },
      photographers: []
    },
    error: {}
  };
  componentDidMount() {
    const photographers = getPgs();
    this.setState(prevState => ({
      data: { ...prevState.data, photographers: photographers }
    }))
  }
  handleChange = e => {
    const path = e.target.name ? e.target.name : e.target.id;
    const value =
      path !== "tradeOk"
        ? e.target.value
        : e.target.value === "yes"
          ? true
          : false;
    let search = {};
    Object.keys(this.state.data.search).map(input => {
      input === path
        ? (search[input] = value)
        : (search[input] = this.state.data.search[input]);
      return "";
    });

    this.setState({ data: { search } });
  };
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Navbar />
        <Switch>
          <Route
            path="/result"
            render={props => (
              <ResultPage
                {...props}
                {...this.state}
                onChange={e => this.handleChange(e)}
              />
            )}
          />
          <Route
            path="/join"
            render={props => <h1>I am the Become a photographer page</h1>}
          />
          <Route
            path="/register"
            render={
              props => <UserSignup />
              }
          />
          <Route path="/login" render={props => <h1>I am the login page</h1>} />
          <Route
            path="/"
            //change this
            render={props => (
              <Home
                {...props}
                {...this.state}
                onChange={e => this.handleChange(e)}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
