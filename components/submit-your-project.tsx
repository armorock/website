import type { NextPage } from "next";

export type SubmitYourProjectType = {
  className?: string;
};

const SubmitYourProject: NextPage<SubmitYourProjectType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start py-16 px-[25px] gap-[21px] text-left text-[65px] text-gray-100 font-oswald mq675:pt-[42px] mq675:pb-[42px] mq675:box-border ${className}`}
    >
      <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] whitespace-pre-wrap mq450:text-[39px] mq450:leading-[60px] mq825:text-[52px] mq825:leading-[80px]">
        {" "}
        submit your project
      </h2>
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-x-[76px] gap-y-0 text-center text-[35px] mq675:gap-[19px] mq750:gap-[38px]">
        <div className="h-[165px] w-[272px] flex flex-col items-start justify-start">
          <h1 className="m-0 w-[272px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block shrink-0 mq450:text-[21px] mq450:leading-[60px] mq825:text-[28px] mq825:leading-[80px]">
            upload a plan set
          </h1>
          <div className="flex flex-row items-start justify-start py-0 pl-8 pr-10 mt-[-10px] relative">
            <div className="h-[75px] w-[200px] relative bg-gainsboro-200 shrink-0" />
          </div>
        </div>
        <div className="h-[318.1px] w-10 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border">
          <div className="flex flex-row items-start justify-start pt-0 px-[19px] pb-[13px]">
            <div className="h-[121.7px] w-px relative border-gray-100 border-solid border-r-[1px] box-border shrink-0" />
          </div>
          <h1 className="m-0 w-10 relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block shrink-0 mt-[-13px] mq450:text-[21px] mq450:leading-[60px] mq825:text-[28px] mq825:leading-[80px]">
            or
          </h1>
          <div className="flex flex-row items-start justify-start py-0 pl-5 pr-[19px] mt-[-13px] relative">
            <div className="h-[121.7px] w-px relative border-gray-100 border-solid border-r-[1px] box-border shrink-0" />
          </div>
        </div>
        <section className="h-[377px] w-[671px] flex flex-col items-start justify-start text-center text-[35px] text-gray-100 font-oswald">
          <div className="flex flex-row items-start justify-start py-0 px-0.5">
            <h1 className="m-0 w-[334px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block shrink-0 mq450:text-[21px] mq450:leading-[60px] mq825:text-[28px] mq825:leading-[80px]">
              share project details
            </h1>
          </div>
          <div className="h-[277px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
            <div className="mt-[-13px] h-[290px] w-[671px] relative bg-gainsboro-200 shrink-0" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default SubmitYourProject;
