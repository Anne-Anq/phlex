import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PhotographerSignup from './PhotographerSignup/PhotgrapherSignupMat';
import SignIn from './SignIn/SignIn';
import UserRegister from './UserRegister/SignupForm';
import '../stylesheets/Navbar.css';
class Navbar extends Component {
	state = {
		userReg: false,
		photoReg: false,
		signIn: false,
	};

	handleClickOpen = e => {
		if (e.target.id === 'userReg') {
			this.setState({ userReg: true });
		} else if (e.target.id === 'photoReg') {
			this.setState({ photoReg: true });
		} else if (e.target.id === 'signIn') {
			this.setState({ signIn: true });
		} else {
			alert('failed');
		}
	};

	handleClose = () => {
		this.setState({
			userReg: false,
			photoReg: false,
			signIn: false,
		});
	};
	render() {
		const { location } = this.props;
		return (
			<nav
				id="navbar"
				className={
					location.pathname === '/'
						? 'navbar navbar-expand-lg navbar-dark bg-dark'
						: 'navbar navbar-expand-lg navbar-light bg-light'
				}
			>
				<NavLink className="navbar-brand" to="/">
					Phlex
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto d-flex justify-content-between">
						<li className="d-lg-flex flex-row">
							{!this.props.isLandingPage && (
								<NavLink to="/result" className="nav-item nav-link">
									Find a photographer <span className="sr-only">(current)</span>
								</NavLink>
							)}
							{/* Register Pages */}
							<button id="photoReg" onClick={this.handleClickOpen} className="nav-item nav-link linkBtn">
								Become a photographer
								<span className="sr-only">(current)</span>
							</button>
						</li>
						<li className="d-lg-flex flex-row">
							<button id="userReg" onClick={this.handleClickOpen} className="nav-item nav-link linkBtn">
								Register
								<span className="sr-only">(current)</span>
							</button>
							<button id="signIn" onClick={this.handleClickOpen} className="nav-item nav-link linkBtn">
								Sign In
								<span className="sr-only">(current)</span>
							</button>
						</li>
					</ul>
					<PhotographerSignup
						isOpen={this.state.photoReg}
						handleOpen={this.handleClickOpen}
						handleClose={this.handleClose}
					/>
					<SignIn
						isOpen={this.state.signIn}
						handleOpen={this.handleClickOpen}
						handleClose={this.handleClose}
					/>
					<UserRegister
						isOpen={this.state.userReg}
						handleOpen={this.handleClickOpen}
						handleClose={this.handleClose}
					/>
				</div>
			</nav>
		);
	}
}

export default Navbar;
