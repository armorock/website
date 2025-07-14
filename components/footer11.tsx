import type { NextPage } from "next";
import Image from "next/image";

export type Footer1Type = {
  className?: string;
};

const Footer1: NextPage<Footer1Type> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-[50px] px-0 pb-0 text-left text-base text-black font-open-sans mq450:pt-8 mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between flex-wrap content-start py-0 px-[60px] gap-x-0 gap-y-[70px] mq675:pl-[30px] mq675:pr-[30px] mq675:box-border">
        <Image
          className="w-[304px] relative max-h-full object-cover"
          loading="lazy"
          width={304}
          height={241.1}
          sizes="100vw"
          alt=""
          src="/logo2@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-end flex-wrap content-start gap-x-[90px] gap-y-[35px] min-w-[406px] mq450:gap-[22px] mq450:min-w-full mq825:gap-[45px]">
          <div className="h-[154px] w-[132px] flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <b className="w-[132px] relative leading-10 inline-block">
                Connect With Us
              </b>
              <div className="w-[121px] relative leading-10 inline-block mt-[-6px]">
                General Contact
              </div>
            </div>
            <div className="w-[114px] h-10 relative leading-10 inline-block">
              Plant Locations
            </div>
            <div className="w-[121px] h-10 relative leading-10 inline-block">
              Social Media
            </div>
          </div>
          <div className="h-[154px] w-[143px] flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <b className="w-[73px] relative leading-10 inline-block">
                About Us
              </b>
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
            <b className="w-[106px] relative leading-10 inline-block shrink-0">
              Our Products
            </b>
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
              <div className="w-[139px] h-10 relative leading-10 inline-block">
                Engineering Docs
              </div>
            </div>
          </div>
          <div className="h-[153.7px] w-[146px] flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start shrink-0">
              <b className="w-[97px] relative leading-10 inline-block">
                Get A Quote
              </b>
              <b className="w-[146px] relative leading-10 inline-block mt-[-6px]">
                Life Cycle Analysis
              </b>
            </div>
            <b className="w-[62px] relative leading-10 inline-block shrink-0">
              Careers
            </b>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0">
              <b className="mt-[-0.3px] w-[33px] relative leading-10 inline-block shrink-0">
                FAQ
              </b>
            </div>
          </div>
        </div>
        <div className="w-[1320px] relative leading-6 text-center inline-block">
          Copyright © 2025 Armorock. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
