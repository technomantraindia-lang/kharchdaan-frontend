import React, { useState, useEffect } from 'react';
import { User, ArrowRight, Sparkles, Award, ShieldCheck, TrendingUp, CheckCircle2, ChevronRight, ChevronLeft, Star } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    tag: "Verified Impact",
    rating: 5,
    text: "Supporting families, local businesses and new opportunities together across India.",
    author: "Local Retail & Kirana Partners",
    sub: "KharchDaan Merchant Network"
  },
  {
    id: 2,
    tag: "Top Leader",
    rating: 5,
    text: "With just 3 direct referrals, our community expanded to Level 12 in 3 months with daily wallet income!",
    author: "Pooja & Rajesh Sharma",
    sub: "Diamond Network Leader, Surat"
  },
  {
    id: 3,
    tag: "Verified Shopper",
    rating: 5,
    text: "Getting 100% cashback benefits on daily groceries like Fortune Oil and Aashirvaad Atta is real savings every month.",
    author: "Anita Verma • Homemaker",
    sub: "Active Community Member, Jaipur"
  }
];

export const NetworkStructureSection = ({ onOpenDetailsModal }) => {
  const [activeNode, setActiveNode] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically slide every 4 seconds smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevComment = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNextComment = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
  };

  const currentComment = testimonialsData[currentSlide];

  return (
    <section id="network-structure" className="network-structure-section-exact">
      <div className="container">
        {/* Section Header */}
        <div className="network-section-header-box">
          <div className="network-badge-pill">
            <Sparkles size={14} className="text-orange-icon" />
            <span>TRANSPARENT COMPENSATION MODEL</span>
          </div>

          <div className="section-ornament-header">
            <span className="ornament-leaf">❧</span>
            <h2 className="section-title-exact">Network Structure & Rewards</h2>
            <span className="ornament-leaf">❧</span>
          </div>

          <p className="network-subtitle-text">
            Explore how our 1:3 placement matrix and 20-level distribution system create long-term financial security for Indian families.
          </p>
        </div>

        {/* 3 Interactive Feature Cards */}
        <div className="network-cards-grid-3">
          {/* Card 1: Direct Selling Network (Solid Orange 1:3 Tree Card) */}
          <div className="network-card-solid-orange">
            {/* Top Badge */}
            <div className="network-card-top-row">
              <span className="card-top-tag orange-tag">1:3 PLACEMENT MATRIX</span>
              <span className="tag-pill-glass">Instant Spillover</span>
            </div>

            <div className="orange-card-header">
              <h3 className="orange-card-title">Direct Selling Network</h3>
              <p className="orange-card-subtitle">
                Simple 1:3 power structure where each member introduces 3 active direct partners.
              </p>
            </div>

            {/* Tree Diagram Visual */}
            <div className="tree-diagram-wrapper">
              {/* Root Node: YOU */}
              <div 
                className={`tree-node-root ${activeNode === 'root' ? 'active-tree-node' : ''}`}
                onMouseEnter={() => setActiveNode('root')}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="tree-avatar-circle root">
                  <User size={22} />
                  <span className="avatar-crown-badge">★</span>
                </div>
                <span className="tree-node-label root">You (Level 0)</span>
              </div>

              {/* Connecting Branch Lines */}
              <div className="tree-branch-lines">
                <div className="branch-line-vertical" />
                <div className="branch-line-horizontal" />
                <div className="branch-drops">
                  <span className="drop drop-left" />
                  <span className="drop drop-mid" />
                  <span className="drop drop-right" />
                </div>
              </div>

              {/* 3 Child Nodes: Left, Middle, Right */}
              <div className="tree-children-row">
                <div 
                  className={`tree-child-node ${activeNode === 'left' ? 'active-tree-node' : ''}`}
                  onMouseEnter={() => setActiveNode('left')}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="tree-avatar-circle child">
                    <User size={16} />
                  </div>
                  <span className="tree-node-label child">
                    <strong>Left</strong><br />Member 1
                  </span>
                </div>

                <div 
                  className={`tree-child-node ${activeNode === 'mid' ? 'active-tree-node' : ''}`}
                  onMouseEnter={() => setActiveNode('mid')}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="tree-avatar-circle child">
                    <User size={16} />
                  </div>
                  <span className="tree-node-label child">
                    <strong>Middle</strong><br />Member 2
                  </span>
                </div>

                <div 
                  className={`tree-child-node ${activeNode === 'right' ? 'active-tree-node' : ''}`}
                  onMouseEnter={() => setActiveNode('right')}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="tree-avatar-circle child">
                    <User size={16} />
                  </div>
                  <span className="tree-node-label child">
                    <strong>Right</strong><br />Member 3
                  </span>
                </div>
              </div>
            </div>

            {/* Value Highlights Pill */}
            <div className="card-value-pill-orange">
              <CheckCircle2 size={14} />
              <span>3 Directs Qualify You for Full Multi-Level Benefits</span>
            </div>

            {/* Learn More Button */}
            <div className="orange-card-footer-btn-wrapper">
              <button className="btn-learn-more-orange-card" onClick={onOpenDetailsModal}>
                <span>Learn Compensation Plan</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Bottom Mandala Lace Pattern Overlay */}
            <div className="orange-card-bottom-lace" />
          </div>

          {/* Card 2: 20-Level Structure */}
          <div className="network-card-white">
            {/* Top Badge */}
            <div className="network-card-top-row">
              <span className="card-top-tag white-tag">20-LEVEL DISTRIBUTION</span>
              <span className="tag-pill-green">Passive Income</span>
            </div>

            <div className="white-card-header">
              <h3 className="white-card-title">20-Level Structure</h3>
              <p className="white-card-subtitle">
                Your monthly household purchases support up to 20 levels in the network through automated cashback distribution.
              </p>
            </div>

            {/* 20-Level Horizontal Chain Visual */}
            <div className="levels-chain-wrapper">
              <div className="level-step-item highlight-user">
                <div className="level-avatar">
                  <User size={14} />
                </div>
                <span className="level-name">L0 (You)</span>
              </div>

              <div className="level-chain-arrow">➔</div>

              <div className="level-step-item">
                <div className="level-avatar">
                  <User size={14} />
                </div>
                <span className="level-name">Level 1</span>
              </div>

              <div className="level-chain-arrow">➔</div>

              <div className="level-step-item">
                <div className="level-avatar">
                  <User size={14} />
                </div>
                <span className="level-name">Level 2</span>
              </div>

              <div className="level-chain-arrow">➔</div>

              <div className="level-step-item">
                <div className="level-avatar">
                  <User size={14} />
                </div>
                <span className="level-name">Level 3</span>
              </div>

              <div className="level-chain-dots">•••</div>

              <div className="level-step-item highlight-end">
                <div className="level-avatar">
                  <Award size={14} />
                </div>
                <span className="level-name">Level 19</span>
              </div>
            </div>

            {/* Level Metrics Row */}
            <div className="level-metrics-grid">
              <div className="metric-chip">
                <span className="metric-label">Depth</span>
                <span className="metric-val">20 Levels</span>
              </div>
              <div className="metric-chip">
                <span className="metric-label">Payouts</span>
                <span className="metric-val">Real-Time</span>
              </div>
              <div className="metric-chip">
                <span className="metric-label">Payout Type</span>
                <span className="metric-val">Direct Wallet</span>
              </div>
            </div>

            {/* Card Action Button */}
            <div className="white-card-footer">
              <button 
                className="btn-view-details-outline" 
                onClick={onOpenDetailsModal}
              >
                <span>View Full 20-Level Breakdown</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Card 3: Supporting Families & Local Businesses with Retail Woman Image & Smooth Testimonial Carousel */}
          <div className="network-card-retail-photo">
            <img
              src="/images/retail-woman.jpg"
              alt="Supporting families, local businesses and new opportunities"
              className="retail-bg-photo"
            />
            {/* Top Floating Badge */}
            <div className="retail-card-top-badge">
              <span className="impact-badge-pill">COMMUNITY EMPOWERMENT</span>
            </div>

            {/* Bottom Positioned Interactive Comment Slider Card */}
            <div className="retail-quote-overlay-card">
              {/* Card Header: Quote icon, rating stars, tag badge & mini arrow controls */}
              <div className="quote-header-row">
                <div className="quote-header-left">
                  <span className="quote-icon-top">❝</span>
                  <div className="quote-rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="quote-star-filled" fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                </div>

                <div className="quote-header-right">
                  <span className="verified-impact-tag">
                    <ShieldCheck size={12} />
                    <span>{testimonialsData[currentSlide].tag}</span>
                  </span>

                  <div className="quote-mini-nav-btns">
                    <button 
                      type="button"
                      className="quote-nav-btn prev"
                      onClick={handlePrevComment}
                      aria-label="Previous comment"
                      title="Previous testimonial"
                    >
                      <ChevronLeft size={13} />
                    </button>
                    <span className="quote-counter-indicator">
                      {currentSlide + 1}/{testimonialsData.length}
                    </span>
                    <button 
                      type="button"
                      className="quote-nav-btn next"
                      onClick={handleNextComment}
                      aria-label="Next comment"
                      title="Next testimonial"
                    >
                      <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Smooth Horizontal Carousel Track for Comment Text & Author Info */}
              <div className="quote-slider-viewport">
                <div 
                  className="quote-slider-track"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonialsData.map((item) => (
                    <div key={item.id} className="quote-slide-item">
                      <p className="quote-text-body">
                        {item.text}
                      </p>
                      <div className="quote-author-info">
                        <span className="author-title">{item.author}</span>
                        <span className="author-sub">{item.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Anchored Bottom Right Dots & Quote Icon */}
              <div className="quote-bottom-right-controls">
                <div className="quote-dots-pills">
                  {testimonialsData.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`quote-dot-pill ${idx === currentSlide ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(idx);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="quote-icon-bottom">❞</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Strip */}
        <div className="network-bottom-features-bar">
          <div className="network-feat-col">
            <div className="feat-icon-round"><TrendingUp size={18} /></div>
            <div className="feat-text-block">
              <strong>Automated Spillover</strong>
              <span>New members automatically fill lower levels in your team</span>
            </div>
          </div>

          <div className="network-feat-sep" />

          <div className="network-feat-col">
            <div className="feat-icon-round"><Award size={18} /></div>
            <div className="feat-text-block">
              <strong>Zero Risk, Pure Savings</strong>
              <span>No mandatory kits or deposits; only real FMCG grocery savings</span>
            </div>
          </div>

          <div className="network-feat-sep" />

          <div className="network-feat-col">
            <div className="feat-icon-round"><ShieldCheck size={18} /></div>
            <div className="feat-text-block">
              <strong>100% Genuine Brands</strong>
              <span>Aashirvaad, Fortune, Surf Excel, Tata Tea & Top FMCG brands</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
