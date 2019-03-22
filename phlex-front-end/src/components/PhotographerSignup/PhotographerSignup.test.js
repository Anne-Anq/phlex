import React from 'react';
import ReactDOM  from 'react-dom';
import PhotoSignup from './PhotographerSignupComp'


it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<PhotoSignup />, div);
	ReactDOM.unmountComponentAtNode(div);
});
