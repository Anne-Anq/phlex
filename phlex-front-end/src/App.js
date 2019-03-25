import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import getPgs from "./service/pgFakeDb";
//Components
import Navbar from "./components/Navbar";
import ResultPage from "./components/ResultPage";
import LandingPage from './components/LandingPage';
import PhotographerSignup from "./components/PhotographerSignup/PhotographerSignupComp";

// Material 
import MaterialSignup from "./components/MaterialUI/SignupForm";

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
      },
      photographers: []
    },
    error: {},
  };
  componentDidMount() {
    const photographers = getPgs();
    this.setState(prevState => ({
      data: { ...prevState.data, photographers }
    }))
  }
  handleChange = e => {
    console.log(e.target.name, e.target.value);
    const { value, id } = e.target;
    let search = {};
    Object.keys(this.state.data.search).map(input => (
      input === id
        ? (search[input] = value)
        : (search[input] = this.state.data.search[input])
    ));
    this.setState(prevState =>
      ({
        data: { ...prevState.data, search }
      }));
  };

  handleSubmitSearch = () => {
    const searchString = this.state.data.search.photoType;
    if (searchString) {
      return this.props.history.push('/result');
    }
  };


  render() {
    return (
      <div className="App">
        <Navbar  {...this.props} />
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
            render={props => <PhotographerSignup />}
          />
          <Route
            path="/register"
            render={
              props => <MaterialSignup />
            }
          />
          <Route path="/login" render={props => <h1>I am the login page</h1>} />
          <Route
            exact
            path="/"
            //change this
            render={props => (
              <LandingPage
                {...props}
                {...this.state}
                onChange={e => this.handleChange(e)}
                onClick={this.handleSubmitSearch}
              />
            )}
          />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
