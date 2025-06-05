'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Life Cycle Analysis', href: '/life-cycle-analysis' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Connect With Us', href: '/contact' },
  ];

  return (
    <header className="relative bg-white shadow-sm">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative w-48 h-12">
              <Image 
                src="/logos/Horizontal (Logo + Armorock + Polymer Concrete).svg" 
                alt="Armorock Logo" 
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase font-medium text-gray-800 hover:text-[var(--primary)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/quote" className="btn btn-primary py-2 px-5 uppercase text-sm font-bold">
              GET A QUOTE
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            <div className="w-6 h-6 flex items-center justify-center">
              <span
                className={`block w-5 h-0.5 bg-gray-800 transition-all ${
                  isOpen ? 'rotate-45 translate-y-0.5' : ''
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-gray-800 transition-all mt-1 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-gray-800 transition-all mt-1 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          id="mobile-menu"
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-gray-800 hover:text-[var(--primary)] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/quote" 
              className="block w-full btn btn-primary text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              GET A QUOTE
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
