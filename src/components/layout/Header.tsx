'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import { getNavigationLinks, shouldUseHeaderLightStyling } from '@/lib/utils/navigation';
import styles from './header.module.css';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Get navigation links from utility function
  const navLinks = getNavigationLinks();
  
  // Check if current page should use light styling
  const useLightStyling = shouldUseHeaderLightStyling(pathname);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Run it once to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <header className={`${styles.header} ${
        isScrolled ? styles.headerScrolled : styles.headerTransparent
      }`}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <Link href="/" className="flex items-center">
              <div className={styles.logoImage}>
                <Image
                  src="/logos/Horizontal (Logo + Armorock + Polymer Concrete).svg"
                  alt="Armorock Polymer Concrete Logo"
                  fill
                  className="object-contain object-left"
                  priority
                  draggable={false}
                />
              </div>
            </Link>
          </div>
          
          {/* Navigation - Desktop */}
          <nav className={styles.desktopNav}>
            <div className={styles.navLinks}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    ${styles.navLink}
                    ${pathname === link.href ? styles.navLinkActive : ''}
                    ${useLightStyling && !isScrolled ? styles.navLinkLight : styles.navLinkDark}
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
          
          {/* Get a Quote Button */}
          <div>
            <Link
              href="/quote"
              className={`
                ${styles.quoteButton}
                ${useLightStyling && !isScrolled 
                  ? styles.quoteButtonLight 
                  : styles.quoteButtonDark}
              `}
            >
              GET A QUOTE
            </Link>
          </div>
          
          {/* Mobile Menu Button - Only visible on mobile */}
          <button 
            className={styles.mobileMenuBtn}
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`${styles.mobileMenuBtnIcon} ${useLightStyling && !isScrolled ? styles.navLinkLight : styles.navLinkDark}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navLinks={navLinks} 
        pathname={pathname}
      />
    </>
  );
};

export default Header;
