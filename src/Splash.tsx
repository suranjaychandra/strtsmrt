import React, { useEffect } from 'react';
import './Splash.css';

export const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    // Fast animation completes in 5.2 seconds to accommodate the split text logic
    const timer = setTimeout(onComplete, 5200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="splash-container">
      <div className="stage">
        {/* Subtle background particles */}
        <div className="bg-obj circle c1"></div>
        <div className="bg-obj dot d1"></div>

        <div className="word-fashion">Fashion</div>
        <div className="word-culture">Culture</div>

        <div className="sentence-part1">Streetwear</div>
        
        <div className="sentence-part2">
          <span className="s-dots">.....</span>
          <span className="s-but">&nbsp;but&nbsp;</span>
          <span className="s-smarter">SMARTER</span>
        </div>

        <div className="brand">
          <div className="brand-strt">STRT</div>
          <div className="brand-smrt">SMRT</div>
        </div>
      </div>
    </div>
  );
};
