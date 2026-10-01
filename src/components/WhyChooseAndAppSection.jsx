import React from 'react';
import { ShieldCheck, ShoppingBag, Users, Coins, Sparkles, Star, Smartphone, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { KharchDaanPhoneMockup } from './KharchDaanPhoneMockup';

export const WhyChooseAndAppSection = () => {
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

          {/* Right Column: Download App Showcase Banner */}
          <div className="download-app-card-master">
            {/* Top Floating App Tag */}
            <div className="app-card-top-tag-row">
              <span className="app-top-tag-pill">
                <Smartphone size={12} />
                <span>MOBILE APP ON ANDROID & IOS</span>
              </span>
              <span className="app-rating-pill">
                <Star size={13} fill="#F59E0B" color="#F59E0B" stroke="#F59E0B" />
                <span>4.8 (10k+ Reviews)</span>
              </span>
            </div>

            <div className="app-card-body-grid">
              {/* Ultra-HD Vector Phone Mockup */}
              <div className="app-mockup-wrapper-master">
                <KharchDaanPhoneMockup />
              </div>

              {/* App Details & Download Actions */}
              <div className="app-card-details-master">
                <h3 className="app-card-heading-master">
                  Download The <br />
                  <span className="text-orange-gradient">KharchDaan App</span>
                </h3>
                
                <p className="app-card-subtext-master">
                  Shop groceries, track your 20-level network tree, check real-time wallet cashback, and withdraw funds easily on the go.
                </p>

                {/* Store Badges */}
                <div className="app-store-badges-row-master">
                  <a 
                    href="#playstore" 
                    className="store-badge-btn-master" 
                    onClick={(e) => e.preventDefault()}
                    aria-label="Get it on Google Play"
                  >
                    <svg className="store-svg-icon" viewBox="0 0 24 24" width="22" height="22">
                      <path fill="#4285F4" d="M3.6 1.8l10.8 10.2-3.1 3.1-7.7-13.3z"/>
                      <path fill="#FBBC05" d="M17.5 14.9l-3.1-2.9 3.1-3.1 3.6 2.1c1 .6 1 1.5 0 2l-3.6 1.9z"/>
                      <path fill="#34A853" d="M3.6 22.2l10.8-10.2 3.1 3.1-13.9 7.1z"/>
                      <path fill="#EA4335" d="M3.6 1.8l13.9 7.1-3.1 3.1-10.8-10.2z"/>
                    </svg>
                    <div className="store-badge-text-block">
                      <span className="store-tag-text">GET IT ON</span>
                      <span className="store-name-text">Google Play</span>
                    </div>
                  </a>

                  <a 
                    href="#appstore" 
                    className="store-badge-btn-master" 
                    onClick={(e) => e.preventDefault()}
                    aria-label="Download on App Store"
                  >
                    <svg className="store-svg-icon" viewBox="0 0 24 24" width="22" height="22" fill="#FFFFFF">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.72-.94 2.74 1.01.08 2.03-.49 2.65-1.24z"/>
                    </svg>
                    <div className="store-badge-text-block">
                      <span className="store-tag-text">Download on the</span>
                      <span className="store-name-text">App Store</span>
                    </div>
                  </a>
                </div>

                {/* Instant Security Note */}
                <div className="app-security-note">
                  <span>✓ 100% Free Install</span>
                  <span>•</span>
                  <span>✓ Instant Wallet Sync</span>
                  <span>•</span>
                  <span>✓ Secure UPI Payouts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
