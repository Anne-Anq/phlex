import React, { Component } from 'react';
import '../../stylesheets/UserSignup.css'

class PhotographerSignup extends Component {
   


    render() {
        if (true) {
            return (
                <div className='body'>

                    <div className='block title'>
                        <h2>Photographer Register Form</h2>
                    </div>

                    <div className='block title'>
                        <h4>Register to be a certified Phlex photographer to start delivering quality and meaningful photography solutions.</h4>
                    </div>

                    <div id='fields'>

                    <div class="form-row">
						<div class="form-group col-md-6">
							<label for="inputEmail4">Email</label>
							<input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
						</div>
						<div class="form-group col-md-6">
							<label for="inputPassword4">Password</label>
							<input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
						</div>
					</div>
					<div class="form-row">
						<div class="form-group col-md-6">
							<label for="inputCity">City</label>
							<input type="text" class="form-control" id="inputCity" placeholder='City' />
						</div>
						<div class="form-group col-md-4">
							<label for="inputState">Province</label>
							<select id="inputState" class="form-control">
								<option selected>Choose...</option>
								<option>Alberta</option>
                                <option>British Columbia</option>
                                <option>Manitoba</option>
                                <option>New Brunswick</option>
                                <option>Newfoundland and Labrador</option>
                                <option>Northwest Territories</option>
                                <option>Nova Scotia</option>
                                <option>Nunavut</option>
                                <option>Ontario</option>
                                <option>PEI</option>
                                <option>Quebec</option>
                                <option>Saskatchewan</option>
                                <option>Yukon</option>
							</select>
						</div>
					</div>
                    </div>
					<button type="submit" class="btn btn-primary">
						Sign up
					</button>

                </div>
            )
        } else {
            return (
                <div className='body'>
                    <div className='block'>
                        <h3>Thank You For Signing Up!</h3>

                        <p>If you are not redirected in 10 seconds click the button below.</p>
                        <button
                            
                        >Redirect</button>
                    </div>
                </div>

            )
        };
    }
}

export default PhotographerSignup;
