import React from 'react';

// 1. Grocery & Staples (Golden Wheat & Grain Sack)
export const WheatStaplesSvg = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M7 21C7 16 10 12 17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 21C12 18 14 15 19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M17 9C17 6.5 15.5 4 13 4C13 6.5 14.5 9 17 9Z" fill="#FDBA74" stroke="currentColor" strokeWidth="1.5" />
    <path d="M19 13C19 10.5 17.5 8 15 8C15 10.5 16.5 13 19 13Z" fill="#FDBA74" stroke="currentColor" strokeWidth="1.5" />
    <path d="M21 17C21 14.5 19.5 12 17 12C17 14.5 18.5 17 21 17Z" fill="#FDBA74" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 21H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 2. Food & Beverages (Steaming Cup with Tea Leaves)
export const FoodBeverageSvg = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M3 8H17V15C17 17.2091 15.2091 19 13 19H7C4.79086 19 3 17.2091 3 15V8Z" fill="#FEF3C7" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M17 10H19C20.1046 10 21 10.8954 21 12V13C21 14.1046 20.1046 15 19 15H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M2 21H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 4C7 5.5 6 6 6 7.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 3C11 4.5 10 5 10 6.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 4C15 5.5 14 6 14 7.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// 3. Personal & Household Care (Sparkling Soap Dispenser & Foam Bubbles)
export const PersonalCareSvg = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="6" y="9" width="12" height="12" rx="3" fill="#FDF2F8" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 9V6C10 4.89543 10.8954 4 12 4H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M10 6H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="14" r="2" fill="#F472B6" />
    <circle cx="19" cy="5" r="2" fill="#FBCFE8" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="21" cy="9" r="1.2" fill="#F472B6" />
  </svg>
);

// 4. Health & Wellness (Ayurvedic Herbal Leaf & Health Cross)
export const HealthWellnessSvg = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#F0FDF4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M18 6C18 6 19.5 8 18.5 9.5C17 9.5 16.5 8 18 6Z" fill="#15803D" />
  </svg>
);
