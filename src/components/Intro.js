import React from 'react';
import '../App.css'
import { HashLink as Link } from 'react-router-hash-link';

const Intro = () => {
  return (
      <div className="overlay">
        <section className="intro"> 
          <div className="content">
            <h1>Hello, my name is <span>Mohd. Raqif Warsi.</span> <br/> I'm a <span>Web Developer.</span> I love creating beautiful websites and projects with <span>clean</span> and <span>elegant</span> designs. Come and get in touch with me here.</h1>
            <h4>Start the tour to know more</h4>
            <Link to="/journey" className="fancy-button bg-gradient1"><span>Get Started</span></Link>
            <Link smooth to="/#anchor" className="fancy-button bg-gradient2"><span>Live Projects</span></Link>
          </div>
        </section>
      </div>
  );
}

export default Intro;
