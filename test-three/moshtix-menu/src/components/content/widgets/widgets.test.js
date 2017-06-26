import React from 'react';
import ReactDOM from 'react-dom';
import Widgets from './widgets';
import { shallow } from 'enzyme';

const wrapper = shallow(<Widgets />);

it('should contain Widgets', () => {
    expect(wrapper.contains("Widgets")).toEqual(true);
});

