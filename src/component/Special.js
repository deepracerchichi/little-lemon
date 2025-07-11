import React from 'react';
import './Special.css';


const Specials = () => {
  const specials = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis",
      image: "/img/greek salad.jpg" // Replace with your image path
    },
    {
      id: 2,
      name: "Bruschetta",
      price: "$12.99",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis",
      image: "/img/bruchetta.png"
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$12.99",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis",
      image: "/img/lemon dessert.jpg"
    }
  ];

  return (
    <section className="specials-section">
      <div className="specials-container">
        <div className="specials-header">
          <h2 className="specials-title">Specials</h2>
          <button className="menu-button">On the Menu</button>
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
                <button className="delivery-button">
                  Order a Delivery
                  <svg className="delivery-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16 5 16H17M17 13V16M9 19.5C9.8 19.5 10.5 20.2 10.5 21S9.8 22.5 9 22.5 7.5 21.8 7.5 21 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21S20.8 22.5 20 22.5 18.5 21.8 18.5 21 19.2 19.5 20 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;