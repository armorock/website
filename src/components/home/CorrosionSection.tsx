'use client';

import { motion } from 'framer-motion';

const CorrosionSection = () => {
  return (
    <section className="section-corrosion py-24 relative bg-gray-100">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-gray-200/50 z-0"></div>
      <div className="container-custom relative z-10">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-14 text-center uppercase"
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
          <p className="text-lg mb-8 leading-relaxed">
            Traditional precast concrete structures rapidly deteriorate when exposed to hydrogen sulfide (H2S) gas, 
            which converts to sulfuric acid, a devastating problem in wastewater systems. This corrosion significantly 
            reduces infrastructure lifespan and costs municipalities millions in premature rehabilitation and replacement.
          </p>
          <p className="text-lg mb-6 font-semibold">
            Rather than relying on temporary treatments like admixtures, liners, and coatings, 
            Armorock polymer concrete provides the permanent solution to H2S corrosion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CorrosionSection;
