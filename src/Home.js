import React, { Component } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
      return (
        <div className="App">
          <div className="row-format apart">
            <h3>Page group One</h3>
            <Link to='/settings/1'><Button variant="contained" ><SettingsIcon /></Button></Link>
          </div>
          <div className="row-format apart">
            <h3>Page group two</h3>
            <Link to='/settings/2'><Button variant="contained" ><SettingsIcon /></Button></Link>
          </div>
          <div className="row-format apart">
            <h3>Page group three</h3>
            <Link to='/settings/3'><Button variant="contained" ><SettingsIcon /></Button></Link>
          </div>
          <div className="row-format apart">
            <h3>Page group four</h3>
            <Link to='/settings/4'><Button variant="contained" ><SettingsIcon /></Button></Link>
          </div>
        </div>
      );
    }
}