// App.js is the root of our website, it is where all the different
// components come together and work as a whole entity

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import NavBar from './NavBar';
import Post from './Post';
import Profile from './Profile';
import Registration from './Registration';
import RouteProtector from './auth/RouteProtector';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/login" component={Login} />
          <Route exact path="/navBar" component={NavBar} />
          <RouteProtector exact path="/post" component={Post} />
          <RouteProtector exact path="/profile" component={Profile} />
          <Route exact path="/register" component={Registration} />
        </div>
      </Router>
    );
  }
}

export default App;