import React from 'react';
import { Handshake, ShieldCheck, Users } from 'lucide-react';

export const WhatIsKharchDaan = () => {
  return (
    <section id="what-is" className="what-is-section-exact">
      <div className="container">
        <div className="what-is-grid-exact">
          {/* Left Column: Title & Mission Statement */}
          <div className="what-is-left-content">
            <h2 className="what-is-title-exact">
              What is <span className="text-orange">KharchDaan.Com</span>?
            </h2>
            <p className="what-is-desc-exact">
              An initiative by <strong>Geeta Sevashram Pratishthan Foundation</strong> to create a community-driven platform where everyday purchases, Direct Selling participation and cashback opportunities come together for a stronger, more supportive society.
            </p>
          </div>

          {/* Right Column: 3 Feature Cards */}
          <div className="what-is-cards-row">
            {/* Card 1: Simple Process */}
            <div className="what-is-card-item">
              <div className="card-icon-orange-square">
                <Handshake size={24} />
              </div>
              <h3 className="card-title-exact">Simple Process</h3>
              <p className="card-subtitle-exact">Easy to join, easy to use</p>
            </div>

            {/* Card 2: Transparent System */}
            <div className="what-is-card-item">
              <div className="card-icon-orange-square">
                <ShieldCheck size={24} />
              </div>
              <h3 className="card-title-exact">Transparent System</h3>
              <p className="card-subtitle-exact">Clear information and fair practices</p>
            </div>

            {/* Card 3: Community Focused */}
            <div className="what-is-card-item">
              <div className="card-icon-orange-square">
                <Users size={24} />
              </div>
              <h3 className="card-title-exact">Community Focused</h3>
              <p className="card-subtitle-exact">Empowering families and women</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
