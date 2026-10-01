import React from 'react';
import { 
  Home, ChevronRight, Sparkles, TrendingUp, ShieldCheck, 
  Coins, ArrowRight, ShoppingBag, CheckCircle2, Coffee, 
  Layers, Percent, Truck, HelpCircle, Award, Star, Utensils
} from 'lucide-react';

export const FoodBeveragesPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <button className="breadcrumb-link" onClick={() => onNavigate('products', 'Food')}>Daily Groceries</button>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Food & Beverages</span>
          </div>

          <div className="topic-top-badge-row">
            <div className="topic-foundation-pill">
              <span className="pill-om-symbol">☕</span>
              <span>100% ORIGINAL TASTE & REFRESHMENT</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          <div className="topic-hero-header-box">
            <h1 className="topic-hero-title">
              Packaged Food, Beverages & Family Snacks
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                Tata Tea Gold • Cadbury Dairy Milk • Parle-G & Britannia • Nescafe Coffee • Real Juices
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              Elevate every morning chai break and family snack time with 100% genuine packaged foods, premium teas, coffees, chocolates, and cookies—all generating instant cashbacks and compounding network point volume.
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
                  src="/images/tata-tea.jpg" 
                  alt="Tata Tea Gold and Premium Packaged Beverages" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Coffee size={16} className="text-gold" />
                  <span>Fresh Harvest Leaf Quality Standard</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">Turn Daily Chai & Snacks into Recurring Passive Cash</h2>
                <p className="topic-overview-text">
                  In India, no morning begins without hot aromatic chai or filter coffee, and no evening is complete without family biscuits, namkeens, and chocolates. These are non-negotiable household delights consumed day after day by over 140 crore citizens.
                </p>
                <p className="topic-overview-text">
                  With <strong>KharchDaan Food & Beverages</strong>, you obtain direct factory-sealed products from India’s trusted titans—Tata Tea, Cadbury Mondelez, Nestle, Parle, Britannia, and Haldiram’s—at rates lower than local retail, with high PV earnings distributed up to 20 levels.
                </p>

                {/* 4 Feature Pillars Grid */}
                <div className="topic-features-grid">
                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box saffron">
                      <Coffee size={22} />
                    </div>
                    <h4>Master Tea & Coffee Blends</h4>
                    <p>Direct garden-fresh Assam CTC teas, Darjeeling blends, and rich Arabica/Robusta roasted coffees from top national brands.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box orange">
                      <ShieldCheck size={22} />
                    </div>
                    <h4>Zero Counterfeit Guarantee</h4>
                    <p>All chocolates, snacks, and confectionery originate straight from accredited FMCG hubs with verified batch expiry dates.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box green">
                      <TrendingUp size={22} />
                    </div>
                    <h4>High-Frequency PV Yield</h4>
                    <p>Fast-moving snacks and beverages ensure your team re-orders multiple times per month, keeping your PV commission pipeline overflowing.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box gold">
                      <Utensils size={22} />
                    </div>
                    <h4>Party & Family Combo Bundles</h4>
                    <p>Exclusive mega snack boxes, festive chocolate packs, and breakfast cereal hampers designed for maximum member savings.</p>
                  </div>
                </div>

                {/* Popular Food Categories Visual Strip */}
                <h3 className="topic-mid-title">Top Food & Beverage Categories</h3>
                
                <div className="topic-staples-showcase-grid">
                  <div className="staple-card">
                    <img src="/images/tata-tea.jpg" alt="Tea & Coffee" />
                    <div className="staple-card-content">
                      <h5>Tea, Coffee & Malt Drinks</h5>
                      <span>Tata Tea Gold, Nescafe Classic, Bournvita & Horlicks</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/cadbury-dairy-milk.jpg" alt="Chocolates & Confectionery" />
                    <div className="staple-card-content">
                      <h5>Chocolates & Sweets</h5>
                      <span>Cadbury Dairy Milk Silk, 5-Star, KitKat & Haldiram's Mithai</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/hiw-step2-shopping.jpg" alt="Biscuits & Snacks" />
                    <div className="staple-card-content">
                      <h5>Biscuits, Cookies & Namkeen</h5>
                      <span>Parle-G, Good Day, Maggi 2-Minute Noodles, Bhujia & Chips</span>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="topic-faq-section">
                  <h3 className="topic-faq-heading">Frequently Asked Questions</h3>
                  
                  <div className="faq-accordion-box">
                    <div className="faq-item">
                      <div className="faq-question">
                        <HelpCircle size={16} className="text-orange" />
                        <strong>What brands of snacks and beverages are available?</strong>
                      </div>
                      <p className="faq-answer">
                        We offer authentic products from Tata Consumer Products, Cadbury Mondelez, Nestle India, Britannia, Parle, PepsiCo, Coca-Cola, Dabur, and Bikaji.
                      </p>
                    </div>

                    <div className="faq-item">
                      <div className="faq-question">
                        <HelpCircle size={16} className="text-orange" />
                        <strong>How quickly do beverages and snack items get delivered?</strong>
                      </div>
                      <p className="faq-answer">
                        Orders are dispatched within 24 hours via express doorstep delivery, or you can pick them up instantly from your nearest authorized KharchDaan Kirana store partner.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Side Action Panel */}
            <div className="topic-sidebar-card">
              
              <div className="sidebar-deal-box">
                <div className="sidebar-deal-badge">
                  <Sparkles size={13} />
                  <span>TEA TIME SPECIAL DEAL</span>
                </div>
                <h3>Family Evening Snacks Combo</h3>
                <p>Tata Tea Gold (500g) + Good Day Cookies 4-pack + Cadbury Celebration Box with 120 Extra PV bonus.</p>
                
                <div className="sidebar-price-row">
                  <span className="price-current">₹599</span>
                  <span className="price-old">₹780</span>
                  <span className="price-discount">23% OFF</span>
                </div>

                <button 
                  className="sidebar-action-btn primary"
                  onClick={() => onNavigate('products', 'Food')}
                >
                  <ShoppingBag size={16} />
                  <span>Shop Food & Beverages</span>
                </button>
              </div>

              <div className="sidebar-perks-list">
                <h4>KharchDaan Quality Promise</h4>
                <ul>
                  <li><CheckCircle2 size={15} className="text-green" /> 100% Brand Sealed Packaging</li>
                  <li><CheckCircle2 size={15} className="text-green" /> Fresh Batch & Extended Shelf-life</li>
                  <li><CheckCircle2 size={15} className="text-green" /> Multi-level Team PV Distribution</li>
                  <li><CheckCircle2 size={15} className="text-green" /> Direct UPI Cashback Eligible</li>
                </ul>
              </div>

              <div className="sidebar-help-cta">
                <p>Want to stock party snacks or office pantry?</p>
                <button 
                  className="sidebar-help-link"
                  onClick={() => onNavigate('contact')}
                >
                  Contact Our Corporate Desk ➔
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. BOTTOM CTA BANNER */}
      <section className="topic-bottom-cta-banner">
        <div className="container">
          <div className="bottom-cta-card">
            <div className="bottom-cta-content">
              <h2>Sip, Snack, and Grow Your Daily Wealth</h2>
              <p>Turn your family's favorite snacks into regular passive income with every cup of tea.</p>
            </div>
            <div className="bottom-cta-actions">
              <button 
                className="btn-cta-primary"
                onClick={() => onNavigate('products', 'Food')}
              >
                <span>Browse Food & Snacks</span>
                <ArrowRight size={16} />
              </button>
              <button 
                className="btn-cta-secondary"
                onClick={onOpenAuth}
              >
                <span>Register Free Account</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
