import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import { shallow } from 'enzyme';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import logo from '../assets/images/logo-moshtix-header.png';

const wrapper = shallow(<Menu />);

it('should contain logo', () => {
    const logoTag = <img src={logo} height="40" alt="logo" />;
    expect(wrapper.contains(logoTag)).toEqual(true);
});

it('should contain Toggle', () => {
    const toggleTag = <Navbar.Toggle />;
    expect(wrapper.contains(toggleTag)).toEqual(true);
});
