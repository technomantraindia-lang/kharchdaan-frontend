import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
import { useProducts } from '../context/ProductsContext';
import { ALL_PRODUCTS, SERVICES_PACKAGES } from '../data/productsData';

export const ShopByCategorySection = ({ onSelectCategory, activeCategoryId }) => {
  const scrollRef = useRef(null);
  const { products } = useProducts();
  const sourceList = (products && products.length > 0) ? products : ALL_PRODUCTS;

  const categories = [
    {
      id: 'grocery',
      filterKey: 'Daily Needs',
      name: 'Grocery &\nStaples',
      itemCount: sourceList.filter(p => p.category === 'Daily Needs').length,
      brandsText: 'Aashirvaad, Fortune, Daawat, Tata',
      color: '#FEF3C7',
      borderColor: '#FDE68A',
      icon: (
        <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9" y="16" width="34" height="30" rx="7" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2.2" />
          <path d="M18 16V11C18 8.79086 19.7909 7 22 7H30C32.2091 7 34 8.79086 34 11V16" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="19" cy="27" r="5.5" fill="#16A34A" />
          <circle cx="19" cy="26" r="4.2" fill="#22C55E" />
          <circle cx="33" cy="28" r="6" fill="#DC2626" />
          <circle cx="32" cy="27" r="4.8" fill="#EF4444" />
          <circle cx="26" cy="35" r="5.5" fill="#F97316" />
          <circle cx="25" cy="34" r="4.5" fill="#FB923C" />
          <path d="M19 21.5L21.5 16" stroke="#15803D" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M33 22L32 17" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'food',
      filterKey: 'Food',
      name: 'Food &\nBeverages',
      itemCount: sourceList.filter(p => p.category === 'Food').length,
      brandsText: 'Tata Tea, Cadbury Silk, Maggi',
      color: '#FFEDD5',
      borderColor: '#FED7AA',
      icon: (
        <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9" y="17" width="17" height="28" rx="4" fill="#FFEDD5" stroke="#EA580C" strokeWidth="2.2" />
          <circle cx="17.5" cy="31" r="4.5" fill="#EA580C" />
          <path d="M30 21H43L40 45H33L30 21Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M29 19H44" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M36 10L38 19" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          <circle cx="36.5" cy="33" r="3.2" fill="#F97316" />
        </svg>
      )
    },
    {
      id: 'home',
      filterKey: 'Home',
      name: 'Personal &\nHousehold Care',
      itemCount: sourceList.filter(p => p.category === 'Home').length,
      brandsText: 'Surf Excel, Vim, Colgate, Dettol',
      color: '#EDE9FE',
      borderColor: '#DDD6FE',
      icon: (
        <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 25H40V39C40 43.4183 36.4183 47 32 47H20C15.5817 47 12 43.4183 12 39V25Z" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2.2" />
          <ellipse cx="26" cy="25" rx="14" ry="5.5" fill="#C4B5FD" stroke="#6D28D9" strokeWidth="2" />
          <path d="M26 19.5V10M21 10H31" stroke="#5B21B6" strokeWidth="2.8" strokeLinecap="round" />
          <rect x="40" y="27" width="7" height="5" rx="2" fill="#4C1D95" />
          <rect x="5" y="27" width="7" height="5" rx="2" fill="#4C1D95" />
        </svg>
      )
    },
    {
      id: 'health',
      filterKey: 'Health',
      name: 'Health &\nWellness',
      itemCount: sourceList.filter(p => p.category === 'Health').length,
      brandsText: 'Dabur Chyawanprash, Honey, Tulsi',
      color: '#DCFCE7',
      borderColor: '#BBF7D0',
      icon: (
        <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="13" y="17" width="26" height="29" rx="6" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2.2" />
          <rect x="19" y="8" width="14" height="9" rx="3" fill="#16A34A" stroke="#15803D" strokeWidth="1.5" />
          <circle cx="26" cy="31.5" r="9.5" fill="#16A34A" />
          <path d="M26 26.5V36.5M21 31.5H31" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M37 13C37 13 43 13 45 19C43 21 37 19 37 13Z" fill="#15803D" />
        </svg>
      )
    },
    {
      id: 'services',
      filterKey: 'Services',
      name: 'Family Ration\nHampers & Bundles',
      itemCount: SERVICES_PACKAGES.length,
      brandsText: 'Monthly Ration Box & Merchant QR',
      color: '#FFEDD5',
      borderColor: '#FED7AA',
      icon: (
        <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="14" width="36" height="30" rx="6" fill="#FFF7ED" stroke="#EA580C" strokeWidth="2.2" />
          <path d="M8 22H44" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
          <path d="M26 14V44" stroke="#EA580C" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="26" cy="14" r="5" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
          <path d="M20 9C20 9 22 5 26 5C30 5 32 9 32 9" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="shop-by-category" className="shop-by-category-section">
      <div className="container">
        {/* Section Header */}
        <div className="category-section-header">
          <div className="category-header-text">
            <div className="category-badge-pill">
              <Sparkles size={14} className="text-orange" />
              <span>100% GENUINE FMCG STAPLES</span>
            </div>
            <h2 className="category-section-title">Shop by Category</h2>
            <p className="category-section-subtitle">
              Choose from verified everyday household brands. Every order earns instant direct cashback and 20-level compensation points.
            </p>
          </div>

          <div className="category-header-controls">
            <div className="category-scroll-arrows">
              <button 
                className="btn-scroll-arrow left" 
                onClick={() => handleScroll('left')}
                aria-label="Scroll left"
                title="Previous categories"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                className="btn-scroll-arrow right" 
                onClick={() => handleScroll('right')}
                aria-label="Scroll right"
                title="Next categories"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            
            <button 
              className="btn-view-all-categories" 
              onClick={() => onSelectCategory && onSelectCategory('All')}
            >
              <span>View All Products</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* 5 Clean Category Cards Grid */}
        <div className="categories-slider-track" ref={scrollRef}>
          {categories.map((cat) => {
            const isSelected = activeCategoryId === cat.filterKey;
            return (
              <div 
                key={cat.id} 
                className={`category-card-clean ${isSelected ? 'is-selected' : ''}`}
                onClick={() => onSelectCategory && onSelectCategory(cat.filterKey)}
                role="button"
                tabIndex={0}
                style={{
                  '--cat-bg': cat.color,
                  '--cat-border': cat.borderColor
                }}
              >
                {/* Top Badge with Item Count */}
                <div className="category-top-tag-row">
                  <span className="category-item-count">{cat.itemCount} Products</span>
                  <span className="category-cashback-tag">100% Cashback</span>
                </div>

                {/* SVG Icon Stage */}
                <div className="category-icon-stage">
                  {cat.icon}
                </div>

                {/* Text & Brands */}
                <div className="category-info-wrap">
                  <h3 className="category-name-clean">{cat.name}</h3>
                  <span className="category-brands-sub">{cat.brandsText}</span>
                </div>

                {/* Bottom Action Pill */}
                <div className="category-action-link">
                  <span>Explore Items</span>
                  <ArrowRight size={14} className="cat-arrow" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
