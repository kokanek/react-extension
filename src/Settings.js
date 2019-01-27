/*global chrome*/
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


export default class Settings extends Component {
    constructor() {
      super();
      this.handleOnClick = this.handleOnClick.bind(this);
      this.updateSites = this.updateSites.bind(this);
      this.handleOnChange = this.handleOnChange.bind(this);
      this.handleOnDelete = this.handleOnDelete.bind(this);
      

      this.state = {
          sites: [],
          currentSite: ''
      };
    }

    componentDidMount() {
        this.updateSites(this.props.match.params.number);
    }
  
    handleOnClick(e) {
        let siteArray = [];
        let key = this.props.match.params.number;
        let that = this;
        chrome.storage.sync.get([key], function(result) {
            console.log('got the result: ', result);
            siteArray = result[key] || [];
            const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 9);;
            siteArray.push({siteName: that.state.currentSite, id: id});
            chrome.storage.sync.set({[key]: siteArray}, function() {
                console.log('Value is set:', key, siteArray);
            });
            that.setState({sites: siteArray, currentSite: ''})
        });   
    }

    handleOnChange(e) {
        this.setState({currentSite: e.target.value})
    }
  
    handleOnDelete(e) {
        var removeByAttr = function(arr, attr, value){
            var i = arr.length - 1;
            while(i >= 0){
                if( arr[i] && arr[i][attr] == value ){ 
                    arr.splice(i,1);
                }

                i--;
            }
            return arr;
        }

        let newSitesArr = removeByAttr(this.state.sites, 'id', e.currentTarget.id);
        this.setState({sites: newSitesArr})
        chrome.storage.sync.set({[this.props.match.params.number]: newSitesArr}, function() {
            console.log('Value is set after delete');
        });
    }

    render() {
        let sites = this.state.sites.map((site) => <h3>{site && site.siteName}<Button onClick={this.handleOnDelete} id={site.id || null}><DeleteIcon/></Button></h3>);
        return (
            <div>
                <div className="row-format">
                    <TextField
                    id="outlined-email-input"
                    label="Website"
                    name="website"
                    margin="normal"
                    value={this.state.currentSite}
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
        let that = this;
        chrome.storage.sync.get([key], function(result) {
            siteArray = result[key];
            that.setState({sites: siteArray});
            return;
        });
        this.setState({sites: []})
    }
}