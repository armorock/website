"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export type LiftStationsSectionType = {
  className?: string;
};

const LiftStationsSection: NextPage<LiftStationsSectionType> = ({
  className = "",
}) => {
  const router = useRouter();

  const onGetAQuoteButtonClick = useCallback(() => {
    router.push("/get-a-quote-page");
  }, [router]);

  return (
    <section
      className={`self-stretch bg-firebrick overflow-hidden flex flex-col items-center justify-start py-16 px-[53px] text-right text-6xl text-white font-oswald mq450:gap-[17px] mq675:pt-[42px] mq675:pb-[42px] mq675:box-border mq825:gap-[34px] mq825:pl-[26px] mq825:pr-[26px] mq825:box-border ${className}`}
      data-scroll-to="liftStationsSection"
    >
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-[75px] mq450:gap-[19px] mq675:gap-[37px]">
        <div className="w-[655px] flex flex-col items-start justify-start gap-3.5">
          <h2 className="m-0 relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
            lift stations
          </h2>
          <div className="self-stretch relative h-[382px]" />
        </div>
        <section className="w-[498px] flex flex-col items-start justify-start gap-[6.3px] text-left text-[22px] text-white font-open-sans">
          <p className="m-0 self-stretch h-[245px] relative leading-[35px] inline-block mq450:text-lg mq450:leading-7">
            Armorock Lift Stations stand up to intense, highly corrosive
            environments found in pump stations, wet wells, dry wells, and other
            structures. Polymer Concrete Lift Stations are available in 48” to
            192” inside diameter sizes and can be customized to accommodate any
            pump supplier requirements.
          </p>
          <button
            className="cursor-pointer border-white border-solid border-[3px] py-2 pl-[22px] pr-[17px] bg-white w-[145px] h-[44.8px] box-border flex flex-row items-start justify-start hover:bg-gainsboro-100 hover:border-gainsboro-100 hover:border-solid hover:hover:border-[3px] hover:box-border"
            onClick={onGetAQuoteButtonClick}
          >
            <div className="h-[21.5px] w-[100px] relative text-xl leading-[21.5px] font-medium font-oswald text-firebrick text-right inline-block">
              GET A QUOTE
            </div>
          </button>
        </section>
      </div>
    </section>
  );
};

export default LiftStationsSection;
