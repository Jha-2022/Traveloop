import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: credentials.username, // Using 'username' state field for email as per previous code
          password: credentials.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login Successful!');
        navigate('/landing');
      } else {
        alert(data.error || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Signin error:', error);
      alert('Could not connect to server. Make sure backend is running.');
    }
  };

  return (
    <div className="signup-container">
      {/* Background Animated Blobs */}
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>

      {/* Aesthetic Calendar Widget */}
      <div className="aesthetic-calendar">
        <div className="calendar-header">MAY</div>
        <div className="calendar-body">
          <div className="calendar-day">10</div>
          <div className="calendar-weekday">SUN</div>
        </div>
      </div>

      {/* Login Card */}
      <div className="signup-card">
        <div className="signup-header">
          <h1>Login Screen</h1>
          <p>Hey There whats your plan today !</p>
        </div>

        {/* Profile Photo Section */}
        <div className="photo-placeholder" style={photoStyle}>
          <img 
            src="/avatar.png" 
            alt="User Avatar" 
            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="input-label">Username</label>
            <div className="input-wrapper">
              <input
                type="text"
                name="username"
                className="input-field"
                placeholder="Enter your username"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="input-label">Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                className="input-field"
                placeholder="••••••••"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-btn" onClick={() => navigate('/landing')}>
            Sign In
          </button>
        </form>

        <div style={{ marginTop: '25px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Don't have an account? <span onClick={() => navigate('/signup')} style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: '500' }}>Sign up</span>
          </p>
          <p 
            onClick={() => navigate('/landing')}
            style={{ color: 'var(--text-muted)', fontSize: '0.8rem', cursor: 'pointer', opacity: 0.7 }}
          >
            Skip for now →
          </p>
        </div>
      </div>

      {/* Inline styles for the specific profile circle not covered by your CSS */}
      <style>{`
        .photo-placeholder:hover {
            transform: scale(1.05);
            border-color: var(--primary);
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        }
      `}</style>
    </div>
  );
};

const photoStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  border: '2px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto 32px auto',
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  color: 'var(--text-muted)',
  cursor: 'pointer'
};

export default LoginScreen;