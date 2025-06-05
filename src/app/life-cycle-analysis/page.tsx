'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function LifeCycleAnalysisPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[var(--secondary)] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/images/hero-lifecycle.jpg" 
            alt="Life Cycle Analysis" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container-custom py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">LIFE CYCLE ANALYSIS</h1>
            <p className="text-xl mb-8">
              Understanding the long-term economic and environmental impact of polymer concrete versus traditional materials.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">THE TRUE COST OF INFRASTRUCTURE</h2>
            <p className="max-w-3xl mx-auto text-lg">
              A comprehensive life cycle analysis considers not just initial costs, but maintenance, 
              replacement, environmental impact, and total cost of ownership over decades of service.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">BEYOND INITIAL INSTALLATION</h3>
              <p className="mb-5">
                Traditional concrete structures in wastewater environments typically require significant 
                maintenance or replacement within 15-25 years due to hydrogen sulfide gas corrosion. 
                This creates an ongoing cycle of costs and disruption.
              </p>
              <p className="mb-5">
                Polymer concrete structures from Armorock are designed for a 100+ year service life, 
                dramatically reducing the total cost of ownership while minimizing environmental impact
                from repeated manufacturing and installation processes.
              </p>
              <p>
                Our life cycle analysis provides a comprehensive view of these long-term benefits, 
                helping engineers, municipalities, and other stakeholders make informed infrastructure decisions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 overflow-hidden"
            >
              <Image 
                src="/images/lifecycle-comparison.jpg" 
                alt="Lifecycle Comparison" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Comparison Charts Section */}
      <section className="bg-gray-100 py-24">
        <div className="container-custom">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            COMPARATIVE ANALYSIS
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Cost Comparison */}
            <motion.div 
              className="bg-white shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-center text-[var(--secondary)]">
                LIFE CYCLE COST COMPARISON
              </h3>
              <div className="relative h-80 mb-6">
                <Image 
                  src="/images/cost-chart.jpg" 
                  alt="Cost Comparison Chart" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p className="text-center">
                While initial costs may be higher, the extended service life of polymer concrete 
                leads to significantly lower total costs over 50-100 years.
              </p>
            </motion.div>
            
            {/* Environmental Impact */}
            <motion.div 
              className="bg-white shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-center text-[var(--secondary)]">
                ENVIRONMENTAL IMPACT COMPARISON
              </h3>
              <div className="relative h-80 mb-6">
                <Image 
                  src="/images/environmental-chart.jpg" 
                  alt="Environmental Impact Chart" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p className="text-center">
                Armorock polymer concrete manufacturing produces 75% less carbon emissions than 
                traditional Portland cement concrete, with additional environmental benefits from 
                fewer replacements.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-white shadow-lg p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-center text-[var(--secondary)]">
              SERVICE LIFE COMPARISON IN H₂S ENVIRONMENTS
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-700 border-b border-gray-200 text-left">Material</th>
                    <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-700 border-b border-gray-200 text-left">Average Service Life</th>
                    <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-700 border-b border-gray-200 text-left">Replacements Needed (100 years)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 px-6 border-b border-gray-200 text-sm">Traditional Concrete</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-sm">15-25 years</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-sm">4-6 replacements</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 border-b border-gray-200 text-sm">PVC Lined Concrete</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-sm">25-40 years</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-sm">2-4 replacements</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 border-b border-gray-200 text-sm">Epoxy Coated Concrete</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-sm">20-30 years</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-sm">3-5 replacements</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 border-b border-gray-200 text-sm font-bold text-[var(--primary)]">Armorock Polymer Concrete</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-sm font-bold text-[var(--primary)]">100+ years</td>
                    <td className="py-4 px-6 border-b border-gray-200 text-sm font-bold text-[var(--primary)]">0 replacements</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-24">
        <div className="container-custom">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            THE ARMOROCK ADVANTAGE
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'EXTENDED LIFESPAN',
                description: '100+ year design life compared to 15-25 years for traditional concrete in aggressive environments.',
                icon: '⏱️'
              },
              {
                title: 'REDUCED MAINTENANCE',
                description: 'Virtually maintenance-free design saves ongoing inspection and repair costs.',
                icon: '🔧'
              },
              {
                title: 'ENVIRONMENTAL BENEFITS',
                description: '75% reduction in carbon emissions compared to traditional concrete manufacturing.',
                icon: '🌿'
              },
              {
                title: 'LOWER TOTAL COST',
                description: 'Significant savings in total cost of ownership despite higher initial investment.',
                icon: '💰'
              },
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 text-[var(--primary)]">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">
                  {benefit.title}
                </h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Analysis Methodology */}
      <section className="bg-[var(--secondary)] text-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">OUR ANALYSIS METHODOLOGY</h2>
            <p className="text-lg mb-6">
              Our life cycle analysis follows industry-standard methodology, incorporating:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-3">
              <li>Initial material and installation costs</li>
              <li>Maintenance and repair costs over time</li>
              <li>Replacement costs and frequency</li>
              <li>Environmental impact of manufacturing, installation, and replacement</li>
              <li>Social costs of infrastructure failure and replacement</li>
              <li>End-of-life considerations and disposal</li>
            </ul>
            <p className="text-lg mb-8">
              This comprehensive approach ensures that all relevant factors are considered when 
              evaluating infrastructure options, providing a true picture of long-term value.
            </p>
            <div className="text-center">
              <Link href="/contact" className="btn bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]">
                REQUEST A CUSTOM ANALYSIS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              READY TO CONSIDER POLYMER CONCRETE?
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Our team can provide a detailed life cycle cost analysis for your specific project, 
              demonstrating the long-term value of Armorock polymer concrete solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/quote" className="btn btn-primary">
                REQUEST A QUOTE
              </Link>
              <Link href="/contact" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300">
                CONTACT OUR EXPERTS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
