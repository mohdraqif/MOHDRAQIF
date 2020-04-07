import React from 'react';
import '../App.css'
import {FaDev} from 'react-icons/fa'

const About = () => {
  return (
    <div className="first">
      <main id="about">
        <div className="about-info">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                  <img src="https://pbs.twimg.com/profile_images/1159321045305663489/iUqCqdgj_400x400.jpg" alt="Mohd.Raqif" className="bio-image"/>
              </div>
            </div>
          </div>

        <div className="bio">
          <p>Hi! I'm Mohd. Raqif Warsi. Web Designs fascinates me. From scratching head amidst simple CSS rules to this far, I trained myself with creativity, persistence and of course, patience to hit the ultimate goal. Here's a hint about me.</p>
        </div>

        <div className="job job-1">
          <h3><i className="fa fa-instagram fa-2x"></i><a href="https://www.instagram.com/mohd_codes/?hl=en" target="_blank" rel="noopener noreferrer"> @mohd_codes</a></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="job job-2">
          <h3><i className="fa fa-youtube fa-2x"></i><a href="https://www.youtube.com/channel/UC8OaiXv5oTYm_0wJ0R7KKyg" target="_blank" rel="noopener noreferrer"> @The VSCODE Guy</a></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="job job-3">
          <h3><i className="fa fa-twitter fa-2x"></i><a href="https://twitter.com/mohdraqif1" target="_blank" rel="noopener noreferrer"> @mohdraqif1</a></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="job job-4">
          <h3><i className="fa fa-facebook fa-2x"></i><a href="https://www.facebook.com/mohd.raqif.5" target="_blank" rel="noopener noreferrer"> @Mohd Raqif</a></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="job job-5">
          <h3><FaDev style={{fontSize: "35px"}}/><a href="https://dev.to/mohdraqif1" target="_blank" rel="noopener noreferrer"> @mohd raqif</a></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="job job-6">
          <h3><i className="fa fa-medium fa-2x"></i><a href="https://medium.com/@mohdraqif1" target="_blank" rel="noopener noreferrer"> @Mohd. Raqif</a></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </main>
  </div>
  );
}

export default About;
