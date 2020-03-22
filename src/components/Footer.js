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
				<h2>Meet us <span><a href="https://www.google.com/maps/place/Baba+Sweet/@28.397374,79.410282,14z/data=!4m5!3m4!1s0x0:0x1b7218a65f0799e7!8m2!3d28.3973744!4d79.4102817?hl=en" target="blank">here . . .</a></span></h2>
				<div className="join">
					<h2>Join us</h2>
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
