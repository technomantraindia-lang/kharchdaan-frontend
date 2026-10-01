import React from 'react';

// Custom rich SVGs matching the exact style of the mockup illustrations with high fidelity and gradients

export const Step1Illustration = () => (
  <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="step1-bg" x1="0" y1="0" x2="84" y2="84" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF7ED" />
        <stop offset="100%" stopColor="#FFEDD5" />
      </linearGradient>
      <linearGradient id="step1-primary" x1="20" y1="20" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF7700" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <filter id="step1-shadow" x="8" y="8" width="68" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#EA580C" floodOpacity="0.15" />
      </filter>
    </defs>
    {/* Base Circle */}
    <circle cx="42" cy="42" r="38" fill="url(#step1-bg)" stroke="#FED7AA" strokeWidth="1.5" />
    <circle cx="42" cy="42" r="33" stroke="#FDBA74" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
    
    {/* User Avatar & Digital ID Device */}
    <g filter="url(#step1-shadow)">
      {/* Avatar Head */}
      <circle cx="42" cy="28" r="10" fill="url(#step1-primary)" />
      <path d="M33 26C33 20 37 18 42 18C47 18 51 20 51 26V29C51 31 48 32 45 32H39C36 32 33 31 33 29V26Z" fill="#0F172A" />
      {/* Avatar Body */}
      <path d="M26 56C26 46 33 42 42 42C51 42 58 46 58 56H26Z" fill="url(#step1-primary)" />
      {/* Tablet / Phone Screen */}
      <rect x="34" y="46" width="22" height="26" rx="4" fill="#0F172A" stroke="#EA580C" strokeWidth="1.5" />
      <rect x="37" y="49" width="16" height="17" rx="2" fill="#FFFFFF" />
      {/* Verified Checkmark */}
      <circle cx="45" cy="57.5" r="5" fill="#10B981" />
      <path d="M43 57.5L44.5 59L47.5 56" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    {/* Sparkle Star */}
    <path d="M62 20L63.5 24.5L68 26L63.5 27.5L62 32L60.5 27.5L56 26L60.5 24.5L62 20Z" fill="#F59E0B" />
  </svg>
);

export const Step2Illustration = () => (
  <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="step2-bg" x1="0" y1="0" x2="84" y2="84" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF7ED" />
        <stop offset="100%" stopColor="#FFEDD5" />
      </linearGradient>
      <linearGradient id="step2-cart" x1="20" y1="20" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF7700" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <filter id="step2-shadow" x="8" y="8" width="68" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#EA580C" floodOpacity="0.15" />
      </filter>
    </defs>
    {/* Base Circle */}
    <circle cx="42" cy="42" r="38" fill="url(#step2-bg)" stroke="#FED7AA" strokeWidth="1.5" />
    <circle cx="42" cy="42" r="33" stroke="#FDBA74" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

    {/* Groceries & Shopping Cart */}
    <g filter="url(#step2-shadow)">
      {/* Groceries inside Cart */}
      <rect x="33" y="24" width="10" height="15" rx="2" fill="#F59E0B" /> {/* Pack */}
      <path d="M45 23C45 19 48 17 51 17C54 17 57 19 57 23V34H45V23Z" fill="#16A34A" /> {/* Fresh Green bottle */}
      <circle cx="38" cy="27" r="5" fill="#EF4444" /> {/* Apple */}
      <circle cx="48" cy="29" r="4.5" fill="#F97316" /> {/* Orange */}
      
      {/* Modern Wire Shopping Cart */}
      <path d="M22 28H28L33 50H58L62 33H31" stroke="url(#step2-cart)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="37" y1="33" x2="39" y2="50" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="45" y1="33" x2="47" y2="50" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="53" y1="33" x2="54" y2="50" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Cart Wheels */}
      <circle cx="37" cy="58" r="4" fill="#0F172A" />
      <circle cx="37" cy="58" r="1.5" fill="#FFFFFF" />
      <circle cx="54" cy="58" r="4" fill="#0F172A" />
      <circle cx="54" cy="58" r="1.5" fill="#FFFFFF" />
    </g>
    {/* Discount Badge */}
    <rect x="52" y="16" width="18" height="11" rx="3" fill="#DC2626" />
    <text x="61" y="24.5" fontSize="7.5" fontWeight="800" fill="#FFFFFF" textAnchor="middle">% OFF</text>
  </svg>
);

export const Step3Illustration = () => (
  <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="step3-bg" x1="0" y1="0" x2="84" y2="84" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF7ED" />
        <stop offset="100%" stopColor="#FFEDD5" />
      </linearGradient>
      <linearGradient id="step3-primary" x1="20" y1="20" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF7700" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <filter id="step3-shadow" x="8" y="8" width="68" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#EA580C" floodOpacity="0.15" />
      </filter>
    </defs>
    {/* Base Circle */}
    <circle cx="42" cy="42" r="38" fill="url(#step3-bg)" stroke="#FED7AA" strokeWidth="1.5" />
    <circle cx="42" cy="42" r="33" stroke="#FDBA74" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

    {/* Network Triangle with Golden Connection Lines */}
    <g filter="url(#step3-shadow)">
      <line x1="42" y1="28" x2="28" y2="52" stroke="#EA580C" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="42" y1="28" x2="56" y2="52" stroke="#EA580C" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="28" y1="52" x2="56" y2="52" stroke="#EA580C" strokeWidth="2" strokeDasharray="3 3" />
      
      {/* Central Connect Hub */}
      <circle cx="42" cy="42" r="3" fill="#F59E0B" />

      {/* Top Leader Node */}
      <circle cx="42" cy="24" r="9" fill="url(#step3-primary)" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M33 38C33 34 37 31 42 31C47 31 51 34 51 38H33Z" fill="url(#step3-primary)" />
      {/* Left Node */}
      <circle cx="27" cy="50" r="7" fill="#0F172A" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M20 62C20 57 23 55 27 55C31 55 34 57 34 62H20Z" fill="#0F172A" />
      {/* Right Node */}
      <circle cx="57" cy="50" r="7" fill="#0F172A" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M50 62C50 57 53 55 57 55C61 55 64 57 64 62H50Z" fill="#0F172A" />
    </g>
    {/* Growth Aura */}
    <circle cx="42" cy="24" r="13" stroke="#EA580C" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
  </svg>
);

export const Step4Illustration = () => (
  <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="step4-bg" x1="0" y1="0" x2="84" y2="84" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF7ED" />
        <stop offset="100%" stopColor="#FFEDD5" />
      </linearGradient>
      <linearGradient id="gold-coin-top" x1="20" y1="20" x2="60" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
      <filter id="step4-shadow" x="8" y="8" width="68" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#D97706" floodOpacity="0.2" />
      </filter>
    </defs>
    {/* Base Circle */}
    <circle cx="42" cy="42" r="38" fill="url(#step4-bg)" stroke="#FED7AA" strokeWidth="1.5" />
    <circle cx="42" cy="42" r="33" stroke="#FDBA74" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

    {/* Stack of 3D Golden Rupee Coins */}
    <g filter="url(#step4-shadow)">
      {/* Coin 1 (Bottom) */}
      <path d="M22 54C22 49 31 46 42 46C53 46 62 49 62 54V60C62 65 53 68 42 68C31 68 22 65 22 60V54Z" fill="#B45309" />
      <ellipse cx="42" cy="54" rx="20" ry="6.5" fill="#D97706" />

      {/* Coin 2 (Middle) */}
      <path d="M22 43C22 38 31 35 42 35C53 35 62 38 62 43V49C62 54 53 57 42 57C31 57 22 54 22 49V43Z" fill="#D97706" />
      <ellipse cx="42" cy="43" rx="20" ry="6.5" fill="#F59E0B" />

      {/* Coin 3 (Top) */}
      <path d="M22 32C22 27 31 24 42 24C53 24 62 27 62 32V38C62 43 53 46 42 46C31 46 22 43 22 38V32Z" fill="#F59E0B" />
      <ellipse cx="42" cy="32" rx="20" ry="6.5" fill="url(#gold-coin-top)" stroke="#FDE047" strokeWidth="1" />
      
      {/* Inner Rim & Rupee Symbol */}
      <ellipse cx="42" cy="32" rx="16" ry="4.8" stroke="#D97706" strokeWidth="1" strokeDasharray="2 2" fill="none" />
      <text x="42" y="36.5" fontSize="13" fontWeight="900" fill="#92400E" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif">₹</text>
    </g>

    {/* Glowing Cashback Stars */}
    <path d="M24 22L25 25L28 26L25 27L24 30L23 27L20 26L23 25L24 22Z" fill="#F59E0B" />
    <path d="M62 20L63 23L66 24L63 25L62 28L61 25L58 24L61 23L62 20Z" fill="#10B981" />
  </svg>
);

export const Step5Illustration = () => (
  <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="step5-bg" x1="0" y1="0" x2="84" y2="84" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF7ED" />
        <stop offset="100%" stopColor="#FFEDD5" />
      </linearGradient>
      <linearGradient id="step5-growth" x1="20" y1="20" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF7700" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <filter id="step5-shadow" x="8" y="8" width="68" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#EA580C" floodOpacity="0.15" />
      </filter>
    </defs>
    {/* Base Circle */}
    <circle cx="42" cy="42" r="38" fill="url(#step5-bg)" stroke="#FED7AA" strokeWidth="1.5" />
    <circle cx="42" cy="42" r="33" stroke="#FDBA74" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

    {/* Financial Growth Bars with Rising Arrow */}
    <g filter="url(#step5-shadow)">
      {/* 4 Ascending Pillar Bars */}
      <rect x="22" y="48" width="8" height="15" rx="2" fill="#FED7AA" />
      <rect x="33" y="39" width="8" height="24" rx="2" fill="#FDBA74" />
      <rect x="44" y="30" width="8" height="33" rx="2" fill="#FB923C" />
      <rect x="55" y="21" width="8" height="42" rx="2" fill="url(#step5-growth)" />

      {/* Dynamic Rising Growth Trend Line */}
      <path d="M22 43L37 32L48 24L61 14" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 14H61V23" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Shining Star on Top */}
      <circle cx="61" cy="14" r="3.5" fill="#F59E0B" />
    </g>
  </svg>
);

// Temple Heritage Line Art for Footer & Branding
export const TempleHeritageIllustration = () => (
  <div className="temple-heritage-wrapper">
    <svg width="140" height="90" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central Grand Shikhara */}
      <path d="M70 6L73 14H67L70 6Z" fill="#D97706" />
      <path d="M70 2L70 6" stroke="#D97706" strokeWidth="1.5" />
      <path d="M70 2L75 4L70 6" fill="#EA580C" /> {/* Kalash Flag */}
      <path d="M64 14C64 22 66 38 58 48H82C74 38 76 22 76 14H64Z" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.2" />
      <path d="M60 48H80V64H60V48Z" fill="#FFF7ED" stroke="#EA580C" strokeWidth="1.2" />
      <path d="M66 54C66 51 68 49 70 49C72 49 74 51 74 54V64H66V54Z" fill="#EA580C" />

      {/* Left Shikhara */}
      <path d="M46 18L48 24H44L46 18Z" fill="#D97706" />
      <path d="M46 15L46 18" stroke="#D97706" strokeWidth="1.2" />
      <path d="M46 15L50 16.5L46 18" fill="#EA580C" />
      <path d="M42 24C42 30 43 42 36 50H56C49 42 50 30 50 24H42Z" fill="#FFEDD5" stroke="#EA580C" strokeWidth="1" />
      <path d="M38 50H54V64H38V50Z" fill="#FFF7ED" stroke="#EA580C" strokeWidth="1" />
      <path d="M43 56C43 53.5 44.5 52 46 52C47.5 52 49 53.5 49 56V64H43V56Z" fill="#EA580C" />

      {/* Right Shikhara */}
      <path d="M94 18L96 24H92L94 18Z" fill="#D97706" />
      <path d="M94 15L94 18" stroke="#D97706" strokeWidth="1.2" />
      <path d="M94 15L98 16.5L94 18" fill="#EA580C" />
      <path d="M90 24C90 30 91 42 84 50H104C97 42 98 30 98 24H90Z" fill="#FFEDD5" stroke="#EA580C" strokeWidth="1" />
      <path d="M86 50H102V64H86V50Z" fill="#FFF7ED" stroke="#EA580C" strokeWidth="1" />
      <path d="M91 56C91 53.5 92.5 52 94 52C95.5 52 97 53.5 97 56V64H91V56Z" fill="#EA580C" />

      {/* Outer Pillars & Base Plinth */}
      <rect x="22" y="56" width="96" height="8" rx="1" fill="#FED7AA" stroke="#EA580C" strokeWidth="1" />
      <rect x="16" y="64" width="108" height="6" rx="1" fill="#FDBA74" stroke="#EA580C" strokeWidth="1" />
      <rect x="10" y="70" width="120" height="6" rx="1" fill="#FB923C" stroke="#EA580C" strokeWidth="1" />
      
      {/* Decorative Mandala Sun Rays Behind Temple */}
      <circle cx="70" cy="40" r="30" stroke="#FDBA74" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.6" />
    </svg>
    <div className="temple-caption-text">Tera Tujhko Arpan</div>
  </div>
);

export const IndianCornerFiligree = ({ position = 'top-right' }) => (
  <svg 
    className={`mandala-corner-filigree ${position}`}
    width="160" 
    height="160" 
    viewBox="0 0 160 160" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M160 0C160 88.3656 88.3656 160 0 160V144C79.5289 144 144 79.5289 144 0H160Z" fill="#FDBA74" fillOpacity="0.4" />
    <path d="M160 0C160 66.2742 106.274 120 40 120V106C98.5412 106 146 58.5412 146 0H160Z" fill="#EA580c" fillOpacity="0.25" />
    <circle cx="160" cy="0" r="35" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.5" />
    <circle cx="160" cy="0" r="70" stroke="#EA580C" strokeWidth="1.5" strokeOpacity="0.35" />
    <circle cx="160" cy="0" r="105" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.4" />
  </svg>
);
