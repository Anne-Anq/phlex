import React, { Component } from "react";
import PgCards from "./pgCards";
import SearchForm from "./searchForm";
import Scroll from "./common/scroll";
import "../stylesheets/resultPage.css";

class ResultPage extends Component {
  render() {
    return (
      <div className="resultPage">
        <SearchForm onChange={this.props.onChange} data={this.props.data} />
        <Scroll>
          <PgCards />
        </Scroll>



      </div>
    );
  }
}

export default ResultPage;
