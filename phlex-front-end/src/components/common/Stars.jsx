import React from 'react';
import starsRendering from "../../logics/starsRendering";

const Stars = ({ rating }) => {
    const starsArr = starsRendering(rating);
    return (
        <div className="stars">
            {starsArr.map((el, i) => {
                if (el === 1) return (<i key={i} className="fas fa-star"></i>)
                if (el === 0.5) return (<i key={i} className="fas fa-star-half-alt"></i>)
                return (<i key={i} className="far fa-star"></i>)
            })}
        </div>
    );
}

export default Stars;
