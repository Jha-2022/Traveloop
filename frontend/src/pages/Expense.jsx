import React from 'react';
import Navbar from '../components/navbar';
import { useNavigate, useParams } from 'react-router-dom';

const ExpenseInvoiceScreen = () => {
  const navigate = useNavigate();
  const { tripId } = useParams();

  const invoiceItems = [
    { id: 1, category: 'hotel', description: 'hotel booking paris', qty: '3 nights', unitCost: '3000', amount: '9000' },
    { id: 2, category: 'travel', description: 'flight bookings (DEL -> PAR)', qty: '1', unitCost: '12000', amount: '12000' },
  ];

  return (
    <div className="signup-container" style={{ alignItems: 'flex-start', padding: '40px 20px' }}>
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>

      <div className="signup-card" style={{ maxWidth: '1100px', width: '98%', textAlign: 'left' }}>
        <Navbar />

        {/* Top Navigation & Search */}
        <div style={topBarStyle}>
          <button style={backBtnStyle} onClick={() => navigate('/profile')}>← back to My Trips</button>
          <div style={searchGroupStyle}>
            <input type="text" className="input-field" placeholder="Search invoices...." style={topSearchInput} />
            <button className="input-field" style={topActionBtn}>Filter</button>
            <button className="input-field" style={topActionBtn}>Sort</button>
          </div>
        </div>

        <div style={mainGridStyle}>
          {/* LEFT COLUMN: Invoice Details */}
          <div style={{ flex: 3 }}>
            {/* Invoice Header Card */}
            <div style={invoiceHeaderCard}>
              <div style={tripInfoSection}>
                <div style={tripIconBox}>🏠</div>
                <div style={{ marginLeft: '15px' }}>
                  <h3 style={tripTitle}>Trip to Europe Adventure</h3>
                  <p style={subText}>May 10 - Jun 10, 2025 • 4 cities</p>
                  <p style={subText}>Created by: James</p>
                </div>
              </div>
              <div style={metaDataSection}>
                <div style={metaCol}>
                  <p style={metaLabel}>Invoice Id</p>
                  <p style={metaValue}>TRV-exp-32210</p>
                  <p style={{ ...metaLabel, marginTop: '10px' }}>Traveler Details</p>
                  <p style={metaValue}>James, Anjali, Jerry, Christina</p>
                </div>
                <div style={metaCol}>
                  <p style={metaLabel}>Generated date</p>
                  <p style={metaValue}>May 20, 2025</p>
                  <p style={{ ...metaLabel, marginTop: '10px' }}>Payment status</p>
                  <p style={{ ...metaValue, color: '#facc15' }}>pending</p>
                </div>
              </div>
            </div>

            {/* Billing Table */}
            <div style={tableWrapper}>
              <table style={tableStyle}>
                <thead>
                  <tr style={tableHeaderRow}>
                    <th style={thStyle}>#</th>
                    <th style={thStyle}>Category</th>
                    <th style={thStyle}>Description</th>
                    <th style={thStyle}>Qty/details</th>
                    <th style={thStyle}>Unit Cost</th>
                    <th style={thStyle}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceItems.map((item) => (
                    <tr key={item.id} style={tableRow}>
                      <td style={tdStyle}>{item.id}</td>
                      <td style={tdStyle}>{item.category}</td>
                      <td style={tdStyle}>{item.description}</td>
                      <td style={tdStyle}>{item.qty}</td>
                      <td style={tdStyle}>{item.unitCost}</td>
                      <td style={tdStyle}>{item.amount}</td>
                    </tr>
                  ))}
                  {/* Empty spacer rows as per mockup */}
                  {[1, 2, 3].map((i) => (
                    <tr key={`space-${i}`} style={tableRow}><td colSpan="6" style={{ height: '40px' }}></td></tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr style={totalRow}>
                    <td colSpan="4"></td>
                    <td style={totalLabelCell}>Subtotal<br/>tax(5%)<br/>Discount</td>
                    <td style={totalValueCell}>$ 21000<br/>$ 1050<br/>$ 50</td>
                  </tr>
                  <tr style={grandTotalRow}>
                    <td colSpan="4"></td>
                    <td style={grandTotalLabel}>Grand Total</td>
                    <td style={grandTotalValue}>$ 22000</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* RIGHT COLUMN: Insights */}
          <div style={{ flex: 1, minWidth: '250px' }}>
            <div style={insightsCard}>
              <h4 style={insightsTitle}>Budget Insights</h4>
              <div style={chartContainer}>
                <div style={pieChartPlaceholder}>
                  <div style={pieSegment}></div>
                </div>
                <div style={chartLegend}>
                  <p style={legendItem}>Total Budget: 20000</p>
                  <p style={legendItem}>Total spent: 22000</p>
                  <p style={{ ...legendItem, color: '#ff4d4d' }}>Remaining: -2000</p>
                </div>
              </div>
              <button className="input-field" style={viewBudgetBtn}>View Full Budget</button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div style={footerActions}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button className="input-field" style={footerBtn}>Download Invoice</button>
            <button className="input-field" style={footerBtn}>Export as PDF</button>
          </div>
          <button className="submit-btn" style={{ ...footerBtn, width: '200px' }}>Mark as paid</button>
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
const topBarStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' };
const backBtnStyle = { background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.9rem' };
const searchGroupStyle = { display: 'flex', gap: '10px', flex: 1, justifyContent: 'flex-end' };
const topSearchInput = { width: '300px', padding: '8px 15px', borderRadius: '20px' };
const topActionBtn = { padding: '8px 20px', borderRadius: '20px', cursor: 'pointer' };

const mainGridStyle = { display: 'flex', gap: '30px', flexWrap: 'wrap' };

const invoiceHeaderCard = {
  background: 'rgba(255,255,255,0.02)',
  border: '1px solid var(--glass-border)',
  borderRadius: '20px',
  padding: '25px',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '30px',
  flexWrap: 'wrap',
  gap: '20px'
};

const tripInfoSection = { display: 'flex', alignItems: 'center', flex: 1 };
const tripIconBox = { width: '80px', height: '80px', border: '1px solid var(--glass-border)', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem' };
const tripTitle = { margin: '0 0 5px 0', fontSize: '1.2rem', color: 'white' };
const subText = { margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' };

const metaDataSection = { display: 'flex', gap: '40px', flex: 1, justifyContent: 'flex-end' };
const metaCol = { display: 'flex', flexDirection: 'column', gap: '2px' };
const metaLabel = { margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' };
const metaValue = { margin: '0 0 10px 0', fontSize: '0.9rem', color: 'white' };

const tableWrapper = { background: 'rgba(255,255,255,0.01)', border: '1px solid var(--glass-border)', borderRadius: '20px', overflow: 'hidden' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', color: 'white' };
const tableHeaderRow = {};
const thStyle = { padding: '15px', textAlign: 'left', borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '500' };
const tdStyle = { padding: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.9rem' };
const tableRow = { transition: 'background 0.2s' };
const totalRow = {};
const totalLabelCell = { textAlign: 'right', padding: '20px', color: 'var(--text-muted)', lineHeight: '1.8' };
const totalValueCell = { textAlign: 'right', padding: '20px', fontWeight: 'bold', lineHeight: '1.8' };
const grandTotalRow = { background: 'rgba(99, 102, 241, 0.05)' };
const grandTotalLabel = { textAlign: 'right', padding: '20px', fontSize: '1.1rem', fontWeight: 'bold' };
const grandTotalValue = { textAlign: 'right', padding: '20px', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' };

const insightsCard = { background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '20px' };
const insightsTitle = { margin: '0 0 20px 0', fontSize: '0.9rem', color: 'var(--text-muted)' };
const chartContainer = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '20px' };
const pieChartPlaceholder = { width: '120px', height: '120px', borderRadius: '50%', border: '2px solid var(--glass-border)', position: 'relative', background: 'rgba(255,255,255,0.05)' };
const pieSegment = { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', border: '2px solid var(--primary)', clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 70%)' };
const chartLegend = { textAlign: 'left', width: '100%' };
const legendItem = { margin: '5px 0', fontSize: '0.85rem' };
const viewBudgetBtn = { width: '100%', padding: '10px', borderRadius: '10px', fontSize: '0.8rem', cursor: 'pointer' };

const footerActions = { display: 'flex', justifyContent: 'space-between', marginTop: '40px', borderTop: '1px solid var(--glass-border)', paddingTop: '30px', flexWrap: 'wrap', gap: '20px' };
const footerBtn = { padding: '12px 25px', borderRadius: '12px', cursor: 'pointer', fontSize: '0.9rem' };

export default ExpenseInvoiceScreen;
