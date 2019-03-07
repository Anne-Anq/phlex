import React, { Component } from "react";

import PgInfo from "./pgInfo";
import PgAvatar from './pgAvatar';
import PgReviews from "./pgReviews";

import "../../stylesheets/pgCard.css";

class PgCard extends Component {
  state = {

  };
  render() {
    const { photographer } = this.props;
    return <div className="pgCard">
      <div className="preview">
        <PgAvatar photographer={photographer} />
        <PgInfo photographer={photographer} />
        <div className="calendar">
          This is a placeholder for where the calendar should be
        </div>
      </div>
      <div className="collapsed-data">
        <div className="insta">
          <div className="pretend-pix">
            {[0, 1, 2, 3, 4, 5].map((el) => (<div key={el} className="pretend-pic">{el}</div>))}
          </div>
          <a className="more" href="/">more...</a>
        </div>
        <PgReviews photographer={photographer} />
      </div>
    </div >;
  }
}

export default PgCard;
