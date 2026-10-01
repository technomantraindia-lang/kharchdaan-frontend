import React from 'react';
import { 
  Home, ChevronRight, Sparkles, TrendingUp, ShieldCheck, 
  Coins, ArrowRight, ShoppingBag, CheckCircle2, Package, 
  Layers, Percent, Truck, HelpCircle, Award, Star
} from 'lucide-react';
import { FmcgTopicSidebar } from './FmcgTopicSidebar';

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

      {/* 2. MAIN CONTENT */}
      <section className="topic-main-content-section">
        <div className="container">
          
          <div className="topic-layout-grid">
            
            {/* Left Main Article */}
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

                {/* Table Breakdown */}
                <h3 className="topic-table-title">Monthly Kitchen Staples Price & PV Breakdown</h3>
                <div className="topic-breakdown-table-wrap">
                  <table className="topic-breakdown-table">
                    <thead>
                      <tr>
                        <th>Essential Item</th>
                        <th>Standard MRP</th>
                        <th>KharchDaan Member Price</th>
                        <th>Member Discount</th>
                        <th>Matrix Point Volume</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Aashirvaad Shudh Chakki Atta (10kg)</strong></td>
                        <td>₹475</td>
                        <td>₹395</td>
                        <td><span className="badge-split">17% OFF</span></td>
                        <td><strong className="text-orange">75 PV</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Fortune Sunlite Refined Oil (5L Jar)</strong></td>
                        <td>₹790</td>
                        <td>₹640</td>
                        <td><span className="badge-split">19% OFF</span></td>
                        <td><strong className="text-orange">110 PV</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Daawat Super Basmati Rice (5kg)</strong></td>
                        <td>₹650</td>
                        <td>₹510</td>
                        <td><span className="badge-split">22% OFF</span></td>
                        <td><strong className="text-orange">95 PV</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Tata Sampann Unpolished Toor Dal (2kg)</strong></td>
                        <td>₹360</td>
                        <td>₹290</td>
                        <td><span className="badge-split">20% OFF</span></td>
                        <td><strong className="text-orange">50 PV</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip Box */}
                <div className="topic-pro-tip-box">
                  <Sparkles size={22} className="text-orange" />
                  <div>
                    <strong>Pro Grocer Insight</strong>
                    <p>Setting up your monthly ration as a recurring scheduled basket automatically locks in additional subscriber discounts and provides regular weekly PV commissions without manual re-ordering!</p>
                  </div>
                </div>

                {/* Action CTA Row */}
                <div className="topic-article-cta-row">
                  <button className="btn-primary btn-large" onClick={() => onNavigate('products', 'Grocery')}>
                    <ShoppingBag size={18} />
                    <span>Shop Grocery & Staples</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-secondary-outline btn-large" onClick={onOpenAuth}>
                    <Sparkles size={18} />
                    <span>Register Free Account</span>
                  </button>
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
            <FmcgTopicSidebar 
              currentTopicId="grocery-staples"
              onNavigate={onNavigate}
              onOpenAuth={onOpenAuth}
              dealTitle="Monthly Kitchen Staples Bundle"
              dealDesc="Save ₹450+ on Atta + Oil + Dal + Rice combo pack with 150 Extra PV bonus."
              dealPrice="₹1,499"
              dealOldPrice="₹1,950"
              dealDiscount="23% OFF"
              dealActionText="Shop Grocery & Staples"
              dealCategory="Grocery"
            />

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
