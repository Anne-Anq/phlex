import React from 'react';
import { ReactDOM } from 'react-dom';
import UserSignup from './UserSignupComp'


it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<UserSignup />, div);
	ReactDOM.unmountComponentAtNode(div);
});
