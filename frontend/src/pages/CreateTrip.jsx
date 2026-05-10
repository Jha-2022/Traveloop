import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';

const CreateTripScreen = () => {
  const navigate = useNavigate();
  const [tripData, setTripData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    place: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData(prev => ({ ...prev, [name]: value }));
  };

  // Auto-calculate trip duration
  const getDuration = () => {
    if (tripData.startDate && tripData.endDate) {
      const start = new Date(tripData.startDate);
      const end = new Date(tripData.endDate);
      const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      if (diff > 0) return `${diff} Days`;
    }
    return '';
  };

  // Auto-generate a tripId from place and date
  const generateTripId = () => {
    const placePart = tripData.place.toLowerCase().split(',')[0].replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const year = tripData.startDate ? new Date(tripData.startDate).getFullYear() : 'new';
    return `${placePart}-${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const duration = getDuration();
    if (!duration) {
      alert('End date must be after start date.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/trips', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tripId: generateTripId(),
          userId: 1,
          name: tripData.name,
          startDate: tripData.startDate,
          place: tripData.place,
          endDate: tripData.endDate,
          duration: duration,
          description: tripData.description || `An exciting trip to ${tripData.place}.`,
          highlights: JSON.stringify([]),
          img: `https://source.unsplash.com/800x600/?${encodeURIComponent(tripData.place)},travel`,
          isPrevious: 0
        })
      });

      const data = await response.json();
      if (response.ok) {
        alert('Trip saved successfully!');
        navigate('/profile');
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert('Failed to connect to backend.');
    }
  };

  const suggestions = [
    { name: 'Mountain Hiking', img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=400&q=80' },
    { name: 'Beach Sunset', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' },
    { name: 'City Architecture', img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=400&q=80' },
    { name: 'Art Museum', img: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=400&q=80' },
    { name: 'Scuba Diving', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80' },
    { name: 'Street Food', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <div className="signup-container" style={{ alignItems: 'flex-start', padding: '40px 20px' }}>
      {/* Background Animated Blobs */}
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>

      <div className="signup-card" style={{ maxWidth: '800px', width: '95%', textAlign: 'left' }}>
        
        {/* Navbar */}
        <Navbar />

        {/* Plan a New Trip Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={sectionTitleStyle}>Plan a new trip</h2>
          <form onSubmit={handleSubmit} style={formContainerStyle}>
            <div style={inputRowStyle}>
              <label style={labelStyle}>Trip Name:</label>
              <input 
                type="text" 
                name="name"
                className="input-field" 
                placeholder="e.g. Dubai Getaway" 
                style={inlineInputStyle} 
                onChange={handleChange}
                required
              />
            </div>
            <div style={inputRowStyle}>
              <label style={labelStyle}>Start Date:</label>
              <input 
                type="date" 
                name="startDate"
                className="input-field" 
                style={inlineInputStyle} 
                onChange={handleChange}
                required
              />
            </div>
            <div style={inputRowStyle}>
              <label style={labelStyle}>Select a Place:</label>
              <input 
                type="text" 
                name="place"
                className="input-field" 
                placeholder="Search destination..." 
                style={inlineInputStyle} 
                onChange={handleChange}
                required
              />
            </div>
            <div style={inputRowStyle}>
              <label style={labelStyle}>End Date:</label>
              <input 
                type="date" 
                name="endDate"
                className="input-field" 
                style={inlineInputStyle} 
                onChange={handleChange}
                required
              />
            </div>
            <div style={inputRowStyle}>
              <label style={labelStyle}>Description:</label>
              <textarea 
                name="description"
                className="input-field" 
                placeholder="Describe your trip plans..." 
                style={{ ...inlineInputStyle, minHeight: '70px', resize: 'vertical' }} 
                onChange={handleChange}
              />
            </div>

            {/* Duration preview */}
            {getDuration() && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0' }}>
                <span style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>⏱️ Duration:</span>
                <span style={{ color: 'var(--text-main)', fontWeight: '500' }}>{getDuration()}</span>
              </div>
            )}
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
              <button type="submit" className="submit-btn" style={{ width: 'auto', padding: '12px 40px' }}>
                Save Trip
              </button>
            </div>
          </form>
        </section>


        {/* Suggestions Section */}
        <section>
          <div style={sectionHeaderStyle}>
            <span style={{ paddingRight: '15px', whiteSpace: 'nowrap' }}>
              Suggestions for Places to Visit / Activities
            </span>
            <div style={lineStyle}></div>
          </div>

          <div style={suggestionGridStyle}>
            {suggestions.map((item, i) => (
              <div key={i} className="input-field suggestion-card" style={{ ...suggestionCardStyle, backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div style={suggestionOverlayStyle}>
                  <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className='othersuggestion'>
          
        </section>
      </div>

      <style>{`
        .input-field {
            transition: all 0.3s ease;
        }
        .input-field:hover {
            border-color: var(--primary);
            background: rgba(255, 255, 255, 0.08);
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(1);
            cursor: pointer;
        }
      `}</style>
    </div>
  );
};

// Styles to maintain consistency
const sectionTitleStyle = {
  fontSize: '1.4rem',
  color: 'var(--text-main)',
  marginBottom: '25px',
  fontWeight: '400'
};

const formContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  maxWidth: '500px'
};

const inputRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px'
};

const labelStyle = {
  flex: '0 0 120px',
  color: 'var(--text-muted)',
  fontSize: '0.95rem'
};

const inlineInputStyle = {
  flex: 1,
  padding: '10px 16px'
};

const sectionHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '25px',
  color: 'var(--text-muted)',
  fontSize: '1rem'
};

const lineStyle = {
  height: '1px',
  flex: 1,
  background: 'linear-gradient(to right, var(--glass-border), transparent)'
};

const suggestionGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '20px'
};

const suggestionCardStyle = {
  height: '240px',
  borderRadius: '16px',
  padding: '0',
  overflow: 'hidden',
  cursor: 'pointer'
};

const suggestionOverlayStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '15px',
  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
  color: 'white',
  textAlign: 'center'
};

export default CreateTripScreen;