import React from 'react';
// import {Link} from 'react-router-dom'

const SingleProject = (props) => { 
  return (
    <div className="grid">
      <div className={props.class}>
        <article className="room">
          <p className="project-name">{props.title}</p>
          <p className="project-tech">{props.tech}</p>
        </article>
      </div>
    </div>
  );
}

export default SingleProject;
