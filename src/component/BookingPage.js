import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Gift, ChevronLeft, CheckCircle, User } from 'lucide-react';
import './ReservationForm.css';

// Mock API functions
const fetchAvailableTimes = (date) => {
  const dayOfWeek = new Date(date).getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const submitReservation = async (formData) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Reservation submitted:', formData);
  return { success: true, confirmationId: 'LL' + Date.now() };
};

const ReservationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmationData, setConfirmationData] = useState(null);
  
  // Step 1 - Reservation Details
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [seatingArea, setSeatingArea] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  
  // Step 2 - Customer Information
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  // Update available times when date changes
  useEffect(() => {
    if (date) {
      const times = fetchAvailableTimes(date);
      setAvailableTimes(times);
      setTime(''); // Reset time selection
    }
  }, [date]);

  const validateField = (fieldName, value) => {
      const errors = {};
      
      switch (fieldName) {
        case 'date':
          if (!value) {
            errors.date = 'Please select a date';
          }
          break;
        case 'time':
          if (!value) {
            errors.time = 'Please select a time';
          }
          break;
        case 'guests':
          if (!value || value < 1) {
            errors.guests = 'Please select number of guests';
          } else if (value > 10) {
            errors.guests = 'Maximum 10 guests allowed';
          }
          break;
        case 'firstName':
          if (!value.trim()) {
            errors.firstName = 'First name is required';
          } else if (value.trim().length < 2) {
            errors.firstName = 'First name must be at least 2 characters';
          } else if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
            errors.firstName = 'First name can only contain letters, spaces, hyphens, and apostrophes';
          }
          break;
        case 'lastName':
          if (!value.trim()) {
            errors.lastName = 'Last name is required';
          } else if (value.trim().length < 2) {
            errors.lastName = 'Last name must be at least 2 characters';
          } else if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
            errors.lastName = 'Last name can only contain letters, spaces, hyphens, and apostrophes';
          }
          break;
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!value.trim()) {
            errors.email = 'Email address is required';
          } else if (!emailRegex.test(value)) {
            errors.email = 'Please enter a valid email address';
          }
          break;
        case 'phone':
          if (value.trim() && !/^[+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-().]/g, ''))) {
            errors.phone = 'Please enter a valid phone number';
          }
          break;
        default:
          break;
      }
      return errors;
    };

    const handleFieldChange = (fieldName, value) => {
      const setterMap = {
        date: setDate,
        time: setTime,
        guests: setGuests,
        firstName: setFirstName,
        lastName: setLastName,
        email: setEmail,
        phone: setPhone,
      };
      
      if (setterMap[fieldName]) {
        setterMap[fieldName](value);
      }
      
      setTouchedFields(prev => ({ ...prev, [fieldName]: true }));
      
      const fieldErrors = validateField(fieldName, value);
      setValidationErrors(prev => ({
        ...prev,
        [fieldName]: fieldErrors[fieldName] || undefined
      }));
    };

  const handleStep1Submit = () => {
      const fieldsToValidate = ['date', 'time', 'guests'];
      let hasErrors = false;
      const newErrors = {};
      const newTouched = {};
      
      fieldsToValidate.forEach(field => {
        const fieldValue = field === 'date' ? date : field === 'time' ? time : guests;
        const errors = validateField(field, fieldValue);
        if (errors[field]) {
          newErrors[field] = errors[field];
          hasErrors = true;
        }
        newTouched[field] = true;
      });
      
      setValidationErrors(prev => ({ ...prev, ...newErrors }));
      setTouchedFields(prev => ({ ...prev, ...newTouched }));
      
      if (!hasErrors) {
        setCurrentStep(2);
      }
    };

    const handleFinalSubmit = async () => {
        const fieldsToValidate = ['firstName', 'lastName', 'email'];
        let hasErrors = false;
        const newErrors = {};
        const newTouched = {};
        
        fieldsToValidate.forEach(field => {
          const fieldValue = field === 'firstName' ? firstName : 
                            field === 'lastName' ? lastName : email;
          const errors = validateField(field, fieldValue);
          if (errors[field]) {
            newErrors[field] = errors[field];
            hasErrors = true;
          }
          newTouched[field] = true;
        });

        // Validate phone separately (only if provided)
        if (phone.trim()) {
          const phoneErrors = validateField('phone', phone);
          if (phoneErrors.phone) {
            newErrors.phone = phoneErrors.phone;
            hasErrors = true;
          }
          newTouched.phone = true;
        }
        
        setValidationErrors(prev => ({ ...prev, ...newErrors }));
        setTouchedFields(prev => ({ ...prev, ...newTouched }));
        
        if (hasErrors) {
          return;
        }

        setIsSubmitting(true);
        
        try {
          const formData = {
            date, time, guests, occasion, seatingArea,
            firstName, lastName, email, phone, specialRequests
          };
          
          const result = await submitReservation(formData);
          
          if (result.success) {
            setConfirmationData({ ...formData, confirmationId: result.confirmationId });
            setIsConfirmed(true);
          }
        } catch (error) {
          alert('Error submitting reservation. Please try again.');
        } finally {
          setIsSubmitting(false);
        }
      };

  const resetForm = () => {
      setCurrentStep(1);
      setIsConfirmed(false);
      setConfirmationData(null);
      setDate('');
      setTime('');
      setGuests(1);
      setOccasion('');
      setSeatingArea('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setSpecialRequests('');
      setValidationErrors({});
      setTouchedFields({});
    };

  if (isConfirmed) {
    return (
      <div className="reservation-container">
        <div className="confirmation-header">
          <div className="confirmation-icon">
            <CheckCircle size={48} />
          </div>
          <h1>Booking Confirmed!</h1>
          <div className="confirmation-id">
            <strong>Reservation ID: {confirmationData?.confirmationId}</strong>
          </div>
          <p>Thank you for choosing Little Lemon, {confirmationData?.firstName}!</p>
        </div>

        <div className="confirmation-details">
          <h2>Your Reservation Details</h2>
          <p className="confirmation-subtitle">We look forward to serving you</p>
          
          <div className="detail-cards">
            <div className="detail-card lemon-yellow">
              <div className="detail-label">Date</div>
              <div className="detail-value">
                {new Date(confirmationData?.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>

            <div className="detail-card lemon-green">
              <div className="detail-label">Time</div>
              <div className="detail-value">{confirmationData?.time}</div>
            </div>

            <div className="detail-card lemon-olive">
              <div className="detail-label">Party Size</div>
              <div className="detail-value">{confirmationData?.guests} Guests</div>
            </div>

            {confirmationData?.occasion && (
              <div className="detail-card lemon-yellow-light">
                <div className="detail-label">Occasion</div>
                <div className="detail-value">{confirmationData?.occasion}</div>
              </div>
            )}

            {confirmationData?.seatingArea && (
              <div className="detail-card lemon-green-light">
                <div className="detail-label">Seating Area</div>
                <div className="detail-value">{confirmationData?.seatingArea}</div>
              </div>
            )}

            <div className="detail-card lemon-cream">
              <div className="detail-label">Name</div>
              <div className="detail-value">{confirmationData?.firstName} {confirmationData?.lastName}</div>
            </div>

            <div className="detail-card lemon-sage">
              <div className="detail-label">Email Address</div>
              <div className="detail-value">{confirmationData?.email}</div>
            </div>

            {confirmationData?.phone && (
              <div className="detail-card lemon-gold">
                <div className="detail-label">Phone Number</div>
                <div className="detail-value">{confirmationData?.phone}</div>
              </div>
            )}
          </div>

          <div className="important-info">
            <h3>What to Expect</h3>
            <ul>
              <li>Authentic Mediterranean cuisine prepared with fresh, local ingredients</li>
              <li>Warm, welcoming atmosphere perfect for any occasion</li>
              <li>Attentive service from our experienced culinary team</li>
            </ul>
          </div>

          <div className="confirmation-actions">
            <button className="btn-secondary" onClick={() => window.print()}>
              Print Reservation
            </button>
            <button className="btn-primary" onClick={resetForm}>
              Add to Calendar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reservation-container">
      <div className="reservation-header">
        <h1>Reserve a Table</h1>
        <p>Experience authentic Mediterranean cuisine at Little Lemon</p>
      </div>

      <div className="form-container">
        {currentStep === 1 ? (
          <div className="step-content">
            <div className="step-header">
              <h2>Book Your Experience</h2>
              <p>Join us for an unforgettable dining experience featuring fresh, locally-sourced ingredients and traditional Mediterranean recipes passed down through generations.</p>
            </div>

            <div className="form-fields">
              <div className="field-group">
                <label htmlFor="date">
                  <Calendar size={16} />
                  Choose date
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => handleFieldChange('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className={`date-input ${validationErrors.date && touchedFields.date ? 'error' : ''}`}
                />
                {validationErrors.date && touchedFields.date && (
                  <span className="error-message">{validationErrors.date}</span>
                )}
              </div>

              <div className="field-group">
                <label htmlFor="time">
                  <Clock size={16} />
                  Or choose time from dropdown
                </label>
                <select
                  id="time"
                  value={time}
                  onChange={(e) => handleFieldChange('time', e.target.value)}
                  className={`time-select ${validationErrors.time && touchedFields.time ? 'error' : ''}`}
                >
                  <option value="">Select a time</option>
                  {availableTimes.map((timeOption) => (
                    <option key={timeOption} value={timeOption}>
                      {timeOption}
                    </option>
                  ))}
                </select>
                {validationErrors.time && touchedFields.time && (
                  <span className="error-message">{validationErrors.time}</span>
                )}
              </div>

              <div className="field-group">
                <label htmlFor="guests">
                  <Users size={16} />
                  Number of guests
                </label>
                <input
                  type="number"
                  id="guests"
                  value={guests}
                  onChange={(e) => handleFieldChange('guests', e.target.value)}
                  min="1"
                  max="10"
                  className={`guests-input ${validationErrors.guests && touchedFields.guests ? 'error' : ''}`}
                />
                {validationErrors.guests && touchedFields.guests && (
                  <span className="error-message">{validationErrors.guests}</span>
                )}
              </div>

              <div className="field-group">
                <label htmlFor="occasion">
                  <Gift size={16} />
                  Occasion
                </label>
                <select
                  id="occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="occasion-select"
                >
                  <option value="">Select an occasion (optional)</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Date Night">Date Night</option>
                  <option value="Business Dinner">Business Dinner</option>
                  <option value="Celebration">Celebration</option>
                </select>
              </div>

              <div className="field-group">
                <label htmlFor="seating">
                  Select Seating Area
                </label>
                <select
                  id="seating"
                  value={seatingArea}
                  onChange={(e) => setSeatingArea(e.target.value)}
                  className="seating-select"
                >
                  <option value="">Seating Area</option>
                  <option value="Indoor">Indoor</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Private">Private Room</option>
                  <option value="Bar">Bar Area</option>
                </select>
              </div>
            </div>

            <div className="form-actions">
              <button className="btn-cancel" onClick={resetForm}>
                Cancel
              </button>
              <button className="btn-primary" onClick={handleStep1Submit}>
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="step-content">
            <div className="step-header">
              <div className="customer-info-icon">
                <User size={20} />
              </div>
              <h2>Customer Information</h2>
            </div>

            <div className="form-fields">
              <div className="field-group">
                <label htmlFor="firstName">* First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => handleFieldChange('firstName', e.target.value)}
                  placeholder="John"
                  className={`name-input ${validationErrors.firstName && touchedFields.firstName ? 'error' : ''}`}
                />
                {validationErrors.firstName && touchedFields.firstName && (
                  <span className="error-message">{validationErrors.firstName}</span>
                )}
              </div>

              <div className="field-group">
                <label htmlFor="lastName">* Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => handleFieldChange('lastName', e.target.value)}
                  placeholder="Doe"
                  className={`name-input ${validationErrors.lastName && touchedFields.lastName ? 'error' : ''}`}
                />
                {validationErrors.lastName && touchedFields.lastName && (
                  <span className="error-message">{validationErrors.lastName}</span>
                )}
              </div>

              <div className="field-group">
                <label htmlFor="email">* Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  placeholder="johndoe@gmail.com"
                  className={`email-input ${validationErrors.email && touchedFields.email ? 'error' : ''}`}
                />
                {validationErrors.email && touchedFields.email && (
                  <span className="error-message">{validationErrors.email}</span>
                )}
              </div>

              <div className="field-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => handleFieldChange('phone', e.target.value)}
                  placeholder="(555) 123- 4567"
                  className={`phone-input ${validationErrors.phone && touchedFields.phone ? 'error' : ''}`}
                />
                {validationErrors.phone && touchedFields.phone && (
                  <span className="error-message">{validationErrors.phone}</span>
                )}
              </div>

              <div className="field-group">
                <label htmlFor="requests">Special Requests (Optional)</label>
                <textarea
                  id="requests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Any special requests, dietary restrictions or accessibility needs..."
                  className="requests-textarea"
                  rows="4"
                />
              </div>
            </div>

            <div className="form-actions">
              <button className="btn-secondary" onClick={() => setCurrentStep(1)}>
                <ChevronLeft size={16} />
                Back
              </button>
              <button 
                className="btn-primary"
                onClick={handleFinalSubmit}
                disabled={isSubmitting}
              >
                <CheckCircle size={16} />
                {isSubmitting ? 'Processing...' : 'Submit'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationForm;