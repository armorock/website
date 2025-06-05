'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="section-hero py-24 md:py-36 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Armorock facility"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <div className="mb-12">
          <Image
            src="/armorock-logo.svg"
            alt="Armorock Logo"
            width={300}
            height={100}
            className="mb-6"
          />
        </div>
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)] mb-8 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SUSTAINABLE IN DESIGN. PROVEN IN PERFORMANCE.
          <br />
          TRUSTED FOR THE FUTURE.
        </motion.h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/quote" className="btn btn-primary">
            GET A QUOTE
          </Link>
          <Link href="/contact" className="btn btn-outline">
            CONNECT WITH US
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
