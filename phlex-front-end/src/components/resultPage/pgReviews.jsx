import React, { Component } from 'react';
import Stars from "../common/stars";
import "../../stylesheets/pgReviews.css";

class PgReviews extends Component {
    state = {}
    render() {
        return (
            <div className="reviews">
                <div className="first-review">
                    <div className="user-avatar">
                        <img src="https://images.unsplash.com/photo-1543229912-d69e86dc1dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                            alt="KateBuAvatar" />
                    </div>
                    <div className="user-info">
                        <div className="user-name">John Doe</div>
                        <Stars rating={4.5} />
                        <div className="date">20/02/2019</div>
                    </div>
                    <div className="review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rem esse sint animi quasi exercitationem quam cum facere natus nihil dolorem,</div>
                </div>
                <a className="more" href="/">more...</a>
            </div>
        );
    }
}

export default PgReviews;