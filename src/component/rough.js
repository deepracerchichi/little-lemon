// Menu.js
import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      image: "/img/greek salad.jpg"
    },
    {
      id: 2,
      name: "Bruschetta",
      price: "$8.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
      image: "/img/bruchetta.png"
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$6.99",
      description: "Our signature lemon dessert with a perfect balance of sweet and tart",
      image: "/img/lemon dessert.jpg"
    },
    {
      id: 4,
      name: "Pasta",
      price: "$18.99",
      description: "Our signature lemon dessert with a perfect balance of sweet and tart",
      image: "/img/pasta.jpg"
    },
    {
      id: 5,
      name: "Grilled Fish",
      price: "$20.00",
      description: "Freshly grilled fish served with a side of seasonal vegetables and lemon butter sauce",
      image: "/img/fish.jpg"
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