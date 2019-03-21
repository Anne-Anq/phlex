import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/Navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    const { location }= this.props;
    return (
      <nav
        id="navbar"
        className={
          location.pathname === '/'
            ? "navbar navbar-expand-lg navbar-dark bg-dark"
            : "navbar navbar-expand-lg navbar-light bg-light"
        }
      >
        <NavLink className="navbar-brand" to="/">
          Phlex
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto d-flex justify-content-between">
            <li className="d-lg-flex flex-row">
              {!this.props.isLandingPage && (
                <NavLink to="/result" className="nav-item nav-link">
                  Find a photographer <span className="sr-only">(current)</span>
                </NavLink>
              )}
              <NavLink to="/join" className="nav-item nav-link">
                Become a photographer <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="d-lg-flex flex-row">
              <NavLink to="/register" className="nav-item nav-link">
                Sign Up <span className="sr-only">(current)</span>
              </NavLink>
              <NavLink to="/login" className="nav-item nav-link">
                Sign In <span className="sr-only">(current)</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
