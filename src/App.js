import React, { Component } from 'react';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import Gallery from './components/Gallery'
import Projects from './components/Projects'

export default class App extends Component {
  render() {
    return (
      <div> 
        <Header/>
        <Intro/>
        <Gallery title={['mongodb', 'express', 'react', 'node', 'netlify']}/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}
