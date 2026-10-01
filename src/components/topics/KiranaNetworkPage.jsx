import React from 'react';
import { 
  Home, ChevronRight, Sparkles, Store, ShieldCheck, 
  Coins, ArrowRight, ShoppingBag, CheckCircle2, QrCode, 
  Layers, Percent, Truck, HelpCircle, Award, Star, MapPin
} from 'lucide-react';
import { FmcgTopicSidebar } from './FmcgTopicSidebar';

export const KiranaNetworkPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <span className="breadcrumb-link" onClick={() => onNavigate('home')}>Ecosystem Services</span>
            <ChevronRight size={13} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Neighbourhood Kirana Network</span>
          </div>

          <div className="topic-top-badge-row">
            <div className="topic-foundation-pill">
              <span className="pill-om-symbol">🏬</span>
              <span>5,000+ DIGITALLY CONNECTED LOCAL STORES</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          <div className="topic-hero-header-box">
            <h1 className="topic-hero-title">
              Neighbourhood Kirana Partner Network
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                Scan Smart QR • Instant In-Store Pickup • Zero Wait Delivery • Support Local Community Retailers
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              Experience the best of both worlds: digital multi-level cashbacks coupled with the speed, warmth, and trust of your familiar corner grocery store. Walk in, scan the KharchDaan QR, and earn points on every daily purchase.
            </p>
          </div>

        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="topic-main-content-section">
        <div className="container">
          
          <div className="topic-layout-grid">
            
            {/* Left Main Article */}
            <div className="topic-article-main-card">
              
              {/* Primary Visual Banner */}
              <div className="topic-featured-photo-wrapper">
                <img 
                  src="/images/topic-kirana-store.jpg" 
                  alt="Neighbourhood Kirana Store Partner with Digital QR Standee" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Store size={16} className="text-gold" />
                  <span>5,000+ Active Kirana Centers in 150+ Indian Cities</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">Bridging Local Retail With Modern Cashback Technology</h2>
                <p className="topic-overview-text">
                  While corporate warehouse giants try to replace local neighborhood shops, KharchDaan believes that the traditional Indian <strong>Kirana store is the beating heart of our local economy</strong>.
                </p>
                <p className="topic-overview-text">
                  We empower 5,000+ local grocers by giving them free digital QR payment standees, direct inventory integration, and guaranteed customer footfall. When you shop at your local Kirana partner using the KharchDaan App, the shopkeeper earns healthy handling margins, and you receive instant PV points and cashbacks into your account.
                </p>

                {/* 4 Feature Pillars Grid */}
                <div className="topic-features-grid">
                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box green">
                      <QrCode size={22} />
                    </div>
                    <h4>1-Second QR Scan & Pay</h4>
                    <p>Simply scan the KharchDaan Merchant QR at the shop counter to apply instant discounts and matrix PV points to your order.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box orange">
                      <MapPin size={22} />
                    </div>
                    <h4>Hyperlocal 2-KM Proximity</h4>
                    <p>Find an authorized KharchDaan partner store within minutes of your home or apartment society across all major towns.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box blue">
                      <Truck size={22} />
                    </div>
                    <h4>Instant Click & Collect</h4>
                    <p>Order your monthly grocery hamper on the app and pick it up immediately on your way home with zero shipping charges.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box gold">
                      <Coins size={22} />
                    </div>
                    <h4>Mutual Community Prosperity</h4>
                    <p>Every rupee spent at a partner Kirana strengthens your neighborhood economy and generates 20-level downline earnings.</p>
                  </div>
                </div>

                {/* How It Works 3-Step Kirana Flow */}
                <h3 className="topic-mid-title">How To Use the Kirana Network in 3 Simple Steps</h3>
                
                <div className="topic-staples-showcase-grid">
                  <div className="staple-card">
                    <img src="/images/hiw-kirana-partner.jpg" alt="Locate Store" />
                    <div className="staple-card-content">
                      <h5>1. Locate Partner Store</h5>
                      <span>Open app & find verified Kiranas within 2-km radius.</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/hiw-step2-shopping.jpg" alt="Select Groceries" />
                    <div className="staple-card-content">
                      <h5>2. Pick Your Daily Items</h5>
                      <span>Select genuine Atta, Oil, Spices, Dairy Milk, or Tea.</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/topic-instant-payout.jpg" alt="Scan & Earn" />
                    <div className="staple-card-content">
                      <h5>3. Scan QR & Earn PV</h5>
                      <span>Scan QR at checkout for instant discount + PV point credit!</span>
                    </div>
                  </div>
                </div>

                {/* Kirana Merchant Benefits Table */}
                <h3 className="topic-table-title">Consumer & Kirana Merchant Win-Win Breakdown</h3>
                <div className="topic-breakdown-table-wrap">
                  <table className="topic-breakdown-table">
                    <thead>
                      <tr>
                        <th>Beneficiary</th>
                        <th>Traditional Supermarket</th>
                        <th>KharchDaan Kirana Model</th>
                        <th>Advantage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Local Consumer</strong></td>
                        <td>0% PV / Fake points</td>
                        <td>Up to 100% Matrix Cashback</td>
                        <td><strong className="text-orange">Real Cash & PV</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Local Shopkeeper</strong></td>
                        <td>Customers lost to apps</td>
                        <td>Guaranteed footfall & margins</td>
                        <td><strong className="text-orange">3x Monthly Footfall</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Local Economy</strong></td>
                        <td>Profits sent overseas</td>
                        <td>Funds retained in community</td>
                        <td><strong className="text-orange">100% Indian Retail</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip Box */}
                <div className="topic-pro-tip-box">
                  <Sparkles size={22} className="text-orange" />
                  <div>
                    <strong>Pro Merchant Tip</strong>
                    <p>Local grocery merchants can onboard for ₹0 deposit. Show customers how scanning the QR gives them cashbacks, transforming occasional shoppers into permanent monthly regulars!</p>
                  </div>
                </div>

                {/* Action CTA Row */}
                <div className="topic-article-cta-row">
                  <button className="btn-primary btn-large" onClick={() => onNavigate('products')}>
                    <Store size={18} />
                    <span>Find Partner Kirana Stores</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-secondary-outline btn-large" onClick={() => onNavigate('kirana-merchant')}>
                    <Sparkles size={18} />
                    <span>Merchant Free Registration</span>
                  </button>
                </div>

                {/* FAQ Section */}
                <div className="topic-faq-section">
                  <h3 className="topic-faq-heading">Frequently Asked Questions</h3>
                  
                  <div className="faq-accordion-box">
                    <div className="faq-item">
                      <div className="faq-question">
                        <HelpCircle size={16} className="text-orange" />
                        <strong>Can any local shopkeeper join the KharchDaan Kirana Network?</strong>
                      </div>
                      <p className="faq-answer">
                        Yes! Verified grocery and FMCG store owners can apply for free onboarding with zero setup cost, zero terminal rental, and instant UPI settlements.
                      </p>
                    </div>

                    <div className="faq-item">
                      <div className="faq-question">
                        <HelpCircle size={16} className="text-orange" />
                        <strong>Are prices at the Kirana store the same as on the app?</strong>
                      </div>
                      <p className="faq-answer">
                        Yes, all authorized partner stores adhere strictly to standard KharchDaan wholesale-grade pricing and member cashback policies.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Side Action Panel */}
            <FmcgTopicSidebar 
              currentTopicId="neighbourhood-kirana-network"
              onNavigate={onNavigate}
              onOpenAuth={onOpenAuth}
              dealTitle="Kirana Merchant Onboarding"
              dealDesc="Join 5,000+ stores. Get free QR standee, recurring neighborhood footfall, and extra handling margins."
              dealPrice="₹0 FREE"
              dealOldPrice="₹2,500"
              dealDiscount="100% WAIVED"
              dealActionText="Register Store as Partner"
              dealCategory="Grocery"
            />

          </div>

        </div>
      </section>

      {/* 3. BOTTOM CTA BANNER */}
      <section className="topic-bottom-cta-banner">
        <div className="container">
          <div className="bottom-cta-card">
            <div className="bottom-cta-content">
              <h2>Support Local Shops, Grow Personal Wealth</h2>
              <p>Find the closest KharchDaan Kirana store in your area and unlock instant cashbacks today.</p>
            </div>
            <div className="bottom-cta-actions">
              <button 
                className="btn-cta-primary"
                onClick={() => onNavigate('products')}
              >
                <span>Find Nearby Store & Products</span>
                <ArrowRight size={16} />
              </button>
              <button 
                className="btn-cta-secondary"
                onClick={() => onNavigate('kirana-merchant')}
              >
                <span>Merchant Free Registration</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
