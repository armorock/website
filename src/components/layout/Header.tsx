'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import { getNavigationLinks, shouldUseHeaderLightStyling } from '@/lib/utils/navigation';

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
      <header className={`w-full fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}>
        <div className="w-full max-w-[1400px] px-4 mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="logo-container flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-[220px] h-8">
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
          <nav className="hidden lg:flex items-center justify-center flex-1 ml-16 mr-16">
            <div className="flex items-center justify-center gap-x-11">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    text-[16px] leading-tight font-oswald font-normal no-underline transition-colors duration-200 uppercase tracking-wide
                    ${pathname === link.href ? 'text-[var(--primary)] font-medium' : ''}
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
            className="lg:hidden ml-4" 
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
