import React, { Component } from 'react';
import '../../stylesheets/UserSignup.css'

class PhotographerSignup extends Component {
   


    render() {
        if (true) {
            return (
                <div className='body'>

                    <div className='block title'>
                        <h3>Photographer Register Form</h3>
                    </div>
                    <div className='fields'>
                        <div className="block">
                            <h3>First Name</h3>
                            <input id="firstName" placeholder='Enter Your First Name' className="form-control form-control-danger form"/>
                        </div>

                        <div className='block'>
                            <h3>Last Name</h3>
                            <input id="lastName" placeholder='Enter Your Last Name' className="form-control form-control-danger form"/>
                        </div>

                        <div className='block'>
                            <h3>Email</h3>
                            <input type='email ' id="email" placeholder='Enter Your Email' className="form-control form-control-danger form"/>
                        </div>

                        <div className='block'>
                            <h3>Password</h3>
                            <input type="password" id="password" placeholder='Enter Your Password' className="form-control form-control-danger form"/>
                        </div>

                        <div className='block'>
                            <h3>Confirm Password</h3>
                            <input type="password" id="confirmPassword" placeholder='Enter Your Password' className="form-control form-control-danger form"/>
                        </div>

                        <div className='block'>
                            <h3>Upload A Some Sample Photos!</h3>
                            <input type="file" name="image" accept="image/*" />
                            <br />
                        </div>
                    </div>

                    <div className='block'>
                            <h3>Write A Little About Yourself</h3>
                            <input type="text" id="confirmPassword" placeholder='Enter A Bio' className="form-control form-control-danger form"/>
                        </div>

                        <div className='block'>
                            <h3>Whats Your Price Range?</h3>
                            <input type="range" id="range" min='0' max='1000' step='10' className="form-control form-control-danger form"/>
                        </div>


                    <div className='submit'>
                        <button
                        className= 'btn btn-primary'
                            type="submit"
                            >Submit</button>
                    </div>

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
