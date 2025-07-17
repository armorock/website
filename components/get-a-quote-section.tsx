"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/navigation";
import Header from "./header";

export type GetAQuoteSectionType = {
  className?: string;
  headerPadding?: string;
  logoImage: string;
  mainNavigationBarMargin?: string;

  /** Style props */
  heroSectionHeight?: CSSProperties["height"];
  heroSectionBackgroundImage?: CSSProperties["backgroundImage"];
};

const GetAQuoteSection: NextPage<GetAQuoteSectionType> = ({
  className = "",
  heroSectionHeight,
  heroSectionBackgroundImage,
  headerPadding,
  logoImage,
  mainNavigationBarMargin,
}) => {
  const heroSectionStyle: CSSProperties = useMemo(() => {
    return {
      height: heroSectionHeight,
      backgroundImage: heroSectionBackgroundImage,
    };
  }, [heroSectionHeight, heroSectionBackgroundImage]);

  const router = useRouter();

  const onOurProductsTextClick = useCallback(() => {
    router.push("/locofy-our-products-page");
  }, [router]);

  const onConnectWithUsClick = useCallback(() => {
    router.push("/connect-with-us-page");
  }, [router]);

  return (
    <main
      className={`self-stretch h-[550px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 px-[25px] box-border sticky gap-2 bg-[url('/hero-quote.png')] bg-cover bg-no-repeat bg-[top] top-[0] z-[99] text-left text-6xl text-gray-100 font-oswald ${className}`}
      style={heroSectionStyle}
    >
      <Header
        headerPadding={headerPadding}
        logoImage={logoImage}
        mainNavigationBarMargin={mainNavigationBarMargin}
        onOurProductsTextClick={onOurProductsTextClick}
        onConnectWithUsClick={onConnectWithUsClick}
      />
      <div className="w-[1314px] h-[399px] !!m-[0 important] absolute top-[118px] left-[58px] flex flex-row items-start justify-start pt-0 px-0 pb-[299px] box-border z-[1]">
        <h1 className="m-0 w-[1314px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block shrink-0 z-[0]">
          {" "}
          get a quote
        </h1>
        <h1 className="!!m-[0 important] h-[300px] w-[888px] absolute right-[24px] bottom-[0px] text-[length:inherit] leading-[75px] uppercase font-medium font-[inherit] text-right flex items-end z-[1]">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              <span>{`take the first step in implementing `}</span>
              <span className="text-firebrick">corrosion-proof</span>
              <span className="text-gray-100">{`, `}</span>
              <span className="text-firebrick">long-lasting</span>
              <span className="text-gray-100"> solutions to</span>
            </p>
            <p className="m-0 text-firebrick">
              <span>meet your needs</span>
              <span className="text-gray-100">.</span>
            </p>
          </span>
        </h1>
      </div>
    </main>
  );
};

export default GetAQuoteSection;
