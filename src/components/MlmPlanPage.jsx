import React from 'react';
import { Home, ChevronRight, Sparkles, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { MlmStructureFlowchart } from './MlmStructureFlowchart';

export const MlmPlanPage = ({ onNavigateHome, onOpenAuth, onShopClick }) => {
  return (
    <div className="mlm-plan-page-wrapper">
      {/* Breadcrumb Navigation */}
      <div className="topic-breadcrumb-bar">
        <div className="container">
          <div className="breadcrumb-nav">
            <span className="breadcrumb-link" onClick={onNavigateHome}>
              <Home size={14} /> Home
            </span>
            <ChevronRight size={13} className="breadcrumb-separator" />
            <span className="breadcrumb-current">1:3 Power Matrix & Direct Selling Roadmap</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="mlm-plan-hero-banner">
        <div className="container">
          <div className="mlm-plan-hero-content">
            <div className="mlm-hero-badge">
              <Sparkles size={15} />
              <span>OFFICIAL KHARCHDAAN COMPENSATION PLAN</span>
            </div>
            <h1 className="mlm-hero-title">
              Complete Visual Guide to KharchDaan’s 1:3 Power Matrix
            </h1>
            <p className="mlm-hero-subtitle">
              Say goodbye to confusing MLM jargon, hidden qualification traps, and binary leg balancing headaches. 
              Here is the exact step-by-step roadmap showing how everyday family grocery shopping turns into recurring passive wealth.
            </p>
          </div>
        </div>
      </div>

      {/* Main Flowchart Section */}
      <div className="container py-8">
        <MlmStructureFlowchart 
          onOpenAuth={onOpenAuth}
          onShopClick={onShopClick}
          isModal={false}
        />
      </div>
    </div>
  );
};
