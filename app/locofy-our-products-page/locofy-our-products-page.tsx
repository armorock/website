"use client";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "../../components/header";
import OurProductsSection from "../../components/our-products-section";
import LiftStationsSection from "../../components/lift-stations-section";
import CustomStructuresSection from "../../components/custom-structures-section";
import EngineeringDocsSection from "../../components/engineering-docs-section";
import Footer from "../../components/footer";
import MobileNav from "../../components/mobile-nav";

const LocofyOurProductsPage: NextPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 767); // md breakpoint
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    // Handle hash navigation when page loads
    const hash = window.location.hash;
    if (hash) {
      const sanitizedHash = hash.replace('#', '');
      // Increase timeout to ensure all content is loaded before scrolling
      setTimeout(() => {
        const element = document.querySelector(`[data-scroll-to='${sanitizedHash}']`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 1000);
    }
  }, []);

  const onFAQTextClick = useCallback(() => {
    router.push("/frequently-asked-questions-page");
  }, [router]);

  const onGetAQuoteButtonClick = useCallback(() => {
    router.push("/get-a-quote-page");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start gap-[3px] leading-[normal] tracking-[normal]">
      {/* Mobile Navigation - Only visible on small screens */}
      <div className="hidden md:block w-full">
        <MobileNav />
      </div>
      {/* Desktop Header - Only visible on md and up */}
      <div className="block md:hidden w-full">
        <Header onFAQTextClick={onFAQTextClick} />
      </div>
      <OurProductsSection />
      <section className="w-full overflow-hidden flex flex-col items-center justify-center py-12 px-[15px] text-center text-[22px] text-gray-100 font-open-sans mq450:pt-8 mq450:pb-8 mq450:box-border">
        <div className="w-full flex flex-row items-center justify-center flex-wrap content-start pt-0 px-0 pb-0.5 box-border gap-16 max-w-full sm:gap-8 xs:gap-6 xs:flex-col xs:items-center xs:w-auto xs:mx-auto">
          <div className="flex flex-col items-center justify-start gap-[38px] w-full max-w-[420px] sm:max-w-[300px] xs:max-w-[200px] xs:gap-5 xs:mb-6 xs:w-auto xs:mx-auto">
            <div className="w-full flex justify-center">
              <Image
                className="w-full h-auto max-w-full object-contain mb-0"
                loading="lazy"
                width={420}
                height={420}
                sizes="(max-width: 480px) 140px, (max-width: 640px) 200px, (max-width: 900px) 300px, 420px"
                alt="50 Year Warranty Logo"
                src="/50year-warranty-image.svg"
              />
            </div>
          </div>
          <section className="flex flex-col items-center justify-center gap-[15px] w-full max-w-[600px] sm:max-w-[500px] xs:max-w-[350px] text-left text-[22px] text-gray-100 font-open-sans xs:w-auto xs:mx-auto">
            <div className="w-full flex flex-col items-start justify-start gap-[20px]">
              <p className="m-0 w-full max-w-[600px] relative leading-[30px] inline-block md:text-center md:text-xl md:leading-relaxed sm:text-xl xs:text-lg text-justify text-center">
                Armorock Polymer Concrete Structures are built to last, creating a more sustainable future for the the waste water industry. We believe in the sustainability of our product, standing behind the importance of offering a solution that meets the needs of our stakeholders. All of our structures come with a 50-year corrosion warranty, creating peace of mind for municipalities that invest in our high-quality, long-lasting solution to corrosion.
              </p>
            </div>
          </section>
        </div>
      </section>
      <section
        className="self-stretch bg-gray-100 overflow-hidden flex flex-col items-end justify-center py-16 px-[53px] text-left text-6xl text-white font-oswald mq450:gap-[17px] mq675:pt-[42px] mq675:pb-[42px] mq675:box-border mq825:gap-[34px] mq825:pl-[26px] mq825:pr-[26px] mq825:box-border"
        data-scroll-to="manholesSection"
      >
        <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-[75px] mq450:gap-[19px] mq675:gap-[37px]">
          <div className="w-[655px] flex flex-col items-end justify-start gap-3.5 z-[1]">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] z-[1] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
              manholes
            </h2>
            <div className="self-stretch relative z-[0]">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dpgyWyWOLPs" 
                  title="Installation: Armorock Manholes" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <section className="w-[498px] flex flex-col items-start justify-center gap-9 z-[0] text-left text-[22px] text-white font-open-sans mq675:gap-[18px]">
            <p className="m-0 w-[537px] h-[243px] relative leading-[30px] whitespace-pre-wrap inline-block z-[1] mq450:text-lg mq450:leading-6">{`Armorock Manholes are the premiere corrosion-resistant option for various waste water systems across the US. Polymer concrete manholes have been proven to be the sustainable option in the waste water industry.  We produce manholes ranging from 48” to 192” and ensure that we meet custom job requirements with advanced machinery and technology. `}</p>
            <button
              className="cursor-pointer border-firebrick border-solid border-[3px] py-2 px-0 bg-firebrick w-[145px] h-[44.8px] box-border flex flex-row items-center justify-center whitespace-nowrap hover:bg-indianred hover:border-indianred hover:border-solid hover:hover:border-[3px] hover:box-border"
              onClick={onGetAQuoteButtonClick}
            >
              <span className="w-full text-xl leading-[21.5px] font-medium font-oswald text-white text-center block z-[1]">
                GET A QUOTE
              </span>
            </button>
          </section>
        </div>
      </section>
      <section
        className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-16 px-[53px] text-left text-6xl text-gray-100 font-oswald mq450:gap-[17px] mq675:pt-[42px] mq675:pb-[42px] mq675:box-border mq825:gap-[34px] mq825:pl-[26px] mq825:pr-[26px] mq825:box-border"
        data-scroll-to="rehabsSection"
      >
        <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-[75px] mq450:gap-[19px] mq675:gap-[37px]">
          <div className="w-[655px] flex flex-col items-end justify-start gap-3.5">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
              rehabilitation inserts
            </h2>
            <div className="self-stretch relative">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/aYxiLwCfNSM" 
                  title="Installation: Armorock Rehab Inserts" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <section className="w-[498px] flex flex-col items-start justify-start gap-[11.3px] text-left text-[22px] text-gray-100 font-open-sans">
            <p className="m-0 self-stretch h-60 relative leading-[30px] inline-block mq450:text-lg mq450:leading-6">
              Armorock Structural Rehabilitation Inserts combine the benefits of a corrosion resistant product with minimal excavation processes during installation. Polymer manholes are sleeved into existing precast concrete manholes, allowing municipalities to extend the life of their existing manholes without alternative fixes like liners, admixtures, and coatings.
            </p>
            <button
              className="cursor-pointer border-gray-100 border-solid border-[3px] py-2 px-0 bg-gray-100 w-[145px] h-[44.8px] box-border flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray hover:border-dimgray hover:border-solid hover:hover:border-[3px] hover:box-border"
              onClick={onGetAQuoteButtonClick}
            >
              <span className="w-full text-xl leading-[21.5px] font-medium font-oswald text-white text-center block z-[1]">
                GET A QUOTE
              </span>
            </button>
          </section>
        </div>
      </section>
      <LiftStationsSection />
      <CustomStructuresSection />
      <div className="hidden">
        <EngineeringDocsSection />
      </div>
      <Footer logo="/logo@2x.png" />
    </div>
  );
};

export default LocofyOurProductsPage;
