import React, { Component } from 'react';
import logo from './assets/images/logo-moshtix.png';
import './App.css';
import Menu from './menu/Menu';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// account
import Contact from './components/account/contact/contact';
import Preferences from './components/account/preferences/preferences';
import Users from './components/account/users/users';

// content
import Links from './components/content/links/links';
import Pages from './components/content/pages/pages';
import Widgets from './components/content/widgets/widgets';

// design
import Gallery from './components/design/gallery/gallery';
import Templates from './components/design/templates/templates';
import Themes from './components/design/themes/themes';

// reporting
import Dashboard from './components/reporting/dashboard/dashboard';
import Reports from './components/reporting/reports/reports';
import Scheduling from './components/reporting/scheduling/scheduling';


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <div className="App">
                <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to Moshtix</h2>
                </div>
                <Menu />
            </div>

            <Route exact path="/" component={Gallery}/>

            <Route path='/account/contactdetails' component={Contact} pageName="Contact" pageDescription="Contact." />
            <Route path='/account/preferences' component={Preferences} pageName="Preferences" pageDescription="Preferences." />
            <Route path='/account/manageusers' component={Users} pageName="Users" pageDescription="Users." />

            <Route path='/content/links' component={Links}  pageName="Links" pageDescription="Links." />
            <Route path='/content/pages' component={Pages}  pageName="Pages" pageDescription="Pages." />
            <Route path='/content/widgets' component={Widgets}  pageName="Widgets" pageDescription="Widgets." />
            
            <Route path='/design/gallery' component={Gallery}  pageName="Gallery" pageDescription="Gallery." />
            <Route path='/design/templates' component={Templates}  pageName="Templates" pageDescription="Templates." />
            <Route path='/design/themes' component={Themes}  pageName="Themes" pageDescription="Themes." />
            
            <Route path='/reporting/dashboard' component={Dashboard}  pageName="Dashboard" pageDescription="Dashboard." />
            <Route path='/reporting/reports' component={Reports}  pageName="Reports" pageDescription="Reports." />
            <Route path='/reporting/scheduling' component={Scheduling}  pageName="Scheduling" pageDescription="Scheduling." />
        </div>
      </Router>
    );
  }
}

export default App;
