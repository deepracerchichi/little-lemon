// Menu.js
import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      description: "Fresh mixed greens, tomatoes, olives, feta cheese, and our signature dressing",
      image: "/img/greek salad.jpg"
    },
    {
      id: 2,
      name: "Bruschetta",
      price: "$8.99",
      description: "Toasted bread topped with fresh tomatoes, garlic, and herbs",
      image: "/img/bruchetta.png"
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$6.99",
      description: "Our signature lemon dessert with a perfect balance of sweet and tart",
      image: "/img/lemon dessert.jpg"
    }
  ];

  return (
    <div className="menu-page">
      <div className="menu-container">
        <h1 className="menu-title">Our Menu</h1>
        <div className="menu-grid">
          {menuItems.map(item => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} className="menu-image" />
              <div className="menu-content">
                <div className="menu-header">
                  <h3 className="menu-name">{item.name}</h3>
                  <span className="menu-price">{item.price}</span>
                </div>
                <p className="menu-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;