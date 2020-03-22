import React from 'react';
import '../App.css'
import {FaReact} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
    <div className="footer">
		<div className="footer-content">

			<div className="footer-section about">
				<div className="logo">
					<a className="navbar-brand" href="http://localhost:3000/">MR<hr></hr></a>
				</div>
			</div>

			<div className="footer-section links">
				<h2>LINKS</h2>
				<div>
					<a href="http://localhost:3000/about">About Us</a>
					<a href="http://localhost:3000/sale">Work</a>
          <a href='/'>Contact Us</a>
					<a href="http://localhost:3000/terms">Our Terms</a>
					<a href="http://localhost:3000/support">Portfolio</a>
					<a href="http://localhost:3000/support">Join Us</a>
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
					<a href="/"><i className="fa fa-facebook"></i></a>
					<a href="/"><i className="fa fa-instagram"></i></a>
					<a href="/"><i className="fa fa-twitter"></i></a>
					<a href="/"><i className="fa fa-youtube"></i></a>
					<a href="/"><i className="fa fa-linkedin"></i></a>
					<a href="/"><i className="fa fa-google"></i></a>
					<a href="/"><i className="fa fa-medium"></i></a>
				</div>
			</div>

			<div className="footer-section contact-map">
				<h2>We are here</h2>
				<iframe title="my work location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7019.770510320578!2d79.40665704913197!3d28.392533480272466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a00709bb82429f%3A0x1b7218a65f0799e7!2sBaba%20Sweet!5e0!3m2!1sen!2sin!4v1570859337272!5m2!1sen!2sin" width="350" height="200" frameborder="0" style={{opacity:0.83}} allowfullscreen=""></iframe>
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
