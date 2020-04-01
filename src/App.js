import React, { Component } from 'react';
import './App.css'
import Home from './components/Home'
import About from './pages/About'
import Connect from './pages/Connect'
import Join from './pages/Join'
import Journey from './pages/Journey'
import Projects from './pages/Projects'
import Terms from './pages/Terms'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import {Route, Switch} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <React.Fragment> 
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/connect" component={Connect}/>
          <Route exact path="/join" component={Join}/>
          <Route exact path="/journey" component={Journey}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/Terms" component={Terms}/>
          <Route component={Error}/>
        </Switch>
        <Header/>
        <Footer/>
      </React.Fragment>
    );
  }
}
