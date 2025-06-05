'use client';

import { motion } from 'framer-motion';

const CorrosionSection = () => {
  return (
    <section className="section-corrosion py-20 relative bg-gray-100">
      <div className="container-custom">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--primary)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          H2S CORROSION CHALLENGE
        </motion.h2>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-6">
            Traditional precast concrete structures rapidly deteriorate when exposed to hydrogen sulfide (H2S) gas, 
            which converts to sulfuric acid, a devastating problem in wastewater systems. This corrosion significantly 
            reduces infrastructure lifespan and costs municipalities millions in premature rehabilitation and replacement.
          </p>
          <p className="text-lg mb-6 font-bold text-[var(--secondary)]">
            Rather than relying on temporary treatments like admixtures, liners, and coatings, 
            Armorock polymer concrete provides the permanent solution to H2S corrosion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CorrosionSection;
