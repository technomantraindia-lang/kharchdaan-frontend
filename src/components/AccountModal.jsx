import React, { useState, useEffect } from 'react';
import {
  X, Share2, Package, LogOut, Check, Award, Copy, ShoppingBag, ShieldCheck,
  ArrowRight, Users, Loader2, Wallet, TrendingUp, FileText, IndianRupee
} from 'lucide-react';
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
  const [txnSummary, setTxnSummary] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loadingTxns, setLoadingTxns] = useState(false);
  const [kyc, setKyc] = useState(null);
  const [kycForm, setKycForm] = useState({
    pan_number: '',
    aadhaar_reference: '',
    bank_account_holder_name: '',
    bank_account_number: '',
    ifsc_code: '',
    bank_name: '',
    bank_branch: '',
  });
  const [chequeFile, setChequeFile] = useState(null);
  const [kycMsg, setKycMsg] = useState('');
  const [kycBusy, setKycBusy] = useState(false);
  const [cancelBusyId, setCancelBusyId] = useState(null);

  const refreshOrders = () => {
    setLoadingOrders(true);
    api.getOrders()
      .then((res) => {
        const list = Array.isArray(res?.data) ? res.data : (Array.isArray(res?.data?.data) ? res.data.data : []);
        setOrders(list);
      })
      .catch(() => setOrders([]))
      .finally(() => setLoadingOrders(false));
  };

  useEffect(() => {
    if (!isOpen) return;

    refreshOrders();

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

    setLoadingTxns(true);
    api.getTransactions()
      .then((res) => {
        setTxnSummary(res?.data?.summary || res?.summary || null);
        setTransactions(Array.isArray(res?.data?.transactions) ? res.data.transactions : (res?.transactions || []));
      })
      .catch(() => {
        setTxnSummary(null);
        setTransactions([]);
      })
      .finally(() => setLoadingTxns(false));

    api.getKyc()
      .then((res) => {
        setKyc(res?.data || null);
        if (res?.data) {
          setKycForm((prev) => ({
            ...prev,
            bank_account_holder_name: res.data.bank_account_holder_name || prev.bank_account_holder_name,
            bank_name: res.data.bank_name || prev.bank_name,
            bank_branch: res.data.bank_branch || prev.bank_branch,
            ifsc_code: res.data.ifsc_code || prev.ifsc_code,
          }));
        }
      })
      .catch(() => setKyc(null));
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
    if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCancelOrder = async (orderId) => {
    if (!window.confirm('Cancel this order? This cannot be undone from your account.')) return;
    setCancelBusyId(orderId);
    try {
      await api.cancelOrder(orderId);
      refreshOrders();
    } catch (err) {
      alert(err.message || 'Cancel failed');
    } finally {
      setCancelBusyId(null);
    }
  };

  const handleKycSubmit = async (e) => {
    e.preventDefault();
    setKycMsg('');
    setKycBusy(true);
    try {
      const fd = new FormData();
      Object.entries(kycForm).forEach(([k, v]) => fd.append(k, v));
      if (chequeFile) fd.append('cancelled_cheque', chequeFile);
      const res = await api.submitKyc(fd);
      setKyc(res.data);
      setKycMsg(res.message || 'KYC submitted for review.');
    } catch (err) {
      setKycMsg(err.message || 'KYC submit failed');
    } finally {
      setKycBusy(false);
    }
  };

  const monthBars = Array.isArray(txnSummary?.monthly_volume) ? txnSummary.monthly_volume : [];
  const maxVol = Math.max(1, ...monthBars.map((m) => Number(m.volume || 0)));
  const kycLocked = kyc?.kyc_status === 'approved';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container account-modal-container" onClick={(e) => e.stopPropagation()} style={{ maxHeight: '92vh', overflowY: 'auto' }}>
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
            {kyc?.kyc_status && (
              <p className="account-phone">KYC: <strong>{String(kyc.kyc_status).replace(/_/g, ' ')}</strong></p>
            )}
          </div>
        </div>

        <div className="account-wallet-grid">
          <div className="wallet-card wallet-card-cashback">
            <div className="wallet-card-header">
              <div className="wallet-icon-wrap emerald-icon"><Wallet size={17} /></div>
              <span className="wallet-title">Cashback</span>
            </div>
            <div className="wallet-balance">₹{Number(txnSummary?.cashback_total_rounded || 0).toLocaleString('en-IN')}</div>
            <div className="wallet-subtext">Rounded eligible (awaiting company profit)</div>
          </div>

          <button
            type="button"
            className="wallet-card"
            style={{ cursor: 'pointer', textAlign: 'left', width: '100%', border: 'none' }}
            onClick={() => document.getElementById('account-direct-referrals')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="wallet-card-header">
              <div className="wallet-icon-wrap emerald-icon"><Users size={17} /></div>
              <span className="wallet-title">Referral Income</span>
            </div>
            <div className="wallet-balance">{referralCount}</div>
            <div className="wallet-subtext">
              {txnSummary?.referral_month_eligible ? 'Month eligible (rate sheet pending)' : 'Not eligible this month (need ₹200 txn)'}
            </div>
          </button>

          <div className="wallet-card wallet-card-network">
            <div className="wallet-card-header">
              <div className="wallet-icon-wrap gold-icon"><IndianRupee size={17} /></div>
              <span className="wallet-title">Direct Selling</span>
            </div>
            <div className="wallet-balance" style={{ fontSize: '1.05rem' }}>
              ₹{Number(txnSummary?.month_purchase_total || 0).toLocaleString('en-IN')}
            </div>
            <div className="wallet-subtext">
              {txnSummary?.ds_eligible ? 'DS eligible this month' : `Need ₹${txnSummary?.ds_minimum || 1000} monthly`}
            </div>
          </div>

          <div className="wallet-card">
            <div className="wallet-card-header">
              <div className="wallet-icon-wrap gold-icon"><Share2 size={17} /></div>
              <span className="wallet-title">Your Sponsor</span>
            </div>
            <div className="wallet-balance" style={{ fontSize: '1rem', lineHeight: 1.35 }}>
              {user.sponsor?.customer_id || 'ROOT'}
            </div>
            <div className="wallet-subtext">{user.sponsor?.name || 'Company root assignment'}</div>
          </div>
        </div>

        <div className="account-orders-section">
          <div className="orders-section-heading">
            <div className="heading-with-icon">
              <TrendingUp size={17} className="text-orange" />
              <h4>Past / Current Purchase Volume</h4>
            </div>
          </div>
          {loadingTxns ? (
            <div className="orders-loading-state"><Loader2 size={20} className="spin-animate" /><p>Loading performance...</p></div>
          ) : monthBars.length === 0 ? (
            <p style={{ fontSize: 12, color: '#94a3b8' }}>No purchase history yet for graphs.</p>
          ) : (
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, minHeight: 110, padding: '8px 4px 4px' }}>
              {monthBars.map((m) => {
                const h = Math.max(8, Math.round((Number(m.volume || 0) / maxVol) * 90));
                return (
                  <div key={m.month} style={{ flex: 1, textAlign: 'center' }}>
                    <div title={`₹${m.volume}`} style={{
                      height: h, background: 'linear-gradient(180deg,#fb923c,#ea580c)',
                      borderRadius: 6, margin: '0 auto', maxWidth: 36
                    }} />
                    <div style={{ fontSize: 10, color: '#64748b', marginTop: 4 }}>{String(m.month).slice(5)}</div>
                    <div style={{ fontSize: 10, fontWeight: 700 }}>{m.count}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="referral-box">
          <div className="referral-header">
            <div className="referral-icon-badge"><Share2 size={16} /></div>
            <div className="referral-text-content">
              <h4>Your Affiliate & Network Invite Link</h4>
              <p>Share this link so new registrations are saved under your Member ID.</p>
            </div>
          </div>
          <div className="referral-input-group">
            <div className="referral-url-field">
              <span className="ref-prefix">Code: <strong>{referralCode || 'Pending MLM ID'}</strong></span>
              <input type="text" readOnly value={referralLink} title={referralLink} />
            </div>
            <button type="button" className={`btn-copy-ref ${copied ? 'copied' : ''}`} onClick={copyReferral} disabled={!referralCode}>
              {copied ? <><Check size={15} /><span>Copied!</span></> : <><Copy size={15} /><span>Copy Link</span></>}
            </button>
          </div>
        </div>

        <div className="account-orders-section" id="account-kyc">
          <div className="orders-section-heading">
            <div className="heading-with-icon">
              <FileText size={17} className="text-orange" />
              <h4>KYC (Aadhaar, PAN, Bank + Cancel Cheque)</h4>
            </div>
          </div>
          {kycMsg && <p style={{ fontSize: 12, color: kycMsg.includes('fail') ? '#b91c1c' : '#047857', marginBottom: 8 }}>{kycMsg}</p>}
          {kyc?.kyc_rejection_reason && (
            <p style={{ fontSize: 12, color: '#b91c1c' }}>Rejection: {kyc.kyc_rejection_reason}</p>
          )}
          {kycLocked ? (
            <p style={{ fontSize: 12, color: '#047857' }}>KYC approved. Contact admin to change details.</p>
          ) : (
            <form onSubmit={handleKycSubmit} style={{ display: 'grid', gap: 8 }}>
              {[
                ['pan_number', 'PAN *'],
                ['aadhaar_reference', 'Aadhaar (12 digits) *'],
                ['bank_account_holder_name', 'Account Holder *'],
                ['bank_account_number', 'Bank Account Number *'],
                ['ifsc_code', 'IFSC *'],
                ['bank_name', 'Bank Name *'],
                ['bank_branch', 'Branch'],
              ].map(([key, label]) => (
                <label key={key} style={{ fontSize: 11, fontWeight: 600, color: '#475569' }}>
                  {label}
                  <input
                    required={key !== 'bank_branch'}
                    className="co-input"
                    style={{ marginTop: 4, width: '100%' }}
                    value={kycForm[key]}
                    onChange={(e) => setKycForm((p) => ({ ...p, [key]: e.target.value }))}
                  />
                </label>
              ))}
              <label style={{ fontSize: 11, fontWeight: 600, color: '#475569' }}>
                Cancelled Cheque (optional)
                <input type="file" accept=".jpg,.jpeg,.png,.pdf,.webp" style={{ marginTop: 4, width: '100%' }}
                  onChange={(e) => setChequeFile(e.target.files?.[0] || null)} />
              </label>
              <button type="submit" className="btn-start-shopping" disabled={kycBusy} style={{ justifyContent: 'center' }}>
                {kycBusy ? 'Submitting...' : 'Submit KYC for Review'}
              </button>
            </form>
          )}
        </div>

        <div className="account-orders-section" id="account-direct-referrals">
          <div className="orders-section-heading">
            <div className="heading-with-icon">
              <Users size={17} className="text-orange" />
              <h4>Users Registered Under You</h4>
            </div>
            {referralCount > 0 && <span className="orders-count-pill">{referralCount} members</span>}
          </div>
          {loadingReferrals ? (
            <div className="orders-loading-state"><Loader2 size={20} className="spin-animate" /><p>Loading your sponsored users...</p></div>
          ) : referrals.length === 0 ? (
            <div className="no-orders-box">
              <div className="no-orders-icon-wrap"><Users size={26} /></div>
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
                    <th>Name / Contact</th>
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
                        {ref.phone ? <div style={{ fontSize: 11, color: '#94a3b8' }}>📞 {ref.phone}</div> : null}
                        {ref.email ? <div style={{ fontSize: 11, color: '#94a3b8' }}>{ref.email}</div> : null}
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
              <h4>Transactions (Cashback columns)</h4>
            </div>
          </div>
          {loadingTxns ? (
            <div className="orders-loading-state"><Loader2 size={20} className="spin-animate" /><p>Loading transactions...</p></div>
          ) : transactions.length === 0 ? (
            <p style={{ fontSize: 12, color: '#94a3b8' }}>No transactions yet.</p>
          ) : (
            <div className="orders-table-wrapper">
              <table className="orders-mini-table">
                <thead>
                  <tr>
                    <th>Txn</th>
                    <th>Amount</th>
                    <th>Customer CB</th>
                    <th>Sponsor CB</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.slice(0, 12).map((row) => (
                    <tr key={row.order_id} style={row.highlight_red ? { background: '#fef2f2' } : undefined}>
                      <td className="order-id-cell">{row.transaction_id}</td>
                      <td>₹{Number(row.amount || 0).toLocaleString('en-IN')}</td>
                      <td>₹{Number(row.cashback?.customer_cashback || row.cashback?.rounded_amount || 0).toLocaleString('en-IN')}</td>
                      <td>₹{Number(row.cashback?.sponsor_cashback || 0).toLocaleString('en-IN')}</td>
                      <td>
                        <span className={`order-status-pill status-${(row.status || '').toLowerCase()}`}>{row.status}</span>
                      </td>
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
              <div className="no-orders-icon-wrap"><ShoppingBag size={26} /></div>
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
                    <th></th>
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
                      <td className="order-total-cell">₹{Number(ord.total_amount ?? ord.total ?? 0).toLocaleString('en-IN')}</td>
                      <td>
                        {ord.can_cancel && (
                          <button
                            type="button"
                            disabled={cancelBusyId === ord.id}
                            onClick={() => handleCancelOrder(ord.id)}
                            style={{ fontSize: 11, color: '#b91c1c', background: 'transparent', border: '1px solid #fecaca', borderRadius: 6, padding: '2px 8px', cursor: 'pointer' }}
                          >
                            {cancelBusyId === ord.id ? '...' : 'Cancel'}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="account-footer">
          <button type="button" className="btn-danger-outline" onClick={() => { logout(); onClose(); }}>
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
