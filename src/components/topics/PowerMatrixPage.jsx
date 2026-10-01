import React from 'react';
import { 
  Home, ChevronRight, Sparkles, TrendingUp, ShieldCheck, 
  Coins, ArrowRight, Users, Zap, CheckCircle2, ShoppingBag, 
  HelpCircle, Layers, Award, Network, ArrowDown
} from 'lucide-react';

export const PowerMatrixPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <span className="breadcrumb-link" onClick={() => onNavigate('direct-selling-topic', 'matrix-system')}>Direct Selling</span>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-current">1:3 Power Matrix System</span>
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
              1:3 Automated Power Placement Matrix
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                No Binary Leg Balancing • Automated Downline Spillover • Pure Team Velocity
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              Discover how KharchDaan’s breakthrough 1:3 placement matrix guarantees that every 4th, 5th, or subsequent referral spills over directly to accelerate your downline's grocery earnings.
            </p>
          </div>

        </div>
      </section>

      {/* 2. MAIN CONTENT WITH MULTIPLE IMAGES & DIAGRAMS */}
      <section className="topic-main-content-section">
        <div className="container">
          
          <div className="topic-layout-grid">
            
            {/* Left Main Detailed Article */}
            <div className="topic-article-main-card">
              
              {/* Primary Visual Banner */}
              <div className="topic-featured-photo-wrapper">
                <img 
                  src="/images/hiw-step3-network.jpg" 
                  alt="1:3 Power Matrix Team Network" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Network size={16} className="text-gold" />
                  <span>1:3 Dynamic Duplication Architecture</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">How the 1:3 Matrix Works</h2>
                <p className="topic-overview-text">
                  Traditional network marketing systems force distributors to maintain rigid binary structures with difficult "left-leg vs right-leg" volume balancing. If one leg grows and the other lags, you earn nothing.
                </p>
                <p className="topic-overview-text">
                  <strong>KharchDaan eliminates binary frustration forever.</strong> In our 1:3 Power Matrix, your frontline consists of just <strong>3 direct node spots</strong>. Once those 3 spots are filled by active consumer families, every additional direct referral you or your upline leaders introduce <em>automatically spills over</em> into the next available slot in your team's tree.
                </p>

                {/* Visual Tree Diagram Illustration */}
                <div className="matrix-visual-diagram-card">
                  <div className="matrix-diagram-header">
                    <Sparkles size={16} className="text-orange" />
                    <h4>1:3 Auto-Spillover Geometric Duplication</h4>
                  </div>
                  <div className="matrix-nodes-flow">
                    <div className="matrix-node root-node">
                      <div className="node-circle gold">YOU</div>
                      <span className="node-caption">Frontline Sponsor</span>
                    </div>

                    <div className="matrix-tree-connector-lines">
                      <div className="connector-line left" />
                      <div className="connector-line middle" />
                      <div className="connector-line right" />
                    </div>

                    <div className="matrix-tier-row tier-1">
                      <div className="matrix-node tier-child">
                        <div className="node-circle orange">1</div>
                        <span>Direct 1</span>
                      </div>
                      <div className="matrix-node tier-child">
                        <div className="node-circle orange">2</div>
                        <span>Direct 2</span>
                      </div>
                      <div className="matrix-node tier-child">
                        <div className="node-circle orange">3</div>
                        <span>Direct 3</span>
                      </div>
                    </div>

                    <div className="matrix-spillover-indicator">
                      <ArrowDown size={18} className="text-orange animate-bounce" />
                      <span className="spillover-badge">4th & 5th Referrals Automatically Spill Over into Tier 2 (9 Nodes)</span>
                    </div>
                  </div>
                </div>

                {/* 4 Core Pillars */}
                <h3 className="topic-pillars-title">Key Architectural Advantages</h3>
                <div className="topic-pillars-grid">
                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Users size={20} />
                    </div>
                    <h4 className="pillar-title">Only 3 Direct Nodes</h4>
                    <p className="pillar-desc">You only need 3 active household consumer families on your frontline to unlock deep cascading matrix points.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <TrendingUp size={20} />
                    </div>
                    <h4 className="pillar-title">100% Team Synergy</h4>
                    <p className="pillar-desc">Senior leader recruitment actively feeds open downline positions, preventing beginners from feeling isolated.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <Zap size={20} />
                    </div>
                    <h4 className="pillar-title">Zero Leg Balancing</h4>
                    <p className="pillar-desc">No ratio matching or leg penalties. Every verified grocery order generated in your matrix pays royalties immediately.</p>
                  </div>

                  <div className="topic-pillar-box">
                    <div className="pillar-icon-circle">
                      <ShieldCheck size={20} />
                    </div>
                    <h4 className="pillar-title">Everyday FMCG Repurchase</h4>
                    <p className="pillar-desc">Because points come from daily edible groceries, monthly repurchase is natural, organic, and guaranteed.</p>
                  </div>
                </div>

                {/* Compensation Table */}
                <h3 className="topic-table-title">Geometric Team Projection Matrix</h3>
                <div className="topic-breakdown-table-wrap">
                  <table className="topic-breakdown-table">
                    <thead>
                      <tr>
                        <th>Tier Depth</th>
                        <th>Max Team Capacity</th>
                        <th>Avg. Grocery Turnover</th>
                        <th>Commission Split</th>
                        <th>Monthly Projected Income</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Tier 1</strong></td>
                        <td>3 Families</td>
                        <td>₹15,000 / mo</td>
                        <td><span className="badge-split">10% Direct Tier</span></td>
                        <td><strong className="text-orange">₹1,500 / mo</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Tier 2</strong></td>
                        <td>9 Families</td>
                        <td>₹45,000 / mo</td>
                        <td><span className="badge-split">5% Downline Tier</span></td>
                        <td><strong className="text-orange">₹2,250 / mo</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Tier 3</strong></td>
                        <td>27 Families</td>
                        <td>₹1,35,000 / mo</td>
                        <td><span className="badge-split">4% Deep Royalty</span></td>
                        <td><strong className="text-orange">₹5,400 / mo</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Tier 4</strong></td>
                        <td>81 Families</td>
                        <td>₹4,05,000 / mo</td>
                        <td><span className="badge-split">3% Matrix Royalty</span></td>
                        <td><strong className="text-orange">₹12,150 / mo</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Tier 5</strong></td>
                        <td>243 Families</td>
                        <td>₹12,15,000 / mo</td>
                        <td><span className="badge-split">2% National Pool</span></td>
                        <td><strong className="text-orange">₹24,300 / mo</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip Box */}
                <div className="topic-pro-tip-box">
                  <Sparkles size={22} className="text-orange" />
                  <div>
                    <strong>Pro Matrix Strategy</strong>
                    <p>Focus on onboarding 3 genuine families who shop for monthly groceries (Atta, Oil, Ghee, Tea). When you teach them to do the same, your 1:3 matrix duplicates automatically without any forced selling pressure.</p>
                  </div>
                </div>

                {/* Call to Actions */}
                <div className="topic-article-cta-row">
                  <button className="btn-primary btn-large" onClick={onOpenAuth}>
                    <Sparkles size={18} />
                    <span>Join Free & Lock Your 1:3 Spot</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-secondary-outline btn-large" onClick={onShopClick}>
                    <ShoppingBag size={18} />
                    <span>Browse Grocery Store</span>
                  </button>
                </div>

              </div>

            </div>

            {/* Right Sidebar: Topics Navigator */}
            <div className="topic-sidebar-col">
              
              <div className="topic-navigator-card">
                <div className="nav-card-header">
                  <Layers size={18} className="text-orange" />
                  <h3>Direct Selling Knowledge Hub</h3>
                </div>
                <p className="nav-card-desc">
                  Explore all dedicated pages in our direct selling compensation architecture:
                </p>

                <div className="topics-nav-list">
                  <button className="topic-nav-item-btn active" onClick={() => onNavigate('power-matrix')}>
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

              {/* Free Registration Card */}
              <div className="topic-promo-sidebar-card">
                <div className="promo-badge-tag">
                  <Award size={13} />
                  <span>ZERO KIT BARRIER</span>
                </div>
                <h4 className="promo-card-title">Join Free in Under 30 Seconds</h4>
                <p className="promo-card-desc">
                  Start your matrix right now. No joining fee, no starter kit, no investment required.
                </p>
                <button className="btn-promo-action" onClick={onOpenAuth}>
                  <span>Create Free Account</span>
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
