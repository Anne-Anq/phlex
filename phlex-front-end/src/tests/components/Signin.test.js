import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import SignIn from '../../components/SignIn/SignIn';


it('SignIn form renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
