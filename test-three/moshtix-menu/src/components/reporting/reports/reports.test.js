import React from 'react';
import ReactDOM from 'react-dom';
import Reports from './reports';
import { shallow } from 'enzyme';

const wrapper = shallow(<Reports />);

it('should contain Reports', () => {
    expect(wrapper.contains("Reports")).toEqual(true);
});

