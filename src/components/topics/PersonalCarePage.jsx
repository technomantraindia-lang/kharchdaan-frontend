import React from 'react';
import { 
  Home, ChevronRight, Sparkles, TrendingUp, ShieldCheck, 
  Coins, ArrowRight, ShoppingBag, CheckCircle2, Sparkle, 
  Layers, Percent, Truck, HelpCircle, Award, Star
} from 'lucide-react';
import { FmcgTopicSidebar } from './FmcgTopicSidebar';

export const PersonalCarePage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <button className="breadcrumb-link" onClick={() => onNavigate('products', 'Beauty')}>Daily Groceries</button>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Personal & Household Care</span>
          </div>

          <div className="topic-top-badge-row">
            <div className="topic-foundation-pill">
              <span className="pill-om-symbol">🧼</span>
              <span>100% HYGIENE & CLEANING PURITY</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          <div className="topic-hero-header-box">
            <h1 className="topic-hero-title">
              Personal Care, Hygiene & Household Cleaning
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                Surf Excel Matic • Dettol Antiseptic • Vim Dishwash • Colgate & Oral-B • Harpic Disinfectant
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              Keep your home sparkling clean and your loved ones protected with India's leading personal hygiene, laundry detergents, floor cleaners, and oral care products at unmatched value rates.
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
                  src="/images/surf-excel.jpg" 
                  alt="Surf Excel Matic and Household Cleaners" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Sparkle size={16} className="text-gold" />
                  <span>Maximum Hygiene & Stain Removal Benchmark</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">Clean Home, Protected Family & Compounding Prosperity</h2>
                <p className="topic-overview-text">
                  Detergents, dishwash bars, floor disinfectants, bath soaps, and shampoos are regular monthly requirements for every household in the country. They are used daily and replaced monthly without fail.
                </p>
                <p className="topic-overview-text">
                  Through <strong>KharchDaan Personal & Household Care</strong>, you purchase genuine Hindustan Unilever (HUL), Reckitt Benckiser, Colgate-Palmolive, and Godrej Consumer products with verified purity certificates and zero duplicate risk. Every bar of soap and bucket of detergent earns recurring points for your matrix team.
                </p>

                {/* 4 Feature Pillars Grid */}
                <div className="topic-features-grid">
                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box pink">
                      <ShieldCheck size={22} />
                    </div>
                    <h4>100% Tamper-Proof Stock</h4>
                    <p>Counterfeits are common in local open markets. KharchDaan guarantees direct factory-sealed products from original FMCG manufacturers.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box blue">
                      <Percent size={22} />
                    </div>
                    <h4>Mega Value Refill Packs</h4>
                    <p>Get bulk savings on 2kg/4kg detergent refills, 5L handwash gallons, and multi-soap bundle packs at deep wholesale discounts.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box green">
                      <TrendingUp size={22} />
                    </div>
                    <h4>High-Repeat PV Volume</h4>
                    <p>Household cleaning products have mandatory repeat monthly cycles, providing your 20-level matrix with steady passive turnover.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box gold">
                      <Truck size={22} />
                    </div>
                    <h4>Safe Doorstep Delivery</h4>
                    <p>Leak-proof, heavy-duty packaging delivered right to your apartment doorstep or available for instant pickup from partner Kiranas.</p>
                  </div>
                </div>

                {/* Popular Care Categories Visual Strip */}
                <h3 className="topic-mid-title">Top Household & Personal Care Categories</h3>
                
                <div className="topic-staples-showcase-grid">
                  <div className="staple-card">
                    <img src="/images/surf-excel.jpg" alt="Laundry & Fabric Care" />
                    <div className="staple-card-content">
                      <h5>Laundry & Detergents</h5>
                      <span>Surf Excel Matic, Ariel, Rin Bar, Comfort Conditioner</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/dettol-handwash.jpg" alt="Hygiene & Disinfectants" />
                    <div className="staple-card-content">
                      <h5>Hygiene & Handwash</h5>
                      <span>Dettol Antiseptic, Lifebuoy Handwash, Savlon Soap</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/hiw-step2-shopping.jpg" alt="Oral Care & Dishwash" />
                    <div className="staple-card-content">
                      <h5>Kitchen Cleaners & Oral Care</h5>
                      <span>Vim Gel, Colgate MaxFresh, Sensodyne & Lizol</span>
                    </div>
                  </div>
                </div>

                {/* Table Breakdown */}
                <h3 className="topic-table-title">Personal Care & Cleaning Savings Matrix</h3>
                <div className="topic-breakdown-table-wrap">
                  <table className="topic-breakdown-table">
                    <thead>
                      <tr>
                        <th>Product Bundle</th>
                        <th>Standard MRP</th>
                        <th>KharchDaan Member Price</th>
                        <th>Savings</th>
                        <th>Point Volume (PV)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Surf Excel Matic Top Load (2kg Refill)</strong></td>
                        <td>₹430</td>
                        <td>₹345</td>
                        <td><span className="badge-split">20% OFF</span></td>
                        <td><strong className="text-orange">60 PV</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Dettol Liquid Handwash Refill (1.5L Mega Pack)</strong></td>
                        <td>₹280</td>
                        <td>₹215</td>
                        <td><span className="badge-split">23% OFF</span></td>
                        <td><strong className="text-orange">40 PV</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Vim Dishwash Gel (750ml) + Scrubber Set</strong></td>
                        <td>₹175</td>
                        <td>₹135</td>
                        <td><span className="badge-split">23% OFF</span></td>
                        <td><strong className="text-orange">25 PV</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Colgate Strong Teeth (500g Value Saver)</strong></td>
                        <td>₹240</td>
                        <td>₹185</td>
                        <td><span className="badge-split">23% OFF</span></td>
                        <td><strong className="text-orange">35 PV</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip Box */}
                <div className="topic-pro-tip-box">
                  <Sparkles size={22} className="text-orange" />
                  <div>
                    <strong>Pro Hygiene Tip</strong>
                    <p>Switching your household laundry and dishwashing products to KharchDaan generates regular 160+ monthly PV without adding a single rupee of extra overhead to your household budget!</p>
                  </div>
                </div>

                {/* Action CTA Row */}
                <div className="topic-article-cta-row">
                  <button className="btn-primary btn-large" onClick={() => onNavigate('products', 'Beauty')}>
                    <ShoppingBag size={18} />
                    <span>Shop Personal & Cleaning</span>
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
                        <strong>How do I know these household products are 100% genuine?</strong>
                      </div>
                      <p className="faq-answer">
                        KharchDaan enforces an absolute direct-supply chain from verified FMCG master distribution hubs with intact manufacturer QR batch codes and tamper seals.
                      </p>
                    </div>

                    <div className="faq-item">
                      <div className="faq-question">
                        <HelpCircle size={16} className="text-orange" />
                        <strong>Can I order bulk cleaning supplies for housing societies or institutions?</strong>
                      </div>
                      <p className="faq-answer">
                        Yes! We have institutional bundle packs for housing societies, offices, and large joint families with heavy additional PV bonuses.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Side Action Panel */}
            <FmcgTopicSidebar 
              currentTopicId="personal-household-care"
              onNavigate={onNavigate}
              onOpenAuth={onOpenAuth}
              dealTitle="Monthly Household Hygiene Kit"
              dealDesc="Surf Excel 2kg + Dettol 750ml Refill + Vim Gel 500ml + Harpic 1L with 140 Extra PV bonus."
              dealPrice="₹749"
              dealOldPrice="₹990"
              dealDiscount="24% OFF"
              dealActionText="Shop Personal & Cleaning"
              dealCategory="Beauty"
            />

          </div>

        </div>
      </section>

      {/* 3. BOTTOM CTA BANNER */}
      <section className="topic-bottom-cta-banner">
        <div className="container">
          <div className="bottom-cta-card">
            <div className="bottom-cta-content">
              <h2>A Cleaner Home, A Wealthier Tomorrow</h2>
              <p>Switch your daily cleaning supplies to KharchDaan and watch your monthly rewards grow effortlessly.</p>
            </div>
            <div className="bottom-cta-actions">
              <button 
                className="btn-cta-primary"
                onClick={() => onNavigate('products', 'Beauty')}
              >
                <span>Browse Personal & Cleaning</span>
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
