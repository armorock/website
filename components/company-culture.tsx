"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";

export type CompanyCultureType = {
  className?: string;
};

const CompanyCulture: NextPage<CompanyCultureType> = ({ className = "" }) => {
  const onConnectWithUsButtonClick = useCallback(() => {
    window.open(
      "https://paycomonline.net/v4/ats/web.php/jobs?clientkey=FA5DC105028F0075FCBC55C96E060882"
    );
  }, []);

  return (
    <main
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-col items-center justify-start py-12 px-[45px] text-center text-6xl text-white font-oswald mq675:pt-[31px] mq675:pb-[31px] mq675:box-border mq825:pl-[22px] mq825:pr-[22px] mq450:px-4 mq450:py-8 mq825:box-border ${className}`}
    >
      <div className="w-full max-w-[1440px] flex flex-col items-center justify-center gap-8 mq675:gap-4">
        <div className="w-full max-w-[806px] flex flex-col items-center justify-start gap-4 mq825:max-w-[90%] mq450:w-full">
          <Image
            className="w-[106px] relative max-h-full object-cover"
            loading="lazy"
            width={106}
            height={112}
            sizes="100vw"
            alt=""
            src="/logo-image@2x.png"
          />
          <h2 className="m-0 w-full relative text-[length:inherit] leading-[60px] uppercase font-medium font-[inherit] inline-block text-center mq825:text-5xl mq825:leading-[48px] mq675:max-w-full mq450:text-4xl mq450:leading-9">
            why work at armorock?
          </h2>
        </div>
        <section className="w-full max-w-[1300px] flex flex-col items-center justify-start gap-[15px] text-center text-[22px] text-white font-open-sans mq825:w-full mq675:px-4 mq450:w-full">
          <h3 className="m-0 w-full max-w-[1280px] px-4 relative text-[length:inherit] leading-[30px] font-normal font-[inherit] inline-block mq825:text-xl mq825:leading-7 mq825:max-w-[95%] mq675:text-lg mq675:leading-6 mq675:max-w-[95%] mq450:text-lg mq450:leading-6 mq450:px-2 mq450:max-w-full">{`At Armorock, our goal is to drive the future of sustainable infrastructure with high-quality, innovative solutions that create lasting value. This mission is possible through our QUESST core values: Quality, Unified, Efficient, Safe, Sustainable, Transparent. We not only encourage our team members to authentically embody these values, but create a culture where passion, excitement and hard work allow us to thrive as an organization. At Armorock, we strive for continuous growth and creating opportunities for our team to take part in a sustainable, proven, and trusted future. `}</h3>
          <button
            className="cursor-pointer border-firebrick border-solid border-[3px] py-[9px] px-6 mt-4 bg-firebrick w-auto min-w-[160px] h-[50px] box-border flex flex-row items-center justify-center hover:bg-indianred hover:border-indianred hover:border-solid hover:hover:border-[3px] hover:box-border md:w-auto md:max-w-[170px] md:px-3 sm:max-w-[155px] sm:px-2 mq450:mx-auto"
            onClick={onConnectWithUsButtonClick}
          >
            <span className="text-xl leading-6 font-medium font-oswald text-white text-center w-full [text-shadow:1px_0_0_#bb2034,_0_1px_0_#bb2034,_-1px_0_0_#bb2034,_0_-1px_0_#bb2034]">
              JOIN OUR TEAM
            </span>
          </button>
        </section>
      </div>
    </main>
  );
};

export default CompanyCulture;
