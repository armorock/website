"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
    window.open(
      "https://paycomonline.net/v4/ats/web.php/jobs?clientkey=FA5DC105028F0075FCBC55C96E060882"
    );
  }, []);

  const onFAQTextClick = useCallback(() => {
    router.push("/frequently-asked-questions-page");
  }, [router]);

  const onGetAQuoteButtonClick = useCallback(() => {
    router.push("/get-a-quote-page");
  }, [router]);

  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start gap-[39px] bg-[url('/hero-section11@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-[50px] font-oswald mq675:gap-[19px] ${className}`}
    >
      <header className="self-stretch flex flex-row items-start justify-between py-[15px] px-[25px] top-[0] z-[99] sticky text-left text-[40px] text-gray-100 font-oswald">
        <div className="flex-1 flex flex-row items-center justify-between flex-wrap content-center gap-x-0 gap-y-5">
          <div
            className="h-20 w-[263px] flex flex-row items-end justify-start gap-[5px] cursor-pointer"
            onClick={onLogoContainerClick}
          >
            <Image
              className="w-[77px] relative max-h-full object-cover"
              loading="lazy"
              width={77}
              height={72}
              sizes="100vw"
              alt=""
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
              className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer"
              onClick={onAboutUsTextClick}
            >
              About Us
            </h3>
            <h3
              className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer"
              onClick={onOurProductsTextClick}
            >
              Our Products
            </h3>
            <h3
              className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer"
              onClick={onLifeCycleCostClick}
            >
              Life Cycle Cost Analysis
            </h3>
            <h3
              className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer"
              onClick={onConnectWithUsClick}
            >
              Connect With Us
            </h3>
            <h3
              className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer"
              onClick={onCareersTextClick}
            >
              Careers
            </h3>
            <h3
              className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer"
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
      <Image
        className="w-[391.7px] max-h-full"
        width={391.7}
        height={317}
        sizes="100vw"
        alt=""
      />
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-x-4 gap-y-[68px]">
        <h2 className="m-0 relative text-[length:inherit] leading-[30px] uppercase font-medium font-[inherit] mq450:text-3xl mq450:leading-[18px] mq825:text-[40px] mq825:leading-6">
          {`Sustainable `}in Design.
        </h2>
        <h2 className="m-0 relative text-[length:inherit] leading-[30px] uppercase font-medium font-[inherit] mq450:text-3xl mq450:leading-[18px] mq825:text-[40px] mq825:leading-6">
          proven in performance.
        </h2>
        <h2 className="m-0 relative text-[65px] leading-[30px] uppercase font-bold font-[inherit] mq450:text-[39px] mq450:leading-[18px] mq825:text-[52px] mq825:leading-6">
          {`trusted `}for the future.
        </h2>
      </div>
      <div className="flex flex-row items-center justify-center pt-10 px-0 pb-20 gap-[38px] mq450:gap-[19px]">
        <button
          className="cursor-pointer border-gray-100 border-solid border-[3px] py-[9px] pl-[23px] pr-[22px] bg-gray-100 h-[50px] w-[145px] box-border flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray hover:border-dimgray hover:border-solid hover:hover:border-[3px] hover:box-border"
          onClick={onGetAQuoteButtonClick}
        >
          <div className="w-[145px] relative bg-gray-100 border-gray-100 border-solid border-[3px] box-border h-[50px] hidden" />
          <div className="w-[100px] relative text-xl leading-6 font-medium font-oswald text-white text-right inline-block z-[1]">
            GET A QUOTE
          </div>
        </button>
        <button
          className="cursor-pointer border-gray-100 border-solid border-[3px] py-[9px] pl-[9px] pr-2 bg-gray-100 h-[50px] w-40 box-border flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray hover:border-dimgray hover:border-solid hover:hover:border-[3px] hover:box-border"
          onClick={onConnectWithUsClick}
        >
          <div className="w-40 relative bg-gray-100 border-gray-100 border-solid border-[3px] box-border h-[50px] hidden" />
          <div className="w-[143px] relative text-xl leading-6 font-medium font-oswald text-white text-right inline-block z-[1]">
            CONNECT WITH US
          </div>
        </button>
      </div>
    </section>
  );
};

export default LandingPageSection1;
