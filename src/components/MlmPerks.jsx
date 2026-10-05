import React from 'react';
import { Percent, Users, Wallet, ArrowRight, ShoppingBag, Sparkles, Check } from 'lucide-react';

export const MlmPerks = ({ onJoinClick }) => {
  const steps = [
    {
      icon: <ShoppingBag className="perk-step-icon" size={26} />,
      step: '01',
      title: '1. Shop Daily Essentials',
      desc: 'Order pure A2 Gir cow ghee, authentic spices, traditional roasted snacks, puja kits, and lifestyle goods at genuine market prices.'
    },
    {
      icon: <Percent className="perk-step-icon" size={26} />,
      step: '02',
      title: '2. Get Up to 100% Cashback',
      desc: 'Instant cashback credits directly to your KharchDaan wallet on every purchase, usable for future orders or direct bank cash withdrawal.'
    },
    {
      icon: <Users className="perk-step-icon" size={26} />,
      step: '03',
      title: '3. Earn 1:3 Network Royalties',
      desc: 'Refer 3 friends or families. Whenever they shop, earn recurring passive commission across 3 tiers deposited safely into your bank account.'
    }
  ];

  return (
    <section id="mlm-perks" className="mlm-perks-section">
      <div className="container">
        <div className="section-header text-center" style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="badge-desi-tag" style={{ marginBottom: '10px' }}>
            <Sparkles size={14} className="text-kesari" />
            <span>The KharchDaan Advantage</span>
          </div>
          <h2 className="section-title">
            How Our Up to 100% Cashback & 1:3 Referral Model Works
          </h2>
          <p className="section-description" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Traditional retailers keep all middleman margins. KharchDaan returns profits directly back to consumers as cashback and recurring network royalties!
          </p>
        </div>

        <div className="perks-grid">
          {steps.map((item, idx) => (
            <div key={idx} className="perk-card">
              <div className="perk-step-badge">{item.step}</div>
              <div className="perk-icon-wrapper">{item.icon}</div>
              <h3 className="perk-title">{item.title}</h3>
              <p className="perk-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="perks-cta-banner">
          <div className="cta-left">
            <h3>Ready to monetize your regular household expenses?</h3>
            <p>Join 25,000+ happy Indian families generating monthly passive income with KharchDaan.</p>
          </div>
          <button className="btn-cta-gold" onClick={onJoinClick}>
            <span>Create Free Account</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
