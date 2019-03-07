import React, { Component } from 'react';

class UserSignup extends Component {
	state = {};
	render() {
		return (
			<div>
				<h1>User Register Form</h1>
                <br/>
                <hr/>
				<h2>First Name</h2>
				<input id="firstName" placeholder='Enter Your First Name'/>
                <hr/>
				<h2>LastName</h2>
				<input id="lastName" placeholder='Enter Your Last Name'/>
                <hr/>
                <h2>Email</h2>
				<input type='email 'id="email" placeholder='Enter Your Email'/>
                <hr/>
				<h2>Password</h2>
				<input type = "password"id="password" placeholder='Enter Your Password'/>
                <hr/>
                <h2>Profile Photo</h2>
                <input type="file" name="image" accept="image/*"/>
                <hr/>
                <br/>
                <input type="submit" />

			</div>
		);
	}
}

/*
User register form:

A signup form for clients.

Have the form as a popout, while potentially maintaining the landing page background.

NAME | LASTNAME | EMAIL | PASSWORD | PROFILE PHOTO | SUBMIT BUTTON
*/

export default UserSignup;
