'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Sample case study data (this would ideally come from a database via an API)
const caseStudies = [
  {
    id: 'cs-001',
    title: 'City of Las Vegas WasteWater System Upgrade',
    summary: 'How Armorock helped the City of Las Vegas overcome severe corrosion issues in their wastewater infrastructure.',
    imageUrl: '/images/case-studies/las-vegas.jpg',
    slug: 'las-vegas-wastewater-upgrade',
    category: 'Municipal',
    date: 'January 2023'
  },
  {
    id: 'cs-002',
    title: 'Desert Industrial Complex Solution',
    summary: 'Providing long-term corrosion resistance for a major industrial facility in challenging desert conditions.',
    imageUrl: '/images/case-studies/industrial.jpg',
    slug: 'desert-industrial-complex',
    category: 'Industrial',
    date: 'March 2023'
  },
  {
    id: 'cs-003',
    title: 'Coastal Municipal Infrastructure Reinforcement',
    summary: 'How coastal communities are using Armorock to combat salt water corrosion and extend infrastructure lifespan.',
    imageUrl: '/images/case-studies/coastal.jpg',
    slug: 'coastal-infrastructure-reinforcement',
    category: 'Municipal',
    date: 'May 2023'
  },
  {
    id: 'cs-004',
    title: 'Mountain Resort Wastewater Solution',
    summary: 'Implementing sustainable wastewater infrastructure in an environmentally sensitive mountain resort area.',
    imageUrl: '/images/case-studies/mountain-resort.jpg',
    slug: 'mountain-resort-wastewater-solution',
    category: 'Commercial',
    date: 'August 2023'
  },
  {
    id: 'cs-005',
    title: 'Highway Drainage System Renovation',
    summary: 'Upgrading an aging highway drainage system with corrosion-resistant polymer concrete structures.',
    imageUrl: '/images/case-studies/highway.jpg',
    slug: 'highway-drainage-renovation',
    category: 'Transportation',
    date: 'October 2023'
  },
  {
    id: 'cs-006',
    title: 'Urban Renewal Project',
    summary: 'Replacing deteriorated concrete infrastructure as part of a major urban renewal initiative.',
    imageUrl: '/images/case-studies/urban-renewal.jpg',
    slug: 'urban-renewal-project',
    category: 'Municipal',
    date: 'December 2023'
  }
];

export default function CaseStudiesPage() {
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
            src="/images/hero-case-studies.jpg" 
            alt="Armorock Case Studies" 
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">CASE STUDIES</h1>
            <p className="text-xl mb-8">
              Real-world applications of Armorock's polymer concrete solutions across diverse environments and challenges.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Case Studies Overview */}
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
            <h2 className="text-4xl font-bold mb-6">SUCCESS STORIES</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Explore how organizations across industries have solved their most challenging infrastructure 
              problems with Armorock's innovative polymer concrete solutions.
            </p>
          </motion.div>
          
          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="bg-white border border-gray-200 overflow-hidden flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-60">
                  <Image 
                    src={study.imageUrl} 
                    alt={study.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute bottom-0 left-0 bg-[var(--primary)] text-white px-4 py-2">
                    {study.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-gray-500 mb-2">{study.date}</div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--secondary)]">
                    {study.title}
                  </h3>
                  <p className="mb-6 flex-grow">{study.summary}</p>
                  <Link 
                    href={`/case-studies/${study.slug}`} 
                    className="text-[var(--primary)] font-bold hover:text-[var(--primary-dark)] uppercase text-sm flex items-center"
                  >
                    Read Full Case Study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Filter Section (static for now, would be functional with actual data) */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.h3 
              className="text-2xl font-bold mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              FILTER BY INDUSTRY
            </motion.h3>
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {['All', 'Municipal', 'Industrial', 'Commercial', 'Transportation'].map((category) => (
                <button 
                  key={category}
                  className={`px-5 py-2 text-sm font-bold transition-colors
                    ${category === 'All' 
                      ? 'bg-[var(--primary)] text-white' 
                      : 'bg-white text-gray-700 hover:bg-[var(--primary)] hover:text-white'}
                  `}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-[var(--secondary)] text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              READY TO CREATE YOUR OWN SUCCESS STORY?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Partner with Armorock to develop a customized solution for your infrastructure challenges.
            </p>
            <Link href="/contact" className="btn bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]">
              CONTACT OUR EXPERTS
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container-custom">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            WHAT OUR CLIENTS SAY
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Armorock's polymer concrete manholes have proven to be a game-changer for our municipal infrastructure. After years of battling corrosion with traditional concrete, we've seen zero degradation since installation.",
                author: "John Roberts",
                title: "City Infrastructure Manager",
                organization: "Las Vegas, NV"
              },
              {
                quote: "The total cost of ownership with Armorock products is significantly lower than traditional concrete. The initial investment pays for itself many times over through extended service life and reduced maintenance.",
                author: "Sarah Johnson",
                title: "Project Director",
                organization: "Urban Renewal Authority"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-100 p-8 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl text-[var(--primary)] absolute top-4 left-4 opacity-20">"</div>
                <div className="relative z-10">
                  <p className="italic mb-6 text-lg">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.title}</div>
                    <div className="text-[var(--primary)]">{testimonial.organization}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
