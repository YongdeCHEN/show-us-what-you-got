import React from 'react';
import ReactDOM from 'react-dom';
import Users from './users';
import { shallow } from 'enzyme';

const wrapper = shallow(<Users />);

it('should contain Users', () => {
    expect(wrapper.contains("Manage Users")).toEqual(true);
});

