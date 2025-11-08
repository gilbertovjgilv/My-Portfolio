import React, { Children } from 'react';

interface FlipButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isFlipped: boolean;
  className?: string;
}

const FlipButton: React.FC<FlipButtonProps> = ({ children, onClick, isFlipped, className }) => {
  const childrenArray = Children.toArray(children);
  const front = childrenArray.find(child => (child as React.ReactElement).type === FlipButtonFront);
  const back = childrenArray.find(child => (child as React.ReactElement).type === FlipButtonBack);

  return (
    <button onClick={onClick} className={`flip-button-container ${className || ''}`} aria-label="Toggle theme">
      <div className={`flip-button-inner ${isFlipped ? 'is-flipped' : ''}`}>
        {front}
        {back}
      </div>
    </button>
  );
};

export const FlipButtonFront: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={`flip-button-front ${className || ''}`}>
    {children}
  </div>
);

export const FlipButtonBack: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={`flip-button-back ${className || ''}`}>
    {children}
  </div>
);

export default FlipButton;
