"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import Header from "./header";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: NextPage<HeroSectionType> = ({ className = "" }) => {
  const onOurProductContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='ourProductSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onInstallationContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='installationSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onIndustryStandardsContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='industryStandardsSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className={`self-stretch bg-white flex flex-col items-center justify-start pt-0 px-0 pb-16 gap-2 text-left text-6xl text-gray-100 font-oswald mq675:pb-[42px] mq675:box-border ${className}`}
    >
      <Header
        headerFlexWrap="wrap"
        headerAlignContent="flex-start"
        headerTop="0"
        headerPosition="sticky"
      />
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[72px] mq675:pl-9 mq675:pr-9 mq675:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] whitespace-pre-wrap mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
            {" "}
            frequently asked questions
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[60px] text-center text-3xl mq675:gap-[30px]">
            <div
              className="w-[383px] flex flex-col items-center justify-start gap-8 cursor-pointer mq450:gap-4"
              onClick={onOurProductContainerClick}
            >
              <Image
                className="w-[400px] relative max-h-full object-cover"
                loading="lazy"
                width={400}
                height={370}
                sizes="100vw"
                alt=""
                src="/cover-image@2x.png"
              />
              <h2 className="m-0 relative text-[length:inherit] leading-[35px] uppercase font-medium font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
                our product
              </h2>
            </div>
            <div
              className="w-[366px] flex flex-col items-center justify-start gap-7 cursor-pointer"
              onClick={onInstallationContainerClick}
            >
              <Image
                className="w-[400px] relative max-h-full object-cover"
                width={400}
                height={370}
                sizes="100vw"
                alt=""
                src="/cover-image-1@2x.png"
              />
              <h2 className="m-0 relative text-[length:inherit] leading-[35px] uppercase font-medium font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
                installation
              </h2>
            </div>
            <div
              className="w-[354px] flex flex-col items-center justify-start gap-8 cursor-pointer mq450:gap-4"
              onClick={onIndustryStandardsContainerClick}
            >
              <Image
                className="w-[400px] relative max-h-full object-cover"
                width={400}
                height={370}
                sizes="100vw"
                alt=""
                src="/cover-image-2@2x.png"
              />
              <h2 className="m-0 relative text-[length:inherit] leading-[35px] uppercase font-medium font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
                Industry standards
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
