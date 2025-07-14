import type { NextPage } from "next";

export type ConnectWithUsSectionType = {
  className?: string;
};

const ConnectWithUsSection: NextPage<ConnectWithUsSectionType> = ({
  className = "",
}) => {
  return (
    <main
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-col items-center justify-start py-[50px] px-[53px] gap-[39px] text-left text-6xl text-white font-oswald ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start">
        <h2 className="m-0 relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit]">
          connect with us
        </h2>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-[59px] text-center text-[35px]">
        <div className="w-[324px] flex flex-col items-center justify-start gap-[105px]">
          <div className="relative leading-[5px] uppercase font-medium">
            <p className="[margin-block-start:0] [margin-block-end:50px]">{`phone: `}</p>
            <p className="m-0">(702) 824-9702</p>
          </div>
          <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[5px] uppercase font-medium font-[inherit]">
            <p className="[margin-block-start:0] [margin-block-end:50px]">{`email: `}</p>
            <p className="m-0">info@armorock.com</p>
          </h1>
        </div>
        <div className="h-[489.1px] w-10 flex flex-col items-start justify-start gap-[1.4px]">
          <div className="w-[20.5px] h-[185.6px] flex flex-row items-start justify-start py-0 pl-[19.5px] pr-0 box-border">
            <div className="h-[186.6px] w-px relative bg-white border-white border-solid border-r-[1px] box-border" />
          </div>
          <div className="w-10 h-[302.1px] flex flex-col items-start justify-start gap-[16.5px]">
            <div className="w-10 h-[100px] relative leading-[100px] uppercase font-medium inline-block [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] shrink-0">
              or
            </div>
            <div className="w-[21px] h-[185.6px] flex flex-row items-start justify-start py-0 pl-5 pr-0 box-border">
              <div className="h-[186.6px] w-px relative bg-white border-white border-solid border-r-[1px] box-border shrink-0" />
            </div>
          </div>
        </div>
        <section className="flex-1 flex flex-col items-start justify-start gap-[39px] text-left text-xl text-white font-open-sans">
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-[30px] gap-y-[17px]">
            <div className="h-[111.3px] w-[216px] flex flex-col items-start justify-start gap-[7.3px]">
              <h3 className="m-0 w-[117.1px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center">
                First Name
              </h3>
              <input
                className="[border:none] [outline:none] bg-gainsboro-200 w-[216px] h-[74px] relative"
                type="text"
              />
            </div>
            <div className="h-[111.3px] w-[216px] flex flex-col items-start justify-start gap-[7.3px]">
              <h3 className="m-0 w-[117.1px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center">
                Last Name
              </h3>
              <input
                className="[border:none] [outline:none] bg-gainsboro-200 w-[216px] h-[74px] relative"
                type="text"
              />
            </div>
            <div className="h-[111px] w-[280px] flex flex-col items-start justify-start gap-[7px]">
              <h3 className="m-0 w-[143px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] inline-block">
                Phone Number
              </h3>
              <input
                className="[border:none] [outline:none] bg-gainsboro-200 w-[280px] h-[74px] relative"
                type="text"
              />
            </div>
            <div className="h-[111px] w-[345px] flex flex-col items-start justify-start gap-[7px]">
              <h3 className="m-0 w-[96.9px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center">
                Company
              </h3>
              <input
                className="[border:none] [outline:none] bg-gainsboro-200 w-[345px] h-[74px] relative"
                type="text"
              />
            </div>
            <div className="h-[111px] w-[212px] flex flex-col items-start justify-start gap-[7px]">
              <h3 className="m-0 w-[59.6px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center">
                City
              </h3>
              <input
                className="[border:none] [outline:none] bg-gainsboro-200 w-[212px] h-[74px] relative"
                type="text"
              />
            </div>
            <div className="h-[111px] w-[155px] flex flex-col items-start justify-start gap-[7px]">
              <h3 className="m-0 w-[55px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center">
                State
              </h3>
              <input
                className="[border:none] [outline:none] max-w-full bg-gainsboro-200 w-[155px] h-[74px] relative"
                type="text"
              />
            </div>
            <div className="h-[110px] w-[345px] flex flex-col items-start justify-start gap-1.5">
              <h3 className="m-0 w-[141px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center">
                Role/Position
              </h3>
              <input
                className="[border:none] [outline:none] bg-gainsboro-200 w-[345px] h-[74px] relative"
                type="text"
              />
            </div>
            <div className="h-[111px] w-[394px] flex flex-col items-start justify-start gap-[7px]">
              <h3 className="m-0 w-[51px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] inline-block">
                Email
              </h3>
              <input
                className="[border:none] [outline:none] bg-gainsboro-200 w-[394px] h-[74px] relative"
                type="text"
              />
            </div>
          </div>
          <h2 className="m-0 relative text-[35px] leading-[25px] uppercase font-medium font-oswald text-center">
            i want more information about:
          </h2>
          <div className="self-stretch flex flex-row items-end justify-start flex-wrap content-end">
            <div className="flex-1 flex flex-row items-end justify-start flex-wrap content-end gap-[42px]">
              <div className="h-[30px] w-[216px] flex flex-row items-end justify-start gap-2.5">
                <input className="m-0 h-[27px] w-[25px]" type="checkbox" />
                <h3 className="m-0 w-[181px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center shrink-0">
                  Lunch and Learns
                </h3>
              </div>
              <div className="h-[30px] w-[141px] flex flex-row items-end justify-start gap-2.5">
                <input className="m-0 h-[27px] w-[25px]" type="checkbox" />
                <h3 className="m-0 w-[106px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] inline-block">
                  Plant Tours
                </h3>
              </div>
              <div className="h-[30px] w-[292px] flex flex-row items-start justify-start gap-[11px]">
                <input className="m-0 h-[26px] w-[25px]" type="checkbox" />
                <h3 className="m-0 w-64 relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center shrink-0">
                  Virtual Meetings/Webinars
                </h3>
              </div>
            </div>
          </div>
          <button className="cursor-pointer border-firebrick border-solid border-[3px] py-[9px] px-[42px] bg-firebrick w-[147.3px] box-border flex flex-row items-end justify-end">
            <div className="relative text-xl leading-6 font-medium font-oswald text-white text-center">
              SUBMIT
            </div>
          </button>
        </section>
      </div>
    </main>
  );
};

export default ConnectWithUsSection;