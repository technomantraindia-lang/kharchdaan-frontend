import React, { useState, useEffect, useMemo } from 'react';
import { 
  Home, ChevronRight, ShoppingBag, Search, SlidersHorizontal, 
  Coins, Star, Check, ShoppingCart, Eye, Sparkles, Filter, 
  ArrowRight, ShieldCheck, Truck, RefreshCw, Layers, CheckCircle2,
  Package, Store, Award, X
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ALL_PRODUCTS, SERVICES_PACKAGES } from '../data/productsData';

export const ProductsAndServicesPage = ({ 
  onNavigateHome, 
  onProductClick, 
  initialCategory = 'All',
  onOpenAuth 
}) => {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('products'); // 'products' | 'services'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'price-low' | 'price-high' | 'rating' | 'cashback'
  const [priceRange, setPriceRange] = useState('all'); // 'all' | 'under-150' | '150-300' | '300-500' | 'above-500'
  const [addedItemMap, setAddedItemMap] = useState({});

  // Sync state if initialCategory changes from outside navigation
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
      setSelectedBrand('All');
      setPriceRange('all');
      setSearchQuery('');
    }
  }, [initialCategory]);

  const categories = [
    { id: 'All', name: 'All Products', count: ALL_PRODUCTS.length },
    { id: 'Daily Needs', name: 'Grocery & Staples', count: ALL_PRODUCTS.filter(p => p.category === 'Daily Needs').length },
    { id: 'Food', name: 'Food & Beverages', count: ALL_PRODUCTS.filter(p => p.category === 'Food').length },
    { id: 'Home', name: 'Personal & Household Care', count: ALL_PRODUCTS.filter(p => p.category === 'Home').length },
    { id: 'Health', name: 'Health & Wellness', count: ALL_PRODUCTS.filter(p => p.category === 'Health').length }
  ];

  const categoryInfoMap = {
    'All': {
      label: 'All Products',
      title: 'Everyday Grocery Essentials with',
      sub: "Purchase your family's favorite household brands at authentic MRP savings. Every purchase directly credits instant cashback to your wallet and generates recurring 20-level team royalty."
    },
    'Daily Needs': {
      label: 'Grocery & Staples',
      title: 'Everyday Grocery & Staples with',
      sub: 'Purchase authentic Aashirvaad Atta, Fortune Sunflower & Mustard Oils, Daawat Basmati Rice & Tata Sampann Unpolished Dals at guaranteed MRP savings.'
    },
    'Food': {
      label: 'Food & Beverages',
      title: 'Food & Beverages Essentials with',
      sub: 'Enjoy Tata Tea Premium blends, Cadbury Dairy Milk chocolates, Maggi 2-Minute Masala Noodles and snacks with 100% wallet cashback.'
    },
    'Home': {
      label: 'Personal & Household Care',
      title: 'Personal & Household Care with',
      sub: 'Keep your home sparkling and family fresh with Surf Excel detergents, Vim Lemon Gel, Colgate MaxFresh Toothpaste & hygiene care.'
    },
    'Health': {
      label: 'Health & Wellness',
      title: 'Ayurvedic Health & Wellness with',
      sub: 'Boost family vitality with Dabur Chyawanprash 2X Immunity, 100% Pure Raw Honey, Dettol Handwash and Organic Tulsi Green Tea.'
    }
  };

  const currentInfo = categoryInfoMap[selectedCategory] || categoryInfoMap['All'];

  const brands = ['All', 'Aashirvaad', 'Fortune', 'Tata Tea', 'Surf Excel', 'Cadbury', 'Dettol', 'Daawat', 'Amul', 'Maggi', 'Vim', 'Dabur', 'Colgate'];

  const handleAddToCart = (e, prod) => {
    e.stopPropagation();
    addToCart({
      id: prod.id,
      name: `${prod.name} (${prod.weight})`,
      price: prod.price,
      image: prod.image,
      cashbackPercent: prod.cashbackPercent,
      category: prod.category
    }, 1);

    setAddedItemMap(prev => ({ ...prev, [prod.id]: true }));
    setTimeout(() => {
      setAddedItemMap(prev => ({ ...prev, [prod.id]: false }));
    }, 1500);
  };

  const handleAddServiceToCart = (service) => {
    addToCart({
      id: service.id,
      name: service.title,
      price: service.price,
      image: service.image,
      cashbackPercent: 100,
      category: 'Services'
    }, 1);
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(prod => {
      // Category filter
      if (selectedCategory !== 'All' && prod.category !== selectedCategory) {
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
  }, [selectedCategory, selectedBrand, priceRange, searchQuery, sortBy]);

  const clearAllFilters = () => {
    setSelectedCategory('All');
    setSelectedBrand('All');
    setPriceRange('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="products-page-master-wrapper">
      {/* 1. Page Header & Showcase Banner */}
      <section className="products-hero-banner-showcase">
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div className="products-breadcrumbs-row">
            <button className="breadcrumb-link" onClick={onNavigateHome}>
              <Home size={13} />
              <span>Home</span>
            </button>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <button 
              className="breadcrumb-link" 
              onClick={() => { setSelectedCategory('All'); setSelectedBrand('All'); }}
            >
              <span>Products & Services</span>
            </button>
            {selectedCategory !== 'All' && (
              <>
                <ChevronRight size={13} className="breadcrumb-sep" />
                <span className="breadcrumb-current">{currentInfo.label}</span>
              </>
            )}
          </div>

          <div className="products-hero-intro">
            <div className="hero-top-badge-pill">
              <Sparkles size={13} className="text-orange" />
              <span>100% GENUINE FMCG DIRECT COMMERCE MARKETPLACE</span>
            </div>
            <h1 className="products-page-title">
              {currentInfo.title} <span className="text-orange-gradient">100% Wallet Cashback</span>
            </h1>
            <p className="products-page-sub">
              {currentInfo.sub}
            </p>

            {/* 4 Trust Feature Badges */}
            <div className="products-hero-trust-row">
              <div className="trust-pill-item">
                <ShieldCheck size={14} className="text-orange" />
                <span>100% Genuine Brand Stock</span>
              </div>
              <div className="trust-pill-item">
                <Coins size={14} className="text-green" />
                <span>Direct Daily Cashbacks</span>
              </div>
              <div className="trust-pill-item">
                <Layers size={14} className="text-purple" />
                <span>20-Level Matrix Points</span>
              </div>
              <div className="trust-pill-item">
                <Truck size={14} className="text-blue" />
                <span>Free Doorstep Delivery &gt; ₹499</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Catalog & Interactive Filtering Section */}
      <section className="products-catalog-section">
        <div className="container">
          
          {/* Top Tabs Switcher (Products vs Services) */}
          <div className="catalog-top-tabs-bar">
            <div className="catalog-tabs-left">
              <button 
                className={`catalog-tab-btn ${activeTab === 'products' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('products')}
              >
                <ShoppingBag size={16} />
                <span>Daily FMCG Products</span>
                <span className="tab-count-badge">{ALL_PRODUCTS.length}</span>
              </button>
              <button 
                className={`catalog-tab-btn ${activeTab === 'services' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('services')}
              >
                <Package size={16} />
                <span>Services & Monthly Hampers</span>
                <span className="tab-count-badge">{SERVICES_PACKAGES.length}</span>
              </button>
            </div>

            {/* Quick Search & Sort Control */}
            {activeTab === 'products' && (
              <div className="catalog-controls-right">
                <div className="catalog-search-box">
                  <Search size={15} className="search-icon" />
                  <input 
                    type="text"
                    placeholder="Search brand, atta, oil, tea..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
                      <X size={13} />
                    </button>
                  )}
                </div>

                <div className="catalog-sort-select-box">
                  <span className="sort-label">Sort By:</span>
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="featured">Featured / Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                    <option value="cashback">Highest Cashback</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* TAB 1: FMCG PRODUCTS VIEW */}
          {activeTab === 'products' && (
            <div className="products-main-layout-grid">
              
              {/* Left Sidebar Filters */}
              <aside className="products-sidebar-filters">
                <div className="sidebar-filter-card">
                  <div className="filter-card-header">
                    <div className="filter-title-wrap">
                      <Filter size={16} className="text-orange" />
                      <strong>Filters</strong>
                    </div>
                    {(selectedCategory !== 'All' || selectedBrand !== 'All' || priceRange !== 'all' || searchQuery) && (
                      <button className="btn-clear-filters" onClick={clearAllFilters}>
                        Reset All
                      </button>
                    )}
                  </div>

                  {/* Filter Group: Categories */}
                  <div className="filter-group">
                    <h4 className="filter-group-title">Categories</h4>
                    <ul className="filter-options-list">
                      {categories.map((cat) => (
                        <li key={cat.id}>
                          <button 
                            className={`filter-option-btn ${selectedCategory === cat.id ? 'is-selected' : ''}`}
                            onClick={() => setSelectedCategory(cat.id)}
                          >
                            <span className="opt-name">{cat.name}</span>
                            <span className="opt-count">({cat.count})</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Filter Group: Brands */}
                  <div className="filter-group">
                    <h4 className="filter-group-title">FMCG Brands</h4>
                    <div className="brand-pills-wrap">
                      {brands.map((b) => (
                        <button
                          key={b}
                          className={`brand-filter-pill ${selectedBrand === b ? 'is-selected' : ''}`}
                          onClick={() => setSelectedBrand(b)}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Filter Group: Price Range */}
                  <div className="filter-group">
                    <h4 className="filter-group-title">Price Range</h4>
                    <div className="price-radios-list">
                      <label className="price-radio-label">
                        <input 
                          type="radio" 
                          name="price-filter" 
                          checked={priceRange === 'all'} 
                          onChange={() => setPriceRange('all')} 
                        />
                        <span>All Prices</span>
                      </label>
                      <label className="price-radio-label">
                        <input 
                          type="radio" 
                          name="price-filter" 
                          checked={priceRange === 'under-150'} 
                          onChange={() => setPriceRange('under-150')} 
                        />
                        <span>Under ₹150</span>
                      </label>
                      <label className="price-radio-label">
                        <input 
                          type="radio" 
                          name="price-filter" 
                          checked={priceRange === '150-300'} 
                          onChange={() => setPriceRange('150-300')} 
                        />
                        <span>₹150 to ₹300</span>
                      </label>
                      <label className="price-radio-label">
                        <input 
                          type="radio" 
                          name="price-filter" 
                          checked={priceRange === '300-500'} 
                          onChange={() => setPriceRange('300-500')} 
                        />
                        <span>₹300 to ₹500</span>
                      </label>
                      <label className="price-radio-label">
                        <input 
                          type="radio" 
                          name="price-filter" 
                          checked={priceRange === 'above-500'} 
                          onChange={() => setPriceRange('above-500')} 
                        />
                        <span>Above ₹500</span>
                      </label>
                    </div>
                  </div>

                  {/* Foundation Callout in Sidebar */}
                  <div className="sidebar-foundation-box">
                    <div className="foundation-box-header">
                      <span>🕉️</span>
                      <strong>Geeta Sevashram Seva</strong>
                    </div>
                    <p>Every purchase contributes a small fraction towards foundation food drives & social seva.</p>
                  </div>
                </div>
              </aside>

              {/* Right Products Grid */}
              <main className="products-grid-main-area">
                {/* Active Filter Chips Bar */}
                {(selectedCategory !== 'All' || selectedBrand !== 'All' || priceRange !== 'all' || searchQuery) && (
                  <div className="active-filter-chips-row">
                    <span className="active-label">Active Filters:</span>
                    {selectedCategory !== 'All' && (
                      <span className="filter-chip">
                        Category: {selectedCategory}
                        <button onClick={() => setSelectedCategory('All')}><X size={11} /></button>
                      </span>
                    )}
                    {selectedBrand !== 'All' && (
                      <span className="filter-chip">
                        Brand: {selectedBrand}
                        <button onClick={() => setSelectedBrand('All')}><X size={11} /></button>
                      </span>
                    )}
                    {priceRange !== 'all' && (
                      <span className="filter-chip">
                        Price: {priceRange}
                        <button onClick={() => setPriceRange('all')}><X size={11} /></button>
                      </span>
                    )}
                    {searchQuery && (
                      <span className="filter-chip">
                        Keyword: "{searchQuery}"
                        <button onClick={() => setSearchQuery('')}><X size={11} /></button>
                      </span>
                    )}
                  </div>
                )}

                {/* Product Count Header */}
                <div className="grid-result-count-bar">
                  <span>Showing <strong>{filteredProducts.length}</strong> Genuine FMCG Essentials</span>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="no-products-found-card">
                    <ShoppingBag size={48} className="empty-icon" />
                    <h3>No products found</h3>
                    <p>Try adjusting your category, brand or price filters to see more results.</p>
                    <button className="btn-reset-filters" onClick={clearAllFilters}>
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  <div className="products-page-cards-grid">
                    {filteredProducts.map((prod) => (
                      <div 
                        key={prod.id} 
                        className="catalog-product-card"
                        onClick={() => onProductClick && onProductClick(prod)}
                        role="button"
                        tabIndex={0}
                      >
                        {/* Top Badges */}
                        <div className="card-top-badges-row">
                          <div className="product-cashback-badge">
                            <Coins size={12} className="coin-icon" />
                            <span>Up to 100% Cashback</span>
                          </div>
                          <div className="product-pv-badge">
                            <span>+{prod.pvPoints} PV</span>
                          </div>
                        </div>

                        {/* Product Image Box */}
                        <div className="catalog-image-box">
                          <img 
                            src={prod.image} 
                            alt={prod.name} 
                            className="catalog-img"
                            loading="lazy"
                          />
                          <div className="quick-view-hover-btn">
                            <Eye size={13} />
                            <span>View Details</span>
                          </div>
                        </div>

                        {/* Card Info Body */}
                        <div className="catalog-card-body">
                          <div className="catalog-meta-row">
                            <span className="catalog-brand-tag">{prod.brand}</span>
                            <span className="catalog-weight-tag">{prod.weight}</span>
                          </div>

                          <h3 className="catalog-product-name" title={prod.name}>
                            {prod.name}
                          </h3>

                          {/* Star Rating Row */}
                          <div className="catalog-rating-row">
                            <div className="rating-stars-badge">
                              <Star size={12} fill="#F59E0B" color="#F59E0B" />
                              <span className="rating-num">{prod.rating}</span>
                            </div>
                            <span className="rating-reviews">({prod.reviews} reviews)</span>
                          </div>

                          {/* Pricing Box */}
                          <div className="catalog-pricing-row">
                            <div className="catalog-current-price">
                              <span className="curr">₹</span>
                              <span className="val">{prod.price}</span>
                            </div>
                            {prod.mrp && (
                              <span className="catalog-mrp-strike">MRP ₹{prod.mrp}</span>
                            )}
                            {prod.discount && (
                              <span className="catalog-discount-tag">{prod.discount}</span>
                            )}
                          </div>

                          {/* Add to Cart Button */}
                          <button
                            className={`btn-catalog-add-cart ${addedItemMap[prod.id] ? 'is-added' : ''}`}
                            onClick={(e) => handleAddToCart(e, prod)}
                            aria-label={`Add ${prod.name} to Cart`}
                          >
                            {addedItemMap[prod.id] ? (
                              <>
                                <Check size={15} />
                                <span>Added to Cart</span>
                              </>
                            ) : (
                              <>
                                <ShoppingCart size={15} />
                                <span>Add to Cart</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </main>

            </div>
          )}

          {/* TAB 2: SERVICES & MONTHLY RATION HAMPERS VIEW */}
          {activeTab === 'services' && (
            <div className="services-packages-container">
              <div className="services-intro-banner">
                <div className="services-intro-badge">
                  <Sparkles size={13} />
                  <span>PREMIUM GROCERY PLANS & MERCHANT HUBS</span>
                </div>
                <h2>Curated Subscription Plans & Kirana Services</h2>
                <p>
                  Automate your monthly family grocery needs with pre-packaged ration hampers offering maximum 20-level compensation royalty and direct wallet cashback.
                </p>
              </div>

              <div className="services-packages-grid">
                {SERVICES_PACKAGES.map((pkg) => (
                  <div key={pkg.id} className="service-package-card">
                    <div className="service-card-top-tag">
                      <span>{pkg.tag}</span>
                    </div>

                    <h3 className="service-pkg-title">{pkg.title}</h3>
                    <p className="service-pkg-desc">{pkg.description}</p>

                    <div className="service-benefits-box">
                      <div className="benefit-badge-item">
                        <Coins size={14} className="text-green" />
                        <span>{pkg.cashback}</span>
                      </div>
                      <div className="benefit-badge-item">
                        <Layers size={14} className="text-purple" />
                        <span>{pkg.pv}</span>
                      </div>
                    </div>

                    {/* Items Included List */}
                    <div className="service-included-box">
                      <strong>Package Includes:</strong>
                      <ul className="included-items-list">
                        {pkg.itemsIncluded.map((item, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={14} className="text-green" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & Action */}
                    <div className="service-card-footer">
                      <div className="service-price-block">
                        {pkg.price > 0 ? (
                          <>
                            <div className="service-current-price">₹{pkg.price}</div>
                            {pkg.mrp > 0 && <span className="service-mrp">MRP ₹{pkg.mrp}</span>}
                            <span className="service-savings-pill">{pkg.discount}</span>
                          </>
                        ) : (
                          <div className="service-current-price free">100% Free</div>
                        )}
                      </div>

                      {pkg.price > 0 ? (
                        <button 
                          className="btn-subscribe-pkg"
                          onClick={() => handleAddServiceToCart(pkg)}
                        >
                          <span>Subscribe Hamper</span>
                          <ArrowRight size={15} />
                        </button>
                      ) : (
                        <button 
                          className="btn-merchant-join"
                          onClick={onOpenAuth}
                        >
                          <span>Register as Kirana Partner</span>
                          <ArrowRight size={15} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
