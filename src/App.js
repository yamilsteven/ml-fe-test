import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Search from './components/Search'

import './App.scss';

class App extends Component {
  state = {}

  render() {
    return <div>
      <Search />
    </div>
  }
}

export default App;
