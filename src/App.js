import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/settings' component={Settings}/>
    </Switch>
  </main>
)

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Link to='/settings/1'><Button variant="contained" color="primary">Add Pages</Button></Link>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Main/>
        </header>
      </div>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <div>
        <p className="text">This is the settings component</p>
      </div>
    );
  }
}

export default App;
