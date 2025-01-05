import React from 'react';
import './UserFooter.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

function Footer() {
  return (
    <footer className="footer">
     
      <div className="footer-top">
        <h2 className="footer-logo">Florist<span className="logo-icon">🌸</span></h2>
        <p className="footer-description">
          The floristry business has a significant market in the corporate and social event world, as flowers.
        </p>
        <div className="footer-socials">
          <a href="#facebook" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="#twitter" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#instagram" className="social-icon">
            <FaInstagram />
          </a>
          <a href="#linkedin" className="social-icon">
            <FaLinkedin />
          </a>
        </div>
      </div>

     
      <div className="footer-container">
       
        <div className="footer-section company">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </div>

     
        <div className="footer-section account">
          <h4>Account</h4>
          <ul>
            <li><a href="#cart">My cart</a></li>
            <li><a href="#wishlist">Wishlist</a></li>
            <li><a href="#login">Login/Register</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter to get more free tips. No Spam, Promise.</p>
          <form>
            <input type="email" placeholder="Email" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

      
        <div className="footer-section contact">
          <h4>Get in touch</h4>
          <address>
            69 North Cleveland Street, Memphis, USA.<br />
            (123) 8111 9210 - (012) 1111 6868<br />
            <a href="mailto:Florist@supportthem.com">Florist@supportthem.com</a>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright ©2025 All rights reserved | This template is made with 
          <span role="img" aria-label="love"> ❤️ </span> by 
          <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer"> Colorlib</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
