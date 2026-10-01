import React from 'react';
import { 
  Home, ChevronRight, Sparkles, Store, ShieldCheck, 
  Coins, ArrowRight, QrCode, Layers, ShoppingBag, 
  Award, TrendingUp, CheckCircle2, Zap
} from 'lucide-react';

export const KiranaModernizationPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <span className="breadcrumb-current">Kirana Merchant Modernization</span>
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
              Neighbourhood Kirana & Retail Partner Modernization
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                Digital QR Onboarding • Zero Listing Charges • Guaranteed Repeat Customer Footfall
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              Empowering over 5,000+ local Indian grocery shopkeepers with free digital QR code standees, customer footfall traffic, and lucrative retail distribution handling margins.
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
                  src="/images/topic-kirana-store.jpg" 
                  alt="Modernized Indian Kirana Grocery Shop with QR Standee" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Store size={16} className="text-gold" />
                  <span>5,000+ Authorized Merchant Partners Across India</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">Protecting and Empowering Local Indian Retail</h2>
                <p className="topic-overview-text">
                  Foreign-funded 10-minute quick-commerce delivery apps and corporate warehouse giants are aggressively threatening the traditional Indian Kirana store. Local retailers are losing customers, while platforms demand excessive 20% to 30% commission cuts.
                </p>
                <p className="topic-overview-text">
                  <strong>KharchDaan partners directly with local Kiranas rather than competing with them.</strong> We onboard neighbourhood grocery stores as official KharchDaan Authorized Fulfillment and QR Pickup Centers at **zero setup fee**. Local members visit your shop every month to scan, pick up their monthly groceries, and redeem cashbacks—driving high recurring footfall and generous handling margins directly to your cash register.
                </p>

                {/* 3 Merchant Benefits Visual */}
                <div className="kirana-perks-grid">
                  <div className="kirana-perk-card">
                    <div className="perk-icon-wrap"><QrCode size={26} /></div>
                    <h4>Free Smart QR Standee</h4>
                    <p>Instant digital onboarding with customized QR standee for your shop counter. Zero terminal fees or monthly rental.</p>
                  </div>

                  <div className="kirana-perk-card">
                    <div className="perk-icon-wrap"><TrendingUp size={26} /></div>
                    <h4>Locked-In Footfall</h4>
                    <p>KharchDaan members in your 2-km radius are incentivized to shop exclusively at your store for verified cashback points.</p>
                  </div>

                  <div className="kirana-perk-card">
                    <div className="perk-icon-wrap"><Coins size={26} /></div>
                    <h4>Fulfillment Margins</h4>
                    <p>Earn healthy retail handling margins on every order, plus downline bonus when your customers refer their friends.</p>
                  </div>
                </div>

                {/* 4 Core Pillars */}
                <h3 className="topic-pillars-title">Four Pillars of the Kirana Merchant Network</h3>
                <div className="topic-pillars-grid">
                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Store size={20} />
                    </div>
                    <h4 className="pillar-title">Zero Onboarding Cost</h4>
                    <p className="pillar-desc">No registration deposit, hardware fees, or hidden franchise charges for verified shop owners.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Zap size={20} />
                    </div>
                    <h4 className="pillar-title">Instant QR Settlements</h4>
                    <p className="pillar-desc">Customer scan transactions credit immediately to the merchant's UPI bank account without holding periods.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <ShieldCheck size={20} />
                    </div>
                    <h4 className="pillar-title">Direct Brand Supply</h4>
                    <p className="pillar-desc">Access direct manufacturer pricing on FMCG staples (Atta, Oil, Spices) without aggressive distributor markups.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Award size={20} />
                    </div>
                    <h4 className="pillar-title">Merchant Referral Pool</h4>
                    <p className="pillar-desc">Introduce other neighbourhood stores and earn franchise royalties on their monthly turnover volume.</p>
                  </div>
                </div>

                {/* Table */}
                <h3 className="topic-table-title">Kirana Merchant Partner Earnings Model</h3>
                <div className="topic-breakdown-table-wrap">
                  <table className="topic-breakdown-table">
                    <thead>
                      <tr>
                        <th>Partner Level</th>
                        <th>Monthly Customer Base</th>
                        <th>Store FMCG Turnover</th>
                        <th>Handling & Margin Split</th>
                        <th>Projected Monthly Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Local QR Partner</strong></td>
                        <td>50 Local Families</td>
                        <td>₹2,50,000 / mo</td>
                        <td><span className="badge-split">Retail Margin + QR Fee</span></td>
                        <td><strong className="text-orange">₹15,000 - ₹25,000 / mo</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Township Hub Merchant</strong></td>
                        <td>150 Active Families</td>
                        <td>₹7,50,000 / mo</td>
                        <td><span className="badge-split">Volume Rebate + QR</span></td>
                        <td><strong className="text-orange">₹40,000 - ₹65,000 / mo</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Super Franchise Center</strong></td>
                        <td>350+ Families & Stores</td>
                        <td>₹18,00,000+ Volume</td>
                        <td><span className="badge-split">Franchise Royalty Pool</span></td>
                        <td><strong className="text-orange">₹1,00,000+ / mo</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip Box */}
                <div className="topic-pro-tip-box">
                  <Sparkles size={22} className="text-orange" />
                  <div>
                    <strong>Pro Merchant Strategy</strong>
                    <p>Display your official KharchDaan QR standee right next to your billing counter. When regular shoppers ask about it, show them how they can earn up to 100% cashback while making your store their permanent ration hub!</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="topic-article-cta-row">
                  <button className="btn-primary btn-large" onClick={onOpenAuth}>
                    <Store size={18} />
                    <span>Register Your Store — Free</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-secondary-outline btn-large" onClick={onShopClick}>
                    <ShoppingBag size={18} />
                    <span>Browse Wholesale Catalog</span>
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

                  <button className="topic-nav-item-btn active" onClick={() => onNavigate('kirana-merchant')}>
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
                  <Store size={13} />
                  <span>KIRANA MERCHANT PARTNER</span>
                </div>
                <h4 className="promo-card-title">Boost Your Shop Footfall</h4>
                <p className="promo-card-desc">
                  Join 5,000+ grocery retailers with a free digital QR standee and loyal recurring shoppers.
                </p>
                <button className="btn-promo-action" onClick={onOpenAuth}>
                  <span>Apply for Merchant QR</span>
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
