import React from 'react';
import '../App.css'

const Header = () => {
  return (
    <div>
      <nav className="nav__cont">
        <ul className="nav">
          <li className="nav__items ">
            <a href="/">About</a>
          </li>
          <li className="nav__items ">
            <a href="/">Projects</a>
          </li>
          <li className="nav__items ">
            <a href="/">Contact</a>
          </li>
          <li className="nav__items ">
            <a href="/">Terms</a>
          </li> 
          <li className="nav__items ">
            <a href="/">Portfolio</a>
          </li>
          <li className="nav__items ">
            <a href="/">Join</a>
          </li>    
        </ul>
        <div className="header-section">
          <div className="logo">
            <a className="navbar-brand" href="http://localhost:3000/">MR<hr/></a>
          </div>
			  </div>
      </nav>
    </div>
  );
}

export default Header;
