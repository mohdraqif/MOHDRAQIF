import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="nav__cont">
        <div className="nav-icon">
          <div></div>
        </div>        
        <ul className="nav">
          <li className="nav__items ">
            <Link to='/about'>About</Link>
          </li>
          <li className="nav__items ">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="nav__items ">
            <Link to="/journey">Journey</Link>
          </li>
          <li className="nav__items ">
            <Link to="/contact">Contact</Link>
          </li>    
        </ul>
        <div className="header-section">
          <div className="logo">
            <Link className="navbar-brand" to="/">MR<hr/></Link>
          </div>
			  </div>
      </nav>
    </div>
  );
}

export default Header;
