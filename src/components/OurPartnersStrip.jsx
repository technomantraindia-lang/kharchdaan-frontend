import React from 'react';
import { Store, ShoppingBag, Wrench, HeartPulse, Plane, GraduationCap, Sparkles, ShieldCheck } from 'lucide-react';

export const OurPartnersStrip = () => {
  const partners = [
    { id: 1, name: 'Local Kirana', icon: <Store size={15} />, badge: '5,000+' },
    { id: 2, name: 'Supermarkets', icon: <ShoppingBag size={15} />, badge: 'Verified' },
    { id: 3, name: 'Home Services', icon: <Wrench size={15} />, badge: 'Fast' },
    { id: 4, name: 'Healthcare', icon: <HeartPulse size={15} />, badge: 'Safe' },
    { id: 5, name: 'Travel & Stays', icon: <Plane size={15} />, badge: 'Discounts' },
    { id: 6, name: 'Education', icon: <GraduationCap size={15} />, badge: 'Certified' },
    { id: 7, name: '100+ Categories', icon: <Sparkles size={15} />, badge: 'Pan-India' }
  ];

  return (
    <section className="our-partners-strip-section">
      <div className="container">
        <div className="partners-strip-wrapper-master">
          {/* Left Title Badge */}
          <div className="partners-badge-pill-master">
            <ShieldCheck size={16} className="text-orange" />
            <span>Our Trusted Partners</span>
          </div>

          {/* Partner Chips Track */}
          <div className="partners-list-items-master">
            {partners.map((p) => (
              <div key={p.id} className="partner-item-chip-master">
                <span className="partner-chip-icon-master">{p.icon}</span>
                <span className="partner-chip-label-master">{p.name}</span>
                <span className="partner-mini-badge">{p.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

