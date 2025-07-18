"use client";

import { useEffect } from 'react';

/**
 * Forces the website to display as zoomed-out desktop view on mobile devices
 * by calculating the appropriate scale based on device width.
 */
export default function DesktopViewport() {
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return;
    
    // Target desktop width - this is what your site is designed for
    const DESKTOP_WIDTH = 1440;
    
    // Function to update the viewport meta tag
    const updateViewport = () => {
      // Get screen dimensions
      const screenWidth = window.innerWidth;
      
      // Calculate scale factor (how much to zoom out)
      const scaleFactor = screenWidth / DESKTOP_WIDTH;
      
      // Get or create viewport meta tag
      let viewportMeta = document.querySelector('meta[name="viewport"]');
      if (!viewportMeta) {
        viewportMeta = document.createElement('meta');
        viewportMeta.setAttribute('name', 'viewport');
        document.head.appendChild(viewportMeta);
      }
      
      // Set viewport with calculated scale
      // This makes the content appear as if zoomed out
      viewportMeta.setAttribute(
        'content',
        `width=${DESKTOP_WIDTH}, initial-scale=${scaleFactor}, minimum-scale=${scaleFactor}, maximum-scale=${scaleFactor}, user-scalable=no`
      );
    };
    
    // Apply viewport settings initially
    updateViewport();
    
    // Create a style element with fixed positioning for the body content
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      body {
        width: 100%;
        min-width: ${DESKTOP_WIDTH}px;
        position: absolute;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
      }
    `;
    document.head.appendChild(styleElement);
    
    // Update viewport on resize and orientation change
    window.addEventListener('resize', updateViewport);
    window.addEventListener('orientationchange', updateViewport);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', updateViewport);
      window.removeEventListener('orientationchange', updateViewport);
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, []);

  return null;
}
