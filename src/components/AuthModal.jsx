import React, { useState } from 'react';
import { X, Lock, Mail, User, Phone, Sparkles, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AuthModal = ({ isOpen, onClose }) => {
  const { login, register } = useAuth();
  const [tab, setTab] = useState('login'); // 'login' or 'register'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone: '',
    referral_code: ''
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      if (tab === 'login') {
        await login(formData.email, formData.password);
        onClose();
      } else {
        if (formData.password !== formData.password_confirmation) {
          setError('Passwords do not match.');
          setSubmitting(false);
          return;
        }
        await register(formData);
        onClose();
      }
    } catch (err) {
      setError(err.message || 'Authentication failed. Please check credentials.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container auth-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="auth-header">
          <div className="auth-logo-badge">
            <Sparkles size={24} className="text-orange" />
          </div>
          <h2>{tab === 'login' ? 'Welcome Back to KharchDaan' : 'Join KharchDaan Rewards'}</h2>
          <p>
            {tab === 'login' 
              ? 'Sign in to access your wallet, cashback, and order status.' 
              : 'Register to start earning cashback and building your affiliate income.'}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="auth-tabs">
          <button
            type="button"
            className={`auth-tab-btn ${tab === 'login' ? 'active' : ''}`}
            onClick={() => { setTab('login'); setError(''); }}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`auth-tab-btn ${tab === 'register' ? 'active' : ''}`}
            onClick={() => { setTab('register'); setError(''); }}
          >
            Create Account
          </button>
        </div>

        {error && (
          <div className="auth-error-banner">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          {tab === 'register' && (
            <div className="form-group">
              <label htmlFor="auth-name">Full Name</label>
              <div className="input-icon-wrap">
                <User size={18} className="input-icon" />
                <input
                  id="auth-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Madhav Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="auth-email">Email Address</label>
            <div className="input-icon-wrap">
              <Mail size={18} className="input-icon" />
              <input
                id="auth-email"
                type="email"
                name="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
          </div>

          {tab === 'register' && (
            <div className="form-group">
              <label htmlFor="auth-phone">Mobile Number (Optional)</label>
              <div className="input-icon-wrap">
                <Phone size={18} className="input-icon" />
                <input
                  id="auth-phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="auth-password">Password</label>
            <div className="input-icon-wrap">
              <Lock size={18} className="input-icon" />
              <input
                id="auth-password"
                type="password"
                name="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                autoComplete={tab === 'login' ? 'current-password' : 'new-password'}
              />
            </div>
          </div>

          {tab === 'register' && (
            <div className="form-group">
              <label htmlFor="auth-password-confirm">Confirm Password</label>
              <div className="input-icon-wrap">
                <Lock size={18} className="input-icon" />
                <input
                  id="auth-password-confirm"
                  type="password"
                  name="password_confirmation"
                  required
                  placeholder="••••••••"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </div>
            </div>
          )}

          <button type="submit" className="btn-auth-submit" disabled={submitting}>
            <span>{submitting ? 'Authenticating...' : tab === 'login' ? 'Sign In to Account' : 'Create Member Account'}</span>
            <ArrowRight size={17} />
          </button>
        </form>

        <div className="auth-footer-note">
          {tab === 'login' ? (
            <p>Don't have an account? <span className="link-action" onClick={() => setTab('register')}>Register now</span></p>
          ) : (
            <p>Already have an account? <span className="link-action" onClick={() => setTab('login')}>Log in</span></p>
          )}
        </div>

        <div className="auth-trust-badge">
          <ShieldCheck size={13} className="text-emerald" />
          <span>Encrypted 256-Bit SSL Authentication</span>
        </div>
      </div>
    </div>
  );
};
