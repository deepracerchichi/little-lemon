import React from 'react';
import './Testimonial.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      name: "John Doe",
      review: "Amazing food and great service! The Greek salad was fresh and delicious.",
      image: "/img/J.png"
    },
    {
      id: 2,
      rating: 5,
      name: "Sarah Smith",
      review: "Best Mediterranean restaurant in Chicago. Highly recommended!",
      image: "/img/S.png"
    },
    {
      id: 3,
      rating: 4,
      name: "Mike Johnson",
      review: "Great atmosphere and authentic flavors. Will definitely come back.",
      image: "/img/M.png"
    },
    {
      id: 4,
      rating: 5,
      name: "Emily Davis",
      review: "The lemon dessert was incredible! Perfect end to a wonderful meal.",
      image: "/img/E.png"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Testimonials</h2>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                <span className="rating-label">Rating</span>
                <div className="stars">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <div className="testimonial-profile">
                    <div className="avatar-placeholder">
                        <img src={testimonial.image} alt={testimonial.name} className="avatar-placeholder" />
                    </div>
                    <span className="testimonial-name">{testimonial.name}</span>
              </div>
              
              
              
              <div className="testimonial-content">
                <span className="review-label">Review</span>
                <p className="testimonial-text">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;