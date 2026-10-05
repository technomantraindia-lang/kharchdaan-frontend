import React, { useState, useRef } from 'react';
import { 
  ShoppingBag, User, Search, Phone, Mail, Menu, X, LogOut, Heart, 
  ChevronDown, ChevronRight, Sparkles, TrendingUp, Coins, Store, 
  ShieldCheck, ArrowRight, Gift, Zap, CheckCircle2, Award, Users,
  Coffee, Package, Layers, HeartHandshake, Eye, QrCode, FileCheck
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

/* ==========================================================================
   PREMIUM CUSTOM VECTOR SVG ICONS FOR MEGAMENU
   ========================================================================== */

// 1. Grocery & Staples (Golden Wheat & Grain Sack)
const WheatStaplesSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 21C7 16 10 12 17 9" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 21C12 18 14 15 19 13" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
    <path d="M17 9C17 6.5 15.5 4 13 4C13 6.5 14.5 9 17 9Z" fill="#FDBA74" stroke="#EA580C" strokeWidth="1.5" />
    <path d="M19 13C19 10.5 17.5 8 15 8C15 10.5 16.5 13 19 13Z" fill="#FDBA74" stroke="#EA580C" strokeWidth="1.5" />
    <path d="M21 17C21 14.5 19.5 12 17 12C17 14.5 18.5 17 21 17Z" fill="#FDBA74" stroke="#EA580C" strokeWidth="1.5" />
    <path d="M4 21H10" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 2. Food & Beverages (Steaming Cup with Tea Leaves)
const FoodBeverageSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8H17V15C17 17.2091 15.2091 19 13 19H7C4.79086 19 3 17.2091 3 15V8Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M17 10H19C20.1046 10 21 10.8954 21 12V13C21 14.1046 20.1046 15 19 15H17" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M2 21H18" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 4C7 5.5 6 6 6 7.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 3C11 4.5 10 5 10 6.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 4C15 5.5 14 6 14 7.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// 3. Personal & Household Care (Sparkling Soap Dispenser & Foam Bubbles)
const PersonalCareSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="9" width="12" height="12" rx="3" fill="#FDF2F8" stroke="#DB2777" strokeWidth="1.8" />
    <path d="M10 9V6C10 4.89543 10.8954 4 12 4H14" stroke="#BE185D" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M10 6H16" stroke="#BE185D" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="14" r="2" fill="#F472B6" />
    <circle cx="19" cy="5" r="2" fill="#FBCFE8" stroke="#DB2777" strokeWidth="1.2" />
    <circle cx="21" cy="9" r="1.2" fill="#F472B6" />
  </svg>
);

// 4. Health & Wellness (Ayurvedic Herbal Leaf & Health Cross)
const HealthWellnessSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#F0FDF4" stroke="#16A34A" strokeWidth="1.8" />
    <path d="M12 8V16M8 12H16" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M18 6C18 6 19.5 8 18.5 9.5C17 9.5 16.5 8 18 6Z" fill="#15803D" />
  </svg>
);

// 5. Neighbourhood Kirana Network (Shop with Awning & QR Badge)
const KiranaStoreSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9L4 4H20L21 9" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 9C3 10.1046 3.89543 11 5 11C6.10457 11 7 10.1046 7 9C7 10.1046 7.89543 11 9 11C10.1046 11 11 10.1046 11 9C11 10.1046 11.8954 11 13 11C14.1046 11 15 10.1046 15 9C15 10.1046 15.8954 11 17 11C18.1046 11 19 10.1046 19 9C19 10.1046 19.8954 11 21 11" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M4 11V20H20V11" stroke="#16A34A" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 20V14H15V20" fill="#BBF7D0" stroke="#16A34A" strokeWidth="1.8" />
  </svg>
);

// 6. Instant Cashback Wallet (Glowing Wallet with Coins)
const CashbackWalletSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 7C3 5.89543 3.89543 5 5 5H18C19.1046 5 20 5.89543 20 7V9H5C3.89543 9 3 8.10457 3 7Z" fill="#FAF5FF" stroke="#9333EA" strokeWidth="1.8" />
    <rect x="3" y="8" width="18" height="12" rx="3" fill="#FAF5FF" stroke="#9333EA" strokeWidth="1.8" />
    <path d="M16 14H21V18H16C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14Z" fill="#E9D5FF" stroke="#9333EA" strokeWidth="1.6" />
    <circle cx="17.5" cy="16" r="1.2" fill="#7E22CE" />
  </svg>
);

// 7. 100% Genuine Brand Sourcing (Badge of Authenticity)
const GenuineBadgeSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L20 6.5V12C20 16.5 16.5 20.5 12 22C7.5 20.5 4 16.5 4 12V6.5L12 3Z" fill="#FFF7ED" stroke="#EA580C" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12L11 14L15 9.5" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 8. Monthly Delivery (Fast Delivery Box / Truck)
const DeliveryBoxSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 8.5H19L22 12V17H19M16.5 8.5V17H19M16.5 8.5H3V17H6" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="8.5" cy="17.5" r="2.5" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.8" />
    <circle cx="16.5" cy="17.5" r="2.5" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.8" />
    <path d="M6 12H11" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 9. 1:3 Power Matrix System (Connected Matrix Network Nodes)
const PowerMatrixSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="5" r="3" fill="#FFF7ED" stroke="#EA580C" strokeWidth="1.8" />
    <circle cx="5" cy="18" r="2.5" fill="#FFF7ED" stroke="#EA580C" strokeWidth="1.8" />
    <circle cx="12" cy="18" r="2.5" fill="#FFF7ED" stroke="#EA580C" strokeWidth="1.8" />
    <circle cx="19" cy="18" r="2.5" fill="#FFF7ED" stroke="#EA580C" strokeWidth="1.8" />
    <path d="M12 8V12M12 12L5 15.5M12 12L19 15.5M12 12V15.5" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 10. 20 Levels Earning Depth (Ascending Growth Steps)
const EarningDepthSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 20H21" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
    <rect x="4" y="14" width="3.5" height="6" rx="1" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
    <rect x="10.25" y="10" width="3.5" height="10" rx="1" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
    <rect x="16.5" y="6" width="3.5" height="14" rx="1" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
    <path d="M5.5 10L12 4L18.5 7" stroke="#15803D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 4H18.5V6.5" stroke="#15803D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 11. Leadership & Royalty Pool (Royal Crown & Gems)
const RoyaltyCrownSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 18L3 8L8 12L12 5L16 12L21 8L20 18H4Z" fill="#FAF5FF" stroke="#9333EA" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="3" cy="7" r="1.5" fill="#C084FC" />
    <circle cx="12" cy="4" r="1.5" fill="#C084FC" />
    <circle cx="21" cy="7" r="1.5" fill="#C084FC" />
    <rect x="4" y="18" width="16" height="2.5" rx="1" fill="#E9D5FF" stroke="#9333EA" strokeWidth="1.2" />
  </svg>
);

// 12. Instant Payouts (Lightning Fast Zap)
const InstantPayoutSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L4 13H11L10 22L20 10H13L15 2H13Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 13. Geeta Sevashram Pratishthan (Sacred Foundation Shikhara / Kalash)
const FoundationSevaSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14 6H10L12 2Z" fill="#EA580C" />
    <path d="M8 8C8 12 9 16 7 19H17C15 16 16 12 16 8H8Z" fill="#FFEDD5" stroke="#EA580C" strokeWidth="1.5" />
    <path d="M6 19H18V22H6V19Z" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.2" />
    <circle cx="12" cy="13" r="2" fill="#EA580C" />
  </svg>
);

// 14. Women & Homemaker Dignity (Empowerment Profile)
const WomenDignitySvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" fill="#FDF2F8" stroke="#DB2777" strokeWidth="1.8" />
    <path d="M5 20C5 16.6863 8.13401 14 12 14C15.866 14 19 16.6863 19 20" stroke="#DB2777" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M18 4C18 4 20 4.5 20 6.5C18.5 7 18 5.5 18 4Z" fill="#BE185D" />
  </svg>
);

// 15. Kirana Merchant Modernization (QR Scanner & Shop)
const QrMerchantSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="6" height="6" rx="1.5" stroke="#0284C7" strokeWidth="1.8" />
    <rect x="14" y="4" width="6" height="6" rx="1.5" stroke="#0284C7" strokeWidth="1.8" />
    <rect x="4" y="14" width="6" height="6" rx="1.5" stroke="#0284C7" strokeWidth="1.8" />
    <path d="M14 14H16V16H14V14Z" fill="#0284C7" />
    <path d="M18 14H20V20H14V18H18V14Z" fill="#0284C7" />
    <circle cx="7" cy="7" r="1" fill="#0284C7" />
    <circle cx="17" cy="7" r="1" fill="#0284C7" />
    <circle cx="7" cy="17" r="1" fill="#0284C7" />
  </svg>
);

// 16. Govt. Direct Selling Ethics (Scales of Ethics / Law)
const GovtEthicsSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3V21M7 21H17M4 7L12 5L20 7" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 7L2 13C2 14.5 3.5 15 5 15C6.5 15 8 14.5 8 13L6 7" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
    <path d="M18 7L16 13C16 14.5 17.5 15 19 15C20.5 15 22 14.5 22 13L20 7" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
  </svg>
);

// 17. Top Bar Announcement Sacred Lotus / Floral Sparkle Vector SVG
const TopBarLotusSvg = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="top-bar-svg-icon"
    aria-hidden="true"
  >
    {/* Center Sacred Petal */}
    <path 
      d="M12 3C12 3 14.5 7.5 14.5 11C14.5 13.5 13.4 15.5 12 15.5C10.6 15.5 9.5 13.5 9.5 11C9.5 7.5 12 3 12 3Z" 
      fill="#FFFFFF" 
    />
    {/* Left Radiant Petal */}
    <path 
      d="M9.5 8C8 9.5 5 11.5 5 14C5 16 7 17.5 9 17C10.5 16.6 11.5 15.5 11.5 14C11.5 11.5 9.5 8 9.5 8Z" 
      fill="#FEF08A" 
      opacity="0.95" 
    />
    {/* Right Radiant Petal */}
    <path 
      d="M14.5 8C16 9.5 19 11.5 19 14C19 16 17 17.5 15 17C13.5 16.6 12.5 15.5 12.5 14C12.5 11.5 14.5 8 14.5 8Z" 
      fill="#FEF08A" 
      opacity="0.95" 
    />
    {/* Base Calyx Lotus Foundation */}
    <path 
      d="M7 17.5C10 20.2 14 20.2 17 17.5C15 19.2 9 19.2 7 17.5Z" 
      fill="#FFFFFF" 
    />
    {/* Center Core Bindu Dot */}
    <circle cx="12" cy="12.5" r="1.5" fill="#EA580C" />
  </svg>
);


export const Navbar = ({ 
  onOpenAuth, 
  onOpenAccount, 
  onSearchChange, 
  searchTerm, 
  currentPage = 'home',
  onNavigate,
  onSelectCategory
}) => {
  const { totalItems, setIsCartOpen } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState('');
  const [activeMegamenu, setActiveMegamenu] = useState(null); // 'products' | 'directSelling' | null

  const timeoutRef = useRef(null);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegamenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegamenu(null);
    }, 180);
  };

  const handleNavClick = (target, categoryFilter = null) => {
    setActiveMegamenu(null);
    setMobileMenuOpen(false);

    const dedicatedTopicPages = [
      'power-matrix', 'earning-depth', 'royalty-pool', 
      'instant-payouts', 'foundation-seva', 'women-empowerment', 
      'kirana-merchant', 'govt-ethics', 'direct-selling-topic',
      'grocery-staples', 'food-beverages', 'personal-household-care', 
      'health-wellness', 'neighbourhood-kirana-network', 'kirana-network', 
      'instant-cashback-wallet', 'genuine-brand-stock', 'monthly-ration-delivery', 
      'family-grocery-hamper'
    ];

    if (dedicatedTopicPages.includes(target)) {
      if (onNavigate) onNavigate(target, categoryFilter);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (categoryFilter && onSelectCategory) {
      onSelectCategory(categoryFilter);
      return;
    }

    if (target === 'products' || target === 'products-store') {
      if (onNavigate) onNavigate('products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'about') {
      if (onNavigate) onNavigate('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'how-it-works') {
      if (onNavigate) onNavigate('how-it-works');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'contact' || target === 'contact-us' || target === 'footer-contact') {
      if (onNavigate) onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'hero' || target === 'home') {
      if (onNavigate) onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (onNavigate && currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      const element = document.getElementById(target);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveMegamenu(null);
    if (onNavigate) {
      if (onSearchChange) onSearchChange(localSearch);
      onNavigate('products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-wrapper sticky-top">
      {/* 1. Top Orange Announcement Bar */}
      <div className="top-orange-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-flower-icon">
              <TopBarLotusSvg />
            </span>
            <span>Welcome to KharchDaan.Com &nbsp;|&nbsp; Simple Shopping • Direct Selling System • Up to 100% Cashback (as per rules) • Grow Together</span>
          </div>
          <div className="top-bar-right">
            <a href="tel:7043421590" className="top-contact-link">
              <Phone size={13} />
              <span>7043421590</span>
            </a>
            <a href="mailto:info@kharchdaan.com" className="top-contact-link">
              <Mail size={13} />
              <span>info@kharchdaan.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className="navbar-main-clean">
        <div className="container nav-content-clean">
          {/* Official Brand Logo */}
          <div className="nav-brand-clean" onClick={() => handleNavClick('hero')}>
            <img 
              src="/images/kharchdaan-logo.png" 
              alt="KharchDaan.Com - Tera Tujhko Arpan" 
              className="site-logo-img"
            />
          </div>

          {/* Navigation Links with Modern Mega Menu Triggers */}
          <div className="nav-links-clean desktop-nav">
            <button 
              className={`nav-link-btn ${currentPage === 'home' && !activeMegamenu ? 'active' : ''}`}
              onClick={() => handleNavClick('hero')}
            >
              Home
            </button>
            
            <button 
              className={`nav-link-btn ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About Us
            </button>
            
            {/* Mega Menu 1: Products & Services */}
            <div 
              className={`nav-megamenu-item ${activeMegamenu === 'products' ? 'is-open' : ''}`}
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`nav-link-btn with-arrow ${[
                  'products', 'grocery-staples', 'food-beverages', 'personal-household-care', 
                  'health-wellness', 'neighbourhood-kirana-network', 'kirana-network', 
                  'instant-cashback-wallet', 'genuine-brand-stock', 'monthly-ration-delivery', 
                  'family-grocery-hamper'
                ].includes(currentPage) || activeMegamenu === 'products' ? 'active' : ''}`}
                onClick={() => handleNavClick('products')}
              >
                <span>Products & Services</span>
                <ChevronDown size={14} className="dropdown-arrow-icon" />
              </button>

              {/* Ultra-Premium Megamenu Dropdown */}
              <div className="megamenu-dropdown-panel megamenu-products">
                <div className="megamenu-inner-grid">
                  
                  {/* Col 1: FMCG & Grocery Categories */}
                  <div className="megamenu-col">
                    <div className="megamenu-col-header">
                      <ShoppingBag size={16} className="text-orange" />
                      <span>FMCG & Daily Groceries</span>
                    </div>
                    <ul className="megamenu-links-list">
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('grocery-staples')}
                        >
                          <div className="megamenu-icon-circle orange">
                            <WheatStaplesSvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>Grocery & Staples</strong>
                            <span>Aashirvaad Atta, Fortune Oil, Rice & Dal</span>
                          </div>
                        </button>
                      </li>
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('food-beverages')}
                        >
                          <div className="megamenu-icon-circle saffron">
                            <FoodBeverageSvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>Food & Beverages</strong>
                            <span>Tata Tea, Dairy Milk, Biscuits & Snacks</span>
                          </div>
                        </button>
                      </li>
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('personal-household-care')}
                        >
                          <div className="megamenu-icon-circle pink">
                            <PersonalCareSvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>Personal & Household Care</strong>
                            <span>Surf Excel, Dettol, Vim & Oral Care</span>
                          </div>
                        </button>
                      </li>
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('health-wellness')}
                        >
                          <div className="megamenu-icon-circle green">
                            <HealthWellnessSvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>Health & Wellness</strong>
                            <span>Ayurvedic Essentials, Immunity & Nutrition</span>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Col 2: Direct Commerce Services */}
                  <div className="megamenu-col">
                    <div className="megamenu-col-header">
                      <Zap size={16} className="text-orange" />
                      <span>Ecosystem Services</span>
                    </div>
                    <ul className="megamenu-links-list">
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('neighbourhood-kirana-network')}
                        >
                          <div className="megamenu-icon-circle green">
                            <KiranaStoreSvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>Neighbourhood Kirana Network</strong>
                            <span>Shop from 5,000+ local partners with QR</span>
                          </div>
                        </button>
                      </li>
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('instant-cashback-wallet')}
                        >
                          <div className="megamenu-icon-circle purple">
                            <CashbackWalletSvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>Instant Cashback Wallet</strong>
                            <span>Up to 100% cashback + 1-click UPI payout</span>
                          </div>
                        </button>
                      </li>
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('genuine-brand-stock')}
                        >
                          <div className="megamenu-icon-circle orange">
                            <GenuineBadgeSvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>100% Genuine Brand Stock</strong>
                            <span>Direct manufacturer supply with zero duplicates</span>
                          </div>
                        </button>
                      </li>
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('monthly-ration-delivery')}
                        >
                          <div className="megamenu-icon-circle blue">
                            <DeliveryBoxSvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>Monthly Ration Home Delivery</strong>
                            <span>Scheduled doorstep delivery for families</span>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Col 3: Spotlight Feature Banner */}
                  <div className="megamenu-spotlight-card">
                    <div className="spotlight-tag">
                      <Sparkles size={12} />
                      <span>BEST VALUE DEAL</span>
                    </div>
                    <h4 className="spotlight-title">Monthly Family Grocery Hamper</h4>
                    <p className="spotlight-desc">
                      Get essential daily items at discounted MRP while generating maximum PV points for your 20-level team matrix.
                    </p>
                    <div className="spotlight-benefits-row">
                      <span>✓ 100% Genuine</span>
                      <span>✓ Extra PV Boost</span>
                    </div>
                    <button 
                      className="spotlight-action-btn"
                      onClick={() => handleNavClick('family-grocery-hamper')}
                    >
                      <span>Explore Hamper Details</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                </div>
              </div>
            </div>

            <button 
              className={`nav-link-btn ${currentPage === 'how-it-works' ? 'active' : ''}`}
              onClick={() => handleNavClick('how-it-works')}
            >
              How It Works
            </button>

            {/* Mega Menu 2: Direct Selling System */}
            <div 
              className={`nav-megamenu-item ${activeMegamenu === 'directSelling' ? 'is-open' : ''}`}
              onMouseEnter={() => handleMouseEnter('directSelling')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`nav-link-btn with-arrow ${['power-matrix', 'earning-depth', 'royalty-pool', 'instant-payouts', 'foundation-seva', 'women-empowerment', 'kirana-merchant', 'govt-ethics', 'direct-selling-topic'].includes(currentPage) || activeMegamenu === 'directSelling' ? 'active' : ''}`}
                onClick={() => handleNavClick('power-matrix')}
              >
                <span>Direct Selling</span>
                <ChevronDown size={14} className="dropdown-arrow-icon" />
              </button>

              {/* Ultra-Premium Direct Selling Megamenu Dropdown */}
              <div className="megamenu-dropdown-panel megamenu-direct-selling">
                <div className="megamenu-inner-grid">
                  
                  {/* Col 1: 20-Level Compensation Structure */}
                  <div className="megamenu-col">
                    <div className="megamenu-col-header">
                      <TrendingUp size={16} className="text-orange" />
                      <span>Compensation & Matrix</span>
                    </div>
                    <ul className="megamenu-links-list">
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('power-matrix')}
                        >
                          <div className="megamenu-icon-circle orange">
                            <PowerMatrixSvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>1:3 Power Matrix System</strong>
                            <span>Automated spillover placement on team growth</span>
                          </div>
                        </button>
                      </li>
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('earning-depth')}
                        >
                          <div className="megamenu-icon-circle green">
                            <EarningDepthSvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>20 Levels Earning Depth</strong>
                            <span>Tiered recurring royalties on household groceries</span>
                          </div>
                        </button>
                      </li>
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('royalty-pool')}
                        >
                          <div className="megamenu-icon-circle purple">
                            <RoyaltyCrownSvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>Leadership & Royalty Pool</strong>
                            <span>Monthly company turnover profit shares</span>
                          </div>
                        </button>
                      </li>
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('instant-payouts')}
                        >
                          <div className="megamenu-icon-circle saffron">
                            <InstantPayoutSvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>Instant UPI & Bank Payouts</strong>
                            <span>Real-time wallet withdrawals without delays</span>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Col 2: Social Mission & Empowerment */}
                  <div className="megamenu-col">
                    <div className="megamenu-col-header">
                      <HeartHandshake size={16} className="text-orange" />
                      <span>Mission & Foundation</span>
                    </div>
                    <ul className="megamenu-links-list">
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('foundation-seva')}
                        >
                          <div className="megamenu-icon-circle saffron">
                            <FoundationSevaSvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>Geeta Sevashram Pratishthan</strong>
                            <span>Social foundation driving community seva</span>
                          </div>
                        </button>
                      </li>
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('women-empowerment')}
                        >
                          <div className="megamenu-icon-circle pink">
                            <WomenDignitySvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>Women & Homemaker Dignity</strong>
                            <span>Work from home passive income leadership</span>
                          </div>
                        </button>
                      </li>
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('kirana-merchant')}
                        >
                          <div className="megamenu-icon-circle blue">
                            <QrMerchantSvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>Kirana Merchant Modernization</strong>
                            <span>Digital QR code onboarding & footfall boost</span>
                          </div>
                        </button>
                      </li>
                      <li>
                        <button 
                          className="megamenu-link-btn"
                          onClick={() => handleNavClick('govt-ethics')}
                        >
                          <div className="megamenu-icon-circle green">
                            <GovtEthicsSvg />
                          </div>
                          <div className="megamenu-text-wrap">
                            <strong>Govt. Direct Selling Ethics</strong>
                            <span>100% compliant with consumer protection norms</span>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Col 3: Member Onboarding Promo */}
                  <div className="megamenu-spotlight-card direct-selling-promo">
                    <div className="spotlight-tag saffron">
                      <Gift size={12} />
                      <span>FREE REGISTRATION</span>
                    </div>
                    <h4 className="spotlight-title">Start Your Earning Journey</h4>
                    <p className="spotlight-desc">
                      Join 25,000+ Indian families turning inescapable monthly grocery bills into passive income.
                    </p>
                    <div className="promo-trust-points">
                      <div className="promo-point"><CheckCircle2 size={13} className="text-green" /> <span>Zero Starter Kit Barrier</span></div>
                      <div className="promo-point"><CheckCircle2 size={13} className="text-green" /> <span>Zero Deposit Required</span></div>
                    </div>
                    <button 
                      className="spotlight-action-btn primary"
                      onClick={() => { setActiveMegamenu(null); onOpenAuth(); }}
                    >
                      <span>Join as a Member — Free</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                </div>
              </div>
            </div>

            <button 
              className={`nav-link-btn ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact Us
            </button>
          </div>

          {/* Desktop Search Input Box */}
          <form className="nav-search-form desktop-search" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search products, services..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="nav-search-input"
            />
            <button type="submit" className="nav-search-submit-btn" title="Search">
              <Search size={15} />
            </button>
          </form>

          {/* Right User Actions */}
          <div className="nav-actions-clean">
            {isAuthenticated ? (
              <div className="nav-user-clean">
                <button className="btn-account-pill-clean" onClick={onOpenAccount}>
                  <div className="avatar-mini">
                    {user?.name ? user.name[0].toUpperCase() : 'U'}
                  </div>
                  <span>{user?.name?.split(' ')[0] || 'Member'}</span>
                </button>
                <button className="btn-logout-clean" title="Logout" onClick={logout}>
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <div className="auth-btn-group">
                <button className="btn-login-outline" onClick={onOpenAuth}>
                  <User size={14} />
                  <span>Login</span>
                </button>
                <button className="btn-register-solid" onClick={onOpenAuth}>
                  <User size={14} />
                  <span>Register</span>
                </button>
              </div>
            )}

            {/* Cart Drawer Trigger */}
            <button className="btn-cart-clean" onClick={() => setIsCartOpen(true)} title="View Cart">
              <ShoppingBag size={18} />
              {totalItems > 0 && <span className="cart-badge-clean">{totalItems}</span>}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="btn-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <form className="mobile-search-form" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search products, services..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
              />
              <button type="submit">
                <Search size={16} />
              </button>
            </form>
            <button onClick={() => handleNavClick('hero')}>Home</button>
            <button onClick={() => handleNavClick('about')}>About Us</button>
            <button onClick={() => handleNavClick('products-store')}>Products & Services</button>
            <button onClick={() => handleNavClick('how-it-works')}>How It Works</button>
            <button onClick={() => handleNavClick('power-matrix')}>Direct Selling</button>
            <button onClick={() => handleNavClick('contact')}>Contact Us</button>
            {!isAuthenticated && (
              <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
                <button className="btn-login-outline" style={{ flex: 1 }} onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }}>
                  Login
                </button>
                <button className="btn-register-solid" style={{ flex: 1 }} onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }}>
                  Register
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};
