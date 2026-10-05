import React, { useState, useEffect } from 'react';
import { X, Wallet, Share2, Package, LogOut, Check, Sparkles, Award, Copy, ShoppingBag, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

export const AccountModal = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const [orders, setOrders] = useState([]);
  const [copied, setCopied] = useState(false);
  const [loadingOrders, setLoadingOrders] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoadingOrders(true);
      api.getOrders()
        .then((res) => {
          if (res?.data) {
            setOrders(Array.isArray(res.data) ? res.data : []);
          }
        })
        .catch(() => setOrders([]))
        .finally(() => setLoadingOrders(false));
    }
  }, [isOpen]);

  if (!isOpen || !user) return null;

  const referralCode = `BG-${user.id || '88'}${user.name ? user.name.replace(/[^a-zA-Z]/g, '').substring(0, 3).toUpperCase() : 'VIP'}`;
  const referralLink = `${window.location.origin}?ref=${referralCode}`;

  const copyReferral = () => {
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

        {/* Member Profile Header Card */}
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
            <p className="account-email">{user.email}</p>
            {user.phone && <p className="account-phone">{user.phone}</p>}
          </div>
        </div>

        {/* Cashback & Commission Stats Row */}
        <div className="account-wallet-grid">
          <div className="wallet-card wallet-card-cashback">
            <div className="wallet-card-header">
              <div className="wallet-icon-wrap emerald-icon">
                <Wallet size={17} />
              </div>
              <span className="wallet-title">Cashback Wallet</span>
            </div>
            <div className="wallet-balance">
              ₹{Number(user.wallet_balance !== undefined ? user.wallet_balance : 750).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </div>
            <div className="wallet-subtext">Ready for checkout discount & instant deduction</div>
          </div>

          <div className="wallet-card wallet-card-network">
            <div className="wallet-card-header">
              <div className="wallet-icon-wrap gold-icon">
                <Sparkles size={17} />
              </div>
              <span className="wallet-title">Network Commission</span>
            </div>
            <div className="wallet-balance">
              ₹{Number(user.cashback_earned !== undefined ? user.cashback_earned : 1420).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </div>
            <div className="wallet-subtext">Earned from 8 active direct referrals</div>
          </div>
        </div>

        {/* Affiliate & Referral Invite Box */}
        <div className="referral-box">
          <div className="referral-header">
            <div className="referral-icon-badge">
              <Share2 size={16} />
            </div>
            <div className="referral-text-content">
              <h4>Your Affiliate & Network Invite Link</h4>
              <p>Earn up to 5% instant commission on direct purchases made by everyone you invite.</p>
            </div>
          </div>
          
          <div className="referral-input-group">
            <div className="referral-url-field">
              <span className="ref-prefix">Code: <strong>{referralCode}</strong></span>
              <input type="text" readOnly value={referralLink} title={referralLink} />
            </div>
            <button 
              type="button" 
              className={`btn-copy-ref ${copied ? 'copied' : ''}`} 
              onClick={copyReferral}
              aria-label="Copy invitation link"
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

        {/* Recent Orders Section */}
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
                <p>Start shopping our daily essentials to earn instant cashback and build your purchase history!</p>
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

        {/* Modal Footer */}
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
