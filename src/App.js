import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize=6;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Switch>
          <Route exact path="/"><News key="1" pageSize={this.pageSize} country="in" category="general"/></Route>
          <Route exact path="/business"><News key="2" pageSize={this.pageSize} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News key="3"pageSize={this.pageSize} country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News key="4" pageSize={this.pageSize} country="in" category="general"/></Route>
          <Route exact path="/health"><News key="5" pageSize={this.pageSize} country="in" category="health"/></Route>
          <Route exact path="/science"><News key="6" pageSize={this.pageSize} country="in" category="science"/></Route>
          <Route exact path="/sports"><News key="7" pageSize={this.pageSize} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News key="8" pageSize={this.pageSize} country="in" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

