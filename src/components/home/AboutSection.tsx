'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="section-about py-20 bg-[var(--secondary)] text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image 
                src="/logos/Standalone Logo - No Text.svg" 
                alt="Armorock Icon" 
                width={180}
                height={180}
                className="mx-auto md:mx-0"
              />
            </motion.div>
          </div>
          <div className="md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="h2-large mb-8">WHO IS ARMOROCK?</h2>
              <p className="text-lg mb-8">
                We are an innovative polymer concrete company that provides corrosion-resistant, 
                sustainable, and long-lasting solutions to common issues within the waste water 
                industry. We are an innovative polymer concrete company that provides 
                corrosion-resistant, sustainable, and long-lasting solutions to common issues 
                within the waste water industry.
              </p>
              <p className="text-xl font-semibold mb-10 italic">
                Sustainable in Design. Proven in Performance. Trusted for the Future.
              </p>
              <Link href="/contact" className="btn btn-primary inline-block px-8 py-3">
                CONNECT WITH US
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
