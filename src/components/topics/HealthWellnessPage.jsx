import React from 'react';
import { 
  Home, ChevronRight, Sparkles, TrendingUp, ShieldCheck, 
  Coins, ArrowRight, ShoppingBag, CheckCircle2, HeartPulse, 
  Layers, Percent, Truck, HelpCircle, Award, Star, Leaf, Activity
} from 'lucide-react';

export const HealthWellnessPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <button className="breadcrumb-link" onClick={() => onNavigate('products', 'Health')}>Daily Groceries</button>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Health & Wellness</span>
          </div>

          <div className="topic-top-badge-row">
            <div className="topic-foundation-pill">
              <span className="pill-om-symbol">🌿</span>
              <span>100% AYURVEDIC PURITY & IMMUNITY</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          <div className="topic-hero-header-box">
            <h1 className="topic-hero-title">
              Health, Wellness & Authentic Ayurveda
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                Dabur Chyawanprash • Pure Raw Honey • Organic Turmeric • Ashwagandha & Herbal Immunity Teas
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              Safeguard your family's vitality with time-tested Vedic Ayurvedic essentials, certified raw forest honey, herbal immunity tonics, and premium daily dietary supplements—all generating generous point volume for your financial growth.
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
                  src="/images/health-wellness-ayurveda.jpg" 
                  alt="Authentic Indian Ayurvedic and Health Wellness Products" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Leaf size={16} className="text-gold" />
                  <span>Certified Ayurvedic Herbs & Pure Extracts</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">Holistic Indian Wellness Meets Financial Freedom</h2>
                <p className="topic-overview-text">
                  Health is true wealth (आरोग्यं परमं भाग्यम्). Today, every Indian family prioritizes natural immunity boosters, genuine Chyawanprash, unadulterated raw honey, organic turmeric, and pure herbal teas to stay fit and energetic.
                </p>
                <p className="topic-overview-text">
                  With <strong>KharchDaan Health & Wellness</strong>, you gain access to 100% certified Ayurvedic formulations from renowned institutions like Dabur, Baidyanath, Himalaya, and Patanjali. No fake additives, no inflated MLM prices—just honest, lab-certified wellness products with top-tier PV yield for your entire matrix downline.
                </p>

                {/* 4 Feature Pillars Grid */}
                <div className="topic-features-grid">
                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box green">
                      <Leaf size={22} />
                    </div>
                    <h4>100% Authentic Herb Formulations</h4>
                    <p>Standardized Ayurvedic extracts of Ashwagandha, Giloy, Tulsi, Amla, and Brahmi sourced directly from licensed herbal estates.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box orange">
                      <ShieldCheck size={22} />
                    </div>
                    <h4>FSSAI & AYUSH Certified</h4>
                    <p>Every wellness batch adheres strictly to rigorous AYUSH and FSSAI standards, ensuring zero heavy metal contamination.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box gold">
                      <TrendingUp size={22} />
                    </div>
                    <h4>Highest Point Volume (PV) Multiplier</h4>
                    <p>Health and wellness items carry our highest Point Volume ratios, boosting your matrix ranking and weekly commissions rapidly.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box saffron">
                      <Activity size={22} />
                    </div>
                    <h4>Daily Family Nutrition Bundles</h4>
                    <p>Specially curated kids' growth formulas, seniors' joint care, and women's wellness kits priced for everyday Indian households.</p>
                  </div>
                </div>

                {/* Popular Wellness Categories Visual Strip */}
                <h3 className="topic-mid-title">Top Essential Wellness Categories</h3>
                
                <div className="topic-staples-showcase-grid">
                  <div className="staple-card">
                    <img src="/images/health-wellness-ayurveda.jpg" alt="Chyawanprash & Immunity" />
                    <div className="staple-card-content">
                      <h5>Immunity & Chyawanprash</h5>
                      <span>Dabur Chyawanprash 1kg, Baidyanath Kesari Kalp, Amla Murabba</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/fortune-oil.jpg" alt="Pure Honey & Organic Ghee" />
                    <div className="staple-card-content">
                      <h5>Pure Honey & Vedic Ghee</h5>
                      <span>100% Raw Forest Honey, A2 Desi Cow Cultured Ghee & Shilajit</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/dettol-handwash.jpg" alt="Herbal Personal Hygiene" />
                    <div className="staple-card-content">
                      <h5>Herbal Hygiene & Daily Care</h5>
                      <span>Neem Face Wash, Medicated Herbal Soaps, Pain Relief Oils</span>
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
                        <strong>Are these health products manufactured by obscure multi-level companies?</strong>
                      </div>
                      <p className="faq-answer">
                        No! Unlike predatory MLM companies selling unknown fake supplements at 10x markups, KharchDaan exclusively stocks trusted national Indian brands like Dabur, Himalaya, Baidyanath, and Patanjali at fair market rates.
                      </p>
                    </div>

                    <div className="faq-item">
                      <div className="faq-question">
                        <HelpCircle size={16} className="text-orange" />
                        <strong>Why do Health & Wellness products carry higher PV points?</strong>
                      </div>
                      <p className="faq-answer">
                        Direct tie-ups with leading Ayurvedic manufacturers allow us to unlock higher manufacturer margins, which we immediately return to our members as boosted PV points and cashback commissions.
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
                  <span>IMMUNITY BOOSTER COMBO</span>
                </div>
                <h3>Ayurvedic Family Shield Bundle</h3>
                <p>Dabur Chyawanprash (1kg) + Pure Raw Honey (500g) + Organic Haldi (200g) with 180 Extra PV bonus.</p>
                
                <div className="sidebar-price-row">
                  <span className="price-current">₹699</span>
                  <span className="price-old">₹950</span>
                  <span className="price-discount">26% OFF</span>
                </div>

                <button 
                  className="sidebar-action-btn primary"
                  onClick={() => onNavigate('products', 'Health')}
                >
                  <ShoppingBag size={16} />
                  <span>Shop Health & Wellness</span>
                </button>
              </div>

              <div className="sidebar-perks-list">
                <h4>KharchDaan Purity Pledge</h4>
                <ul>
                  <li><CheckCircle2 size={15} className="text-green" /> 100% Certified AYUSH Formulation</li>
                  <li><CheckCircle2 size={15} className="text-green" /> Zero Adulteration & Tested Batches</li>
                  <li><CheckCircle2 size={15} className="text-green" /> High Point Volume (PV) Multiplier</li>
                  <li><CheckCircle2 size={15} className="text-green" /> Instant UPI Cashback Credit</li>
                </ul>
              </div>

              <div className="sidebar-help-cta">
                <p>Have specific dietary or wellness questions?</p>
                <button 
                  className="sidebar-help-link"
                  onClick={() => onNavigate('contact')}
                >
                  Ask Our Wellness Advisors ➔
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
              <h2>Nourish Your Body, Empower Your Future</h2>
              <p>Invest in your family's daily health with certified Ayurvedic essentials and earn rewarding points simultaneously.</p>
            </div>
            <div className="bottom-cta-actions">
              <button 
                className="btn-cta-primary"
                onClick={() => onNavigate('products', 'Health')}
              >
                <span>Browse Health & Ayurveda</span>
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
