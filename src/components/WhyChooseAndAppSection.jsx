import React from 'react';
import { 
  ShieldCheck, 
  ShoppingBag, 
  Users, 
  Coins, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  ArrowUpRight, 
  Layers, 
  Zap, 
  Scale, 
  Gift 
} from 'lucide-react';

export const WhyChooseAndAppSection = ({ onShopClick, onOpenAuth }) => {
  const features = [
    {
      id: 1,
      tag: 'VERIFIED & SAFE',
      title: '100% Trusted Platform',
      desc: 'Fully compliant transparent direct network with fair practices and data security.',
      icon: <ShieldCheck size={26} className="why-icon-svg" />,
      highlight: 'Zero Hidden Fees'
    },
    {
      id: 2,
      tag: 'GENUINE PRODUCTS',
      title: 'Wide Essential Range',
      desc: 'Aashirvaad Atta, Fortune Oil, Surf Excel, Tata Tea & 500+ daily grocery essentials.',
      icon: <ShoppingBag size={26} className="why-icon-svg" />,
      highlight: 'Best MRP Discounts'
    },
    {
      id: 3,
      tag: 'EMPOWERMENT',
      title: 'Community & Women Driven',
      desc: 'Dedicated financial tools to empower homemakers, small kirana stores, and local families.',
      icon: <Users size={26} className="why-icon-svg" />,
      highlight: '50k+ Empowered Members'
    },
    {
      id: 4,
      tag: 'INSTANT WALLET',
      title: 'Eligibility Based Rewards',
      desc: 'Real-time rule-based cashback on your groceries plus 20-level downline earnings.',
      icon: <Coins size={26} className="why-icon-svg" />,
      highlight: 'Direct Cash in Wallet'
    }
  ];

  const valuePillars = [
    {
      icon: <Coins size={18} className="text-orange-500" />,
      title: 'Up to 100% Direct Cashback',
      subtitle: 'Instant wallet rewards on daily groceries'
    },
    {
      icon: <Layers size={18} className="text-purple-500" />,
      title: '20-Level Network PV',
      subtitle: 'Passive community recurring royalty'
    },
    {
      icon: <Zap size={18} className="text-amber-500" />,
      title: 'Direct Bank Payouts',
      subtitle: 'Automated weekly cycle transfers to UPI/Bank'
    },
    {
      icon: <Scale size={18} className="text-emerald-500" />,
      title: 'Govt Compliant 2021',
      subtitle: 'Direct Selling Rules approved & GST invoiced'
    }
  ];

  return (
    <section id="why-choose" className="why-choose-app-section">
      <div className="container">
        {/* Section Header */}
        <div className="why-choose-header-box">
          <div className="why-choose-badge-pill">
            <Sparkles size={14} className="text-orange-icon" />
            <span>COMMUNITY-POWERED ECOSYSTEM</span>
          </div>

          <div className="section-ornament-header">
            <span className="ornament-leaf">❧</span>
            <h2 className="section-title-exact">Why Choose KharchDaan.Com</h2>
            <span className="ornament-leaf">❧</span>
          </div>

          <p className="why-choose-subtitle-text">
            Experience a revolutionary direct commerce model engineered to protect household budgets, reward everyday spending, and create lasting family prosperity.
          </p>
        </div>

        <div className="why-choose-app-grid">
          {/* Left Column: 4 Value Cards Grid */}
          <div className="why-features-grid">
            {features.map((item) => (
              <div key={item.id} className="why-feature-card-master">
                <div className="why-card-top-row">
                  <div className="why-icon-wrapper-master">
                    {item.icon}
                  </div>
                  <span className="why-card-tag-pill">{item.tag}</span>
                </div>

                <div className="why-card-content">
                  <h3 className="why-card-title-master">{item.title}</h3>
                  <p className="why-card-desc-master">{item.desc}</p>
                </div>

                <div className="why-card-highlight-chip">
                  <CheckCircle2 size={13} className="check-icon-green" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: The 100% Direct Cashback & Member Growth Hub */}
          <div className="cashback-growth-hub-card">
            {/* Top Tag & Rating Pill */}
            <div className="hub-card-top-tag-row">
              <span className="hub-top-tag-pill">
                <ShieldCheck size={13} />
                <span>100% LEGAL DIRECT SELLING</span>
              </span>
              <span className="hub-rating-pill">
                <Star size={13} fill="#F59E0B" color="#F59E0B" stroke="#F59E0B" />
                <span>4.9 (50k+ Happy Families)</span>
              </span>
            </div>

            {/* Main Value Proposition */}
            <div className="hub-card-content-area">
              <h3 className="hub-card-heading">
                Turn Daily Grocery Bills Into <br />
                <span className="text-orange-gradient">Guaranteed Family Wealth</span>
              </h3>
              
              <p className="hub-card-description">
                No registration fees, no investment risk. Purchase the FMCG staples your family uses every day and unlock up to 100% direct cashback alongside lifelong 20-level network royalty.
              </p>

              {/* 4 Value Pillars List */}
              <div className="hub-pillars-list">
                {valuePillars.map((p, idx) => (
                  <div key={idx} className="hub-pillar-item">
                    <div className="hub-pillar-icon-box">{p.icon}</div>
                    <div className="hub-pillar-text">
                      <strong>{p.title}</strong>
                      <span>{p.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Monthly Savings Callout Box */}
              <div className="hub-savings-callout">
                <div className="savings-callout-icon">
                  <Gift size={20} className="text-orange-600" />
                </div>
                <div className="savings-callout-text">
                  <span className="savings-title">Estimated Monthly Family Benefit</span>
                  <span className="savings-value">₹3,000 – ₹50,000+ / Month</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="hub-action-buttons-row">
                <button 
                  type="button" 
                  className="btn-hub-shop-now"
                  onClick={onShopClick}
                >
                  <span>Explore FMCG Store</span>
                  <ArrowUpRight size={16} />
                </button>
                <button 
                  type="button" 
                  className="btn-hub-join-free"
                  onClick={onOpenAuth}
                >
                  <span>Join Free Network</span>
                </button>
              </div>

              {/* Footer Trust Assurances */}
              <div className="hub-trust-footer-row">
                <span>✓ Zero Joining Fee</span>
                <span>•</span>
                <span>✓ 100% GST Invoiced</span>
                <span>•</span>
                <span>✓ Direct Partner Depots</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
