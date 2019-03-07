import React, { Component } from 'react';
import '../../stylesheets/userSignup.css'

class UserSignup extends Component {
	state = {};
	render() {
		return (
			<div className='body'>
                
                <div className='block'>
				<h1>User Register Form</h1>
                </div>
                <div className='fields'>
                <div className="block">
				<h2>First Name</h2>
				<input id="firstName" placeholder='Enter Your First Name'/>
                </div>
                
                <div className='block'>
				<h2>LastName</h2>
				<input id="lastName" placeholder='Enter Your Last Name'/>
                </div>
                
                <div className='block'>
                <h2>Email</h2>
				<input type='email 'id="email" placeholder='Enter Your Email'/>
                </div>
                
                <div className='block'>
				<h2>Password</h2>
				<input type = "password"id="password" placeholder='Enter Your Password'/>
                </div>
                
                <div className='block'>
                <h2>Profile Photo</h2>
                <input type="file" name="image" accept="image/*"/>
                <br/>
                </div>
                </div>

                
                <div className='block'>
                <input type="submit" />
                </div>

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
