import React from 'react';
import { 
  ShieldCheck, ShoppingBag, Users, Coins, Sparkles, Heart, Award, 
  TrendingUp, CheckCircle2, ArrowRight, Store, Star, Home, Building2,
  HeartHandshake, ChevronRight, Zap, Target, Eye, Compass, Gift, 
  Clock, Check, BadgeCheck, FileText, Smartphone, RefreshCw, Layers
} from 'lucide-react';

export const AboutUsPage = ({ onNavigateHome, onOpenAuth, onShopClick }) => {
  return (
    <div className="about-page-wrapper">
      {/* 1. Hero / Header Showcase with Warm Saffron Ambient Glow */}
      <section className="about-hero-showcase">
        <div className="about-hero-bg-glow" />
        <div className="container">
          {/* Breadcrumbs Navigation */}
          <div className="about-breadcrumbs-row">
            <button className="breadcrumb-link" onClick={onNavigateHome}>
              <Home size={13} />
              <span>Home</span>
            </button>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-current">About Us</span>
          </div>

          {/* Top Organization Badge */}
          <div className="about-top-badge-row">
            <div className="about-foundation-pill">
              <span className="pill-om-symbol">ॐ</span>
              <span>AN INITIATIVE BY GEETA SEVASHRAM PRATISHTHAN FOUNDATION</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          {/* Hero Main Heading & Slogan */}
          <div className="about-hero-header-box">
            <h1 className="about-hero-title">
              Empowering Indian Families Through <br />
              <span className="text-orange-gradient">Conscious Spending & Community Wealth</span>
            </h1>
            
            <div className="about-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="about-hero-slogan">
                “Tera Tujhko Arpan” (तेरा तुझको अर्पण क्या लागे मेरा)
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="about-hero-description">
              KharchDaan connects everyday household grocery purchases with an equitable, transparent Direct Selling ecosystem. We transform unavoidable family expenses into sustainable recurring passive income for consumers, homemakers, and neighbourhood retail partners across Bharat.
            </p>
          </div>

          {/* 4 Interactive High-Impact Metric Cards */}
          <div className="about-metrics-grid">
            <div className="about-metric-card metric-orange">
              <div className="metric-icon-wrap">
                <Users size={24} />
              </div>
              <div className="metric-info">
                <span className="metric-val">25,000+</span>
                <span className="metric-title">Empowered Families</span>
                <span className="metric-tagline">Active in 18+ Indian States</span>
              </div>
              <div className="metric-card-glow" />
            </div>

            <div className="about-metric-card metric-green">
              <div className="metric-icon-wrap">
                <Store size={24} />
              </div>
              <div className="metric-info">
                <span className="metric-val">5,000+</span>
                <span className="metric-title">Verified Kirana Stores</span>
                <span className="metric-tagline">Neighborhood Merchant Network</span>
              </div>
              <div className="metric-card-glow" />
            </div>

            <div className="about-metric-card metric-purple">
              <div className="metric-icon-wrap">
                <TrendingUp size={24} />
              </div>
              <div className="metric-info">
                <span className="metric-val">20 Levels</span>
                <span className="metric-title">Distribution Depth</span>
                <span className="metric-tagline">1:3 Matrix with Auto Spillover</span>
              </div>
              <div className="metric-card-glow" />
            </div>

            <div className="about-metric-card metric-gold">
              <div className="metric-icon-wrap">
                <ShieldCheck size={24} />
              </div>
              <div className="metric-info">
                <span className="metric-val">100%</span>
                <span className="metric-title">Genuine FMCG Brands</span>
                <span className="metric-tagline">Aashirvaad, Fortune & More</span>
              </div>
              <div className="metric-card-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Philosophy & Origin Story Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="about-story-grid">
            {/* Story Text Column */}
            <div className="about-story-content">
              <div className="about-badge-pill mini">
                <Heart size={13} className="text-orange" />
                <span>OUR SACRED ORIGIN & PHILOSOPHY</span>
              </div>

              <h2 className="about-section-heading">
                Transforming Mandatory Household Expenses into a <span className="text-orange">Generational Blessing</span>
              </h2>

              <p className="about-paragraph">
                In every Indian household, grocery expenses on flour, cooking oil, tea, lentils, and toiletries are continuous and inescapable. In traditional retail and modern quick-commerce, billions in profit flow solely to corporate conglomerates and middlemen, leaving everyday consumers empty-handed.
              </p>

              {/* Saffron Sacred Meaning Callout */}
              <div className="about-etymology-box">
                <div className="etymology-header">
                  <span className="etymology-symbol">🕉️</span>
                  <strong>The Meaning of “KharchDaan”</strong>
                </div>
                <div className="etymology-content">
                  <div className="etymology-item">
                    <span className="etym-tag">खर्च (Kharch)</span>
                    <p>The necessary monthly household expenses you already incur for food and living.</p>
                  </div>
                  <div className="etymology-sep" />
                  <div className="etymology-item">
                    <span className="etym-tag">दान (Daan)</span>
                    <p>The righteous redistribution of wealth and collective blessings returned to the community.</p>
                  </div>
                </div>
                <div className="etymology-footer">
                  <span>An Initiative by <strong>Geeta Sevashram Pratishthan Foundation</strong></span>
                </div>
              </div>

              <p className="about-paragraph">
                KharchDaan operates on a transparent, ethical model: <strong>We never ask you to alter your routine habits or buy overpriced, non-essential starter kits</strong>. Simply purchase your regular family groceries and earn direct wallet cashbacks while building multi-level passive income.
              </p>

              {/* 3 Core Highlights */}
              <div className="story-features-list">
                <div className="story-feat-item">
                  <div className="feat-check-circle"><Check size={14} /></div>
                  <span><strong>Zero Risk & Zero Deposit:</strong> Completely free registration without hidden fees.</span>
                </div>
                <div className="story-feat-item">
                  <div className="feat-check-circle"><Check size={14} /></div>
                  <span><strong>100% Genuine Brands:</strong> Direct tie-ups with India's top FMCG manufacturers.</span>
                </div>
                <div className="story-feat-item">
                  <div className="feat-check-circle"><Check size={14} /></div>
                  <span><strong>Instant Daily Wallet Credits:</strong> Real-time withdrawals via UPI and Bank Transfer.</span>
                </div>
              </div>
            </div>

            {/* Visual Media Showcase with Layered Floating Cards */}
            <div className="about-story-media-wrap">
              <div className="story-media-frame">
                <img 
                  src="/images/women-empowerment.jpg" 
                  alt="KharchDaan Women Leaders and Community Growth" 
                  className="story-main-img"
                />
                
                {/* Floating Badge 1: Top Right */}
                <div className="floating-story-card top-badge">
                  <div className="badge-icon-circle green">
                    <Store size={18} />
                  </div>
                  <div>
                    <strong>5,000+ Kirana Partners</strong>
                    <span>Local Stores Empowered with QR Code</span>
                  </div>
                </div>

                {/* Floating Badge 2: Bottom Center */}
                <div className="floating-story-card bottom-badge">
                  <div className="badge-icon-circle orange">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <strong>100% Ethical & Compliant</strong>
                    <span>Consumer Affairs Direct Selling Guidelines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Grand Vision & Mission Section */}
      <section className="about-vision-section">
        <div className="container">
          <div className="about-section-header-center">
            <div className="about-badge-pill mini">
              <Compass size={13} className="text-orange" />
              <span>GUIDING PRINCIPLES</span>
            </div>
            <h2 className="about-section-heading">Our Vision & Mission for Bharat</h2>
            <p className="about-section-sub">
              Empowering families with sustainable economic dignity through collective community power.
            </p>
          </div>

          <div className="vision-mission-cards-grid">
            {/* Vision Card */}
            <div className="vision-card">
              <div className="card-top-icon-row">
                <div className="card-icon-round orange-glow">
                  <Eye size={28} />
                </div>
                <span className="card-top-tag orange">LONG TERM VISION</span>
              </div>
              <h3 className="vision-card-title">Our Vision</h3>
              <p className="vision-card-desc">
                To build India’s most transparent, household-centric direct commerce network — where no family is exploited by middlemen markups, and every Indian household achieves recurring passive income from daily grocery necessities.
              </p>
              <div className="vision-milestones-list">
                <div className="milestone-item">
                  <div className="milestone-bullet orange" />
                  <span><strong>Empower 10 Lakh+ Households</strong> across rural & urban India by 2028.</span>
                </div>
                <div className="milestone-item">
                  <div className="milestone-bullet orange" />
                  <span><strong>Financial Dignity for Homemakers:</strong> Flexible work-from-home earning leadership.</span>
                </div>
                <div className="milestone-item">
                  <div className="milestone-bullet orange" />
                  <span><strong>Digitalize 50,000+ Kiranas:</strong> Modernizing neighbourhood retail stores.</span>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="vision-card">
              <div className="card-top-icon-row">
                <div className="card-icon-round green-glow">
                  <Target size={28} />
                </div>
                <span className="card-top-tag green">STRATEGIC MISSION</span>
              </div>
              <h3 className="vision-card-title">Our Mission</h3>
              <p className="vision-card-desc">
                To bridge authentic FMCG product supply directly to consumers, eliminating speculative trading and reinvesting up to 80% of distributor margins back into 20-level member wallet payouts and community development.
              </p>
              <div className="vision-milestones-list">
                <div className="milestone-item">
                  <div className="milestone-bullet green" />
                  <span><strong>Transparent 20-Level Distribution:</strong> Real-time wallet payouts with zero hidden cuts.</span>
                </div>
                <div className="milestone-item">
                  <div className="milestone-bullet green" />
                  <span><strong>Zero Starter Kit Barrier:</strong> Freedom to buy only what your family needs.</span>
                </div>
                <div className="milestone-item">
                  <div className="milestone-bullet green" />
                  <span><strong>Community First Ethos:</strong> Backed by Geeta Sevashram Pratishthan's social seva.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 4 Fundamental Pillars */}
      <section className="about-pillars-section">
        <div className="container">
          <div className="about-section-header-center">
            <div className="about-badge-pill mini">
              <Award size={13} className="text-orange" />
              <span>THE 4 CORNERSTONES</span>
            </div>
            <h2 className="about-section-heading">Why Thousands of Families Trust KharchDaan</h2>
            <p className="about-section-sub">
              Four rock-solid foundations that set our direct selling ecosystem apart from any other.
            </p>
          </div>

          <div className="pillars-4-grid">
            {/* Pillar 1 */}
            <div className="pillar-item-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-box orange">
                  <ShoppingBag size={24} />
                </div>
                <span className="pillar-num-badge">01</span>
              </div>
              <h4 className="pillar-title">100% Genuine FMCG Brands</h4>
              <p className="pillar-desc">
                No duplicate or overpriced mystery products. Buy authentic daily brands: Aashirvaad Atta, Fortune Oil, Tata Tea, Surf Excel, and Cadbury at true MRP savings.
              </p>
              <div className="pillar-footer-tag">
                <span>Verified FMCG Stock</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="pillar-item-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-box saffron">
                  <Users size={24} />
                </div>
                <span className="pillar-num-badge">02</span>
              </div>
              <h4 className="pillar-title">Transparent 1:3 Power Matrix</h4>
              <p className="pillar-desc">
                Mathematical integrity: Introduce 3 active partners to unlock 20 levels of automated spillover. Team growth automatically benefits every member below.
              </p>
              <div className="pillar-footer-tag">
                <span>Automated Spillover</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-item-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-box green">
                  <Coins size={24} />
                </div>
                <span className="pillar-num-badge">03</span>
              </div>
              <h4 className="pillar-title">Instant Wallet Cashbacks</h4>
              <p className="pillar-desc">
                No complex points with hidden expiry dates. Earn real money credited instantly to your KharchDaan wallet with 1-click Bank and UPI withdrawals.
              </p>
              <div className="pillar-footer-tag">
                <span>Real-Time Payouts</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="pillar-item-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-box blue">
                  <Store size={24} />
                </div>
                <span className="pillar-num-badge">04</span>
              </div>
              <h4 className="pillar-title">Women & Kirana Empowerment</h4>
              <p className="pillar-desc">
                Enabling Indian homemakers to run successful work-from-home businesses while driving new customer footfalls to local retail stores via digital QR codes.
              </p>
              <div className="pillar-footer-tag">
                <span>Bharat Digital Commerce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 3 Simple Steps Pathway */}
      <section className="about-how-steps-section">
        <div className="container">
          <div className="about-section-header-center">
            <div className="about-badge-pill mini">
              <Zap size={13} className="text-orange" />
              <span>HOW IT WORKS</span>
            </div>
            <h2 className="about-section-heading">How You Benefit in 3 Simple Steps</h2>
            <p className="about-section-sub">
              Get started in minutes with zero investment risk and pure household grocery savings.
            </p>
          </div>

          <div className="about-3steps-grid">
            <div className="about-step-box">
              <div className="step-badge-number">1</div>
              <div className="step-icon-round orange"><ShoppingBag size={24} /></div>
              <h4 className="step-box-title">Shop Your Daily Essentials</h4>
              <p className="step-box-desc">
                Buy your regular grocery needs at competitive prices through our online portal or partner neighbourhood Kirana stores.
              </p>
              <div className="step-pill-tag">Grocery & FMCG</div>
            </div>

            <div className="about-step-connector">
              <ArrowRight size={22} />
            </div>

            <div className="about-step-box">
              <div className="step-badge-number">2</div>
              <div className="step-icon-round green"><Coins size={24} /></div>
              <h4 className="step-box-title">Earn Direct Cashback</h4>
              <p className="step-box-desc">
                Receive instant cashback and PV reward points directly into your KharchDaan wallet on every eligible purchase.
              </p>
              <div className="step-pill-tag">Instant Wallet Credit</div>
            </div>

            <div className="about-step-connector">
              <ArrowRight size={22} />
            </div>

            <div className="about-step-box">
              <div className="step-badge-number">3</div>
              <div className="step-icon-round purple"><TrendingUp size={24} /></div>
              <h4 className="step-box-title">Grow & Earn 20 Levels</h4>
              <p className="step-box-desc">
                Introduce 3 active members to unlock 20 levels of recurring team royalty and daily payouts as your network expands.
              </p>
              <div className="step-pill-tag">Lifetime Royalty</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Legal Compliance & Trust Assurance Strip */}
      <section className="about-trust-strip-section">
        <div className="container">
          <div className="trust-strip-card">
            <div className="trust-strip-header">
              <ShieldCheck size={26} className="text-orange" />
              <div>
                <h3 className="trust-strip-title">100% Trust, Compliance & Security Guarantee</h3>
                <p className="trust-strip-sub">KharchDaan adheres to the highest standards of Indian Direct Selling ethics and consumer protection.</p>
              </div>
            </div>

            <div className="trust-badges-grid">
              <div className="trust-badge-item">
                <BadgeCheck size={18} className="text-green" />
                <span>Govt. Direct Selling Guidelines Compliant</span>
              </div>
              <div className="trust-badge-item">
                <BadgeCheck size={18} className="text-green" />
                <span>100% Direct Brand Manufacturer Sourcing</span>
              </div>
              <div className="trust-badge-item">
                <BadgeCheck size={18} className="text-green" />
                <span>Instant Bank & UPI Wallet Settlement</span>
              </div>
              <div className="trust-badge-item">
                <BadgeCheck size={18} className="text-green" />
                <span>Toll-Free Member & Leader Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Grand CTA Showcase Banner */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <div className="cta-content-col">
              <div className="cta-top-tag-pill">
                <Sparkles size={13} />
                <span>START YOUR FINANCIAL FREEDOM JOURNEY</span>
              </div>
              <h2 className="cta-title">
                Ready to Turn Your Routine Expenses into Lifetime Income?
              </h2>
              <p className="cta-sub">
                Join 25,000+ Indian families already saving on monthly groceries and generating daily passive income with KharchDaan.
              </p>
              <div className="cta-actions-row">
                <button className="btn-cta-primary" onClick={onOpenAuth}>
                  <span>Join as a Member — It's Free</span>
                  <ArrowRight size={16} />
                </button>
                <button className="btn-cta-secondary" onClick={onShopClick}>
                  <span>Explore Daily Products & Cashbacks</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
