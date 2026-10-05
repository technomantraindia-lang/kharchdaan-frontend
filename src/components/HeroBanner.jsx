import React, { useState, useEffect, useCallback } from 'react';
import { 
  ShoppingCart, Coins, Users, TrendingUp, ArrowRight, ShoppingBag, Heart, Sparkles, 
  ChevronLeft, ChevronRight, ShieldCheck, Zap, HeartHandshake, Award, Store, Layers
} from 'lucide-react';

export const HeroBanner = ({ onJoinClick, onShopClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 0,
      tag: "Smart Household Shopping",
      headingDark: "Everyday Purchases",
      headingOrange: "A Bigger Opportunity",
      subtitle: "Shop quality products and services, get eligible cashback benefits and be part of a growing Direct Selling community.",
      primaryBtnText: "Shop Now",
      primaryBtnAction: onShopClick,
      secondaryBtnText: "Join as a Member",
      secondaryBtnAction: onJoinClick,
      image: "/images/hero-family-pristine.jpg",
      imageAlt: "Indian Family Shopping Online with KharchDaan",
      trustBadge: "100% Verified Community Savings",
      features: [
        { icon: <ShoppingCart size={22} />, title: "Wide Range", subtitle: "of Products & Services" },
        { icon: <Coins size={22} />, title: "Up to 100% Cashback", subtitle: "(as per applicable rules)" },
        { icon: <Users size={22} />, title: "Build Your", subtitle: "Network" },
        { icon: <TrendingUp size={22} />, title: "Grow Together", subtitle: "with Community" }
      ],
      floatingPills: [
        { icon: <ShoppingCart size={16} />, title: "Shop", action: onShopClick },
        { icon: <Coins size={16} />, title: "Cashback", action: onShopClick },
        { icon: <Users size={16} />, title: "Connect", action: onJoinClick },
        { icon: <TrendingUp size={16} />, title: "Grow", action: onJoinClick }
      ]
    },
    {
      id: 1,
      tag: "Women Financial Independence",
      headingDark: "Empower Your Dreams",
      headingOrange: "Work From Home & Earn",
      subtitle: "Join thousands of empowered homemakers and entrepreneurs building recurring monthly income through network referral rewards.",
      primaryBtnText: "Join MLM Network",
      primaryBtnAction: onJoinClick,
      secondaryBtnText: "Explore Rewards",
      secondaryBtnAction: onJoinClick,
      image: "/images/banner-women-empowerment.jpg",
      imageAlt: "Indian Woman Entrepreneur Working from Home with KharchDaan",
      trustBadge: "Empowering 25,000+ Women Leaders",
      features: [
        { icon: <ShieldCheck size={22} />, title: "Zero Risk", subtitle: "Simple 1:3 Structure" },
        { icon: <Zap size={22} />, title: "Daily Payouts", subtitle: "Direct Bank Transfer" },
        { icon: <HeartHandshake size={22} />, title: "Mentorship", subtitle: "Free Training System" },
        { icon: <Award size={22} />, title: "Lifetime Royalty", subtitle: "20-Level Distribution" }
      ],
      floatingPills: [
        { icon: <Users size={16} />, title: "Refer 3", action: onJoinClick },
        { icon: <Coins size={16} />, title: "Level Bonus", action: onJoinClick },
        { icon: <Award size={16} />, title: "Royalty", action: onJoinClick },
        { icon: <TrendingUp size={16} />, title: "Car Fund", action: onJoinClick }
      ]
    },
    {
      id: 2,
      tag: "Community Growth & Rewards",
      headingDark: "Grow Together",
      headingOrange: "Build Lifetime Wealth",
      subtitle: "Connect with 25,000+ happy Indian families, earn daily direct cashback, and build lasting financial security through our 20-level network.",
      primaryBtnText: "Join as a Member",
      primaryBtnAction: onJoinClick,
      secondaryBtnText: "Explore Rewards",
      secondaryBtnAction: onJoinClick,
      image: "/images/women-empowerment.jpg",
      imageAlt: "Indian Direct Selling Community Celebrating Financial Growth",
      trustBadge: "25,000+ Active Community Families",
      features: [
        { icon: <Users size={22} />, title: "1:3 Matrix", subtitle: "Automated Spillover" },
        { icon: <Zap size={22} />, title: "Daily Payouts", subtitle: "Direct Wallet Credits" },
        { icon: <ShoppingCart size={22} />, title: "FMCG Brands", subtitle: "Aashirvaad & Fortune" },
        { icon: <Award size={22} />, title: "Lifetime Royalty", subtitle: "20-Level Network" }
      ],
      floatingPills: [
        { icon: <Users size={16} />, title: "Community", action: onJoinClick },
        { icon: <Coins size={16} />, title: "Cashback", action: onShopClick },
        { icon: <Award size={16} />, title: "20 Levels", action: onJoinClick },
        { icon: <TrendingUp size={16} />, title: "Royalty", action: onJoinClick }
      ]
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const active = slides[currentSlide];

  return (
    <section 
      id="hero" 
      className="hero-banner-master"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Golden Corner Mandala in Top-Left */}
      <div className="hero-corner-mandala-left">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
          <circle cx="0" cy="0" r="140" stroke="#FED7AA" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="0" cy="0" r="110" stroke="#FDBA74" strokeWidth="1.5" opacity="0.7" />
          <circle cx="0" cy="0" r="80" stroke="#EA580C" strokeWidth="1.2" opacity="0.5" />
          <circle cx="0" cy="0" r="50" stroke="#FDBA74" strokeWidth="1.5" opacity="0.8" />
          <path d="M0 0 L100 0 C100 55.2 55.2 100 0 100 Z" fill="#FED7AA" fillOpacity="0.2" />
          <path d="M0 0 L70 0 C70 38.6 38.6 70 0 70 Z" fill="#EA580C" fillOpacity="0.1" />
        </svg>
      </div>

      <div className="hero-layout-master" key={active.id}>
        {/* Left Column: Heading, Subtitle, CTAs & 4-Feature Strip */}
        <div className="hero-col-left hero-slide-fade-in">
          {/* Micro Tag */}
          <div className="hero-slide-tag">
            <Sparkles size={13} className="text-orange" />
            <span>{active.tag}</span>
          </div>

          <h1 className="hero-heading-master">
            <span className="text-dark">{active.headingDark}</span>
            <span className="text-orange">{active.headingOrange}</span>
          </h1>

          <p className="hero-subtitle-master">
            {active.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-master">
            <button className="btn-shop-now-master" onClick={active.primaryBtnAction}>
              <span>{active.primaryBtnText}</span>
              <ArrowRight size={18} />
            </button>
            <button className="btn-join-member-master" onClick={active.secondaryBtnAction}>
              <span>{active.secondaryBtnText}</span>
            </button>
          </div>

          {/* 4 Feature Items Strip */}
          <div className="hero-features-bar-master">
            {active.features.map((feat, idx) => (
              <div key={idx} className="feature-item-master">
                <div className="feature-icon-master">
                  {feat.icon}
                </div>
                <div className="feature-info-master">
                  <strong>{feat.title}</strong>
                  <span>{feat.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Unified Carousel Navigation Dock with Arrows, Dots, and Counter */}
          <div className="hero-carousel-dock">
            <button 
              className="hero-dock-arrow" 
              onClick={prevSlide}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="hero-dock-dots">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  className={`hero-dock-dot ${currentSlide === idx ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              className="hero-dock-arrow" 
              onClick={nextSlide}
              aria-label="Next Slide"
            >
              <ChevronRight size={18} />
            </button>

            <div className="hero-dock-counter">
              <span>0{currentSlide + 1}</span>
              <span className="divider">/</span>
              <span className="total">0{slides.length}</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Design Portal Image Touching Top, Bottom, Right */}
        <div className="hero-col-right hero-slide-fade-in">
          {/* Decorative Glow Arc Behind Left Curve */}
          <div className="hero-curve-glow-behind"></div>

          <div className="hero-image-fullbleed-wrapper">
            <img
              src={active.image}
              alt={active.imageAlt}
              className="family-fullbleed-photo"
            />
            
            {/* Top-Left Trust Badge */}
            <div className="hero-top-trust-badge">
              <Sparkles size={14} className="text-orange" />
              <span>{active.trustBadge}</span>
            </div>

            {/* KharchDaan Shopping Bag Badge in front */}
            <div className="hero-shopping-bag-badge">
              <img 
                src="/images/kharchdaan-logo.png" 
                alt="KharchDaan.Com Logo" 
                className="hero-badge-logo-img"
              />
            </div>

            {/* 4 Floating Vertical Action Pill Badges */}
            <div className="hero-floating-pills-master">
              {active.floatingPills.map((pill, idx) => (
                <button key={idx} className="floating-pill-master" onClick={pill.action}>
                  <div className="pill-circle-icon">
                    {pill.icon}
                  </div>
                  <span className="pill-title">{pill.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


