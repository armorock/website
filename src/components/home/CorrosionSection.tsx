'use client';

import { motion } from 'framer-motion';

const CorrosionSection = () => {
  return (
    <section className="section-corrosion py-20 relative">
      {/* Background pattern or image can be added here */}
      <div className="container-custom">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--secondary)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          H2S CORROSION
        </motion.h2>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-6">
            Traditional precast concrete structures corrode when exposed to sulfuric acid, 
            a common issue in the waste water industry. Corrosion increases rehabilitation costs 
            of traditional concrete structures, costing municipalities (number for money) over time. 
            Armorock is the solution.
          </p>
          <p className="text-lg mb-6">
            Rather than using temporary treatments like admixtures, liners, and coatings, 
            Armorock polymer concrete is the long-lasting solution to corrosion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CorrosionSection;
