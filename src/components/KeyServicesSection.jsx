import React from 'react';
import { ShoppingBag, Users, Coins, Settings, ArrowRight } from 'lucide-react';

export const KeyServicesSection = ({ onRegisterClick }) => {
  const services = [
    {
      icon: <ShoppingBag size={24} />,
      title: 'Direct Selling',
      desc: 'Join, connect and build your network.'
    },
    {
      icon: <Users size={24} />,
      title: 'Member Network',
      desc: 'Manage your connections and track your progress.'
    },
    {
      icon: <Coins size={24} />,
      title: '100% Cashback',
      desc: 'Get eligible cashback on your purchases.'
    },
    {
      icon: <Settings size={24} />,
      title: 'Easy Management',
      desc: 'All your activities in one place.'
    }
  ];

  return (
    <section id="services" className="key-services-section-exact">
      <div className="container">
        {/* Section Header with Floral Ornament */}
        <div className="section-ornament-header">
          <span className="ornament-leaf">❧</span>
          <h2 className="section-title-exact">Our Key Services</h2>
          <span className="ornament-leaf">❧</span>
        </div>

        <div className="services-layout-grid">
          {/* Left Grid of 4 Service Cards */}
          <div className="services-4-cards-grid">
            {services.map((item, idx) => (
              <div key={idx} className="service-card-item">
                <div className="service-icon-wrapper">
                  {item.icon}
                </div>
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Banner Card: Join KharchDaan Today */}
          <div className="join-today-card-exact">
            <div className="join-card-content">
              <h3 className="join-card-title">Join KharchDaan Today</h3>
              <p className="join-card-desc">
                Take the first step towards a stronger community, smarter spending and new opportunities.
              </p>
              <button className="btn-register-now-solid" onClick={onRegisterClick}>
                <span>Register Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
