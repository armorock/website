"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";

export type ToolSectionType = {
  className?: string;
};

const ToolSection: NextPage<ToolSectionType> = ({ className = "" }) => {
  const onConnectWithUsButtonClick = useCallback(() => {
    window.open(
      "https://drive.google.com/file/d/1i34N6YWBbNBRNp2fe9cfQgCAyFfTZOtU/view"
    );
  }, []);

  return (
    <main
      className={`self-stretch bg-white overflow-hidden flex flex-row items-center justify-center flex-wrap content-center py-16 px-[60px] box-border gap-x-[18px] gap-y-2.5 max-w-full text-center text-6xl font-oswald mq675:pt-[42px] mq675:pb-[42px] mq675:box-border mq825:pl-[30px] mq825:pr-[30px] mq825:box-border ${className}`}
    >
      <h2 className="m-0 w-[1200px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block shrink-0 mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
        {`the `}
        {`ARMOROCK `}difference
      </h2>
      <Image
        className="w-[600px] relative max-h-full object-cover"
        loading="lazy"
        width={600}
        height={458}
        sizes="100vw"
        alt=""
        src="/rectangle-21@2x.png"
      />
      <section className="w-full max-w-[596px] flex flex-col items-end justify-start gap-5 text-left text-[22px] text-black font-open-sans">
        <div className="w-full flex flex-col items-start justify-start pt-12 px-4 pb-4 box-border relative gap-6 mq450:pt-10 mq450:pb-3 mq450:px-3 mq675:gap-4">
          <div className="w-full relative">
            {/* Opening quote mark */}
            <Image
              className="w-[65px] absolute top-[-30px] left-[-20px] object-cover z-[1] md:w-[45px] sm:w-[35px] mq450:w-[30px] mq450:top-[-16px] mq450:left-[-15px]"
              loading="lazy"
              width={65}
              height={51}
              sizes="(max-width: 450px) 30px, (max-width: 639px) 35px, (max-width: 767px) 45px, 65px"
              alt="Opening quote"
              src="/rectangle-22@2x.png"
            />
            
            <div className="w-full pr-4 pl-16 md:pl-8 mq450:pl-8">
              <h3 className="m-0 w-full relative text-[length:inherit] leading-[35px] font-normal font-[inherit] md:text-xl mq675:text-lg mq450:text-base mq450:leading-6">
                Going with an Armorock manhole, even though the base/risers are a
                little more for material, it ends up being cheaper once you
                consider the coating that's required on the concrete manholes and
                then the additional bypass time needed for this process. And given
                the issues with coatings, it really makes more sense to go with an
                Armorock manhole.
              </h3>
            </div>
            
            {/* Closing quote mark */}
            <div className="w-full flex justify-end mt-3">
              <div className="relative">
                <Image
                  className="w-[65px] object-contain z-[1] md:w-[45px] sm:w-[35px] mq450:w-[30px] transform rotate-180"
                  loading="lazy"
                  width={65}
                  height={51}
                  sizes="(max-width: 450px) 30px, (max-width: 639px) 35px, (max-width: 767px) 45px, 65px"
                  alt="Closing quote"
                  src="/rectangle-22@2x.png"
                />
              </div>
            </div>
          </div>
          
          <i className="w-full text-xl leading-[35px] text-right pr-6 mq675:text-lg mq450:text-sm mq450:leading-6 mq450:pr-3">
            Armorock Customer, Phoenix, AZ
          </i>
        </div>
        <button
          className="cursor-pointer border-firebrick border-solid border-[3px] py-[9px] px-3 bg-firebrick w-auto min-w-[234.1px] h-[50px] box-border flex flex-row items-center justify-center hover:bg-indianred hover:border-indianred hover:border-solid hover:hover:border-[3px] hover:box-border mq450:px-2 mq450:min-w-[220px]"
          onClick={onConnectWithUsButtonClick}
        >
          <div className="relative text-xl leading-6 font-medium font-oswald text-white text-center whitespace-nowrap">
            CONDUCT YOUR OWN LCCA
          </div>
        </button>
      </section>
    </main>
  );
};

export default ToolSection;
