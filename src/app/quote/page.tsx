import type { Metadata } from 'next';
import QuoteForm from '@/components/ui/QuoteForm';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Get a Quote | Armorock',
  description: 'Request a quote for Armorock polymer concrete products for your next project.',
};

export default function QuotePage() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get a Quote</h1>
            <p className="text-lg">
              Ready to experience the benefits of Armorock polymer concrete in your next project? 
              Fill out the form to request a personalized quote from our team.
            </p>
            
            <div className="bg-gray-100 p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-bold">Why Choose Armorock?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[var(--primary)] font-bold mr-2">✓</span>
                  <span>Exceptional corrosion resistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] font-bold mr-2">✓</span>
                  <span>Over 100-year product lifespan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] font-bold mr-2">✓</span>
                  <span>Environmentally friendly materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] font-bold mr-2">✓</span>
                  <span>Lower lifetime cost compared to traditional concrete</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] font-bold mr-2">✓</span>
                  <span>Specialized engineering support</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
