import React from 'react';
import ReactDOM from 'react-dom';
import Preferences from './preferences';
import { shallow } from 'enzyme';

const wrapper = shallow(<Preferences />);

it('should contain Preferences', () => {
    expect(wrapper.contains("Preferences")).toEqual(true);
});

