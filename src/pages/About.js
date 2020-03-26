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
                <img src="img/img1.jpg" alt="Mohd.Raqif" class="bio-image"/>
            </div>
            <div class="flip-card-back">
              <h2>Mohd. Raqif</h2>
              <p>Web Developer</p>
            </div>
          </div>
        </div>

      <div class="bio">
        <h3>Mohd. Raqif Warsi</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt magni nam nisi quae vitae? Quod molestiae ipsa
          autem natus eum vel ducimus nulla harum voluptatem eligendi! Unde, reiciendis? Praesentium, laborum.</p>
      </div>

      <div class="job job-1">
        <h3><i class="fa fa-instagram fa-2x"></i><a href="https://www.instagram.com/mohd_codes/?hl=en" target="blank" style={{textDecoration: "none", color:"#313437"}}> @mohd_codes</a></h3>
        <h6>Full Stack Developer</h6><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores
          expedita dolor necessitatibus deserunt nemo.</p>
      </div>

      <div class="job job-2">
        <h3><i class="fa fa-facebook fa-2x"></i><a href="https://www.facebook.com/mr_dev94-723347738084168/" target="blank" style={{textDecoration: "none", color:"#313437"}}> @mr_dev94</a></h3>
        <h6>Full Stack Developer</h6><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores
          expedita dolor necessitatibus deserunt nemo.</p>
      </div>

      <div class="job job-3">
        <h3> <i class="fa fa-twitter fa-2x"></i> <a href="https://twitter.com/mohdraqif1" target="blank" style={{textDecoration: "none", color:"#313437"}}> @mohdraqif1</a></h3>
        <h6>Full Stack Developer</h6><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores
          expedita dolor necessitatibus deserunt nemo.</p>
      </div>
      </div>
  </main>
  </div>
  );
}

export default About;
