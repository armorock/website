"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import ManholesAndRehabs from "./manholes-and-rehabs";

export type OurProductsSectionType = {
  className?: string;
};

const OurProductsSection: NextPage<OurProductsSectionType> = ({
  className = "",
}) => {
  const onCustomStructuresClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='manholesSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLiftStationsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rehabsSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onManholesAndRehabsClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='liftStationsSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[27px] px-[53px] pb-16 text-left text-6xl text-white font-oswald mq675:pt-5 mq675:pb-[42px] mq675:box-border mq825:pl-[26px] mq825:pr-[26px] mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start">
        <div className="flex-1 flex flex-col items-start justify-start gap-3">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
            Our products
          </h2>
          <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-[50px] mq675:gap-[25px]">
            <ManholesAndRehabs
              manholes="/custom structures.svg"
              manholesRehabs="manholes"
              manholesRehabsWidth="128px"
              onManholesAndRehabsClick={onCustomStructuresClick}
              frameDivPadding1="0px 121px"
            />
            <ManholesAndRehabs
              manholes="/custom structures1.svg"
              manholesRehabs="rehabilitation inserts"
              manholesRehabsWidth="293px"
              onManholesAndRehabsClick={onLiftStationsClick}
              frameDivPadding1="0px 56px 0px 55px"
            />
            <ManholesAndRehabs
              manholes="/custom structures2.svg"
              manholesRehabs="lift stations "
              onManholesAndRehabsClick={onManholesAndRehabsClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProductsSection;