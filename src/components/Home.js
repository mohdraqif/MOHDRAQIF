import React from 'react';
import '../App.css'
import Intro from './Intro'
import Gallery from './Gallery'
import ProjectsGrid from './ProjectsGrid'
import Slideshow from './Slideshow'

const Home = () => {
  return (
    <div>
      <Intro/>
      <Slideshow/>
      <ProjectsGrid/>
      <Gallery/>
    </div>
  );
}

export default Home;
