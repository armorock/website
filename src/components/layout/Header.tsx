'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import { getNavigationLinks, shouldUseHeaderLightStyling } from '@/lib/utils/navigation';
import { HEADER, LAYOUT } from '@/styles';

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
      <header className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
        <div className={`${LAYOUT.container} flex items-center justify-between`}>
          {/* Logo */}
          <div className="logo-container flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-[360px] h-10">
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
          <nav className="desktop-nav">
            <div className="flex items-center justify-center gap-x-11">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    nav-link
                    ${pathname === link.href ? 'nav-link-active' : ''}
                    ${useLightStyling && !isScrolled ? 'text-white' : 'text-[#20242A]'}
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
          
          {/* Get a Quote Button */}
          <div className="quote-btn-container flex-shrink-0">
            <Link
              href="/quote"
              className={`
                px-8 py-[6px] border-[2px] text-lg font-oswald font-bold uppercase bg-transparent transition-colors duration-200 tracking-wide inline-block
                ${useLightStyling && !isScrolled 
                  ? 'border-white text-white hover:bg-white hover:text-[#20242A]' 
                  : 'border-[#20242A] text-[#20242A] hover:bg-[#20242A] hover:text-white'}
              `}
            >
              GET A QUOTE
            </Link>
          </div>
          
          {/* Mobile Menu Button - Only visible on mobile */}
          <button 
            className="mobile-menu-btn lg:hidden ml-4" 
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-8 w-8 ${useLightStyling && !isScrolled ? 'text-white' : 'text-[#20242A]'}`} 
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
