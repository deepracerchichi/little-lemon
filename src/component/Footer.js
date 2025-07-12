import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-image">
            <img 
              src="/img/chefa.jpg" 
              alt="Restaurant interior"
              className="footer-img"
            />
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h3 className="footer-title">Navigation</h3>
              <ul className="footer-list">
                <li><Link to="/" className="footer-link">HOME</Link></li>
                <li><Link to="/about" className="footer-link">ABOUT</Link></li>
                <li><Link to="/menu" className="footer-link">MENU</Link></li>
                <li><Link to="/reservations" className="footer-link">RESERVATIONS</Link></li>
                <li><Link to="/order" className="footer-link">ORDER ONLINE</Link></li>
                <li><Link to="/login" className="footer-link">LOGIN</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">ADDRESS</span>
                  <p>123 Main Street, Chicago, IL 60601</p>
                </div>
                <div className="contact-item">
                  <span className="contact-label">PHONE NUMBER</span>
                  <p>(555) 123-4567</p>
                </div>
                <div className="contact-item">
                  <span className="contact-label">EMAIL</span>
                  <p>info@littlelemon.com</p>
                </div>
              </div>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-title">Social Media</h3>
              <div className="social-info">
                <div className="social-item">
                  <span className="social-label">FACEBOOK</span>
                  <p>@littlelemonchicago</p>
                </div>
                <div className="social-item">
                  <span className="social-label">INSTAGRAM</span>
                  <p>@littlelemonchi</p>
                </div>
                <div className="social-item">
                  <span className="social-label">TWITTER</span>
                  <p>@littlelemonchi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;