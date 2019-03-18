import React, { Component } from "react";

import PgInfo from "./PgInfo";
import PgAvatar from './PgAvatar';
import PgReviews from "./PgReviews";

import createCal from "../../service/fullCalendar"

import "../../stylesheets/pgCard.css";
import "../../stylesheets/calendar.css";

class PgCard extends Component {
  state = {
    isCollapsed: true
  };
  componentDidMount() {
    createCal();
    const { isFirst } = this.props;
    this.setState({ isCollapsed: !isFirst });

  }
  handleClick = () => {
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  }
  render() {
    const { photographer } = this.props;
    const { isCollapsed } = this.state;
    return <div className="pgCard">
      <div className="preview" onClick={this.handleClick}>
        <PgAvatar photographer={photographer} />
        <PgInfo photographer={photographer} />
        <div className="calendar">
        </div>
      </div>
      <div className={`collapsed-data ${isCollapsed ? "is-collapsed" : ""}`}>
        <div className="insta">
          <div className="pretend-pix">
            {[0, 1, 2, 3, 4, 5].map((el) => (<div key={el} className="pretend-pic">{el}</div>))}
          </div>
          <button type="button" className="btn btn-link more">more...</button>
        </div>
        <PgReviews photographer={photographer} />
      </div>
    </div >;
  }
}

export default PgCard;
