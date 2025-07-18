import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (isSignUp) {
      if (!formData.firstName) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName) {
        newErrors.lastName = 'Last name is required';
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission here
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: ''
    });
    setErrors({});
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side - Branding */}
        <div className="login-brand">
          <div className="brand-content">
            <div className="brand-header">
              <h1 className="brand-title">Little Lemon</h1>
              <p className="brand-subtitle">Chicago</p>
            </div>
            
            <div className="brand-description">
              <p>Experience authentic Mediterranean cuisine in the heart of Chicago. Join our community for exclusive offers and personalized dining experiences.</p>
            </div>
            
            <div className="brand-features">
              <div className="feature-item">
                <div className="feature-icon">🍋</div>
                <span>Fresh Mediterranean Flavors</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">👨‍🍳</div>
                <span>Expert Culinary Team</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🏆</div>
                <span>Award-Winning Restaurant</span>
              </div>
            </div>
          </div>
          
          <div className="brand-decoration">
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
            <div className="decoration-circle circle-3"></div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="login-form-section">
          <div className="form-container">
            <div className="form-header">
              <h2 className="form-title">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="form-subtitle">
                {isSignUp 
                  ? 'Join the Little Lemon family today' 
                  : 'Sign in to your account'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {isSignUp && (
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`form-input ${errors.firstName ? 'error' : ''}`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`form-input ${errors.lastName ? 'error' : ''}`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="Enter your email"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              {isSignUp && (
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="password-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              {isSignUp && (
                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
              )}

              {!isSignUp && (
                <div className="form-options">
                  <label className="checkbox-container">
                    <input type="checkbox" className="checkbox" />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <a href="#" className="forgot-password">Forgot password?</a>
                </div>
              )}

              <button type="submit" className="submit-button">
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>

              <div className="form-divider">
                <span>or</span>
              </div>

              <div className="social-login">
                <button type="button" className="social-button google">
                  <span className="social-icon">🔍</span>
                  Continue with Google
                </button>
                <button type="button" className="social-button facebook">
                  <span className="social-icon">📘</span>
                  Continue with Facebook
                </button>
              </div>
            </form>

            <div className="form-footer">
              <p>
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button type="button" className="toggle-mode" onClick={toggleMode}>
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;