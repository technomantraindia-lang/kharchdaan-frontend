import React from 'react';
import { 
  Sparkles, ShoppingBag, CheckCircle2, ChevronRight, 
  Layers, Store, Wallet, ShieldCheck, Truck, Gift, Wheat, Coffee, Sparkle, Leaf
} from 'lucide-react';

export const FMCG_TOPICS_LIST = [
  {
    id: 'grocery-staples',
    name: 'Grocery & Staples',
    category: 'FMCG STAPLES',
    img: '/images/aashirvaad-atta.jpg',
    sub: 'Atta, Fortune Oil, Rice & Dals'
  },
  {
    id: 'food-beverages',
    name: 'Food & Beverages',
    category: 'PACKAGED FOOD',
    img: '/images/tata-tea.jpg',
    sub: 'Tata Tea, Cadbury, Biscuits'
  },
  {
    id: 'personal-household-care',
    name: 'Personal & Household Care',
    category: 'HYGIENE & CARE',
    img: '/images/surf-excel.jpg',
    sub: 'Surf Excel, Dettol, Vim & Oral Care'
  },
  {
    id: 'health-wellness',
    name: 'Health & Wellness',
    category: 'AYURVEDA & HEALTH',
    img: '/images/health-wellness-ayurveda.jpg',
    sub: 'Chyawanprash, Raw Honey & Herbs'
  },
  {
    id: 'neighbourhood-kirana-network',
    name: 'Neighbourhood Kirana Network',
    category: 'ECOSYSTEM SERVICES',
    img: '/images/topic-kirana-store.jpg',
    sub: '5,000+ Local QR Partner Stores'
  },
  {
    id: 'instant-cashback-wallet',
    name: 'Instant Cashback Wallet',
    category: 'FINTECH SERVICES',
    img: '/images/topic-instant-payout.jpg',
    sub: 'Up to 100% Cashback + UPI Payout'
  },
  {
    id: 'genuine-brand-stock',
    name: '100% Genuine Brand Stock',
    category: 'ASSURANCE',
    img: '/images/topic-govt-ethics.jpg',
    sub: 'Direct Manufacturer Supply'
  },
  {
    id: 'monthly-ration-delivery',
    name: 'Monthly Ration Delivery',
    category: 'SUBSCRIPTION',
    img: '/images/hiw-step2-shopping.jpg',
    sub: 'Doorstep Scheduled Delivery'
  },
  {
    id: 'family-grocery-hamper',
    name: 'Family Grocery Hamper',
    category: 'BEST VALUE DEAL',
    img: '/images/family-grocery-hamper.jpg',
    sub: '15+ Staples with 500 Bonus PV'
  }
];

export const FmcgTopicSidebar = ({ 
  currentTopicId, 
  onNavigate, 
  onOpenAuth,
  dealTitle = 'Special Monthly Ration Saver',
  dealDesc = 'Save ₹450+ on essential kitchen combos with extra bonus PV points.',
  dealPrice = '₹1,499',
  dealOldPrice = '₹1,950',
  dealDiscount = '23% OFF',
  dealActionText = 'Shop Products',
  dealCategory = 'Grocery'
}) => {
  return (
    <div className="topic-sidebar-col">
      
      {/* 1. Value Deal Card */}
      <div className="sidebar-deal-box">
        <div className="sidebar-deal-badge">
          <Sparkles size={13} />
          <span>SPECIAL VALUE OFFER</span>
        </div>
        <h3>{dealTitle}</h3>
        <p>{dealDesc}</p>
        
        <div className="sidebar-price-row">
          <span className="price-current">{dealPrice}</span>
          <span className="price-old">{dealOldPrice}</span>
          <span className="price-discount">{dealDiscount}</span>
        </div>

        <button 
          className="sidebar-action-btn"
          onClick={() => onNavigate('products', dealCategory)}
        >
          <ShoppingBag size={16} />
          <span>{dealActionText}</span>
        </button>
      </div>

      {/* 2. Topic Navigator Card */}
      <div className="topic-navigator-card">
        <div className="nav-card-header">
          <Layers size={18} className="text-orange" />
          <h3>Products & Services Hub</h3>
        </div>
        <p className="nav-card-desc">Explore all FMCG & Ecosystem sections:</p>

        <div className="topics-nav-list">
          {FMCG_TOPICS_LIST.map((topic) => {
            const isActive = currentTopicId === topic.id;
            return (
              <button 
                key={topic.id}
                className={`topic-nav-item-btn ${isActive ? 'active' : ''}`}
                onClick={() => onNavigate(topic.id)}
              >
                <div className="topic-nav-thumb-mini">
                  <img src={topic.img} alt={topic.name} />
                </div>
                <div className="topic-nav-text-block">
                  <span className="topic-nav-cat">{topic.category}</span>
                  <strong className="topic-nav-name">{topic.name}</strong>
                </div>
                <ChevronRight size={15} className="topic-nav-arrow" />
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. KharchDaan Trust Perks */}
      <div className="sidebar-perks-list">
        <h4>KharchDaan Quality Promise</h4>
        <ul>
          <li><CheckCircle2 size={15} className="text-green" /> 100% Brand Sealed Packaging</li>
          <li><CheckCircle2 size={15} className="text-green" /> Free Delivery on Orders ₹499+</li>
          <li><CheckCircle2 size={15} className="text-green" /> 20-Level Matrix PV Multipliers</li>
          <li><CheckCircle2 size={15} className="text-green" /> Instant 1-Click UPI Payouts</li>
        </ul>
      </div>

      {/* 4. Support Helpline */}
      <div className="topic-helpline-sidebar-box">
        <div>
          <strong>Toll Free Member Support</strong>
          <span>Call: <a href="tel:1800-889-2024">1800-889-2024</a> (10 AM - 7 PM)</span>
        </div>
      </div>

    </div>
  );
};
