import React from 'react';
import { 
  Home, ChevronRight, Sparkles, Gift, ShieldCheck, 
  Coins, ArrowRight, ShoppingBag, CheckCircle2, PackageCheck, 
  Layers, Percent, Truck, HelpCircle, Award, Star, Flame, Zap
} from 'lucide-react';

export const FamilyGroceryHamperPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <span className="breadcrumb-link" onClick={() => onNavigate('products')}>Special Deals</span>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Monthly Family Grocery Hamper</span>
          </div>

          <div className="topic-top-badge-row">
            <div className="topic-foundation-pill">
              <span className="pill-om-symbol">✨</span>
              <span>MOST POPULAR FAMILY SAVINGS COMBO</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          <div className="topic-hero-header-box">
            <h1 className="topic-hero-title">
              Monthly Family Grocery Hamper & Mega PV Boost
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                All-In-One Kitchen Essentials • ₹800+ Direct Savings • Triple PV Point Bonus • Doorstep Delivered
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              Our crown jewel value bundle designed for Indian families of 4 to 6 members. Combines top-grade Aashirvaad Atta, Fortune Oil, Tata Tea Gold, Daawat Basmati Rice, Maggi, Vim, and Surf Excel into one heavily discounted luxury hamper box with explosive 20-level matrix PV yield.
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
                  src="/images/family-grocery-hamper.jpg" 
                  alt="Deluxe Monthly Family Grocery Hamper with Branded Essentials" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Flame size={16} className="text-gold" />
                  <span>#1 Best Selling Member Hamper of the Month</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">The Ultimate All-In-One Kitchen & Home Care Solution</h2>
                <p className="topic-overview-text">
                  Instead of placing multiple separate orders and paying varied delivery surcharges, the <strong>KharchDaan Monthly Family Grocery Hamper</strong> bundles every staple your family consumes in a month into a single, beautifully packed, tamper-proof crate.
                </p>
                <p className="topic-overview-text">
                  Because we bundle these items at high institutional volume directly from master brands, we negotiate the lowest possible rates and pass 100% of the cost savings and PV commissions back into your wallet and downline team.
                </p>

                {/* 4 Feature Pillars Grid */}
                <div className="topic-features-grid">
                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box orange">
                      <Percent size={22} />
                    </div>
                    <h4>Massive MRP Discounts</h4>
                    <p>Get up to 28% off retail MRP compared to buying these 15+ daily items individually at neighborhood supermarkets.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box gold">
                      <Zap size={22} />
                    </div>
                    <h4>Triple PV Boost Multiplier</h4>
                    <p>Hamper purchases carry 3x bonus Point Volume, instantly accelerating your team matrix rank and weekly dividend share.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box green">
                      <ShieldCheck size={22} />
                    </div>
                    <h4>100% Guaranteed Brand Names</h4>
                    <p>ITC Aashirvaad, Adani Fortune, Tata Consumer, Daawat, Nestle, Parle, Reckitt, and HUL in sealed original factory boxes.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box blue">
                      <Truck size={22} />
                    </div>
                    <h4>Free Priority Fast Freight</h4>
                    <p>Dispatched in heavy-duty moisture-proof wooden-finish crates directly to your front door with zero delivery fees.</p>
                  </div>
                </div>

                {/* What's Inside Hamper Visual Strip */}
                <h3 className="topic-mid-title">What's Inside the Family Grocery Hamper?</h3>
                
                <div className="topic-staples-showcase-grid">
                  <div className="staple-card">
                    <img src="/images/aashirvaad-atta.jpg" alt="Aashirvaad Shudh Atta 10kg" />
                    <div className="staple-card-content">
                      <h5>Aashirvaad Atta (10kg) + Basmati Rice (5kg)</h5>
                      <span>100% MP Shudh Chakki whole wheat flour & Daawat long grain basmati</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/fortune-oil.jpg" alt="Fortune Sunlite Oil 5L" />
                    <div className="staple-card-content">
                      <h5>Fortune Sunflower Oil (5L) + Tata Salt</h5>
                      <span>Refined Vitamin A & D fortified edible oil + vacuum evaporated iodized salt</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/surf-excel.jpg" alt="Surf Excel & Tea" />
                    <div className="staple-card-content">
                      <h5>Tata Tea Gold (500g) + Surf Excel (2kg)</h5>
                      <span>Rich aroma CTC tea blend + Matic detergent & Vim dishwash gel kit</span>
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
                        <strong>Can I swap items if my family prefers Mustard oil instead of Sunflower?</strong>
                      </div>
                      <p className="faq-answer">
                        Yes! During checkout, you can select custom oil variants (Fortune Kachi Ghani Mustard, Ricebran, or Groundnut) with zero additional surcharge.
                      </p>
                    </div>

                    <div className="faq-item">
                      <div className="faq-question">
                        <HelpCircle size={16} className="text-orange" />
                        <strong>How many PV points does this hamper generate for my matrix downline?</strong>
                      </div>
                      <p className="faq-answer">
                        The Monthly Family Grocery Hamper awards 500 High-Yield PV points that flow through all 20 tiers of your direct downline organization.
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
                  <span>MEGA VALUE HAMPER</span>
                </div>
                <h3>Monthly Deluxe Family Hamper</h3>
                <p>15+ Essentials: Atta 10kg + Oil 5L + Rice 5kg + Dals 3kg + Tea + Spices + Cleaners + 500 Bonus PV.</p>
                
                <div className="sidebar-price-row">
                  <span className="price-current">₹2,499</span>
                  <span className="price-old">₹3,450</span>
                  <span className="price-discount">28% OFF</span>
                </div>

                <button 
                  className="sidebar-action-btn primary"
                  onClick={() => onNavigate('products', 'Grocery')}
                >
                  <ShoppingBag size={16} />
                  <span>Order Monthly Hamper Now</span>
                </button>
              </div>

              <div className="sidebar-perks-list">
                <h4>Hamper Exclusive Benefits</h4>
                <ul>
                  <li><CheckCircle2 size={15} className="text-green" /> Free Expedited Doorstep Delivery</li>
                  <li><CheckCircle2 size={15} className="text-green" /> 500 High-Yield Matrix PV Bonus</li>
                  <li><CheckCircle2 size={15} className="text-green" /> 100% Authentic Brand Packaging</li>
                  <li><CheckCircle2 size={15} className="text-green" /> Instant UPI Cashback Credit</li>
                </ul>
              </div>

              <div className="sidebar-help-cta">
                <p>Need corporate gifting hampers in bulk?</p>
                <button 
                  className="sidebar-help-link"
                  onClick={() => onNavigate('contact')}
                >
                  Contact Corporate Hamper Desk ➔
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
              <h2>One Hamper. Maximum Family Savings. Limitless Income.</h2>
              <p>Join over 25,000 smart Indian families who order the Monthly Grocery Hamper every month.</p>
            </div>
            <div className="bottom-cta-actions">
              <button 
                className="btn-cta-primary"
                onClick={() => onNavigate('products', 'Grocery')}
              >
                <span>Order Family Hamper</span>
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
