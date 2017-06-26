import React from 'react';
import ReactDOM from 'react-dom';
import Templates from './templates';
import { shallow } from 'enzyme';

const wrapper = shallow(<Templates />);

it('should contain Templates', () => {
    expect(wrapper.contains("Templates")).toEqual(true);
});

