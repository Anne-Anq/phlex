import React, { Component } from 'react';
import Stars from "../common/stars";
import "../../stylesheets/pgReviews.css";

class PgReviews extends Component {
    state = {
        isMoreClicked: false
    }
    handleClick = () => {
        const { isMoreClicked } = this.state;
        this.setState({ isMoreClicked: !isMoreClicked });
    }
    render() {
        const { reviews } = this.props.photographer;
        const { isMoreClicked } = this.state;
        return (
            <div className="reviews">
                {reviews && reviews.map((review, i) => (
                    <div key={`review${review.id}`} className={isMoreClicked || i === 0 ? "shown-review" : "hidden-review"} >
                        <div className="user-avatar">
                            <img src={review.user.avatarURL}
                                alt={`${review.user.fName}${review.user.lName}Avatar`} />
                        </div>
                        <div className="user-info">
                            <div className="user-name">{`${review.user.fName} ${review.user.lName}`}</div>
                            <Stars rating={review.rating} />
                            <div className="date">{review.created_at}</div>
                        </div>
                        <div className="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rem esse sint animi quasi exercitationem quam cum facere natus nihil dolorem,</div>
                    </div>
                ))}
                <button type="button" className={`btn btn-link more ${reviews.length <= 1 ? "hidden" : ""}`} onClick={this.handleClick}>{isMoreClicked ? "less..." : "more..."}</button>
            </div>
        );
    }
}

export default PgReviews;