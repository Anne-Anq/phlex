import React, { Component } from 'react';
import Stars from "../common/Stars";
import MoreButton from "../common/buttons/MoreButton";
import Card from '@material-ui/core/Card';
import "../../stylesheets/PgReviews.css";

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
                        <Card className="user-avatar"><img src={review.user.avatarURL} alt={`${review.user.fName}${review.user.lName}Avatar`}></img></Card>
                        <div className="user-info">
                            <div className="user-name">{`${review.user.fName} ${review.user.lName}`}</div>
                            <Stars rating={review.rating} />
                            <div className="date">{review.created_at}</div>
                        </div>
                        <div className="review-text">{review.review}</div>
                    </div>
                ))}
                <div className="more-div">
                    {
                        reviews.length > 1 &&
                        <MoreButton variant="outlined" onClick={this.handleClick} label={!isMoreClicked ? "more..." : "less..."} />
                    }
                </div>
            </div>
        );
    }
}

export default PgReviews;