import React, { Component } from 'react';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Intro from './components/Intro'

export default class App extends Component {
  render() {
    return (
      <div> 
        <Header/>
        {/* <Carousel/> */}
        <Intro/>
        <Footer/>
      </div>
    );
  }
}
