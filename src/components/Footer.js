import React from 'react';
import '../App.css'
import {FaReact} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (	
	<footer className="footer-distributed">
		<div className="footer-left">
			<h2>I want to see the</h2>
			<div className="footer-links">
					<Link to="/about">About</Link>
					<Link to="/projects">Projects</Link>
					<Link to="/journey">Journey</Link>
					<Link to="/blog">Blog</Link>
					<Link to='/connect'>Connect</Link>
			</div>
		</div>
 
		<div className="footer-center">
			<h2>You know where we are</h2>
			<div className="part">
			<i className="fa fa-map-marker"></i>
			<p><a href="https://www.google.com/maps/dir//Basant+Vihar+Colony,+Ram+Nagar+Colony,+Bareilly,+Uttar+Pradesh+243122/@28.3921137,79.4096257,16.22z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39a00709321a3631:0x7a9d48ee9e6156ed!2m2!1d79.4105429!2d28.3939252?hl=en" target="blank">
				<span>21, Opp. Mini Bypass</span>Izzatnagar, Bareilly, India</a></p>
			</div>
			<div className="part">
			<i className="fa fa-phone"></i>
			<p><span>Our Support</span>9457XX30X / 789XX781XX</p>
			</div>
			<div className="part">
			<i className="fa fa-envelope"></i>
			<a href="mailto:mohdraqif94@gmail.com">mohdraqif94@gmail.com</a>
			</div>
		</div>
 
		<div className="footer-right">
			<h2>About the company</h2>
			<p className="footer-company-about">MR is a website for web designers, web developers &amp; Blockchain Learners.<br/>
				We strive for simple yet powerful website designs and provide better solutions and resources for free.</p>
			<div className="footer-icons">
				<a href="https://www.facebook.com/mohd.raqif.5" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
				<a href="https://www.instagram.com/mohd_codes" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
				<a href="https://twitter.com/mohdraqif1" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
				<a href="https://www.youtube.com/channel/UC8OaiXv5oTYm_0wJ0R7KKyg" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a>
				<a href="https://www.linkedin.com/in/mohd-raqif-warsi-314199182" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
				<a href="https://medium.com/@mohdraqif1" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium"></i></a>
			</div>
		</div>
		<div className="footer-bottom">
			<p>&copy; 2020 | Made by Mohd.Raqif with React <FaReact/></p>
		</div>
	</footer>
  );
}

export default Footer;
