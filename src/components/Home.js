import React from 'react';
import '../App.css'
import Intro from './Intro'
import Gallery from './Gallery'
import Projects from './Projects'
import Slideshow from './Slideshow'

const Home = () => {
  return (
    <div>
      <Intro/>
      <Slideshow/>
      <Projects/>
      <Gallery/>
    </div>
  );
}

export default Home;
