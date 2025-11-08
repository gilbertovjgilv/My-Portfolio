
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0, speed = 15, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
    }
  }, [isInView, started]);

  useEffect(() => {
    if (!started) return;

    const timeout = setTimeout(() => {
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(prev => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);
      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeout);
  }, [started, text, delay, speed]);

  const showCursor = started && displayedText.length < text.length;

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {showCursor && <span className="typewriter-cursor"></span>}
    </span>
  );
};

export default TypewriterText;
