'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const PolymerConcreteSection = () => {
  const components = [
    { name: 'RESIN', color: 'bg-[var(--primary)]' },
    { name: 'AGGREGATE', color: 'bg-[var(--primary)]' },
    { name: 'FRP REBAR', color: 'bg-[var(--primary)]' },
    { name: 'SAND', color: 'bg-[var(--primary)]' },
  ];

  return (
    <section className="section-polymer py-24">
      <div className="container-custom">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-16 text-center uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          WHAT IS POLYMER CONCRETE?
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-6 leading-relaxed">
              Polymer concrete is a sustainable, corrosion-resistant alternative to traditional precast concrete. 
              Polymer concrete is a sustainable, corrosion-resistant alternative to traditional precast concrete.
              Polymer concrete is a sustainable, corrosion-resistant alternative to traditional precast concrete.
            </p>
          </motion.div>
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-64 mx-auto mb-10">
              <Image 
                src="/products/Landing Page - Polymer Cross Section.webp" 
                alt="Polymer Concrete Cross Section" 
                width={300} 
                height={300}
                className="rounded-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {components.map((component, index) => (
                <motion.div
                  key={component.name}
                  className={`${component.color} text-white p-4 text-center font-bold`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {component.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PolymerConcreteSection;
