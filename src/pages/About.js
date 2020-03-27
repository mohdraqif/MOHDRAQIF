import React from 'react';
import '../App.css'

const About = () => {
  return (
    <div class="first">
      <main id="about">
        <div class="about-info">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Mohd.Raqif" class="bio-image"/>
              </div>
            </div>
          </div>

        <div class="bio">
          <p>Hi! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide.</p>
        </div>

        <div class="job job-1">
          <h3><i class="fa fa-instagram fa-2x"></i><a href="https://www.instagram.com/mohd_codes/?hl=en" target="_blank" rel="noopener noreferrer"> @mohd_codes</a></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div class="job job-2">
          <h3><i class="fa fa-youtube fa-2x"></i><a href="https://www.youtube.com/channel/UC8OaiXv5oTYm_0wJ0R7KKyg" target="_blank" rel="noopener noreferrer"> @The VSCODE Guy</a></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div class="job job-3">
          <h3> <i class="fa fa-twitter fa-2x"></i><a href="https://twitter.com/mohdraqif1" target="_blank" rel="noopener noreferrer"> @mohdraqif1</a></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        </div>
    </main>
  </div>
  );
}

export default About;
