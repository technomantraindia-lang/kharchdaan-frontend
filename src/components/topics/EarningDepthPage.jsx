import React from 'react';
import { 
  Home, ChevronRight, Sparkles, TrendingUp, ShieldCheck, 
  Coins, ArrowRight, Users, Zap, CheckCircle2, ShoppingBag, 
  Layers, Award, Gift, Calendar, Check
} from 'lucide-react';

export const EarningDepthPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <span className="breadcrumb-current">20 Levels Earning Depth</span>
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
              20 Levels Recurring Distribution Depth
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                Essential Household Groceries • Lifelong Repurchases • Generational Royalty Depth
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              Earn continuous, tiered monthly royalties as 20 generations of families buy their mandatory monthly groceries—creating truly indestructible passive wealth for your family.
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
                  src="/images/hiw-step5-prosperity.jpg" 
                  alt="Generational Wealth & 20-Level Depth" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Layers size={16} className="text-gold" />
                  <span>20 Full Tiers of Recurring Royalty Income</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">Why 20-Level Depth Changes Everything</h2>
                <p className="topic-overview-text">
                  Most legacy direct selling companies cap their distributor commissions at only 3 to 7 levels. This means when your network expands to distant towns and cities beyond level 7, you lose 100% of that massive volume.
                </p>
                <p className="topic-overview-text">
                  <strong>KharchDaan pays across a massive 20 full tiers of depth.</strong> Because every Indian home consumes cooking oil, flour, tea, spices, soaps, and grains every 30 days without fail, you never have to convince anyone to create artificial demand. Every monthly grocery refill automatically triggers royalties across all 20 levels.
                </p>

                {/* Depth Tier Visual Highlights */}
                <div className="depth-zones-grid">
                  <div className="depth-zone-card zone-1">
                    <div className="zone-tag">Tiers 1 - 4</div>
                    <h4>Frontline & Local Community</h4>
                    <p>Immediate grocery cashbacks and frontline duplication. Replaces your own family's monthly grocery cost within weeks.</p>
                  </div>
                  <div className="depth-zone-card zone-2">
                    <div className="zone-tag">Tiers 5 - 10</div>
                    <h4>City & District Network</h4>
                    <p>Compounding team volume from hundreds of neighbourhood families buying genuine FMCG essentials every month.</p>
                  </div>
                  <div className="depth-zone-card zone-3">
                    <div className="zone-tag">Tiers 11 - 20</div>
                    <h4>Pan-India National Royalty</h4>
                    <p>Generational passive royalty depth across thousands of homes throughout India, supporting family financial freedom.</p>
                  </div>
                </div>

                {/* 4 Core Pillars */}
                <h3 className="topic-pillars-title">Key Core Pillars of 20-Level Depth</h3>
                <div className="topic-pillars-grid">
                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <ShoppingBag size={20} />
                    </div>
                    <h4 className="pillar-title">100% Organic Demand</h4>
                    <p className="pillar-desc">Families cannot skip monthly kitchen ration. Zero forced selling of luxury wellness or overpriced items.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Calendar size={20} />
                    </div>
                    <h4 className="pillar-title">30-Day Auto-Renewal</h4>
                    <p className="pillar-desc">Your royalty points renew every 30 days like clockwork as kitchen pantry supplies naturally deplete.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Coins size={20} />
                    </div>
                    <h4 className="pillar-title">Compound Growth</h4>
                    <p className="pillar-desc">As each family shares with just 3 others, the power of geometric compounding expands rapidly down to level 20.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <ShieldCheck size={20} />
                    </div>
                    <h4 className="pillar-title">Transparent GST Billing</h4>
                    <p className="pillar-desc">Every single rupee in royalty is generated from genuine manufacturer-invoiced consumer transactions.</p>
                  </div>
                </div>

                {/* Detailed Table */}
                <h3 className="topic-table-title">20-Tier Earning Horizon Breakdown</h3>
                <div className="topic-breakdown-table-wrap">
                  <table className="topic-breakdown-table">
                    <thead>
                      <tr>
                        <th>Tier Band</th>
                        <th>Network Scope</th>
                        <th>Consumption Type</th>
                        <th>Royalty Distribution</th>
                        <th>Financial Horizon</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Tiers 1 - 3</strong></td>
                        <td>39 Core Members</td>
                        <td>Monthly Kitchen Staples</td>
                        <td><span className="badge-split">Direct Cashback Split</span></td>
                        <td><strong className="text-orange">₹7,500+ / mo</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Tiers 4 - 7</strong></td>
                        <td>Extended Community</td>
                        <td>FMCG + Personal Care</td>
                        <td><span className="badge-split">Tiered Matrix Royalties</span></td>
                        <td><strong className="text-orange">₹35,000+ / mo</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Tiers 8 - 12</strong></td>
                        <td>Multi-City Stores</td>
                        <td>Kirana QR + Home Delivery</td>
                        <td><span className="badge-split">Volume Compounding</span></td>
                        <td><strong className="text-orange">₹1,50,000+ / mo</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Tiers 13 - 20</strong></td>
                        <td>Pan-India Network</td>
                        <td>National FMCG Turnover</td>
                        <td><span className="badge-split">Leadership Royalty Pool</span></td>
                        <td><strong className="text-orange">Generational Wealth</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip Box */}
                <div className="topic-pro-tip-box">
                  <Sparkles size={22} className="text-orange" />
                  <div>
                    <strong>Pro Insight on Depth</strong>
                    <p>Because KharchDaan partners with top brands (Fortune, Aashirvaad, Tata, Surf Excel), there is zero consumer resistance. People simply change where they buy, not what they buy!</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="topic-article-cta-row">
                  <button className="btn-primary btn-large" onClick={onOpenAuth}>
                    <Sparkles size={18} />
                    <span>Join Free & Unlock 20 Levels</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-secondary-outline btn-large" onClick={onShopClick}>
                    <ShoppingBag size={18} />
                    <span>Explore Monthly FMCG Store</span>
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

                  <button className="topic-nav-item-btn active" onClick={() => onNavigate('earning-depth')}>
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
                  <Gift size={13} />
                  <span>ZERO DEPOSIT REQUIRED</span>
                </div>
                <h4 className="promo-card-title">Turn Monthly Grocery Into Income</h4>
                <p className="promo-card-desc">
                  Start your 20-level journey today. Free registration for all Indian consumers.
                </p>
                <button className="btn-promo-action" onClick={onOpenAuth}>
                  <span>Join Free Today</span>
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
