import React, { Component } from "react";
import PgCard from "./pgCard";
import SearchForm from "./searchForm";
import "../stylesheets/resultPage.css";

class ResultPage extends Component {
  render() {
    return (
      <div className="resultPage">
        <SearchForm onChange={this.props.onChange} data={this.props.data} />
        <PgCard />
      </div>
    );
  }
}

export default ResultPage;
