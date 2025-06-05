'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="section-hero py-32 md:py-52 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Landing Page - Background 1.webp"
          alt="Armorock facility"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/50 z-[1]"></div>
      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <div className="mb-16">
          <Image
            src="/logos/Horizontal (Logo + Armorock + Polymer Concrete).svg"
            alt="Armorock Logo"
            width={400}
            height={130}
            className="mb-8"
          />
        </div>
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)] mb-12 max-w-4xl uppercase tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SUSTAINABLE IN DESIGN.
          <br />
          PROVEN IN PERFORMANCE.
          <br />
          TRUSTED FOR THE FUTURE.
        </motion.h1>
        <div className="flex flex-col sm:flex-row gap-6 mt-6">
          <Link href="/quote" className="btn btn-primary py-3 px-8 text-lg">
            GET A QUOTE
          </Link>
          <Link href="/contact" className="btn btn-outline py-3 px-8 text-lg">
            CONNECT WITH US
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
