import React from 'react';
import { 
  ShoppingBag, Phone, Mail, MapPin, Heart, ShieldCheck, 
  Sparkles, TrendingUp, Coins, Clock, ChevronRight, CheckCircle2,
  Store, Award, ArrowUpRight
} from 'lucide-react';
import { TempleHeritageIllustration } from './StepIllustrations';

export const Footer = ({ onNavigate, onOpenAuth }) => {
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const dedicatedRoutes = [
      'about', 'how-it-works', 'contact', 'contact-us', 
      'power-matrix', 'earning-depth', 'royalty-pool', 
      'instant-payouts', 'foundation-seva', 'women-empowerment', 
      'kirana-merchant', 'govt-ethics'
    ];

    if (dedicatedRoutes.includes(target)) {
      if (onNavigate) onNavigate(target === 'contact-us' ? 'contact' : target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'hero' || target === 'home') {
      if (onNavigate) onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  };

  return (
    <footer id="footer-contact" className="site-footer-exact">
      {/* 1. Pre-Footer Highlights & Trust Strip */}
      <div className="footer-trust-strip">
        <div className="container">
          <div className="footer-trust-grid">
            <div className="footer-trust-item">
              <div className="trust-icon-box orange">
                <ShoppingBag size={20} />
              </div>
              <div className="trust-item-text">
                <span className="trust-item-title">100% Genuine FMCG</span>
                <span className="trust-item-desc">Direct top-brand manufacturer sourcing</span>
              </div>
            </div>

            <div className="footer-trust-item">
              <div className="trust-icon-box green">
                <Coins size={20} />
              </div>
              <div className="trust-item-text">
                <span className="trust-item-title">Instant Cashbacks</span>
                <span className="trust-item-desc">Direct daily wallet credit via UPI & Bank</span>
              </div>
            </div>

            <div className="footer-trust-item">
              <div className="trust-icon-box purple">
                <TrendingUp size={20} />
              </div>
              <div className="trust-item-text">
                <span className="trust-item-title">20-Level Power Matrix</span>
                <span className="trust-item-desc">1:3 automated spillover & monthly royalty</span>
              </div>
            </div>

            <div className="footer-trust-item">
              <div className="trust-icon-box saffron">
                <ShieldCheck size={20} />
              </div>
              <div className="trust-item-text">
                <span className="trust-item-title">Foundation Backed</span>
                <span className="trust-item-desc">Geeta Sevashram Pratishthan initiative</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Body */}
      <div className="footer-main-body">
        <div className="container footer-container-exact">
          <div className="footer-grid-wrapper">
            
            {/* Col 1: Brand & Mission Info */}
            <div className="footer-col-card brand-col-card">
              <div 
                className="footer-brand-header" 
                onClick={(e) => handleLinkClick(e, 'home')}
              >
                <img 
                  src="/images/kharchdaan-logo.png" 
                  alt="KharchDaan.Com Logo" 
                  className="footer-logo-img"
                />
              </div>

              <p className="footer-brand-desc">
                Transforming routine monthly grocery expenses into sustainable recurring passive income for Indian families, homemakers, and neighbourhood retail stores.
              </p>

              <div className="footer-foundation-badge">
                <span className="om-mini-symbol">ॐ</span>
                <span>An Initiative by <strong>Geeta Sevashram Pratishthan</strong></span>
              </div>

              <div className="footer-helpline-pill">
                <div className="helpline-icon">
                  <Phone size={13} />
                </div>
                <div>
                  <span className="helpline-label">Toll-Free Leader Support</span>
                  <a href="tel:7043421590" className="helpline-number">+91 70434 21590</a>
                </div>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="footer-col-card">
              <h4 className="footer-col-title">
                <span>Explore</span>
                <span className="title-dot" />
              </h4>
              <ul className="footer-nav-links">
                <li>
                  <a href="#hero" onClick={(e) => handleLinkClick(e, 'home')}>
                    <ChevronRight size={13} className="link-arrow" />
                    <span>Home Page</span>
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
                    <ChevronRight size={13} className="link-arrow" />
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" onClick={(e) => handleLinkClick(e, 'how-it-works')}>
                    <ChevronRight size={13} className="link-arrow" />
                    <span>How It Works</span>
                  </a>
                </li>
                <li>
                  <a href="#network-structure" onClick={(e) => handleLinkClick(e, 'network-structure')}>
                    <ChevronRight size={13} className="link-arrow" />
                    <span>20-Level Network</span>
                  </a>
                </li>
                <li>
                  <a href="#products-store" onClick={(e) => handleLinkClick(e, 'products-store')}>
                    <ChevronRight size={13} className="link-arrow" />
                    <span>Daily FMCG Store</span>
                  </a>
                </li>
                <li>
                  <a href="#footer-contact" onClick={(e) => handleLinkClick(e, 'footer-contact')}>
                    <ChevronRight size={13} className="link-arrow" />
                    <span>Kirana Merchant Network</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Member Services */}
            <div className="footer-col-card">
              <h4 className="footer-col-title">
                <span>Member Area</span>
                <span className="title-dot" />
              </h4>
              <ul className="footer-nav-links">
                <li>
                  <a href="#login" onClick={(e) => { e.preventDefault(); if (onOpenAuth) onOpenAuth(); }}>
                    <ChevronRight size={13} className="link-arrow" />
                    <span>Member Login</span>
                  </a>
                </li>
                <li>
                  <a href="#register" onClick={(e) => { e.preventDefault(); if (onOpenAuth) onOpenAuth(); }}>
                    <ChevronRight size={13} className="link-arrow" />
                    <span>Register Free (Zero Fee)</span>
                  </a>
                </li>
                <li>
                  <a href="#matrix" onClick={(e) => handleLinkClick(e, 'network-structure')}>
                    <ChevronRight size={13} className="link-arrow" />
                    <span>1:3 Auto Spillover</span>
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={(e) => handleLinkClick(e, 'how-it-works')}>
                    <ChevronRight size={13} className="link-arrow" />
                    <span>Compensation FAQs</span>
                  </a>
                </li>
                <li>
                  <a href="#about-foundation" onClick={(e) => handleLinkClick(e, 'about')}>
                    <ChevronRight size={13} className="link-arrow" />
                    <span>Foundation Seva</span>
                  </a>
                </li>
                <li>
                  <a href="#support" onClick={(e) => handleLinkClick(e, 'footer-contact')}>
                    <ChevronRight size={13} className="link-arrow" />
                    <span>Direct Helpline</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Location */}
            <div className="footer-col-card contact-col-card">
              <h4 className="footer-col-title">
                <span>Contact Us</span>
                <span className="title-dot" />
              </h4>
              <div className="footer-contact-items-list">
                <div className="contact-item-box">
                  <div className="contact-icon-circle">
                    <Phone size={15} />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Customer & Member Care</span>
                    <a href="tel:7043421590" className="contact-val-link">7043421590</a>
                  </div>
                </div>

                <div className="contact-item-box">
                  <div className="contact-icon-circle">
                    <Mail size={15} />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Official Email</span>
                    <a href="mailto:info@kharchdaan.com" className="contact-val-link">info@kharchdaan.com</a>
                  </div>
                </div>

                <div className="contact-item-box">
                  <div className="contact-icon-circle">
                    <MapPin size={15} />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Head Office</span>
                    <span className="contact-val-text">Vasna, Ahmedabad, Gujarat - 380007</span>
                  </div>
                </div>

                <div className="contact-item-box">
                  <div className="contact-icon-circle">
                    <Clock size={15} />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Support Timing</span>
                    <span className="contact-val-text">Mon – Sat: 9:30 AM to 6:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 5: Social Connect & Sacred Heritage */}
            <div className="footer-col-card heritage-col-card">
              <h4 className="footer-col-title">
                <span>Follow & Connect</span>
                <span className="title-dot" />
              </h4>

              {/* Social Media Circular Buttons */}
              <div className="footer-social-icons-row">
                <a href="#facebook" className="social-icon-circle fb" title="Facebook" aria-label="Facebook">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#youtube" className="social-icon-circle yt" title="YouTube" aria-label="YouTube">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#instagram" className="social-icon-circle ig" title="Instagram" aria-label="Instagram">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#linkedin" className="social-icon-circle in" title="LinkedIn" aria-label="LinkedIn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

              {/* Sacred Temple Heritage Box */}
              <div className="footer-temple-card">
                <TempleHeritageIllustration />
                <div className="temple-card-sub">
                  <span>“तेरा तुझको अर्पण क्या लागे मेरा”</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Sub-Footer Bottom Bar */}
      <div className="sub-footer-bottom">
        <div className="container sub-footer-inner">
          <div className="sub-footer-left">
            <span>© 2026 <strong>KharchDaan.Com</strong>. All rights reserved.</span>
            <span className="sub-footer-sep">•</span>
            <span className="sub-footer-motto">Built with <Heart size={12} className="heart-icon-inline" /> for Bharat</span>
          </div>

          <div className="sub-footer-right-links">
            <a href="#terms" onClick={(e) => handleLinkClick(e, 'about')}>Terms & Conditions</a>
            <span className="sep">|</span>
            <a href="#privacy" onClick={(e) => handleLinkClick(e, 'about')}>Privacy Policy</a>
            <span className="sep">|</span>
            <a href="#refund" onClick={(e) => handleLinkClick(e, 'about')}>Refund Policy</a>
            <span className="sep">|</span>
            <a href="#disclaimer" onClick={(e) => handleLinkClick(e, 'about')}>Direct Selling Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
