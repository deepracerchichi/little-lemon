import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">About Us</h1>
            <p className="hero-subtitle">
              Authentic Mediterranean Cuisine in the Heart of Chicago
            </p>
            <div className="hero-divider"></div>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="story-title">Our Story</h2>
              <p className="story-paragraph">
                Founded in 1995 by brothers Mario and Adrian, Little Lemon began as a small family dream to bring 
                authentic Mediterranean flavors to Chicago. What started as a humble 20-seat restaurant has grown 
                into a beloved neighborhood institution, serving traditional recipes passed down through generations.
              </p>
              <p className="story-paragraph">
                Our commitment to fresh, locally-sourced ingredients and time-honored cooking techniques has made 
                us a favorite among locals and visitors alike. Every dish tells a story of tradition, passion, 
                and the vibrant flavors of the Mediterranean coast.
              </p>
              <div className="years-badge">
                <div className="badge-circle">
                  <span className="badge-number">25+</span>
                </div>
                <span className="badge-text">Years of Excellence</span>
              </div>
            </div>
            
            <div className="story-images">
              <div className="image-grid">
                <div className="image-card chef-card">
                  <img src="/img/chefa.jpg" alt="Fresh Ingredients" className="card-image" />
                  <div className="card-content">
                    
                  </div>
                </div>
                <div className="image-card ingredient-card with-image">
                  <img src="/img/seas.jpg" alt="Fresh Ingredients" className="card-image" />
                  <div className="card-content">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <div className="values-header">
            <h2 className="values-title">Our Values</h2>
            <p className="values-subtitle">What makes Little Lemon special</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌿</div>
              <h3 className="value-name">Fresh & Local</h3>
              <p className="value-description">
                We source our ingredients from local farmers and suppliers, ensuring the freshest 
                flavors in every dish while supporting our community.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">👨‍👩‍👧‍👦</div>
              <h3 className="value-name">Family Tradition</h3>
              <p className="value-description">
                Our recipes have been passed down through generations, preserving authentic 
                Mediterranean flavors and cooking techniques.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3 className="value-name">Community First</h3>
              <p className="value-description">
                We believe in creating a warm, welcoming space where neighbors become family 
                and every meal is a celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <div className="team-header">
            <h2 className="team-title">Meet Our Founders</h2>
          </div>
          
          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-image">
                <div className="founder-placeholder">
                  <span className="founder-initial">M</span>
                </div>
              </div>
              <div className="founder-info">
                <h3 className="founder-name">Mario Rossi</h3>
                <p className="founder-role">Head Chef & Co-Founder</p>
                <p className="founder-bio">
                  With over 30 years of culinary experience, Mario brings authentic Italian 
                  and Mediterranean flavors to every dish. His passion for traditional cooking 
                  methods and innovative presentations has earned Little Lemon numerous awards.
                </p>
              </div>
            </div>
            
            <div className="founder-card">
              <div className="founder-image">
                <div className="founder-placeholder">
                  <span className="founder-initial">A</span>
                </div>
              </div>
              <div className="founder-info">
                <h3 className="founder-name">Adrian Rossi</h3>
                <p className="founder-role">Restaurant Manager & Co-Founder</p>
                <p className="founder-bio">
                  Adrian's expertise in hospitality and business management has helped Little Lemon 
                  grow from a small family restaurant to a Chicago institution. He ensures every 
                  guest feels welcomed and valued.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Experience Little Lemon Today</h2>
            <p className="cta-text">
              Join us for an unforgettable Mediterranean dining experience in the heart of Chicago
            </p>
            <div className="cta-buttons">
              <Link to="/reservations" className="cta-button primary">Make a Reservation</Link>
              <Link to="/menu" className="cta-button secondary">View Our Menu</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;