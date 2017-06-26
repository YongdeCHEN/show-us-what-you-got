import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact';
import { shallow } from 'enzyme';

const wrapper = shallow(<Contact />);

it('should contain Contact', () => {
    expect(wrapper.contains("Contact Details")).toEqual(true);
});

