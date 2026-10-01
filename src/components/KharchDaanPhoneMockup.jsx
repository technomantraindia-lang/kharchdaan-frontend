import React from 'react';
import { 
  Search, ShoppingBag, Smartphone, ShieldCheck, Heart, Sparkles, 
  Home, Tag, Clock, Wallet, User, ChevronRight, Zap 
} from 'lucide-react';

export const KharchDaanPhoneMockup = () => {
  return (
    <div className="phone-mockup-hd-container">
      {/* Outer Metallic Phone Hardware Frame */}
      <div className="phone-device-bezel">
        {/* Top Punchhole Camera */}
        <div className="phone-camera-punchhole" />

        {/* Glossy Screen Glare Line */}
        <div className="phone-screen-glare" />

        {/* Screen Display */}
        <div className="phone-screen-display">
          {/* 1. Status Bar */}
          <div className="phone-status-bar">
            <div className="status-left">
              <span className="status-time">10:09</span>
              <span className="status-msg-dot">💬</span>
            </div>
            <div className="status-right">
              <span className="status-signal">4G 📶</span>
              <span className="status-battery">82% 🔋</span>
            </div>
          </div>

          {/* 2. App Saffron Header */}
          <div className="phone-app-header">
            <div className="phone-header-brand">
              <span className="brand-kharch">KHARCH</span>
              <span className="brand-sep">|</span>
              <span className="brand-daan">DAAN</span>
            </div>
            <div className="phone-header-moneybag">
              <div className="moneybag-badge">
                <span className="rupee-icon">₹</span>
                <span className="coins-stack">🪙</span>
              </div>
            </div>
          </div>

          {/* 3. Welcome & Balance Card */}
          <div className="phone-balance-card">
            <div className="balance-user-row">
              <span className="user-greeting">Welcome, Rahul!</span>
            </div>
            <div className="balance-amount-row">
              <span className="balance-label">Cashback Balance:</span>
              <div className="balance-value">
                <span className="val-rupee">₹</span>
                <span className="val-number">1,845.20</span>
              </div>
            </div>

            {/* Search Input Bar */}
            <div className="phone-search-bar">
              <span className="search-placeholder">Search products & offers...</span>
              <Search size={10} className="search-icon-orange" />
            </div>
          </div>

          {/* 4. Hot Deals Strip */}
          <div className="phone-section-block">
            <div className="phone-sec-header">
              <span className="sec-title">Hot Deals</span>
              <span className="sec-link">View All</span>
            </div>
            <div className="phone-deals-row">
              <div className="deal-card deal-pink">
                <div className="deal-logo-circle myntra">M</div>
                <strong className="deal-brand">Myntra: 10%</strong>
                <span className="deal-sub">Cashback</span>
                <span className="deal-off">₹350 off</span>
              </div>
              <div className="deal-card deal-orange">
                <div className="deal-logo-circle amazon">a</div>
                <strong className="deal-brand">Amazon: 8%</strong>
                <span className="deal-sub">Cashback</span>
                <span className="deal-off">₹200 off</span>
              </div>
              <div className="deal-card deal-navy">
                <div className="deal-logo-circle ajio">AJIO</div>
                <strong className="deal-brand">Ajio: Flat</strong>
                <span className="deal-sub">₹500 off</span>
                <span className="deal-off">₹500 off</span>
              </div>
            </div>
          </div>

          {/* 5. Featured Offers 6-Grid */}
          <div className="phone-section-block">
            <div className="phone-sec-header">
              <span className="sec-title">Featured Offers</span>
            </div>
            <div className="phone-categories-grid">
              <div className="cat-box">
                <span className="cat-emoji">👗</span>
                <span className="cat-name">Fashion</span>
                <span className="cat-cb">Up to 20%</span>
              </div>
              <div className="cat-box">
                <span className="cat-emoji">💻</span>
                <span className="cat-name">Electronics</span>
                <span className="cat-cb">Up to 20%</span>
              </div>
              <div className="cat-box">
                <span className="cat-emoji">🛒</span>
                <span className="cat-name">Groceries</span>
                <span className="cat-cb">Up to 20%</span>
              </div>
              <div className="cat-box">
                <span className="cat-emoji">🍲</span>
                <span className="cat-name">Food Delivery</span>
                <span className="cat-cb">Up to 20%</span>
              </div>
              <div className="cat-box">
                <span className="cat-emoji">✈️</span>
                <span className="cat-name">Travel</span>
                <span className="cat-cb">Up to 20%</span>
              </div>
              <div className="cat-box">
                <span className="cat-emoji">🏠</span>
                <span className="cat-name">Home</span>
                <span className="cat-cb">Up to 20%</span>
              </div>
            </div>
          </div>

          {/* 6. Bottom Navigation Bar */}
          <div className="phone-bottom-nav">
            <div className="nav-item active">
              <Home size={13} />
              <span>Home</span>
            </div>
            <div className="nav-item">
              <Tag size={13} />
              <span>Offers</span>
            </div>
            <div className="nav-item">
              <Clock size={13} />
              <span>History</span>
            </div>
            <div className="nav-item">
              <Wallet size={13} />
              <span>My Wallet</span>
            </div>
            <div className="nav-item">
              <User size={13} />
              <span>Profile</span>
            </div>
          </div>

          {/* Home indicator bar */}
          <div className="phone-home-indicator" />
        </div>
      </div>
    </div>
  );
};
