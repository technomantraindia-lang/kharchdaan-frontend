import React, { useEffect, useState } from 'react';
import { ShieldCheck, Loader2, AlertCircle, LogIn } from 'lucide-react';
import { api, getStoredAuthToken } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { TERMS_SECTIONS } from '../data/termsContent';

export const TermsGateModal = ({ isOpen, onAccepted, onReauth }) => {
  const { refreshUser, logout } = useAuth();
  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [checkingSession, setCheckingSession] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;
    const validateSession = async () => {
      setCheckingSession(true);
      setError('');
      setSessionExpired(false);

      const token = getStoredAuthToken();
      if (!token) {
        if (!cancelled) {
          setSessionExpired(true);
          setError('Your session expired. Please log in again to accept Terms.');
          setCheckingSession(false);
        }
        return;
      }

      try {
        const res = await api.getMe();
        if (cancelled) return;
        if (res?.data?.terms_accepted || res?.data?.terms_accepted_at || res?.terms_required === false) {
          onAccepted?.();
          return;
        }
      } catch (err) {
        if (cancelled) return;
        const msg = String(err.message || '');
        if (
          msg.includes('401')
          || msg.toLowerCase().includes('unauthenticated')
          || msg.toLowerCase().includes('invalid or expired')
          || msg.toLowerCase().includes('session expired')
        ) {
          setSessionExpired(true);
          setError('Your session expired. Please log in again to accept Terms.');
        }
      } finally {
        if (!cancelled) setCheckingSession(false);
      }
    };

    validateSession();
    return () => {
      cancelled = true;
    };
  }, [isOpen, onAccepted]);

  if (!isOpen) return null;

  const handleReauth = async () => {
    try {
      if (typeof logout === 'function') await logout();
    } catch {
      /* ignore */
    }
    onReauth?.();
  };

  const handleAccept = async (e) => {
    e.preventDefault();
    if (sessionExpired) {
      await handleReauth();
      return;
    }
    if (!accepted) {
      setError('Please tick the box to accept the Terms & Conditions.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const result = await api.acceptTerms();
      if (result?.data) {
        // Prefer server payload so terms_accepted sticks immediately
        try {
          localStorage.setItem('kharchdaan_user', JSON.stringify(result.data));
        } catch {
          /* ignore */
        }
      }
      if (typeof refreshUser === 'function') {
        try {
          await refreshUser();
        } catch {
          /* already accepted on server */
        }
      }
      onAccepted?.();
    } catch (err) {
      if (err?.code === 'SESSION_EXPIRED' || err?.status === 401) {
        setSessionExpired(true);
        setError('Your session expired. Please log in again to accept Terms.');
      } else {
        setError(err.message || 'Unable to save acceptance. Please try again.');
      }
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
          {!sessionExpired && (
            <label className="terms-gate-check">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                disabled={checkingSession || submitting}
              />
              <span>I have read and accept the Terms &amp; Conditions.</span>
            </label>
          )}

          {sessionExpired ? (
            <button type="button" className="btn-primary glossy-orange-btn" onClick={handleReauth}>
              <LogIn size={18} />
              Log in again
            </button>
          ) : (
            <button
              type="submit"
              className="btn-primary glossy-orange-btn"
              disabled={submitting || checkingSession}
            >
              {submitting || checkingSession ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                'Accept & Continue'
              )}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
