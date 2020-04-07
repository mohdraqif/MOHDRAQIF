import React from 'react';
import '../App.css'

const Slideshow = () => {
  return (
    <div className="journey-bg">
      <div className="wrapper">
        <div className="slideshows">
          <div className="slideshow slideshow--hero">
            <div className="slides">
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
              <div className="slide slide3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
