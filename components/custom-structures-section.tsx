"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export type CustomStructuresSectionType = {
  className?: string;
};

const CustomStructuresSection: NextPage<CustomStructuresSectionType> = ({
  className = "",
}) => {
  const router = useRouter();

  const onGetAQuoteButtonClick = useCallback(() => {
    router.push("/get-a-quote-page");
  }, [router]);

  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-start justify-start py-16 px-[53px] text-right text-6xl text-gray-100 font-oswald mq450:gap-[19px] mq450:pt-[42px] mq450:pb-[42px] mq450:box-border mq825:gap-[37px] mq825:pl-[26px] mq825:pr-[26px] mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-[75px] mq450:gap-[19px] mq675:gap-[37px]">
        <div className="w-[655px] flex flex-col items-start justify-start">
          <h2 className="m-0 relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
            custom structures
          </h2>
        </div>
        <section className="w-[498px] flex flex-col items-start justify-start gap-9 text-left text-[22px] text-black font-open-sans mq675:gap-[18px]">
          <p className="m-0 self-stretch relative leading-[30px] mq450:text-lg mq450:leading-6">{`If it can be made it concrete, Armorock can make it in polymer. Armorock Precast Polymer Concrete Custom Structures are available to meet the needs of highly specific job requirements. `}</p>
          <button
            className="cursor-pointer border-gray-100 border-solid border-[3px] py-2 pl-[22px] pr-[17px] bg-gray-100 w-[145px] h-[44.8px] box-border flex flex-row items-start justify-start hover:bg-dimgray hover:border-dimgray hover:border-solid hover:hover:border-[3px] hover:box-border"
            onClick={onGetAQuoteButtonClick}
          >
            <div className="h-[21.5px] w-[100px] relative text-xl leading-[21.5px] font-medium font-oswald text-white text-right inline-block">
              GET A QUOTE
            </div>
          </button>
        </section>
      </div>
    </section>
  );
};

export default CustomStructuresSection;
