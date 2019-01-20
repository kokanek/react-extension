import React, { Component } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
      return (
        <div className="App">
          <div className="row-format">
            <Button variant="contained" color="primary">Page group One</Button>
            <Link to='/settings/1'><Button variant="contained" color="primary"><SettingsIcon /></Button></Link>
          </div>
        </div>
      );
    }
}