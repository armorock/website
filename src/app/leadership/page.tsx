'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Leadership data (this would ideally come from a database via an API)
const leadershipTeam = [
  {
    id: 'ceo',
    name: 'John Anderson',
    title: 'Chief Executive Officer',
    bio: 'John has over 25 years of experience in the concrete and polymer industries. Under his leadership, Armorock has grown to become the largest polymer concrete manufacturer in the United States. John holds an MBA from Wharton and a degree in Civil Engineering from MIT.',
    imageUrl: '/images/team/john-anderson.jpg',
    linkedIn: 'https://www.linkedin.com/'
  },
  {
    id: 'coo',
    name: 'Sarah Johnson',
    title: 'Chief Operations Officer',
    bio: 'With a background in industrial manufacturing and process optimization, Sarah oversees Armorock's production facilities and ensures operational excellence. She has been instrumental in scaling our production capacity while maintaining the highest quality standards.',
    imageUrl: '/images/team/sarah-johnson.jpg',
    linkedIn: 'https://www.linkedin.com/'
  },
  {
    id: 'cto',
    name: 'Michael Chen',
    title: 'Chief Technology Officer',
    bio: 'Michael leads Armorock's research and development initiatives, focusing on polymer concrete innovation and continuous product improvement. His team has developed several patented processes that have revolutionized the industry and reinforced Armorock's position as a market leader.',
    imageUrl: '/images/team/michael-chen.jpg',
    linkedIn: 'https://www.linkedin.com/'
  },
  {
    id: 'sales',
    name: 'David Reynolds',
    title: 'VP of Sales',
    bio: 'David brings over 15 years of experience in construction materials sales. He leads our national sales team and has been crucial in expanding Armorock's presence across new regional markets and introducing our solutions to key infrastructure projects.',
    imageUrl: '/images/team/david-reynolds.jpg',
    linkedIn: 'https://www.linkedin.com/'
  },
  {
    id: 'engineering',
    name: 'Amanda Torres',
    title: 'Director of Engineering',
    bio: 'Amanda oversees Armorock's engineering team, ensuring our products meet the highest standards of structural integrity and performance. Her expertise in materials science and structural engineering has been vital to developing our industry-leading polymer concrete solutions.',
    imageUrl: '/images/team/amanda-torres.jpg',
    linkedIn: 'https://www.linkedin.com/'
  },
  {
    id: 'sustainability',
    name: 'Robert Patel',
    title: 'Sustainability Officer',
    bio: 'Robert leads Armorock's sustainability initiatives, focusing on reducing our environmental impact and enhancing the eco-friendly aspects of our products. His work has been instrumental in documenting and improving the lifecycle benefits of polymer concrete.',
    imageUrl: '/images/team/robert-patel.jpg',
    linkedIn: 'https://www.linkedin.com/'
  }
];

// Board members data
const boardMembers = [
  {
    id: 'board-1',
    name: 'Eleanor Williams',
    title: 'Board Chairperson',
    organization: 'Former CEO, Global Infrastructure Solutions',
    imageUrl: '/images/team/eleanor-williams.jpg'
  },
  {
    id: 'board-2',
    name: 'Thomas Garcia',
    title: 'Board Member',
    organization: 'Managing Partner, Sustainable Ventures Capital',
    imageUrl: '/images/team/thomas-garcia.jpg'
  },
  {
    id: 'board-3',
    name: 'Linda Chao',
    title: 'Board Member',
    organization: 'Professor of Civil Engineering, Stanford University',
    imageUrl: '/images/team/linda-chao.jpg'
  },
  {
    id: 'board-4',
    name: 'James Wilson',
    title: 'Board Member',
    organization: 'Former Director, National Infrastructure Authority',
    imageUrl: '/images/team/james-wilson.jpg'
  }
];

export default function LeadershipTeamPage() {
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
            src="/images/hero-leadership.jpg" 
            alt="Armorock Leadership Team" 
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">OUR LEADERSHIP</h1>
            <p className="text-xl mb-8">
              Meet the experienced professionals driving innovation and excellence in polymer concrete solutions.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Leadership Overview */}
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
            <h2 className="text-4xl font-bold mb-6">EXECUTIVE LEADERSHIP</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Our leadership team brings decades of industry experience and a passion for innovation 
              to drive Armorock's mission of providing superior infrastructure solutions.
            </p>
          </motion.div>
          
          {/* Leadership Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={leader.id}
                className="bg-white border border-gray-200 overflow-hidden flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-80">
                  <Image 
                    src={leader.imageUrl} 
                    alt={leader.name} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                  {leader.linkedIn && (
                    <a 
                      href={leader.linkedIn} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors"
                      aria-label={`LinkedIn profile of ${leader.name}`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-1 text-[var(--secondary)]">
                    {leader.name}
                  </h3>
                  <div className="text-[var(--primary)] font-medium mb-4">{leader.title}</div>
                  <p className="flex-grow">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Vision Section */}
      <section className="bg-gray-100 py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">OUR VISION & VALUES</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">MISSION</h3>
                  <p>
                    To revolutionize infrastructure through innovative polymer concrete solutions that outlast, 
                    outperform, and reduce the environmental impact of traditional materials.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">VISION</h3>
                  <p>
                    To be the global leader in sustainable infrastructure materials, enabling communities 
                    to build lasting systems that withstand the test of time and environment.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">VALUES</h3>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start">
                      <span className="text-[var(--primary)] mr-2 font-bold">•</span>
                      <span><strong>Innovation:</strong> Continuously pushing the boundaries of what's possible in material science.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--primary)] mr-2 font-bold">•</span>
                      <span><strong>Sustainability:</strong> Committed to environmental responsibility in our products and operations.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--primary)] mr-2 font-bold">•</span>
                      <span><strong>Integrity:</strong> Maintaining the highest standards of honesty and transparency in all we do.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--primary)] mr-2 font-bold">•</span>
                      <span><strong>Excellence:</strong> Pursuing uncompromising quality in our products, service, and people.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative h-96"
            >
              <Image 
                src="/images/leadership-vision.jpg" 
                alt="Our Vision" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Board of Directors */}
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
            <h2 className="text-4xl font-bold mb-6">BOARD OF DIRECTORS</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Our board brings diverse expertise from infrastructure, sustainability, 
              and business leadership to guide Armorock's strategic direction.
            </p>
          </motion.div>
          
          {/* Board Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-72 w-72 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                    src={member.imageUrl} 
                    alt={member.name} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">
                  {member.name}
                </h3>
                <div className="text-[var(--primary)] font-medium mb-1">{member.title}</div>
                <div className="text-sm text-gray-600">{member.organization}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Culture */}
      <section className="bg-[var(--secondary)] text-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">OUR CULTURE</h2>
            <p className="text-xl mb-12">
              At Armorock, we foster a culture of innovation, collaboration, and excellence. 
              We believe in empowering our team members to push boundaries and continuously 
              improve our products and processes.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'INNOVATION',
                  description: 'We encourage creative thinking and problem-solving to drive advancements in polymer concrete technology.',
                  icon: '💡'
                },
                {
                  title: 'COLLABORATION',
                  description: 'We value teamwork and partnership, working together across departments and with customers.',
                  icon: '🤝'
                },
                {
                  title: 'GROWTH',
                  description: 'We invest in our team's development and provide opportunities for professional advancement.',
                  icon: '📈'
                }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">
                    {value.title}
                  </h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-24 bg-gray-100">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              JOIN OUR TEAM
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Interested in being part of our mission to revolutionize infrastructure with innovative 
              polymer concrete solutions? Explore career opportunities with Armorock.
            </p>
            <Link href="/careers" className="btn btn-primary">
              VIEW CURRENT OPENINGS
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
