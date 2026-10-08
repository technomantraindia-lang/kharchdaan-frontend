import React, { useState, useMemo } from 'react';
import { 
  Home, ChevronRight, ShoppingBag, Search, SlidersHorizontal, 
  Coins, Star, Check, ShoppingCart, Eye, Sparkles, Filter, 
  ArrowRight, ShieldCheck, Truck, RefreshCw, Layers, CheckCircle2,
  Package, Store, Award, X, Percent, Flame, HeartHandshake
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductsContext';
import { SERVICES_PACKAGES } from '../data/productsData';
import { 
  WheatStaplesSvg, 
  FoodBeverageSvg, 
  PersonalCareSvg, 
  HealthWellnessSvg 
} from './CategorySvgs';

export const CATEGORY_CONFIG = {
  'grocery-staples': {
    id: 'Daily Needs',
    routeKey: 'grocery-staples',
    name: 'Grocery & Staples',
    heroTitle: 'Fresh Grocery & Daily Kitchen Staples',
    heroSlogan: 'Aashirvaad Atta • Fortune Oil • Premium Rice & Pulses • Guaranteed Purity & PV Points',
    heroDesc: 'Shop your family’s mandatory monthly staples at wholesale-grade distributor rates. Every kilogram of flour, rice, and cooking oil yields genuine point volume (PV) for your 20-level downline earnings.',
    Icon: WheatStaplesSvg,
    badgeText: '100% GENUINE FMCG STAPLES',
    featuredBrandList: ['All', 'Aashirvaad', 'Fortune', 'Daawat', 'Tata Consumer', 'Amul'],
    spotlightDeal: {
      title: 'Monthly Kitchen Staples Hamper',
      desc: 'Aashirvaad Atta (5kg) + Fortune Oil (2L) + Basmati Rice (2kg) + Tata Dal',
      price: 1499,
      mrp: 1950,
      discount: '23% OFF',
      pv: '180 PV Points'
    }
  },
  'food-beverages': {
    id: 'Food',
    routeKey: 'food-beverages',
    name: 'Food & Beverages',
    heroTitle: 'Packaged Food, Beverages & Family Snacks',
    heroSlogan: 'Tata Tea Gold • Cadbury Dairy Milk • Parle-G & Maggi • Nescafe Coffee • Real Juices',
    heroDesc: 'Turn every morning chai break and evening snack time into recurring cashback. Enjoy 100% original factory-sealed teas, chocolates, noodles, and biscuits with compounding PV rewards.',
    Icon: FoodBeverageSvg,
    badgeText: '100% ORIGINAL TASTE & REFRESHMENT',
    featuredBrandList: ['All', 'Tata Tea', 'Cadbury', 'Maggi', 'Nestle'],
    spotlightDeal: {
      title: 'Family Tea-Time Snacks Combo',
      desc: 'Tata Tea Gold (500g) + Good Day Cookies + Cadbury Silk + Maggi 12-Pack',
      price: 599,
      mrp: 780,
      discount: '23% OFF',
      pv: '120 PV Points'
    }
  },
  'personal-household-care': {
    id: 'Home',
    routeKey: 'personal-household-care',
    name: 'Personal & Household Care',
    heroTitle: 'Personal Care, Hygiene & Household Cleaning',
    heroSlogan: 'Surf Excel Matic • Dettol Antiseptic • Vim Dishwash • Colgate & Oral Care • Harpic',
    heroDesc: 'Keep your home sparkling clean and your loved ones protected with India’s leading detergents, dishwash gels, floor disinfectants, and oral care products at unmatched value.',
    Icon: PersonalCareSvg,
    badgeText: '100% HYGIENE & CLEANING PURITY',
    featuredBrandList: ['All', 'Surf Excel', 'Dettol', 'Vim', 'Colgate'],
    spotlightDeal: {
      title: 'Monthly Household Hygiene Kit',
      desc: 'Surf Excel 2kg + Dettol 750ml Refill + Vim Gel 750ml + Colgate 500g',
      price: 749,
      mrp: 990,
      discount: '24% OFF',
      pv: '140 PV Points'
    }
  },
  'health-wellness': {
    id: 'Health',
    routeKey: 'health-wellness',
    name: 'Health & Wellness',
    heroTitle: 'Health, Wellness & Authentic Ayurveda',
    heroSlogan: 'Dabur Chyawanprash • Pure Raw Honey • Organic Tulsi Green Tea • Ashwagandha & Herbs',
    heroDesc: 'Safeguard your family’s vitality with time-tested Vedic Ayurvedic essentials, certified raw forest honey, herbal immunity tonics, and daily nutrition generating highest point volume ratios.',
    Icon: HealthWellnessSvg,
    badgeText: '100% AYURVEDIC PURITY & IMMUNITY',
    featuredBrandList: ['All', 'Dabur', 'Organic India', 'Dettol', 'Himalaya'],
    spotlightDeal: {
      title: 'Ayurvedic Family Immunity Shield',
      desc: 'Dabur Chyawanprash (1kg) + Pure Honey (500g) + Organic Tulsi Green Tea',
      price: 699,
      mrp: 950,
      discount: '26% OFF',
      pv: '180 PV Points'
    }
  }
};

export const CategoryProductListPage = ({ 
  categorySlug = 'grocery-staples',
  onNavigate, 
  onProductClick, 
  onOpenAuth 
}) => {
  const { addToCart } = useCart();
  const { products, loading } = useProducts();
  const sourceList = products || [];
  const config = CATEGORY_CONFIG[categorySlug] || CATEGORY_CONFIG['grocery-staples'];
  const HeaderIcon = config.Icon;

  const [selectedBrand, setSelectedBrand] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'price-low' | 'price-high' | 'rating' | 'cashback'
  const [priceRange, setPriceRange] = useState('all'); // 'all' | 'under-150' | '150-300' | '300-500' | 'above-500'
  const [addedItemMap, setAddedItemMap] = useState({});

  const handleAddToCart = (e, prod) => {
    e.stopPropagation();
    addToCart({
      id: prod.id,
      name: `${prod.name} (${prod.weight || '1 Unit'})`,
      price: prod.price,
      image: prod.image,
      cashbackAmount: prod.cashbackAmount,
      cashbackPercent: prod.cashbackPercent || 100,
      category: prod.category
    }, 1);

    setAddedItemMap(prev => ({ ...prev, [prod.id]: true }));
    setTimeout(() => {
      setAddedItemMap(prev => ({ ...prev, [prod.id]: false }));
    }, 1500);
  };

  // Filtered Products for this Category
  const categoryProducts = useMemo(() => {
    return sourceList.filter(prod => {
      // Must match active category
      const pCat = (prod.category || '').toLowerCase();
      const cId = (config.id || '').toLowerCase();
      const matchesCategory = pCat === cId || 
        (cId === 'daily needs' && (pCat === 'grocery' || pCat.includes('grocery') || pCat.includes('staple'))) ||
        (cId === 'food' && (pCat === 'beverages' || pCat.includes('beverage') || pCat.includes('drink'))) ||
        (cId === 'home' && (pCat.includes('home') || pCat.includes('personal') || pCat.includes('cleaning'))) ||
        (cId === 'health' && (pCat.includes('health') || pCat.includes('wellness') || pCat.includes('ayurved')));
      if (!matchesCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'All' && prod.brand !== selectedBrand) {
        return false;
      }
      // Price range filter
      if (priceRange === 'under-150' && prod.price >= 150) return false;
      if (priceRange === '150-300' && (prod.price < 150 || prod.price > 300)) return false;
      if (priceRange === '300-500' && (prod.price < 300 || prod.price > 500)) return false;
      if (priceRange === 'above-500' && prod.price <= 500) return false;
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = prod.name.toLowerCase().includes(q);
        const matchesBrand = prod.brand.toLowerCase().includes(q);
        const matchesDesc = prod.shortDescription?.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesDesc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'cashback') return b.cashbackAmount - a.cashbackAmount;
      return 0; // 'featured'
    });
  }, [config.id, selectedBrand, priceRange, searchQuery, sortBy]);

  const clearAllFilters = () => {
    setSelectedBrand('All');
    setPriceRange('all');
    setSearchQuery('');
    setSortBy('featured');
  };

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
            <button className="breadcrumb-link" onClick={() => onNavigate('products')}>Products & Services</button>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-current">{config.name}</span>
          </div>

          <div className="topic-top-badge-row">
            <div className="topic-foundation-pill">
              <span className="pill-om-symbol" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <HeaderIcon size={16} />
              </span>
              <span>{config.badgeText}</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          <div className="topic-hero-header-box">
            <h1 className="topic-hero-title">
              {config.heroTitle}
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                {config.heroSlogan}
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              {config.heroDesc}
            </p>
          </div>

          {/* 4 Trust Feature Badges */}
          <div className="products-hero-trust-row" style={{ marginTop: '24px', justifyContent: 'center' }}>
            <div className="trust-pill-item">
              <ShieldCheck size={14} className="text-orange" />
              <span>100% Genuine Brand Sealed</span>
            </div>
            <div className="trust-pill-item">
              <Coins size={14} className="text-green" />
              <span>Up to 100% Wallet Cashback</span>
            </div>
            <div className="trust-pill-item">
              <Layers size={14} className="text-purple" />
              <span>20-Level Matrix Points (PV)</span>
            </div>
            <div className="trust-pill-item">
              <Truck size={14} className="text-blue" />
              <span>Free Doorstep Delivery &gt; ₹499</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CATEGORY SWITCHER TABS WITH VECTOR SVGS */}
      <section className="cat-product-nav-strip">
        <div className="container">
          <div className="cat-nav-pills-row">
            <button 
              className={`cat-nav-pill ${categorySlug === 'grocery-staples' ? 'active' : ''}`}
              onClick={() => onNavigate('grocery-staples')}
            >
              <span className="pill-ico"><WheatStaplesSvg size={18} /></span>
              <span>Grocery & Staples</span>
            </button>
            <button 
              className={`cat-nav-pill ${categorySlug === 'food-beverages' ? 'active' : ''}`}
              onClick={() => onNavigate('food-beverages')}
            >
              <span className="pill-ico"><FoodBeverageSvg size={18} /></span>
              <span>Food & Beverages</span>
            </button>
            <button 
              className={`cat-nav-pill ${categorySlug === 'personal-household-care' ? 'active' : ''}`}
              onClick={() => onNavigate('personal-household-care')}
            >
              <span className="pill-ico"><PersonalCareSvg size={18} /></span>
              <span>Personal & Household Care</span>
            </button>
            <button 
              className={`cat-nav-pill ${categorySlug === 'health-wellness' ? 'active' : ''}`}
              onClick={() => onNavigate('health-wellness')}
            >
              <span className="pill-ico"><HealthWellnessSvg size={18} /></span>
              <span>Health & Wellness</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. MAIN CATALOG & FILTER SECTION */}
      <section className="topic-main-content-section" style={{ paddingTop: '20px' }}>
        <div className="container">
          
          {/* Filter & Toolbar Controls */}
          <div className="cat-catalog-toolbar">
            
            {/* Left: Brand Filter Pills */}
            <div className="cat-brand-filter-chips">
              <span className="filter-label">Filter Brand:</span>
              {config.featuredBrandList.map((brand) => (
                <button
                  key={brand}
                  className={`brand-chip-btn ${selectedBrand === brand ? 'active' : ''}`}
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Right: Search & Sort Bar */}
            <div className="cat-toolbar-controls">
              <div className="cat-search-box">
                <Search size={15} className="search-icon" />
                <input 
                  type="text" 
                  placeholder={`Search ${config.name.toLowerCase()}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                    <X size={13} />
                  </button>
                )}
              </div>

              <div className="cat-sort-select-wrap">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="cat-sort-select"
                >
                  <option value="featured">Sort: Featured & Best PV</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="cashback">Highest Cashback</option>
                </select>
              </div>
            </div>

          </div>

          {/* Active Filter Chips & Results Count */}
          <div className="cat-results-status-bar">
            <div className="results-count-text">
              Showing <strong>{categoryProducts.length}</strong> genuine products in <strong>{config.name}</strong>
            </div>

            {(selectedBrand !== 'All' || searchQuery || sortBy !== 'featured') && (
              <button className="cat-clear-all-btn" onClick={clearAllFilters}>
                <RefreshCw size={12} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* 4. PRODUCT GRID */}
          {categoryProducts.length > 0 ? (
            <div className="cat-products-grid">
              {categoryProducts.map((prod) => {
                const isAdded = addedItemMap[prod.id];
                return (
                  <div 
                    key={prod.id} 
                    className="cat-product-card"
                    onClick={() => onProductClick(prod)}
                  >
                    {/* Top Badges */}
                    <div className="prod-badge-top-row">
                      <span className="prod-discount-tag">{prod.discount}</span>
                      <span className="prod-pv-tag">
                        <Layers size={11} />
                        <span>{prod.pvPoints} PV</span>
                      </span>
                    </div>

                    {/* Product Photo */}
                    <div className="prod-image-wrapper">
                      <img src={prod.image} alt={prod.name} loading="lazy" />
                      <button 
                        className="prod-quick-view-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          onProductClick(prod);
                        }}
                        title="View Full Product Details"
                      >
                        <Eye size={14} />
                        <span>Quick View</span>
                      </button>
                    </div>

                    {/* Product Body */}
                    <div className="prod-card-body">
                      <div className="prod-brand-subcat-row">
                        <span className="prod-brand-name">{prod.brand}</span>
                        <span className="prod-subcat-name">{prod.subCategory}</span>
                      </div>

                      <h3 className="prod-title-heading" title={prod.name}>
                        {prod.name}
                      </h3>

                      <div className="prod-rating-weight-row">
                        <div className="prod-rating-star">
                          <Star size={12} className="fill-gold" />
                          <span>{prod.rating}</span>
                          <span className="prod-reviews-count">({prod.reviews})</span>
                        </div>
                        <span className="prod-weight-pill">{prod.weight}</span>
                      </div>

                      {/* Cashback Pill */}
                      <div className="prod-cashback-pill">
                        <Coins size={12} className="text-green" />
                        <span>₹{prod.cashbackAmount} Instant Cashback</span>
                      </div>

                      {/* Pricing & Add to Cart */}
                      <div className="prod-card-footer">
                        <div className="prod-pricing-col">
                          <span className="prod-price-current">₹{prod.price}</span>
                          <span className="prod-price-mrp">₹{prod.mrp}</span>
                        </div>

                        <button 
                          className={`prod-add-cart-btn ${isAdded ? 'added' : ''}`}
                          onClick={(e) => handleAddToCart(e, prod)}
                        >
                          {isAdded ? (
                            <>
                              <Check size={14} />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingCart size={14} />
                              <span>Add</span>
                            </>
                          )}
                        </button>
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>
          ) : (
            <div className="cat-empty-state-box">
              <Package size={48} className="text-orange" />
              <h3>No matching products found</h3>
              <p>Try clearing your search query or selecting another brand filter.</p>
              <button className="btn-primary" onClick={clearAllFilters}>
                <span>View All {config.name}</span>
              </button>
            </div>
          )}

          {/* 5. SPOTLIGHT VALUE DEAL CARD FOR THIS CATEGORY */}
          <div className="cat-spotlight-deal-banner">
            <div className="deal-banner-content">
              <div className="deal-badge-pill">
                <Sparkles size={13} />
                <span>CATEGORY BEST VALUE DEAL</span>
              </div>
              <h2 className="deal-title">{config.spotlightDeal.title}</h2>
              <p className="deal-desc">{config.spotlightDeal.desc}</p>
              <div className="deal-pricing-row">
                <span className="price-val">₹{config.spotlightDeal.price}</span>
                <span className="price-mrp-val">₹{config.spotlightDeal.mrp}</span>
                <span className="price-disc-val">{config.spotlightDeal.discount}</span>
                <span className="deal-pv-val">⚡ {config.spotlightDeal.pv}</span>
              </div>
            </div>
            <div className="deal-banner-action">
              <button 
                className="btn-deal-action"
                onClick={() => onNavigate('family-grocery-hamper')}
              >
                <span>View Hamper Package</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="topic-bottom-cta-banner">
        <div className="container">
          <div className="bottom-cta-card">
            <div className="bottom-cta-content">
              <h2>Save on Every Purchase, Earn on Every Referral</h2>
              <p>Experience true Indian direct commerce with 100% genuine brand stock and weekly bank payouts.</p>
            </div>
            <div className="bottom-cta-actions">
              <button 
                className="btn-cta-primary"
                onClick={() => onNavigate('products')}
              >
                <span>Browse All Categories</span>
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
