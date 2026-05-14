import React from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
const TraveloopLanding = () => {
  const navigate = useNavigate();
  const regions = [
    { name: 'Paris', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
    { name: 'Bali', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80' },
    { name: 'New York', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80' },
    { name: 'Santorini', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80' },
    { name: 'Tokyo', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80' }
  ];

  const previousTrips = [
    { name: 'Swiss Alps', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80', date: 'Dec 2023' },
    { name: 'Maldives', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', date: 'Oct 2023' },
    { name: 'African Safari', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80', date: 'Aug 2023' }
  ];

  return (
    <div className="signup-container" style={{ alignItems: 'flex-start', padding: '40px 20px' }}>
      {/* Background Animated Blobs */}
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>

      {/* Main Glass Container */}
      <div className="signup-card" style={{ maxWidth: '1000px', width: '95%', textAlign: 'left' }}>
        
        {/* Navbar Area */}
        <Navbar />

        {/* Banner Section */}
        <div style={{ ...bannerStyle, backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div style={bannerOverlay}>
            <h2 style={{ color: 'white', fontSize: '2.5rem', fontWeight: '600', margin: '0 0 10px 0', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>Explore the Unexplored</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Plan your dream vacation with Traveloop</p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div style={searchRowStyle}>
          <input type="text" className="input-field" placeholder="Where do you want to go?" style={{ flex: 3 }} />
          <button className="input-field" style={{ flex: 1, cursor: 'pointer' }}>Group by</button>
          <button className="input-field" style={{ flex: 0.5, cursor: 'pointer' }}>Filter</button>
          <button className="input-field" style={{ flex: 0.8, cursor: 'pointer' }}>Sort by</button>
        </div>

        {/* Top Regional Selections */}
        <section style={{ marginBottom: '40px' }}>
          <div style={sectionHeaderStyle}>
            <span style={{ paddingRight: '15px', whiteSpace: 'nowrap' }}>Top Regional Selections</span>
            <div style={lineStyle}></div>
          </div>
          <div style={gridStyle}>
            {regions.map((region, i) => (
              <div key={i} className="input-field region-card" style={{ ...regionCardStyle, backgroundImage: `url(${region.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div style={cardLabelStyle}>{region.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Previous Trips */}
        <section style={{ marginBottom: '20px' }}>
          <div style={sectionHeaderStyle}>
            <span style={{ paddingRight: '15px', whiteSpace: 'nowrap' }}>Previous Trips</span>
            <div style={lineStyle}></div>
          </div>
          <div style={gridStyle}>
            {previousTrips.map((trip, i) => (
              <div key={i} className="input-field trip-card" style={{ ...tripCardStyle, backgroundImage: `url(${trip.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div style={tripOverlayStyle}>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>{trip.name}</h3>
                  <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>{trip.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px', gap: '15px' }}>
          <button 
            onClick={() => navigate('/community')}
            className="submit-btn" 
            style={{ width: 'auto', padding: '12px 24px', borderRadius: '30px', gap: '10px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', color: 'white' }}
          >
            <span style={{ fontSize: '1.2rem' }}>👥</span> Community
          </button>
          
          <button 
            onClick={() => navigate('/create-trip')}
            className="submit-btn" 
            style={{ width: 'auto', padding: '12px 24px', borderRadius: '30px', gap: '10px' }}
          >
            <span style={{ fontSize: '1.5rem' }}>+</span> Plan a trip
          </button>
        </div>

      </div>

      <style>{`
        .input-field:hover {
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
        .region-card::after, .trip-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7));
          border-radius: inherit;
        }
      `}</style>
    </div>
  );
};

// landingpage styles
const bannerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  marginBottom: '40px',
  overflow: 'hidden',
  boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
  border: '1px solid var(--glass-border)'
};

const bannerOverlay = {
  position: 'absolute',
  top: 0, left: 0, right: 0, bottom: 0,
  background: 'rgba(0, 0, 0, 0.3)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '20px'
};

const searchRowStyle = {
  display: 'flex',
  gap: '12px',
  marginBottom: '40px',
  flexWrap: 'wrap'
};

const sectionHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
  color: 'var(--text-main)',
  fontSize: '1.2rem',
  fontWeight: '600',
  letterSpacing: '0.5px'
};

const lineStyle = {
  height: '1px',
  flex: 1,
  background: 'linear-gradient(to right, var(--glass-border), transparent)'
};

const gridStyle = {
  display: 'flex',
  gap: '20px',
  overflowX: 'auto',
  paddingBottom: '20px',
  scrollbarWidth: 'none', // For Firefox
  msOverflowStyle: 'none' // For IE
};

const regionCardStyle = {
  minWidth: '160px',
  height: '160px',
  borderRadius: '20px',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid var(--glass-border)'
};

const tripCardStyle = {
  minWidth: '240px',
  height: '320px',
  borderRadius: '24px',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid var(--glass-border)'
};

const cardLabelStyle = {
  position: 'absolute',
  bottom: '15px',
  left: '0',
  right: '0',
  textAlign: 'center',
  color: 'white',
  fontWeight: '600',
  fontSize: '1rem',
  zIndex: 1
};

const tripOverlayStyle = {
  position: 'absolute',
  bottom: '20px',
  left: '20px',
  color: 'white',
  zIndex: 1
};

export default TraveloopLanding;
