import React, { Component } from "react";
import PgCards from "./resultPage/PgCards";
import SearchForm from "./resultPage/SearchForm";
import Scroll from "./common/Scroll";
import "../stylesheets/ResultPage.css";

class ResultPage extends Component {
  render() {
    const { photographers } = this.props.data;
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
