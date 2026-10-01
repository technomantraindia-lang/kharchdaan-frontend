import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, ShoppingBag, Coins } from 'lucide-react';

export const Preloader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing KharchDaan Portal...');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Disable body scroll while preloader is active
    document.body.style.overflow = 'hidden';

    const intervals = [
      { threshold: 30, text: 'Connecting 100% Genuine Brands...' },
      { threshold: 65, text: 'Setting Up Instant Cashback Wallet...' },
      { threshold: 90, text: 'Loading Daily Needs & FMCG Catalog...' },
      { threshold: 100, text: 'Welcome to KharchDaan!' }
    ];

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 4; // smooth increments
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        setProgress(100);
        setStatusText('Welcome to KharchDaan!');

        // Start fade out after short delay
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsHidden(true);
            document.body.style.overflow = '';
            if (onLoaded) onLoaded();
          }, 600); // match transition duration
        }, 300);
      } else {
        setProgress(currentProgress);
        const match = intervals.find(i => currentProgress <= i.threshold);
        if (match) setStatusText(match.text);
      }
    }, 45);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onLoaded]);

  if (isHidden) return null;

  return (
    <div 
      className={`kharchdaan-preloader-overlay ${isFadingOut ? 'fade-out' : ''}`} 
      aria-label="Loading KharchDaan"
      role="status"
    >
      {/* Background Ambient Glows */}
      <div className="preloader-ambient-glow glow-1" />
      <div className="preloader-ambient-glow glow-2" />
      <div className="preloader-ambient-glow glow-3" />

      {/* Center Content Box */}
      <div className="preloader-center-card">
        
        {/* Animated Glowing Ring & Logo Container */}
        <div className="preloader-logo-wrap">
          {/* Rotating Pulse Aura Rings */}
          <div className="preloader-spin-ring ring-outer" />
          <div className="preloader-spin-ring ring-inner" />
          
          {/* Shimmering Logo Card */}
          <div className="preloader-logo-plate">
            <img 
              src="/images/kharchdaan-logo.png" 
              alt="KharchDaan Logo" 
              className="preloader-logo-img" 
            />
            <div className="preloader-logo-shimmer" />
          </div>

          {/* Floating Luxury Accent Badges */}
          <div className="preloader-orbit-badge badge-top">
            <Sparkles size={13} />
          </div>
          <div className="preloader-orbit-badge badge-bottom">
            <Coins size={13} />
          </div>
        </div>

        {/* Brand Tagline */}
        <div className="preloader-brand-tag">
          <span className="om-symbol">ॐ</span>
          <span className="motto-text">TERA TUJHKO ARPAN</span>
          <span className="dot-sep">•</span>
          <span className="sub-text">100% ETHICAL COMMERCE</span>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="preloader-progress-track">
          <div 
            className="preloader-progress-fill" 
            style={{ width: `${progress}%` }} 
          >
            <div className="progress-glow-head" />
          </div>
        </div>

        {/* Status Info Row */}
        <div className="preloader-status-row">
          <span className="preloader-status-msg">{statusText}</span>
          <span className="preloader-pct-badge">{progress}%</span>
        </div>

        {/* Quality Micro Badges */}
        <div className="preloader-badges-row">
          <div className="preloader-micro-badge">
            <ShieldCheck size={12} className="text-orange" />
            <span>Direct FMCG Brand Stock</span>
          </div>
          <div className="preloader-micro-badge">
            <Coins size={12} className="text-green" />
            <span>Instant Direct Cashback</span>
          </div>
        </div>

      </div>
    </div>
  );
};
