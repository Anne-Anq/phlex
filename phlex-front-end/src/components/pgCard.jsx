import React, { Component } from "react";
import "../stylesheets/pgCard.css";

class PgCard extends Component {
  state = {};
  render() {
    return <div className="pgCard">
      <div className="preview">
        <div className="pg-avatar">
          <img src="https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="KateBuAvatar" />
        </div>
        <div className="info">
          blah
        </div>
        <div className="calendar">
          This is a placeholder for where the calendar should be
        </div>
      </div>
      <div className="collapsed-data">
        <div className="insta">
          <div className="pretend-pix">
            {[0, 1, 2, 3, 4, 5].map((el) => (<div className="pretend-pic">{el}</div>))}
          </div>
          <a className="more" href="#">more...</a>
        </div>
        <div className="reviews">
          <div className="first-review">
            <div className="user-avatar">
              <img src="https://images.unsplash.com/photo-1543229912-d69e86dc1dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="KateBuAvatar" />
            </div>
            <div className="user-info">
              <div className="user-name">John Doe</div>
              <div className="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
              </div>
              <div className="date">20/02/2019</div>
            </div>
            <div className="review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rem esse sint animi quasi exercitationem quam cum facere natus nihil dolorem,</div>
          </div>
          <a className="more" href="#">more...</a>
        </div>
      </div>
    </div >;
  }
}

export default PgCard;
