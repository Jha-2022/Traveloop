import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { useParams } from 'react-router-dom';

const TripNotesScreen = () => {
  const { tripId } = useParams();
  const [tripName, setTripName] = useState('Loading...');
  const notes = [1, 2, 3];

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/trips/${tripId}`)
      .then(res => res.json())
      .then(data => setTripName(data.name || 'Unknown Trip'))
      .catch(() => setTripName('Unknown Trip'));
  }, [tripId]);

  return (
    <div className="signup-container" style={{ alignItems: 'flex-start', padding: '40px 20px' }}>
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>

      <div className="signup-card" style={{ maxWidth: '900px', width: '95%', textAlign: 'left' }}>
        <Navbar />

        {/* Search & Filter Bar */}
        <div style={searchRowStyle}>
          <input type="text" className="input-field" placeholder="Search notes...." style={{ flex: 3 }} />
          <button className="input-field" style={filterBtnStyle}>Group by</button>
          <button className="input-field" style={filterBtnStyle}>Filter</button>
          <button className="input-field" style={filterBtnStyle}>Sort by...</button>
        </div>

        {/* Header Section */}
        <div style={{ marginBottom: '30px' }}>
          <h2 style={titleStyle}>Trip notes</h2>
          
          <div style={actionHeaderStyle}>
            <div className="input-field" style={tripDropdownStyle}>
              Trip: {tripName} <span style={{ marginLeft: '10px' }}>↓</span>
            </div>
            <button className="input-field" style={addNoteBtnStyle}>+ Add Note</button>
          </div>

          {/* Tab Filters */}
          <div style={tabGroupStyle}>
            <button className="input-field" style={{ ...tabStyle, background: 'var(--primary)', borderColor: 'var(--primary)' }}>All</button>
            <button className="input-field" style={tabStyle}>by Day</button>
            <button className="input-field" style={tabStyle}>by stop</button>
          </div>
        </div>

        {/* Notes List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {notes.map((note) => (
            <div key={note} style={noteCardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3 style={noteTitleStyle}>Hotel check-in details - Rome stop</h3>
                <div style={iconGroupStyle}>
                  <button style={iconBtnStyle}>✎</button>
                  <button style={iconBtnStyle}>🗑</button>
                </div>
              </div>
              <p style={noteContentStyle}>check in after 2pm, room 302, breakfast included (7-10am)</p>
              <p style={noteDateStyle}>Day 3: June 14 2025</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .input-field { transition: all 0.3s ease; }
        .input-field:hover { border-color: var(--primary); background: rgba(255, 255, 255, 0.08); }
      `}</style>
    </div>
  );
};

// Styles
const searchRowStyle = { display: 'flex', gap: '12px', marginBottom: '40px', marginTop: '20px', flexWrap: 'wrap' };
const filterBtnStyle = { flex: '0 1 auto', padding: '10px 15px', cursor: 'pointer', fontSize: '0.85rem', background: 'rgba(255, 255, 255, 0.03)' };

const titleStyle = { fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '20px', fontWeight: '600' };

const actionHeaderStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' };
const tripDropdownStyle = { padding: '8px 20px', borderRadius: '10px', fontSize: '0.9rem', cursor: 'pointer', border: '1px solid var(--glass-border)' };
const addNoteBtnStyle = { padding: '8px 20px', borderRadius: '10px', fontSize: '0.9rem', cursor: 'pointer', background: 'rgba(255, 255, 255, 0.05)' };

const tabGroupStyle = { display: 'flex', gap: '10px', marginBottom: '10px' };
const tabStyle = { padding: '6px 25px', borderRadius: '10px', fontSize: '0.85rem', cursor: 'pointer' };

const noteCardStyle = {
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid var(--glass-border)',
  borderRadius: '16px',
  padding: '20px',
  transition: 'transform 0.2s ease',
  cursor: 'default'
};

const noteTitleStyle = { margin: '0 0 10px 0', fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: '500' };
const noteContentStyle = { margin: '0 0 8px 0', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.4' };
const noteDateStyle = { margin: 0, color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '500' };

const iconGroupStyle = { display: 'flex', gap: '8px' };
const iconBtnStyle = { 
  background: 'rgba(255,255,255,0.05)', 
  border: '1px solid var(--glass-border)', 
  borderRadius: '6px', 
  color: 'white', 
  cursor: 'pointer', 
  padding: '4px 8px',
  fontSize: '14px'
};

export default TripNotesScreen;