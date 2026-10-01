import React, { useState, useEffect } from 'react';
import { X, User, Wallet, Share2, Package, LogOut, Check, Sparkles, Award } from 'lucide-react';
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
        .finally(() => setLoadingOrders(false));
    }
  }, [isOpen]);

  if (!isOpen || !user) return null;

  const referralCode = `KD-${user.id || '99'}${user.name?.substring(0, 3).toUpperCase() || 'VIP'}`;
  const referralLink = `${window.location.origin}?ref=${referralCode}`;

  const copyReferral = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container account-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Member Header */}
        <div className="account-header-card">
          <div className="account-avatar-large">
            {user.name ? user.name[0].toUpperCase() : 'U'}
          </div>
          <div className="account-title-info">
            <div className="member-name-row">
              <h3>{user.name}</h3>
              <span className="member-badge-gold"><Award size={14} /> VIP Level 1</span>
            </div>
            <p className="account-email">{user.email}</p>
          </div>
        </div>

        {/* Stats / Wallet Row */}
        <div className="account-wallet-grid">
          <div className="wallet-card">
            <div className="wallet-card-header">
              <Wallet size={18} className="text-emerald" />
              <span>Cashback Wallet</span>
            </div>
            <div className="wallet-balance">₹750.00</div>
            <div className="wallet-subtext">Ready for withdrawal / purchase discount</div>
          </div>

          <div className="wallet-card">
            <div className="wallet-card-header">
              <Sparkles size={18} className="text-gold" />
              <span>Network Commission</span>
            </div>
            <div className="wallet-balance">₹1,420.00</div>
            <div className="wallet-subtext">Earned from 8 active direct referrals</div>
          </div>
        </div>

        {/* Referral Box */}
        <div className="referral-box">
          <div className="referral-header">
            <Share2 size={18} className="text-gold" />
            <div>
              <h4>Your Affiliate & Network Invite Link</h4>
              <p>Earn 5% on direct purchases made by everyone you invite.</p>
            </div>
          </div>
          <div className="referral-input-group">
            <input type="text" readOnly value={referralLink} />
            <button className="btn-copy-ref" onClick={copyReferral}>
              {copied ? <><Check size={16} /> Copied</> : 'Copy Link'}
            </button>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="account-orders-section">
          <h4>
            <Package size={18} /> Recent Orders & Fulfillment
          </h4>
          {loadingOrders ? (
            <p className="loading-text">Loading orders...</p>
          ) : orders.length === 0 ? (
            <div className="no-orders-box">
              <p>No past orders found in this session. Start shopping to build your purchase history!</p>
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
                      <td>#{ord.order_number || ord.id}</td>
                      <td>{ord.created_at ? new Date(ord.created_at).toLocaleDateString() : 'Recent'}</td>
                      <td><span className="order-status-pill">{ord.status || 'Processing'}</span></td>
                      <td>₹{Number(ord.total_amount || 0).toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="account-footer">
          <button className="btn-danger-outline" onClick={() => { logout(); onClose(); }}>
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};
