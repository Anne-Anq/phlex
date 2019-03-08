import React, {Component} from 'react';

import '../stylesheets/landingPage.css';

class  LandingPage extends Component {
    state = { 

     };

    render() { 
        return (
            <div class="landing-page">
                <div id="phlex-header">Phlex</div><br/>
                <input id="search" type="search" placeholder="Enter your Address"/>
                <button class="btn btn-danger">Find Photographers near you</button>
            </div>
        );
    }
}
 
export default LandingPage;