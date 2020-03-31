import React from 'react';
import '../App.css'

const Intro = () => {
  return (
      <div className="overlay">
        <section className="intro"> 
          <div className="content">
            <h1>Hello, my name is <span>Mohd. Raqif Warsi.</span> <br/> I'm a <span>Web Designer.</span> I love creating beautiful websites and projects with <span>clean</span> and elegant designs. Come and get in touch with me <span>here.</span></h1>
            <h4>Start the tour to know more</h4>
            <a href="/start" class="fancy-button bg-gradient1"><span>Get Started</span></a>
            <a href="/projects" class="fancy-button bg-gradient2"><span>Live Projects</span></a>
          </div>
        </section>
      </div>
  );
}

export default Intro;
