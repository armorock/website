'use client';

/**
 * Determines if the header should use light or dark styling
 * This is used to make the header text visible against different page backgrounds
 * 
 * @param pathname The current pathname from usePathname()
 * @returns boolean True if the header should use light styling (white text)
 */
export const shouldUseHeaderLightStyling = (pathname: string): boolean => {
  // Pages with dark backgrounds where header should have light styling
  const pagesWithDarkBackgrounds = ['/']; // Add other routes with hero images as needed
  
  return pagesWithDarkBackgrounds.includes(pathname);
};

/**
 * Get navigation links for the site
 * @returns Array of navigation links with name and href
 */
export const getNavigationLinks = () => [
  { name: 'About Us', href: '/about' },
  { name: 'Our Products', href: '/products' },
  { name: 'Life Cycle Analysis', href: '/life-cycle-analysis' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Connect With Us', href: '/contact' },
];
