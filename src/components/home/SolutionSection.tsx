'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SolutionSection = () => {
  return (
    <section className="section-solution py-24 bg-[var(--secondary)] text-white">
      <div className="container-custom text-center">
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image 
            src="/logos/Standalone Logo - No Text.svg" 
            alt="Armorock Icon" 
            width={120} 
            height={120}
            className="mx-auto"
          />
        </motion.div>
        
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-8 text-white uppercase tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          ARMOROCK IS THE SOLUTION
        </motion.h2>
        
        <motion.p 
          className="text-lg mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Armorock's revolutionary polymer concrete delivers unmatched durability, corrosion resistance, and sustainability for your infrastructure projects. Our products outperform traditional concrete solutions and are designed to withstand the toughest environmental conditions.
        </motion.p>
        
        <motion.h3 
          className="text-2xl md:text-3xl font-bold mb-10 uppercase tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          SUSTAINABLE IN DESIGN.<br />
          PROVEN IN PERFORMANCE.<br />
          TRUSTED FOR THE FUTURE.
        </motion.h3>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/quote" className="btn btn-primary py-3 px-8 text-lg">
            GET A QUOTE
          </Link>
          <Link href="/contact" className="btn btn-outline py-3 px-8 text-lg">
            CONNECT WITH US
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
