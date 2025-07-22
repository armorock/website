"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export type LandingPageSection2Type = {
  className?: string;
};

const LandingPageSection2: NextPage<LandingPageSection2Type> = ({
  className = "",
}) => {
  const router = useRouter();

  const onConnectWithUsButtonClick = useCallback(() => {
    router.push("/locofy-about-us-page");
  }, [router]);

  return (
    <section
      className={`self-stretch bg-gray-100 overflow-hidden shrink-0 flex flex-col items-start justify-start py-16 px-[46px] box-border max-w-full text-center text-6xl text-white font-oswald md:py-10 sm:py-8 xs:py-6 sm:px-4 xs:px-3 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start pt-0 px-0 pb-0.5 box-border gap-16 max-w-full md:gap-8 sm:gap-6 xs:gap-4 md:flex-col md:items-center">
        <div className="w-[495px] flex flex-col items-center justify-start gap-[38px] md:w-full md:gap-5 sm:gap-4">
          <Image
            className="w-[184.3px] relative max-h-full md:w-[150px] sm:w-[120px]"
            loading="lazy"
            width={184.3}
            height={194}
            sizes="(max-width: 767px) 150px, (max-width: 639px) 120px, 184.3px"
            alt="Who is Armorock Logo"
            src="/Who is Armorock Logo.svg"
          />
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[25px] uppercase font-medium font-[inherit] md:text-5xl md:leading-tight sm:text-5xl xs:text-4xl">
            Who is Armorock?
          </h2>
        </div>
        <section className="flex flex-col items-end justify-start gap-[15px] max-w-full text-left text-[22px] text-white font-open-sans md:items-center md:w-full">
          <div className="w-[761px] flex flex-col items-start justify-start gap-[20px] max-w-full md:items-center">
            <p className="m-0 w-[750px] relative leading-[30px] inline-block md:w-full md:text-center md:text-xl md:leading-relaxed sm:text-xl xs:text-lg">
              We are an innovative polymer concrete company that provides corrosion-resistant, long-lasting solutions to common issues within the wastewater industry. Founded in 2010, our goal has been to drive sustainability in infrastructure through the use of polymer concrete structures. Rather than using alternative fixes like liners, coatings, and admixtures, our concrete formula is built to hold up against corrosive environments and keep wastewater systems strong over time.
            </p>
            <p className="m-0 self-stretch relative text-[25px] leading-[50px] italic md:text-center md:text-2xl md:leading-normal sm:text-2xl xs:text-xl mt-2 md:mt-3">
              Sustainable in Design. Proven in Performance. Trusted for the
              Future.
            </p>
          </div>
          <button
            className="cursor-pointer border-firebrick border-solid border-[3px] py-[9px] px-1 bg-firebrick w-32 h-[50px] box-border flex flex-row items-center justify-center hover:bg-indianred hover:border-indianred hover:border-solid hover:hover:border-[3px] hover:box-border md:w-[160px] md:mt-2 sm:w-[140px]"
            onClick={onConnectWithUsButtonClick}
          >
            <div className="relative text-xl leading-6 font-medium font-oswald text-white text-center md:text-xl sm:text-lg xs:text-lg [text-shadow:1px_0_0_#bb2034,_0_1px_0_#bb2034,_-1px_0_0_#bb2034,_0_-1px_0_#bb2034]">
              OUR STORY
            </div>
          </button>
        </section>
      </div>
    </section>
  );
};

export default LandingPageSection2;
