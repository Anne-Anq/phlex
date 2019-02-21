import React, { Component } from "react";
import PgCard from "./pgCard";
import SearchForm from "./searchForm";
import "../stylesheets/resultPage.css";

class ResultPage extends Component {
  state = {};
  render() {
    return (
      <div className="resultPage">
        <SearchForm />
        <PgCard />
      </div>
    );
  }
}

export default ResultPage;
