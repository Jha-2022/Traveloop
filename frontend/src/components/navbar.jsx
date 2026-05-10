import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px'
  };

  return (
    <div style={navStyle}>
      <h1 
        onClick={() => navigate('/landing')}
        style={{ 
          margin: 0, 
          fontSize: '1.8rem', 
          background: 'linear-gradient(to right, #fff, #6366f1)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          lineHeight: '1.4',
          paddingBottom: '5px',
          cursor: 'pointer'
        }}
      >
        Traveloop
      </h1>
      <div 
        onClick={() => navigate('/profile')}
        className="photo-placeholder" 
        style={{ 
          width: '45px', 
          height: '45px', 
          borderRadius: '50%', 
          border: '2px solid var(--primary)', 
          overflow: 'hidden',
          cursor: 'pointer'
        }}
      >
        <img src="/avatar.png" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  );
};

export default Navbar;
