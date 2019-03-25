import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingPage from '../components/LandingPage';

configure ({ adapter: new Adapter() });


const wrapper = shallow(<LandingPage />)

describe('Landing page tests', ()=> {
    it('should render the app tagline',()=>{
        expect(wrapper.find('p').text()).toEqual('Find excellent photographers in a click...');
    });
    it('should render the search bar',()=>{
        expect(wrapper.find('input').length).toEqual(1);
    });
    it('should render the search button',()=>{
        expect(wrapper.find('button').length).toEqual(1)
    });
})