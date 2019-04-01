import React, { Component } from 'react';
import Stars from "../common/Stars";
import "../../stylesheets/PgInfo.css";

class PgInfo extends Component {
    state = {}
    render() {
        const { fName, lName, rating, bio, tags, etd } = this.props.photographer;
        return (
            <div className="info">
                <div className="pg-name">{fName} {lName}</div>
                <Stars rating={rating} />
                <div className="pg-bio">{bio}</div>
                <div className="pg-tags">
                    {tags && tags.map((tag, i) => (
                        <div key={i} className="badge badge-primary">{tag}</div>
                    ))}
                    {/* add a check to see if matches the search , if yes the className should be primary, otherwise secondary */}
                </div>
                <div className="etd">Usually delivers in {etd} days</div>

                <div className="price">
                    <div className="price-legend">First 10 photos: </div>
                    <div className="badge-div"><span className="badge badge-secondary">$140</span></div>
                </div>
                <div className="price">
                    <div className="price-legend">Next 5 Photos: </div>
                    <div className="badge-div"><span className="badge badge-secondary">$30</span></div>
                </div>
            </div>
        );
    }
}

export default PgInfo;