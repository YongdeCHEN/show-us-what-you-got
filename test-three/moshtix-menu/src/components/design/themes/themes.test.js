import React from 'react';
import ReactDOM from 'react-dom';
import Themes from './themes';
import { shallow } from 'enzyme';

const wrapper = shallow(<Themes />);

it('should contain Themes', () => {
    expect(wrapper.contains("Themes")).toEqual(true);
});

