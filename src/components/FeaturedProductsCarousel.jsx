import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShoppingCart, Check, Coins, Star, Eye, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductsContext';
import { ALL_PRODUCTS } from '../data/productsData';

export const FeaturedProductsCarousel = ({ onQuickView, activeCategoryFilter, onCategoryFilterChange }) => {
  const { addToCart } = useCart();
  const { products } = useProducts();
  const [internalCategory, setInternalCategory] = useState('All');
  const [addedItemMap, setAddedItemMap] = useState({});
  const scrollRef = useRef(null);

  const activeCategory = activeCategoryFilter !== undefined ? activeCategoryFilter : internalCategory;

  const handleCategoryChange = (tab) => {
    if (onCategoryFilterChange) {
      onCategoryFilterChange(tab);
    } else {
      setInternalCategory(tab);
    }
  };

  const filterTabs = [
    { id: 'All', label: 'All Items' },
    { id: 'Daily Needs', label: 'Grocery & Staples' },
    { id: 'Food', label: 'Food & Beverages' },
    { id: 'Home', label: 'Personal & Home' },
    { id: 'Health', label: 'Health & Wellness' }
  ];

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

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const sourceList = (products && products.length > 0) ? products : ALL_PRODUCTS;
  const filteredProducts = (!activeCategory || activeCategory === 'All') 
    ? sourceList 
    : sourceList.filter(p => p.category === activeCategory || (p.category && String(p.category).toLowerCase().includes(activeCategory.toLowerCase())));

  return (
    <section id="products-store" className="featured-products-premium-section">
      <div className="container">
        {/* Section Top Header & Filters */}
        <div className="featured-header-container">
          <div className="featured-title-wrap">
            <div className="featured-badge-pill">
              <Sparkles size={14} className="text-orange" />
              <span>GUARANTEED TOP-BRAND QUALITY</span>
            </div>
            <h2 className="featured-main-heading">Featured FMCG Products</h2>
            <p className="featured-sub-heading">
              Shop authentic daily essentials from India's trusted FMCG manufacturers with instant wallet cashback on every order.
            </p>
          </div>

          {/* Category Filter Pills & Arrows */}
          <div className="featured-controls-wrap">
            <div className="category-filter-pills-row">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`filter-pill-btn ${activeCategory === tab.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(tab.id)}
                >
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="carousel-nav-arrows">
              <button 
                className="btn-arrow-circle prev" 
                onClick={() => handleScroll('left')}
                aria-label="Previous products"
                title="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                className="btn-arrow-circle next" 
                onClick={() => handleScroll('right')}
                aria-label="Next products"
                title="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Products Carousel Track */}
        <div className="featured-carousel-viewport" ref={scrollRef}>
          <div className="featured-carousel-track">
            {filteredProducts.map((prod) => (
              <div 
                key={prod.id} 
                className="featured-product-card"
                onClick={() => onQuickView && onQuickView(prod)}
                role="button"
                tabIndex={0}
              >
                {/* Top Tags */}
                <div className="card-top-badges">
                  <span className="badge-discount">{prod.discount || '15% OFF'}</span>
                  <div className="badge-cashback">
                    <Coins size={12} className="coin-icon" />
                    <span>Up to 100% Cashback</span>
                  </div>
                </div>

                {/* Product Image Stage */}
                <div className="card-image-stage">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="card-prod-img"
                    onError={(e) => { e.target.src = '/images/kharchdaan-logo.png'; }}
                  />
                  <span className="card-brand-pill">{prod.brand}</span>
                  <button 
                    className="quick-view-overlay-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onQuickView) onQuickView(prod);
                    }}
                    title="Quick preview"
                  >
                    <Eye size={15} />
                    <span>Quick View</span>
                  </button>
                </div>

                {/* Product Info */}
                <div className="card-info-stage">
                  <div className="card-rating-line">
                    <div className="stars-mini">
                      <Star size={12} fill="#F59E0B" color="#F59E0B" />
                      <span className="rating-score">{prod.rating}</span>
                    </div>
                    <span className="rating-count">({prod.reviews} verified reviews)</span>
                  </div>

                  <h3 className="card-prod-title" title={prod.name}>
                    {prod.name}
                  </h3>

                  <span className="card-prod-weight">{prod.weight}</span>

                  {/* Pricing Row */}
                  <div className="card-pricing-row">
                    <div className="price-box">
                      <span className="price-val">₹{prod.price}</span>
                      <span className="mrp-val">MRP ₹{prod.mrp}</span>
                    </div>
                    <div className="pv-box">
                      <span>+{prod.pvPoints} PV</span>
                    </div>
                  </div>

                  {/* Instant Direct Cashback Pill */}
                  <div className="card-cashback-callout">
                    <Sparkles size={12} className="text-orange" />
                    <span>₹{prod.cashbackAmount} Instant Cashback in Wallet</span>
                  </div>

                  {/* Action Button */}
                  <button 
                    className={`btn-card-add-cart ${addedItemMap[prod.id] ? 'is-added' : ''}`}
                    onClick={(e) => handleAddToCart(e, prod)}
                  >
                    {addedItemMap[prod.id] ? (
                      <>
                        <Check size={15} />
                        <span>Added to Cart!</span>
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
        </div>

        {/* Bottom Banner & Action */}
        <div className="featured-bottom-banner">
          <div className="bottom-banner-text">
            <strong>Looking for more daily household brands?</strong>
            <span>Explore 500+ genuine products with guaranteed 20-level compensation and up to 100% wallet cashback.</span>
          </div>
          <button 
            className="btn-explore-all-store"
            onClick={() => onCategoryFilterChange ? onCategoryFilterChange('All') : null}
          >
            <span>View All Products in Store</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};
