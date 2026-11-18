import React, { useState } from 'react';
import { ShieldCheck, Loader2, AlertCircle } from 'lucide-react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { TERMS_SECTIONS } from '../data/termsContent';

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
      <div className="terms-gate-modal" onClick={(e) => e.stopPropagation()}>
        <div className="terms-gate-header">
          <div className="auth-logo-badge">
            <ShieldCheck size={24} className="text-orange" />
          </div>
          <h2>Terms &amp; Conditions</h2>
          <p>
            First login requires your acceptance before you can continue shopping or using Direct Selling features.
          </p>
        </div>

        <div className="terms-gate-scroll" role="region" aria-label="Terms and Conditions">
          {TERMS_SECTIONS.map((section) => (
            <div key={section.id} className="terms-gate-section">
              <h3>
                <span className="terms-gate-num">{section.id}</span>
                {section.title}
              </h3>
              <p>{section.body}</p>
            </div>
          ))}
        </div>

        {error && (
          <div className="auth-error-banner" role="alert">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form className="terms-gate-footer" onSubmit={handleAccept}>
          <label className="terms-gate-check">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <span>I have read and accept the Terms &amp; Conditions.</span>
          </label>
          <button type="submit" className="btn-primary glossy-orange-btn" disabled={submitting}>
            {submitting ? <Loader2 className="animate-spin" size={18} /> : 'Accept & Continue'}
          </button>
        </form>
      </div>
    </div>
  );
};
