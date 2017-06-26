import React, { Component } from 'react';
import './Menu.css';
import menuData from '../data/menu-data.json'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import logo from '../assets/images/logo-moshtix-header.png';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    
    let index = 0;
    let menuContent = menuData.children.map(item => {
        index ++;
        let subIndex = 0;
        let subMenuContent = item.children.map(childItem => {
            subIndex ++;
            let subEventKey = index + '.' + subIndex;
            return (
                <MenuItem eventKey={subEventKey} key={childItem.name} id={childItem.name}>
                    <Link to="/about">{childItem.name}</Link>
                </MenuItem>)
        });

        return (
            <NavDropdown eventKey={index} title={item.name} key={item.name} id={item.name} >
            {subMenuContent}
            </NavDropdown>
        )
    });


    const navbarInstance = (
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="http://www.moshtix.com.au/">
                <img src={logo} height="40" alt="logo" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse style={{marginLeft:10}} >
            <Nav>
              {menuContent}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );

    return (
      <div>
        {navbarInstance}
      </div>

    );
  }
}

export default Menu;