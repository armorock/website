"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export type LandingPageSection5Type = {
  className?: string;
};

const LandingPageSection5: NextPage<LandingPageSection5Type> = ({
  className = "",
}) => {
  const router = useRouter();

  const onGetAQuoteButtonClick = useCallback(() => {
    router.push("/get-a-quote-page");
  }, [router]);

  const onConnectWithUsButtonClick = useCallback(() => {
    router.push("/connect-with-us-page");
  }, [router]);

  return (
    <section
      className={`self-stretch bg-gray-100 overflow-hidden shrink-0 flex flex-col items-center justify-start py-16 px-0 gap-[60px] text-center text-6xl font-oswald mq675:gap-[30px] mq675:pt-[42px] mq675:pb-[42px] mq675:box-border ${className}`}
    >
      <div className="w-[809px] h-[124px] flex flex-row items-start justify-start gap-[12.2px]">
        <Image
          className="w-[117.8px] relative max-h-full object-cover"
          width={117.8}
          height={124}
          sizes="100vw"
          alt=""
          src="/Armorock Solution Logo@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
          <h2 className="m-0 w-[679px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block text-white mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
            armorock is the solution
          </h2>
        </div>
      </div>
      <div className="self-stretch h-32 flex flex-row items-center justify-center flex-wrap content-center gap-x-4 gap-y-[68px] text-[50px]">
        <h2 className="m-0 relative text-[length:inherit] leading-[30px] uppercase font-medium font-[inherit] text-white mq450:text-3xl mq450:leading-[18px] mq825:text-[40px] mq825:leading-6">
          Sustainable in Design.
        </h2>
        <h2 className="m-0 relative text-[length:inherit] leading-[30px] uppercase font-medium font-[inherit] text-white mq450:text-3xl mq450:leading-[18px] mq825:text-[40px] mq825:leading-6">
          proven in performance.
        </h2>
        <h2 className="m-0 relative text-[65px] leading-[30px] uppercase font-bold font-[inherit] text-white mq450:text-[39px] mq450:leading-[18px] mq825:text-[52px] mq825:leading-6">
          trusted for the future.
        </h2>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center py-10 px-0 gap-[38px] mq450:gap-[19px] mq450:flex-wrap">
        <button
          className="cursor-pointer border-firebrick border-solid border-[3px] py-[9px] pl-[23px] pr-[22px] bg-firebrick h-[50px] w-[145px] box-border flex flex-row items-start justify-start whitespace-nowrap hover:bg-indianred hover:border-indianred hover:border-solid hover:hover:border-[3px] hover:box-border"
          onClick={onGetAQuoteButtonClick}
        >
          <div className="w-[145px] relative bg-firebrick border-firebrick border-solid border-[3px] box-border h-[50px] hidden" />
          <div className="w-[100px] relative text-xl leading-6 font-medium font-oswald text-white text-right inline-block z-[1]">
            GET A QUOTE
          </div>
        </button>
        <button
          className="cursor-pointer border-firebrick border-solid border-[3px] py-[9px] pl-[9px] pr-2 bg-firebrick h-[50px] w-40 box-border flex flex-row items-start justify-start whitespace-nowrap hover:bg-indianred hover:border-indianred hover:border-solid hover:hover:border-[3px] hover:box-border"
          onClick={onConnectWithUsButtonClick}
        >
          <div className="w-40 relative bg-firebrick border-firebrick border-solid border-[3px] box-border h-[50px] hidden" />
          <div className="w-[143px] relative text-xl leading-6 font-medium font-oswald text-white text-right inline-block z-[1]">
            CONNECT WITH US
          </div>
        </button>
      </div>
    </section>
  );
};

export default LandingPageSection5;
