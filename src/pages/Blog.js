import React from 'react';

const Blog = () => {
  return (
    <div className="first">
      <div className="banner"><h2>How I write my mind</h2></div>
      <main id="about">
        <div className="about-info">
        <div className="job job-1">
          <img src={require('../images/blog1.png')} width="330" height="230px" alt="1"/>
          <button><a href="https://medium.com/@mohdraqif1/i-wish-i-never-regret-about-these-things-in-my-life-again-3697ba705e18" target="_blank" rel="noopener noreferrer">Read more</a> </button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="job job-2">
          <img src={require('../images/blog2.png')} width="330" height="230px" alt="1"/>
          <button><a href="https://medium.com/@mohdraqif1/the-experts-advice-5836aea2aca3" target="_blank" rel="noopener noreferrer">Read more</a> </button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="job job-3">
          <img src={require('../images/blog3.png')} width="330" height="230px" alt="1"/>
          <button><a href="https://medium.com/@mohdraqif1/the-espr-rule-for-programmers-cffb34b88aab" target="_blank" rel="noopener noreferrer">Read more</a> </button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </main>
  </div>
  );
}

export default Blog;
