import React from 'react';
import { Star, ShieldCheck, Heart, Sparkles, MapPin, Quote } from 'lucide-react';

export const GujaratiTestimonials = () => {
  const testimonials = [
    {
      name: 'Rameshbhai Patel',
      area: 'Naroda, Ahmedabad',
      stars: 5,
      role: 'Silver Member',
      earned: '₹14,800',
      quote: '“I ordered Pure A2 Gir Cow Vedic Ghee and Unjha Cumin for my household. The quality is outstanding! Plus ₹750 instant cashback was credited right away into my wallet. Now our entire family groceries are ordered on KharchDaan.”'
    },
    {
      name: 'Bhavnaben Shah',
      area: 'Adajan, Surat',
      stars: 5,
      role: 'Gold Leader',
      earned: '₹38,500',
      quote: '“The 1:3 Network plan is completely genuine and transparent. I introduced 3 friends from our society, and today I receive over ₹18,500 monthly royalty straight into my bank account. A wonderful opportunity for homemakers to become self-reliant!”'
    },
    {
      name: 'Jigneshbhai Mehta',
      area: 'Kalawad Road, Rajkot',
      stars: 5,
      role: 'Platinum Partner',
      earned: '₹52,000',
      quote: '“Rajkot special strong Hing, roasted Khakhra box, and the complete Kashi Puja kit are all supreme quality. The prices are better than the open market and the 100% cashback combined with network royalties has turned our household expenses into a real asset.”'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header text-center" style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="badge-desi-tag" style={{ marginBottom: '10px' }}>
            <Heart size={14} className="text-kesari" />
            <span>Customer Stories & Trust</span>
          </div>
          <h2 className="section-title">
            Loved by 25,000+ Smart Shoppers
          </h2>
          <p className="section-description" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Real reviews from verified members across India transforming regular household expenses into lifetime cashback and recurring royalty earnings.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <div>
                <div className="test-stars">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="test-quote">{item.quote}</p>
              </div>

              <div className="test-author">
                <div className="author-avatar">
                  {item.name[0]}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h4 className="author-name">{item.name}</h4>
                    <span className="badge-cashback-gold">{item.role}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                    <MapPin size={12} className="text-kesari" />
                    <span className="author-city">{item.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Swadeshi Trust Banner */}
        <div style={{
          marginTop: '40px',
          background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
          border: '1.5px solid #fed7aa',
          borderRadius: '18px',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '16px',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>🇮🇳</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 800, color: '#0c0a09', fontSize: '13px' }}>
                100% Pure Swadeshi Products
              </div>
              <div style={{ fontSize: '11px', color: '#78716c' }}>
                Supporting verified local farmers and artisans
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>⚡</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 800, color: '#0c0a09', fontSize: '13px' }}>
                Fast & Secure Dispatch
              </div>
              <div style={{ fontSize: '11px', color: '#78716c' }}>
                Carefully packaged tamper-proof delivery
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>🤝</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 800, color: '#0c0a09', fontSize: '13px' }}>
                1:3 Transparent MLM System
              </div>
              <div style={{ fontSize: '11px', color: '#78716c' }}>
                Direct bank settlement with instant ledger proof
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
