import React from 'react';
import { 
  Home, ChevronRight, Sparkles, ShieldCheck, 
  Coins, ArrowRight, Zap, CheckCircle2, Landmark, 
  Layers, ShoppingBag, Smartphone, CreditCard
} from 'lucide-react';

export const InstantPayoutsPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <span className="breadcrumb-link" onClick={() => onNavigate('power-matrix')}>Direct Selling</span>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Instant UPI & Bank Payouts</span>
          </div>

          <div className="topic-top-badge-row">
            <div className="topic-foundation-pill">
              <span className="pill-om-symbol">ॐ</span>
              <span>COMPENSATION & MATRIX</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          <div className="topic-hero-header-box">
            <h1 className="topic-hero-title">
              Instant UPI & Direct Bank Payouts
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                Real-Time UPI Wallet Withdrawals • Zero Lock-In Delays • 256-Bit Bank Security
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              Experience the speed of automated UPI settlements. As soon as grocery orders are delivered, your cashbacks and matrix royalties credit straight to your wallet for instant 1-click withdrawal.
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
              
              <div className="topic-featured-photo-wrapper">
                <img 
                  src="/images/topic-instant-payout.jpg" 
                  alt="Instant UPI Smartphone Cashback Credit" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Zap size={16} className="text-gold" />
                  <span>NPCI / UPI 1-Click Instant Settlements</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">Why You Never Wait for Your Money</h2>
                <p className="topic-overview-text">
                  Distributors across India are tired of old-fashioned companies that hold commissions for 30, 60, or even 90 days with complicated "administrative processing" delays and hidden processing cuts.
                </p>
                <p className="topic-overview-text">
                  <strong>KharchDaan runs on instant automated fintech rails.</strong> Built with seamless NPCI UPI, IMPS, and NEFT direct integration, your cashbacks and matrix PV credits appear in your live wallet in real time. You can transfer your funds directly to Google Pay, PhonePe, Paytm, BHIM UPI, or your bank account with a single tap.
                </p>

                {/* 3 Step Instant Withdrawal Visual */}
                <div className="payout-steps-visual-card">
                  <div className="payout-step-item">
                    <div className="payout-icon-bubble"><ShoppingBag size={22} /></div>
                    <h4>1. Verified Grocery Order</h4>
                    <p>Delivered via doorstep delivery or scanned via neighbourhood Kirana QR.</p>
                  </div>
                  <div className="payout-step-arrow">➔</div>
                  <div className="payout-step-item">
                    <div className="payout-icon-bubble"><Coins size={22} /></div>
                    <h4>2. Real-Time Wallet Credit</h4>
                    <p>Instant cashback and downline PV split credited straight to digital wallet.</p>
                  </div>
                  <div className="payout-step-arrow">➔</div>
                  <div className="payout-step-item">
                    <div className="payout-icon-bubble"><Smartphone size={22} /></div>
                    <h4>3. 1-Click UPI Transfer</h4>
                    <p>Instant IMPS settlement into GPay, PhonePe, or Savings Bank Account.</p>
                  </div>
                </div>

                {/* 4 Core Pillars */}
                <h3 className="topic-pillars-title">Key Payment Security & Speed Features</h3>
                <div className="topic-pillars-grid">
                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Zap size={20} />
                    </div>
                    <h4 className="pillar-title">Sub-Second Processing</h4>
                    <p className="pillar-desc">Automated smart ledger calculates cashbacks and splits instantly upon invoice confirmation.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <ShieldCheck size={20} />
                    </div>
                    <h4 className="pillar-title">Zero Unfair Deductions</h4>
                    <p className="pillar-desc">No hidden monthly "wallet maintenance" or "service cuts". Complete rupee-for-rupee transparency.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Landmark size={20} />
                    </div>
                    <h4 className="pillar-title">RBI Compliant Rails</h4>
                    <p className="pillar-desc">Strict compliance with Reserve Bank of India payment gateway and NPCI tokenization standards.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <CreditCard size={20} />
                    </div>
                    <h4 className="pillar-title">Any Indian Bank / UPI</h4>
                    <p className="pillar-desc">Works seamlessly with SBI, HDFC, ICICI, PNB, Bank of Baroda, GPay, PhonePe, Paytm, and BHIM.</p>
                  </div>
                </div>

                {/* Table */}
                <h3 className="topic-table-title">Payout Channels & Settlement Timelines</h3>
                <div className="topic-breakdown-table-wrap">
                  <table className="topic-breakdown-table">
                    <thead>
                      <tr>
                        <th>Payout Type</th>
                        <th>Settlement Method</th>
                        <th>Processing Speed</th>
                        <th>Fee / Deduction</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Consumer Cashback</strong></td>
                        <td>Instant Digital Wallet</td>
                        <td>Immediate (Live)</td>
                        <td><span className="badge-split">₹0 (Zero Fee)</span></td>
                        <td><strong className="text-orange">Instant Active</strong></td>
                      </tr>
                      <tr>
                        <td><strong>UPI Direct Bank Transfer</strong></td>
                        <td>NPCI UPI / IMPS</td>
                        <td>Under 60 Seconds</td>
                        <td><span className="badge-split">Standard Bank Rails</span></td>
                        <td><strong className="text-orange">24x7 Available</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Matrix Team Royalty</strong></td>
                        <td>Automated PV Distribution</td>
                        <td>Daily Settlement Cycle</td>
                        <td><span className="badge-split">₹0 (Zero Fee)</span></td>
                        <td><strong className="text-orange">Real-Time Ledger</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Leadership Pool Dividend</strong></td>
                        <td>Direct NEFT / IMPS Credit</td>
                        <td>1st of Every Month</td>
                        <td><span className="badge-split">Audited Distribution</span></td>
                        <td><strong className="text-orange">Automated</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip Box */}
                <div className="topic-pro-tip-box">
                  <Sparkles size={22} className="text-orange" />
                  <div>
                    <strong>Pro Financial Tip</strong>
                    <p>Link your verified UPI ID (e.g. yourname@oksbi or yourname@ybl) in your member dashboard once. Every future withdrawal requires just a single tap!</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="topic-article-cta-row">
                  <button className="btn-primary btn-large" onClick={onOpenAuth}>
                    <Zap size={18} />
                    <span>Create Free Wallet & Start Earning</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-secondary-outline btn-large" onClick={onShopClick}>
                    <ShoppingBag size={18} />
                    <span>Shop & Test Instant Cashback</span>
                  </button>
                </div>

              </div>

            </div>

            {/* Right Sidebar */}
            <div className="topic-sidebar-col">
              
              <div className="topic-navigator-card">
                <div className="nav-card-header">
                  <Layers size={18} className="text-orange" />
                  <h3>Direct Selling Knowledge Hub</h3>
                </div>
                <p className="nav-card-desc">Explore all dedicated pages:</p>

                <div className="topics-nav-list">
                  <button className="topic-nav-item-btn" onClick={() => onNavigate('power-matrix')}>
                    <div className="topic-nav-thumb-mini"><img src="/images/hiw-step3-network.jpg" alt="1:3 Power Matrix" /></div>
                    <div className="topic-nav-text-block">
                      <span className="topic-nav-cat">COMPENSATION</span>
                      <strong className="topic-nav-name">1:3 Power Matrix System</strong>
                    </div>
                    <ChevronRight size={15} className="topic-nav-arrow" />
                  </button>

                  <button className="topic-nav-item-btn" onClick={() => onNavigate('earning-depth')}>
                    <div className="topic-nav-thumb-mini"><img src="/images/hiw-step5-prosperity.jpg" alt="20 Levels Depth" /></div>
                    <div className="topic-nav-text-block">
                      <span className="topic-nav-cat">COMPENSATION</span>
                      <strong className="topic-nav-name">20 Levels Earning Depth</strong>
                    </div>
                    <ChevronRight size={15} className="topic-nav-arrow" />
                  </button>

                  <button className="topic-nav-item-btn" onClick={() => onNavigate('royalty-pool')}>
                    <div className="topic-nav-thumb-mini"><img src="/images/topic-royalty-pool.jpg" alt="Royalty Pool" /></div>
                    <div className="topic-nav-text-block">
                      <span className="topic-nav-cat">COMPENSATION</span>
                      <strong className="topic-nav-name">Leadership & Royalty Pool</strong>
                    </div>
                    <ChevronRight size={15} className="topic-nav-arrow" />
                  </button>

                  <button className="topic-nav-item-btn active" onClick={() => onNavigate('instant-payouts')}>
                    <div className="topic-nav-thumb-mini"><img src="/images/topic-instant-payout.jpg" alt="Instant Payouts" /></div>
                    <div className="topic-nav-text-block">
                      <span className="topic-nav-cat">COMPENSATION</span>
                      <strong className="topic-nav-name">Instant UPI & Bank Payouts</strong>
                    </div>
                    <ChevronRight size={15} className="topic-nav-arrow" />
                  </button>

                  <button className="topic-nav-item-btn" onClick={() => onNavigate('foundation-seva')}>
                    <div className="topic-nav-thumb-mini"><img src="/images/topic-foundation-seva.jpg" alt="Foundation Seva" /></div>
                    <div className="topic-nav-text-block">
                      <span className="topic-nav-cat">MISSION</span>
                      <strong className="topic-nav-name">Geeta Sevashram Pratishthan</strong>
                    </div>
                    <ChevronRight size={15} className="topic-nav-arrow" />
                  </button>

                  <button className="topic-nav-item-btn" onClick={() => onNavigate('women-empowerment')}>
                    <div className="topic-nav-thumb-mini"><img src="/images/topic-women-meeting.jpg" alt="Women Dignity" /></div>
                    <div className="topic-nav-text-block">
                      <span className="topic-nav-cat">MISSION</span>
                      <strong className="topic-nav-name">Women & Homemaker Dignity</strong>
                    </div>
                    <ChevronRight size={15} className="topic-nav-arrow" />
                  </button>

                  <button className="topic-nav-item-btn" onClick={() => onNavigate('kirana-merchant')}>
                    <div className="topic-nav-thumb-mini"><img src="/images/topic-kirana-store.jpg" alt="Kirana Modernization" /></div>
                    <div className="topic-nav-text-block">
                      <span className="topic-nav-cat">MISSION</span>
                      <strong className="topic-nav-name">Kirana Merchant Modernization</strong>
                    </div>
                    <ChevronRight size={15} className="topic-nav-arrow" />
                  </button>

                  <button className="topic-nav-item-btn" onClick={() => onNavigate('govt-ethics')}>
                    <div className="topic-nav-thumb-mini"><img src="/images/topic-govt-ethics.jpg" alt="Govt Ethics" /></div>
                    <div className="topic-nav-text-block">
                      <span className="topic-nav-cat">MISSION</span>
                      <strong className="topic-nav-name">Govt. Direct Selling Ethics</strong>
                    </div>
                    <ChevronRight size={15} className="topic-nav-arrow" />
                  </button>
                </div>
              </div>

              <div className="topic-promo-sidebar-card">
                <div className="promo-badge-tag">
                  <Zap size={13} />
                  <span>24x7 REAL-TIME RAILS</span>
                </div>
                <h4 className="promo-card-title">Instant Cash In Your Hands</h4>
                <p className="promo-card-desc">
                  Join 25,000+ Indian families experiencing seamless daily wallet cashback.
                </p>
                <button className="btn-promo-action" onClick={onOpenAuth}>
                  <span>Get Started Free</span>
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
