import React from 'react';
import { 
  Home, ChevronRight, Sparkles, HeartHandshake, ShieldCheck, 
  Coins, ArrowRight, Smartphone, Layers, ShoppingBag, 
  Award, Heart, Users, CheckCircle2, TrendingUp
} from 'lucide-react';

export const WomenEmpowermentPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <span className="breadcrumb-current">Women & Homemaker Dignity</span>
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
              Women & Homemaker Financial Dignity
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                Work From Home • Zero Investment • Transform Kitchen Bills into Royalties
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              Empowering Indian homemakers and women to transform their everyday household grocery expertise into respected, independent recurring passive income from the comfort of their homes.
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
                  src="/images/topic-women-meeting.jpg" 
                  alt="Indian Women & Homemakers Digital Work From Home" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Heart size={16} className="text-gold" />
                  <span>Self-Reliance & Financial Respect for Homemakers</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">From Kitchen Manager to Chief Earning Officer</h2>
                <p className="topic-overview-text">
                  In every Indian household, it is the homemaker who meticulously plans the kitchen budget, selects the best brands of Atta, Dal, Oil, and Spices, and ensures the family's health and wellbeing. Yet, her immense contribution rarely yields independent personal financial savings.
                </p>
                <p className="topic-overview-text">
                  <strong>KharchDaan changes this narrative completely.</strong> We give every homemaker the power to convert those mandatory monthly ration expenses into personal bank savings and recurring 20-level royalties. With zero startup capital, zero inventory storage at home, and flexible mobile sharing, over 65% of our top rank holders across India are proud women building financial freedom from their smartphones.
                </p>

                {/* 3 Step Homemaker Journey Visual */}
                <div className="homemaker-steps-grid">
                  <div className="homemaker-step-card">
                    <div className="homemaker-step-num">1</div>
                    <h4>Shop Routine Ration</h4>
                    <p>Continue buying the brands your family already loves (Fortune, Aashirvaad, Tata) at fair discounts with up to 100% cashback.</p>
                  </div>

                  <div className="homemaker-step-card">
                    <div className="homemaker-step-num">2</div>
                    <h4>Share with 3 Friends</h4>
                    <p>Share the KharchDaan benefits with sisters, relatives, or neighbours via WhatsApp during your leisure afternoon hours.</p>
                  </div>

                  <div className="homemaker-step-card">
                    <div className="homemaker-step-num">3</div>
                    <h4>Enjoy Direct Bank Royalties</h4>
                    <p>Receive recurring monthly royalties and cashbacks transferred directly to your personal bank account or UPI wallet.</p>
                  </div>
                </div>

                {/* 4 Core Pillars */}
                <h3 className="topic-pillars-title">Why Homemakers Excel at KharchDaan</h3>
                <div className="topic-pillars-grid">
                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Smartphone size={20} />
                    </div>
                    <h4 className="pillar-title">100% Work From Home</h4>
                    <p className="pillar-desc">Manage your business entirely from your smartphone without ever stepping away from family care.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <ShieldCheck size={20} />
                    </div>
                    <h4 className="pillar-title">Zero Financial Risk</h4>
                    <p className="pillar-desc">No joining fee, no expensive demo kit, and zero money locked up in unsold stock.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Award size={20} />
                    </div>
                    <h4 className="pillar-title">Family Pride & Dignity</h4>
                    <p className="pillar-desc">Contribute meaningfully to family finances, children's education funds, and emergency savings.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Users size={20} />
                    </div>
                    <h4 className="pillar-title">Supportive Sisterhood</h4>
                    <p className="pillar-desc">Join daily online training sessions, mentorship circles, and celebrate peer recognition milestones.</p>
                  </div>
                </div>

                {/* Table */}
                <h3 className="topic-table-title">Homemaker Monthly Savings & Earning Example</h3>
                <div className="topic-breakdown-table-wrap">
                  <table className="topic-breakdown-table">
                    <thead>
                      <tr>
                        <th>Activity Milestone</th>
                        <th>Network Effort</th>
                        <th>Monthly Household Volume</th>
                        <th>Earning Mechanism</th>
                        <th>Monthly Income Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Own Family Ration</strong></td>
                        <td>Personal Kitchen</td>
                        <td>₹5,000 / mo Grocery</td>
                        <td><span className="badge-split">Direct Cashback</span></td>
                        <td><strong className="text-orange">₹600 - ₹1,200 Savings</strong></td>
                      </tr>
                      <tr>
                        <td><strong>3 Homemaker Friends</strong></td>
                        <td>Tier 1 Frontline</td>
                        <td>₹15,000 Combined</td>
                        <td><span className="badge-split">1:3 Matrix Bonus</span></td>
                        <td><strong className="text-orange">₹1,500 / mo</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Neighbourhood Circle</strong></td>
                        <td>Tiers 2 & 3 Matrix</td>
                        <td>₹1,20,000 Volume</td>
                        <td><span className="badge-split">Recurring Royalties</span></td>
                        <td><strong className="text-orange">₹8,000 - ₹18,000 / mo</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Silver Leader Rank</strong></td>
                        <td>Expanded Community</td>
                        <td>₹3,00,000+ Volume</td>
                        <td><span className="badge-split">Royalty Pool Dividend</span></td>
                        <td><strong className="text-orange">₹30,000+ / mo</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip Box */}
                <div className="topic-pro-tip-box">
                  <Sparkles size={22} className="text-orange" />
                  <div>
                    <strong>Sisterhood Mentorship Tip</strong>
                    <p>Start simply by showing a friend the cashback you received on your last grocery bill. Genuine personal savings are the most powerful recommendation in any Indian neighbourhood!</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="topic-article-cta-row">
                  <button className="btn-primary btn-large" onClick={onOpenAuth}>
                    <Sparkles size={18} />
                    <span>Join Free as an Empowered Homemaker</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-secondary-outline btn-large" onClick={onShopClick}>
                    <ShoppingBag size={18} />
                    <span>Browse Family Grocery Store</span>
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

                  <button className="topic-nav-item-btn active" onClick={() => onNavigate('women-empowerment')}>
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
                  <span>WOMEN LEADERSHIP</span>
                </div>
                <h4 className="promo-card-title">Your Household, Your Business</h4>
                <p className="promo-card-desc">
                  Start your home business with zero fee. 100% safe, verified, and backed by Geeta Sevashram.
                </p>
                <button className="btn-promo-action" onClick={onOpenAuth}>
                  <span>Register Free from Mobile</span>
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
