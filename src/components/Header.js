import React from 'react';
import '../App.css'

const Header = () => {
  return (
    <div>
      <nav className="nav__cont">
        <ul className="nav">
          <li className="nav__items ">
            <a href="/about">About</a>
          </li>
          <li className="nav__items ">
            <a href="/projects">Projects</a>
          </li>
          <li className="nav__items ">
            <a href="/contact">Contact</a>
          </li>
          <li className="nav__items ">
            <a href="/journey">Journey</a>
          </li>
          <li className="nav__items ">
            <a href="/terms">Terms</a>
          </li> 
          <li className="nav__items ">
            <a href="/join">Join</a>
          </li>    
        </ul>
        <div className="header-section">
          <div className="logo">
            <a className="navbar-brand" href="/">MR<hr/></a>
          </div>
			  </div>
      </nav>
    </div>
  );
}

export default Header;
