'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './mobilemenu.module.css';

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
    <div className={styles.mobileMenuOverlay}>
      <div className={styles.menuHeader}>
        {/* Logo in mobile menu */}
        <Link href="/" onClick={onClose} className="flex items-center">
          <div className={styles.logoContainer}>
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
      
      <div className={styles.divider}></div>
      
      <nav className={styles.navContainer}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`
              ${styles.navLink}
              ${pathname === link.href ? styles.navLinkActive : ''}
            `}
            onClick={onClose}
          >
            {link.name}
          </Link>
        ))}
        
        <Link
          href="/quote"
          className={styles.quoteButton}
          onClick={onClose}
        >
          GET A QUOTE
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
