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
      className={`self-stretch bg-gray-100 overflow-hidden shrink-0 flex flex-col items-center justify-start py-16 px-4 gap-[60px] text-center text-6xl font-oswald mq675:gap-[30px] mq675:pt-[42px] mq675:pb-[42px] mq675:box-border ${className}`}
    >
      <div className="w-full max-w-[809px] flex flex-row items-center justify-center flex-wrap gap-[12.2px] mq450:flex-col">
        <Image
          className="w-[117.8px] relative max-h-full object-cover mq450:w-[100px]"
          width={117.8}
          height={124}
          sizes="(max-width: 450px) 100px, 117.8px"
          alt="Armorock Solution Logo"
          src="/Armorock Solution Logo@2x.png"
        />
        <div className="flex flex-col items-center justify-center pt-3 px-0 pb-0 mq450:pt-2">
          <h2 className="m-0 max-w-[679px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block text-white mq450:text-4xl mq450:leading-[48px] mq450:text-center mq825:text-5xl mq825:leading-[80px]">
            armorock is the solution
          </h2>
        </div>
      </div>
      <div className="self-stretch flex flex-row md:flex-col items-center justify-center flex-wrap md:flex-nowrap content-center gap-x-4 gap-y-[40px] md:gap-y-[16px] px-4">
        <h2 className="m-0 relative text-[54px] leading-[34px] uppercase font-medium font-[inherit] text-white md:text-5xl md:leading-tight sm:text-4xl xs:text-3xl xs:leading-8">
          {`Sustainable `}in Design.
        </h2>
        <h2 className="m-0 relative text-[54px] leading-[34px] uppercase font-medium font-[inherit] text-white md:text-5xl md:leading-tight sm:text-4xl xs:text-3xl xs:leading-8">
          proven in performance.
        </h2>
        <h2 className="m-0 relative text-[65px] leading-[30px] uppercase font-bold font-[inherit] text-white md:text-5xl md:leading-tight sm:text-4xl xs:text-3xl pt-6 md:pt-0">
          <span>{`trusted `}for the future.</span>
        </h2>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center py-6 px-0 gap-[38px] mq450:gap-[12px] mq450:flex-wrap">
        <button
          className="cursor-pointer border-firebrick border-solid border-[3px] py-[9px] px-4 bg-firebrick h-[50px] min-w-[145px] box-border flex flex-row items-center justify-center whitespace-nowrap hover:bg-indianred hover:border-indianred hover:border-solid hover:hover:border-[3px] hover:box-border"
          onClick={onGetAQuoteButtonClick}
        >
          <div className="relative text-xl leading-6 font-medium font-oswald text-white text-center inline-block z-[1]">
            GET A QUOTE
          </div>
        </button>
        <button
          className="cursor-pointer border-firebrick border-solid border-[3px] py-[9px] px-4 bg-firebrick h-[50px] min-w-[160px] box-border flex flex-row items-center justify-center whitespace-nowrap hover:bg-indianred hover:border-indianred hover:border-solid hover:hover:border-[3px] hover:box-border"
          onClick={onConnectWithUsButtonClick}
        >
          <div className="relative text-xl leading-6 font-medium font-oswald text-white text-center inline-block z-[1]">
            CONNECT WITH US
          </div>
        </button>
      </div>
    </section>
  );
};

export default LandingPageSection5;
