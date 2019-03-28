import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import getPgs from "./service/pgFakeDb";
import Search from "./service/search";
//Components
import Navbar from "./components/Navbar";
import ResultPage from "./components/ResultPage";
import LandingPage from './components/LandingPage';
import PhotographerSignup from "./components/PhotographerSignup/PhotgrapherSignupMat";
import UserSignup from "./components/UserRegister/SignupForm";
import SignIn from "./components/SignIn/SignIn";

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
      photographers: [],
      filteredPhotographers: [],
    },
    error: {},
  };
  componentDidMount() {
    const photographers = getPgs();
    const filteredPhotographers = getPgs();
    this.setState(prevState => ({
      data: { ...prevState.data, photographers, filteredPhotographers }
    }))
  }

  componentDidUpdate() {
    
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

      const { photographers  } = this.state.data;

 
      const searchResult = new Search(photographers, search.photoType);
      let result = searchResult.getSearchResult();
      if(result.length !== 0) {
      this.setState(prevState => ({
        data: { ...prevState.data,  ...prevState.data.filteredPhotographers = result }
      }))
    




    //return this.props.history.push('/result');
    
    // this.setState(prevState =>
    //   ({
    //     data: { ...prevState.data, search }
    //   }));
  }
  };

  handleSubmitSearch = () => {
    const { search, photographers  } = this.state.data;
    if(search.photoType) {
      const searchResult = new Search(photographers, search.photoType);
      let result = searchResult.getSearchResult();
      if(result.length !== 0) {
      this.setState(prevState => ({
        data: { ...prevState.data, ...prevState.data.photographers = result }
      }))
    }
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
              props => <UserSignup />
            }
          />
          <Route path="/login" render={props => <SignIn/>} />
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
