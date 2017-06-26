import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';
import { shallow } from 'enzyme';

const wrapper = shallow(<Dashboard />);

it('should contain Dashboard', () => {
    expect(wrapper.contains("Dashboard")).toEqual(true);
});

