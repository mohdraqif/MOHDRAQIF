import React from 'react';
import '../App.css'

const Intro = () => {
  return (
      <div className="overlay">
        <section className="intro"> 
          <div className="content">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</h1>
            <h4>Start the tour to know more</h4>
            <a href="/" class="fancy-button bg-gradient1"><span>Get Started</span></a>
            <a href="/" class="fancy-button bg-gradient2"><span>Live Projects</span></a>
          </div>
        </section>
      </div>
  );
}

export default Intro;
