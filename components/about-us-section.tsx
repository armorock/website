"use client";
import type { NextPage } from "next";
import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "./header";
import MobileNav from "./mobile-nav";

export type AboutUsSectionType = {
  className?: string;
};

const AboutUsSection: NextPage<AboutUsSectionType> = ({ className = "" }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 767); // Use the md breakpoint (767px) like the careers page
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
    <main
      className={`self-stretch flex flex-col items-center justify-start gap-[15px] bg-[url('/hero-about-us.png')] bg-cover bg-no-repeat bg-[top] text-left text-6xl text-gray-100 font-oswald ${className}`}
    >
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
      <div className="self-stretch flex flex-col justify-start pt-0 px-[45px] pb-[45px] gap-[15px] lg:pl-[30px] lg:pr-[30px] sm:px-4 sm:pb-6 md:pb-7 md:box-border md:pt-0 sm:pt-0 md:-mt-2 sm:-mt-4">
        <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] md:text-5xl md:leading-[70px] sm:text-4xl sm:leading-[50px] md:mt-0 sm:mt-0">
          about us
        </h2>
        <div className="self-stretch flex flex-col items-start justify-start gap-[50px] text-right md:gap-[25px] sm:gap-[20px] h-auto sm:h-auto md:h-auto">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[30px] uppercase font-medium font-[inherit] md:text-5xl md:leading-6 sm:text-4xl sm:leading-[18px]">
            Sustainable in Design.
          </h2>
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[30px] uppercase font-medium font-[inherit] md:text-5xl md:leading-6 sm:text-4xl sm:leading-[18px]">
            proven in performance.
          </h2>
          <h2 className="m-0 self-stretch relative text-[75px] leading-[30px] uppercase font-bold font-[inherit] md:text-6xl md:leading-6 sm:text-[35px] sm:leading-[17px] whitespace-nowrap mb-8 sm:mb-4 md:mb-5">
            trusted for the future.
          </h2>
        </div>
      </div>
    </main>
  );
};

export default AboutUsSection;
