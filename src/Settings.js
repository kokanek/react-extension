/*global chrome*/
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';


export default class Settings extends Component {
    constructor() {
      super();
      this.handleOnClick = this.handleOnClick.bind(this);
      this.updateSites = this.updateSites.bind(this);
      this.handleOnChange = this.handleOnChange.bind(this);

      this.state = {
          sites: [],
          currentSite: ''
      };
    }

    componentDidMount() {
        this.updateSites(this.props.match.params.number)
    }
  
    handleOnClick(e) {
        let siteArray = [];
        let key = this.props.match.params.number;
        let that = this;
        chrome.storage.sync.get([key], function(result) {
            console.log('got the result: ', result);
            siteArray = result[key] || [];
            siteArray.push({siteName: that.state.currentSite});
            chrome.storage.sync.set({[key]: siteArray}, function() {
                console.log('Value is set:', key, siteArray);
            });
            that.setState({sites: siteArray})
        });   
    }

    handleOnChange(e) {
        this.setState({currentSite: e.target.value})
    }
  
    render() {
        console.log(this.props.match.params.number);
        let sites = this.state.sites.map((site) => <h3>{site && site.siteName}</h3>);
        return (
            <div>
                <div className="row-format">
                    <TextField
                    id="outlined-email-input"
                    label="Website"
                    name="website"
                    margin="normal"
                    variant="outlined"
                    className="inp"
                    onChange={this.handleOnChange}
                    />
                    <Button style={{marginLeft:10+'px'}} variant="contained" color="primary" onClick={this.handleOnClick}><AddIcon /></Button>
                </div>
                {sites}
            </div>
        );
    }

    updateSites(key) {
        let siteArray = [];
        chrome.storage.sync.get([key], function(result) {
            siteArray = result.key;
            this.setState({sites: siteArray});
        });
    }
}