import React, { useState } from 'react';
import Navbar from '../components/navbar';

const PackingChecklist = () => {
  const [items, setItems] = useState([
    { id: 1, category: 'Documents', text: 'Passport', checked: true },
    { id: 2, category: 'Documents', text: 'Flight Tickets (printed)', checked: true },
    { id: 3, category: 'Documents', text: 'Travel Insurance', checked: true },
    { id: 4, category: 'Documents', text: 'Hotel booking confirmation', checked: false },
    { id: 5, category: 'Clothing', text: 'Casual Shirts', checked: true },
    { id: 6, category: 'Clothing', text: 'Trousers / jeans', checked: false },
    { id: 7, category: 'Electronics', text: 'Phone charger', checked: true },
    { id: 8, category: 'Electronics', text: 'Universal power adapter', checked: false },
  ]);

  const toggleItem = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const categories = [...new Set(items.map(item => item.category))];
  const packedCount = items.filter(i => i.checked).length;
  const progress = (packedCount / items.length) * 100;

  return (
    <div className="signup-container" style={{ alignItems: 'flex-start', overflowY: 'auto', padding: '40px 20px' }}>
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>

      <div className="signup-card" style={{ maxWidth: '900px', width: '95%', textAlign: 'left' }}>
        <Navbar />

        {/* Search & Filter Bar */}
        <div style={searchRowStyle}>
          <input type="text" className="input-field" placeholder="Search bar ......" style={{ flex: 3 }} />
          <button className="input-field" style={filterBtnStyle}>Group by</button>
          <button className="input-field" style={filterBtnStyle}>Filter</button>
          <button className="input-field" style={filterBtnStyle}>Sort by...</button>
        </div>

        {/* Header & Progress */}
        <div style={{ marginBottom: '30px' }}>
          <h2 style={titleStyle}>Packing checklist</h2>
          <div className="input-field" style={tripDropdownStyle}>
            Trip: Paris & Rome Adventure <span style={{ marginLeft: '10px' }}>↓</span>
          </div>
          <p style={progressTextStyle}>Progress: {packedCount}/{items.length} items packed</p>
          <div style={progressBarBg}>
            <div style={{ ...progressBarFill, width: `${progress}%` }}></div>
          </div>
        </div>

        {/* Checklist Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginBottom: '40px' }}>
          {categories.map(cat => (
            <div key={cat}>
              <div style={categoryHeaderStyle}>
                <span>{cat}</span>
                <span>{items.filter(i => i.category === cat && i.checked).length}/{items.filter(i => i.category === cat).length}</span>
              </div>
              <div style={categoryLine}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>
                {items.filter(i => i.category === cat).map(item => (
                  <div key={item.id} style={itemRowStyle} onClick={() => toggleItem(item.id)}>
                    <div style={{ ...checkboxStyle, backgroundColor: item.checked ? 'var(--primary)' : 'transparent' }}>
                      {item.checked && '✓'}
                    </div>
                    <span style={{ color: item.checked ? 'var(--text-main)' : 'var(--text-muted)', textDecoration: item.checked ? 'line-through' : 'none' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={actionRowStyle}>
          <button className="input-field" style={actionBtn}>+ add item to checklist</button>
          <button className="input-field" style={actionBtn} onClick={() => setItems(items.map(i => ({...i, checked: false})))}>Reset all</button>
          <button className="submit-btn" style={{ ...actionBtn, background: 'var(--primary)', border: 'none' }}>Share Checklist</button>
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
const titleStyle = { fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '15px', fontWeight: '400' };
const tripDropdownStyle = { width: 'fit-content', padding: '8px 20px', borderRadius: '10px', fontSize: '0.9rem', marginBottom: '15px', cursor: 'pointer' };
const progressTextStyle = { color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '8px' };
const progressBarBg = { width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' };
const progressBarFill = { height: '100%', background: 'var(--primary)', transition: 'width 0.4s ease' };
const categoryHeaderStyle = { display: 'flex', justifyContent: 'space-between', color: 'var(--text-main)', fontSize: '1rem', fontWeight: '500' };
const categoryLine = { width: '100%', height: '1px', background: 'linear-gradient(to right, var(--primary), transparent)', marginTop: '5px' };
const itemRowStyle = { display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', padding: '4px 0' };
const checkboxStyle = { width: '20px', height: '20px', border: '1px solid var(--glass-border)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: 'white', transition: 'all 0.2s' };
const actionRowStyle = { display: 'flex', gap: '15px', flexWrap: 'wrap', borderTop: '1px solid var(--glass-border)', paddingTop: '30px' };
const actionBtn = { flex: 1, minWidth: '150px', padding: '12px', borderRadius: '12px', cursor: 'pointer', fontSize: '0.9rem' };

export default PackingChecklist;