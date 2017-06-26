import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';
import { shallow } from 'enzyme';

const wrapper = shallow(<Pages />);

it('should contain Pages', () => {
    expect(wrapper.contains("Pages")).toEqual(true);
});

