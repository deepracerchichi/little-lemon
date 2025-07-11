import React from 'react';
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
              <h3 className="footer-title">DoorMat Navigation</h3>
              <ul className="footer-list">
                <li><a href="#home" className="footer-link">HOME</a></li>
                <li><a href="#about" className="footer-link">ABOUT</a></li>
                <li><a href="#menu" className="footer-link">MENU</a></li>
                <li><a href="#reservations" className="footer-link">RESERVATIONS</a></li>
                <li><a href="#order" className="footer-link">ORDER ONLINE</a></li>
                <li><a href="#login" className="footer-link">LOGIN</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">ADDRESS</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">PHONE NUMBER</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">EMAIL</span>
                </div>
              </div>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-title">Social Media Links</h3>
              <div className="social-info">
                <div className="social-item">
                  <span className="social-label">ADDRESS</span>
                </div>
                <div className="social-item">
                  <span className="social-label">PHONE NUMBER</span>
                </div>
                <div className="social-item">
                  <span className="social-label">EMAIL</span>
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