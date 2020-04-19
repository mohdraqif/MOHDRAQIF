import React from 'react';

const SingleProject = (props) => { 
  console.log(props.demo)
  return (
    <div className="grid">
      <div className={props.class}>
        <div class="card">
          <h1>{props.title}</h1>
          <p class="title">{props.desc}</p>
          <div>
            <a href={props.demo} target="_blank" rel="noopener noreferrer">Demo</a> 
            <a href={props.code} target="_blank" rel="noopener noreferrer">Get Code</a> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
