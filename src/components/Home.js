import React from 'react';
import '../App.css'
import Intro from './Intro'
import Gallery from './Gallery'
import Projects from './Projects'

const Home = () => {
  return (
    <div>
      <Intro/>
      <Gallery title={['mongodb', 'express', 'react', 'node', 'netlify']}/>
      <Projects/>
    </div>
  );
}

export default Home;
