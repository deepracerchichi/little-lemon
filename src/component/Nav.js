import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Little Lemon Logo" className="logo-image"/>
          </Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link">MENU</Link>
          </li>
          <li className="nav-item">
            <Link to="/reservations" className="nav-link">RESERVATIONS</Link>
          </li>
          <li className="nav-item">
            <Link to="/order" className="nav-link">ORDER ONLINE</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">LOGIN</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

// This component defines a navigation bar with a logo and links to different sections of the website.
