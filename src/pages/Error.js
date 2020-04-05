import React from 'react';
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div className="journey-bg2">
      <div className="banner">
        <h2>Oops! that's a 404</h2>
      </div>
      <div className="para">
        <p>The page you are looking for might have been removed, had its URL changed or is temporarily unavailable.</p><br/>
        <Link to="/" class="fancy-button bg-gradient1"><span>go to home</span></Link>
      </div>
    </div>
  );
}

export default Error;
 