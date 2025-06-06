import Link from 'next/link';
import Image from 'next/image';
import { HERO, LAYOUT, BUTTONS, TYPOGRAPHY } from '@/styles';

export default function Home() {
  return (
    <>
      {/* Hero Section with background image that shows through the transparent header */}
      <section className={HERO.section}
        style={{ 
          backgroundImage: 'url("/images/Landing Page - Background 1.webp")'
        }}>
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30"></div>
        
        {/* Main hero content */}
        <div className={`${LAYOUT.container} h-full flex flex-col justify-center items-start relative z-10 text-white`}>
          <div className="max-w-4xl mt-8">
            <h1 className={`${TYPOGRAPHY.headingLg} mb-6 leading-tight`}>
              Sustainable in Design.<br />
              <span className="block mt-2">Proven in Performance.</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-10 pr-4">
              Armorock polymer concrete delivers unmatched durability and corrosion resistance in the most challenging wastewater environments.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/products" className="btn btn-outline text-base md:text-lg px-8 py-3 border-3">
                EXPLORE PRODUCTS
              </Link>
              <Link href="/quote" className="btn btn-primary text-base md:text-lg px-8 py-3">
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
