import type { NextPage } from "next";

export type ContactInformationType = {
  className?: string;
};

const ContactInformation: NextPage<ContactInformationType> = ({
  className = "",
}) => {
  return (
    <main
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start py-16 px-[118px] gap-5 text-center text-6xl text-gray-100 font-oswald mq450:pl-5 mq450:pr-5 mq450:box-border mq675:py-[42px] mq675:px-[59px] mq675:box-border ${className}`}
    >
      <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
        contact information
      </h2>
      <section className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-x-[30px] gap-y-[21px] text-left text-xl text-gray-100 font-open-sans">
        <div className="h-[111.3px] w-[216px] flex flex-col items-start justify-start gap-[7.3px]">
          <h3 className="m-0 w-[117.1px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center mq450:text-base mq450:leading-6">
            First Name
          </h3>
          <div className="w-[216px] h-[74px] relative bg-gainsboro-200" />
        </div>
        <div className="h-[111.3px] w-[216px] flex flex-col items-start justify-start gap-[7.3px]">
          <h3 className="m-0 w-[117.1px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center mq450:text-base mq450:leading-6">
            Last Name
          </h3>
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 w-[216px] h-[74px] relative"
            type="text"
          />
        </div>
        <div className="h-[111px] w-[280px] flex flex-col items-start justify-start gap-[7px]">
          <h3 className="m-0 w-[143px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] inline-block mq450:text-base mq450:leading-6">
            Phone Number
          </h3>
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 w-[280px] h-[74px] relative"
            type="text"
          />
        </div>
        <div className="h-[111px] w-[394px] flex flex-col items-start justify-start gap-[7px]">
          <h3 className="m-0 w-[51px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] inline-block mq450:text-base mq450:leading-6">
            Email
          </h3>
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 w-[394px] h-[74px] relative"
            type="text"
          />
        </div>
        <div className="h-[110px] w-[345px] flex flex-col items-start justify-start gap-1.5">
          <h3 className="m-0 w-[129.8px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center mq450:text-base mq450:leading-6">
            Company
          </h3>
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 w-[345px] h-[74px] relative"
            type="text"
          />
        </div>
        <div className="h-[110.7px] w-[345px] flex flex-col items-start justify-start gap-[6.7px]">
          <h3 className="m-0 w-[107.1px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center mq450:text-base mq450:leading-6">
            City
          </h3>
          <textarea
            className="[border:none] bg-gainsboro-200 h-auto w-[345px] [outline:none] relative"
            rows={4}
            cols={17}
          />
        </div>
        <div className="h-[110.7px] w-[345px] flex flex-col items-start justify-start gap-[6.7px]">
          <h3 className="m-0 w-[82.3px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center mq450:text-base mq450:leading-6">
            State
          </h3>
          <textarea
            className="[border:none] bg-gainsboro-200 h-auto w-[345px] [outline:none] relative"
            rows={4}
            cols={17}
          />
        </div>
      </section>
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-end py-[19px] px-0 text-left text-[22px] text-gray-100 font-open-sans mq675:gap-[17px]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[34px] mq675:gap-[17px]">
          <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-[18px]">
            <div className="w-[25px] relative bg-gainsboro-200 h-[25px]" />
            <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[30px] font-normal font-[inherit] inline-block min-w-[464px] mq450:text-lg mq450:leading-6 mq675:min-w-full">
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
    </main>
  );
};

export default ContactInformation;
