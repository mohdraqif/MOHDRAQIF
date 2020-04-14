import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="nav__cont">
        <ul className="nav">
          <li className="nav__items ">
            <Link to='/about'>About</Link>
          </li>
          <li className="nav__items ">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav__items ">
            <Link to="/journey">Journey</Link>
          </li>
          <li className="nav__items ">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="nav__items ">
            <Link to="/connect">Connect</Link>
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
