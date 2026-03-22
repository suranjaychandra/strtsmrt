import React from 'react';
import './About.css';

export const About: React.FC = () => {
  return (
    <div className="page-container about-page">
      <header className="about-header">
        <h1 className="headline-display text-center">
          All Clothing Needs Met On A Single<br/>
          <span className="text-red">Platform.</span>
        </h1>
        <p className="subtitle">NEVER BEHIND THE LATEST TRENDS.</p>
      </header>

      <section className="about-feature">
        <div className="feature-content">
          <h2 className="headline-display">THE ARCHIVE IN YOUR POCKET</h2>
          <p>The STRTSMRT AI Stylist scans your vibe, understands your fit, and builds a rotation that hits different. Stop scrolling endlessly. Let the algorithm do the heavy lifting.</p>
          <button className="button-primary">Scan Your Vibe</button>
        </div>
        <div className="feature-visual">
          <div className="placeholder-phone">
            AI_STYLIST // ACTIVE
          </div>
        </div>
      </section>

      <section className="about-culture">
        <h2 className="headline-display text-red">STREET_SMRT_CULTURE</h2>
        <div className="culture-grid">
          <div className="culture-img">IMG_01</div>
          <div className="culture-img">IMG_02</div>
          <div className="culture-img">IMG_03</div>
        </div>
      </section>
    </div>
  );
};
