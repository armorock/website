"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/navigation";
import Header from "./header";

export type GetAQuoteSectionType = {
  className?: string;

  /** Style props */
  heroSectionHeight?: CSSProperties["height"];
  heroSectionBackgroundImage?: CSSProperties["backgroundImage"];
};

const GetAQuoteSection: NextPage<GetAQuoteSectionType> = ({
  className = "",
  heroSectionHeight,
  heroSectionBackgroundImage,
}) => {
  const heroSectionStyle: CSSProperties = useMemo(() => {
    return {
      height: heroSectionHeight,
      backgroundImage: heroSectionBackgroundImage,
    };
  }, [heroSectionHeight, heroSectionBackgroundImage]);

  const router = useRouter();

  const onFAQTextClick = useCallback(() => {
    router.push("/frequently-asked-questions-page");
  }, [router]);

  return (
    <header
      className={`self-stretch h-[550px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 px-[25px] box-border sticky gap-2 bg-[url('/hero-quote.png')] bg-cover bg-no-repeat bg-[top] top-[0] z-[99] text-left text-6xl text-gray-100 font-oswald ${className}`}
      style={heroSectionStyle}
    >
      <Header
        headerFlexWrap="wrap"
        headerAlignContent="center"
        headerTop="0"
        headerPosition="sticky"
        onFAQTextClick={onFAQTextClick}
      />
      <div className="w-[1314px] h-[399px] !!m-[0 important] absolute top-[118px] left-[58px] flex flex-row items-start justify-start pt-0 px-0 pb-[299px] box-border z-[1]">
        <h2 className="m-0 w-[1314px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block shrink-0 z-[0]">
          {" "}
          get a quote
        </h2>
        <h2 className="!!m-[0 important] h-[300px] w-[888px] absolute right-[24px] bottom-[0px] text-[length:inherit] leading-[75px] uppercase font-medium font-[inherit] text-right flex items-end z-[1]">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              {`take the first step in implementing `}corrosion-proof{`, `}
              long-lasting solutions to
            </p>
            <p className="m-0">meet your needs.</p>
          </span>
        </h2>
      </div>
    </header>
  );
};

export default GetAQuoteSection;