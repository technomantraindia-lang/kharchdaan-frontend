import React from 'react';
import { 
  Home, ChevronRight, Sparkles, TrendingUp, ShieldCheck, 
  Coins, ArrowRight, Award, Gift, Layers, Crown, Star, 
  ShoppingBag, CheckCircle2
} from 'lucide-react';

export const RoyaltyPoolPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <span className="breadcrumb-current">Leadership & Royalty Pool</span>
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
              Leadership & National Turnover Royalty Pool
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                Company Turnover Profit Share • Diamond & Crown Dividends • Non-Demotion Rank Policy
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              Earn lifetime monthly dividends directly from KharchDaan’s nationwide FMCG gross turnover as an active community leader and milestone achiever.
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
                  src="/images/topic-royalty-pool.jpg" 
                  alt="Leadership Royalty Pool & Recognition Summit" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Crown size={16} className="text-gold" />
                  <span>National Turnover Profit Sharing</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">National Turnover Sharing for True Leaders</h2>
                <p className="topic-overview-text">
                  In ordinary network marketing platforms, leaders are only compensated on their immediate downline volume. If another team in a different state grows massive sales, you get zero benefit.
                </p>
                <p className="topic-overview-text">
                  <strong>KharchDaan changes this fundamentally.</strong> We reserve a dedicated percentage of total national FMCG gross merchandise volume into the **Leadership Royalty Pool**. When leaders achieve Diamond or Crown milestones, they receive recurring monthly dividends funded by every grocery order placed across all of India!
                </p>

                {/* 4 Leadership Rank Cards */}
                <div className="royalty-ranks-grid">
                  <div className="rank-card silver">
                    <div className="rank-badge"><Star size={14} /> Silver Star</div>
                    <h4>1% Turnover Pool</h4>
                    <p>Achieved with 27 active consumer families. Monthly recurring profit split bonus.</p>
                  </div>

                  <div className="rank-card gold">
                    <div className="rank-badge"><Award size={14} /> Gold Leader</div>
                    <h4>2% Turnover Pool</h4>
                    <p>Achieved with 81 active families. Enhanced monthly pool dividends & leadership pins.</p>
                  </div>

                  <div className="rank-card diamond">
                    <div className="rank-badge"><Crown size={14} /> Diamond Crown</div>
                    <h4>3% Turnover Pool</h4>
                    <p>Achieved with 243 active families. High-tier executive dividend & national retreats.</p>
                  </div>

                  <div className="rank-card legend">
                    <div className="rank-badge"><Sparkles size={14} /> Platinum Legend</div>
                    <h4>5% Turnover Pool</h4>
                    <p>Top national leaders sharing peak national FMCG turnover profit dividends.</p>
                  </div>
                </div>

                {/* 4 Core Pillars */}
                <h3 className="topic-pillars-title">Core Principles of the Royalty Pool</h3>
                <div className="topic-pillars-grid">
                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <TrendingUp size={20} />
                    </div>
                    <h4 className="pillar-title">Nationwide Growth Benefit</h4>
                    <p className="pillar-desc">Profit from sales occurring across all states, even if not part of your personal direct tree.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <ShieldCheck size={20} />
                    </div>
                    <h4 className="pillar-title">Zero Demotion Protection</h4>
                    <p className="pillar-desc">Once you reach a leadership rank milestone, your dignity and status are permanently recognized.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Gift size={20} />
                    </div>
                    <h4 className="pillar-title">Annual Leadership Summits</h4>
                    <p className="pillar-desc">All-expenses-paid national conferences, strategic summits, and family recognition retreats.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Coins size={20} />
                    </div>
                    <h4 className="pillar-title">Automated Monthly Credit</h4>
                    <p className="pillar-desc">Calculated on the 1st of every month and transferred directly to your bank account or UPI wallet.</p>
                  </div>
                </div>

                {/* Breakdown Table */}
                <h3 className="topic-table-title">Leadership Milestone Breakdown Table</h3>
                <div className="topic-breakdown-table-wrap">
                  <table className="topic-breakdown-table">
                    <thead>
                      <tr>
                        <th>Leadership Rank</th>
                        <th>Matrix Active Count</th>
                        <th>Turnover Pool Share</th>
                        <th>Extra Privileges</th>
                        <th>Dividend Payout</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Silver Star</strong></td>
                        <td>27 Families</td>
                        <td><span className="badge-split">1% National Pool</span></td>
                        <td>Silver Certificate & Pin</td>
                        <td><strong className="text-orange">Monthly Bonus</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Gold Leader</strong></td>
                        <td>81 Families</td>
                        <td><span className="badge-split">2% National Pool</span></td>
                        <td>Regional Summit Invite</td>
                        <td><strong className="text-orange">Executive Dividend</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Diamond Crown</strong></td>
                        <td>243 Families</td>
                        <td><span className="badge-split">3% National Pool</span></td>
                        <td>VIP Annual Retreat</td>
                        <td><strong className="text-orange">Diamond Royalties</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Platinum Legend</strong></td>
                        <td>729+ Families</td>
                        <td><span className="badge-split">5% National Pool</span></td>
                        <td>Foundation Board Advisory</td>
                        <td><strong className="text-orange">Peak Company Share</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip Box */}
                <div className="topic-pro-tip-box">
                  <Sparkles size={22} className="text-orange" />
                  <div>
                    <strong>Pro Leadership Strategy</strong>
                    <p>Help your direct 3 frontline leaders achieve their own Silver rank. When they advance, your rank advances automatically into Gold and Diamond Crown pools!</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="topic-article-cta-row">
                  <button className="btn-primary btn-large" onClick={onOpenAuth}>
                    <Crown size={18} />
                    <span>Join Free & Aim for Leadership</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-secondary-outline btn-large" onClick={onShopClick}>
                    <ShoppingBag size={18} />
                    <span>Explore Products Store</span>
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

                  <button className="topic-nav-item-btn active" onClick={() => onNavigate('royalty-pool')}>
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
                  <Award size={13} />
                  <span>NATIONAL RECOGNITION</span>
                </div>
                <h4 className="promo-card-title">Lead Your City's Network</h4>
                <p className="promo-card-desc">
                  Start free today and be the pioneer leader in your district or township.
                </p>
                <button className="btn-promo-action" onClick={onOpenAuth}>
                  <span>Register Free Leader Account</span>
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
