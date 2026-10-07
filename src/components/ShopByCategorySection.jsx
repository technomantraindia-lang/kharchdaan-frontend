import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
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
      color: '#FEF3C7',
      borderColor: '#FDE68A',
      icon: (
        <svg width="44" height="44" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9" y="16" width="34" height="30" rx="7" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2.2" />
          <path d="M18 16V11C18 8.79086 19.7909 7 22 7H30C32.2091 7 34 8.79086 34 11V16" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="19" cy="27" r="5.5" fill="#16A34A" />
          <circle cx="33" cy="28" r="6" fill="#DC2626" />
          <circle cx="26" cy="35" r="5.5" fill="#F97316" />
        </svg>
      )
    },
    {
      id: 'food',
      filterKey: 'Food',
      name: 'Food &\nBeverages',
      itemCount: sourceList.filter(p => p.category === 'Food').length,
      color: '#FFEDD5',
      borderColor: '#FED7AA',
      icon: (
        <svg width="44" height="44" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9" y="17" width="17" height="28" rx="4" fill="#FFEDD5" stroke="#EA580C" strokeWidth="2.2" />
          <circle cx="17.5" cy="31" r="4.5" fill="#EA580C" />
          <path d="M30 21H43L40 45H33L30 21Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M29 19H44" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M36 10L38 19" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'home',
      filterKey: 'Home',
      name: 'Personal &\nHome Care',
      itemCount: sourceList.filter(p => p.category === 'Home').length,
      color: '#EDE9FE',
      borderColor: '#DDD6FE',
      icon: (
        <svg width="44" height="44" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 25H40V39C40 43.4183 36.4183 47 32 47H20C15.5817 47 12 43.4183 12 39V25Z" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2.2" />
          <ellipse cx="26" cy="25" rx="14" ry="5.5" fill="#C4B5FD" stroke="#6D28D9" strokeWidth="2" />
          <path d="M26 19.5V10M21 10H31" stroke="#5B21B6" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'health',
      filterKey: 'Health',
      name: 'Health &\nWellness',
      itemCount: sourceList.filter(p => p.category === 'Health').length,
      color: '#DCFCE7',
      borderColor: '#BBF7D0',
      icon: (
        <svg width="44" height="44" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="13" y="17" width="26" height="29" rx="6" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2.2" />
          <rect x="19" y="8" width="14" height="9" rx="3" fill="#16A34A" stroke="#15803D" strokeWidth="1.5" />
          <circle cx="26" cy="31.5" r="9.5" fill="#16A34A" />
          <path d="M26 26.5V36.5M21 31.5H31" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'services',
      filterKey: 'Services',
      name: 'Family Ration\nBundles',
      itemCount: SERVICES_PACKAGES.length,
      color: '#FFEDD5',
      borderColor: '#FED7AA',
      icon: (
        <svg width="44" height="44" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="14" width="36" height="30" rx="6" fill="#FFF7ED" stroke="#EA580C" strokeWidth="2.2" />
          <path d="M8 22H44" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
          <path d="M26 14V44" stroke="#EA580C" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="26" cy="14" r="5" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'all',
      filterKey: 'All',
      name: 'All\nCategories',
      itemCount: sourceList.length,
      color: '#F3F4F6',
      borderColor: '#E5E7EB',
      icon: (
        <svg width="44" height="44" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="7" width="38" height="38" rx="10" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="16" cy="26" r="4.2" fill="#EA580C" />
          <circle cx="26" cy="26" r="4.2" fill="#EA580C" />
          <circle cx="36" cy="26" r="4.2" fill="#EA580C" />
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
    <section className="shop-by-category-premium-section">
      <div className="container">
        {/* Section Header */}
        <div className="category-section-header">
          <h2 className="category-section-title">Shop by Category</h2>

          <button 
            type="button" 
            onClick={() => onSelectCategory && onSelectCategory('All')} 
            className="category-view-all-btn"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span>View All Categories</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Carousel Container with Left/Right Navigation Arrows */}
        <div className="category-carousel-container">
          <button 
            className="cat-arrow-button left" 
            onClick={() => handleScroll('left')}
            aria-label="Previous categories"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="category-grid-track" ref={scrollRef}>
            {categories.map((cat) => {
              const isActive = activeCategoryId === cat.id || activeCategoryId === cat.filterKey;
              return (
                <div 
                  key={cat.id} 
                  className={`category-card-premium ${isActive ? 'is-active' : ''}`}
                  onClick={() => onSelectCategory && onSelectCategory(cat.filterKey || cat.id)}
                  role="button"
                  tabIndex={0}
                >
                  {/* Visual Icon Box */}
                  <div 
                    className="cat-icon-container"
                    style={{ 
                      background: `linear-gradient(135deg, ${cat.color} 0%, #FFFFFF 100%)`,
                      borderColor: cat.borderColor
                    }}
                  >
                    {cat.icon}
                  </div>

                  {/* Category Title */}
                  <div className="cat-title-text">
                    {cat.name.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < cat.name.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <button 
            className="cat-arrow-button right" 
            onClick={() => handleScroll('right')}
            aria-label="Next categories"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};
