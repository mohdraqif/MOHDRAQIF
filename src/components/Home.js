import React from 'react';
import '../App.css'
import Intro from './Intro'
import Gallery from './Gallery'
import Projects from './Projects'
import Feedback from './Feedback'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
    <Link to='/about'>About</Link>
      <Intro/>
      <Gallery title={['mongodb', 'express', 'react', 'node', 'netlify']}/>
      <Projects/>
      <Feedback/>
    </div>
  );
}

export default Home;
