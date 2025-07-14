import type { NextPage } from "next";
import PlantsAndAddresses from "./plants-and-addresses";

export type PlanLocationsSectionType = {
  className?: string;
};

const PlanLocationsSection: NextPage<PlanLocationsSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-center py-16 pl-[53px] pr-0 bg-[url('/plan-locations-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-6xl text-gray-100 font-oswald mq450:pt-[27px] mq450:pb-[27px] mq450:box-border mq675:pl-[26px] mq675:box-border mq825:pt-[42px] mq825:pb-[42px] mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start">
        <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
          plant locations
        </h2>
      </div>
      <PlantsAndAddresses />
    </section>
  );
};

export default PlanLocationsSection;
