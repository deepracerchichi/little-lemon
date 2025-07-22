import React from 'react';
import './Special.css';
import { Link } from 'react-router-dom';


const Specials = () => {
  const specials = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      description: "Fresh cucumbers, ripe tomatoes, and crisp red onions dance with creamy feta cheese and Kalamata olives. Drizzled with golden olive oil and oregano, finished with a bright lemon squeeze.",
      image: "/img/greek salad.jpg" 
    },
    {
      id: 2,
      name: "Bruschetta",
      price: "$8.99",
      description: "Toasted artisan bread topped with vine-ripened tomatoes, fresh basil, and garlic. Enhanced with a drizzle of premium olive oil and a hint of sea salt for the perfect Mediterranean bite.",
      image: "/img/bruchetta.png"
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$6.99",
      description: "Our signature moist sponge cake infused with fresh lemon zest and juice. Topped with a silky lemon glaze that melts on your tongue, creating the perfect sweet and tangy finale.",
      image: "/img/lemon dessert.jpg"
    }
  ];

  return (
    <section className="specials-section">
      <div className="specials-container">
        <div className="specials-header">
          <h2 className="specials-title">Specials</h2>
          <Link to="/menu" className="menu-button">On the Menu</Link>
        </div>
        
        <div className="specials-grid">
          {specials.map(special => (
            <div key={special.id} className="special-card">
              <img 
                src={special.image} 
                alt={special.name}
                className="special-image"
              />
              <div className="special-content">
                <div className="special-header">
                  <h3 className="special-name">{special.name}</h3>
                  <span className="special-price">{special.price}</span>
                </div>
                <p className="special-description">{special.description}</p>
                <Link to="/order" className="delivery-button">
                  Order a Delivery
                  <svg className="delivery-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16 5 16H17M17 13V16M9 19.5C9.8 19.5 10.5 20.2 10.5 21S9.8 22.5 9 22.5 7.5 21.8 7.5 21 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21S20.8 22.5 20 22.5 18.5 21.8 18.5 21 19.2 19.5 20 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;