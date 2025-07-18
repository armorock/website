import type { NextPage } from "next";
import Image from "next/image";

export type AboutUsSection1Type = {
  className?: string;
};

const AboutUsSection1: NextPage<AboutUsSection1Type> = ({ className = "" }) => {
  return (
    <section
      id="mission-and-values"
      className={`self-stretch bg-gray-100 overflow-hidden shrink-0 flex flex-col items-center justify-start py-16 px-[100px] box-border gap-[25px] text-center text-6xl text-white font-oswald lg:pt-[42px] lg:pb-[42px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq675:py-[27px] mq675:px-[50px] mq675:box-border ${className}`}
    >
      <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
        our mission
      </h2>
      <p className="m-0 w-[996px] h-[91px] relative text-[35px] leading-10 inline-block shrink-0 mq450:text-[21px] mq450:leading-6 mq825:text-[28px] mq825:leading-8">
        {" "}
        At Armorock, we want to drive the future of sustainable infrastructure
        with high quality, innovative solutions that create lasting value.
      </p>
      <div className="my-4">
        <iframe 
          style={{width: "843px", height: "474px", border: "0"}}
          src="https://www.youtube.com/embed/pd46DYvsP3o" 
          title="Armorock Values: QUESST" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
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
        <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
          <h2 className="m-0 w-[460px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
            armorock values
          </h2>
        </div>
      </div>
      <section className="w-[876px] h-[168px] flex flex-col items-end justify-start text-center text-[65px] text-firebrick font-oswald mq825:h-auto">
        <div className="flex flex-row items-start justify-end py-0 pl-0 pr-0.5">
          <div className="flex flex-row items-start justify-start gap-[25px] shrink-0 mq825:flex-wrap">
            <h2 className="m-0 h-[168px] w-[124.6px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block mq450:text-[39px] mq450:leading-[60px] mq825:text-[52px] mq825:leading-[80px]">
              Q
            </h2>
            <h2 className="m-0 h-[168px] w-[124.6px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block mq450:text-[39px] mq450:leading-[60px] mq825:text-[52px] mq825:leading-[80px]">
              U
            </h2>
            <h2 className="m-0 h-[168px] w-[124.6px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block mq450:text-[39px] mq450:leading-[60px] mq825:text-[52px] mq825:leading-[80px]">
              E
            </h2>
            <h2 className="m-0 h-[168px] w-[125.4px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block mq450:text-[39px] mq450:leading-[60px] mq825:text-[52px] mq825:leading-[80px]">
              S
            </h2>
            <h2 className="m-0 h-[168px] w-[124.6px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block mq450:text-[39px] mq450:leading-[60px] mq825:text-[52px] mq825:leading-[80px]">
              S
            </h2>
            <h2 className="m-0 h-[168px] w-[124.6px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block mq450:text-[39px] mq450:leading-[60px] mq825:text-[52px] mq825:leading-[80px]">
              T
            </h2>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[19px] shrink-0 z-[1] mt-[-69px] relative text-[25px] text-white mq825:flex-wrap">
          <div className="w-[131px] flex flex-col items-start justify-start">
            <div className="w-[85px] h-[69px] relative leading-[30px] font-medium flex items-center justify-center shrink-0 mq450:text-xl mq450:leading-6">
              Quality
            </div>
          </div>
          <div className="w-[131px] flex flex-col items-start justify-start">
            <div className="w-[86px] h-[69px] relative leading-[30px] font-medium flex items-center justify-center shrink-0 mq450:text-xl mq450:leading-6">
              Unified
            </div>
          </div>
          <div className="w-[131px] flex flex-col items-start justify-start">
            <div className="w-[85px] h-[69px] relative leading-[30px] font-medium flex items-center justify-center shrink-0 mq450:text-xl mq450:leading-6">
              Efficient
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[26px]">
            <div className="w-[85px] h-[69px] relative leading-[30px] font-medium flex items-center justify-center mq450:text-xl mq450:leading-6">
              Safe
            </div>
          </div>
          <div className="h-[69px] w-32 relative leading-[30px] font-medium flex items-center justify-center mq450:text-xl mq450:leading-6">
            Sustainable
          </div>
          <div className="h-[69px] w-[129px] relative leading-[30px] font-medium flex items-center justify-center mq450:text-xl mq450:leading-6">
            Transparent
          </div>
        </div>
      </section>
      <div className="w-full relative py-1" />
    </section>
  );
};

export default AboutUsSection1;
