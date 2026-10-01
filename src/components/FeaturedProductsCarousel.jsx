import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShoppingCart, Check, Coins, Star, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const FeaturedProductsCarousel = ({ onQuickView, activeCategoryFilter, onCategoryFilterChange }) => {
  const { addToCart } = useCart();
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
    'All',
    'Daily Needs',
    'Health',
    'Home',
    'Fashion',
    'Food',
    'Electronics'
  ];

  const products = [
    {
      id: 'prod-atta-1',
      name: 'Aashirvaad Shudh Chakki Atta',
      weight: '5 Kg',
      price: 245,
      mrp: 290,
      discount: '15% OFF',
      category: 'Daily Needs',
      image: '/images/aashirvaad-atta.jpg',
      cashbackPercent: 100,
      rating: 4.9,
      reviews: 328,
      description: 'Superior quality 100% Shudh Chakki whole wheat atta for soft, fluffy rotis.'
    },
    {
      id: 'prod-oil-2',
      name: 'Fortune Sunlite Sunflower Oil',
      weight: '1 Litre',
      price: 165,
      mrp: 195,
      discount: '15% OFF',
      category: 'Daily Needs',
      image: '/images/fortune-oil.jpg',
      cashbackPercent: 100,
      rating: 4.8,
      reviews: 215,
      description: 'Refined sunflower oil, rich in natural vitamins and light for everyday family cooking.'
    },
    {
      id: 'prod-choc-3',
      name: 'Cadbury Dairy Milk Chocolate',
      weight: '100 g',
      price: 70,
      mrp: 85,
      discount: '18% OFF',
      category: 'Food',
      image: '/images/cadbury-dairy-milk.jpg',
      cashbackPercent: 100,
      rating: 5.0,
      reviews: 412,
      description: 'Delicious creamy milk chocolate bar, classic taste loved by all generations.'
    },
    {
      id: 'prod-surf-4',
      name: 'Surf Excel Easy Wash Detergent',
      weight: '1 Kg',
      price: 175,
      mrp: 210,
      discount: '17% OFF',
      category: 'Home',
      image: '/images/surf-excel.jpg',
      cashbackPercent: 100,
      rating: 4.9,
      reviews: 189,
      description: 'Superior stain removal washing powder suitable for bucket and machine wash.'
    },
    {
      id: 'prod-tea-5',
      name: 'Tata Tea Premium Blend',
      weight: '250 g',
      price: 135,
      mrp: 160,
      discount: '16% OFF',
      category: 'Daily Needs',
      image: '/images/tata-tea.jpg',
      cashbackPercent: 100,
      rating: 4.9,
      reviews: 276,
      description: 'India’s favorite tea with blended aroma and rich taste for the perfect morning cup.'
    },
    {
      id: 'prod-dettol-6',
      name: 'Dettol Skincare Handwash',
      weight: '200 ml',
      price: 120,
      mrp: 145,
      discount: '17% OFF',
      category: 'Health',
      image: '/images/dettol-handwash.jpg',
      cashbackPercent: 100,
      rating: 4.8,
      reviews: 194,
      description: 'Effective germ protection liquid handwash with skin moisturizing formula.'
    }
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
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredProducts = (!activeCategory || activeCategory === 'All') 
    ? products 
    : products.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory === 'All');

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
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <a href="#products-services" className="featured-view-all-link">
            <span>View All Products</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Products Carousel Track */}
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
                  <span>100% Cashback</span>
                </div>

                {/* Product Image Stage */}
                <div className="product-image-stage">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="product-packshot-img"
                    loading="lazy"
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
                    <span className="product-cat-tag">{prod.category}</span>
                    <span className="product-weight-badge">{prod.weight}</span>
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
                      <span className="rating-score">{prod.rating}</span>
                    </div>
                    <span className="review-count-text">({prod.reviews})</span>
                  </div>

                  {/* Price & Savings Line */}
                  <div className="product-pricing-box">
                    <div className="product-current-price">
                      <span className="currency-symbol">₹</span>
                      <span className="price-number">{prod.price}</span>
                    </div>
                    {prod.mrp && (
                      <span className="product-mrp-strike">MRP ₹{prod.mrp}</span>
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
      </div>
    </section>
  );
};


