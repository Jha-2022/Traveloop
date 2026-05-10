import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="signup-container" style={{ 
      backgroundImage: 'url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Overlay with gradient for better depth */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.3) 100%)',
        zIndex: 1
      }}></div>

      <div className="home-content" style={{ 
        maxWidth: '800px', 
        width: '90%', 
        textAlign: 'center',
        padding: '60px 40px',
        zIndex: 2,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '30px',
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ 
          display: 'inline-block',
          padding: '8px 16px', 
          background: 'rgba(99, 102, 241, 0.2)', 
          border: '1px solid rgba(99, 102, 241, 0.3)',
          borderRadius: '30px',
          color: '#e0e7ff',
          fontSize: '0.85rem',
          fontWeight: '600',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}>
          ✨ Your Journey Begins Here
        </div>

        <h1 style={{ 
          fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', 
          margin: '0 0 20px 0',
          background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800',
          letterSpacing: '-2px',
          lineHeight: '1.2',
          paddingBottom: '10px' // Fix for clipped text
        }}>
          Traveloop
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'rgba(255, 255, 255, 0.85)', 
          marginBottom: '40px',
          lineHeight: '1.6',
          fontWeight: '300',
          maxWidth: '600px',
          margin: '0 auto 40px auto'
        }}>
          Escape the ordinary. Plan, share, and discover the world's most breathtaking destinations with a community of explorers.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            className="home-btn-primary" 
            onClick={() => navigate('/signup')}
          >
            Get Started
            <span style={{ marginLeft: '8px', fontSize: '1.2rem' }}>→</span>
          </button>
          <button 
            className="home-btn-secondary" 
            onClick={() => navigate('/signin')}
          >
            Sign In
          </button>
        </div>
      </div>

      <style>{`
        .home-content {
          animation: floatUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(40px);
        }

        @keyframes floatUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .home-btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 40px;
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: 600;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
        }

        .home-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.5);
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
        }

        .home-btn-secondary {
          padding: 16px 40px;
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .home-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}

export default Home;