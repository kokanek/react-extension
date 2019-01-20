/*global chrome*/
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Route, Link } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Settings from './Settings';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/settings/:number' component={Settings}/>
    </Switch>
  </main>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row-format">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to='/'><Button variant="contained" color="primary">Show Configuration</Button></Link>
            <Button variant="contained" color="secondary" onClick={function() {
              chrome.storage.sync.get(['siteName'], function(result) {
                console.log('Value currently is ' + result.siteName);
                chrome.windows.create({ url: [result.siteName] });
              });
            }}>Test</Button>
          </div>
          <div className="main-content">
            <Main/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
