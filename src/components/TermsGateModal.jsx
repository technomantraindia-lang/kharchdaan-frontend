import React, { useState } from 'react';
import { ShieldCheck, Loader2, AlertCircle } from 'lucide-react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';

export const TermsGateModal = ({ isOpen, onAccepted }) => {
  const { refreshUser } = useAuth();
  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleAccept = async (e) => {
    e.preventDefault();
    if (!accepted) {
      setError('Please tick the box to accept the Terms & Conditions.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      await api.acceptTerms();
      if (typeof refreshUser === 'function') {
        await refreshUser();
      }
      onAccepted?.();
    } catch (err) {
      setError(err.message || 'Unable to save acceptance. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop terms-gate-backdrop" style={{ zIndex: 10050 }}>
      <div className="modal-container auth-modal-container" style={{ maxWidth: 720 }} onClick={(e) => e.stopPropagation()}>
        <div className="auth-header">
          <div className="auth-logo-badge">
            <ShieldCheck size={24} className="text-orange" />
          </div>
          <h2 style={{ fontSize: '1.75rem' }}>Terms &amp; Conditions</h2>
          <p style={{ fontSize: '1.05rem' }}>
            First login requires your acceptance before you can continue shopping or using Direct Selling features.
          </p>
        </div>

        <div
          className="terms-readable-box"
          style={{
            background: 'linear-gradient(180deg, #fff7ed, #fff)',
            border: '2px solid #fdba74',
            borderRadius: 16,
            padding: '1.25rem 1.35rem',
            maxHeight: '42vh',
            overflowY: 'auto',
            fontSize: '1.12rem',
            lineHeight: 1.7,
            color: '#1f2937',
            marginBottom: '1rem',
          }}
        >
          <h3 style={{ fontSize: '1.25rem', color: '#9a3412', marginTop: 0 }}>1. Account &amp; Membership</h3>
          <p>One mobile number maps to one Customer ID. Keep your ID, mobile, and password secure.</p>
          <h3 style={{ fontSize: '1.25rem', color: '#9a3412' }}>2. Direct Selling Network</h3>
          <p>Sponsor and 1:3 placement follow KharchDaan rules. Benefits follow published Direct Selling criteria including monthly purchase gates.</p>
          <h3 style={{ fontSize: '1.25rem', color: '#9a3412' }}>3. Cashback &amp; Referral</h3>
          <p>Cashback and Referral Income are conditional (including ₹200 minimum transaction rules and company profit). Pending amounts are not guaranteed until marked paid.</p>
          <h3 style={{ fontSize: '1.25rem', color: '#9a3412' }}>4. Delivery</h3>
          <p>Orders are accepted in the Ahmedabad service area only. Status updates will appear on your order.</p>
          <h3 style={{ fontSize: '1.25rem', color: '#9a3412' }}>5. KYC &amp; Payouts</h3>
          <p>Aadhaar, PAN, and bank details with cancelled cheque may be required before payouts.</p>
        </div>

        {error && (
          <div className="auth-error-banner" role="alert">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleAccept}>
          <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '1.05rem', marginBottom: 16 }}>
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              style={{ marginTop: 4, width: 18, height: 18 }}
            />
            <span>I have read and accept the Terms &amp; Conditions.</span>
          </label>
          <button type="submit" className="btn-primary glossy-orange-btn" disabled={submitting} style={{ width: '100%' }}>
            {submitting ? <Loader2 className="animate-spin" size={18} /> : 'Accept & Continue'}
          </button>
        </form>
      </div>
    </div>
  );
};
