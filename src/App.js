import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from './components/Search'

import './App.scss';

class App extends Component {
  state = {}

  render() {
    return <div>
      <Router>
        <Route exact path="/" render={( ) => {
          return <div>
            <Search/>
          </div>
        }}></Route>
      </Router>
    </div>
  }
}

export default App;
