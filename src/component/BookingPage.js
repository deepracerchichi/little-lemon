import React, { useState } from 'react';
import './BookingPage.css';

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    seatingArea: '',
    occasion: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: ''
  });

  const availableTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];

  const seatingAreas = [
    'Indoor Dining',
    'Outdoor Patio',
    'Bar Area',
    'Private Room'
  ];

  const occasions = [
    'Birthday',
    'Anniversary',
    'Business',
    'Date Night',
    'Family Gathering',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGuestChange = (increment) => {
    setFormData(prev => ({
      ...prev,
      guests: Math.max(1, Math.min(10, prev.guests + increment))
    }));
  };

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Booking submitted successfully!');
  };

  const getProgressPercentage = () => {
    return (currentStep / 2) * 100;
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <h1 className="booking-title">Reserve a Table</h1>
        
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
          <div className="progress-text">
            Step {currentStep} of 2
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          {/* Step 1: Reservation Details */}
          <div className={`form-step ${currentStep === 1 ? 'active' : ''}`}>
            <div className="form-group">
              <label htmlFor="date">Select Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Select Time</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">17:00</option>
                {availableTimes.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="seatingArea">Select Seating Area</label>
              <select
                id="seatingArea"
                name="seatingArea"
                value={formData.seatingArea}
                onChange={handleChange}
              >
                <option value="">Seating Area</option>
                {seatingAreas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="occasion" className="optional-label">Select Occasion</label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
              >
                <option value="">Occasion</option>
                {occasions.map(occasion => (
                  <option key={occasion} value={occasion}>{occasion}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Select Number of Diners</label>
              <div className="diners-counter">
                <button 
                  type="button" 
                  className="counter-btn" 
                  onClick={() => handleGuestChange(-1)}
                  disabled={formData.guests <= 1}
                >
                  −
                </button>
                <span className="counter-value">{formData.guests}</span>
                <button 
                  type="button" 
                  className="counter-btn" 
                  onClick={() => handleGuestChange(1)}
                  disabled={formData.guests >= 10}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Step 2: Personal Information */}
          <div className={`form-step ${currentStep === 2 ? 'active' : ''}`}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="comments" className="optional-label">Comments</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Special requests or dietary requirements..."
              />
            </div>
          </div>

          {/* Form Buttons */}
          <div className="form-buttons">
            <button type="button" className="cancel-button">
              Cancel
            </button>
            
            {currentStep === 1 ? (
              <button type="button" className="next-button" onClick={handleNext}>
                Next →
              </button>
            ) : (
              <>
                <button type="button" className="back-button" onClick={handleBack}>
                  ← Back
                </button>
                <button type="submit" className="submit-button">
                  Make Your Reservation
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;