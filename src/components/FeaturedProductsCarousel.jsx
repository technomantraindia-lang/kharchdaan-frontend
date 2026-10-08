import React, { useState, useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShoppingCart, Check, Coins, Eye, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useProducts, getSmartProductImage } from '../context/ProductsContext';

export const FeaturedProductsCarousel = ({ onQuickView, activeCategoryFilter, onCategoryFilterChange }) => {
  const { addToCart } = useCart();
  const { products, loading, refreshProducts, isBackendConnected } = useProducts();
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

  const sourceList = products || [];

  // Dynamically compute category tabs from active products
  const filterTabs = useMemo(() => {
    const set = new Set();
    sourceList.forEach(p => {
      const cat = typeof p.category === 'string' ? p.category : (p.category?.name || '');
      if (cat) set.add(cat);
    });
    return ['All', ...Array.from(set)];
  }, [sourceList]);

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

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredProducts = (!activeCategory || activeCategory === 'All') 
    ? sourceList 
    : sourceList.filter(p => {
        const cat = (typeof p.category === 'string' ? p.category : (p.category?.name || '')).toLowerCase();
        return cat.includes(activeCategory.toLowerCase()) || activeCategory === 'All';
      });

  return (
    <section id="products-store" className="featured-products-premium-section">
      <div className="container">
        {/* Section Top Header & Filters */}
        <div className="featured-header-container">
          <div className="featured-title-and-filters">
            <h2 className="featured-section-title">Featured Products</h2>
            
            {/* Filter Pills */}
            <div className="filter-pills-bar">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  className={`product-tab-btn ${activeCategory === tab ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(tab)}
                >
                  {tab === 'All' ? 'All Items' : tab === 'Daily Needs' ? 'Grocery & Staples' : tab === 'Home' ? 'Personal & Home' : tab}
                </button>
              ))}
            </div>
          </div>

          <a href="#products-services" className="featured-view-all-link">
            <span>View All Products</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Loading Skeleton State */}
        {loading && (
          <div className="featured-carousel-container">
            <div className="featured-products-track-grid">
              {[1, 2, 3, 4].map(idx => (
                <div key={idx} className="product-card-premium animate-pulse" style={{ opacity: 0.85 }}>
                  <div style={{ height: '180px', background: '#f1f5f9', borderRadius: '12px', margin: '12px' }}></div>
                  <div style={{ padding: '16px' }}>
                    <div style={{ height: '14px', background: '#e2e8f0', borderRadius: '6px', width: '40%', marginBottom: '10px' }}></div>
                    <div style={{ height: '18px', background: '#e2e8f0', borderRadius: '6px', width: '85%', marginBottom: '12px' }}></div>
                    <div style={{ height: '22px', background: '#e2e8f0', borderRadius: '6px', width: '50%', marginBottom: '16px' }}></div>
                    <div style={{ height: '38px', background: '#e2e8f0', borderRadius: '8px', width: '100%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 20px', background: '#f8fafc', borderRadius: '16px', margin: '20px 0' }}>
            <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '16px' }}>
              No products available in this category currently.
            </p>
            <button
              onClick={refreshProducts}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#ea580c', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 600 }}
            >
              <RefreshCw size={16} />
              <span>Refresh Catalog</span>
            </button>
          </div>
        )}

        {/* Products Carousel Track */}
        {!loading && filteredProducts.length > 0 && (
          <div className="featured-carousel-container">
            <button 
              className="prod-arrow-button left" 
              onClick={() => handleScroll('left')}
              aria-label="Previous products"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="featured-products-track-grid" ref={scrollRef}>
              {filteredProducts.map((prod) => (
                <div 
                  key={prod.id} 
                  className="product-card-premium"
                  onClick={() => onQuickView && onQuickView(prod)}
                  role="button"
                  tabIndex={0}
                >
                  {/* Cashback Badge on top */}
                  <div className="product-cashback-badge">
                    <Coins size={12} className="coin-icon" />
                    <span>₹{prod.cashbackAmount || Math.max(15, Math.round(prod.price * 0.10))} Cashback</span>
                  </div>

                  {/* Product Image Stage */}
                  <div className="product-image-stage">
                    <img
                      src={prod.image || getSmartProductImage(prod)}
                      alt={prod.name}
                      className="product-packshot-img"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = getSmartProductImage(prod);
                      }}
                    />
                    {/* Quick View Hover Pill */}
                    <div className="quick-view-overlay-pill">
                      <Eye size={13} />
                      <span>Quick View</span>
                    </div>
                  </div>

                  {/* Product Details Block */}
                  <div className="product-card-body">
                    {/* Category & Weight Pill Row */}
                    <div className="product-meta-row">
                      <span className="product-cat-tag">
                        {typeof prod.category === 'string' ? prod.category : (prod.category?.name || 'Staples')}
                      </span>
                      <span className="product-weight-badge">{prod.weight || '1 Unit'}</span>
                    </div>

                    {/* 2-line Clean Product Title */}
                    <h3 className="product-main-name" title={prod.name}>
                      {prod.name}
                    </h3>

                    {/* Rating Stars Row */}
                    <div className="product-rating-row">
                      <div className="rating-stars-badge">
                        <svg 
                          width="13" 
                          height="13" 
                          viewBox="0 0 24 24" 
                          fill="#F59E0B" 
                          stroke="#F59E0B" 
                          strokeWidth="1" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="star-svg-icon"
                          aria-hidden="true"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <span className="rating-score">{prod.rating || '4.9'}</span>
                      </div>
                      <span className="review-count-text">({prod.reviews || '200+'})</span>
                    </div>

                    {/* Price & Savings Line */}
                    <div className="product-pricing-box">
                      <div className="product-current-price">
                        <span className="currency-symbol">₹</span>
                        <span className="price-number">{Number(prod.price).toLocaleString('en-IN')}</span>
                      </div>
                      {prod.mrp && prod.mrp > prod.price && (
                        <span className="product-mrp-strike">MRP ₹{Number(prod.mrp).toLocaleString('en-IN')}</span>
                      )}
                      {prod.discount && (
                        <span className="product-discount-pill">{prod.discount}</span>
                      )}
                    </div>

                    {/* Orange Add to Cart Button */}
                    <button
                      className={`btn-add-to-cart-master ${addedItemMap[prod.id] ? 'is-added' : ''}`}
                      onClick={(e) => handleAddToCart(e, prod)}
                      aria-label={`Add ${prod.name} to Cart`}
                    >
                      {addedItemMap[prod.id] ? (
                        <>
                          <Check size={16} />
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

            <button 
              className="prod-arrow-button right" 
              onClick={() => handleScroll('right')}
              aria-label="Next products"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
