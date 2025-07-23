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
      <section className="w-[596px] flex flex-col items-end justify-start gap-5 max-w-full text-left text-[22px] text-black font-open-sans">
        <div className="w-[607px] h-[380.3px] flex flex-col items-start justify-start pt-[43.2px] px-0 pb-[0.1px] box-border relative gap-[79px] max-w-[102%] mq450:gap-5 mq450:pt-7 mq450:pb-5 mq450:box-border mq675:gap-[39px]">
          <div className="w-[607px] flex flex-row items-start justify-end py-0 px-[18px] box-border max-w-full">
            <h3 className="m-0 h-[210px] w-[528px] relative text-[length:inherit] leading-[35px] font-normal font-[inherit] inline-block shrink-0 mq450:text-lg mq450:leading-7">
              Going with an Armorock manhole, even though the base/risers are a
              little more for material, it ends up being cheaper once you
              consider the coating that’s required on the concrete manholes and
              then the additional bypass time needed for this process. And given
              the issues with coatings, it really makes more sense to go with an
              Armorock manhole.
            </h3>
          </div>
          <i className="w-[581px] h-12 relative text-xl leading-[35px] inline-block text-right mq450:text-base mq450:leading-7">
            Armorock Customer, Phoenix, AZ
          </i>
          <Image
            className="w-[65px] absolute !!m-[0 important] top-[0px] left-[0px] max-h-full object-cover z-[1]"
            loading="lazy"
            width={65}
            height={51}
            sizes="100vw"
            alt=""
            src="/rectangle-22@2x.png"
          />
          <Image
            className="w-[65px] absolute !!m-[0 important] top-[249.1px] left-[542px] max-h-full object-contain z-[1]"
            loading="lazy"
            width={65}
            height={51}
            sizes="100vw"
            alt=""
            src="/rectangle-22@2x.png"
          />
        </div>
        <button
          className="cursor-pointer border-firebrick border-solid border-[3px] py-[9px] px-3 bg-firebrick w-auto min-w-[234.1px] h-[50px] box-border flex flex-row items-center justify-center hover:bg-indianred hover:border-indianred hover:border-solid hover:hover:border-[3px] hover:box-border"
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
