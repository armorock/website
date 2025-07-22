"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MobileNav from "./mobile-nav";

export type LandingPageSection1Type = {
  className?: string;
};

const LandingPageSection1: NextPage<LandingPageSection1Type> = ({
  className = "",
}) => {
  const router = useRouter();

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
    <section
      className={`self-stretch flex flex-col items-center justify-start gap-[39px] bg-[url('/hero-landing.png')] bg-cover bg-no-repeat bg-[top] text-center text-[50px] font-oswald md:bg-fixed mq675:gap-[19px] ${className}`}
    >
      {/* Mobile Navigation - Only visible on small screens */}
      <div className="hidden md:block w-full">
        <MobileNav />
      </div>
      
      {/* Desktop Header - Hidden on mobile */}
      <header className="self-stretch md:hidden flex flex-row items-start justify-between py-[15px] px-[25px] top-[0] z-[99] sticky text-left text-[40px] text-gray-100 font-oswald bg-transparent">
        <div className="flex-1 flex flex-row items-center justify-between flex-wrap content-center gap-x-0 gap-y-5">
          <div
            className="h-20 w-[263px] flex flex-row items-end justify-start gap-[5px] cursor-pointer"
            onClick={onLogoContainerClick}
          >
            <img
              className="w-[77px] relative max-h-full object-cover"
              width={77}
              height={72}
              alt="Armorock Logo"
              src="/logo-image@2x.png"
            />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
              <div className="flex flex-col items-start justify-start">
                <h2 className="m-0 w-[181px] h-12 relative text-[length:inherit] leading-[48px] uppercase font-medium font-[inherit] inline-block">
                  Armorock
                </h2>
                <h3 className="m-0 w-[181px] h-[27px] relative text-[23px] leading-[27px] uppercase font-medium font-[inherit] text-black text-justify inline-block">
                  polymer concrete
                </h3>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-end flex-wrap content-center gap-[42px] text-right text-xl text-black mq675:gap-[21px]">
            <h3
              className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer drop-shadow-md"
              onClick={onAboutUsTextClick}
            >
              About Us
            </h3>
            <h3
              className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer drop-shadow-md"
              onClick={onOurProductsTextClick}
            >
              Our Products
            </h3>
            <h3
              className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer drop-shadow-md"
              onClick={onLifeCycleCostClick}
            >
              Life Cycle Cost Analysis
            </h3>
            <h3
              className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer drop-shadow-md"
              onClick={onConnectWithUsClick}
            >
              Connect With Us
            </h3>
            <h3
              className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer drop-shadow-md"
              onClick={onCareersTextClick}
            >
              Careers
            </h3>
            <h3
              className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer drop-shadow-md"
              onClick={onFAQTextClick}
            >
              FAQ
            </h3>
            <button
              className="cursor-pointer border-gray-100 border-solid border-[3px] py-[9px] px-[22px] bg-gray-200 h-[50px] w-[146px] box-border flex flex-row items-center justify-center hover:bg-gainsboro-300 hover:border-dimgray hover:border-solid hover:hover:border-[3px] hover:box-border"
              onClick={onGetAQuoteButtonClick}
            >
              <div className="relative text-xl leading-6 font-oswald text-black text-right">
                GET A QUOTE
              </div>
            </button>
          </div>
        </div>
      </header>
      
      {/* Hero content */}
      <div className="pt-8 md:pt-20">
        <img
          className="w-[391.7px] max-h-full md:w-[250px] sm:w-[200px] xs:w-[180px]"
          width="391.7"
          height="317"
          alt="Armorock Logo"
          src="/Stacked(Logo+Armorock+PolymerConcrete).svg"
        />
      </div>

      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-x-4 gap-y-[40px] md:gap-y-[24px] px-4">
        <h2 className="m-0 relative text-[length:inherit] leading-[30px] uppercase font-medium font-[inherit] md:text-3xl md:leading-7 sm:text-2xl xs:text-xl xs:leading-6 mq450:text-xl">
          {`Sustainable `}in Design.
        </h2>
        <h2 className="m-0 relative text-[length:inherit] leading-[30px] uppercase font-medium font-[inherit] md:text-3xl md:leading-7 sm:text-2xl xs:text-xl xs:leading-6 mq450:text-xl">
          proven in performance.
        </h2>
        <h2 className="m-0 relative text-[65px] leading-[30px] uppercase font-bold font-[inherit] md:text-[40px] sm:text-[32px] xs:text-[28px] mq450:text-[26px] mq450:leading-7">
          {`trusted `}for the future.
        </h2>
      </div>
      
      <div className="flex flex-row items-center justify-center pt-10 px-0 pb-20 gap-[38px] md:flex-col md:gap-4 sm:pb-12 xs:pb-10">
        <button
          className="cursor-pointer border-gray-100 border-solid border-[3px] py-[9px] pl-[23px] pr-[22px] bg-gray-100 h-[50px] w-[145px] md:w-[200px] box-border flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray hover:border-dimgray hover:border-solid hover:hover:border-[3px] hover:box-border"
          onClick={onGetAQuoteButtonClick}
        >
          <div className="relative text-xl leading-6 font-medium font-oswald text-white text-center z-[1]">
            GET A QUOTE
          </div>
        </button>
        <button
          className="cursor-pointer border-gray-100 border-solid border-[3px] py-[9px] px-2 bg-gray-100 h-[50px] w-40 md:w-[200px] box-border flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray hover:border-dimgray hover:border-solid hover:hover:border-[3px] hover:box-border"
          onClick={onConnectWithUsClick}
        >
          <div className="relative text-xl leading-6 font-medium font-oswald text-white text-center z-[1]">
            CONNECT WITH US
          </div>
        </button>
      </div>
    </section>
  );
};

export default LandingPageSection1;
