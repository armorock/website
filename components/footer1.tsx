"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type Footer2Type = {
  className?: string;
  logo: string;

  /** Style props */
  connectWithUsBorder?: CSSProperties["border"];
  connectWithUsPadding?: CSSProperties["padding"];
  connectWithUsBackgroundColor?: CSSProperties["backgroundColor"];
  socialMediaButtonBorder?: CSSProperties["border"];
  socialMediaButtonPadding?: CSSProperties["padding"];
  socialMediaButtonBackgroundColor?: CSSProperties["backgroundColor"];
  aboutUsButtonBorder?: CSSProperties["border"];
  aboutUsButtonPadding?: CSSProperties["padding"];
  aboutUsButtonBackgroundColor?: CSSProperties["backgroundColor"];
  ourProductsButtonBorder?: CSSProperties["border"];
  ourProductsButtonPadding?: CSSProperties["padding"];
  ourProductsButtonBackgroundColor?: CSSProperties["backgroundColor"];
  engineeringDocsButtonBorder?: CSSProperties["border"];
  engineeringDocsButtonPadding?: CSSProperties["padding"];
  engineeringDocsButtonBackgroundColor?: CSSProperties["backgroundColor"];
  joinOurTeamBorder?: CSSProperties["border"];
  joinOurTeamPadding?: CSSProperties["padding"];
  joinOurTeamBackgroundColor?: CSSProperties["backgroundColor"];
  copyright2025Margin?: CSSProperties["margin"];
  copyright2025Height?: CSSProperties["height"];
};

const Footer2: NextPage<Footer2Type> = ({
  className = "",
  logo,
  connectWithUsBorder,
  connectWithUsPadding,
  connectWithUsBackgroundColor,
  socialMediaButtonBorder,
  socialMediaButtonPadding,
  socialMediaButtonBackgroundColor,
  aboutUsButtonBorder,
  aboutUsButtonPadding,
  aboutUsButtonBackgroundColor,
  ourProductsButtonBorder,
  ourProductsButtonPadding,
  ourProductsButtonBackgroundColor,
  engineeringDocsButtonBorder,
  engineeringDocsButtonPadding,
  engineeringDocsButtonBackgroundColor,
  joinOurTeamBorder,
  joinOurTeamPadding,
  joinOurTeamBackgroundColor,
  copyright2025Margin,
  copyright2025Height,
}) => {
  const connectWithUsStyle: CSSProperties = useMemo(() => {
    return {
      border: connectWithUsBorder,
      padding: connectWithUsPadding,
      backgroundColor: connectWithUsBackgroundColor,
    };
  }, [connectWithUsBorder, connectWithUsPadding, connectWithUsBackgroundColor]);

  const socialMediaButtonStyle: CSSProperties = useMemo(() => {
    return {
      border: socialMediaButtonBorder,
      padding: socialMediaButtonPadding,
      backgroundColor: socialMediaButtonBackgroundColor,
    };
  }, [
    socialMediaButtonBorder,
    socialMediaButtonPadding,
    socialMediaButtonBackgroundColor,
  ]);

  const aboutUsButtonStyle: CSSProperties = useMemo(() => {
    return {
      border: aboutUsButtonBorder,
      padding: aboutUsButtonPadding,
      backgroundColor: aboutUsButtonBackgroundColor,
    };
  }, [aboutUsButtonBorder, aboutUsButtonPadding, aboutUsButtonBackgroundColor]);

  const ourProductsButtonStyle: CSSProperties = useMemo(() => {
    return {
      border: ourProductsButtonBorder,
      padding: ourProductsButtonPadding,
      backgroundColor: ourProductsButtonBackgroundColor,
    };
  }, [
    ourProductsButtonBorder,
    ourProductsButtonPadding,
    ourProductsButtonBackgroundColor,
  ]);

  const engineeringDocsButtonStyle: CSSProperties = useMemo(() => {
    return {
      border: engineeringDocsButtonBorder,
      padding: engineeringDocsButtonPadding,
      backgroundColor: engineeringDocsButtonBackgroundColor,
    };
  }, [
    engineeringDocsButtonBorder,
    engineeringDocsButtonPadding,
    engineeringDocsButtonBackgroundColor,
  ]);

  const joinOurTeamStyle: CSSProperties = useMemo(() => {
    return {
      border: joinOurTeamBorder,
      padding: joinOurTeamPadding,
      backgroundColor: joinOurTeamBackgroundColor,
    };
  }, [joinOurTeamBorder, joinOurTeamPadding, joinOurTeamBackgroundColor]);

  const copyright2025Style: CSSProperties = useMemo(() => {
    return {
      margin: copyright2025Margin,
      height: copyright2025Height,
    };
  }, [copyright2025Margin, copyright2025Height]);

  return (
    <footer
      className={`self-stretch bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[50px] px-0 pb-0 text-left text-base text-black font-open-sans mq450:pt-8 mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between flex-wrap content-start py-0 px-[60px] gap-x-0 gap-y-[70px] mq675:pl-[30px] mq675:pr-[30px] mq675:box-border">
        <Image
          className="w-[304px] relative max-h-full object-cover"
          width={304}
          height={241.1}
          sizes="100vw"
          alt=""
          src={logo}
        />
        <div className="flex-1 flex flex-row items-start justify-end flex-wrap content-start gap-x-[90px] gap-y-[35px] min-w-[406px] mq450:gap-[22px] mq450:min-w-full mq825:gap-[45px]">
          <div className="h-[154px] w-[132px] flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] w-[132px] relative text-base leading-10 font-bold font-open-sans text-black text-left inline-block"
                style={connectWithUsStyle}
              >
                Connect With Us
              </button>
              <div className="w-[121px] relative leading-10 inline-block mt-[-6px]">
                General Contact
              </div>
            </div>
            <div className="w-[114px] h-10 relative leading-10 inline-block">
              Plant Locations
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[121px] h-10 relative text-base leading-10 font-open-sans text-black text-left inline-block"
              style={socialMediaButtonStyle}
            >
              Social Media
            </button>
          </div>
          <div className="h-[154px] w-[143px] flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] w-[73px] relative text-base leading-10 font-bold font-open-sans text-black text-left inline-block"
                style={aboutUsButtonStyle}
              >
                About Us
              </button>
              <div className="w-[117px] relative leading-10 inline-block mt-[-6px]">
                Meet Our Team
              </div>
            </div>
            <div className="w-[143px] h-10 relative leading-10 inline-block">
              Founding Story
            </div>
            <div className="w-[143px] h-10 relative leading-10 inline-block">
              Mission and Values
            </div>
          </div>
          <div className="h-[234px] w-[139px] flex flex-col items-start justify-start">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[106px] relative text-base leading-10 font-bold font-open-sans text-black text-left inline-block shrink-0"
              style={ourProductsButtonStyle}
            >
              Our Products
            </button>
            <div className="flex flex-col items-start justify-start shrink-0 mt-[-6px] relative">
              <div className="w-[74px] relative leading-10 inline-block">
                Manholes
              </div>
              <div className="w-[139px] h-10 relative leading-10 inline-block">
                Rehabs
              </div>
              <div className="w-[139px] h-10 relative leading-10 inline-block">
                Lift Stations
              </div>
              <div className="w-[139px] h-10 relative leading-10 inline-block">
                Custom Structures
              </div>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] w-[139px] h-10 relative text-base leading-10 font-open-sans text-black text-left inline-block"
                style={engineeringDocsButtonStyle}
              >
                Engineering Docs
              </button>
            </div>
          </div>
          <div className="h-[154px] w-[146px] flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <b className="w-[97px] relative leading-10 inline-block">
                Get A Quote
              </b>
              <div className="flex flex-col items-start justify-start mt-[-6px] relative">
                <b className="w-[146px] relative leading-10 inline-block">
                  Life Cycle Analysis
                </b>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] w-[62px] relative text-base leading-10 font-bold font-open-sans text-black text-left inline-block"
                  style={joinOurTeamStyle}
                >
                  Careers
                </button>
              </div>
            </div>
            <b className="w-[33px] relative leading-10 inline-block">FAQ</b>
          </div>
        </div>
        <p
          className="m-0 h-[50px] w-[1320px] relative leading-6 text-center inline-block"
          style={copyright2025Style}
        >
          Copyright © 2025 Armorock. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer2;
