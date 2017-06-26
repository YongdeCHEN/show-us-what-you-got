import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './gallery';
import { shallow } from 'enzyme';

const wrapper = shallow(<Gallery />);

it('should contain Gallery', () => {
    expect(wrapper.contains("Gallery")).toEqual(true);
});


it('should contain a link', () => {
    let linkTag = <a href="http://www.moshtix.com.au/v2/gallery" >Gallery</a>;
    expect(wrapper.contains(linkTag)).toEqual(true);
});
