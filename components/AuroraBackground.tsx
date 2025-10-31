import React from 'react';

const AuroraBackground: React.FC = () => {
  return (
    <div className="aurora-background">
      <div className="aurora-shape aurora-shape1" style={{'--aurora-color': 'var(--primary-color)'} as React.CSSProperties}></div>
      <div className="aurora-shape aurora-shape2" style={{'--aurora-color': '#4ade80'} as React.CSSProperties}></div>
      <div className="aurora-shape aurora-shape3" style={{'--aurora-color': '#60a5fa'} as React.CSSProperties}></div>
      <div className="aurora-shape aurora-shape4" style={{'--aurora-color': '#c084fc'} as React.CSSProperties}></div>
    </div>
  );
};

export default AuroraBackground;
