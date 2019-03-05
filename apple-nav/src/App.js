import React, { Component } from 'react';
import appleData from './appleData';
import { Link, NavLink, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import IpadNav from './components/subnavs/IpadNav'; 
import IphoneNav from './components/subnavs/IphoneNav';
import MacNav from './components/subnavs/MacNav';
import TvNav from './components/subnavs/TvNav';
import WatchNav from './components/subnavs/WatchNav';
import MusicNav from './components/subnavs/MusicNav';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state= {
      data: appleData 
    }
  }
  render() {
   
    return (
      <div className="nav-wrapper">
    <Route path={`/`} render={ props => <NavBar {...props} data={this.state.data} /> } /> 
    <Route path={`/ipad`} component={IpadNav} />
    <Route path={`/iphone`} component={IphoneNav} />
    <Route path={`/mac`} component={MacNav} />
    <Route path={`/tv`} component={TvNav} /> 
    <Route path={`/watch`} component={WatchNav} />
    <Route path={`/music`} component={MusicNav} />
    
      </div>  
    );
  }
}

export default App;
