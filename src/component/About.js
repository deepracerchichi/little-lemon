import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">Little Lemon</h2>
            <h3 className="about-subtitle">Chicago</h3>
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. 
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
              Donec quam felis, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. 
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
              Donec quam felis,
            </p>
          </div>
          
          <div className="about-images">
            <div className="image-container">
              <img 
                src="/img/lfish.jpg" 
                alt="Chefs working in kitchen"
                className="about-image main-image"
              />
              <img 
                src="/img/seas.jpg" 
                alt="Happy chefs"
                className="about-image secondary-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;