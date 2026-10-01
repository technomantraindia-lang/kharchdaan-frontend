import React, { useState } from 'react';
import { 
  Home, ChevronRight, Sparkles, ShoppingBag, ShieldCheck, TrendingUp, 
  Users, Coins, ArrowRight, Zap, CheckCircle2, Award, Store, 
  HelpCircle, ChevronDown, Check, RefreshCw, Layers, HeartHandshake, 
  Phone, ArrowUpRight, Clock, Star, Gift, Smartphone, PackageCheck, 
  FileCheck, ThumbsUp, Calculator, Share2, Wallet
} from 'lucide-react';
import { 
  Step1Illustration, 
  Step2Illustration, 
  Step3Illustration, 
  Step4Illustration, 
  Step5Illustration 
} from './StepIllustrations';

export const HowItWorksPage = ({ onNavigateHome, onOpenAuth, onShopClick }) => {
  const [activeStepTab, setActiveStepTab] = useState(0);
  const [monthlyExpense, setMonthlyExpense] = useState(6000);
  const [teamSize, setTeamSize] = useState(9);
  const [openFaq, setOpenFaq] = useState(0);

  // 5 Detailed Steps with Authentic High-Resolution Visuals
  const detailedSteps = [
    {
      num: '01',
      tag: 'Step 1 • 30-Sec Onboarding',
      title: 'Free Lifetime Registration',
      subtitle: 'Instant digital membership with zero joining fees & immediate wallet activation.',
      illustration: <Step1Illustration />,
      image: '/images/hiw-step1-register.jpg',
      highlight: '100% Free Forever',
      badgeColor: 'orange',
      keyPoints: [
        'No registration fee, no kit purchase condition, no renewal fee',
        'Instant unique KharchDaan Member ID & personal referral link',
        'Personal Digital Wallet activated immediately upon sign-up',
        'Accessible via mobile, tablet, or desktop in under 30 seconds'
      ],
      proTip: 'Tip: Share your referral link with family & friends right after registering to activate your Level 1 early!'
    },
    {
      num: '02',
      tag: 'Step 2 • Smart Daily Grocery',
      title: 'Shop Your Routine Essentials',
      subtitle: 'Buy genuine branded items your family uses daily at discounted MRP with cashback.',
      illustration: <Step2Illustration />,
      image: '/images/hiw-step2-shopping.jpg',
      highlight: 'Genuine FMCG Brands',
      badgeColor: 'saffron',
      keyPoints: [
        'Shop 100% genuine brands: Aashirvaad, Fortune, Tata Tea, Surf Excel & more',
        'Zero forced or overpriced health kits—buy what your kitchen actually needs',
        'Earn Point Value (PV) points automatically on every eligible item',
        'Delivered to your doorstep or pick up from 5,000+ local verified Kiranas'
      ],
      proTip: 'Tip: Simply replace your offline supermarket purchase with KharchDaan to start generating points immediately.'
    },
    {
      num: '03',
      tag: 'Step 3 • 1:3 Power Matrix',
      title: 'Build Your Team & Auto Spillover',
      subtitle: 'Invite 3 families to do the same and unlock the automated 1:3 tree with spillover.',
      illustration: <Step3Illustration />,
      image: '/images/hiw-step3-network.jpg',
      highlight: 'Automated 1:3 Spillover',
      badgeColor: 'green',
      keyPoints: [
        'Introduce just 3 active members to complete your direct Level 1',
        'Any 4th or 5th referral automatically spills over into your downline to assist your team',
        'Your upline leaders’ spillovers also fill empty spots in your matrix',
        'Team synergy creates collective momentum where everyone supports everyone'
      ],
      proTip: 'Tip: Even if you introduce just 3 families, their network duplicates across 20 levels automatically!'
    },
    {
      num: '04',
      tag: 'Step 4 • Direct & Team Income',
      title: 'Earn Instant Cashbacks & Royalties',
      subtitle: 'Receive personal cashback up to 100% plus recurring tiered network commissions.',
      illustration: <Step4Illustration />,
      image: '/images/hiw-step4-cashback.jpg',
      highlight: 'Real Cash in Wallet',
      badgeColor: 'purple',
      keyPoints: [
        'Personal Cashback: Up to 100% cashback credited to your wallet (as per rules)',
        '20-Level Network Royalty: Earn commissions whenever downline members buy monthly ration',
        'Leadership & Royalty Pool bonuses for active community builders',
        '1-Click instant withdrawal to your bank account via UPI / IMPS'
      ],
      proTip: 'Tip: Cashbacks are credited automatically in real-time as soon as orders are delivered and verified.'
    },
    {
      num: '05',
      tag: 'Step 5 • Sustainable Prosperity',
      title: 'Recurring Generational Wealth',
      subtitle: 'Turn mandatory 30-day kitchen expenses into recurring monthly passive income.',
      illustration: <Step5Illustration />,
      image: '/images/hiw-step5-prosperity.jpg',
      highlight: 'Lifetime Returns',
      badgeColor: 'gold',
      keyPoints: [
        'Food & groceries are consumed every month—repurchases happen automatically',
        'Your monthly royalty income continues month after month without repeat selling',
        'Backed by Geeta Sevashram Pratishthan Foundation for ethical, transparent growth',
        'True financial peace of mind, dignity for homemakers, and community empowerment'
      ],
      proTip: 'Tip: “Tera Tujhko Arpan” ensures wealth generated by the community is returned back to the community.'
    }
  ];

  // Calculator calculations
  const directCashback = Math.round(monthlyExpense * 0.12);
  const networkIncome = Math.round(teamSize * 4000 * 0.04);
  const totalMonthly = directCashback + networkIncome;
  const annualTotal = totalMonthly * 12;

  // FAQ Items
  const faqList = [
    {
      q: 'Is joining KharchDaan.Com really 100% free with zero hidden fees?',
      a: 'Yes, absolutely! Joining KharchDaan.Com is 100% free for life. There are zero registration fees, zero annual renewal charges, and zero hidden maintenance fees. You never have to pay a single rupee to become a verified member.'
    },
    {
      q: 'Do I need to buy expensive or unfamiliar starter packages?',
      a: 'No! Unlike traditional direct selling companies that force you to buy expensive unfamiliar supplements or cosmetic kits, KharchDaan allows you to buy the exact daily grocery brands you already trust—like Aashirvaad Atta, Fortune Mustard Oil, Tata Tea, Surf Excel, and Dettol—at competitive MRP discounts.'
    },
    {
      q: 'How does the 1:3 Power Matrix and Auto-Spillover system work?',
      a: 'Each member has 3 direct placement spots in their Level 1. When you introduce 3 members, your Level 1 is filled. If you or your upline sponsor refer a 4th or 5th member, the system automatically places them under your downline team members (auto spillover). This ensures everyone benefits from team momentum!'
    },
    {
      q: 'How and when do I receive my cashback and team royalties?',
      a: 'Cashback on your personal grocery purchases is credited directly into your KharchDaan digital wallet upon delivery verification. Network royalties from your 20-level matrix are calculated continuously and can be withdrawn directly to your bank account via instant UPI or IMPS transfers.'
    },
    {
      q: 'Is KharchDaan legally compliant with Indian Direct Selling Rules?',
      a: 'Yes, 100%! KharchDaan strictly adheres to the Consumer Protection (Direct Selling) Rules, 2021 notified by the Ministry of Consumer Affairs, Government of India. There are zero pyramid or money circulation practices—all rewards are strictly tied to genuine FMCG product sales with transparent invoicing.'
    },
    {
      q: 'Can local Kirana shop owners partner with KharchDaan?',
      a: 'Yes! KharchDaan has a dedicated merchant onboarding program where local neighbourhood grocery stores and Kirana partners can register as fulfillment hubs. They gain thousands of recurring local customers and earn retail fulfillment margins on every QR transaction.'
    },
    {
      q: 'What is the philosophy of "Tera Tujhko Arpan"?',
      a: '“Tera Tujhko Arpan” (तेरा तुझको अर्पण क्या लागे मेरा) represents our sacred mission backed by Geeta Sevashram Pratishthan. Instead of spending crores on celebrity endorsements and middleman commissions, KharchDaan redistributes the trade margin directly back to Indian households who consume the products.'
    }
  ];

  return (
    <div className="how-it-works-page-wrapper">
      
      {/* 1. HERO HEADER WITH SAFFRON AMBIENT GLOW */}
      <section className="hiw-hero-showcase">
        <div className="hiw-hero-bg-glow" />
        <div className="container">
          
          {/* Breadcrumb Navigation */}
          <div className="hiw-breadcrumbs-row">
            <button className="breadcrumb-link" onClick={onNavigateHome}>
              <Home size={13} />
              <span>Home</span>
            </button>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-current">How It Works</span>
          </div>

          {/* Foundation Tag */}
          <div className="hiw-top-badge-row">
            <div className="hiw-foundation-pill">
              <span className="pill-om-symbol">ॐ</span>
              <span>AN INITIATIVE BY GEETA SEVASHRAM PRATISHTHAN FOUNDATION</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          {/* Main Title & Slogan */}
          <div className="hiw-hero-header-box">
            <h1 className="hiw-hero-title">
              Turn Essential Kitchen Expenses into <br />
              <span className="text-orange-gradient">Sustainable Recurring Wealth</span>
            </h1>

            <div className="hiw-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="hiw-hero-slogan">
                “Tera Tujhko Arpan” (तेरा तुझको अर्पण क्या लागे मेरा)
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="hiw-hero-description">
              KharchDaan is India’s first transparent consumer-empowerment ecosystem. We convert your unavoidable monthly family grocery expenses into guaranteed cashback, 1:3 team spillovers, and 20-level recurring royalties—with zero joining fees and 100% genuine daily FMCG staples.
            </p>

            {/* Top Action Buttons */}
            <div className="hiw-hero-cta-row">
              <button className="btn-primary btn-large" onClick={onOpenAuth}>
                <Sparkles size={18} />
                <span>Join Free in 30 Seconds</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary-outline btn-large" onClick={onShopClick}>
                <ShoppingBag size={18} />
                <span>Explore Daily FMCG Store</span>
              </button>
            </div>
          </div>

          {/* 5 Core Feature Pillar Badges */}
          <div className="hiw-pillars-grid">
            <div className="hiw-pillar-card">
              <div className="pillar-icon-box orange">
                <ShieldCheck size={20} />
              </div>
              <div className="pillar-info">
                <strong>100% Free Lifetime</strong>
                <span>Zero registration fees</span>
              </div>
            </div>

            <div className="hiw-pillar-card">
              <div className="pillar-icon-box green">
                <ShoppingBag size={20} />
              </div>
              <div className="pillar-info">
                <strong>Genuine FMCG Brands</strong>
                <span>Aashirvaad, Tata, Fortune</span>
              </div>
            </div>

            <div className="hiw-pillar-card">
              <div className="pillar-icon-box purple">
                <TrendingUp size={20} />
              </div>
              <div className="pillar-info">
                <strong>1:3 Auto Spillover</strong>
                <span>Automated matrix placement</span>
              </div>
            </div>

            <div className="hiw-pillar-card">
              <div className="pillar-icon-box gold">
                <Coins size={20} />
              </div>
              <div className="pillar-info">
                <strong>Up to 100% Cashback</strong>
                <span>Direct daily wallet earnings</span>
              </div>
            </div>

            <div className="hiw-pillar-card">
              <div className="pillar-icon-box blue">
                <Zap size={20} />
              </div>
              <div className="pillar-info">
                <strong>Instant UPI Payouts</strong>
                <span>1-Click direct bank transfer</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. INTERACTIVE 5-STEP JOURNEY DEEP DIVE */}
      <section className="hiw-interactive-steps-section">
        <div className="container">
          
          <div className="hiw-section-header">
            <div className="hiw-badge-pill">
              <Sparkles size={14} className="text-orange" />
              <span>THE 5-STEP WEALTH CYCLE</span>
            </div>
            <div className="section-ornament-header">
              <span className="ornament-leaf">❧</span>
              <h2 className="section-title-exact">How the 5-Step Model Works</h2>
              <span className="ornament-leaf">❧</span>
            </div>
            <p className="hiw-section-subtitle">
              Click through each step below to understand how routine grocery purchases become lifetime income.
            </p>
          </div>

          {/* Interactive Step Switcher Tabs */}
          <div className="hiw-step-tabs-nav">
            {detailedSteps.map((step, idx) => (
              <button 
                key={idx}
                className={`hiw-step-tab-btn ${activeStepTab === idx ? 'active' : ''}`}
                onClick={() => setActiveStepTab(idx)}
              >
                <span className="step-tab-number">{step.num}</span>
                <div className="step-tab-text">
                  <span className="step-tab-tag">{step.tag.split('•')[0].trim()}</span>
                  <span className="step-tab-title">{step.title}</span>
                </div>
                {activeStepTab === idx && <div className="step-tab-active-indicator" />}
              </button>
            ))}
          </div>

          {/* Active Step Showcase Card with Real Authentic Visuals */}
          <div className="hiw-active-step-card">
            <div className="step-showcase-grid">
              
              {/* Left Column: Authentic Photography & Visual Badge */}
              <div className="step-showcase-visual-col">
                <div className="step-photo-stage-wrapper">
                  <img 
                    src={detailedSteps[activeStepTab].image} 
                    alt={detailedSteps[activeStepTab].title} 
                    className="step-showcase-main-image"
                  />
                  <div className="step-photo-gradient-layer" />
                  
                  {/* Floating Step Digit Badge */}
                  <div className="step-large-badge">
                    <span className="badge-step-digit">{detailedSteps[activeStepTab].num}</span>
                  </div>

                  {/* Bottom Floating Pill */}
                  <div className="step-photo-floating-pill">
                    <span className="dot-green-pulse" />
                    <span>{detailedSteps[activeStepTab].highlight}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Explanation & Points */}
              <div className="step-showcase-content-col">
                <div className="step-content-tag-pill">
                  {detailedSteps[activeStepTab].tag}
                </div>
                
                <h3 className="step-showcase-title">
                  {detailedSteps[activeStepTab].title}
                </h3>
                
                <p className="step-showcase-subtitle">
                  {detailedSteps[activeStepTab].subtitle}
                </p>

                {/* Key Points Checklist */}
                <div className="step-key-points-list">
                  {detailedSteps[activeStepTab].keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="step-point-item">
                      <div className="point-check-icon">
                        <Check size={14} />
                      </div>
                      <span className="point-text">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Pro Tip Box */}
                <div className="step-pro-tip-box">
                  <Sparkles size={16} className="text-orange" />
                  <span>{detailedSteps[activeStepTab].proTip}</span>
                </div>

                {/* Navigation controls for tabs */}
                <div className="step-nav-buttons-row">
                  <button 
                    className="step-prev-btn"
                    disabled={activeStepTab === 0}
                    onClick={() => setActiveStepTab(prev => Math.max(0, prev - 1))}
                  >
                    ← Previous Step
                  </button>
                  <button 
                    className="step-next-btn"
                    onClick={() => {
                      if (activeStepTab < detailedSteps.length - 1) {
                        setActiveStepTab(prev => prev + 1);
                      } else {
                        onOpenAuth();
                      }
                    }}
                  >
                    <span>{activeStepTab === detailedSteps.length - 1 ? 'Start Your Free Account' : 'Next Step →'}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* 5 Connected Step Cards Overview Flow with Photo Thumbnails */}
          <div className="hiw-5cards-flow-row">
            {detailedSteps.map((step, idx) => (
              <div 
                key={idx} 
                className={`hiw-mini-flow-card ${activeStepTab === idx ? 'highlighted' : ''}`}
                onClick={() => setActiveStepTab(idx)}
              >
                <div className="mini-card-thumb-box">
                  <img src={step.image} alt={step.title} className="mini-card-thumb-img" />
                  <span className="mini-card-floating-num">{step.num}</span>
                  <div className="mini-card-thumb-overlay" />
                </div>
                <div className="mini-card-body">
                  <span className="mini-step-tag">{step.highlight}</span>
                  <h4 className="mini-card-title">{step.title}</h4>
                  <p className="mini-card-desc">{step.subtitle}</p>
                  <div className="mini-card-action">
                    <span>Explore Step {step.num}</span>
                    <ChevronRight size={13} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. LIFECYCLE FLOW: FROM BRAND TO YOUR KITCHEN & WALLET */}
      <section className="hiw-lifecycle-section">
        <div className="container">
          <div className="hiw-section-header">
            <div className="hiw-badge-pill">
              <RefreshCw size={14} className="text-orange" />
              <span>TRANSPARENT VALUE CHAIN</span>
            </div>
            <div className="section-ornament-header">
              <span className="ornament-leaf">❧</span>
              <h2 className="section-title-exact">How Money & Groceries Flow Seamlessly</h2>
              <span className="ornament-leaf">❧</span>
            </div>
            <p className="hiw-section-subtitle">
              Every rupee spent in KharchDaan generates verified Point Value (PV) and circulates back to Indian families.
            </p>
          </div>

          <div className="lifecycle-flow-diagram">
            
            {/* Stage 1 */}
            <div className="lifecycle-node-card">
              <div className="lifecycle-node-icon orange">
                <Store size={24} />
              </div>
              <span className="lifecycle-step-label">Stage 1</span>
              <h4 className="lifecycle-title">FMCG Direct Sourcing</h4>
              <p className="lifecycle-desc">
                Direct procurement of authentic daily essentials from leading brands at bulk manufacturer rates.
              </p>
              <div className="lifecycle-pill-tag">ITC • Fortune • Tata</div>
            </div>

            <div className="lifecycle-connector-arrow">
              <ArrowRight size={20} />
            </div>

            {/* Stage 2 */}
            <div className="lifecycle-node-card">
              <div className="lifecycle-node-icon green">
                <ShoppingBag size={24} />
              </div>
              <span className="lifecycle-step-label">Stage 2</span>
              <h4 className="lifecycle-title">5,000+ Kirana Hubs</h4>
              <p className="lifecycle-desc">
                Orders fulfilled via neighbourhood Kirana store partners with easy QR scan or direct home delivery.
              </p>
              <div className="lifecycle-pill-tag">Local Merchant Support</div>
            </div>

            <div className="lifecycle-connector-arrow">
              <ArrowRight size={20} />
            </div>

            {/* Stage 3 */}
            <div className="lifecycle-node-card">
              <div className="lifecycle-node-icon purple">
                <Layers size={24} />
              </div>
              <span className="lifecycle-step-label">Stage 3</span>
              <h4 className="lifecycle-title">PV & Royalty Split</h4>
              <p className="lifecycle-desc">
                Every grocery purchase automatically generates Point Value (PV) points split across the 20-level matrix.
              </p>
              <div className="lifecycle-pill-tag">Transparent Algorithm</div>
            </div>

            <div className="lifecycle-connector-arrow">
              <ArrowRight size={20} />
            </div>

            {/* Stage 4 */}
            <div className="lifecycle-node-card">
              <div className="lifecycle-node-icon gold">
                <Wallet size={24} />
              </div>
              <span className="lifecycle-step-label">Stage 4</span>
              <h4 className="lifecycle-title">Instant UPI Payout</h4>
              <p className="lifecycle-desc">
                Cashback and monthly network royalties credited directly into your wallet and transferable to bank via UPI.
              </p>
              <div className="lifecycle-pill-tag">1-Click Bank Settlement</div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. LIVE INTERACTIVE EARNINGS SIMULATOR */}
      <section className="hiw-calculator-section">
        <div className="container">
          <div className="hiw-calc-wrapper-card">
            
            <div className="hiw-calc-header">
              <div className="hiw-badge-pill mini" style={{ marginBottom: '10px' }}>
                <Calculator size={14} className="text-orange" />
                <span>REAL-TIME EARNINGS SIMULATOR</span>
              </div>
              <h2 className="hiw-calc-title">
                Calculate Your Guaranteed Household Savings & Network Royalty
              </h2>
              <p className="hiw-calc-subtitle">
                Adjust your estimated monthly kitchen budget and your active 1:3 team size to project your real earnings!
              </p>
            </div>

            <div className="hiw-calc-inputs-grid">
              
              {/* Slider 1: Monthly Household Spend */}
              <div className="hiw-slider-card">
                <div className="slider-label-row">
                  <span className="slider-label">1. Monthly Family Grocery Spend:</span>
                  <span className="slider-val-badge">₹{monthlyExpense.toLocaleString('en-IN')} / mo</span>
                </div>
                <input 
                  type="range"
                  min="1500"
                  max="40000"
                  step="500"
                  value={monthlyExpense}
                  onChange={(e) => setMonthlyExpense(Number(e.target.value))}
                  className="calc-range-slider"
                />
                <div className="slider-ticks-row">
                  <span>₹1,500</span>
                  <span>₹15,000</span>
                  <span>₹40,000+</span>
                </div>
              </div>

              {/* Selector 2: 1:3 Team Matrix Size */}
              <div className="hiw-slider-card">
                <div className="slider-label-row">
                  <span className="slider-label">2. Your 1:3 Matrix Team Members:</span>
                  <span className="slider-val-badge saffron">{teamSize} Active Families</span>
                </div>
                <div className="team-buttons-picker">
                  {[3, 9, 27, 81, 243, 729].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setTeamSize(count)}
                      className={`team-picker-btn ${teamSize === count ? 'active' : ''}`}
                    >
                      {count} Members
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Results Display */}
            <div className="hiw-calc-results-row">
              
              <div className="calc-stat-box orange">
                <span className="stat-box-val">₹{directCashback.toLocaleString('en-IN')}</span>
                <span className="stat-box-title">🎁 Monthly Direct Cashback</span>
                <span className="stat-box-desc">Instant return on your own groceries</span>
              </div>

              <div className="calc-stat-box saffron">
                <span className="stat-box-val">₹{networkIncome.toLocaleString('en-IN')}</span>
                <span className="stat-box-title">🚀 20-Level Network Royalty</span>
                <span className="stat-box-desc">From {teamSize} active consumer households</span>
              </div>

              <div className="calc-stat-box green highlight">
                <span className="stat-box-val">₹{annualTotal.toLocaleString('en-IN')}</span>
                <span className="stat-box-title">🏆 Projected Annual Wealth</span>
                <span className="stat-box-desc">100% Risk-Free Generational Earnings</span>
              </div>

            </div>

            <div className="hiw-calc-cta-footer">
              <button className="btn-primary btn-large" onClick={onOpenAuth}>
                <Sparkles size={18} />
                <span>Create Free Account & Start Earning</span>
                <ArrowRight size={18} />
              </button>
              <div className="calc-guarantee-note">
                <ShieldCheck size={16} className="text-green" />
                <span>Zero Mandatory Fees • 100% Direct Bank Settlements • No Risk</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. HEAD-TO-HEAD COMPARISON: TRADITIONAL VS OLD MLM VS KHARCHDAAN */}
      <section className="hiw-comparison-section">
        <div className="container">
          <div className="hiw-section-header">
            <div className="hiw-badge-pill">
              <Award size={14} className="text-orange" />
              <span>THE SMART ADVANTAGE</span>
            </div>
            <div className="section-ornament-header">
              <span className="ornament-leaf">❧</span>
              <h2 className="section-title-exact">Why KharchDaan is the Future</h2>
              <span className="ornament-leaf">❧</span>
            </div>
            <p className="hiw-section-subtitle">
              See why traditional retail supermarkets and old direct selling schemes cannot match KharchDaan’s ethical model.
            </p>
          </div>

          <div className="hiw-comparison-table-wrapper">
            <table className="hiw-comparison-table">
              <thead>
                <tr>
                  <th className="col-feature">Key Parameter</th>
                  <th className="col-supermarket">Traditional Supermarkets</th>
                  <th className="col-oldmlm">Old-Fashioned MLM Schemes</th>
                  <th className="col-kharchdaan">KharchDaan.Com Model 🌟</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="cell-feature">
                    <strong>Joining / Registration Fee</strong>
                  </td>
                  <td className="cell-supermarket">Free (No Earnings)</td>
                  <td className="cell-oldmlm">High (₹3,000 to ₹25,000 Joining Kit)</td>
                  <td className="cell-kharchdaan">
                    <div className="badge-win">
                      <CheckCircle2 size={15} />
                      <span>100% Free Lifetime Registration</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="cell-feature">
                    <strong>Product Category</strong>
                  </td>
                  <td className="cell-supermarket">Daily Groceries (Zero Cashback)</td>
                  <td className="cell-oldmlm">Overpriced Shakes & Fake Supplements</td>
                  <td className="cell-kharchdaan">
                    <div className="badge-win">
                      <CheckCircle2 size={15} />
                      <span>100% Genuine Daily Staples (Atta, Oil, Tea)</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="cell-feature">
                    <strong>Monthly Forced Buying</strong>
                  </td>
                  <td className="cell-supermarket">No forced buy (No Return)</td>
                  <td className="cell-oldmlm">Strict mandatory targets to keep active</td>
                  <td className="cell-kharchdaan">
                    <div className="badge-win">
                      <CheckCircle2 size={15} />
                      <span>Zero Forced Targets • Buy what you consume</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="cell-feature">
                    <strong>Matrix & Spillover</strong>
                  </td>
                  <td className="cell-supermarket">None</td>
                  <td className="cell-oldmlm">Complex Binary Legs (90% dropouts)</td>
                  <td className="cell-kharchdaan">
                    <div className="badge-win">
                      <CheckCircle2 size={15} />
                      <span>1:3 Auto Spillover + 20-Level Depth</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="cell-feature">
                    <strong>Payout Speed</strong>
                  </td>
                  <td className="cell-supermarket">Zero Payout</td>
                  <td className="cell-oldmlm">Monthly / Delayed with high deductions</td>
                  <td className="cell-kharchdaan">
                    <div className="badge-win">
                      <CheckCircle2 size={15} />
                      <span>Instant Wallet Credit + 1-Click UPI Bank Transfer</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="cell-feature">
                    <strong>Legal & Ethical Backing</strong>
                  </td>
                  <td className="cell-supermarket">Corporate Giants Profit Only</td>
                  <td className="cell-oldmlm">Frequent legal gray areas</td>
                  <td className="cell-kharchdaan">
                    <div className="badge-win">
                      <CheckCircle2 size={15} />
                      <span>Geeta Sevashram Pratishthan • Govt Compliant</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 6. WHO WINS WITH KHARCHDAAN (3 USER PERSONAS) */}
      <section className="hiw-personas-section">
        <div className="container">
          <div className="hiw-section-header">
            <div className="hiw-badge-pill">
              <Users size={14} className="text-orange" />
              <span>COMMUNITY EMPOWERMENT</span>
            </div>
            <div className="section-ornament-header">
              <span className="ornament-leaf">❧</span>
              <h2 className="section-title-exact">Designed for Every Indian Household</h2>
              <span className="ornament-leaf">❧</span>
            </div>
            <p className="hiw-section-subtitle">
              Whether you are a homemaker, network builder, or local shop owner, KharchDaan creates a win-win ecosystem.
            </p>
          </div>

          <div className="hiw-personas-grid">
            
            {/* Persona 1: Homemakers & Families */}
            <div className="hiw-persona-card">
              <div className="persona-photo-banner-wrap">
                <img src="/images/hiw-step4-cashback.jpg" alt="Homemakers & Families" className="persona-cover-photo" />
                <div className="persona-photo-overlay-chip orange">
                  <HeartHandshake size={15} />
                  <span>HOMEMAKERS & FAMILIES</span>
                </div>
              </div>
              <div className="persona-body-content">
                <h3 className="persona-title">Kitchen Dignity & Freedom</h3>
                <p className="persona-desc">
                  Save ₹1,000 to ₹5,000 every month on routine kitchen ration. Earn respectful passive income right from your mobile without needing to step out.
                </p>
                <ul className="persona-perks-list">
                  <li><Check size={14} /> Zero financial investment or risk</li>
                  <li><Check size={14} /> Save on 100% genuine daily brands</li>
                  <li><Check size={14} /> Direct UPI wallet to bank transfers</li>
                </ul>
              </div>
            </div>

            {/* Persona 2: Direct Selling Leaders */}
            <div className="hiw-persona-card">
              <div className="persona-photo-banner-wrap">
                <img src="/images/hiw-step3-network.jpg" alt="Network Leaders & Builders" className="persona-cover-photo" />
                <div className="persona-photo-overlay-chip green">
                  <TrendingUp size={15} />
                  <span>NETWORK LEADERS & BUILDERS</span>
                </div>
              </div>
              <div className="persona-body-content">
                <h3 className="persona-title">Effortless 20-Level Duplication</h3>
                <p className="persona-desc">
                  Never face customer rejection again. You don’t need to convince families to eat roti, dal, or use soap. The 1:3 spillover matrix makes team expansion seamless!
                </p>
                <ul className="persona-perks-list">
                  <li><Check size={14} /> 100% retention on monthly groceries</li>
                  <li><Check size={14} /> Automatic spillover placement system</li>
                  <li><Check size={14} /> Royalty pool bonuses for top rankers</li>
                </ul>
              </div>
            </div>

            {/* Persona 3: Kirana & Merchant Partners */}
            <div className="hiw-persona-card">
              <div className="persona-photo-banner-wrap">
                <img src="/images/hiw-kirana-partner.jpg" alt="Kirana & Retail Stores" className="persona-cover-photo" />
                <div className="persona-photo-overlay-chip purple">
                  <Store size={15} />
                  <span>KIRANA & RETAIL STORES</span>
                </div>
              </div>
              <div className="persona-body-content">
                <h3 className="persona-title">Massive Customer Loyalty</h3>
                <p className="persona-desc">
                  Join our 5,000+ verified merchant network. Gain hundreds of regular monthly neighborhood buyers who scan your KharchDaan QR for cashbacks.
                </p>
                <ul className="persona-perks-list">
                  <li><Check size={14} /> Guaranteed recurring customer footfall</li>
                  <li><Check size={14} /> Fulfillment margin on every scan</li>
                  <li><Check size={14} /> Zero upfront merchant listing fees</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
      <section className="hiw-faq-section">
        <div className="container">
          <div className="hiw-section-header">
            <div className="hiw-badge-pill">
              <HelpCircle size={14} className="text-orange" />
              <span>CLEAR & TRANSPARENT ANSWERS</span>
            </div>
            <div className="section-ornament-header">
              <span className="ornament-leaf">❧</span>
              <h2 className="section-title-exact">Frequently Asked Questions</h2>
              <span className="ornament-leaf">❧</span>
            </div>
            <p className="hiw-section-subtitle">
              Everything you need to know about joining, ordering, matrix placement, and payout transfers.
            </p>
          </div>

          <div className="hiw-faq-list-container">
            {faqList.map((faq, fIdx) => (
              <div 
                key={fIdx} 
                className={`hiw-faq-item-card ${openFaq === fIdx ? 'is-open' : ''}`}
                onClick={() => setOpenFaq(openFaq === fIdx ? -1 : fIdx)}
              >
                <div className="faq-question-row">
                  <span className="faq-num-pill">0{fIdx + 1}</span>
                  <h4 className="faq-question-text">{faq.q}</h4>
                  <div className="faq-toggle-icon">
                    <ChevronDown size={18} />
                  </div>
                </div>
                {openFaq === fIdx && (
                  <div className="faq-answer-row">
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Need More Help Box */}
          <div className="hiw-faq-help-box">
            <div className="help-box-left">
              <Phone size={24} className="text-orange" />
              <div>
                <strong>Have more questions or need leader guidance?</strong>
                <span>Our toll-free community helpline is available 24x7 to guide you in Hindi & Gujarati.</span>
              </div>
            </div>
            <a href="tel:7043421590" className="btn-secondary-outline">
              <span>Call +91 70434 21590</span>
            </a>
          </div>

        </div>
      </section>

      {/* 8. BOTTOM CONVERSION CTA BANNER - ULTRA PREMIUM LUXURY DESIGN */}
      <section className="hiw-bottom-cta-showcase">
        <div className="container">
          <div className="hiw-bottom-cta-card">
            {/* Ambient Multi-Layer Radial Glows & Background Shimmers */}
            <div className="cta-bg-glow" />
            <div className="cta-bg-radial-secondary" />
            
            {/* Sacred Decorative Watermark Motifs */}
            <div className="cta-mandala-watermark left" aria-hidden="true">
              <svg width="220" height="220" viewBox="0 0 100 100" fill="none" opacity="0.12">
                <circle cx="50" cy="50" r="45" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="32" stroke="#FFFFFF" strokeWidth="1.2" />
                <circle cx="50" cy="50" r="18" stroke="#FFFFFF" strokeWidth="1.5" />
                <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="#FFFFFF" strokeWidth="1" />
              </svg>
            </div>

            <div className="cta-mandala-watermark right" aria-hidden="true">
              <svg width="220" height="220" viewBox="0 0 100 100" fill="none" opacity="0.12">
                <circle cx="50" cy="50" r="45" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="32" stroke="#FFFFFF" strokeWidth="1.2" />
                <circle cx="50" cy="50" r="18" stroke="#FFFFFF" strokeWidth="1.5" />
                <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="#FFFFFF" strokeWidth="1" />
              </svg>
            </div>

            <div className="cta-content-wrapper">
              
              {/* Foundation Trust Pill */}
              <div className="cta-foundation-pill-wrapper">
                <div className="hiw-foundation-pill luxury-glass">
                  <span className="pill-om-symbol gold">ॐ</span>
                  <span>TERA TUJHKO ARPAN • GEETA SEVASHRAM PRATISHTHAN</span>
                  <Sparkles size={14} className="text-gold-bright" />
                </div>
              </div>

              {/* Main Headline */}
              <h2 className="hiw-cta-title">
                Ready to Turn Your Routine Kitchen Expenses into <br />
                <span className="cta-headline-highlight">Generational Monthly Income?</span>
              </h2>

              {/* Subtitle */}
              <p className="hiw-cta-subtitle">
                Join over <strong>25,000+ Indian families</strong> who are already saving on daily grocery ration and earning automated 20-level recurring royalties every single month.
              </p>

              {/* Interactive Action Buttons Row */}
              <div className="hiw-cta-buttons-row">
                <button className="btn-cta-primary-white" onClick={onOpenAuth}>
                  <Sparkles size={19} className="btn-sparkle-icon" />
                  <span>Create 100% Free Account Now</span>
                  <ArrowRight size={18} className="btn-arrow-icon" />
                </button>
                
                <button className="btn-cta-secondary-glass" onClick={onShopClick}>
                  <ShoppingBag size={18} />
                  <span>Browse Daily FMCG Catalog</span>
                </button>
              </div>

              {/* Floating Social Proof & Trust Badges */}
              <div className="hiw-cta-badges-grid">
                <div className="hiw-cta-badge-chip">
                  <ShieldCheck size={16} className="chip-icon gold" />
                  <span>100% Free Registration</span>
                </div>

                <div className="hiw-cta-badge-chip">
                  <Zap size={16} className="chip-icon yellow" />
                  <span>Instant UPI Wallet Payouts</span>
                </div>

                <div className="hiw-cta-badge-chip">
                  <Store size={16} className="chip-icon green" />
                  <span>5,000+ Kirana Hubs</span>
                </div>

                <div className="hiw-cta-badge-chip">
                  <Award size={16} className="chip-icon cyan" />
                  <span>Govt Direct Selling Compliant</span>
                </div>

                <div className="hiw-cta-badge-chip">
                  <TrendingUp size={16} className="chip-icon saffron" />
                  <span>20-Level Network Matrix</span>
                </div>
              </div>

              {/* Leader Helpline Micro Strip */}
              <div className="hiw-cta-footer-helpline">
                <span>Need assistance or want to understand the compensation plan?</span>
                <a href="tel:7043421590" className="cta-helpline-link">
                  <Phone size={14} />
                  <span>Call Leader Helpline: +91 70434 21590</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
