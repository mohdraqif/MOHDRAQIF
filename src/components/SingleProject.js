import React from 'react';
import {Link} from 'react-router-dom'

const SingleProject = (props) => {  
  return (
    <article className="room">
    <div className="img-container">
        <Link to='/' className="btn-primary room-link">features</Link>
    </div>
    <p className="room-info">{props.info}</p>
  </article>
  );
}

export default SingleProject;
