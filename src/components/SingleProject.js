import React from 'react';

const SingleProject = (props) => {
  return (
    <div className={props.class}>
      <div class="card">
        <h1>{props.title}</h1>
        <div>
          <a href={props.demo} target="_blank" rel="noopener noreferrer">Demo</a> 
          <a href={props.code} target="_blank" rel="noopener noreferrer">Get Code</a> 
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
