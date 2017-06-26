import React, { Component } from 'react';
import logo from './assets/images/logo-moshtix.png';
import './App.css';
import Menu from './menu/Menu';

import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Moshtix</h2>
        </div>
      


        <Menu />

      </div>
    );
  }
}

export default App;
