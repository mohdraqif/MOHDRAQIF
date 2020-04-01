import React from 'react';
import '../App.css'
import Intro from './Intro'
import Gallery from './Gallery'
import Projects from './Projects'
import Feedback from './Feedback'

const Home = () => {
  return (
    <div>
      <Intro/>
      <Gallery title={['mongodb', 'express', 'react', 'node', 'netlify']}/>
      <Projects/>
      <Feedback/>
    </div>
  );
}

export default Home;
