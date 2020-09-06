import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from './components/Search'
import ResultPage from './components/ResultPage'

import './App.scss';
import Product from './components/Product';

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
        <Route exact path="/items" render={( ) => {
          return <div>
            <ResultPage/>
          </div>
        }}></Route>
        <Route path="/items/:id" render={( ) => {
          return <div>
            <Product/>
          </div>
        }}></Route>
      </Router>
    </div>
  }
}

export default App;
