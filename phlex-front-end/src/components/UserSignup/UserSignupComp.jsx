import React, { Component } from 'react';
import '../../stylesheets/UserSignup.css';

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
				<div className="body">
					<div className="block title">
						<h3>User Register Form</h3>
					</div>
					<div className="fields">
						<div className="block">
							<h3>First Name</h3>
							<input
								id="firstName"
								placeholder="Enter Your First Name"
								className="form-control form-control-danger form"
							/>
						</div>

						<div className="block">
							<h3>Last Name</h3>
							<input
								id="lastName"
								placeholder="Enter Your Last Name"
								className="form-control form-control-danger form"
							/>
						</div>

						<div className="block">
							<h3>Email</h3>
							<input
								type="email "
								id="email"
								placeholder="Enter Your Email"
								className="form-control form-control-danger form"
							/>
						</div>

						<div className="block">
							<h3>Password</h3>
							<input
								type="password"
								id="password"
								placeholder="Enter Your Password"
								className="form-control form-control-danger form"
							/>
						</div>

						<div className="block">
							<h3>Confirm Password</h3>
							<input
								type="password"
								id="confirmPassword"
								placeholder="Enter Your Password"
								className="form-control form-control-danger form"
							/>
						</div>

						<div className="block">
							<h3>Upload A Photo</h3>
							<input type="file" name="image" accept="image/*" />
							<br />
						</div>
					</div>

					<div className="submit">
						<button
							className="btn btn-primary"
							type="submit"
							onClick={() => {
								this.setState({
									hasRegistered: true,
								});
							}}
						>
							Submit
						</button>
					</div>
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
