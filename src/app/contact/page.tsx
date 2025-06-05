import type { Metadata } from 'next';
import ContactForm from '@/components/ui/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact Us | Armorock',
  description: 'Get in touch with Armorock for all your polymer concrete needs.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="h-6 w-6 text-[var(--primary)]" />,
      title: 'Our Location',
      details: ['123 Main Street', 'Boulder City, NV 89005', 'United States'],
    },
    {
      icon: <FaPhone className="h-6 w-6 text-[var(--primary)]" />,
      title: 'Phone',
      details: ['+1 (702) 293-6800'],
    },
    {
      icon: <FaEnvelope className="h-6 w-6 text-[var(--primary)]" />,
      title: 'Email',
      details: ['info@armorock.com'],
    },
  ];

  return (
    <div className="py-16">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Connect With Us</h1>
        <p className="text-lg text-center max-w-2xl mx-auto mb-16">
          Have questions about our polymer concrete products? Want to learn more about how Armorock can
          benefit your next project? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-10">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-lg">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
