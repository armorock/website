import type { NextPage } from "next";

export type ContactInformationType = {
  className?: string;
};

const ContactInformation: NextPage<ContactInformationType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start py-16 px-[118px] gap-5 text-center text-6xl text-gray-100 font-oswald mq450:pl-5 mq450:pr-5 mq450:box-border mq750:py-[42px] mq750:px-[59px] mq750:box-border ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq1025:text-5xl mq1025:leading-[80px]">
        contact information
      </h1>
      <section className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-x-[30px] gap-y-[21px] text-left text-xl text-gray-100 font-open-sans">
        <div className="h-[111.3px] w-[216px] relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[37.3px] left-[0px] w-[216px] h-[74px]"
            type="text"
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] flex items-center w-[117.1px] mq450:text-base mq450:leading-6">
            First Name
          </label>
        </div>
        <div className="h-[111.3px] w-[216px] relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[37.3px] left-[0px] w-[216px] h-[74px]"
            type="text"
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] flex items-center w-[117.1px] mq450:text-base mq450:leading-6">
            Last Name
          </label>
        </div>
        <div className="h-[111px] w-[280px] relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[37px] left-[0px] w-[280px] h-[74px]"
            type="text"
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] mq450:text-base mq450:leading-6">
            Phone Number
          </label>
        </div>
        <div className="h-[111px] w-[394px] relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[37px] left-[0px] w-[394px] h-[74px]"
            type="text"
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] mq450:text-base mq450:leading-6">
            Company
          </label>
        </div>
        <div className="h-[110.7px] w-60 relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[36.7px] left-[0px] w-[240.5px] h-[74px]"
            type="text"
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] flex items-center w-[74.6px] mq450:text-base mq450:leading-6">
            City
          </label>
        </div>
        <div className="h-[111px] w-[177px] relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[37px] left-[0.4px] w-[176.8px] h-[74px]"
            type="text"
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] flex items-center w-14 mq450:text-base mq450:leading-6">
            State
          </label>
        </div>
        <div className="h-[110px] w-[345px] relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[36px] left-[0px] w-[345px] h-[74px]"
            type="text"
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] flex items-center w-[129.8px] mq450:text-base mq450:leading-6">
            Role/Position
          </label>
        </div>
        <div className="h-[110px] w-[345px] relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[36px] left-[0px] w-[345px] h-[74px]"
            type="text"
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] flex items-center w-[129.8px] mq450:text-base mq450:leading-6">
            Email
          </label>
        </div>
      </section>
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-end py-[19px] px-0 text-left text-[22px] text-gray-100 font-open-sans mq750:gap-[17px]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[34px] mq750:gap-[17px]">
          <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-[18px]">
            <input className="m-0 h-[25px] w-[25px] relative" type="checkbox" />
            <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[30px] font-normal font-[inherit] inline-block min-w-[464px] mq450:text-lg mq450:leading-6 mq750:min-w-full">
              I acknowledge that I am sharing my information with Armorock
              Polymer Concrete, and my information will be used to provide an
              estimate for my project. Armorock may use my information to
              contact me regarding my project details.
            </h3>
          </div>
          <button className="cursor-pointer border-gray-100 border-solid border-[3px] py-[5px] pl-[42px] pr-[38px] bg-gray-100 w-[147.3px] box-border flex flex-row items-end justify-start hover:bg-dimgray hover:border-dimgray hover:border-solid hover:hover:border-[3px] hover:box-border">
            <div className="relative text-xl leading-6 font-medium font-oswald text-white text-center mq450:text-base mq450:leading-[19px]">
              SUBMIT
            </div>
          </button>
        </div>
      </section>
    </section>
  );
};

export default ContactInformation;
