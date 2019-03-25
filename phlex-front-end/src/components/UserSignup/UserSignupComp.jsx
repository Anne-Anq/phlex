import React, { Component } from 'react';
import '../../stylesheets/UserSignup.css';
import 'typeface-roboto';

class UserSignup extends Component {
	state = {
		hasRegistered: false,
	};

	/* 
    TODO: Make it so that when your submit your info, it will
            redirect you to the find photographer page.
    FIXME: hasRegistered is no longer needed
            */
	render() {
		if (this.state.hasRegistered === false) {
			return (
				<div className='body'>

                    <div className='block title'>
                        <h4>Sign up to be connected to your cities best photographers</h4>
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
					<form>
							<div id="fileUpload" class="form-group">
								<label for="exampleFormControlFile1">Upload Some Photos To Make You Stand Out!</label>
								<input type="file" class="form-control-file" id="exampleFormControlFile1" />
							</div>
						</form>
                    </div>
					<button type="submit" class="btn btn-danger">
						Sign up
					</button>

                </div>
			);
		} else {
			return (
				<div className="body">
					<div className="block">
						<h3>Thank You For Signing Up!</h3>

						<p>If you are not redirected in 10 seconds click the button below.</p>
						<button
							onClick={() => {
								this.setState({
									hasRegistered: false,
								});
							}}
						>
							Redirect
						</button>
					</div>
				</div>
			);
		}
	}
}

export default UserSignup;
