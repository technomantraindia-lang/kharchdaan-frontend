import React from 'react';
import { 
  Home, ChevronRight, Sparkles, ShieldCheck, TrendingUp, 
  Coins, ArrowRight, ShoppingBag, CheckCircle2, Award, 
  Layers, Percent, Truck, HelpCircle, Star, BadgeCheck, FileCheck
} from 'lucide-react';
import { FmcgTopicSidebar } from './FmcgTopicSidebar';

export const GenuineBrandStockPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <span className="breadcrumb-current">100% Genuine Brand Stock</span>
          </div>

          <div className="topic-top-badge-row">
            <div className="topic-foundation-pill">
              <span className="pill-om-symbol">🏆</span>
              <span>ZERO COUNTERFEIT TOLERANCE POLICY</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          <div className="topic-hero-header-box">
            <h1 className="topic-hero-title">
              100% Genuine Brand Stock & Manufacturer Sourcing
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                Direct FMCG Factory Supply • Tamper-Proof Seals • Verified Batch Certificates • Zero Grey Market Goods
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              We eliminate unauthorized sub-wholesalers and shady middle tiers. Every item on KharchDaan is supplied directly from verified FMCG enterprise plants with guaranteed freshness and original brand packaging.
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
                  src="/images/topic-govt-ethics.jpg" 
                  alt="Verified Direct Supply Chain and Quality Assurance Standard" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <BadgeCheck size={16} className="text-gold" />
                  <span>National Brand Purity & Authenticity Seal</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">Why Authentic Quality Is Non-Negotiable</h2>
                <p className="topic-overview-text">
                  In today's fast-moving open wholesale markets, duplicate spices, adulterated cooking oils, counterfeit detergents, and relabeled near-expiry products are a growing health crisis for Indian families.
                </p>
                <p className="topic-overview-text">
                  <strong>KharchDaan operates a closed, tightly controlled direct-to-consumer supply chain</strong>. We source exclusively from authorized national FMCG principals—including ITC Limited, Adani Wilmar, Hindustan Unilever, Tata Consumer, Dabur, Reckitt, and Mondelez. No third-party open-market lots or unverified traders are ever permitted into our fulfillment ecosystem.
                </p>

                {/* 4 Feature Pillars Grid */}
                <div className="topic-features-grid">
                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box orange">
                      <ShieldCheck size={22} />
                    </div>
                    <h4>Direct Factory Procurement</h4>
                    <p>Shipments move directly from manufacturer mother warehouses to our central hubs with traceable electronic waybills.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box blue">
                      <FileCheck size={22} />
                    </div>
                    <h4>Verified Batch & Expiry Testing</h4>
                    <p>Every inbound batch undergoes barcode scanning and quality inspection to guarantee fresh manufacturing dates.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box green">
                      <Award size={22} />
                    </div>
                    <h4>100% Replacement Guarantee</h4>
                    <p>In the rare event of damaged transit packaging, enjoy immediate no-questions-asked replacement or full refund.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box gold">
                      <TrendingUp size={22} />
                    </div>
                    <h4>Transparent Matrix Volume</h4>
                    <p>Genuine brands guarantee honest PV ratios without hidden artificial price inflations common in typical pyramid schemes.</p>
                  </div>
                </div>

                {/* Brand Partners Showcase */}
                <h3 className="topic-mid-title">Direct Certified FMCG Brand Partners</h3>
                
                <div className="topic-staples-showcase-grid">
                  <div className="staple-card">
                    <img src="/images/aashirvaad-atta.jpg" alt="ITC Aashirvaad" />
                    <div className="staple-card-content">
                      <h5>ITC Limited & Staples</h5>
                      <span>Aashirvaad Atta, Sunfeast, Bingo & ITC Master Chef</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/fortune-oil.jpg" alt="Adani Wilmar" />
                    <div className="staple-card-content">
                      <h5>Adani Wilmar & Edibles</h5>
                      <span>Fortune Sunflower Oil, Kachi Ghani Mustard & Rice</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/tata-tea.jpg" alt="Tata Consumer" />
                    <div className="staple-card-content">
                      <h5>Tata Consumer Products</h5>
                      <span>Tata Tea Gold, Tata Salt, Tata Sampann Pulses</span>
                    </div>
                  </div>
                </div>

                {/* Table Breakdown */}
                <h3 className="topic-table-title">KharchDaan Authenticity & Supply Integrity Protocol</h3>
                <div className="topic-breakdown-table-wrap">
                  <table className="topic-breakdown-table">
                    <thead>
                      <tr>
                        <th>Supply Stage</th>
                        <th>Quality Verification Check</th>
                        <th>Standard Guarantee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>1. Manufacturer Dispatch</strong></td>
                        <td>Direct OEM factory consignment waybill</td>
                        <td><strong className="text-orange">Zero Intermediary Traders</strong></td>
                      </tr>
                      <tr>
                        <td><strong>2. Inbound Hub Check</strong></td>
                        <td>Batch barcode & expiry verification</td>
                        <td><strong className="text-orange">Fresh Harvest / Batch</strong></td>
                      </tr>
                      <tr>
                        <td><strong>3. Customer Delivery</strong></td>
                        <td>Hologram tamper-proof security pack</td>
                        <td><strong className="text-orange">100% Original Seal</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip Box */}
                <div className="topic-pro-tip-box">
                  <Sparkles size={22} className="text-orange" />
                  <div>
                    <strong>Pro Verification Tip</strong>
                    <p>Every product delivered carries the original manufacturer batch number and official tax invoice. You can verify the product with the brand's national customer hotline anytime!</p>
                  </div>
                </div>

                {/* Action CTA Row */}
                <div className="topic-article-cta-row">
                  <button className="btn-primary btn-large" onClick={() => onNavigate('products')}>
                    <ShoppingBag size={18} />
                    <span>Shop Verified Brand Catalog</span>
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-secondary-outline btn-large" onClick={onOpenAuth}>
                    <Sparkles size={18} />
                    <span>Register Free Account</span>
                  </button>
                </div>

                {/* FAQ Section */}
                <div className="topic-faq-section">
                  <h3 className="topic-faq-heading">Frequently Asked Questions</h3>
                  
                  <div className="faq-accordion-box">
                    <div className="faq-item">
                      <div className="faq-question">
                        <HelpCircle size={16} className="text-orange" />
                        <strong>Can customers verify the authenticity of their received package?</strong>
                      </div>
                      <p className="faq-answer">
                        Yes! Every product carries the brand's original holographic seal, QR batch code, and manufacturer customer support contact directly on the package.
                      </p>
                    </div>

                    <div className="faq-item">
                      <div className="faq-question">
                        <HelpCircle size={16} className="text-orange" />
                        <strong>How does KharchDaan offer wholesale pricing on genuine brands?</strong>
                      </div>
                      <p className="faq-answer">
                        By cutting out multiple layers of traditional middlemen (C&F agents, regional stockists, and sub-distributors), we pass the savings directly to you in the form of discounts and cashback PV!
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Side Action Panel */}
            <FmcgTopicSidebar 
              currentTopicId="genuine-brand-stock"
              onNavigate={onNavigate}
              onOpenAuth={onOpenAuth}
              dealTitle="100% Brand Guarantee"
              dealDesc="Shop with confidence. Zero duplicate stock, factory-fresh packaging, and full manufacturer warranty."
              dealPrice="Genuine"
              dealOldPrice="Duplicates"
              dealDiscount="100% VERIFIED"
              dealActionText="Shop Verified Brands"
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
              <h2>Pure Brands, Zero Compromise</h2>
              <p>Give your family the best genuine nutrition and daily care with KharchDaan's trusted brand promise.</p>
            </div>
            <div className="bottom-cta-actions">
              <button 
                className="btn-cta-primary"
                onClick={() => onNavigate('products')}
              >
                <span>Browse Genuine Brands</span>
                <ArrowRight size={16} />
              </button>
              <button 
                className="btn-cta-secondary"
                onClick={onOpenAuth}
              >
                <span>Register Free Account</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
