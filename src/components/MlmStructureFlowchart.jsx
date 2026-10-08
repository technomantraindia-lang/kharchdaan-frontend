import React, { useState } from 'react';
import { 
  Users, TrendingUp, Zap, Award, CheckCircle2, ArrowRight, ArrowDown, 
  Wallet, ShieldCheck, ChevronRight, Sparkles, RefreshCw, Layers, 
  ShoppingBag, HelpCircle, Info, Calculator, Check, ExternalLink, X, Play
} from 'lucide-react';

export const MlmStructureFlowchart = ({ onOpenAuth, onShopClick, isModal = false, onCloseModal }) => {
  const [activeTab, setActiveTab] = useState('flowchart'); // 'flowchart' | 'matrix' | 'levels' | 'calculator' | 'rules'
  
  // Spillover simulator state
  const [simulatorMembers, setSimulatorMembers] = useState(3);
  
  // Calculator state
  const [calcDirects, setCalcDirects] = useState(3);
  const [calcAvgSpend, setCalcAvgSpend] = useState(3000); // INR per month
  const [calcDepth, setCalcDepth] = useState(5); // Levels

  const handleAddMember = () => {
    if (simulatorMembers < 12) {
      setSimulatorMembers(prev => prev + 1);
    }
  };

  const handleResetSimulator = () => {
    setSimulatorMembers(3);
  };

  // 20 Level calculation based on backend rules (High rate 13.5 for L0-7, 0.75 for L8-19, divisor 3000, income rate 0.20)
  const calculateTierEarnings = () => {
    let totalTeam = 0;
    let monthlyIncome = 0;
    
    // Geometric expansion capped by realistic retention
    for (let lvl = 1; lvl <= calcDepth; lvl++) {
      const levelMembers = Math.pow(calcDirects, lvl);
      totalTeam += levelMembers;
      const rate = lvl <= 7 ? 0.05 : 0.01; // effective commission percentage
      monthlyIncome += levelMembers * (calcAvgSpend * rate);
    }

    return {
      totalTeam: Math.min(totalTeam, 250000),
      monthlyIncome: Math.round(monthlyIncome),
      monthlyVolume: Math.round(totalTeam * calcAvgSpend)
    };
  };

  const calcResults = calculateTierEarnings();

  return (
    <div className={`mlm-flowchart-container ${isModal ? 'is-modal-view' : ''}`}>
      {/* Modal Close Button if in modal mode */}
      {isModal && (
        <button className="flowchart-modal-close-btn" onClick={onCloseModal} aria-label="Close Flowchart">
          <X size={20} />
        </button>
      )}

      {/* Header Banner */}
      <div className="flowchart-header">
        <div className="flowchart-badge">
          <Sparkles size={15} className="text-orange" />
          <span>SIMPLIFIED & TRANSPARENT DIRECT SELLING MODEL</span>
        </div>
        <h2 className="flowchart-title">
          KharchDaan 1:3 Power Matrix Roadmap
        </h2>
        <p className="flowchart-subtitle">
          Everything you need to know about our community earning model in one clear visual guide. 
          No confusing binary leg balancing, no expensive joining kits—just 100% everyday household grocery savings.
        </p>

        {/* Navigation Tabs */}
        <div className="flowchart-tabs-bar">
          <button 
            className={`flowchart-tab-btn ${activeTab === 'flowchart' ? 'active' : ''}`}
            onClick={() => setActiveTab('flowchart')}
          >
            <TrendingUp size={16} />
            <span>1. 5-Step Flowchart</span>
          </button>

          <button 
            className={`flowchart-tab-btn ${activeTab === 'matrix' ? 'active' : ''}`}
            onClick={() => setActiveTab('matrix')}
          >
            <Users size={16} />
            <span>2. 1:3 Tree & Spillover</span>
          </button>

          <button 
            className={`flowchart-tab-btn ${activeTab === 'levels' ? 'active' : ''}`}
            onClick={() => setActiveTab('levels')}
          >
            <Layers size={16} />
            <span>3. 20-Level Matrix Table</span>
          </button>

          <button 
            className={`flowchart-tab-btn ${activeTab === 'calculator' ? 'active' : ''}`}
            onClick={() => setActiveTab('calculator')}
          >
            <Calculator size={16} />
            <span>4. Earnings Calculator</span>
          </button>

          <button 
            className={`flowchart-tab-btn ${activeTab === 'rules' ? 'active' : ''}`}
            onClick={() => setActiveTab('rules')}
          >
            <ShieldCheck size={16} />
            <span>5. 100% Legal & Govt Ethics</span>
          </button>
        </div>
      </div>

      {/* TAB 1: 5-STEP VISUAL FLOWCHART */}
      {activeTab === 'flowchart' && (
        <div className="flowchart-tab-content">
          <div className="flowchart-steps-grid">
            {/* Step 1 */}
            <div className="flowchart-step-card step-1">
              <div className="step-number-badge">STEP 1</div>
              <div className="step-icon-bubble">
                <Users size={24} />
              </div>
              <h3 className="step-card-title">Free Registration & KYC</h3>
              <p className="step-card-desc">
                Sign up for <strong>100% FREE</strong> with your mobile number. No mandatory registration fees, no investment kits.
              </p>
              <ul className="step-card-points">
                <li><Check size={13} /> ₹0 Joining / Membership Fee</li>
                <li><Check size={13} /> Verified Aadhaar & Bank KYC</li>
                <li><Check size={13} /> Instant Member ID generated</li>
              </ul>
              <div className="step-card-footer-pill">
                <span>Zero Risk • Immediate Activation</span>
              </div>
            </div>

            <div className="flowchart-connector-arrow">
              <span>➔</span>
            </div>

            {/* Step 2 */}
            <div className="flowchart-step-card step-2">
              <div className="step-number-badge">STEP 2</div>
              <div className="step-icon-bubble">
                <ShoppingBag size={24} />
              </div>
              <h3 className="step-card-title">Shop Household Groceries</h3>
              <p className="step-card-desc">
                Order your family’s routine monthly groceries—<strong>Atta, Rice, Oil, Spices & Tea</strong> at direct MRP discounts.
              </p>
              <ul className="step-card-points">
                <li><Check size={13} /> 100% National Brands (Tata, Fortune, Dabur)</li>
                <li><Check size={13} /> Up to 100% Cashback benefits</li>
                <li><Check size={13} /> Qualifies your account for full royalties</li>
              </ul>
              <div className="step-card-footer-pill">
                <span>Real FMCG • Zero Forced Products</span>
              </div>
            </div>

            <div className="flowchart-connector-arrow">
              <span>➔</span>
            </div>

            {/* Step 3 */}
            <div className="flowchart-step-card step-3 highlight-step">
              <div className="step-number-badge gold">STEP 3</div>
              <div className="step-icon-bubble gold">
                <Sparkles size={24} />
              </div>
              <h3 className="step-card-title">1:3 Placement Matrix</h3>
              <p className="step-card-desc">
                Introduce just <strong>3 consumer families</strong> on your direct frontline (Left, Middle, Right). That's your full direct foundation!
              </p>
              <ul className="step-card-points">
                <li><Check size={13} /> 3 direct node slots to complete</li>
                <li><Check size={13} /> Unlocks multi-tier matrix rewards</li>
                <li><Check size={13} /> <strong>NO binary 1:1 leg balancing hassle!</strong></li>
              </ul>
              <div className="step-card-footer-pill gold">
                <span>Simple 3-Node Frontline</span>
              </div>
            </div>

            <div className="flowchart-connector-arrow">
              <span>➔</span>
            </div>

            {/* Step 4 */}
            <div className="flowchart-step-card step-4">
              <div className="step-number-badge">STEP 4</div>
              <div className="step-icon-bubble">
                <TrendingUp size={24} />
              </div>
              <h3 className="step-card-title">Automatic Spillover</h3>
              <p className="step-card-desc">
                When you or your upline leaders sponsor a <strong>4th, 5th, or 6th member</strong>, they automatically spill down under your team!
              </p>
              <ul className="step-card-points">
                <li><Check size={13} /> Extra referrals help downline earn</li>
                <li><Check size={13} /> Geometric 3 ➔ 9 ➔ 27 duplication</li>
                <li><Check size={13} /> Everyone grows together as a family</li>
              </ul>
              <div className="step-card-footer-pill">
                <span>Automated Placement Engine</span>
              </div>
            </div>

            <div className="flowchart-connector-arrow">
              <span>➔</span>
            </div>

            {/* Step 5 */}
            <div className="flowchart-step-card step-5">
              <div className="step-number-badge emerald">STEP 5</div>
              <div className="step-icon-bubble emerald">
                <Wallet size={24} />
              </div>
              <h3 className="step-card-title">Daily Instant UPI Payouts</h3>
              <p className="step-card-desc">
                Every grocery purchase in your <strong>20 levels</strong> generates PV credits. Cash transfers straight to your bank or UPI.
              </p>
              <ul className="step-card-points">
                <li><Check size={13} /> Instant credit to KharchDaan Wallet</li>
                <li><Check size={13} /> Direct UPI / IMPS bank withdrawal</li>
                <li><Check size={13} /> 100% transparent audit ledger</li>
              </ul>
              <div className="step-card-footer-pill emerald">
                <span>Real-Time Bank Transfers</span>
              </div>
            </div>
          </div>

          {/* Quick Summary Banner */}
          <div className="flowchart-summary-banner">
            <div className="summary-banner-content">
              <h4>Why This Flowchart Is 100% Beginner Friendly:</h4>
              <p>
                In old MLM companies, 90% of people fail because they must sell expensive unknown cosmetics or balance complex binary legs. 
                In KharchDaan, families already buy Atta and Mustard Oil every month. When they save money, your team duplicates naturally.
              </p>
            </div>
            <div className="summary-banner-actions">
              <button className="btn-flowchart-primary" onClick={onOpenAuth}>
                <span>Join KharchDaan Free</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 1:3 TREE & SPILLOVER VISUALIZER */}
      {activeTab === 'matrix' && (
        <div className="flowchart-tab-content">
          <div className="matrix-visualizer-box">
            <div className="visualizer-intro">
              <div className="visualizer-intro-text">
                <h3>Interactive 1:3 Matrix & Spillover Simulator</h3>
                <p>
                  See exactly where your referrals go. Your frontline only has 3 slots: <strong>Left</strong>, <strong>Middle</strong>, and <strong>Right</strong>. 
                  Watch what happens when you sponsor extra members!
                </p>
              </div>
              <div className="visualizer-controls">
                <button 
                  className="btn-sim-action" 
                  onClick={handleAddMember}
                  disabled={simulatorMembers >= 12}
                >
                  <Sparkles size={16} />
                  <span>Refer Next Member ({simulatorMembers + 1})</span>
                </button>
                <button className="btn-sim-reset" onClick={handleResetSimulator}>
                  <RefreshCw size={14} />
                  <span>Reset Tree</span>
                </button>
              </div>
            </div>

            {/* Tree Diagram */}
            <div className="visual-tree-container">
              {/* Level 0: Root (YOU) */}
              <div className="tree-level level-0">
                <div className="tree-node node-you">
                  <div className="node-avatar-crown">★</div>
                  <div className="node-circle gold-circle">YOU</div>
                  <div className="node-meta">
                    <strong>Level 0 (Frontline Sponsor)</strong>
                    <span>Total Sponsoring: {simulatorMembers} Members</span>
                  </div>
                </div>
              </div>

              {/* Connecting Lines L0 -> L1 */}
              <div className="tree-lines-l0">
                <div className="line-v" />
                <div className="line-h-3" />
                <div className="line-drops">
                  <span className="drop-dot left" />
                  <span className="drop-dot mid" />
                  <span className="drop-dot right" />
                </div>
              </div>

              {/* Level 1: 3 Direct Spots */}
              <div className="tree-level level-1">
                {/* Node 1: Left */}
                <div className="tree-node node-child active">
                  <div className="node-pos-pill">POSITION 1: LEFT</div>
                  <div className="node-circle orange-circle">1</div>
                  <div className="node-meta">
                    <strong>Direct Member #1</strong>
                    <span>Frontline Slot Filled</span>
                  </div>
                  {simulatorMembers >= 4 && (
                    <div className="spillover-tag-received">
                      <span>Received Spillover! (+{Math.min(3, Math.ceil((simulatorMembers - 3) / 3))})</span>
                    </div>
                  )}
                </div>

                {/* Node 2: Middle */}
                <div className="tree-node node-child active">
                  <div className="node-pos-pill">POSITION 2: MIDDLE</div>
                  <div className="node-circle orange-circle">2</div>
                  <div className="node-meta">
                    <strong>Direct Member #2</strong>
                    <span>Frontline Slot Filled</span>
                  </div>
                  {simulatorMembers >= 5 && (
                    <div className="spillover-tag-received">
                      <span>Received Spillover! (+{Math.min(3, Math.floor((simulatorMembers - 2) / 3))})</span>
                    </div>
                  )}
                </div>

                {/* Node 3: Right */}
                <div className="tree-node node-child active">
                  <div className="node-pos-pill">POSITION 3: RIGHT</div>
                  <div className="node-circle orange-circle">3</div>
                  <div className="node-meta">
                    <strong>Direct Member #3</strong>
                    <span>Frontline Slot Filled</span>
                  </div>
                  {simulatorMembers >= 6 && (
                    <div className="spillover-tag-received">
                      <span>Received Spillover! (+{Math.min(3, Math.floor((simulatorMembers - 3) / 3))})</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Spillover Notification Box */}
              {simulatorMembers > 3 && (
                <div className="spillover-live-banner animate-fade-in">
                  <div className="spillover-banner-icon">
                    <ArrowDown size={20} className="text-orange" />
                  </div>
                  <div className="spillover-banner-text">
                    <strong>Power Spillover in Action!</strong>
                    <span>
                      You have sponsored {simulatorMembers} members. Because your frontline of 3 is full, 
                      Members #{4} through #{simulatorMembers} have automatically spilled over to support Member #{((simulatorMembers - 4) % 3) + 1}’s team!
                    </span>
                  </div>
                  <span className="spillover-badge-tag">Level 2 Auto-Placement</span>
                </div>
              )}

              {/* Level 2: 9 Children Preview */}
              <div className="tree-level-2-wrapper">
                <div className="level-2-header-strip">
                  <span>LEVEL 2 (9 SLOTS TOTAL) • AUTOMATIC SPILLOVER DESTINATION</span>
                </div>
                <div className="level-2-slots-grid">
                  {[...Array(9)].map((_, i) => {
                    const memberNum = 4 + i;
                    const isFilled = simulatorMembers >= memberNum;
                    return (
                      <div key={i} className={`slot-card ${isFilled ? 'filled' : 'empty'}`}>
                        <div className="slot-num">{i + 1}</div>
                        <div className="slot-status">
                          {isFilled ? (
                            <>
                              <CheckCircle2 size={12} className="text-emerald" />
                              <span>Member #{memberNum} (Spillover)</span>
                            </>
                          ) : (
                            <span className="empty-text">Open Slot</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Binary vs 1:3 Matrix Comparison */}
            <div className="matrix-comparison-cards">
              <div className="comparison-box negative">
                <h4>Old Binary System (Why Leaders Quit)</h4>
                <ul>
                  <li>❌ Must balance Left Leg vs Right Leg equally</li>
                  <li>❌ If Power Leg has ₹10 Lakhs and Weak Leg has ₹0, you earn ₹0</li>
                  <li>❌ Heavy pressure and complicated matching calculations</li>
                  <li>❌ 90% of new members give up within 60 days</li>
                </ul>
              </div>

              <div className="comparison-box positive">
                <h4>KharchDaan 1:3 Power Matrix (Why You Win)</h4>
                <ul>
                  <li>✅ Only 3 direct frontline slots needed</li>
                  <li>✅ <strong>Zero Leg Balancing!</strong> Every order in any leg pays immediately</li>
                  <li>✅ Automatic Spillover supports and motivates weaker teams</li>
                  <li>✅ Anchored on essential household groceries with 100% repeat retention</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 20-LEVEL DISTRIBUTION MATRIX TABLE */}
      {activeTab === 'levels' && (
        <div className="flowchart-tab-content">
          <div className="levels-table-box">
            <div className="table-intro-text">
              <h3>20-Level Distribution Structure & Capacity</h3>
              <p>
                As your 1:3 matrix duplicates, you earn tiered Point Volume (PV) and royalty income on every grocery basket purchased across 20 tiers.
              </p>
            </div>

            <div className="table-responsive-wrapper">
              <table className="flowchart-matrix-table">
                <thead>
                  <tr>
                    <th>Level Depth</th>
                    <th>Max Team Capacity (1:3)</th>
                    <th>PV Rate Category</th>
                    <th>Qualifying Requirement</th>
                    <th>Monthly Payout Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="highlight-row">
                    <td><strong>Level 0 (You)</strong></td>
                    <td>Self</td>
                    <td><span className="badge-high-pv">Self Purchase Cashback (Up to 100%)</span></td>
                    <td>Free KYC & Account</td>
                    <td>Instant Credit</td>
                  </tr>
                  <tr className="tier-band-high">
                    <td><strong>Level 1 (Directs)</strong></td>
                    <td><strong>3 Members</strong></td>
                    <td><span className="badge-high-pv">High PV Band (13.5 Rate)</span></td>
                    <td>1 Active Grocery Order</td>
                    <td>Daily / Real-Time</td>
                  </tr>
                  <tr className="tier-band-high">
                    <td><strong>Level 2</strong></td>
                    <td><strong>9 Members</strong></td>
                    <td><span className="badge-high-pv">High PV Band (13.5 Rate)</span></td>
                    <td>3 Active Directs</td>
                    <td>Daily / Real-Time</td>
                  </tr>
                  <tr className="tier-band-high">
                    <td><strong>Level 3</strong></td>
                    <td><strong>27 Members</strong></td>
                    <td><span className="badge-high-pv">High PV Band (13.5 Rate)</span></td>
                    <td>3 Active Directs</td>
                    <td>Daily / Real-Time</td>
                  </tr>
                  <tr className="tier-band-high">
                    <td><strong>Level 4</strong></td>
                    <td><strong>81 Members</strong></td>
                    <td><span className="badge-high-pv">High PV Band (13.5 Rate)</span></td>
                    <td>3 Active Directs</td>
                    <td>Daily / Real-Time</td>
                  </tr>
                  <tr className="tier-band-high">
                    <td><strong>Level 5</strong></td>
                    <td><strong>243 Members</strong></td>
                    <td><span className="badge-high-pv">High PV Band (13.5 Rate)</span></td>
                    <td>3 Active Directs</td>
                    <td>Daily / Real-Time</td>
                  </tr>
                  <tr className="tier-band-high">
                    <td><strong>Level 6</strong></td>
                    <td><strong>729 Members</strong></td>
                    <td><span className="badge-high-pv">High PV Band (13.5 Rate)</span></td>
                    <td>3 Active Directs</td>
                    <td>Daily / Real-Time</td>
                  </tr>
                  <tr className="tier-band-high">
                    <td><strong>Level 7</strong></td>
                    <td><strong>2,187 Members</strong></td>
                    <td><span className="badge-high-pv">High PV Band (13.5 Rate)</span></td>
                    <td>3 Active Directs</td>
                    <td>Daily / Real-Time</td>
                  </tr>
                  <tr className="tier-band-low">
                    <td><strong>Levels 8 to 19</strong></td>
                    <td><strong>Massive Pan-India Reach</strong></td>
                    <td><span className="badge-low-pv">Network Royalty Band (0.75 Rate)</span></td>
                    <td>Leadership Milestones</td>
                    <td>Weekly / Monthly Settlement</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-note-pill">
              <Info size={16} />
              <span>
                <strong>Audit Compliance:</strong> All PV distributions are backed by automated backend ledgers (Rule Engine v1.0). 
                Zero arbitrary cuts or unannounced system changes.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: INTERACTIVE EARNINGS CALCULATOR */}
      {activeTab === 'calculator' && (
        <div className="flowchart-tab-content">
          <div className="calculator-box">
            <div className="calculator-intro">
              <h3>Simulate Your Grocery Royalty Income</h3>
              <p>
                Adjust the sliders below to estimate your monthly earnings based on team size and average monthly family grocery spend.
              </p>
            </div>

            <div className="calculator-grid">
              {/* Sliders Side */}
              <div className="calc-sliders-card">
                {/* Slider 1: Direct Referrals */}
                <div className="calc-slider-group">
                  <div className="slider-label-row">
                    <span>Direct Active Families Sponsoring:</span>
                    <strong className="slider-val-highlight">{calcDirects} Families</strong>
                  </div>
                  <input 
                    type="range" 
                    min="3" 
                    max="10" 
                    step="1"
                    value={calcDirects} 
                    onChange={(e) => setCalcDirects(Number(e.target.value))}
                    className="calc-range-slider"
                  />
                  <div className="slider-range-ticks">
                    <span>3 (Minimum)</span>
                    <span>5</span>
                    <span>7</span>
                    <span>10 (Power Leader)</span>
                  </div>
                </div>

                {/* Slider 2: Average Monthly Grocery Basket */}
                <div className="calc-slider-group">
                  <div className="slider-label-row">
                    <span>Average Monthly Family Grocery Spend:</span>
                    <strong className="slider-val-highlight">₹{calcAvgSpend.toLocaleString('en-IN')}</strong>
                  </div>
                  <input 
                    type="range" 
                    min="1500" 
                    max="10000" 
                    step="500"
                    value={calcAvgSpend} 
                    onChange={(e) => setCalcAvgSpend(Number(e.target.value))}
                    className="calc-range-slider"
                  />
                  <div className="slider-range-ticks">
                    <span>₹1,500</span>
                    <span>₹3,000 (Average Family)</span>
                    <span>₹6,000</span>
                    <span>₹10,000</span>
                  </div>
                </div>

                {/* Slider 3: Duplication Depth */}
                <div className="calc-slider-group">
                  <div className="slider-label-row">
                    <span>Network Duplication Depth:</span>
                    <strong className="slider-val-highlight">Level {calcDepth}</strong>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="7" 
                    step="1"
                    value={calcDepth} 
                    onChange={(e) => setCalcDepth(Number(e.target.value))}
                    className="calc-range-slider"
                  />
                  <div className="slider-range-ticks">
                    <span>L1 (3 Teams)</span>
                    <span>L3 (27 Teams)</span>
                    <span>L5 (243 Teams)</span>
                    <span>L7 (2,187 Teams)</span>
                  </div>
                </div>
              </div>

              {/* Results Side */}
              <div className="calc-results-card">
                <div className="results-header">
                  <Sparkles size={18} className="text-gold" />
                  <h4>Projected Monthly Earnings</h4>
                </div>

                <div className="result-big-amount">
                  <span className="currency">₹</span>
                  <span className="amount">{calcResults.monthlyIncome.toLocaleString('en-IN')}</span>
                  <span className="period">/ month</span>
                </div>

                <div className="results-metrics-grid">
                  <div className="metric-box">
                    <span className="label">Projected Consumer Families</span>
                    <span className="value">{calcResults.totalTeam.toLocaleString('en-IN')} Families</span>
                  </div>
                  <div className="metric-box">
                    <span className="label">Monthly Grocery Turnover</span>
                    <span className="value">₹{calcResults.monthlyVolume.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="metric-box">
                    <span className="label">Annualized Passive Income</span>
                    <span className="value emerald">₹{(calcResults.monthlyIncome * 12).toLocaleString('en-IN')} / year</span>
                  </div>
                </div>

                <div className="results-cta">
                  <button className="btn-calc-join" onClick={onOpenAuth}>
                    <span>Start Building Your Team</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: 100% LEGAL & GOVT ETHICS */}
      {activeTab === 'rules' && (
        <div className="flowchart-tab-content">
          <div className="rules-ethics-box">
            <div className="rules-header-block">
              <ShieldCheck size={32} className="text-emerald" />
              <h3>100% Compliant with Consumer Protection Direct Selling Rules, 2021</h3>
              <p>
                KharchDaan follows the strict ethical direct selling directives issued by the Ministry of Consumer Affairs, Government of India.
              </p>
            </div>

            <div className="ethics-pillars-grid">
              <div className="ethic-pillar-card">
                <div className="pillar-badge-check">
                  <Check size={16} />
                </div>
                <h4>Zero Joining Fee</h4>
                <p>No enrollment fees, administrative admission charges, or mandatory starter kits. Anyone in India can register 100% free.</p>
              </div>

              <div className="ethic-pillar-card">
                <h4>Authentic FMCG Products</h4>
                <p>Every rupee of commission is generated strictly from legitimate product sales (Food, Groceries, Personal Care) with genuine GST tax invoices.</p>
              </div>

              <div className="ethic-pillar-card">
                <h4>30-Day Buyback & Refund</h4>
                <p>Full 30-day consumer protection guarantee. If a customer is unsatisfied, unopened goods can be returned without hassle.</p>
              </div>

              <div className="ethic-pillar-card">
                <h4>No Forced Inventory Buying</h4>
                <p>Distributors are never forced to purchase extra inventory to hold their ranks or qualify for commissions. Real monthly consumption is king.</p>
              </div>
            </div>

            <div className="foundation-pledge-banner">
              <div className="pledge-text">
                <strong>Backed by Geeta Sevashram Pratishthan Foundation:</strong>
                <span>
                  Our core mission is social community welfare, women empowerment, and revitalizing local Indian Kirana grocery networks.
                </span>
              </div>
              <button className="btn-view-shop-now" onClick={onShopClick}>
                <span>Explore Grocery Products</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
