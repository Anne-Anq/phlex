import React, { Component } from "react";
import PgCards from "./resultPage/pgCards";
import SearchForm from "./resultPage/searchForm";
import Scroll from "./common/scroll";
import "../stylesheets/resultPage.css";

class ResultPage extends Component {
  render() {
    const { photographers, search } = this.props.data;
    return (
      <div className="resultPage">
        <SearchForm onChange={this.props.onChange} data={this.props.data} />
        <Scroll>
          <PgCards photographers={photographers} />
        </Scroll>
      </div>
    );
  }
}

export default ResultPage;
