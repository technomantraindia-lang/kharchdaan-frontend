import React, { useState } from 'react';
import { 
  Home, ChevronRight, Sparkles, TrendingUp, ShieldCheck, 
  Coins, HeartHandshake, Store, Award, Zap, CheckCircle2, 
  ArrowRight, Users, Check, Gift, HelpCircle, Phone, 
  Layers, ShoppingBag, Landmark, Scale, Target, RefreshCw
} from 'lucide-react';

export const DIRECT_SELLING_TOPICS = {
  'matrix-system': {
    id: 'matrix-system',
    category: 'COMPENSATION & MATRIX',
    badge: '1:3 POWER MATRIX SYSTEM',
    title: '1:3 Automated Power Placement Matrix',
    subtitle: 'How 3 direct placements and smart team spillovers create exponential downline acceleration.',
    image: '/images/hiw-step3-network.jpg',
    tagline: 'Simple 3-Node Matrix • Zero Binary Leg Balancing Hassle',
    overview: 'The KharchDaan 1:3 Power Matrix is engineered for community synergy. Unlike complicated binary plans requiring leg balancing or unilevel structures that leave beginners stranded, our 1:3 placement matrix guarantees that every 4th, 5th, or subsequent referral automatically spills over to support your downline.',
    pillars: [
      { title: 'Level 1 Frontline (3 Members)', desc: 'You introduce 3 active consumer families to complete your direct frontline.', icon: <Users size={20} /> },
      { title: 'Automated Downline Spillover', desc: 'Any extra referrals from you or your upline sponsors automatically fall into your open downline spots.', icon: <TrendingUp size={20} /> },
      { title: 'Collective Team Velocity', desc: 'No complex ratio matching needed. Every verified grocery purchase generates instant PV points.', icon: <Zap size={20} /> },
      { title: 'Equal Growth Opportunity', desc: 'Homemakers and new distributors receive active team placement assistance from senior leaders.', icon: <ShieldCheck size={20} /> }
    ],
    tableData: [
      { level: 'Level 1', team: '3 Members', groceryVol: '₹12,000 / mo', returnRate: '10% Tier Commission', estIncome: '₹1,200 / mo' },
      { level: 'Level 2', team: '9 Members', groceryVol: '₹36,000 / mo', returnRate: '5% Tier Commission', estIncome: '₹1,800 / mo' },
      { level: 'Level 3', team: '27 Members', groceryVol: '₹1,08,000 / mo', returnRate: '4% Tier Commission', estIncome: '₹4,320 / mo' },
      { level: 'Level 4', team: '81 Members', groceryVol: '₹3,24,000 / mo', returnRate: '3% Tier Commission', estIncome: '₹9,720 / mo' },
      { level: 'Level 5', team: '243 Members', groceryVol: '₹9,72,000 / mo', returnRate: '2% Tier Commission', estIncome: '₹19,440 / mo' }
    ],
    proTip: 'Key Insight: With just 3 active direct families, your matrix duplicates geometrically while everyday grocery consumption keeps monthly volume 100% active!'
  },

  'earning-depth': {
    id: 'earning-depth',
    category: 'COMPENSATION & MATRIX',
    badge: '20 LEVELS EARNING DEPTH',
    title: '20 Levels Recurring Distribution Depth',
    subtitle: 'Earn tiered monthly royalties on essential household grocery consumption across 20 full tiers.',
    image: '/images/hiw-step5-prosperity.jpg',
    tagline: 'Deep Generational Royalties • Essential FMCG Repurchases',
    overview: 'Most network marketing platforms cap earnings at 5 or 7 levels. KharchDaan opens a massive 20-level distribution depth. Because every household must buy cooking oil, flour, tea, and spices every 30 days, your monthly royalty volume renews automatically without forced re-pitching.',
    pillars: [
      { title: 'Full 20-Tier Payout Reach', desc: 'Earn verified commissions across all 20 levels of consumer repurchases.', icon: <Layers size={20} /> },
      { title: 'Mandatory Monthly Consumption', desc: 'Food and daily staples have 100% genuine consumer retention every single month.', icon: <ShoppingBag size={20} /> },
      { title: 'No Product Pitching Required', desc: 'Zero rejection—families already consume Aashirvaad Atta, Fortune Oil, and Tata Tea.', icon: <CheckCircle2 size={20} /> },
      { title: 'Generational Family Wealth', desc: 'Build an unshakeable passive income pipeline that lasts for years to come.', icon: <Coins size={20} /> }
    ],
    tableData: [
      { level: 'Tiers 1 - 3', team: 'Frontline Core (39)', groceryVol: 'Foundation Stage', returnRate: 'High Direct Cashback', estIncome: '₹7,320 / mo' },
      { level: 'Tiers 4 - 7', team: 'Community Expansion', groceryVol: 'Regional Momentum', returnRate: 'Tiered Royalty Split', estIncome: '₹48,500 / mo' },
      { level: 'Tiers 8 - 12', team: 'District Network', groceryVol: 'Multi-City Stores', returnRate: 'Compounding PV Points', estIncome: '₹1,85,000 / mo' },
      { level: 'Tiers 13 - 20', team: 'National Matrix', groceryVol: 'Pan-India FMCG Volume', returnRate: 'Leadership Royalty Pool', estIncome: 'Generational Wealth' }
    ],
    proTip: 'Key Insight: 20-level depth ensures that as members in distant cities buy monthly groceries, royalty points flow directly back to your wallet.'
  },

  'royalty-pool': {
    id: 'royalty-pool',
    category: 'COMPENSATION & MATRIX',
    badge: 'LEADERSHIP & ROYALTY POOL',
    title: 'Executive Leadership & Global Turnover Pool',
    subtitle: 'Share directly in KharchDaan’s company-wide monthly FMCG turnover and diamond dividends.',
    image: '/images/topic-royalty-pool.jpg',
    tagline: 'Company Turnover Share • Diamond & Crown Leadership Dividends',
    overview: 'KharchDaan allocates a dedicated percentage of its total national FMCG gross turnover into the Leadership Royalty Pool. As an active community leader achieving rank milestones, you receive recurring monthly profit dividends regardless of your specific leg structures.',
    pillars: [
      { title: 'Company Turnover Profit Share', desc: 'Receive dividends derived from total nationwide product sales volume.', icon: <Award size={20} /> },
      { title: 'Diamond & Crown Ranks', desc: 'Prestige titles with exclusive monthly royalty bonuses and national leadership recognition.', icon: <Sparkles size={20} /> },
      { title: 'Zero Demotion Policy', desc: 'Once you achieve a leadership rank, your performance recognition remains preserved.', icon: <ShieldCheck size={20} /> },
      { title: 'Annual Leadership Retreats', desc: 'All-expenses-paid national leadership summits and strategy retreats.', icon: <Gift size={20} /> }
    ],
    tableData: [
      { level: 'Silver Star', team: '27 Active Members', groceryVol: '₹1 Lakh Monthly Volume', returnRate: '1% Royalty Pool Share', estIncome: 'Silver Bonus' },
      { level: 'Gold Leader', team: '81 Active Members', groceryVol: '₹3 Lakh Monthly Volume', returnRate: '2% Royalty Pool Share', estIncome: 'Gold Bonus' },
      { level: 'Diamond Crown', team: '243 Active Members', groceryVol: '₹10 Lakh Monthly Volume', returnRate: '3% Royalty Pool Share', estIncome: 'Diamond Dividend' },
      { level: 'Platinum Legend', team: '729+ Members', groceryVol: '₹30 Lakh+ Volume', returnRate: '5% Top Royalty Pool', estIncome: 'Executive Dividend' }
    ],
    proTip: 'Key Insight: The Royalty Pool allows leaders to profit from the growth of the entire platform nationwide.'
  },

  'instant-payouts': {
    id: 'instant-payouts',
    category: 'COMPENSATION & MATRIX',
    badge: 'INSTANT UPI & BANK PAYOUTS',
    title: 'Real-Time UPI Wallet Withdrawals',
    subtitle: 'Immediate cashback calculation and 1-click direct bank transfers with zero withdrawal lock-ins.',
    image: '/images/hiw-step4-cashback.jpg',
    tagline: 'NPCI / UPI Integrated • 1-Click Instant Settlements',
    overview: 'No more waiting 30 or 60 days for commission checks with hidden administrative deductions! KharchDaan integrates direct NPCI UPI and IMPS bank transfer rails. As soon as orders are delivered and verified, cashbacks and matrix earnings credit immediately to your digital wallet.',
    pillars: [
      { title: 'Real-Time Wallet Credit', desc: 'Cashbacks and matrix PV credits appear in your wallet instantly.', icon: <Zap size={20} /> },
      { title: '1-Click Direct UPI Payout', desc: 'Withdraw funds directly into your GPay, PhonePe, Paytm, or Bank Account.', icon: <Coins size={20} /> },
      { title: 'Zero Unreasonable Deductions', desc: '100% transparent ledger with zero surprise maintenance cuts.', icon: <ShieldCheck size={20} /> },
      { title: '256-Bit Bank-Grade Security', desc: 'Fully encrypted and compliant with Reserve Bank of India payment guidelines.', icon: <Landmark size={20} /> }
    ],
    tableData: [
      { level: 'Personal Cashback', team: 'Daily Orders', groceryVol: 'Instant Credit', returnRate: 'Up to 100% (as per rules)', estIncome: 'Immediate Wallet' },
      { level: '1:3 Team Royalty', team: 'Downline Buys', groceryVol: 'Real-Time PV Split', returnRate: 'Automated Calculation', estIncome: 'Daily Settlement' },
      { level: 'Bank Transfer (UPI)', team: '1-Click Action', groceryVol: 'Instant IMPS', returnRate: 'Zero Delay', estIncome: 'Direct Bank Credit' }
    ],
    proTip: 'Key Insight: Your money belongs to you. Transparent, real-time payouts ensure complete trust and member confidence.'
  },

  'foundation-seva': {
    id: 'foundation-seva',
    category: 'MISSION & FOUNDATION',
    badge: 'GEETA SEVASHRAM PRATISHTHAN',
    title: 'Geeta Sevashram Pratishthan Social Foundation',
    subtitle: 'Ethical commerce rooted in the sacred principle of “Tera Tujhko Arpan” (तेरा तुझको अर्पण क्या लागे मेरा).',
    image: '/images/topic-foundation-seva.jpg',
    tagline: 'Community Seva • Ethical Commerce • Generational Blessing',
    overview: 'KharchDaan is a social initiative backed by Geeta Sevashram Pratishthan. Rather than enriching corporate middlemen or spending crores on celebrity endorsements, our core mission is returning the generated trade surplus directly back to Indian households and funding educational & community seva.',
    pillars: [
      { title: 'Sacred Philosophy', desc: 'Guided by “Tera Tujhko Arpan”—wealth generated by the community is returned to the community.', icon: <HeartHandshake size={20} /> },
      { title: 'Community Annadaan & Seva', desc: 'A share of foundation profits supports free food grain and ration distribution for the needy.', icon: <Landmark size={20} /> },
      { title: 'Zero Exploitation Guarantee', desc: 'No high registration barriers, no mandatory forced buying, and complete moral transparency.', icon: <ShieldCheck size={20} /> },
      { title: 'Dignity for Rural & Urban Bharat', desc: 'Empowering tier-2, tier-3 cities and village families with independent earnings.', icon: <Sparkles size={20} /> }
    ],
    tableData: [
      { level: 'Foundation Seva', team: 'Social Annadaan', groceryVol: 'Community Ration Support', returnRate: '100% Charitable', estIncome: 'Seva Blessings' },
      { level: 'Consumer Welfare', team: '25,000+ Families', groceryVol: 'Fair MRP Discounts', returnRate: 'Ethical Margins', estIncome: 'Dignity & Wealth' },
      { level: 'Foundation Oversight', team: 'Trust Board', groceryVol: '100% Non-Exploitative', returnRate: 'Audited Transparency', estIncome: 'Moral Integrity' }
    ],
    proTip: 'Key Insight: Partnering with KharchDaan means your everyday kitchen spend supports both your family and social community seva.'
  },

  'women-empowerment': {
    id: 'women-empowerment',
    category: 'MISSION & FOUNDATION',
    badge: 'WOMEN & HOMEMAKER DIGNITY',
    title: 'Work From Home Empowerment for Homemakers',
    subtitle: 'Enabling Indian women to transform household kitchen management into respected financial independence.',
    image: '/images/banner-women-empowerment.jpg',
    tagline: 'Financial Independence • Zero Investment • Work From Mobile',
    overview: 'Indian women manage the household kitchen budget and decide the monthly ration. KharchDaan gives homemakers the power to convert those mandatory grocery expenses into independent income from home—with zero financial risk, zero investment, and flexible mobile-based sharing.',
    pillars: [
      { title: 'Work From Home Freedom', desc: 'Build your network during free hours directly from your mobile smartphone.', icon: <TrendingUp size={20} /> },
      { title: 'Zero Financial Risk', desc: 'No money to invest, no inventory to store at home. 100% free registration.', icon: <ShieldCheck size={20} /> },
      { title: 'Kitchen Decision Power', desc: 'Homemakers already know the best brands; sharing with relatives comes naturally.', icon: <ShoppingBag size={20} /> },
      { title: 'Dignity & Self-Reliance', desc: 'Earn your own monthly savings and royalties deposited directly into your bank account.', icon: <HeartHandshake size={20} /> }
    ],
    tableData: [
      { level: 'Monthly Ration Savings', team: 'Own Kitchen', groceryVol: '₹6,000 Monthly Spend', returnRate: 'Direct Cashback', estIncome: '₹720 / mo' },
      { level: '3 Family Referrals', team: 'Level 1 Team', groceryVol: '₹18,000 Team Spend', returnRate: '1:3 Team Bonus', estIncome: '₹1,500 / mo' },
      { level: 'Extended Network', team: 'Level 2 & 3', groceryVol: '₹1 Lakh+ Volume', returnRate: 'Recurring Royalty', estIncome: '₹6,000 - ₹15,000 / mo' }
    ],
    proTip: 'Key Insight: Over 65% of KharchDaan’s top community rank holders are proud Indian homemakers running successful home networks.'
  },

  'kirana-merchant': {
    id: 'kirana-merchant',
    category: 'MISSION & FOUNDATION',
    badge: 'KIRANA MERCHANT MODERNIZATION',
    title: 'Neighbourhood Kirana & Retail Partner Modernization',
    subtitle: 'Empowering 5,000+ local grocery stores with digital QR code orders, customer footfall, and fulfillment margins.',
    image: '/images/hiw-kirana-partner.jpg',
    tagline: 'Local Store Empowerment • Zero Listing Fees • High Repeat Footfall',
    overview: 'While giant quick-commerce apps threaten local grocery stores, KharchDaan empowers neighbourhood Kiranas! We integrate local retail merchants as authorized fulfillment and QR pickup centers, giving them thousands of loyal repeat customers and digital margin earnings.',
    pillars: [
      { title: 'Guaranteed Repeat Footfall', desc: 'KharchDaan members in your locality visit your shop every month to scan and redeem cashbacks.', icon: <Store size={20} /> },
      { title: 'Free Merchant QR Standee', desc: 'Instant merchant onboarding with zero registration or terminal listing charges.', icon: <Zap size={20} /> },
      { title: 'Fulfillment Margins', desc: 'Earn attractive handling and retail distribution margins on every verified ticket.', icon: <Coins size={20} /> },
      { title: 'Compete with Big Retail', desc: 'Modern digital loyalty system protects local neighbourhood businesses from online giants.', icon: <ShieldCheck size={20} /> }
    ],
    tableData: [
      { level: 'Merchant QR Setup', team: 'Local Shop', groceryVol: 'Free Setup', returnRate: 'Instant Activation', estIncome: 'Zero Cost' },
      { level: 'Monthly Customer Footfall', team: '50-200 Families', groceryVol: '₹3L - ₹10L Volume', returnRate: 'Handling Margins', estIncome: '₹15,000 - ₹40,000 / mo' },
      { level: 'Merchant Downline Bonus', team: 'Refer Other Kiranas', groceryVol: 'Regional Hub', returnRate: 'Franchise Commission', estIncome: 'Extra Royalty' }
    ],
    proTip: 'Key Insight: Local Kirana partners don’t just survive—they thrive with a dedicated base of recurring neighbourhood shoppers.'
  },

  'govt-ethics': {
    id: 'govt-ethics',
    category: 'MISSION & FOUNDATION',
    badge: 'GOVT. DIRECT SELLING ETHICS',
    title: '100% Compliant with Indian Direct Selling Rules, 2021',
    subtitle: 'Strict legal compliance with Ministry of Consumer Affairs guidelines—zero pyramid or money circulation risk.',
    image: '/images/topic-govt-ethics.jpg',
    tagline: 'Consumer Protection 2021 Compliant • Genuine FMCG Products • Transparent Invoicing',
    overview: 'KharchDaan operates in full compliance with the Consumer Protection (Direct Selling) Rules, 2021 notified by the Government of India. There are no registration fees, no mandatory starter kit purchases, and all earnings are derived strictly from genuine FMCG goods delivered with GST invoices.',
    pillars: [
      { title: 'Consumer Protection Act 2021', desc: 'Strict adherence to all guidelines notified by the Ministry of Consumer Affairs.', icon: <Scale size={20} /> },
      { title: 'Zero Joining / Investment Fees', desc: 'Complete prohibition of pyramid schemes or money circulation schemes.', icon: <ShieldCheck size={20} /> },
      { title: '100% Genuine Tax Invoicing', desc: 'Every grocery item is dispatched with authentic GST tax invoice and manufacturer warranty.', icon: <Award size={20} /> },
      { title: 'Clear Buyback & Return Policy', desc: 'Consumer-first grievance redressal and transparent refund mechanisms.', icon: <CheckCircle2 size={20} /> }
    ],
    tableData: [
      { level: 'Direct Selling Rules 2021', team: 'Full Compliance', groceryVol: 'Consumer-First', returnRate: '100% Legal', estIncome: 'Protected Rights' },
      { level: 'Product Pricing', team: 'Fair MRP Discounts', groceryVol: 'Authentic FMCG Brands', returnRate: 'Transparent GST', estIncome: 'Genuine Value' },
      { level: 'Commission Origin', team: 'Product Sales Only', groceryVol: 'Zero Headhunting Fees', returnRate: 'Sales Margin Split', estIncome: 'Ethical Rewards' }
    ],
    proTip: 'Key Insight: Complete legal compliance guarantees that your network, earnings, and family reputation remain 100% secure.'
  }
};

export const DirectSellingTopicPage = ({ 
  initialTopicId = 'matrix-system', 
  onNavigateHome, 
  onOpenAuth, 
  onShopClick,
  onSelectTopic
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState(initialTopicId);
  const currentTopic = DIRECT_SELLING_TOPICS[selectedTopicId] || DIRECT_SELLING_TOPICS['matrix-system'];

  const handleTopicSwitch = (topicId) => {
    setSelectedTopicId(topicId);
    if (onSelectTopic) onSelectTopic(topicId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const topicKeys = Object.keys(DIRECT_SELLING_TOPICS);

  return (
    <div className="topic-page-wrapper">
      
      {/* 1. HERO HEADER SHOWCASE */}
      <section className="topic-hero-showcase">
        <div className="topic-hero-bg-glow" />
        <div className="container">
          
          {/* Breadcrumbs Navigation */}
          <div className="topic-breadcrumbs-row">
            <button className="breadcrumb-link" onClick={onNavigateHome}>
              <Home size={13} />
              <span>Home</span>
            </button>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-link">Direct Selling</span>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-current">{currentTopic.title}</span>
          </div>

          {/* Top Category Badge */}
          <div className="topic-top-badge-row">
            <div className="topic-foundation-pill">
              <span className="pill-om-symbol">ॐ</span>
              <span>{currentTopic.badge}</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          {/* Main Title & Tagline */}
          <div className="topic-hero-header-box">
            <h1 className="topic-hero-title">
              {currentTopic.title}
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                {currentTopic.tagline}
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              {currentTopic.subtitle}
            </p>
          </div>

        </div>
      </section>

      {/* 2. MAIN TOPIC SHOWCASE & SIDEBAR LAYOUT */}
      <section className="topic-main-content-section">
        <div className="container">
          <div className="topic-layout-grid">
            
            {/* Left Column: Active Topic Detailed Showcase */}
            <div className="topic-article-main-card">
              
              {/* Featured Visual Photo Banner */}
              <div className="topic-featured-photo-wrapper">
                <img 
                  src={currentTopic.image} 
                  alt={currentTopic.title} 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Sparkles size={15} className="text-gold" />
                  <span>{currentTopic.badge}</span>
                </div>
              </div>

              {/* Detailed Overview Box */}
              <div className="topic-content-body">
                <h2 className="topic-section-subheading">In-Depth Overview & Architecture</h2>
                <p className="topic-overview-text">
                  {currentTopic.overview}
                </p>

                {/* 4 Core Pillars Grid */}
                <h3 className="topic-pillars-title">Key Core Pillars</h3>
                <div className="topic-pillars-grid">
                  {currentTopic.pillars.map((pillar, pIdx) => (
                    <div key={pIdx} className="topic-pillar-box">
                      <div className="pillar-icon-circle">
                        {pillar.icon}
                      </div>
                      <h4 className="pillar-title">{pillar.title}</h4>
                      <p className="pillar-desc">{pillar.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Mathematical / Breakdown Table */}
                <h3 className="topic-table-title">Performance & Compensation Matrix Breakdown</h3>
                <div className="topic-breakdown-table-wrap">
                  <table className="topic-breakdown-table">
                    <thead>
                      <tr>
                        <th>Tier / Milestone</th>
                        <th>Network Structure</th>
                        <th>Grocery Consumption</th>
                        <th>Commission Split</th>
                        <th>Projected Earnings</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentTopic.tableData.map((row, rIdx) => (
                        <tr key={rIdx}>
                          <td><strong>{row.level}</strong></td>
                          <td>{row.team}</td>
                          <td>{row.groceryVol}</td>
                          <td><span className="badge-split">{row.returnRate}</span></td>
                          <td><strong className="text-orange">{row.estIncome}</strong></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip Box */}
                <div className="topic-pro-tip-box">
                  <Sparkles size={20} className="text-orange" />
                  <div>
                    <strong>Pro Leader Tip & Strategic Advice</strong>
                    <p>{currentTopic.proTip}</p>
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="topic-article-cta-row">
                  <button className="btn-primary btn-large" onClick={onOpenAuth}>
                    <Sparkles size={18} />
                    <span>Join Free in 30 Seconds</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-secondary-outline btn-large" onClick={onShopClick}>
                    <ShoppingBag size={18} />
                    <span>Explore Daily FMCG Store</span>
                  </button>
                </div>

              </div>

            </div>

            {/* Right Column: Topic Navigator & Quick Action Sidebar */}
            <div className="topic-sidebar-col">
              
              {/* All 8 Topics Switcher Card */}
              <div className="topic-navigator-card">
                <div className="nav-card-header">
                  <Layers size={18} className="text-orange" />
                  <h3>Direct Selling Knowledge Hub</h3>
                </div>
                <p className="nav-card-desc">
                  Select any topic below to view its dedicated architecture and compensation rules:
                </p>

                <div className="topics-nav-list">
                  {topicKeys.map((key) => {
                    const topItem = DIRECT_SELLING_TOPICS[key];
                    const isActive = selectedTopicId === key;
                    return (
                      <button
                        key={key}
                        className={`topic-nav-item-btn ${isActive ? 'active' : ''}`}
                        onClick={() => handleTopicSwitch(key)}
                      >
                        <div className="topic-nav-thumb-mini">
                          <img src={topItem.image} alt={topItem.title} />
                        </div>
                        <div className="topic-nav-text-block">
                          <span className="topic-nav-cat">{topItem.category.split('&')[0].trim()}</span>
                          <strong className="topic-nav-name">{topItem.title}</strong>
                        </div>
                        <ChevronRight size={15} className="topic-nav-arrow" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Free Account Promo Card */}
              <div className="topic-promo-sidebar-card">
                <div className="promo-badge-tag">
                  <Gift size={13} />
                  <span>FREE LIFETIME ACCESS</span>
                </div>
                <h4 className="promo-card-title">Start Your Journey with Zero Capital</h4>
                <p className="promo-card-desc">
                  No kit purchase required. Buy your routine kitchen groceries and earn recurring monthly royalties.
                </p>
                <button className="btn-promo-action" onClick={onOpenAuth}>
                  <span>Create Free Account Now</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Leader Helpline Box */}
              <div className="topic-helpline-sidebar-box">
                <Phone size={22} className="text-orange" />
                <div>
                  <strong>Need Leader Guidance?</strong>
                  <span>Toll-free leader support: <a href="tel:7043421590">+91 70434 21590</a></span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. BOTTOM LUXURY CONVERSION BANNER */}
      <section className="topic-bottom-cta-strip">
        <div className="container">
          <div className="topic-cta-card">
            <div className="cta-mandala-watermark left" aria-hidden="true">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="none" opacity="0.12">
                <circle cx="50" cy="50" r="45" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="30" stroke="#FFFFFF" strokeWidth="1.2" />
                <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="#FFFFFF" strokeWidth="1" />
              </svg>
            </div>
            <div className="cta-mandala-watermark right" aria-hidden="true">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="none" opacity="0.12">
                <circle cx="50" cy="50" r="45" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="30" stroke="#FFFFFF" strokeWidth="1.2" />
                <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="#FFFFFF" strokeWidth="1" />
              </svg>
            </div>

            <div className="topic-cta-content">
              <div className="hiw-foundation-pill luxury-glass">
                <span className="pill-om-symbol gold">ॐ</span>
                <span>TERA TUJHKO ARPAN • GEETA SEVASHRAM PRATISHTHAN</span>
              </div>

              <h2 className="topic-cta-title">
                Turn Every Grocery Bill into Lifetime Generational Wealth
              </h2>

              <p className="topic-cta-desc">
                Join over 25,000+ Indian families already enjoying monthly kitchen grocery savings and recurring 20-level royalties.
              </p>

              <div className="topic-cta-btns">
                <button className="btn-cta-primary-white" onClick={onOpenAuth}>
                  <Sparkles size={18} className="btn-sparkle-icon" />
                  <span>Create Free Account in 30 Seconds</span>
                  <ArrowRight size={18} className="btn-arrow-icon" />
                </button>
                <button className="btn-cta-secondary-glass" onClick={onShopClick}>
                  <ShoppingBag size={18} />
                  <span>Browse Daily FMCG Catalog</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
