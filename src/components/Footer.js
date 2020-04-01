import React from 'react';
import '../App.css'
import {FaReact} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
    <div className="footer">
		<div className="footer-content">

			<div className="footer-section about">
				<div className="logo">
					<Link className="navbar-brand" to="/">MR<hr></hr></Link>
				</div>
			</div>

			<div className="footer-section links">
				<h2>LINKS</h2>
				<div className="foot-links">
					<Link to="/about">About Us</Link>
					<Link to="/projects">Projects</Link>
          <Link to='/contact'>Contact</Link>
					<Link to="/journey">Journey</Link>
					<Link to="/terms">Terms</Link>
					<Link to="/join">Join Us</Link>
				</div>
			</div>

			<div className="footer-section contact-form">
				<h2>Contact Us</h2><br/>
				<div className="contact-box">
					<span><i className="fa fa-phone"></i> &nbsp; +91-7895578136</span><br/>
					<span><i className="fa fa-envelope"></i> &nbsp; mohdraqif94@gmail.com</span><br/>
					<span><i className="fa fa-clock-o"></i> &nbsp; Mon-Sat 8.00-22.00</span>
				</div>
				<div className="socials">
					<a href="https://www.facebook.com/mohd.raqif.5" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
					<a href="https://www.instagram.com/mohd_codes" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
					<a href="https://twitter.com/mohdraqif1" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
					<a href="https://github.com/mohdraqif" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
					<a href="https://www.youtube.com/channel/UC8OaiXv5oTYm_0wJ0R7KKyg" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a>
					<a href="https://www.linkedin.com/in/mohd-raqif-warsi-314199182" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
					<a href="https://medium.com/@mohdraqif1" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium"></i></a>
				</div>
			</div>

			<div className="footer-section contact-map">
				<div className="join">
					<h2>Subscribe to us for free</h2>
					<form>      
						<input name="name" type="text" class="feedback-input" placeholder="Name" />   
						<input name="email" type="text" class="feedback-input" placeholder="Email" />
						<input type="submit" value="Subscribe"/>
					</form>
				</div>
			</div>
		</div>

		<div className="footer-bottom">
			<p>&copy; 2020 | Made by <a href='https://github.com/mohdraqif' target='blank'>Mohd.Raqif</a> with React <FaReact/></p>
		</div>
	</div>
    </footer>
  );
}

export default Footer;
