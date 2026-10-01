import React from 'react';
import { 
  Home, ChevronRight, Sparkles, Truck, ShieldCheck, 
  Coins, ArrowRight, ShoppingBag, CheckCircle2, Calendar, 
  Layers, Percent, Package, HelpCircle, Award, Star
} from 'lucide-react';
import { FmcgTopicSidebar } from './FmcgTopicSidebar';

export const MonthlyRationPage = ({ onNavigate, onOpenAuth, onShopClick }) => {
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
            <span className="breadcrumb-current">Monthly Ration Home Delivery</span>
          </div>

          <div className="topic-top-badge-row">
            <div className="topic-foundation-pill">
              <span className="pill-om-symbol">🚚</span>
              <span>SCHEDULED RECURRING DOORSTEP DELIVERY</span>
              <Sparkles size={13} className="text-orange" />
            </div>
          </div>

          <div className="topic-hero-header-box">
            <h1 className="topic-hero-title">
              Monthly Family Ration & Scheduled Doorstep Delivery
            </h1>

            <div className="topic-slogan-badge-wrap">
              <span className="slogan-quote-leaf">❧</span>
              <span className="topic-hero-slogan">
                Set It & Forget It • Custom Family Ration Planner • Free Doorstep Delivery Above ₹499 • Guaranteed On-Time
              </span>
              <span className="slogan-quote-leaf">❧</span>
            </div>

            <p className="topic-hero-description">
              Never run out of kitchen essentials again. Configure your customized monthly ration basket—Atta, Rice, Cooking Oil, Dals, Spices, and Cleaners—and have it delivered directly to your doorstep on your chosen date every single month with automated PV earnings.
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
                  src="/images/hiw-step2-shopping.jpg" 
                  alt="Monthly Ration Doorstep Delivery Service" 
                  className="topic-main-photo-img"
                />
                <div className="topic-photo-gradient-overlay" />
                <div className="topic-photo-badge">
                  <Truck size={16} className="text-gold" />
                  <span>On-Time Doorstep Delivery Across 150+ Cities</span>
                </div>
              </div>

              <div className="topic-content-body">
                
                <h2 className="topic-section-subheading">Hassle-Free Monthly Kitchen Provisioning</h2>
                <p className="topic-overview-text">
                  Carrying 10kg bags of flour, 5L cans of oil, heavy detergents, and bulky grocery bags from crowded wholesale markets or supermarkets is exhausting and time-consuming.
                </p>
                <p className="topic-overview-text">
                  With <strong>KharchDaan Monthly Ration Home Delivery</strong>, you streamline your entire household logistics. Choose your family's favorite brands, pick your preferred monthly delivery date (e.g. 1st or 5th of every month), and relax while our dedicated fulfillment fleet delivers tamper-sealed, fresh stock right to your kitchen with free delivery on orders above ₹499.
                </p>

                {/* 4 Feature Pillars Grid */}
                <div className="topic-features-grid">
                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box blue">
                      <Calendar size={22} />
                    </div>
                    <h4>Choose Your Delivery Date</h4>
                    <p>Align grocery arrival with your monthly salary date (1st to 10th). Modify or pause deliveries anytime with a single tap.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box green">
                      <Truck size={22} />
                    </div>
                    <h4>Free Priority Home Delivery</h4>
                    <p>Enjoy 100% free doorstep delivery on all monthly ration baskets above ₹499 with slot notifications and live tracking.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box orange">
                      <Percent size={22} />
                    </div>
                    <h4>Maximum Bundle Savings</h4>
                    <p>Save up to 25% compared to local retail MRP on pre-curated family combos with extra bonus Point Volume (PV) multipliers.</p>
                  </div>

                  <div className="topic-feature-item">
                    <div className="topic-feat-icon-box gold">
                      <Coins size={22} />
                    </div>
                    <h4>Automated Matrix Commission</h4>
                    <p>When your downline members subscribe to monthly ration deliveries, your 20-level monthly earnings become 100% predictable and recurring!</p>
                  </div>
                </div>

                {/* Popular Ration Bundle Plans */}
                <h3 className="topic-mid-title">Recommended Monthly Ration Packages</h3>
                
                <div className="topic-staples-showcase-grid">
                  <div className="staple-card">
                    <img src="/images/aashirvaad-atta.jpg" alt="Small Family Basket" />
                    <div className="staple-card-content">
                      <h5>Small Family Basket (2-3 Members)</h5>
                      <span>5kg Aashirvaad Atta, 2L Fortune Oil, 3kg Rice & Dals + 150 PV</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/fortune-oil.jpg" alt="Standard Family Hamper" />
                    <div className="staple-card-content">
                      <h5>Standard Family Kit (4-5 Members)</h5>
                      <span>10kg Atta, 5L Oil, 5kg Basmati Rice, Spices, Tea & Cleaners + 300 PV</span>
                    </div>
                  </div>

                  <div className="staple-card">
                    <img src="/images/surf-excel.jpg" alt="Deluxe Joint Family Mega Pack" />
                    <div className="staple-card-content">
                      <h5>Mega Joint Family Pack (6+ Members)</h5>
                      <span>20kg Atta, 10L Oil, 10kg Rice, Full Kitchen & Laundry + 600 PV</span>
                    </div>
                  </div>
                </div>

                {/* Table Breakdown */}
                <h3 className="topic-table-title">Family Size Ration Sizing & PV Multiplier Guide</h3>
                <div className="topic-breakdown-table-wrap">
                  <table className="topic-breakdown-table">
                    <thead>
                      <tr>
                        <th>Family Type</th>
                        <th>Recommended Items</th>
                        <th>Monthly Cost</th>
                        <th>Savings</th>
                        <th>Monthly Matrix PV</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Couples / Small Family</strong></td>
                        <td>Atta 5kg, Oil 2L, Dals, Rice, Tea</td>
                        <td>₹1,199</td>
                        <td><span className="badge-split">20% OFF</span></td>
                        <td><strong className="text-orange">150 PV / mo</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Standard Family (4 Members)</strong></td>
                        <td>Atta 10kg, Oil 5L, Basmati, Spices, Detergents</td>
                        <td>₹1,999</td>
                        <td><span className="badge-split">24% OFF</span></td>
                        <td><strong className="text-orange">300 PV / mo</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Joint Family (6+ Members)</strong></td>
                        <td>Atta 20kg, Oil 10L, Bulk Grains, Cleaning Kit</td>
                        <td>₹3,499</td>
                        <td><span className="badge-split">28% OFF</span></td>
                        <td><strong className="text-orange">600 PV / mo</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip Box */}
                <div className="topic-pro-tip-box">
                  <Sparkles size={22} className="text-orange" />
                  <div>
                    <strong>Subscription Automation</strong>
                    <p>Encourage your referred network members to enable monthly subscription delivery. This creates an unstoppable, compounding monthly passive paycheck for your family 365 days a year!</p>
                  </div>
                </div>

                {/* Action CTA Row */}
                <div className="topic-article-cta-row">
                  <button className="btn-primary btn-large" onClick={() => onNavigate('products', 'Grocery')}>
                    <ShoppingBag size={18} />
                    <span>Build Monthly Ration Basket</span>
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
                        <strong>Can I customize the specific items inside my monthly ration hamper?</strong>
                      </div>
                      <p className="faq-answer">
                        Yes, 100%! You can add, remove, or swap any brand or quantity of Atta, Rice, Oils, Spices, or personal care items whenever you want.
                      </p>
                    </div>

                    <div className="faq-item">
                      <div className="faq-question">
                        <HelpCircle size={16} className="text-orange" />
                        <strong>Is there any contract or mandatory cancellation fee?</strong>
                      </div>
                      <p className="faq-answer">
                        Zero contracts! You can skip a month, reschedule, or cancel anytime directly inside your account settings with no penalties.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Side Action Panel */}
            <FmcgTopicSidebar 
              currentTopicId="monthly-ration-delivery"
              onNavigate={onNavigate}
              onOpenAuth={onOpenAuth}
              dealTitle="Monthly Auto-Delivery Hamper"
              dealDesc="Lock in guaranteed monthly delivery with ₹450 flat discount and 250 bonus PV every month."
              dealPrice="₹1,799"
              dealOldPrice="₹2,350"
              dealDiscount="24% OFF"
              dealActionText="Build Monthly Ration"
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
              <h2>Automate Your Kitchen, Multiply Your Income</h2>
              <p>Set up your monthly ration delivery once and enjoy regular savings and commissions effortlessly.</p>
            </div>
            <div className="bottom-cta-actions">
              <button 
                className="btn-cta-primary"
                onClick={() => onNavigate('products', 'Grocery')}
              >
                <span>Build Monthly Ration</span>
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
