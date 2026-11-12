import React, { useState, useEffect } from 'react';
import { X, Share2, Package, LogOut, Check, Award, Copy, ShoppingBag, ShieldCheck, ArrowRight, Users, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

export const AccountModal = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const [orders, setOrders] = useState([]);
  const [referrals, setReferrals] = useState([]);
  const [referralCount, setReferralCount] = useState(Number(user?.direct_referral_count || 0));
  const [copied, setCopied] = useState(false);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [loadingReferrals, setLoadingReferrals] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setLoadingOrders(true);
    api.getOrders()
      .then((res) => {
        if (res?.data) {
          setOrders(Array.isArray(res.data) ? res.data : []);
        }
      })
      .catch(() => setOrders([]))
      .finally(() => setLoadingOrders(false));

    setLoadingReferrals(true);
    api.getMyReferrals()
      .then((res) => {
        const list = Array.isArray(res?.data?.referrals) ? res.data.referrals : [];
        setReferrals(list);
        setReferralCount(Number(res?.data?.direct_referral_count ?? list.length ?? 0));
      })
      .catch(() => {
        setReferrals([]);
        setReferralCount(Number(user?.direct_referral_count || 0));
      })
      .finally(() => setLoadingReferrals(false));
  }, [isOpen, user?.direct_referral_count]);

  if (!isOpen || !user) return null;

  const referralCode = user.mlm_member_id || user.customer_id || null;
  const referralLink = referralCode
    ? `${window.location.origin}?ref=${encodeURIComponent(referralCode)}`
    : `${window.location.origin}`;
  const sponsorLabel = user.sponsor
    ? `${user.sponsor.name || 'Sponsor'} (${user.sponsor.customer_id || '—'})`
    : 'Company / Default Root';

  const copyReferral = () => {
    if (!referralCode) return;
    try {
      navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (e) {
      console.warn('Copy failed:', e);
    }
  };

  const handleStartShopping = () => {
    onClose();
    const catalogEl = document.getElementById('products-section') || document.querySelector('.products-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container account-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="account-header-card">
          <div className="account-avatar-large">
            {user.name ? user.name.trim()[0].toUpperCase() : 'U'}
          </div>
          <div className="account-title-info">
            <div className="member-name-row">
              <h3>{user.name || 'Valued Member'}</h3>
              <span className="member-badge-gold">
                <Award size={13} /> VIP Level 1
              </span>
            </div>
            {referralCode && <p className="account-email" style={{ fontWeight: 700 }}>Member ID: {referralCode}</p>}
            <p className="account-email">{user.email}</p>
            {user.phone && <p className="account-phone">{user.phone}</p>}
            <p className="account-phone">Sponsor: {sponsorLabel}</p>
          </div>
        </div>

        <div className="account-wallet-grid">
          <div className="wallet-card wallet-card-cashback">
            <div className="wallet-card-header">
              <div className="wallet-icon-wrap emerald-icon">
                <Users size={17} />
              </div>
              <span className="wallet-title">Direct Referrals</span>
            </div>
            <div className="wallet-balance">{referralCount}</div>
            <div className="wallet-subtext">Users registered under your Member ID</div>
          </div>

          <div className="wallet-card wallet-card-network">
            <div className="wallet-card-header">
              <div className="wallet-icon-wrap gold-icon">
                <Share2 size={17} />
              </div>
              <span className="wallet-title">Your Sponsor</span>
            </div>
            <div className="wallet-balance" style={{ fontSize: '1rem', lineHeight: 1.35 }}>
              {user.sponsor?.customer_id || 'ROOT'}
            </div>
            <div className="wallet-subtext">{user.sponsor?.name || 'Company root assignment'}</div>
          </div>
        </div>

        <div className="referral-box">
          <div className="referral-header">
            <div className="referral-icon-badge">
              <Share2 size={16} />
            </div>
            <div className="referral-text-content">
              <h4>Your Affiliate & Network Invite Link</h4>
              <p>Share this link so new registrations are saved under your Member ID.</p>
            </div>
          </div>

          <div className="referral-input-group">
            <div className="referral-url-field">
              <span className="ref-prefix">
                Code: <strong>{referralCode || 'Pending MLM ID'}</strong>
              </span>
              <input type="text" readOnly value={referralLink} title={referralLink} />
            </div>
            <button
              type="button"
              className={`btn-copy-ref ${copied ? 'copied' : ''}`}
              onClick={copyReferral}
              aria-label="Copy invitation link"
              disabled={!referralCode}
            >
              {copied ? (
                <>
                  <Check size={15} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={15} />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="account-orders-section">
          <div className="orders-section-heading">
            <div className="heading-with-icon">
              <Users size={17} className="text-orange" />
              <h4>Users Registered Under You</h4>
            </div>
            {referralCount > 0 && <span className="orders-count-pill">{referralCount} members</span>}
          </div>

          {loadingReferrals ? (
            <div className="orders-loading-state">
              <Loader2 size={20} className="spin-animate" />
              <p>Loading your sponsored users...</p>
            </div>
          ) : referrals.length === 0 ? (
            <div className="no-orders-box">
              <div className="no-orders-icon-wrap">
                <Users size={26} />
              </div>
              <div className="no-orders-text">
                <h5>No Direct Referrals Yet</h5>
                <p>Share your invite link. New members who register with your ID will appear here.</p>
              </div>
            </div>
          ) : (
            <div className="orders-table-wrapper">
              <table className="orders-mini-table">
                <thead>
                  <tr>
                    <th>Member ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {referrals.map((ref) => (
                    <tr key={ref.id}>
                      <td className="order-id-cell">{ref.customer_id || '—'}</td>
                      <td>
                        <div>{ref.name || 'Unnamed'}</div>
                        {ref.phone ? <div style={{ fontSize: 11, color: '#94a3b8' }}>{ref.phone}</div> : null}
                      </td>
                      <td>
                        <span className={`order-status-pill status-${(ref.status || 'active').toLowerCase()}`}>
                          {ref.status || 'active'}
                        </span>
                      </td>
                      <td>{ref.joined_at_label || ref.joined_at || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="account-orders-section">
          <div className="orders-section-heading">
            <div className="heading-with-icon">
              <Package size={17} className="text-orange" />
              <h4>Recent Orders & Fulfillment</h4>
            </div>
            {orders.length > 0 && <span className="orders-count-pill">{orders.length} orders</span>}
          </div>

          {loadingOrders ? (
            <div className="orders-loading-state">
              <div className="orders-spinner" />
              <p>Fetching your order history...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="no-orders-box">
              <div className="no-orders-icon-wrap">
                <ShoppingBag size={26} />
              </div>
              <div className="no-orders-text">
                <h5>No Orders Placed Yet</h5>
                <p>Start shopping our daily essentials to build your purchase history.</p>
              </div>
              <button type="button" className="btn-start-shopping" onClick={handleStartShopping}>
                <span>Explore Catalog</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ) : (
            <div className="orders-table-wrapper">
              <table className="orders-mini-table">
                <thead>
                  <tr>
                    <th>Order #</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((ord) => (
                    <tr key={ord.id}>
                      <td className="order-id-cell">#{ord.order_number || ord.id}</td>
                      <td>{ord.created_at ? new Date(ord.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : 'Recent'}</td>
                      <td>
                        <span className={`order-status-pill status-${(ord.status || 'processing').toLowerCase()}`}>
                          {ord.status || 'Processing'}
                        </span>
                      </td>
                      <td className="order-total-cell">₹{Number(ord.total_amount || 0).toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="account-footer">
          <button
            type="button"
            className="btn-danger-outline"
            onClick={() => { logout(); onClose(); }}
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>

          <div className="account-footer-security">
            <ShieldCheck size={14} className="text-emerald" />
            <span>SSL Secured Session</span>
          </div>
        </div>
      </div>
    </div>
  );
};
