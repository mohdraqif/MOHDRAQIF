import React from 'react';
import '../App.css'
import {FaReact} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
    <div class="footer">
		<div class="footer-content">

			<div class="footer-section about">
				<div class="logo">
					<a class="navbar-brand" href="http://localhost:3000/">MR</a>
				</div>
			</div>

			<div class="footer-section links">
				<h2>LINKS</h2>
				<div>
					<a href="http://localhost:3000/about">About Us</a>
					<a href="http://localhost:3000/sale">Work</a>
          <a href='/'><span style={{cursor: "pointer"}} onclick="openNav()">Contact Us</span></a>
					<a href="http://localhost:3000/terms">Our Terms</a>
					<a href="http://localhost:3000/support">Portfolio</a>
					<a href="http://localhost:3000/support">Join Us</a>
				</div>
			</div>

			<div class="footer-section contact-form">
				<h2>Contact Us</h2><br/>
				<div class="contact-box">
					<span><i class="fa fa-phone"></i> &nbsp; +91-7895578136</span><br/>
					<span><i class="fa fa-envelope"></i> &nbsp; mohdraqif94@gmail.com</span><br/>
					<span><i class="fa fa-clock-o"></i> &nbsp; Mon-Sat 8.00-22.00</span>
				</div>
				<div class="socials">
					<a href="/"><i class="fa fa-facebook"></i></a>
					<a href="/"><i class="fa fa-instagram"></i></a>
					<a href="/"><i class="fa fa-twitter"></i></a>
					<a href="/"><i class="fa fa-youtube"></i></a>
					<a href="/"><i class="fa fa-linkedin"></i></a>
					<a href="/"><i class="fa fa-google"></i></a>
					<a href="/"><i class="fa fa-medium"></i></a>
				</div>
			</div>

			<div class="footer-section contact-map">
				<h2>We are here</h2>
				<iframe title="title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7019.770510320578!2d79.40665704913197!3d28.392533480272466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a00709bb82429f%3A0x1b7218a65f0799e7!2sBaba%20Sweet!5e0!3m2!1sen!2sin!4v1570859337272!5m2!1sen!2sin" width="350" height="200" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
			</div>
		</div>

		<div class="footer-bottom">
			<p>&copy; 2019 | Made by Mohd.Raqif with React <FaReact/></p>
		</div>
	</div>
    </footer>
  );
}

export default Footer;
