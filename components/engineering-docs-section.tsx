"use client";
import type { NextPage } from "next";
import StandardsManual from "./standards-manual";

export type EngineeringDocsSectionType = {
  className?: string;
};

const EngineeringDocsSection: NextPage<EngineeringDocsSectionType> = ({
  className = "",
}) => {
  return (
    <main
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-col items-center justify-start py-16 px-[53px] gap-5 text-center text-6xl text-white font-oswald mq675:pt-[42px] mq675:pb-[42px] mq675:box-border mq825:pl-[26px] mq825:pr-[26px] mq825:box-border ${className}`}
    >
      <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block min-w-[344px] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
        engineering documents
      </h2>
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-[42px] mq675:gap-[21px]">
        <StandardsManual standardsManual="standards manual" />
        <StandardsManual
          frameDivPadding="0px 20px 0px 21px"
          standardsManual="technical documents"
          standardsManualWidth="234px"
        />
        <StandardsManual
          frameDivPadding="0px 37px 0px 38px"
          standardsManual="installation guide"
          standardsManualWidth="200px"
        />
        <StandardsManual
          frameDivPadding="0px 61px 0px 62px"
          standardsManual="CAD drawings"
          standardsManualWidth="152px"
        />
      </div>
    </main>
  );
};

export default EngineeringDocsSection;
