"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export type CTASectionType = {
  className?: string;
};

const CTASection: NextPage<CTASectionType> = ({ className = "" }) => {
  const router = useRouter();

  const onGetAQuoteButtonClick = useCallback(() => {
    router.push("/get-a-quote-page");
  }, [router]);

  const onConnectWithUsButtonClick = useCallback(() => {
    router.push("/connect-with-us-page");
  }, [router]);

  return (
    <section
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-col items-center justify-start py-16 px-[118px] gap-[5px] text-center text-[22px] text-white font-open-sans mq450:pl-5 mq450:pr-5 mq450:box-border mq675:pt-[42px] mq675:pb-[42px] mq675:box-border mq825:pl-[59px] mq825:pr-[59px] mq825:box-border ${className}`}
    >
      <Image
        className="w-[117.8px] relative max-h-full object-cover"
        loading="lazy"
        width={117.8}
        height={124}
        sizes="100vw"
        alt=""
        src="/logo3@2x.png"
      />
      <h3 className="m-0 self-stretch h-[175px] relative text-[length:inherit] leading-[35px] font-normal font-[inherit] inline-block mq450:text-lg mq450:leading-7">
        Investing in Armorock Polymer Concrete structures is the long-term,
        cost-effective solution to ongoing issues within the wastewater
        industry. Our white glove service coupled with our fully
        corrosion-resistant product is the premium choice for contractors,
        developers, engineers, and municipalities across the nation. With our
        long-lasting product backed by a 50-year corrosion warranty, you can
        save in rehabilitation and replacement costs in the future. An
        investment in Armorock Polymer Concrete ensures sustainability of
        budgets and vital infrastructure.
      </h3>
      <div className="h-[90px] flex flex-row items-center justify-center pt-10 px-0 pb-0 box-border gap-[38px] mq450:h-auto mq450:gap-[19px] mq450:flex-wrap">
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

export default CTASection;
