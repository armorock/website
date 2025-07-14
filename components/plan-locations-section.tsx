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
      className={`self-stretch overflow-hidden flex flex-col items-center justify-center py-16 pl-[53px] pr-0 bg-[url('/plan-locations-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-6xl text-gray-100 font-oswald ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start">
        <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit]">
          plant locations
        </h2>
      </div>
      <PlantsAndAddresses />
    </section>
  );
};

export default PlanLocationsSection;