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
          <p>Follow me up on Instagram at my account mohd_codes. I post all the cool stuff of whatever I do during all of my projects. You'll find many informational things there too. It is a documentation of my journey till here. Hit me up.</p>
        </div>

        <div className="job job-2">
          <h3><i className="fa fa-youtube fa-2x"></i><a href="https://www.youtube.com/channel/UC8OaiXv5oTYm_0wJ0R7KKyg" target="_blank" rel="noopener noreferrer"> @The VSCODE Guy</a></h3>
          <p>This is my Youtube channel. I believe in continuous and interrupt free learning, so I made sure whatever I learn, you can get a piece of it too. You'll find videos on much cool stuff about development and other additional things.</p>
        </div>

        <div className="job job-3">
          <h3><i className="fa fa-twitter fa-2x"></i><a href="https://twitter.com/mohdraqif1" target="_blank" rel="noopener noreferrer"> @mohdraqif1</a></h3>
          <p>Twitter is one of the best platforms to stay connected with what you desire. Fortunately, I have a twitter account too. Search for mohdraqif1 and we are connected. I tweet mostly related to development but that's not the end.</p>
        </div>

        <div className="job job-4">
          <h3><i className="fa fa-facebook fa-2x"></i><a href="https://www.facebook.com/mohd.raqif.5" target="_blank" rel="noopener noreferrer"> @Mohd Raqif</a></h3>
          <p>We can be friends on Facebook, yeah sure. I must say I'm not a fan of this thing, but still, it works. Follow me up on Facebook and we'll share most of the stuff you need for the better. Your request is accepted at first.</p>
        </div>

        <div className="job job-5">
          <h3><FaDev style={{fontSize: "35px"}}/><a href="https://dev.to/mohdraqif1" target="_blank" rel="noopener noreferrer"> @mohd raqif</a></h3>
          <p>I use DEV to stay connected with the coding and development community out there. I make sure that I learn what others are good at and also what are the better alternates to things we do. So you can find me there too guys.</p>
        </div>

        <div className="job job-6">
          <h3><i className="fa fa-medium fa-2x"></i><a href="https://medium.com/@mohdraqif1" target="_blank" rel="noopener noreferrer"> @Mohd. Raqif</a></h3>
          <p>When I started blogging, I found the Medium. This place is where I write my mind. You'll find all of my blogs here at mohdraqif on Medium. It's good when you try to express your feelings and thoughts to the world out there.</p>
        </div>
      </div>
    </main>
  </div>
  );
}

export default About;
