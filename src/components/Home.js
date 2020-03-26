import React from 'react';
import '../App.css'
import Footer from './Footer'
import Header from './Header'
import Intro from './Intro'
import Gallery from './Gallery'
import Projects from './Projects'

const Home = () => {
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

export default Home;
