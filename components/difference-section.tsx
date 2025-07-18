import type { NextPage } from "next";
import Image from "next/image";

export type DifferenceSectionType = {
  className?: string;
};

const DifferenceSection: NextPage<DifferenceSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch overflow-hidden shrink-0 flex flex-col items-center justify-start py-16 px-[120px] box-border gap-[38px] bg-[url('/difference-section@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-6xl font-oswald mq450:pl-5 mq450:pr-5 mq450:box-border mq675:gap-[19px] mq675:py-[27px] mq675:px-[60px] mq675:box-border mq825:pt-[42px] mq825:pb-[42px] mq825:box-border ${className}`}
    >
      <div className="w-[663px] h-[213px] flex flex-col items-start justify-start max-w-full">
        <div className="w-[663px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <Image
            className="h-[113px] w-auto relative object-contain"
            width={500}
            height={113}
            sizes="500px"
            alt="Armorock Difference Logo"
            src="/white-diff-logo.svg"
            priority
          />
        </div>
        <div className="flex flex-row items-start justify-start max-w-full">
          <div className="w-[663px] flex flex-col items-center justify-start max-w-full">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
              {`the `}
              {`armorock `}difference
            </h2>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-12 mq675:gap-6">
        <section className="h-[300px] w-[390px] shadow-[25px_25px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-start justify-start pt-[15px] px-6 pb-[34px] box-border gap-[41px] text-center text-3xl text-gray-100 font-oswald mq450:gap-5">
          <div className="w-[390px] relative shadow-[25px_25px_4px_rgba(0,_0,_0,_0.25)] bg-white h-[300px] hidden" />
          <div className="flex flex-row items-start justify-start py-0 pl-[110px] pr-[111px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h2 className="m-0 h-[35px] w-[121px] relative text-[length:inherit] leading-[35px] uppercase font-medium font-[inherit] flex items-center justify-center z-[1] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              strength
            </h2>
          </div>
          <div className="w-[342px] h-[175px] relative text-xl leading-[35px] font-open-sans text-black whitespace-pre-wrap flex items-center justify-center z-[1] mq450:text-base mq450:leading-7">{`Our polymer concrete structures  have a compression strength of 11,000 psi+ and flexural strength of 1,800 psi+, a stronger and more yield-resistant product compared to traditional precast concrete. `}</div>
        </section>
        <section className="h-[300px] w-[390px] shadow-[25px_25px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-start justify-start pt-[25px] pb-[51px] pl-[35px] pr-[29px] box-border gap-3.5 text-center text-3xl text-gray-100 font-oswald">
          <div className="w-[390px] relative shadow-[25px_25px_4px_rgba(0,_0,_0,_0.25)] bg-white h-[300px] hidden" />
          <div className="flex flex-row items-start justify-start py-0 pl-[66px] pr-[72px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h2 className="m-0 w-[188px] relative text-[length:inherit] leading-[35px] uppercase font-medium font-[inherit] inline-block z-[1] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              sustainability
            </h2>
          </div>
          <div className="w-[326px] relative text-xl leading-[35px] font-open-sans text-black flex items-center justify-center z-[1] mq450:text-base mq450:leading-7">
            Using polymer concrete reduces the frequency of replacements, minimizing environmental footprint and offering a sustainable solution for wastewater systems.
          </div>
        </section>
        <section className="h-[300px] w-[390px] shadow-[25px_25px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-start justify-start pt-[21px] px-3 pb-[31px] box-border gap-[21px] text-center text-3xl text-gray-100 font-oswald">
          <div className="w-[390px] relative shadow-[25px_25px_4px_rgba(0,_0,_0,_0.25)] bg-white h-[300px] hidden" />
          <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
            <h3 className="m-0 w-[365px] relative text-[length:inherit] leading-[35px] uppercase font-medium font-[inherit] flex items-center justify-center shrink-0 z-[1] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              50-year corrosion warranty
            </h3>
          </div>
          <div className="w-[365px] h-[157px] relative text-xl leading-[35px] font-open-sans text-black flex items-center justify-center z-[1] mq450:text-base mq450:leading-7">
            Our long term reliability significantly reduces the need for costly rehabilitation and maintenance, providing unparalleled economic benefits.
          </div>
        </section>
        <section className="h-[300px] w-[390px] shadow-[25px_25px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-start justify-start pt-[26px] px-3.5 pb-[49px] box-border gap-[15px] text-center text-3xl text-gray-100 font-oswald">
          <div className="w-[390px] relative shadow-[25px_25px_4px_rgba(0,_0,_0,_0.25)] bg-white h-[300px] hidden" />
          <div className="flex flex-row items-start justify-start py-0 pl-[31px] pr-[33px]">
            <h2 className="m-0 w-[298px] relative text-[length:inherit] leading-[35px] uppercase font-medium font-[inherit] inline-block z-[1] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              iso 9001-2015 certified
            </h2>
          </div>
          <div className="w-[362px] h-[175px] relative text-xl leading-[35px] font-open-sans text-black flex items-center justify-center z-[1] mq450:text-base mq450:leading-7">
            We are an ISO 9001 Certified polymer manufacturer. Our quality control systems and procedures are maintained under the highest standards found in the United States.
          </div>
        </section>
        <section className="h-[300px] w-[390px] shadow-[25px_25px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-start justify-start pt-[30px] pb-8 pl-[15px] pr-[13px] box-border gap-7 text-center text-3xl text-gray-100 font-oswald">
          <div className="w-[390px] relative shadow-[25px_25px_4px_rgba(0,_0,_0,_0.25)] bg-white h-[300px] hidden" />
          <div className="flex flex-row items-start justify-start py-0 pl-[113px] pr-[114px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h2 className="m-0 w-[135px] relative text-[length:inherit] leading-[35px] uppercase font-medium font-[inherit] inline-block z-[1] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              lead times
            </h2>
          </div>
          <div className="w-[362px] h-[175px] relative text-xl leading-[35px] font-open-sans text-black flex items-center justify-center z-[1] mq450:text-base mq450:leading-7">{`We offer faster, more efficient installation when time is critical. For small structures, lead times are 2-4 weeks whereas large structures are 4-6 weeks. We can also expedite production based on availability. `}</div>
        </section>
        <section className="h-[300px] w-[390px] shadow-[25px_25px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-start justify-start pt-[26px] pb-[49px] pl-[9px] pr-0.5 box-border gap-[15px] text-center text-3xl text-gray-100 font-oswald">
          <div className="w-[390px] relative shadow-[25px_25px_4px_rgba(0,_0,_0,_0.25)] bg-white h-[300px] hidden" />
          <div className="flex flex-row items-start justify-start py-0 pl-1 pr-2.5">
            <h2 className="m-0 w-[365px] relative text-[length:inherit] leading-[35px] uppercase font-medium font-[inherit] flex items-center justify-center shrink-0 z-[1] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              monolithic pouring
            </h2>
          </div>
          <div className="w-[379px] relative text-xl leading-[35px] font-open-sans text-black flex items-center justify-center z-[1] mq450:text-base mq450:leading-7">
            We use a monolithic pouring system for all of our structures, including benching, to mitigate opportunities for Inflow and Infiltration and minimize the risk of leaks and cracks in structures over time.
          </div>
        </section>
      </div>
    </section>
  );
};

export default DifferenceSection;
