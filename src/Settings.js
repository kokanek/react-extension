/*global chrome*/
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

export default class Settings extends Component {
    constructor() {
      super();
      this.handleOnClick = this.handleOnClick.bind(this);
    }
  
    handleOnClick() {
      console.log('clicked!');
      chrome.storage.sync.set({siteName: "http://www.facebook.com"}, function() {
        console.log('Value is set to facebook');
      });
    }
  
    render() {
      return (
        <div className="row-format">
          <TextField
            id="standard-bare"
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={this.handleOnClick}><AddIcon /></Button>
        </div>
      );
    }
  }