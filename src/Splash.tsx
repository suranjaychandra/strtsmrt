import React, { useEffect } from 'react';
import './Splash.css';

export const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    // The animation takes around 12-13 seconds to fully reveal the logo.
    // Unmount and handoff to the shop page after 14 seconds.
    const timer = setTimeout(onComplete, 14000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="splash-container">
      <div className="stage">
        <div className="bg-obj circle c1"></div>
        <div className="bg-obj circle c2"></div>
        <div className="bg-obj circle c3"></div>
        <div className="bg-obj ring r1"></div>
        <div className="bg-obj ring r2"></div>
        <div className="bg-obj ring r3"></div>
        <div className="bg-obj bar b1"></div>
        <div className="bg-obj bar b2"></div>
        <div className="bg-obj bar b3"></div>
        <div className="bg-obj dot d1"></div>
        <div className="bg-obj dot d2"></div>
        <div className="bg-obj dot d3"></div>
        <div className="bg-obj dot d4"></div>

        <div className="word-fashion">Fashion</div>
        <div className="word-culture">Culture</div>

        <div className="sentence">
          <span className="s-strt">Street</span><span className="s-wear">wear</span><span className="s-dots">.....</span><span className="s-but">&nbsp;but&nbsp;</span><span className="s-smrt">SMART</span><span className="s-extra">er</span>
        </div>

        <div className="brand">
          <span className="brand-strt">STRT</span><span className="brand-smrt">SMRT</span>
        </div>

        <div className="line"></div>
      </div>
    </div>
  );
};
