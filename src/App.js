import React, { Component } from 'react';
import './App.css'
import Home from './components/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Join from './pages/Join'
import Portfolio from './pages/Portfolio'
import Projects from './pages/Projects'
import Terms from './pages/Terms'
import Error from './pages/Error'
import {Route, Switch} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <React.Fragment> 
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/join" component={Join}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/Terms" component={Terms}/>
          <Route component={Error}/>
        </Switch>
      </React.Fragment>
    );
  }
}
