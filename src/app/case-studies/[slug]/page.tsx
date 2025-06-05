import { prisma } from '@/lib/db/prisma';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = await getCaseStudy(params.slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Armorock',
      description: 'The requested case study could not be found.',
    };
  }
  
  return {
    title: `${caseStudy.title} | Armorock Case Studies`,
    description: caseStudy.summary,
  };
}

async function getCaseStudy(slug: string) {
  try {
    return await prisma.caseStudy.findUnique({
      where: {
        slug: slug
      }
    });
  } catch (error) {
    console.error('Error fetching case study:', error);
    return null;
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = await getCaseStudy(params.slug);
  
  if (!caseStudy) {
    notFound();
  }
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[var(--secondary)] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src={caseStudy.imageUrl || '/images/case-studies/default.jpg'} 
            alt={caseStudy.title} 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container-custom py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{caseStudy.title}</h1>
            <p className="text-xl mb-8">
              {caseStudy.summary}
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
            </div>
            
            <div className="mt-16">
              <Link 
                href="/case-studies" 
                className="inline-flex items-center text-[var(--primary)] font-bold hover:text-[var(--primary-dark)]"
              >
                <svg className="w-4 h-4 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                Back to All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            READY TO SOLVE YOUR INFRASTRUCTURE CHALLENGES?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team to discuss how Armorock's polymer concrete solutions 
            can benefit your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="btn btn-primary">
              REQUEST A QUOTE
            </Link>
            <Link href="/contact" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
