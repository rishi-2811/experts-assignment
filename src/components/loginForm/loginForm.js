import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail && !validateEmail(newEmail)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
       navigate('/dashboard')
    } else {
      setEmailError('Please enter a valid email address');
    }
  };

  return (
    <div className="login-container">
      <h1>Log in to your account</h1>
      <div className="form-card">
        <h2>Welcome back</h2>
        <form onSubmit={handleSubmit}>
          <div className={`form-group ${emailError ? 'error' : ''}`}>
            <label htmlFor="email">Work email</label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your work email"
                required
              />
              {emailError && <span className="error-icon" onClick={()=>{setEmail('')}}>✕</span>}
            </div>
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a href="/login" className="forgot-password">I forgot my password</a>
          </div>
          <div className="form-actions">
            <button type="button" className="back-button">Back</button>
            <button type="submit" className="login-button">Log in</button>
          </div>
        </form>
      </div>
      <div className="login-footer">
        Looking for Inbox? <a href="/login">Log in here.</a>
      </div>
    </div>
  );
};

export default LoginForm;