import React from 'react';
import ReactDOM from 'react-dom';
import Scheduling from './scheduling';
import { shallow } from 'enzyme';

const wrapper = shallow(<Scheduling />);

it('should contain Scheduling', () => {
    expect(wrapper.contains("Scheduling")).toEqual(true);
});

