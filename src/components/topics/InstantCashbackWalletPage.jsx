import React from 'react';
import { 
  Home, ChevronRight, Sparkles, Wallet, ShieldCheck, 
  Coins, ArrowRight, ShoppingBag, CheckCircle2, Zap, 
  Layers, Percent, Truck, HelpCircle, Award, Star
} from 'lucide-react';
import { FmcgTopicSidebar } from './FmcgTopicSidebar';

export const InstantCashbackWalletPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
  return (
    <div className="topic-page-wrapper">
      
      {/* 1. HERO HEADER */}
      <section className="topic-hero-showcase">
        <div className="topic-hero-bg-glow" />
        <div className="container">
          
          <div className="topic-breadcrumbs-row">
            <button className="breadcrumb-link" onClick={() => onNavigate('home')}>
              <Home size={13} />
              <span>Home</span>
            </button>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-link" onClick={() => onNavigate('home')}>Ecosystem Services</span>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Instant Cashback Wallet</span>
          </div>

          <div className="topic-top-badge-row">
            <div className="topic-foundation-pill">
              <span className="pill-om-symbol">👛</span>
              <span>LIGHTNING-FAST 1-CLICK UPI PAYOUTS</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          <div className="topic-hero-header-box">
            <h1 className="topic-hero-title">
              Instant Cashback Wallet & Real-Time Payouts
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                Up to 100% Purchase Cashback • Instant UPI Transfer • Zero Lock-In • Complete Ledger Transparency
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              Say goodbye to fake points, useless promo discount coupons, and 30-day payout hold periods. KharchDaan credits your cashback and matrix commissions in real-time, withdrawable directly to your Google Pay, PhonePe, Paytm, or bank account.
            </p>
          </div>

        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="topic-main-content-section">
        <div className="container">
          
          <div className="topic-layout-grid">
            
            {/* Left Main Article */}
            <div className="topic-article-main-card">
              
              {/* Primary Visual Banner */}
              <div className="topic-featured-photo-wrapper">
                <img 
                  src="/images/topic-instant-payout.jpg" 
                  alt="Instant UPI Cashback Settlement Screen and Wallet Dashboard" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Zap size={16} className="text-gold" />
                  <span>Sub-Second UPI Transaction Settlement</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">Your Money, Your Control, In Real-Time</h2>
                <p className="topic-overview-text">
                  Most e-commerce and direct selling platforms lock your earned points in cumbersome digital coupons that force you to buy items you don't even want. Others impose arbitrary withdrawal limits or take weeks to approve payout requests.
                </p>
                <p className="topic-overview-text">
                  <strong>KharchDaan operates on pure transparency</strong>. The moment an order is confirmed or a team member in your 20-level downline shops for monthly ration, the commission is calculated and credited to your KharchDaan Wallet instantly. With a single tap, transfer your earnings directly to your UPI ID without waiting for monthly cycles.
                </p>

                {/* 4 Feature Pillars Grid */}
                <div className="topic-features-grid">
                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box purple">
                      <Zap size={22} />
                    </div>
                    <h4>1-Click UPI Direct Payout</h4>
                    <p>Withdraw your cashback and matrix earnings directly to PhonePe, Google Pay, Paytm, or BHIM within seconds.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box orange">
                      <Percent size={22} />
                    </div>
                    <h4>Up to 100% Shopping Cashback</h4>
                    <p>Unlock our power reward matrix where cumulative downline volume can subsidize up to 100% of your family's monthly grocery cost.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box green">
                      <ShieldCheck size={22} />
                    </div>
                    <h4>Bank-Grade Security</h4>
                    <p>256-bit encrypted transactions, two-factor OTP withdrawal authentication, and full compliance with RBI payment guidelines.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box gold">
                      <Coins size={22} />
                    </div>
                    <h4>Immutable Ledger Record</h4>
                    <p>Every single paisa of PV credit, level commission, and cashback is itemized line-by-line with downloadable PDF statements.</p>
                  </div>
                </div>

                {/* Wallet Highlights Visual Strip */}
                <h3 className="topic-mid-title">Wallet Flow: From Shopping Cart to Bank Account</h3>
                
                <div className="topic-staples-showcase-grid">
                  <div className="staple-card">
                    <img src="/images/hiw-step2-shopping.jpg" alt="Order Placed" />
                    <div className="staple-card-content">
                      <h5>1. Shop Groceries</h5>
                      <span>Order daily essentials or scan at local partner Kirana store.</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/hiw-step4-cashback.jpg" alt="PV Points Credited" />
                    <div className="staple-card-content">
                      <h5>2. Instant PV Credit</h5>
                      <span>System auto-credits cashback & 20-level team commissions.</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/topic-instant-payout.jpg" alt="UPI Transfer" />
                    <div className="staple-card-content">
                      <h5>3. 1-Click UPI Transfer</h5>
                      <span>Click 'Withdraw' and receive cash directly into bank account!</span>
                    </div>
                  </div>
                </div>

                {/* Table Breakdown */}
                <h3 className="topic-table-title">Payout Comparison: Traditional Schemes vs KharchDaan</h3>
                <div className="topic-breakdown-table-wrap">
                  <table className="topic-breakdown-table">
                    <thead>
                      <tr>
                        <th>Feature</th>
                        <th>Traditional MLM Platforms</th>
                        <th>KharchDaan Instant Wallet</th>
                        <th>Advantage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Payout Speed</strong></td>
                        <td>30 - 45 Days Hold</td>
                        <td>Instant (1-Click UPI)</td>
                        <td><strong className="text-orange">Real-Time</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Minimum Withdrawal</strong></td>
                        <td>₹2,500 - ₹5,000</td>
                        <td>Just ₹100</td>
                        <td><strong className="text-orange">Zero Lock-In</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Commission Usability</strong></td>
                        <td>Forced store coupon</td>
                        <td>Direct Bank UPI Transfer</td>
                        <td><strong className="text-orange">100% Free Cash</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip Box */}
                <div className="topic-pro-tip-box">
                  <Sparkles size={22} className="text-orange" />
                  <div>
                    <strong>Pro Financial Tip</strong>
                    <p>Link your primary Google Pay, PhonePe, or BHIM UPI ID in your account dashboard. Whenever your downline shops, enjoy instant notifications and 1-tap withdrawal directly to your savings account!</p>
                  </div>
                </div>

                {/* Action CTA Row */}
                <div className="topic-article-cta-row">
                  <button className="btn-primary btn-large" onClick={() => onNavigate('instant-payouts')}>
                    <Zap size={18} />
                    <span>Explore Wallet Features</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-secondary-outline btn-large" onClick={onOpenAuth}>
                    <Sparkles size={18} />
                    <span>Open Free Wallet</span>
                  </button>
                </div>

                {/* FAQ Section */}
                <div className="topic-faq-section">
                  <h3 className="topic-faq-heading">Frequently Asked Questions</h3>
                  
                  <div className="faq-accordion-box">
                    <div className="faq-item">
                      <div className="faq-question">
                        <HelpCircle size={16} className="text-orange" />
                        <strong>Is there a minimum withdrawal threshold for wallet balance?</strong>
                      </div>
                      <p className="faq-answer">
                        KharchDaan has an ultra-low minimum withdrawal limit of just ₹100, allowing you to withdraw your daily and weekly earnings without hassle.
                      </p>
                    </div>

                    <div className="faq-item">
                      <div className="faq-question">
                        <HelpCircle size={16} className="text-orange" />
                        <strong>Are there any hidden transaction fees on UPI withdrawals?</strong>
                      </div>
                      <p className="faq-answer">
                        No! KharchDaan does not charge hidden platform payout fees. Standard statutory TDS is deducted as per Government of India direct tax regulations with official TDS certificates provided.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Side Action Panel */}
            <FmcgTopicSidebar 
              currentTopicId="instant-cashback-wallet"
              onNavigate={onNavigate}
              onOpenAuth={onOpenAuth}
              dealTitle="Instant Payout Guarantee"
              dealDesc="Track your commissions, retail cashbacks, and royalty pool dividends live 24/7."
              dealPrice="Instant"
              dealOldPrice="30 Days"
              dealDiscount="REAL-TIME"
              dealActionText="View Wallet Features"
              dealCategory="Grocery"
            />

          </div>

        </div>
      </section>

      {/* 3. BOTTOM CTA BANNER */}
      <section className="topic-bottom-cta-banner">
        <div className="container">
          <div className="bottom-cta-card">
            <div className="bottom-cta-content">
              <h2>Experience True Financial Velocity</h2>
              <p>Turn every daily purchase into immediate, spendable money in your bank account today.</p>
            </div>
            <div className="bottom-cta-actions">
              <button 
                className="btn-cta-primary"
                onClick={() => onNavigate('products')}
              >
                <span>Shop & Earn Cashback</span>
                <ArrowRight size={16} />
              </button>
              <button 
                className="btn-cta-secondary"
                onClick={onOpenAuth}
              >
                <span>Open Free Wallet</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
