import React from 'react';
import herodish from '../img/hero-dish.jpg';
import './Header.css';
import { Link } from 'react-router-dom';
// Then replace the button with:

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-text">
            <h1 className="header-title">Little Lemon</h1>
            <h2 className="header-subtitle">Chicago</h2>
            <p className="header-description">
              Welcome to Little Lemon — a cozy neighborhood bistro in the heart of Chicago, known for vibrant Mediterranean flavors and warm hospitality. Whether you're stopping by for brunch, dinner, or just a glass of wine, we promise a fresh, memorable dining experience.
            </p>
            <Link to="/reservations" className="reserve-button">Reserve a Table</Link>
          </div>
          <div className="header-image">
            <img src={herodish} alt="Gourmet appetizers on slate board" className="food-image" />
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Header;