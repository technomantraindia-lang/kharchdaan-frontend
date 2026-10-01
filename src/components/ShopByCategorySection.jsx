import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const ShopByCategorySection = ({ onSelectCategory, activeCategoryId }) => {
  const scrollRef = useRef(null);

  const categories = [
    {
      id: 'grocery',
      filterKey: 'Daily Needs',
      name: 'Grocery &\nDaily Needs',
      color: '#FEF3C7',
      borderColor: '#FDE68A',
      icon: (
        <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shopping Bag Base */}
          <rect x="9" y="16" width="34" height="30" rx="7" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2.2" />
          <path d="M18 16V11C18 8.79086 19.7909 7 22 7H30C32.2091 7 34 8.79086 34 11V16" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
          {/* Fresh Vegetables / Fruits */}
          <circle cx="19" cy="27" r="5.5" fill="#16A34A" />
          <circle cx="19" cy="26" r="4.2" fill="#22C55E" />
          <circle cx="33" cy="28" r="6" fill="#DC2626" />
          <circle cx="32" cy="27" r="4.8" fill="#EF4444" />
          <circle cx="26" cy="35" r="5.5" fill="#F97316" />
          <circle cx="25" cy="34" r="4.5" fill="#FB923C" />
          {/* Leaves */}
          <path d="M19 21.5L21.5 16" stroke="#15803D" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M33 22L32 17" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'fashion',
      filterKey: 'Fashion',
      name: 'Fashion &\nLifestyle',
      color: '#FCE7F3',
      borderColor: '#FBCFE8',
      icon: (
        <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Folded Collared Shirt / Dress */}
          <path d="M14 18L19 8H33L38 18L44 22L40 44C40 45.6569 38.6569 47 37 47H15C13.3431 47 12 45.6569 12 44L8 22L14 18Z" fill="#FCE7F3" stroke="#DB2777" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M19 8L26 15L33 8" stroke="#BE185D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26 15V47" stroke="#DB2777" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="26" cy="23" r="2.2" fill="#BE185D" />
          <circle cx="26" cy="31" r="2.2" fill="#BE185D" />
          <circle cx="26" cy="39" r="2.2" fill="#BE185D" />
        </svg>
      )
    },
    {
      id: 'health',
      filterKey: 'Health',
      name: 'Health &\nWellness',
      color: '#DCFCE7',
      borderColor: '#BBF7D0',
      icon: (
        <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Supplement / Medicine Bottle */}
          <rect x="13" y="17" width="26" height="29" rx="6" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2.2" />
          <rect x="19" y="8" width="14" height="9" rx="3" fill="#16A34A" stroke="#15803D" strokeWidth="1.5" />
          {/* Medical Cross */}
          <circle cx="26" cy="31.5" r="9.5" fill="#16A34A" />
          <path d="M26 26.5V36.5M21 31.5H31" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
          {/* Ayurveda Leaf Accent */}
          <path d="M37 13C37 13 43 13 45 19C43 21 37 19 37 13Z" fill="#15803D" />
        </svg>
      )
    },
    {
      id: 'food',
      filterKey: 'Food',
      name: 'Food &\nBeverages',
      color: '#FFEDD5',
      borderColor: '#FED7AA',
      icon: (
        <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Snack Bag / Fast Food */}
          <rect x="9" y="17" width="17" height="28" rx="4" fill="#FFEDD5" stroke="#EA580C" strokeWidth="2.2" />
          <circle cx="17.5" cy="31" r="4.5" fill="#EA580C" />
          {/* Beverage Cup with Straw */}
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
      name: 'Home &\nLiving',
      color: '#EDE9FE',
      borderColor: '#DDD6FE',
      icon: (
        <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cooking Pot / Cooker */}
          <path d="M12 25H40V39C40 43.4183 36.4183 47 32 47H20C15.5817 47 12 43.4183 12 39V25Z" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2.2" />
          <ellipse cx="26" cy="25" rx="14" ry="5.5" fill="#C4B5FD" stroke="#6D28D9" strokeWidth="2" />
          <path d="M26 19.5V10M21 10H31" stroke="#5B21B6" strokeWidth="2.8" strokeLinecap="round" />
          {/* Side Handle */}
          <rect x="40" y="27" width="7" height="5" rx="2" fill="#4C1D95" />
          <rect x="5" y="27" width="7" height="5" rx="2" fill="#4C1D95" />
        </svg>
      )
    },
    {
      id: 'beauty',
      filterKey: 'Beauty',
      name: 'Beauty &\nPersonal Care',
      color: '#FCE7F3',
      borderColor: '#FBCFE8',
      icon: (
        <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Lotion Pump Dispenser Bottle */}
          <rect x="12" y="19" width="18" height="26" rx="5" fill="#FCE7F3" stroke="#DB2777" strokeWidth="2.2" />
          <rect x="18" y="11" width="6" height="8" rx="1.5" fill="#E11D48" />
          <path d="M16 11H26" stroke="#BE123C" strokeWidth="2" strokeLinecap="round" />
          <path d="M21 11V7H14" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Lipstick */}
          <rect x="34" y="26" width="10" height="19" rx="2" fill="#881337" />
          <path d="M36 26L40 14L42 16L42 26H36Z" fill="#E11D48" />
          <circle cx="21" cy="32" r="3.5" fill="#F43F5E" />
        </svg>
      )
    },
    {
      id: 'electronics',
      filterKey: 'Electronics',
      name: 'Electronics &\nAccessories',
      color: '#E0F2FE',
      borderColor: '#BAE6FD',
      icon: (
        <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wireless Headphones */}
          <path d="M12 28C12 16.9543 18.268 10 26 10C33.732 10 40 16.9543 40 28" stroke="#0284C7" strokeWidth="3.2" strokeLinecap="round" />
          {/* Ear Cups */}
          <rect x="8" y="27" width="10" height="17" rx="4.5" fill="#38BDF8" stroke="#0369A1" strokeWidth="2" />
          <rect x="34" y="27" width="10" height="17" rx="4.5" fill="#38BDF8" stroke="#0369A1" strokeWidth="2" />
          {/* Sound Wave Accents */}
          <path d="M23 32V38M26 29V41M29 32V38" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'services',
      filterKey: 'Services',
      name: 'Services',
      color: '#FFEDD5',
      borderColor: '#FED7AA',
      icon: (
        <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Service Star & Gear Target */}
          <circle cx="26" cy="26" r="14" fill="#FFEDD5" stroke="#EA580C" strokeWidth="2.2" />
          <circle cx="26" cy="26" r="7.5" fill="#EA580C" />
          {/* Radiating Compass / Gear Prongs */}
          <path d="M26 6V12M26 40V46M6 26H12M40 26H46M12 12L16.5 16.5M35.5 35.5L40 40M12 40L16.5 35.5M35.5 16.5L40 12" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'more',
      filterKey: 'All',
      name: 'More\nCategories',
      color: '#F3F4F6',
      borderColor: '#E5E7EB',
      icon: (
        <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 3 Modern Dots */}
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

          <a href="#products-store" className="category-view-all-btn">
            <span>View All Categories</span>
            <ArrowRight size={16} />
          </a>
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

