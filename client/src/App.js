import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';

import Home from './pages/Home';
import About from './pages/About';
import Stuff from './pages/Stuff';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router basename = "/">

          <Link className = "HOME" to = "/"><Button variant = "contained" color = "secondary">HOME</Button></Link>

          <Route exact path = "/" component = {Layout} />

          <Route path = "/home" component = {Home}></Route>
          <Route path = "/about" component = {About}></Route>
          <Route path = "/stuff" component = {Stuff}></Route>

          <Route path = "/login" component = {Login} />
          <Route path = "/register" component = {Register} />
          <Route path = "/dashboard" component = {Dashboard}/>

        </Router>
      </div>
    )
  }
}
