import type { NextPage } from "next";
import Image from "next/image";

export type AboutUsSection1Type = {
  className?: string;
};

const AboutUsSection1: NextPage<AboutUsSection1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[1100px] bg-gray-100 overflow-hidden shrink-0 flex flex-col items-center justify-start py-16 px-[100px] box-border gap-[25px] text-center text-6xl text-white font-oswald ${className}`}
    >
      <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit]">
        our mission
      </h2>
      <p className="m-0 w-[996px] h-[91px] relative text-[35px] leading-10 inline-block">
        {" "}
        At Armorock, we want to drive the future of sustainable infrastructure
        with high quality, innovative solutions that create lasting value.
      </p>
      <video className="w-[843px] h-[410px] relative" controls>
        <source src />
      </video>
      <div className="w-[598px] h-[124px] flex flex-row items-start justify-start gap-[20.2px]">
        <Image
          className="w-[117.8px] relative max-h-full"
          loading="lazy"
          width={117.8}
          height={124}
          sizes="100vw"
          alt=""
          src="/armorock-values-logo.svg"
        />
        <div className="h-28 w-[460px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
          <h2 className="m-0 w-[460px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block">
            armorock values
          </h2>
        </div>
      </div>
      <section className="w-[876px] h-[168px] flex flex-col items-end justify-start text-center text-[65px] text-firebrick font-oswald">
        <div className="w-[876px] h-[168px] flex flex-row items-start justify-end py-0 pl-0 pr-[2.4px] box-border">
          <div className="h-[168px] w-[873.6px] flex flex-row items-start justify-start gap-[25px] shrink-0">
            <h2 className="m-0 h-[168px] w-[124.6px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block">
              Q
            </h2>
            <h2 className="m-0 h-[168px] w-[124.6px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block">
              U
            </h2>
            <h2 className="m-0 h-[168px] w-[124.6px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block">
              E
            </h2>
            <h2 className="m-0 h-[168px] w-[125.4px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block">
              S
            </h2>
            <h2 className="m-0 h-[168px] w-[124.6px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block">
              S
            </h2>
            <h2 className="m-0 h-[168px] w-[124.6px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block">
              T
            </h2>
          </div>
        </div>
        <div className="w-[856px] h-[69px] flex flex-row items-start justify-start gap-[19px] shrink-0 z-[1] mt-[-69px] relative text-[25px] text-white">
          <div className="h-[69px] w-[131px] flex flex-col items-start justify-start py-0 pl-0 pr-[46px] box-border">
            <div className="w-[85px] h-[69px] relative leading-[30px] font-medium flex items-center justify-center">
              Quality
            </div>
          </div>
          <div className="h-[69px] w-[131px] flex flex-col items-start justify-start py-0 pl-0 pr-[45px] box-border">
            <div className="w-[86px] h-[69px] relative leading-[30px] font-medium flex items-center justify-center">
              Unified
            </div>
          </div>
          <div className="h-[69px] w-[131px] flex flex-col items-start justify-start py-0 pl-0 pr-[46px] box-border">
            <div className="w-[85px] h-[69px] relative leading-[30px] font-medium flex items-center justify-center">
              Efficient
            </div>
          </div>
          <div className="h-[69px] w-[111px] flex flex-col items-start justify-start py-0 pl-0 pr-[26px] box-border">
            <div className="w-[85px] h-[69px] relative leading-[30px] font-medium flex items-center justify-center">
              Safe
            </div>
          </div>
          <div className="h-[69px] w-32 relative leading-[30px] font-medium flex items-center justify-center">
            Sustainable
          </div>
          <div className="h-[69px] w-[129px] relative leading-[30px] font-medium flex items-center justify-center">
            Transparent
          </div>
        </div>
      </section>
      <div className="w-[1403px] relative h-[352px] overflow-hidden shrink-0" />
    </section>
  );
};

export default AboutUsSection1;