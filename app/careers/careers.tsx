"use client";
import type { NextPage } from "next";
import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/header";
import MobileNav from "../../components/mobile-nav";
import CompanyCulture from "../../components/company-culture";
import Footer from "../../components/footer";

const CareersPage: NextPage = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 767); // Use the md breakpoint (767px) like the landing page
    };
    
    // Initial check
    checkIfMobile();
    
    // Listen for window resize events
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const onFAQTextClick = useCallback(() => {
    router.push("/frequently-asked-questions-page");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-center justify-start bg-[url('/hero-careers.png')] bg-cover bg-no-repeat bg-[top] text-left text-6xl text-gray-100 font-oswald">
        {/* Mobile Navigation - Only visible on small screens */}
        <div className="hidden md:block w-full">
          <MobileNav />
        </div>
        
        {/* Desktop Header - Hidden on mobile */}
        <div className="w-full md:hidden">
          <Header
            headerFlexWrap="unset"
            headerAlignContent="unset"
            headerTop="0"
            headerPosition="sticky"
            onFAQTextClick={onFAQTextClick}
          />
        </div>
        <div className="self-stretch flex flex-col justify-start pt-0 px-[45px] pb-[38px] gap-[15px] lg:pl-[30px] lg:pr-[30px] sm:px-4 sm:pb-6 md:box-border">
          <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] text-left md:text-5xl md:leading-[80px] sm:text-4xl sm:leading-[60px]">
            armorock careers
          </h1>
          <h1 className="m-0 w-[781px] self-end relative text-[length:inherit] leading-[75px] uppercase font-medium font-[inherit] text-right flex items-center md:text-5xl md:leading-[60px] md:w-full sm:text-4xl sm:leading-[45px] sm:w-full">
            <span className="w-full text-right">
              <span>take part in the</span>
              <span className="text-firebrick"> future</span>
              <span>{` of `}</span>
              <span className="text-firebrick sm:block text-right">corrosion-resistant,</span>
              <span className="sm:hidden">{` `}</span>
              <span className="text-firebrick">sustainable</span>
              <span className="whitespace-pre-wrap">{` infrastructure.  `}</span>
            </span>
          </h1>
        </div>
      </section>
      <CompanyCulture />
      <Footer logo="/logo-2@2x.png" />
    </div>
  );
};

export default CareersPage;
