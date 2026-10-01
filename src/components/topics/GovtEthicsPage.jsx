import React from 'react';
import { 
  Home, ChevronRight, Sparkles, Scale, ShieldCheck, 
  Coins, ArrowRight, Award, Layers, ShoppingBag, 
  CheckCircle2, FileText, Check
} from 'lucide-react';

export const GovtEthicsPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <span className="breadcrumb-current">Govt. Direct Selling Ethics</span>
          </div>

          <div className="topic-top-badge-row">
            <div className="topic-foundation-pill">
              <span className="pill-om-symbol">ॐ</span>
              <span>MISSION & FOUNDATION</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          <div className="topic-hero-header-box">
            <h1 className="topic-hero-title">
              100% Compliant with Govt Direct Selling Rules, 2021
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                Consumer Protection Act Compliant • Zero Headhunting Fees • 100% Genuine Tax Invoicing
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              KharchDaan operates in full, strict compliance with the Consumer Protection (Direct Selling) Rules, 2021 notified by the Ministry of Consumer Affairs, Government of India.
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
                  src="/images/topic-govt-ethics.jpg" 
                  alt="Govt Direct Selling Ethics & Legal Consumer Compliance" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Scale size={16} className="text-gold" />
                  <span>Consumer Protection (Direct Selling) Rules, 2021</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">A Clean, Ethical, and Fully Legal Platform</h2>
                <p className="topic-overview-text">
                  In the past, the direct selling industry was tarnished by fraudulent pyramid schemes, fake investment clubs, and mandatory expensive "starter kits" where money circulated without any real product value.
                </p>
                <p className="topic-overview-text">
                  <strong>KharchDaan was designed from day one to set the gold standard of Indian direct selling ethics.</strong> Under the Consumer Protection (Direct Selling) Rules, 2021, all pyramid schemes, enrollment fees, and mandatory recruitment conditions are strictly prohibited. Every single rupee earned on our platform originates strictly from verified commercial margins on authentic, GST-invoiced FMCG goods delivered to real households.
                </p>

                {/* 3 Legal Compliance Cards */}
                <div className="compliance-pillars-grid">
                  <div className="compliance-pillar-card">
                    <div className="compliance-icon-badge"><FileText size={24} /></div>
                    <h4>1. Zero Joining or Kit Fees</h4>
                    <p>Free lifetime member registration for every Indian consumer. No starter packages or renewal fees allowed.</p>
                  </div>

                  <div className="compliance-pillar-card">
                    <div className="compliance-icon-badge"><ShieldCheck size={24} /></div>
                    <h4>2. No Money Circulation</h4>
                    <p>Zero enrollment-based compensation. Commissions are derived 100% from genuine retail FMCG product repurchases.</p>
                  </div>

                  <div className="compliance-pillar-card">
                    <div className="compliance-icon-badge"><Award size={24} /></div>
                    <h4>3. Transparent GST Invoices</h4>
                    <p>Every single grocery packet is sourced directly from manufacturers with clear tax invoices and manufacturer warranties.</p>
                  </div>
                </div>

                {/* 4 Core Pillars */}
                <h3 className="topic-pillars-title">Key Legal Safeguards & Consumer Rights</h3>
                <div className="topic-pillars-grid">
                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Scale size={20} />
                    </div>
                    <h4 className="pillar-title">Ministry Compliance</h4>
                    <p className="pillar-desc">Strict adherence to all guidelines gazetted by the Ministry of Consumer Affairs, Food & Public Distribution.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className="pillar-title">Transparent Buyback Policy</h4>
                    <p className="pillar-desc">Clear return mechanisms and grievance redressal officers to ensure complete consumer peace of mind.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <ShieldCheck size={20} />
                    </div>
                    <h4 className="pillar-title">Reputation Protection</h4>
                    <p className="pillar-desc">You can recommend KharchDaan to relatives with absolute pride, knowing there is zero financial risk.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Coins size={20} />
                    </div>
                    <h4 className="pillar-title">Transparent Ledger</h4>
                    <p className="pillar-desc">Every PV split and transaction has an auditable tax trail with instant digital receipts.</p>
                  </div>
                </div>

                {/* Table */}
                <h3 className="topic-table-title">Ethical Compliance Checklist (Direct Selling Rules 2021)</h3>
                <div className="topic-breakdown-table-wrap">
                  <table className="topic-breakdown-table">
                    <thead>
                      <tr>
                        <th>Compliance Requirement</th>
                        <th>KharchDaan Standard</th>
                        <th>Legal Protection</th>
                        <th>Consumer Benefit</th>
                        <th>Verification Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Registration Fee</strong></td>
                        <td>₹0 (Completely Free)</td>
                        <td>Rule 5(1)(b) Compliant</td>
                        <td>Zero Financial Risk</td>
                        <td><strong className="text-orange">100% Free</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Mandatory Product Purchase</strong></td>
                        <td>None (Voluntary Grocery)</td>
                        <td>Rule 5(1)(c) Compliant</td>
                        <td>Buy What You Need</td>
                        <td><strong className="text-orange">No Forced Buy</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Recruitment Commission</strong></td>
                        <td>Prohibited (Product Sales Only)</td>
                        <td>Rule 5(1)(d) Compliant</td>
                        <td>Ethical Margin Split</td>
                        <td><strong className="text-orange">FMCG Sales Only</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Grievance Redressal</strong></td>
                        <td>48-Hour Resolution Officer</td>
                        <td>Rule 6 Compliant</td>
                        <td>Dedicated Support Desk</td>
                        <td><strong className="text-orange">Full Redressal</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip Box */}
                <div className="topic-pro-tip-box">
                  <Sparkles size={22} className="text-orange" />
                  <div>
                    <strong>Peace of Mind Guarantee</strong>
                    <p>Because KharchDaan operates with 100% legal integrity, your business, your earnings, and your family reputation remain completely secure for decades to come.</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="topic-article-cta-row">
                  <button className="btn-primary btn-large" onClick={onOpenAuth}>
                    <ShieldCheck size={18} />
                    <span>Join 100% Safe & Free Platform</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-secondary-outline btn-large" onClick={onShopClick}>
                    <ShoppingBag size={18} />
                    <span>Explore Verified FMCG Catalog</span>
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

                  <button className="topic-nav-item-btn" onClick={() => onNavigate('instant-payouts')}>
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

                  <button className="topic-nav-item-btn active" onClick={() => onNavigate('govt-ethics')}>
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
                  <Scale size={13} />
                  <span>100% ETHICAL COMMERCE</span>
                </div>
                <h4 className="promo-card-title">A Secure Family Business</h4>
                <p className="promo-card-desc">
                  Zero joining barrier, full legal transparency, and genuine branded FMCG products.
                </p>
                <button className="btn-promo-action" onClick={onOpenAuth}>
                  <span>Create Free Member ID</span>
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
