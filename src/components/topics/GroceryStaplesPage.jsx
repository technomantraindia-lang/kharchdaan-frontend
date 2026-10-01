import React from 'react';
import { 
  Home, ChevronRight, Sparkles, TrendingUp, ShieldCheck, 
  Coins, ArrowRight, ShoppingBag, CheckCircle2, Package, 
  Layers, Percent, Truck, HelpCircle, Award, Star
} from 'lucide-react';

export const GroceryStaplesPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <button className="breadcrumb-link" onClick={() => onNavigate('products', 'Grocery')}>Daily Groceries</button>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Grocery & Staples</span>
          </div>

          <div className="topic-top-badge-row">
            <div className="topic-foundation-pill">
              <span className="pill-om-symbol">🌾</span>
              <span>100% GENUINE FMCG STAPLES</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          <div className="topic-hero-header-box">
            <h1 className="topic-hero-title">
              Fresh Grocery & Daily Kitchen Staples
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                Aashirvaad Atta • Fortune Oil • Premium Rice & Pulses • Guaranteed Purity & PV Points
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              Turn your family's mandatory monthly kitchen expenditure into recurring financial earnings. Shop genuine branded food grains, flours, edible oils, and pulses at wholesale-grade rates while building your 20-level downline wealth.
            </p>
          </div>

        </div>
      </section>

      {/* 2. MAIN CONTENT WITH MULTIPLE IMAGES & DETAILS */}
      <section className="topic-main-content-section">
        <div className="container">
          
          <div className="topic-layout-grid">
            
            {/* Left Main Detailed Article */}
            <div className="topic-article-main-card">
              
              {/* Primary Visual Banner */}
              <div className="topic-featured-photo-wrapper">
                <img 
                  src="/images/aashirvaad-atta.jpg" 
                  alt="Aashirvaad Shudh Chakki Atta and Grains" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Package size={16} className="text-gold" />
                  <span>Farm-Fresh Grain Purity Standard</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">Why Grocery & Staples Are The Backbone of KharchDaan</h2>
                <p className="topic-overview-text">
                  Unlike traditional MLM schemes that push overpriced, obscure health potions or unwanted gadgets, <strong>KharchDaan is anchored 100% on everyday essentials</strong>. Every Indian household buys Atta, Rice, Dal, Mustard & Sunflower Oil, Sugar, and Spices every single month.
                </p>
                <p className="topic-overview-text">
                  You are not spending a single rupee extra on new habits. You simply switch your buying source from anonymous local supermarkets to KharchDaan, gaining verified brand quality, zero middlemen markups, and instant point volume (PV) credited to your earnings wallet.
                </p>

                {/* 4 Feature Pillars Grid */}
                <div className="topic-features-grid">
                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box orange">
                      <ShieldCheck size={22} />
                    </div>
                    <h4>100% Factory-Sealed Genuine</h4>
                    <p>Direct supply from leading national brands including ITC Aashirvaad, Fortune, India Gate, Tata Sampann, and Catch Spices.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box blue">
                      <Percent size={22} />
                    </div>
                    <h4>Below Market MRP Pricing</h4>
                    <p>Enjoy direct distributor discounts on 5kg/10kg bulk bags and family ration hampers designed for maximum savings.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box green">
                      <TrendingUp size={22} />
                    </div>
                    <h4>Highest PV Point Yield</h4>
                    <p>Every staple item generates calculated Point Volume (PV) that cascades through all 20 levels of your family matrix.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box gold">
                      <Truck size={22} />
                    </div>
                    <h4>Doorstep & Kirana Pickup</h4>
                    <p>Choose between priority doorstep scheduled delivery or scan-and-pick from 5,000+ local neighborhood partner kirana stores.</p>
                  </div>
                </div>

                {/* Popular Staples Categories Visual Strip */}
                <h3 className="topic-mid-title">Top Essential Categories in Staples</h3>
                
                <div className="topic-staples-showcase-grid">
                  <div className="staple-card">
                    <img src="/images/aashirvaad-atta.jpg" alt="Flours & Grains" />
                    <div className="staple-card-content">
                      <h5>Flours & Grains</h5>
                      <span>Chakki Whole Wheat Atta, Maida, Besan, Suji & Poha</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/fortune-oil.jpg" alt="Edible Oils & Ghee" />
                    <div className="staple-card-content">
                      <h5>Edible Oils & Pure Ghee</h5>
                      <span>Refined Sunflower, Mustard Kachi Ghani, Ricebran & Cow Ghee</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/hiw-step2-shopping.jpg" alt="Pulses & Rice" />
                    <div className="staple-card-content">
                      <h5>Unpolished Dals & Rice</h5>
                      <span>Basmati Biryani Rice, Toor Dal, Moong, Chana & Rajma</span>
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
                        <strong>Are the brands identical to what we find in top grocery stores?</strong>
                      </div>
                      <p className="faq-answer">
                        Yes, absolutely! We only stock authentic, nationally certified FMCG brands like ITC, Adani Wilmar, Tata Consumer, and Fortune in their original factory tamper-proof packaging.
                      </p>
                    </div>

                    <div className="faq-item">
                      <div className="faq-question">
                        <HelpCircle size={16} className="text-orange" />
                        <strong>How do my monthly Atta and Oil purchases earn me income?</strong>
                      </div>
                      <p className="faq-answer">
                        Every purchase carries designated PV (Point Volume). As your referred families and your downline network purchase their daily ration, the system automatically distributes 20-level commissions directly into your bank account every week!
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
                  <span>MONTHLY RATION SAVER</span>
                </div>
                <h3>Monthly Kitchen Staples Bundle</h3>
                <p>Save ₹450+ on Atta + Oil + Dal + Rice combo pack with 150 Extra PV bonus.</p>
                
                <div className="sidebar-price-row">
                  <span className="price-current">₹1,499</span>
                  <span className="price-old">₹1,950</span>
                  <span className="price-discount">23% OFF</span>
                </div>

                <button 
                  className="sidebar-action-btn primary"
                  onClick={() => onNavigate('products', 'Grocery')}
                >
                  <ShoppingBag size={16} />
                  <span>Shop Grocery & Staples</span>
                </button>
              </div>

              <div className="sidebar-perks-list">
                <h4>KharchDaan Staples Guarantee</h4>
                <ul>
                  <li><CheckCircle2 size={15} className="text-green" /> 100% Original Brand Warranty</li>
                  <li><CheckCircle2 size={15} className="text-green" /> Free Delivery on orders ₹499+</li>
                  <li><CheckCircle2 size={15} className="text-green" /> Instant PV Credit on Checkout</li>
                  <li><CheckCircle2 size={15} className="text-green" /> UPI Cashback Eligible</li>
                </ul>
              </div>

              <div className="sidebar-help-cta">
                <p>Need wholesale or bulk society supply?</p>
                <button 
                  className="sidebar-help-link"
                  onClick={() => onNavigate('contact')}
                >
                  Contact Our Support Team ➔
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
              <h2>Start Saving on Every Grain You Cook</h2>
              <p>Join thousands of smart families turning grocery expenses into regular income.</p>
            </div>
            <div className="bottom-cta-actions">
              <button 
                className="btn-cta-primary"
                onClick={() => onNavigate('products', 'Grocery')}
              >
                <span>Browse All Staples</span>
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
