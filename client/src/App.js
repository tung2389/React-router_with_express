import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Stuff from './pages/Stuff';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router basename = "/">

          <Link to = "/home">Home</Link>
          <br/>
          <Link to = "/about">About</Link>
          <br/>
          <Link to = "/stuff">Stuff</Link>
          <br/>

          <Route path = "/home" component = {Home}></Route>
          <Route path = "/about" component = {About}></Route>
          <Route path = "/stuff" component = {Stuff}></Route>
        </Router>
      </div>
    )
  }
}
