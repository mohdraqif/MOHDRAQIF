import React, { Component } from 'react';
import './App.css'
import Home from './components/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Journey from './pages/Journey'
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
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/journey" component={Journey}/>
          <Route exact path="/blog" component={Blog}/>
          <Route component={Error} title="404" subtitle="page not found"/>
        </Switch>
        <Header/>
        <Footer/>
      </React.Fragment>
    );
  }
}
