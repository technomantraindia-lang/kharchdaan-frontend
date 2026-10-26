import React, { useState, useRef, useEffect } from 'react';
import { 
  ShoppingBag, User, Search, Phone, Mail, Menu, X, LogOut, 
  ChevronDown, ChevronRight, Sparkles, TrendingUp, Coins, Store, 
  ShieldCheck, ArrowRight, Gift, Zap, CheckCircle2, Award, Users,
  HeartHandshake, Package
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useProducts, getSmartProductImage } from '../context/ProductsContext';
import { ALL_PRODUCTS } from '../data/productsData';

/* ==========================================================================
   CLEAN VECTOR SVG ICONS FOR INTUITIVE DROPDOWNS
   ========================================================================== */

// Top Bar Announcement Lotus / Floral Sparkle Vector SVG
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
    <path 
      d="M12 3C12 3 14.5 7.5 14.5 11C14.5 13.5 13.4 15.5 12 15.5C10.6 15.5 9.5 13.5 9.5 11C9.5 7.5 12 3 12 3Z" 
      fill="#FFFFFF" 
    />
    <path 
      d="M9.5 8C8 9.5 5 11.5 5 14C5 16 7 17.5 9 17C10.5 16.6 11.5 15.5 11.5 14C11.5 11.5 9.5 8 9.5 8Z" 
      fill="#FEF08A" 
      opacity="0.95" 
    />
    <path 
      d="M14.5 8C16 9.5 19 11.5 19 14C19 16 17 17.5 15 17C13.5 16.6 12.5 15.5 12.5 14C12.5 11.5 14.5 8 14.5 8Z" 
      fill="#FEF08A" 
      opacity="0.95" 
    />
    <path 
      d="M7 17.5C10 20.2 14 20.2 17 17.5C15 19.2 9 19.2 7 17.5Z" 
      fill="#FFFFFF" 
    />
    <circle cx="12" cy="12.5" r="1.5" fill="#EA580C" />
  </svg>
);

export const Navbar = ({ 
  onOpenAuth, 
  onOpenAccount, 
  onSearchSubmit,
  onSearchChange, 
  searchTerm = '', 
  currentPage = 'home',
  onNavigate,
  onSelectCategory,
  onSelectProduct
}) => {
  const { totalItems, setIsCartOpen } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const { products, isBackendConnected } = useProducts();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState(searchTerm);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'products' | 'directSelling' | null
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchContainerRef = useRef(null);
  const mobileSearchContainerRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  const POPULAR_SEARCH_CHIPS = ['Aashirvaad Atta', 'Fortune Oil', 'Tata Tea', 'Amul Ghee', 'Surf Excel', 'Daawat Basmati Rice'];

  // Sync external search term
  useEffect(() => {
    setLocalSearch(searchTerm || '');
  }, [searchTerm]);

  // Handle outside click to close search suggestions
  useEffect(() => {
    const handleClickOutside = (e) => {
      const inDesktop = searchContainerRef.current && searchContainerRef.current.contains(e.target);
      const inMobile = mobileSearchContainerRef.current && mobileSearchContainerRef.current.contains(e.target);
      if (!inDesktop && !inMobile) {
        setShowSearchSuggestions(false);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compute live search suggestions (up to 8 items across all product attributes with token matching)
  const searchSuggestions = React.useMemo(() => {
    const q = (localSearch || '').trim().toLowerCase();
    if (!q || q.length < 1) return [];
    const sourceList = (products && products.length > 0) ? products : (ALL_PRODUCTS || []);
    const tokens = q.split(/\s+/).filter(Boolean);

    return sourceList.filter(p => {
      const catName = typeof p.category === 'object' ? (p.category?.name || '') : String(p.category || '');
      const searchable = `${p.name || ''} ${p.brand || ''} ${catName} ${p.subCategory || ''} ${p.shortDescription || ''} ${p.description || ''} ${p.ingredients || ''} ${p.sku || ''}`.toLowerCase();
      return tokens.every(tok => searchable.includes(tok));
    }).slice(0, 8);
  }, [localSearch, products]);

  const handleMouseEnter = (menuName) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleNavClick = (target, categoryFilter = null) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setShowSearchSuggestions(false);

    if (categoryFilter && onSelectCategory) {
      onSelectCategory(categoryFilter);
      return;
    }

    if (target === 'products' || target === 'shop') {
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

    if (target === 'direct-selling' || target === 'mlm-plan') {
      if (onNavigate) onNavigate('direct-selling');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'power-matrix') {
      if (onNavigate) onNavigate('power-matrix');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'contact' || target === 'contact-us') {
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

  const executeSearch = (query) => {
    setShowSearchSuggestions(false);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const cleaned = (query || '').trim();
    if (onSearchSubmit) {
      onSearchSubmit(cleaned);
    } else if (onSearchChange) {
      onSearchChange(cleaned);
      if (onNavigate) onNavigate('products');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchKeyDown = (e) => {
    if (!showSearchSuggestions) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        setShowSearchSuggestions(true);
      }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev < searchSuggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev > 0 ? prev - 1 : searchSuggestions.length - 1));
    } else if (e.key === 'Enter') {
      if (highlightedIndex >= 0 && searchSuggestions[highlightedIndex]) {
        e.preventDefault();
        handleSuggestionClick(searchSuggestions[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      setShowSearchSuggestions(false);
      setHighlightedIndex(-1);
    }
  };

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    if (highlightedIndex >= 0 && searchSuggestions[highlightedIndex]) {
      handleSuggestionClick(searchSuggestions[highlightedIndex]);
    } else {
      executeSearch(localSearch);
    }
  };

  const handleSuggestionClick = (product) => {
    setShowSearchSuggestions(false);
    setHighlightedIndex(-1);
    setLocalSearch('');
    if (onSelectProduct) {
      onSelectProduct(product);
    } else if (onNavigate) {
      onNavigate('products');
    }
  };

  const handleClearSearch = () => {
    setLocalSearch('');
    setShowSearchSuggestions(false);
    if (onSearchChange) onSearchChange('');
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
            <span>Welcome to KharchDaan.Com &nbsp;|&nbsp; 100% Genuine Brands • Direct Selling System • Up to 100% Cashback (as per rules) • Grow Together</span>
          </div>
          <div className="top-bar-right">
            <a href="tel:7043421590" className="top-contact-link">
              <Phone size={13} />
              <span>+91 70434 21590</span>
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
          <div className="nav-brand-clean" onClick={() => handleNavClick('hero')} title="KharchDaan.Com Home">
            <img 
              src="/images/kharchdaan-logo.png" 
              alt="KharchDaan.Com - Tera Tujhko Arpan" 
              className="site-logo-img"
            />
          </div>

          {/* Clean, Streamlined Desktop Navigation Links */}
          <div className="nav-links-clean desktop-nav">
            <button 
              className={`nav-link-btn ${currentPage === 'home' && !activeDropdown ? 'active' : ''}`}
              onClick={() => handleNavClick('hero')}
            >
              Home
            </button>
            
            {/* Products & Categories Dropdown */}
            <div 
              className={`nav-megamenu-item ${activeDropdown === 'products' ? 'is-open' : ''}`}
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`nav-link-btn with-arrow ${currentPage === 'products' || activeDropdown === 'products' ? 'active' : ''}`}
                onClick={() => handleNavClick('products')}
              >
                <span>Shop Products</span>
                <ChevronDown size={14} className="dropdown-arrow-icon" />
              </button>

              {/* Clean, High-Impact Category Dropdown */}
              <div className="simple-dropdown-menu">
                <div className="dropdown-header-strip">
                  <ShoppingBag size={15} className="text-orange" />
                  <span>Product Categories</span>
                </div>
                <button 
                  className="dropdown-item-btn"
                  onClick={() => handleNavClick('products', 'All')}
                >
                  <div className="dropdown-item-icon orange">
                    <ShoppingBag size={16} />
                  </div>
                  <div className="dropdown-item-text">
                    <strong>All Products Store</strong>
                    <span>Browse 500+ genuine FMCG staples</span>
                  </div>
                </button>
                <button 
                  className="dropdown-item-btn"
                  onClick={() => handleNavClick('products', 'Daily Needs')}
                >
                  <div className="dropdown-item-icon saffron">
                    <Package size={16} />
                  </div>
                  <div className="dropdown-item-text">
                    <strong>Grocery & Staples</strong>
                    <span>Aashirvaad Atta, Fortune Oil, Rice, Dal & Ghee</span>
                  </div>
                </button>
                <button 
                  className="dropdown-item-btn"
                  onClick={() => handleNavClick('products', 'Food')}
                >
                  <div className="dropdown-item-icon green">
                    <Sparkles size={16} />
                  </div>
                  <div className="dropdown-item-text">
                    <strong>Food & Beverages</strong>
                    <span>Tata Tea, Cadbury Silk, Maggi & Snacks</span>
                  </div>
                </button>
                <button 
                  className="dropdown-item-btn"
                  onClick={() => handleNavClick('products', 'Home')}
                >
                  <div className="dropdown-item-icon pink">
                    <Store size={16} />
                  </div>
                  <div className="dropdown-item-text">
                    <strong>Personal & Household Care</strong>
                    <span>Surf Excel, Vim Gel, Colgate & Cleaning</span>
                  </div>
                </button>
                <button 
                  className="dropdown-item-btn"
                  onClick={() => handleNavClick('products', 'Health')}
                >
                  <div className="dropdown-item-icon purple">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="dropdown-item-text">
                    <strong>Health & Wellness</strong>
                    <span>Dabur Chyawanprash, Honey & Ayurvedic Care</span>
                  </div>
                </button>
                <div className="dropdown-footer-link" onClick={() => handleNavClick('products')}>
                  <span>Explore Full Catalog →</span>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <button 
              className={`nav-link-btn ${currentPage === 'how-it-works' ? 'active' : ''}`}
              onClick={() => handleNavClick('how-it-works')}
            >
              How It Works
            </button>

            {/* Direct Selling Plan */}
            <div 
              className={`nav-megamenu-item ${activeDropdown === 'directSelling' ? 'is-open' : ''}`}
              onMouseEnter={() => handleMouseEnter('directSelling')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`nav-link-btn with-arrow ${['direct-selling', 'mlm-plan', 'power-matrix', 'earning-depth', 'royalty-pool', 'instant-payouts'].includes(currentPage) || activeDropdown === 'directSelling' ? 'active' : ''}`}
                onClick={() => handleNavClick('direct-selling')}
              >
                <span>Direct Selling Plan</span>
                <ChevronDown size={14} className="dropdown-arrow-icon" />
              </button>

              {/* Clean Compensation Dropdown */}
              <div className="simple-dropdown-menu">
                <div className="dropdown-header-strip">
                  <TrendingUp size={15} className="text-orange" />
                  <span>1:3 Matrix Compensation Plan</span>
                </div>

                {/* Top Featured Flowchart */}
                <button 
                  className="dropdown-item-btn featured-flowchart-btn"
                  onClick={() => handleNavClick('direct-selling')}
                >
                  <div className="dropdown-item-icon saffron">
                    <TrendingUp size={16} />
                  </div>
                  <div className="dropdown-item-text">
                    <strong>1:3 Matrix Visual Flowchart</strong>
                    <span>5-Step roadmap, spillover tree & calculator</span>
                  </div>
                </button>

                <button 
                  className="dropdown-item-btn"
                  onClick={() => handleNavClick('power-matrix')}
                >
                  <div className="dropdown-item-icon orange">
                    <Users size={16} />
                  </div>
                  <div className="dropdown-item-text">
                    <strong>1:3 Power Matrix System</strong>
                    <span>Automated spillover placement on team growth</span>
                  </div>
                </button>
                <button 
                  className="dropdown-item-btn"
                  onClick={() => handleNavClick('earning-depth')}
                >
                  <div className="dropdown-item-icon green">
                    <TrendingUp size={16} />
                  </div>
                  <div className="dropdown-item-text">
                    <strong>20 Levels Earning Depth</strong>
                    <span>Tiered recurring royalties on household purchases</span>
                  </div>
                </button>
                <button 
                  className="dropdown-item-btn"
                  onClick={() => handleNavClick('royalty-pool')}
                >
                  <div className="dropdown-item-icon purple">
                    <Award size={16} />
                  </div>
                  <div className="dropdown-item-text">
                    <strong>Leadership & Royalty Pool</strong>
                    <span>Monthly company turnover profit shares</span>
                  </div>
                </button>
                <button 
                  className="dropdown-item-btn"
                  onClick={() => handleNavClick('instant-payouts')}
                >
                  <div className="dropdown-item-icon saffron">
                    <Zap size={16} />
                  </div>
                  <div className="dropdown-item-text">
                    <strong>Instant UPI & Bank Payouts</strong>
                    <span>Real-time wallet withdrawals without delays</span>
                  </div>
                </button>
                <div className="dropdown-footer-link" onClick={() => { setActiveDropdown(null); onOpenAuth(); }}>
                  <span>Join as Member (100% Free) →</span>
                </div>
              </div>
            </div>

            {/* About Us */}
            <button 
              className={`nav-link-btn ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About Us
            </button>

            {/* Contact Us */}
            <button 
              className={`nav-link-btn ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact Us
            </button>
          </div>

          {/* Desktop Search Input with LIVE Instant Auto-Suggest Dropdown */}
          <div className="nav-search-container desktop-search" ref={searchContainerRef}>
            <form className="nav-search-form" onSubmit={handleSearchFormSubmit}>
              <Search size={16} className="search-icon-inside" />
              <input
                type="text"
                placeholder="Search atta, oil, tea, soap..."
                value={localSearch}
                onChange={(e) => {
                  setLocalSearch(e.target.value);
                  setShowSearchSuggestions(true);
                  setHighlightedIndex(-1);
                  if (onSearchChange) onSearchChange(e.target.value);
                }}
                onFocus={() => {
                  setShowSearchSuggestions(true);
                }}
                onKeyDown={handleSearchKeyDown}
                className="nav-search-input"
                aria-label="Search products"
                autoComplete="off"
              />
              {localSearch && (
                <button 
                  type="button" 
                  className="search-clear-btn" 
                  onClick={handleClearSearch}
                  title="Clear search"
                >
                  <X size={14} />
                </button>
              )}
              <button type="submit" className="nav-search-submit-btn" title="Search">
                <ArrowRight size={14} />
              </button>
            </form>

            {/* Live Search Suggestions Dropdown */}
            {showSearchSuggestions && (
              <div className="search-suggestions-dropdown">
                {localSearch.trim().length === 0 ? (
                  <div className="suggestions-popular-section">
                    <div className="suggestions-header">
                      <span>Popular Trending Searches</span>
                    </div>
                    <div className="suggestions-popular-chips-wrap">
                      {POPULAR_SEARCH_CHIPS.map((chip) => (
                        <button
                          key={chip}
                          type="button"
                          className="popular-chip-btn"
                          onClick={() => {
                            setLocalSearch(chip);
                            executeSearch(chip);
                          }}
                        >
                          <Search size={12} className="chip-icon" />
                          <span>{chip}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : searchSuggestions.length > 0 ? (
                  <>
                    <div className="suggestions-header">
                      <span>Matching Products ({searchSuggestions.length})</span>
                    </div>
                    <ul className="suggestions-list">
                      {searchSuggestions.map((prod, idx) => (
                        <li 
                          key={prod.id} 
                          className={`suggestion-item ${idx === highlightedIndex ? 'is-highlighted' : ''}`}
                          onClick={() => handleSuggestionClick(prod)}
                          onMouseEnter={() => setHighlightedIndex(idx)}
                        >
                          <img 
                            src={prod.image} 
                            alt={prod.name} 
                            className="suggestion-thumb"
                            onError={(e) => { 
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = getSmartProductImage(prod); 
                            }}
                          />
                          <div className="suggestion-info">
                            <span className="suggestion-name">{prod.name}</span>
                            <div className="suggestion-meta">
                              <span className="suggestion-category">{prod.category}</span>
                              <span className="suggestion-price">₹{prod.price}</span>
                              {prod.cashbackAmount && (
                                <span className="suggestion-cashback">₹{prod.cashbackAmount} Cashback</span>
                              )}
                            </div>
                          </div>
                          <ChevronRight size={14} className="suggestion-arrow" />
                        </li>
                      ))}
                    </ul>
                    <button 
                      type="button" 
                      className="suggestions-view-all-btn"
                      onClick={() => executeSearch(localSearch)}
                    >
                      <span>View all results for "{localSearch}"</span>
                      <ArrowRight size={14} />
                    </button>
                  </>
                ) : (
                  <div className="suggestions-no-results">
                    <p className="no-res-title">No direct products found for "<strong>{localSearch}</strong>"</p>
                    <p className="no-res-sub">Try searching popular staples:</p>
                    <div className="suggestions-popular-chips-wrap">
                      {POPULAR_SEARCH_CHIPS.slice(0, 4).map((chip) => (
                        <button
                          key={chip}
                          type="button"
                          className="popular-chip-btn"
                          onClick={() => {
                            setLocalSearch(chip);
                            executeSearch(chip);
                          }}
                        >
                          <span>{chip}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right User Actions (Auth, Cart, Mobile Toggle) */}
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
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Clean, Functional Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            {/* Mobile Live Search Form with Suggestions */}
            <div className="mobile-search-wrapper" ref={mobileSearchContainerRef}>
              <form className="mobile-search-form" onSubmit={handleSearchFormSubmit}>
                <input
                  type="text"
                  placeholder="Search products, brands..."
                  value={localSearch}
                  onChange={(e) => {
                    setLocalSearch(e.target.value);
                    setShowSearchSuggestions(true);
                    setHighlightedIndex(-1);
                    if (onSearchChange) onSearchChange(e.target.value);
                  }}
                  onFocus={() => setShowSearchSuggestions(true)}
                  onKeyDown={handleSearchKeyDown}
                  autoComplete="off"
                />
                {localSearch && (
                  <button 
                    type="button" 
                    className="mobile-search-clear-btn" 
                    onClick={handleClearSearch}
                    title="Clear search"
                  >
                    <X size={15} />
                  </button>
                )}
                <button type="submit" title="Search">
                  <Search size={16} />
                </button>
              </form>

              {/* Mobile suggestions */}
              {showSearchSuggestions && (
                <div className="search-suggestions-dropdown mobile-dropdown">
                  {localSearch.trim().length === 0 ? (
                    <div className="suggestions-popular-section">
                      <div className="suggestions-header">
                        <span>Popular Searches</span>
                      </div>
                      <div className="suggestions-popular-chips-wrap">
                        {POPULAR_SEARCH_CHIPS.map((chip) => (
                          <button
                            key={chip}
                            type="button"
                            className="popular-chip-btn"
                            onClick={() => {
                              setLocalSearch(chip);
                              executeSearch(chip);
                            }}
                          >
                            <span>{chip}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : searchSuggestions.length > 0 ? (
                    <>
                      <div className="suggestions-header">
                        <span>Matching Products ({searchSuggestions.length})</span>
                      </div>
                      <ul className="suggestions-list">
                        {searchSuggestions.map((prod, idx) => (
                          <li 
                            key={prod.id} 
                            className="suggestion-item"
                            onClick={() => handleSuggestionClick(prod)}
                          >
                            <img 
                              src={prod.image} 
                              alt={prod.name} 
                              className="suggestion-thumb"
                              onError={(e) => { 
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = getSmartProductImage(prod); 
                              }}
                            />
                            <div className="suggestion-info">
                              <span className="suggestion-name">{prod.name}</span>
                              <div className="suggestion-meta">
                                <span className="suggestion-category">{prod.category}</span>
                                <span className="suggestion-price">₹{prod.price}</span>
                              </div>
                            </div>
                            <ChevronRight size={14} className="suggestion-arrow" />
                          </li>
                        ))}
                      </ul>
                      <button 
                        type="button" 
                        className="suggestions-view-all-btn"
                        onClick={() => executeSearch(localSearch)}
                      >
                        <span>View all results for "{localSearch}"</span>
                        <ArrowRight size={14} />
                      </button>
                    </>
                  ) : (
                    <div className="suggestions-no-results">
                      <p className="no-res-title">No products found for "<strong>{localSearch}</strong>"</p>
                      <div className="suggestions-popular-chips-wrap">
                        {POPULAR_SEARCH_CHIPS.slice(0, 4).map((chip) => (
                          <button
                            key={chip}
                            type="button"
                            className="popular-chip-btn"
                            onClick={() => {
                              setLocalSearch(chip);
                              executeSearch(chip);
                            }}
                          >
                            <span>{chip}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mobile-nav-links-list">
              <button 
                className={`mobile-nav-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('hero')}
              >
                Home
              </button>
              <button 
                className={`mobile-nav-link ${currentPage === 'products' ? 'active' : ''}`}
                onClick={() => handleNavClick('products')}
              >
                Shop All Products
              </button>
              
              {/* Category Quick Chips on Mobile */}
              <div className="mobile-category-chips">
                <button onClick={() => handleNavClick('products', 'Daily Needs')}>Grocery & Staples</button>
                <button onClick={() => handleNavClick('products', 'Food')}>Food & Beverages</button>
                <button onClick={() => handleNavClick('products', 'Home')}>Personal Care</button>
                <button onClick={() => handleNavClick('products', 'Health')}>Health & Ayurvedic</button>
              </div>

              <button 
                className={`mobile-nav-link ${currentPage === 'how-it-works' ? 'active' : ''}`}
                onClick={() => handleNavClick('how-it-works')}
              >
                How It Works
              </button>
              <button 
                className={`mobile-nav-link ${['power-matrix', 'earning-depth', 'royalty-pool'].includes(currentPage) ? 'active' : ''}`}
                onClick={() => handleNavClick('power-matrix')}
              >
                Direct Selling Plan (1:3 Matrix)
              </button>
              <button 
                className={`mobile-nav-link ${currentPage === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                About Us
              </button>
              <button 
                className={`mobile-nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                Contact Us
              </button>
            </div>

            {!isAuthenticated ? (
              <div className="mobile-auth-row">
                <button className="btn-login-outline" onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }}>
                  Login
                </button>
                <button className="btn-register-solid" onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }}>
                  Register Free
                </button>
              </div>
            ) : (
              <div className="mobile-auth-row">
                <button className="btn-account-mobile" onClick={() => { setMobileMenuOpen(false); onOpenAccount(); }}>
                  My Account Profile
                </button>
                <button className="btn-logout-mobile" onClick={() => { setMobileMenuOpen(false); logout(); }}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};
