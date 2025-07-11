import React from 'react';
import logo from '../img/logo.png';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Little Lemon Logo" className="logo-image"/>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">HOME</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">ABOUT</a>
          </li>
          <li className="nav-item">
            <a href="#menu" className="nav-link">MENU</a>
          </li>
          <li className="nav-item">
            <a href="#reservations" className="nav-link">RESERVATIONS</a>
          </li>
          <li className="nav-item">
            <a href="#order" className="nav-link">ORDER ONLINE</a>
          </li>
          <li className="nav-item">
            <a href="#login" className="nav-link">LOGIN</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

// This component defines a navigation bar with a logo and links to different sections of the website.
