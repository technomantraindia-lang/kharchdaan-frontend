import React from 'react';
import { 
  Home, ChevronRight, Sparkles, HeartHandshake, ShieldCheck, 
  Coins, ArrowRight, Landmark, Layers, ShoppingBag, 
  Award, Heart, Sun, CheckCircle2
} from 'lucide-react';

export const FoundationSevaPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <span className="breadcrumb-current">Geeta Sevashram Pratishthan</span>
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
              Geeta Sevashram Pratishthan Social Foundation
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                तेरा तुझको अर्पण क्या लागे मेरा • Community Annadaan Seva • Ethical Commerce
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              KharchDaan is a non-exploitative social initiative established by Geeta Sevashram Pratishthan, dedicated to returning consumer trade surplus back to Indian households and funding sacred community food seva.
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
                  src="/images/topic-foundation-seva.jpg" 
                  alt="Geeta Sevashram Pratishthan Annadaan Community Seva" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <HeartHandshake size={16} className="text-gold" />
                  <span>Sacred Philosophy: Tera Tujhko Arpan</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">Our Sacred Founding Philosophy</h2>
                <p className="topic-overview-text">
                  In modern corporate commerce, billions of rupees in consumer trade margins are absorbed by middlemen, advertising monopolies, and celebrity endorsements. Consumers and families receive nothing in return except higher prices.
                </p>
                <p className="topic-overview-text">
                  <strong>Geeta Sevashram Pratishthan established KharchDaan to restore balance.</strong> Guided by the sacred Vedic principle <em>“Tera Tujhko Arpan Kya Lage Mera”</em> (Everything we generate belongs to you and the community), we convert traditional corporate marketing expenditure into direct household cashbacks, 20-level community royalties, and free food ration distribution (*Annadaan Seva*) for underprivileged families.
                </p>

                {/* 3 Foundation Pillars Cards */}
                <div className="foundation-mission-grid">
                  <div className="foundation-mission-card">
                    <div className="mission-icon saffron"><Sun size={24} /></div>
                    <h4>1. Tera Tujhko Arpan</h4>
                    <p>Trade surplus generated from essential daily groceries is returned directly to consumer families with 100% moral transparency.</p>
                  </div>

                  <div className="foundation-mission-card">
                    <div className="mission-icon green"><Heart size={24} /></div>
                    <h4>2. Free Annadaan Seva</h4>
                    <p>A dedicated portion of platform earnings permanently funds free food grains and kitchen rations for elderly and underprivileged citizens.</p>
                  </div>

                  <div className="foundation-mission-card">
                    <div className="mission-icon purple"><Landmark size={24} /></div>
                    <h4>3. Ethical Trust Governance</h4>
                    <p>Managed with zero private exploitation. No high entry barriers, no forced purchases, and absolute respect for consumer trust.</p>
                  </div>
                </div>

                {/* 4 Core Pillars */}
                <h3 className="topic-pillars-title">Four Pillars of Foundation Impact</h3>
                <div className="topic-pillars-grid">
                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <HeartHandshake size={20} />
                    </div>
                    <h4 className="pillar-title">Pure Seva Spirit</h4>
                    <p className="pillar-desc">Rooted in selfless service, moral integrity, and social responsibility across every village and town.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <ShieldCheck size={20} />
                    </div>
                    <h4 className="pillar-title">Zero Exploitation</h4>
                    <p className="pillar-desc">No membership kit extortion or pyramid schemes. Pure FMCG product value with GST-compliant invoicing.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <ShoppingBag size={20} />
                    </div>
                    <h4 className="pillar-title">Fair MRP Discounts</h4>
                    <p className="pillar-desc">Ensuring Indian kitchens receive genuine staple food products at honest, affordable market prices.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Sparkles size={20} />
                    </div>
                    <h4 className="pillar-title">Dignity for Bharat</h4>
                    <p className="pillar-desc">Empowering Tier-2, Tier-3 towns and rural families with honorable, recurring monthly livelihood opportunities.</p>
                  </div>
                </div>

                {/* Table */}
                <h3 className="topic-table-title">Foundation Social Welfare Allocation</h3>
                <div className="topic-breakdown-table-wrap">
                  <table className="topic-breakdown-table">
                    <thead>
                      <tr>
                        <th>Initiative Stream</th>
                        <th>Target Beneficiaries</th>
                        <th>Funding Source</th>
                        <th>Impact Metric</th>
                        <th>Governance Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Community Annadaan Seva</strong></td>
                        <td>Needy & Underprivileged</td>
                        <td>Foundation Trust Surplus</td>
                        <td><span className="badge-split">Free Monthly Rations</span></td>
                        <td><strong className="text-orange">100% Charitable</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Consumer Cashback Pool</strong></td>
                        <td>25,000+ Enrolled Families</td>
                        <td>Direct FMCG Margins</td>
                        <td><span className="badge-split">Up to 100% Cashback</span></td>
                        <td><strong className="text-orange">Active Daily</strong></td>
                      </tr>
                      <tr>
                        <td><strong>20-Level Matrix Royalties</strong></td>
                        <td>Indian Homemakers & Leaders</td>
                        <td>Shared Platform Volume</td>
                        <td><span className="badge-split">Generational Wealth</span></td>
                        <td><strong className="text-orange">NPCI Disbursed</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Kirana Partner Support</strong></td>
                        <td>5,000+ Retail Merchants</td>
                        <td>Zero-Fee Onboarding</td>
                        <td><span className="badge-split">Protected Livelihoods</span></td>
                        <td><strong className="text-orange">Local Commerce</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip Box */}
                <div className="topic-pro-tip-box">
                  <Sparkles size={22} className="text-orange" />
                  <div>
                    <strong>Spiritual & Moral Harmony</strong>
                    <p>When you purchase your monthly cooking oil and atta through KharchDaan, your everyday necessity directly supports food seva for those in need while creating income for your own family.</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="topic-article-cta-row">
                  <button className="btn-primary btn-large" onClick={onOpenAuth}>
                    <HeartHandshake size={18} />
                    <span>Join Free & Support the Mission</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-secondary-outline btn-large" onClick={onShopClick}>
                    <ShoppingBag size={18} />
                    <span>Shop Daily Essentials</span>
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

                  <button className="topic-nav-item-btn active" onClick={() => onNavigate('foundation-seva')}>
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
                  <Heart size={13} />
                  <span>TERA TUJHKO ARPAN</span>
                </div>
                <h4 className="promo-card-title">A Social Mission of Dignity</h4>
                <p className="promo-card-desc">
                  Join a movement of compassionate commerce that uplifts families and blesses communities.
                </p>
                <button className="btn-promo-action" onClick={onOpenAuth}>
                  <span>Join the Movement Free</span>
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
