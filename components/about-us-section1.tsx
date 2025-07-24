import type { NextPage } from "next";
import Image from "next/image";

export type AboutUsSection1Type = {
  className?: string;
};

const AboutUsSection1: NextPage<AboutUsSection1Type> = ({ className = "" }) => {
  return (
    <section
      id="mission-and-values"
      className={`self-stretch bg-gray-100 overflow-hidden shrink-0 flex flex-col items-center justify-start py-16 px-[100px] box-border gap-[25px] text-center text-6xl text-white font-oswald lg:pt-[42px] lg:pb-[42px] lg:box-border mq450:py-8 mq450:px-4 mq450:gap-[15px] mq450:box-border mq675:py-[27px] mq675:px-[50px] mq675:box-border ${className}`}
    >
      <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
        our mission
      </h2>
      <p className="m-0 w-full max-w-[996px] relative text-[35px] leading-10 inline-block mq450:text-[21px] mq450:leading-6 mq825:text-[28px] mq825:leading-8 px-2">
        {" "}
        At Armorock, we want to drive the future of sustainable infrastructure
        with high quality, innovative solutions that create lasting value.
      </p>
      <div className="my-4 w-full max-w-[843px] px-2">
        <div className="relative w-full pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/pd46DYvsP3o"
            title="Armorock Values: QUESST"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-full max-w-[598px] flex flex-row items-center justify-center gap-[20.2px] px-4">
        <Image
          className="w-[90px] relative max-h-full mq450:w-[60px]"
          loading="lazy"
          width={90}
          height={95}
          sizes="100vw"
          alt="Armorock Values Logo"
          src="/armorock-values-logo.svg"
        />
        <div className="flex flex-col items-start justify-center pt-3 px-0 pb-0">
          <h2 className="m-0 w-full max-w-[460px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
            <span className="whitespace-nowrap">armorock values</span>
          </h2>
        </div>
      </div>
      <section className="w-full max-w-[876px] flex flex-col items-center justify-start text-center text-[65px] text-firebrick font-oswald px-2">
        <div className="flex justify-center">
          <div className="flex flex-row items-center justify-between w-[900px] mq1200:gap-[40px] mq825:w-[700px] mq825:gap-[24px] mq675:w-[550px] mq675:gap-[16px] mq450:w-[320px] mq450:gap-[8px] gap-[56px]">
            <div className="flex flex-col items-center justify-center w-[124px] mq825:w-[100px] mq675:w-[80px] mq450:w-[50px] text-center overflow-hidden">
              <h2 className="m-0 text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] text-firebrick mq825:text-[32px] mq675:text-[28px] mq450:text-[22px] mq450:leading-[26px]">Q</h2>
              <div className="relative leading-[30px] font-medium text-white text-[25px] mq825:text-lg mq675:text-base mq450:text-xs mq450:leading-4">Quality</div>
            </div>
            <div className="flex flex-col items-center justify-center w-[124px] mq825:w-[100px] mq675:w-[80px] mq450:w-[50px] text-center overflow-hidden">
              <h2 className="m-0 text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] text-firebrick mq825:text-[32px] mq675:text-[28px] mq450:text-[22px] mq450:leading-[26px]">U</h2>
              <div className="relative leading-[30px] font-medium text-white text-[25px] mq825:text-lg mq675:text-base mq450:text-xs mq450:leading-4">Unified</div>
            </div>
            <div className="flex flex-col items-center justify-center w-[124px] mq825:w-[100px] mq675:w-[80px] mq450:w-[50px] text-center overflow-hidden">
              <h2 className="m-0 text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] text-firebrick mq825:text-[32px] mq675:text-[28px] mq450:text-[22px] mq450:leading-[26px]">E</h2>
              <div className="relative leading-[30px] font-medium text-white text-[25px] mq825:text-lg mq675:text-base mq450:text-xs mq450:leading-4">Efficient</div>
            </div>
            <div className="flex flex-col items-center justify-center w-[124px] mq825:w-[100px] mq675:w-[80px] mq450:w-[50px] text-center overflow-hidden">
              <h2 className="m-0 text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] text-firebrick mq825:text-[32px] mq675:text-[28px] mq450:text-[22px] mq450:leading-[26px]">S</h2>
              <div className="relative leading-[30px] font-medium text-white text-[25px] mq825:text-lg mq675:text-base mq450:text-xs mq450:leading-4">Safe</div>
            </div>
            <div className="flex flex-col items-center justify-center w-[124px] mq825:w-[100px] mq675:w-[80px] mq450:w-[50px] text-center overflow-hidden">
              <h2 className="m-0 text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] text-firebrick mq825:text-[32px] mq675:text-[28px] mq450:text-[22px] mq450:leading-[26px]">S</h2>
              <div className="relative leading-[30px] font-medium text-white text-[25px] mq825:text-lg mq675:text-base mq450:text-xs mq450:leading-4">Sustainable</div>
            </div>
            <div className="flex flex-col items-center justify-center w-[124px] mq825:w-[100px] mq675:w-[80px] mq450:w-[50px] text-center overflow-hidden">
              <h2 className="m-0 text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] text-firebrick mq825:text-[32px] mq675:text-[28px] mq450:text-[22px] mq450:leading-[26px]">T</h2>
              <div className="relative leading-[30px] font-medium text-white text-[25px] mq825:text-lg mq675:text-base mq450:text-xs mq450:leading-4">Transparent</div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full relative py-1" />
    </section>
  );
};

export default AboutUsSection1;
