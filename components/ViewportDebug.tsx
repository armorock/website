"use client";

import { useState, useEffect } from 'react';

/**
 * A debug component that shows the current screen width and scale factor
 * Only shown during development
 */
export default function ViewportDebug() {
  const [screenInfo, setScreenInfo] = useState({
    width: 0,
    scale: 0,
  });

  useEffect(() => {
    // Only run in client side
    if (typeof window === 'undefined') return;
    
    // Only run in development environment
    if (process.env.NODE_ENV === 'production') return;

    const calculateScale = () => {
      const targetWidth = 1440;
      const currentWidth = window.innerWidth;
      const scaleFactor = currentWidth / targetWidth;
      
      setScreenInfo({
        width: currentWidth,
        scale: scaleFactor,
      });
    };

    // Calculate initial values
    calculateScale();
    
    // Update on resize
    window.addEventListener('resize', calculateScale);
    
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  // Don't show anything in production or on server render
  if (typeof window === 'undefined' || process.env.NODE_ENV === 'production' || screenInfo.width === 0) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      backgroundColor: 'rgba(0,0,0,0.7)',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
    }}>
      Width: {screenInfo.width}px | Scale: {screenInfo.scale.toFixed(3)}
    </div>
  );
}
