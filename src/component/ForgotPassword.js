import React from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  return (
    <div className="forgot-password-page">
        <div className="forgot-password-container">
            <h1 className="forgot-password-title">Forgot Password</h1>
            <p className="forgot-password-description">
            If you have forgotten your password, please enter your email address below. We will send you a link to reset your password.
            </p>
            <form className="forgot-password-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="reset-button">Reset Password</button>
            </form>
        </div>
    </div>
    );

  }

export default ForgotPassword;