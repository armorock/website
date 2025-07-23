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
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-col items-center justify-start py-16 px-[45px] gap-[15px] text-center text-[22px] text-white font-open-sans mq675:pt-[42px] mq675:pb-[42px] mq675:box-border mq825:pl-[22px] mq825:pr-[22px] mq450:px-4 mq450:py-8 mq825:box-border ${className}`}
    >
      <Image
        className="w-[117.8px] relative max-h-full object-cover mq450:w-[90px]"
        loading="lazy"
        width={117.8}
        height={124}
        sizes="(max-width: 450px) 90px, 117.8px"
        alt="Armorock logo"
        src="/logo3@2x.png"
      />
      <h3 className="m-0 w-full max-w-[1280px] px-4 relative text-[length:inherit] leading-[35px] font-normal font-[inherit] inline-block mq825:text-xl mq825:leading-8 mq825:max-w-[95%] mq675:text-lg mq675:leading-6 mq675:max-w-[95%] mq450:text-lg mq450:leading-6 mq450:px-2 mq450:max-w-full">
        Investing in Armorock Polymer Concrete structures is the long-term, cost-effective solution to ongoing issues within the wastewater industry. Our white glove service coupled with our fully corrosion-resistant product is the premium choice for contractors, developers, engineers, and municipalities across the nation. With our long-lasting product backed by a 50-year corrosion warranty, you can save in rehabilitation and replacement costs in the future. An investment in Armorock Polymer Concrete ensures sustainability of budgets and vital infrastructure.
      </h3>
      <div className="w-full max-w-[1300px] flex flex-row items-center justify-center pt-8 px-0 pb-0 box-border gap-[38px] mq675:gap-[25px] mq450:gap-4 mq450:flex-wrap mq450:pt-6">
        <button
          className="cursor-pointer border-firebrick border-solid border-[3px] py-[9px] px-[22px] bg-firebrick h-[50px] min-w-[145px] box-border flex flex-row items-center justify-center whitespace-nowrap hover:bg-indianred hover:border-indianred hover:border-solid hover:hover:border-[3px] hover:box-border mq450:h-[45px] mq450:py-2 mq450:px-[10px] mq450:min-w-[130px]"
          onClick={onGetAQuoteButtonClick}
        >
          <div className="text-xl leading-6 font-medium font-oswald text-white text-center mq450:text-lg">
            GET A QUOTE
          </div>
        </button>
        <button
          className="cursor-pointer border-firebrick border-solid border-[3px] py-[9px] px-[24px] bg-firebrick h-[50px] min-w-[160px] box-border flex flex-row items-center justify-center whitespace-nowrap hover:bg-indianred hover:border-indianred hover:border-solid hover:hover:border-[3px] hover:box-border mq450:h-[45px] mq450:py-2 mq450:px-[15px]"
          onClick={onConnectWithUsButtonClick}
        >
          <div className="text-xl leading-6 font-medium font-oswald text-white text-center mq450:text-lg">
            CONNECT WITH US
          </div>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
