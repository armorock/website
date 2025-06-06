'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ name: string; href: string }>;
  pathname: string;
}

const MobileMenu = ({ isOpen, onClose, navLinks, pathname }: MobileMenuProps) => {
  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="w-full max-w-[1400px] px-4 mx-auto flex justify-between items-center py-6">
        {/* Logo in mobile menu */}
        <Link href="/" onClick={onClose} className="flex items-center">
          <div className="relative w-44 sm:w-[220px] h-8 sm:h-8">
            <Image
              src="/logos/Horizontal (Logo + Armorock + Polymer Concrete).svg"
              alt="Armorock Polymer Concrete Logo"
              fill
              className="object-contain"
              priority
              draggable={false}
            />
          </div>
        </Link>
        
        {/* Close button */}
        <button onClick={onClose} aria-label="Close menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#20242A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="border-t border-gray-100"></div>
      
      <nav className="flex flex-col items-center justify-center flex-grow py-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`
              py-4 text-2xl sm:text-3xl font-oswald tracking-wide text-[#20242A] no-underline 
              hover:text-[var(--primary)] transition-colors duration-200
              ${pathname === link.href ? 'text-[var(--primary)] font-medium' : ''}
            `}
            onClick={onClose}
          >
            {link.name}
          </Link>
        ))}
        
        <Link
          href="/quote"
          className="px-8 py-1.5 border-[3px] text-xl font-oswald font-bold uppercase bg-transparent transition-colors duration-200 tracking-wide mt-10 border-[#20242A] text-[#20242A] hover:bg-[#20242A] hover:text-white"
          onClick={onClose}
        >
          GET A QUOTE
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
