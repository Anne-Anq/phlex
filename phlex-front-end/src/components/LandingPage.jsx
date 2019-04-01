import React, { Component } from 'react';

import '../stylesheets/LandingPage.css';

class LandingPage extends Component {
    state= {};

    render() {
        return (
            <div className="landing-page">
                <div id="phlex-header">Phlex
                <p id="tagline">Find excellent photographers in a click...</p>
                </div>
                <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input
                        type="text"
                        id="photoType"
                        className="form-control form-control-danger"
                        onKeyDown={e => e.keyCode === 13 && this.props.onClick(e)}
                        onChange={e => this.props.onChange(e)}
                        placeholder="Ex: Food pictures, 360deg, outdoor..."
                    />
                </div>
                <button className="btn btn-danger" onClick={e => this.props.onClick(e)}>Search</button>
            </div>
        );
    }
}

export default LandingPage;