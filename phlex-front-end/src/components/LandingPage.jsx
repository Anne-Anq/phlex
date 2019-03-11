import React, {Component} from 'react';

import '../stylesheets/landingPage.css';

class  LandingPage extends Component {

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
                        name="photoType"
                        className="form-control form-control-danger"
                        onKeyDown={e => e.keyCode === 13 && this.props.onClick(e)}
                        onChange={(e) => this.props.onChange(e)}
                        placeholder="Search for a photographer"
                    />
                </div>
                <button className="btn btn-danger" onClick={e => this.props.onClick(e)}>Find Photographers near you</button>
            </div>
        );
    }
}
 
export default LandingPage;