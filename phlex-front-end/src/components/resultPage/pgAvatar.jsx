import React, { Component } from 'react';
import "../../stylesheets/pgAvatar.css";

class PgAvatar extends Component {
    state = {}
    render() {
        const { avatarURL, fName, lName } = this.props.photographer;
        return (
            <div className="pg-avatar">
                <img src={avatarURL}
                    alt={`${fName}${lName}Avatar`} />
            </div>
        );
    }
}

export default PgAvatar;