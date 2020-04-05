import React from 'react';
import '../App.css'
import {FaReact} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (	
	<footer class="footer-distributed">
		<div class="footer-left">
			<h2>I want to see the</h2>
			<div class="footer-links">
					<Link to="/about">About</Link>
					<Link to="/projects">Projects</Link>
          <Link to='/connect'>Connect</Link>
					<Link to="/journey">Journey</Link>
					<Link to="/terms">Terms</Link>
			</div>
		</div>
 
		<div class="footer-center">
			<h2>You know where we are</h2>
			<div className="part">
			<i class="fa fa-map-marker"></i>
			<p><a href="https://www.google.com/maps/place/Baba+Sweet/@28.3938252,79.4069988,15.68z/data=!4m5!3m4!1s0x39a00709bb82429f:0x1b7218a65f0799e7!8m2!3d28.3973744!4d79.4102817?hl=en" target="blank">
				<span>21, Opp. Mini Bypass</span>Izzatnagar, Bareilly, India</a></p>
			</div>
			<div className="part">
			<i class="fa fa-phone"></i>
			<p><span>Our Support</span>9457XX30X / 789XX781XX</p>
			</div>
			<div className="part">
			<i class="fa fa-envelope"></i>
			<a href="/">mohdraqif94@gmail.com</a>
			</div>
		</div>
 
		<div class="footer-right">
			<h2>About the company</h2>
			<p class="footer-company-about">MR is a website for web designers, web developers &amp; Blockchain Learners.<br/>
				We strive for simple yet powerful website designs and provide better solutions and resources for free.</p>
			<div class="footer-icons">
				<a href="https://www.facebook.com/mohd.raqif.5" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
				<a href="https://www.instagram.com/mohd_codes" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
				<a href="https://twitter.com/mohdraqif1" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
				<a href="https://www.youtube.com/channel/UC8OaiXv5oTYm_0wJ0R7KKyg" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a>
				<a href="https://www.linkedin.com/in/mohd-raqif-warsi-314199182" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
				<a href="https://medium.com/@mohdraqif1" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium"></i></a>
			</div>
		</div>
		<div className="footer-bottom">
			<p>&copy; 2020 | Made by <a href='https://github.com/mohdraqif' target='blank'>Mohd.Raqif</a> with React <FaReact/></p>
		</div>
	</footer>
  );
}

export default Footer;
