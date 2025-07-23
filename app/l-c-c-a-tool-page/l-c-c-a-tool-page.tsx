"use client";
import type { NextPage } from "next";
import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CTASection from "../../components/c-t-a-section";
import ToolSection from "../../components/tool-section";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MobileNav from "../../components/mobile-nav";

const LCCAToolPage: NextPage = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 767); // Use the md breakpoint (767px)
    };
    
    // Initial check
    checkIfMobile();
    
    // Listen for window resize events
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const onLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/locofy-about-us-page");
  }, [router]);

  const onOurProductsTextClick = useCallback(() => {
    router.push("/locofy-our-products-page");
  }, [router]);

  const onLifeCycleCostClick = useCallback(() => {
    router.push("/l-c-c-a-tool-page");
  }, [router]);

  const onConnectWithUsClick = useCallback(() => {
    router.push("/connect-with-us-page");
  }, [router]);

  const onCareersTextClick = useCallback(() => {
    router.push("/careers");
  }, [router]);

  const onFAQTextClick = useCallback(() => {
    router.push("/frequently-asked-questions-page");
  }, [router]);

  const onGetAQuoteButtonClick = useCallback(() => {
    router.push("/get-a-quote-page");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-center justify-start bg-[url('/hero-lcca.png')] bg-cover bg-no-repeat bg-[top] text-left text-6xl text-gray-100 font-oswald">
        {/* Mobile Navigation - Only visible on small screens (exact same as careers page) */}
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
            Life cycle Cost analysis
          </h1>
          <h1 className="m-0 max-w-[755px] self-end relative text-[length:inherit] leading-[75px] uppercase font-medium font-[inherit] text-right flex items-center md:text-5xl md:leading-[60px] md:w-full sm:text-4xl sm:leading-[45px] sm:w-full">
            <span className="w-full text-right">
              armorock products ensure sustainability of budgets{` and `}vital
              infrastructure.
            </span>
          </h1>
        </div>
      </section>
      <CTASection />
      <ToolSection />
      <Footer logo="/logo-2@2x.png" />
    </div>
  );
};

export default LCCAToolPage;