import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';

const TripDetailModal = ({ isOpen, onClose, trip }) => {
  const navigate = useNavigate();
  if (!isOpen || !trip) return null;

  // Fallback image if none exists
  const tripImg = trip.img || `https://source.unsplash.com/800x600/?${encodeURIComponent(trip.place || trip.name)},travel`;

  return (
    <div style={modalOverlayStyle}>
      <div className="signup-card" style={{ ...modalContentStyle, maxWidth: '600px', padding: 0, overflow: 'hidden' }}>
        <div style={{ height: '250px', backgroundImage: `url(${tripImg})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <button onClick={onClose} style={{ ...closeButtonStyle, position: 'absolute', top: '20px', right: '20px', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
            <h2 style={{ margin: 0, color: 'white', fontSize: '1.8rem' }}>{trip.name}</h2>
            <div style={{ display: 'flex', gap: '15px', marginTop: '5px' }}>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                <span style={{ marginRight: '5px' }}>📅</span>
                {trip.startDate} — {trip.endDate}
              </p>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                <span style={{ marginRight: '5px' }}>⏱️</span>
                {trip.duration}
              </p>
            </div>
          </div>
        </div>
        
        <div style={{ padding: '30px' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Overview</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px', fontSize: '0.95rem' }}>
            {trip.description || "Get ready for an unforgettable journey to " + trip.name + ". Explore breathtaking landscapes, rich culture, and local delicacies."}
          </p>

          {trip.highlights && trip.highlights.length > 0 && (
            <>
              <h3 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Highlights</h3>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
                {trip.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </>
          )}

          <div style={{ marginTop: '30px', display: 'flex', gap: '15px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              {!trip.isPrevious && (
                <button className="input-field" style={{ flex: 1, border: '1px solid var(--primary)', color: 'var(--primary)' }}>Edit Plan</button>
              )}
              <button 
                className="submit-btn" 
                style={{ flex: 1, background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
                onClick={() => navigate('/checklist/' + trip.tripId)}
              >
                🧳 Pack Bag
              </button>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button 
                className="input-field" 
                style={{ flex: 1, border: '1px solid #f59e0b', color: '#f59e0b', fontWeight: '500' }}
                onClick={() => navigate('/notes/' + trip.tripId)}
              >
                📝 Trip Notes
              </button>
              <button 
                className="input-field" 
                style={{ flex: 1, border: '1px solid #10b981', color: '#10b981', fontWeight: '500' }}
                onClick={() => navigate('/expense/' + trip.tripId)}
              >
                💰 Expenses
              </button>
            </div>
            <button className="input-field" style={{ width: '100%' }} onClick={onClose}>Close Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const EditProfileModal = ({ isOpen, onClose, userData, onSave }) => {
  const [formData, setFormData] = useState(userData);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={modalOverlayStyle}>
      <div className="signup-card" style={modalContentStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-main)' }}>Edit Profile</h2>
          <button onClick={onClose} style={closeButtonStyle}>✕</button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div className="form-group">
            <label className="input-label">Phone Number</label>
            <input 
              className="input-field" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="+1 234 567 890" 
            />
          </div>
          
          <div className="form-group">
            <label className="input-label">Gender</label>
            <select 
              className="input-field" 
              name="gender" 
              value={formData.gender} 
              onChange={handleChange}
              style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}
            >
              <option value="" style={{ background: '#1e293b' }}>Select Gender</option>
              <option value="Male" style={{ background: '#1e293b' }}>Male</option>
              <option value="Female" style={{ background: '#1e293b' }}>Female</option>
              <option value="Other" style={{ background: '#1e293b' }}>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="input-label">Interests</label>
            <input 
              className="input-field" 
              name="interests" 
              value={formData.interests} 
              onChange={handleChange} 
              placeholder="Hiking, Photography, Foodie..." 
            />
          </div>

          <div className="form-group">
            <label className="input-label">Bio</label>
            <textarea 
              className="input-field" 
              name="bio" 
              value={formData.bio} 
              onChange={handleChange} 
              placeholder="Tell us about your travel style..."
              style={{ minHeight: '80px', resize: 'vertical' }}
            />
          </div>

          <button 
            className="submit-btn" 
            onClick={() => onSave(formData)}
            style={{ marginTop: '10px' }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

const UserProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [preplannedTrips, setPreplannedTrips] = useState([]);
  const [previousTrips, setPreviousTrips] = useState([]);
  const [userData, setUserData] = useState({
    name: 'Rishi Jha',
    email: 'rishijha@example.com',
    phone: '',
    gender: '',
    interests: 'Backpacking, Mountains',
    bio: 'Passionate traveler exploring the world one city at a time. Love discovering hidden gems and local cuisines.'
  });

  // Fetch trips from backend
  useEffect(() => {
    fetch('http://127.0.0.1:5000/trips')
      .then(res => res.json())
      .then(data => {
        const withImages = data.map(trip => ({
          ...trip,
          id: trip.tripId,
          img: trip.img || `https://source.unsplash.com/800x600/?${encodeURIComponent(trip.place || trip.name)},travel`
        }));
        setPreplannedTrips(withImages.filter(t => !t.isPrevious));
        setPreviousTrips(withImages.filter(t => t.isPrevious));
      })
      .catch(err => console.error('Failed to fetch trips:', err));
  }, []);


  const handleTripClick = (trip) => {
    setSelectedTrip(trip);
    setIsDetailModalOpen(true);
  };

  const handleSave = (newData) => {
    setUserData(newData);
    setIsModalOpen(false);
  };

  return (
    <div className="signup-container" style={{ alignItems: 'flex-start', padding: '40px 20px' }}>
      {/* Background Animated Blobs */}
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>

      <div className="signup-card" style={{ maxWidth: '900px', width: '95%', textAlign: 'left' }}>
        
        {/* Navbar Component */}
        <Navbar />

        {/* --- Header Section: User Info --- */}
        <div style={headerContainerStyle}>
          {/* User Image Circle */}
          <div style={userImageCircleStyle}>
            <img 
              src="/avatar.png" 
              alt="User Profile" 
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
            />
          </div>

          {/* User Details Box */}
          <div style={detailsBoxStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h2 style={{ margin: '0 0 5px 0', fontSize: '1.8rem', color: 'var(--text-main)' }}>{userData.name}</h2>
                <p style={{ color: 'var(--primary)', fontWeight: '500', marginBottom: '15px' }}>{userData.email}</p>
                
                <div style={infoGridStyle}>
                  {userData.phone && <p style={infoItemStyle}><span>📞</span> {userData.phone}</p>}
                  {userData.gender && <p style={infoItemStyle}><span>👤</span> {userData.gender}</p>}
                </div>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginTop: '10px' }}>
                  {userData.bio}
                </p>
                
                <div style={{ marginTop: '15px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Interests</span>
                  <p style={{ margin: '5px 0 0 0', color: 'var(--text-main)', fontSize: '0.9rem' }}>{userData.interests}</p>
                </div>
              </div>
              <button 
                className="input-field" 
                style={editButtonStyle}
                onClick={() => setIsModalOpen(true)}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* --- Preplanned Trips Section --- */}
        <section style={{ marginBottom: '40px' }}>
          <div style={sectionHeaderStyle}>
            <span style={{ paddingRight: '15px', whiteSpace: 'nowrap' }}>Preplanned Trips</span>
            <div style={lineStyle}></div>
          </div>
          <div style={tripGridStyle}>
            {preplannedTrips.map((trip, i) => (
              <div key={i} style={{ ...tripCardStyle, backgroundImage: `url(${trip.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div style={tripCardOverlayStyle}>
                  <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{trip.name}</h3>
                  <button 
                    className="input-field" 
                    style={viewButtonStyle}
                    onClick={() => handleTripClick(trip)}
                  >
                    View Trip
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Previous Trips Section --- */}
        <section style={{ marginBottom: '20px' }}>
          <div style={sectionHeaderStyle}>
            <span style={{ paddingRight: '15px', whiteSpace: 'nowrap' }}>Previous Trips</span>
            <div style={lineStyle}></div>
          </div>
          <div style={tripGridStyle}>
            {previousTrips.map((trip, i) => (
              <div key={i} style={{ ...tripCardStyle, backgroundImage: `url(${trip.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div style={tripCardOverlayStyle}>
                  <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{trip.name}</h3>
                  <button 
                    className="input-field" 
                    style={viewButtonStyle}
                    onClick={() => handleTripClick(trip)}
                  >
                    View Memory
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <EditProfileModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        userData={userData}
        onSave={handleSave}
      />

      <TripDetailModal 
        isOpen={isDetailModalOpen} 
        onClose={() => setIsDetailModalOpen(false)} 
        trip={selectedTrip}
      />

      <style>{`
        .input-field {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .input-field:hover {
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

// Styles
const modalOverlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  background: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(8px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  padding: '20px'
};

const modalContentStyle = {
  maxWidth: '500px',
  width: '100%',
  animation: 'modalFadeIn 0.4s ease-out'
};

const closeButtonStyle = {
  background: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '1.2rem',
  cursor: 'pointer',
  opacity: 0.7
};

const headerContainerStyle = {
  display: 'flex',
  gap: '30px',
  alignItems: 'stretch',
  marginBottom: '50px',
  marginTop: '20px',
  flexWrap: 'wrap'
};

const userImageCircleStyle = {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  border: '3px solid var(--primary)',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.2)',
  flexShrink: 0
};

const detailsBoxStyle = {
  flex: 1,
  minWidth: '300px',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid var(--glass-border)',
  borderRadius: '24px',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backdropFilter: 'blur(10px)'
};

const infoGridStyle = {
  display: 'flex',
  gap: '20px',
  marginBottom: '10px'
};

const infoItemStyle = {
  margin: 0,
  fontSize: '0.9rem',
  color: 'var(--text-muted)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

const editButtonStyle = {
  padding: '10px 20px',
  fontSize: '0.9rem',
  fontWeight: '600',
  borderRadius: '12px',
  cursor: 'pointer',
  background: 'rgba(255, 255, 255, 0.05)',
  color: 'white',
  border: '1px solid var(--glass-border)'
};

const sectionHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '25px',
  color: 'var(--text-main)',
  fontSize: '1.2rem',
  fontWeight: '600'
};

const lineStyle = {
  height: '1px',
  flex: 1,
  background: 'linear-gradient(to right, var(--glass-border), transparent)'
};

const tripGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
  gap: '25px'
};

const tripCardStyle = {
  height: '320px',
  borderRadius: '24px',
  overflow: 'hidden',
  position: 'relative',
  border: '1px solid var(--glass-border)',
  transition: 'all 0.3s ease'
};

const tripCardOverlayStyle = {
  position: 'absolute',
  top: 0, left: 0, right: 0, bottom: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '20px',
  color: 'white'
};

const viewButtonStyle = {
  marginTop: '12px',
  width: '100%',
  padding: '10px',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  color: 'white',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  cursor: 'pointer'
};

export default UserProfilePage;