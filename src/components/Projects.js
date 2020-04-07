import React from 'react';
import '../App.css'

const Projects = () => {
  return (
  <section className="section">
    <div className="banner"><h2>Our Best Projects</h2></div>
    <div className="grid">
      <div className="item item--medium">
        <article className="room">
          <p className="project-name">Tech Store</p>
        </article>
      </div>
      <div className="item item--medium">
        <article className="room">
          <p className="project-name">Beach Resort</p>
        </article>
      </div>
      <div className="item item--medium">
        <article className="room">
          <p className="project-name">Vintage Tech.</p>
        </article>
      </div>
      <div className="item item--medium">
        <article className="room">
          <p className="project-name">To-Do List</p>
        </article>
      </div>
      <div className="item item--medium">
        <article className="room">
          <p className="project-name">Get Linked App</p>
        </article>
      </div>
      <div className="item item--medium">
        <article className="room">
          <p className="project-name">Budget Calculator</p>
        </article>
      </div>

    </div>
  </section>
  );
}

export default Projects;
