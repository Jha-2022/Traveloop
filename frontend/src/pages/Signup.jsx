import React, { useState } from 'react';
import './Signup.css';

const AestheticCalendar = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const weekday = date.toLocaleString('default', { weekday: 'long' });

  return (
    <div className="aesthetic-calendar">
      <div className="calendar-header">{month}</div>
      <div className="calendar-body">
        <div className="calendar-day">{day}</div>
        <div className="calendar-weekday">{weekday}</div>
      </div>
    </div>
  );
};

import { useNavigate } from 'react-router-dom';

const RegistrationScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    city: '',
    country: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.emailAddress,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Welcome to Traveloop! Registration successful.');
        navigate('/landing');
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Could not connect to server. Make sure backend is running.');
    }
  };

  return (
    <div className="signup-container">
      {/* Background Decorative Elements */}
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>

      <AestheticCalendar />

      <div className="signup-card">
        <header className="signup-header">
          <h1>Join Traveloop</h1>
          <p>Embark on your next adventure with us</p>
        </header>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-row">
            <div className="form-group">
              <label className="input-label">First Name</label>
              <div className="input-wrapper">
                <input
                  className="input-field"
                  name="firstName"
                  placeholder="John"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="input-label">Last Name</label>
              <div className="input-wrapper">
                <input
                  className="input-field"
                  name="lastName"
                  placeholder="Doe"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="input-label">Email Address</label>
              <div className="input-wrapper">
                <input
                  className="input-field"
                  name="emailAddress"
                  placeholder="john@example.com"
                  type="email"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="input-label">Phone Number</label>
              <div className="input-wrapper">
                <input
                  className="input-field"
                  name="phoneNumber"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="input-label">City</label>
              <div className="input-wrapper">
                <input
                  className="input-field"
                  name="city"
                  placeholder="New York"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="input-label">Country</label>
              <div className="input-wrapper">
                <input
                  className="input-field"
                  name="country"
                  placeholder="United States"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="input-label">Password</label>
              <div className="input-wrapper">
                <input
                  className="input-field"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="input-label">Tell us about your dream destination</label>
            <div className="input-wrapper">
              <textarea
                className="input-field textarea-field"
                name="additionalInfo"
                placeholder="Where would you like to go next?"
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn" onClick={() => navigate('/landing')}>
            Create Account
            <span>→</span>
          </button>
        </form>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center', marginTop: '25px' }}>
          Already have an account? <span onClick={() => navigate('/signin')} style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: '500' }}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationScreen;