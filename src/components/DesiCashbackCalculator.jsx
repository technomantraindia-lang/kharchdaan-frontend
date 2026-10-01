import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, Users, ArrowRight, ShieldCheck, Coins } from 'lucide-react';

export const DesiCashbackCalculator = ({ onJoinClick }) => {
  const [monthlyExpense, setMonthlyExpense] = useState(6000);
  const [teamTier, setTeamTier] = useState(9); // 3, 9, 27, 81, 243

  // Direct cashback ~ 12% of purchase
  const directCashback = Math.round(monthlyExpense * 0.12);
  
  // Network royalty ~ tier members * avg purchase (₹4000) * 4% commission
  const networkIncome = Math.round(teamTier * 4000 * 0.04);
  
  // Total monthly benefit
  const totalMonthlyBenefit = directCashback + networkIncome;
  
  // Annual benefit
  const annualBenefit = totalMonthlyBenefit * 12;

  return (
    <section className="calculator-section">
      <div className="container">
        <div className="calculator-card">
          <div className="calc-header">
            <div className="badge-desi-tag" style={{ marginBottom: '12px' }}>
              <Coins size={14} className="text-kesari" />
              <span>Live Cashback & Royalty Calculator</span>
            </div>
            <h2 className="calc-title">
              How Much Can You Earn from Your Monthly Household Expenses?
            </h2>
            <p className="calc-subtitle">
              Slide to adjust your household budget and 1:3 team size to calculate your guaranteed monthly savings and recurring annual royalties!
            </p>
          </div>

          <div className="calc-slider-box">
            {/* Expense Slider */}
            <div className="calc-slider-group">
              <div className="calc-slider-header">
                <span className="calc-label">
                  1. Estimated Monthly Household Expenses (Groceries, Ghee, Spices, Essentials):
                </span>
                <span className="calc-amount-display">₹{monthlyExpense.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={monthlyExpense}
                onChange={(e) => setMonthlyExpense(Number(e.target.value))}
                className="calc-range-slider"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#78716c', marginTop: '6px' }}>
                <span>₹1,000 / mo</span>
                <span>₹25,000 / mo</span>
                <span>₹50,000+ / mo</span>
              </div>
            </div>

            {/* Network Tier Selection */}
            <div className="calc-slider-group" style={{ marginTop: '24px' }}>
              <div className="calc-slider-header">
                <span className="calc-label">
                  2. Your 1:3 Network Team Size (Family, Friends & Direct Referrals):
                </span>
                <span className="calc-amount-display" style={{ color: '#d97706' }}>
                  {teamTier} Active Members
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
                {[3, 9, 27, 81, 243].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setTeamTier(count)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '12px',
                      fontSize: '13px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      border: teamTier === count ? '2px solid #ea580c' : '1.5px solid #fed7aa',
                      background: teamTier === count ? '#ea580c' : '#ffffff',
                      color: teamTier === count ? '#ffffff' : '#44403c',
                      transition: 'all 0.2s ease',
                      boxShadow: teamTier === count ? '0 4px 12px rgba(234, 88, 12, 0.3)' : 'none'
                    }}
                  >
                    {count} Members
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="calc-results-grid">
            <div className="calc-result-box">
              <div className="calc-res-value">₹{directCashback.toLocaleString('en-IN')}</div>
              <div className="calc-res-label">
                🎁 Monthly Direct Cashback
              </div>
              <span style={{ fontSize: '11px', color: '#78716c', marginTop: '4px', display: 'block' }}>
                Credited directly to your wallet
              </span>
            </div>

            <div className="calc-result-box">
              <div className="calc-res-value" style={{ color: '#d97706' }}>₹{networkIncome.toLocaleString('en-IN')}</div>
              <div className="calc-res-label">
                🚀 1:3 Network Monthly Royalty
              </div>
              <span style={{ fontSize: '11px', color: '#78716c', marginTop: '4px', display: 'block' }}>
                From {teamTier} active team members
              </span>
            </div>

            <div className="calc-result-box highlight">
              <div className="calc-res-value" style={{ color: '#c2410c' }}>₹{annualBenefit.toLocaleString('en-IN')}</div>
              <div className="calc-res-label" style={{ color: '#9a3412', fontWeight: 800 }}>
                🏆 Total Annual Earnings & Savings
              </div>
              <span style={{ fontSize: '11px', color: '#ea580c', fontWeight: 700, marginTop: '4px', display: 'block' }}>
                100% Guaranteed Return
              </span>
            </div>
          </div>

          {/* Bottom CTA */}
          <div style={{ marginTop: '28px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <button className="btn-primary btn-large" onClick={onJoinClick}>
              <Sparkles size={18} />
              <span>Create Free Account & Start Earning</span>
              <ArrowRight size={18} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#16a34a', fontWeight: 700 }}>
              <ShieldCheck size={16} />
              <span>Zero Hidden Fees • 100% Transparent Direct Bank Settlements</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
