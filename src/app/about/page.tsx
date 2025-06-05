import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'About Us | Armorock',
  description: 'Learn about Armorock\'s mission, values and team dedicated to revolutionizing the waste water infrastructure industry.',
};

const AboutPage = () => {
  return (
    <div className="pt-12 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-[var(--secondary)]">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="mb-6">About Armorock</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Armorock is the world's largest manufacturer of polymer concrete structures for 
              corrosive environments.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="mb-8">Our Story</h2>
              <p className="text-lg mb-6">
                Armorock was founded with a mission to revolutionize the waste water industry by creating
                infrastructure that lasts longer, performs better, and reduces lifetime costs for municipalities.
              </p>
              <p className="text-lg mb-6">
                What began as a solution to combat the corrosive effects of hydrogen sulfide (H2S) gas in 
                sewer systems has grown into a comprehensive suite of polymer concrete products that 
                outperform traditional materials in the most demanding environments.
              </p>
              <p className="text-lg mb-8">
                Today, Armorock is recognized as an industry leader, with installations across North America that 
                demonstrate the superior performance and longevity of our polymer concrete solutions.
              </p>
              <Link href="/leadership" className="btn btn-primary">
                MEET OUR LEADERSHIP TEAM
              </Link>
              <p className="text-lg">
                Today, Armorock is the leading manufacturer of polymer concrete structures in North America,
                with installations across the United States, Canada, and beyond.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/images/about-company.jpg" 
                alt="Armorock manufacturing facility" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-center mb-16">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Quality',
                description: 'We are committed to manufacturing the highest quality polymer concrete products that exceed industry standards.'
              },
              {
                title: 'Innovation',
                description: 'We continuously research and develop new technologies to improve our products and processes.'
              },
              {
                title: 'Sustainability',
                description: 'Our products are designed to minimize environmental impact and provide sustainable infrastructure solutions.'
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-[var(--primary)]">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Can be expanded with actual team members */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="mb-16">Our Leadership Team</h2>
          
          <p className="text-lg mb-10 max-w-3xl mx-auto">
            Our experienced leadership team combines decades of expertise in engineering, 
            manufacturing, and business management to drive Armorock's continued growth and success.
          </p>
          
          <Link href="/about/team" className="btn btn-primary py-3 px-8">
            MEET OUR TEAM
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
