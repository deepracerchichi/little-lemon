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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
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