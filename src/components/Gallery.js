import React from 'react';

const Gallery = () => {
  return (
    <div className='GALLERY'>
      <div class="banner"><h2>Tech we are good at</h2></div>
      <div className="gallery">
        <div class="container">
          <a href="https://www.mongodb.com/" target="blank" rel="noopener noreferrer"><div class="box"><img alt="" src="https://4.bp.blogspot.com/-X7UPkOQjQuQ/WuHLUEM7SDI/AAAAAAAAAOY/rXGXSOfPP2ckF_cSOC3C5d3B_BhIgNcxACLcBGAs/s1600/mongodb%2B%25282%2529.png"/></div></a>
          <a href="https://expressjs.com/" target="blank" rel="noopener noreferrer"><div class="box"><img alt="" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png"/></div></a>
          <a href="https://reactjs.org/" target="blank" rel="noopener noreferrer"><div class="box"><img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div></a>
          <a href="https://nodejs.org/en/" target="blank" rel="noopener noreferrer"><div class="box"><img alt="" src="https://www.mindrops.com/images/nodejs-image.png"/></div></a>
          <a href="https://www.netlify.com/" target="blank" rel="noopener noreferrer"><div class="box"><img alt="" src="https://www.netlify.com/img/press/logos/logomark.png"/></div></a>
        </div>
      </div>
    </div>
  );
}

export default Gallery
