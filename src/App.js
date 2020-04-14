import React, { Component } from 'react';
import './App.css'
import Home from './components/Home'
import About from './pages/About'
import Connect from './pages/Connect'
import Journey from './pages/Journey'
import ProjectsList from './pages/ProjectsList'
import Blog from './pages/Blog'
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
          <Route exact path="/journey" component={Journey}/>
          <Route exact path="/projects" component={ProjectsList}/>
          <Route exact path="/blog" component={Blog}/>
          <Route component={Error} title="404" subtitle="page not found"/>
        </Switch>
        <Header/>
        <Footer/>
      </React.Fragment>
    );
  }
}
