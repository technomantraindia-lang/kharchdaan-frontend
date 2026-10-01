import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Users, ChevronRight } from 'lucide-react';
import { 
  Step1Illustration, 
  Step2Illustration, 
  Step3Illustration, 
  Step4Illustration, 
  Step5Illustration 
} from './StepIllustrations';

export const HowItWorksSteps = ({ onGetStarted }) => {
  const steps = [
    {
      num: '01',
      tag: 'Quick Join',
      title: 'Create Your Account',
      desc: 'Register and become a member in under 30 seconds',
      illustration: <Step1Illustration />,
      highlight: '100% Free'
    },
    {
      num: '02',
      tag: 'Save Daily',
      title: 'Shop or Purchase',
      desc: 'Buy daily groceries & services from our verified network',
      illustration: <Step2Illustration />,
      highlight: 'Best MRP Discounts'
    },
    {
      num: '03',
      tag: 'Grow Tree',
      title: 'Build Your Network',
      desc: 'Connect with family & friends and expand together',
      illustration: <Step3Illustration />,
      highlight: '3:1 Structure'
    },
    {
      num: '04',
      tag: 'Earn Money',
      title: 'Earn Eligible Cashback',
      desc: 'Get instant cashback benefits credited to your wallet',
      illustration: <Step4Illustration />,
      highlight: 'Real Cash in Wallet'
    },
    {
      num: '05',
      tag: 'Prosper',
      title: 'Grow With Community',
      desc: 'Participate, support, and achieve financial independence',
      illustration: <Step5Illustration />,
      highlight: 'Lifetime Returns'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section-exact">
      <div className="container">
        {/* Section Header */}
        <div className="how-it-works-header-box">
          <div className="hiw-badge-pill">
            <Sparkles size={14} className="text-orange-icon" />
            <span>SIMPLE & TRANSPARENT PROCESS</span>
          </div>
          
          <div className="section-ornament-header">
            <span className="ornament-leaf">❧</span>
            <h2 className="section-title-exact">How KharchDaan Works</h2>
            <span className="ornament-leaf">❧</span>
          </div>

          <p className="hiw-subtitle-text">
            Turn your essential monthly expenses into sustainable wealth in 5 easy, automated steps.
          </p>
        </div>

        {/* 5-Step Connected Flow Grid */}
        <div className="steps-flow-container-master">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="step-flow-card-master">
                {/* Number Badge with Gradient Ring */}
                <div className="step-badge-wrapper">
                  <div className="step-number-badge-master">{step.num}</div>
                  <span className="step-tag-pill">{step.tag}</span>
                </div>

                {/* Rich Illustration Canvas */}
                <div className="step-icon-stage">
                  {step.illustration}
                </div>

                {/* Content */}
                <div className="step-content-block">
                  <h3 className="step-card-title-master">{step.title}</h3>
                  <p className="step-card-desc-master">{step.desc}</p>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="step-highlight-chip">
                  <span className="dot-green"></span>
                  <span>{step.highlight}</span>
                </div>
              </div>

              {/* Connecting Journey Arrow */}
              {idx < steps.length - 1 && (
                <div className="step-journey-arrow-box" aria-hidden="true">
                  <div className="arrow-pulse-circle">
                    <ArrowRight size={18} />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Trust & Action Banner */}
        <div className="hiw-bottom-action-banner">
          <div className="hiw-trust-features">
            <div className="hiw-trust-item">
              <ShieldCheck size={18} className="trust-icon" />
              <span>100% Free Lifetime Registration</span>
            </div>
            <div className="hiw-trust-sep">•</div>
            <div className="hiw-trust-item">
              <Zap size={18} className="trust-icon" />
              <span>Instant Cashback on Daily Groceries</span>
            </div>
            <div className="hiw-trust-sep">•</div>
            <div className="hiw-trust-item">
              <Users size={18} className="trust-icon" />
              <span>20-Level Network Income Distribution</span>
            </div>
          </div>

          {onGetStarted && (
            <button className="btn-hiw-get-started" onClick={onGetStarted}>
              <span>Start Your Journey Now</span>
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
