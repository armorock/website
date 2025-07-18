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
      className={`self-stretch bg-gray-100 overflow-hidden shrink-0 flex flex-col items-start justify-start py-16 px-[46px] box-border max-w-full text-center text-6xl text-white font-oswald mq675:py-[42px] mq675:px-[23px] mq675:box-border ${className}`}
    >
      <div className="self-stretch h-[350px] flex flex-row items-start justify-center flex-wrap content-start pt-0 px-0 pb-0.5 box-border gap-16 max-w-full mq450:gap-4 mq675:gap-8">
        <div className="w-[495px] flex flex-col items-center justify-start gap-[38px] mq675:gap-[19px]">
          <Image
            className="w-[184.3px] relative max-h-full"
            loading="lazy"
            width={184.3}
            height={194}
            sizes="100vw"
            alt=""
            src="/Who is Armorock Logo.svg"
          />
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[25px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[15px] mq825:text-5xl mq825:leading-5">
            Who is Armorock?
          </h2>
        </div>
        <section className="h-[347px] w-[761px] flex flex-col items-end justify-start gap-[15px] max-w-full text-left text-[22px] text-white font-open-sans">
          <div className="w-[761px] flex flex-col items-start justify-start gap-[7px] max-w-full">
            <p className="m-0 w-[750px] h-[225px] relative leading-[30px] inline-block mq450:text-lg mq450:leading-6">
              We are an innovative polymer concrete company that provides corrosion-resistant, long-lasting solutions to common issues within the wastewater industry. Founded in 2010, our goal has been to drive sustainability in infrastructure through the use of polymer concrete structures. Rather than using alternative fixes like liners, coatings, and admixtures, our concrete formula is built to hold up against corrosive environments and keep wastewater systems strong over time.
            </p>
            <p className="m-0 self-stretch relative text-[25px] leading-[50px] italic mq450:text-xl mq450:leading-10">
              Sustainable in Design. Proven in Performance. Trusted for the
              Future.
            </p>
          </div>
          <button
            className="cursor-pointer border-firebrick border-solid border-[3px] py-[9px] px-2 bg-firebrick w-40 h-[50px] box-border flex flex-row items-center justify-center hover:bg-indianred hover:border-indianred hover:border-solid hover:hover:border-[3px] hover:box-border"
            onClick={onConnectWithUsButtonClick}
          >
            <div className="relative text-xl leading-6 font-medium font-oswald text-white text-right [text-shadow:1px_0_0_#bb2034,_0_1px_0_#bb2034,_-1px_0_0_#bb2034,_0_-1px_0_#bb2034]">
              OUR STORY
            </div>
          </button>
        </section>
      </div>
    </section>
  );
};

export default LandingPageSection2;
