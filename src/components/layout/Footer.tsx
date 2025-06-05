'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    aboutUs: [
      { name: 'Mission and Values', href: '/about/mission' },
      { name: 'Executive Team', href: '/about/team' },
      { name: 'Careers', href: '/about/careers' },
      { name: 'News', href: '/about/news' },
    ],
    ourProducts: [
      { name: 'Overview', href: '/products' },
      { name: 'H2 System', href: '/products/h2-system' },
      { name: 'MS Series', href: '/products/ms-series' },
      { name: 'FRP Rebar', href: '/products/frp-rebar' },
    ],
    lifeCycle: [
      { name: 'Life Cycle Analysis', href: '/life-cycle-analysis' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Corrosion Resistance', href: '/corrosion-resistance' },
    ],
    caseStudies: [
      { name: 'Case Study 1', href: '/case-studies/1' },
      { name: 'Case Study 2', href: '/case-studies/2' },
      { name: 'Case Study 3', href: '/case-studies/3' },
    ],
    connectWithUs: [
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Virtual Tour', href: '/virtual-tour' },
      { name: 'Events', href: '/events' },
      { name: 'Social Media', href: '/social-media' },
      { name: 'Blog', href: '/blog' },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="relative w-40 h-24 mb-4">
              <Image
                src="/logos/Stacked (Logo + Armorock + Polymer Concrete).svg"
                alt="Armorock Logo"
                width={160}
                height={100}
                style={{ objectFit: 'contain' }}
                className="mb-4"
              />
            </div>
            <p className="text-gray-600 mb-6 max-w-xs italic">
              Sustainable in design. Proven in performance. Trusted for the future.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">
                <FaLinkedin size={22} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">
                <FaFacebook size={22} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">
                <FaTwitter size={22} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">
                <FaInstagram size={22} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase mb-4 tracking-wider">About Us</h3>
            <ul className="space-y-3">
              {footerLinks.aboutUs.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-700 hover:text-[var(--primary)]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase mb-4 tracking-wider">Our Products</h3>
            <ul className="space-y-3">
              {footerLinks.ourProducts.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-700 hover:text-[var(--primary)]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase mb-4 tracking-wider">Life Cycle Analysis</h3>
            <ul className="space-y-3">
              {footerLinks.lifeCycle.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-700 hover:text-[var(--primary)]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase mb-4 tracking-wider">Connect With Us</h3>
            <ul className="space-y-3">
              {footerLinks.connectWithUs.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-700 hover:text-[var(--primary)]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; {currentYear} Armorock. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-[var(--primary)]">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-[var(--primary)]">
              Privacy
            </Link>
            <Link href="/sitemap" className="text-sm text-gray-500 hover:text-[var(--primary)]">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
