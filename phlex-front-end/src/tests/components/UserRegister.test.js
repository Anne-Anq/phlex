import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Signup from '../../components/UserRegister/SignupForm';
import ProvinceSelect from "../../components/UserRegister/ProvinceSelect";
it('Signup form renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('Province dropdown renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ProvinceSelect />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
