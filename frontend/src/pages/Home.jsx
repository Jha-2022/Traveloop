import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="signup-container" style={{ 
      backgroundImage: 'url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      position: 'relative'
    }}>
      {/* Overlay for better readability */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
      }}></div>

      <div className="signup-card" style={{ 
        maxWidth: '700px', 
        width: '90%', 
        textAlign: 'center',
        padding: '60px 40px',
        zIndex: 2,
        backdropFilter: 'blur(15px)',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h1 style={{ 
          fontSize: '4.5rem', 
          marginBottom: '20px',
          background: 'linear-gradient(to right, #fff, #6366f1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800',
          letterSpacing: '-2px'
        }}>
          Traveloop
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'rgba(255, 255, 255, 0.85)', 
          marginBottom: '40px',
          lineHeight: '1.6',
          fontWeight: '300'
        }}>
          Escape the ordinary. Plan, share, and discover the world's most breathtaking destinations with a community of explorers.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            className="submit-btn" 
            onClick={() => navigate('/signup')}
            style={{ width: 'auto', padding: '16px 45px', borderRadius: '14px', fontSize: '1rem', fontWeight: '600' }}
          >
            Get Started
          </button>
          <button 
            className="input-field" 
            onClick={() => navigate('/signin')}
            style={{ 
              width: 'auto', 
              padding: '16px 45px', 
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.05)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            Sign In
          </button>
        </div>
      </div>

      <style>{`
        .input-field:hover {
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: var(--primary) !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
        }
      `}</style>
    </div>
  );
}

export default Home;