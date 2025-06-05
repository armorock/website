'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Product data (this would ideally come from a database via an API)
const products = [
  {
    id: 'manholes',
    name: 'Manholes',
    description: 'Armorock polymer concrete manholes offer superior corrosion resistance, extending service life in harsh wastewater environments. Their lightweight design facilitates easier installation while maintaining exceptional structural strength.',
    features: [
      'Corrosion resistant in harsh H2S environments',
      'Lightweight - 30% lighter than traditional concrete',
      'Longer service life - 100+ year design',
      'Lower lifetime cost of ownership',
      'Multiple base configurations'
    ],
    imageUrl: '/images/products/manhole.jpg',
    specs: 'Standard sizes from 48" to 72" diameter'
  },
  {
    id: 'structures',
    name: 'Structures',
    description: 'Armorock structures are designed for durability in extreme environments. Our custom structures include pump stations, wetwells, and specialized containment solutions engineered for maximum performance.',
    features: [
      'Custom designs to meet project requirements',
      'Superior structural integrity',
      'Reduced installation time',
      'Resistant to chemical attack',
      'Environmentally sustainable solution'
    ],
    imageUrl: '/images/products/structure.jpg',
    specs: 'Custom dimensions based on project requirements'
  },
  {
    id: 'junction-boxes',
    name: 'Junction Boxes',
    description: 'Armorock junction boxes provide reliable access points in wastewater infrastructure, with unmatched resistance to hydrogen sulfide gas and other corrosive elements.',
    features: [
      'Highly resistant to chemical corrosion',
      'Available in multiple configurations',
      'Reduced maintenance requirements',
      'Compatible with existing infrastructure',
      'Extended service life'
    ],
    imageUrl: '/images/products/junction-box.jpg',
    specs: 'Available in standard and custom sizes'
  }
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('manholes');
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const activeProduct = products.find(product => product.id === activeTab) || products[0];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[var(--secondary)] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/images/hero-products.jpg" 
            alt="Armorock Polymer Concrete Products" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container-custom py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">OUR PRODUCTS</h1>
            <p className="text-xl mb-8">
              Designed for performance. Built to last. Engineered for the most demanding environments.
            </p>
            <Link href="/quote" className="btn btn-primary">
              REQUEST A QUOTE
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Product Overview */}
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
            <h2 className="text-4xl font-bold mb-6">POLYMER CONCRETE SOLUTIONS</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Armorock offers a comprehensive range of polymer concrete products engineered 
              for superior performance in the most corrosive environments. Our products combine 
              exceptional strength with unmatched durability.
            </p>
          </motion.div>
          
          {/* Product Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => handleTabChange(product.id)}
                className={`px-6 py-3 font-bold transition-all duration-200 uppercase text-sm
                  ${activeTab === product.id 
                    ? 'bg-[var(--primary)] text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                `}
              >
                {product.name}
              </button>
            ))}
          </div>
          
          {/* Product Details */}
          <motion.div 
            key={activeProduct.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Product Image */}
            <div className="relative h-96 bg-gray-100 overflow-hidden">
              <Image 
                src={activeProduct.imageUrl} 
                alt={activeProduct.name} 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            {/* Product Info */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-[var(--primary)]">
                {activeProduct.name}
              </h3>
              <p className="mb-6 text-lg">
                {activeProduct.description}
              </p>
              <h4 className="text-xl font-bold mb-3 text-[var(--secondary)]">
                KEY FEATURES:
              </h4>
              <ul className="mb-6 list-none">
                {activeProduct.features.map((feature, index) => (
                  <li key={index} className="mb-2 flex items-start">
                    <span className="text-[var(--primary)] mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 font-bold">
                SPECIFICATIONS: {activeProduct.specs}
              </p>
              <div className="mt-8">
                <Link href="/quote" className="btn btn-primary mr-4">
                  REQUEST A QUOTE
                </Link>
                <Link href="/contact" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300">
                  CONTACT SALES
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="bg-gray-100 py-24">
        <div className="container-custom">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            WHY CHOOSE ARMOROCK?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'CORROSION RESISTANT',
                description: 'Our polymer concrete products are engineered to withstand the most aggressive H2S environments, providing decades of service without deterioration.',
                icon: '🛡️'
              },
              {
                title: 'LONGER SERVICE LIFE',
                description: 'With a 100+ year design life, Armorock products significantly outlast traditional materials, reducing replacement costs and infrastructure downtime.',
                icon: '⏱️'
              },
              {
                title: 'SUSTAINABILITY',
                description: 'Our manufacturing process reduces carbon emissions by 75% compared to traditional concrete production, supporting environmental responsibility.',
                icon: '🌿'
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[var(--secondary)]">
                  {benefit.title}
                </h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-[var(--primary)] text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              READY TO SOLVE YOUR CORROSION CHALLENGES?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our team of experts today to discuss how Armorock's polymer concrete solutions 
              can benefit your next infrastructure project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/quote" className="btn bg-white text-[var(--primary)] hover:bg-gray-200">
                REQUEST A QUOTE
              </Link>
              <Link href="/case-studies" className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)]">
                VIEW CASE STUDIES
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
