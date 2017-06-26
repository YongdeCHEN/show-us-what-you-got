import React from 'react';
import ReactDOM from 'react-dom';
import Links from './links';
import { shallow } from 'enzyme';

const wrapper = shallow(<Links />);

it('should contain Links', () => {
    expect(wrapper.contains("Links")).toEqual(true);
});

