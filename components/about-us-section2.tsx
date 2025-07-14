import type { NextPage } from "next";
import Image from "next/image";
import Ian from "./ian";
import Chris from "./chris";

export type AboutUsSection2Type = {
  className?: string;
};

const AboutUsSection2: NextPage<AboutUsSection2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-center justify-center py-16 px-[53px] gap-[25px] text-left text-[65px] text-gray-100 font-oswald ${className}`}
    >
      <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit]">
        meet our team
      </h2>
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[65px]">
        <Ian
          ianAbernathy="Ian Abernathy"
          chiefExecutiveOfficer="Chief Executive Officer"
          image="/image@2x.png"
        />
        <Ian
          ianWidth="283px"
          ianAbernathy="Thomas Liffrig, PE"
          chiefExecutiveOfficer="Chief Operating Officer"
          image="/image-1@2x.png"
          frameDivPadding2="0px 1px 0px 0px"
          memberTitlesPadding="0px 8px 0px 0px"
        />
        <section className="h-[505px] w-[281px] flex flex-col items-end justify-start gap-5 text-center text-xl text-gray-100 font-oswald">
          <Image
            className="w-[268px] h-[385px] relative object-cover"
            width={268}
            height={385}
            sizes="100vw"
            alt=""
            src="/image-2@2x.png"
          />
          <div className="w-[281px] h-[100px] flex flex-col items-end justify-start gap-1.5">
            <h3 className="m-0 w-[268px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center">
              Brad Brei
            </h3>
            <div className="w-[281px] h-16 flex flex-row items-start justify-end py-0 pl-0 pr-[7px] box-border font-open-sans">
              <i className="h-16 w-[274px] relative leading-[30px] flex items-center justify-center">
                Chief Financial Officer
              </i>
            </div>
          </div>
        </section>
        <section className="h-[523px] w-[273px] flex flex-col items-end justify-start gap-[21.5px] text-center text-xl text-gray-100 font-oswald">
          <div className="w-[270px] h-[385px] flex flex-row items-start justify-end py-0 pl-0 pr-0.5 box-border">
            <Image
              className="h-[385px] w-full relative object-cover"
              width={268}
              height={385}
              sizes="100vw"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
          <div className="w-[269px] h-[30px] flex flex-row items-start justify-end py-0 pl-0 pr-0.5 box-border">
            <h3 className="m-0 h-[30px] w-[267px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center">
              Lake O’Donnell
            </h3>
          </div>
          <i className="w-[273px] h-[65px] relative leading-[30px] flex font-open-sans items-center justify-center">
            Director of Project Management
          </i>
        </section>
        <section className="h-[519px] w-[281px] flex flex-col items-end justify-start gap-[15px] text-center text-xl text-gray-100 font-oswald">
          <Image
            className="w-[268px] h-[385px] relative object-cover"
            width={268}
            height={385}
            sizes="100vw"
            alt=""
            src="/image-4@2x.png"
          />
          <div className="w-[281px] h-[119px] flex flex-row items-start justify-end py-0 pl-0 pr-[7px] box-border">
            <div className="h-[119px] w-[274px] flex flex-col items-start justify-start gap-[25px]">
              <div className="w-[270px] h-[30px] flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border">
                <h3 className="m-0 h-[30px] w-[267px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center">
                  Nichole Caldwell
                </h3>
              </div>
              <i className="w-[274px] h-16 relative leading-[30px] flex font-open-sans items-center justify-center">
                Director of Business Operations
              </i>
            </div>
          </div>
        </section>
        <Chris
          chrisJuneman="Chris Juneman"
          directorOfEngineering="Director of Engineering"
          image="/image-5@2x.png"
        />
        <section className="h-[503px] w-[277px] flex flex-col items-start justify-start gap-3.5 text-center text-xl text-gray-100 font-oswald">
          <Image
            className="w-[268px] h-[385px] relative object-cover"
            width={268}
            height={385}
            sizes="100vw"
            alt=""
            src="/image-6@2x.png"
          />
          <div className="w-[277px] h-[104px] flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border">
            <div className="h-[104px] w-[275px] flex flex-col items-start justify-start gap-[9px]">
              <h3 className="m-0 w-[267px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center">
                Dyanna Serrano
              </h3>
              <div className="w-[275px] h-[65px] flex flex-row items-start justify-start py-0 pl-px pr-0 box-border font-open-sans">
                <i className="h-[65px] w-[274px] relative leading-[30px] flex items-center justify-center">
                  Director of Human Resources
                </i>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[519px] w-[274px] flex flex-col items-end justify-start gap-3.5 text-center text-xl text-gray-100 font-oswald">
          <Image
            className="w-[268px] h-[385px] relative object-cover"
            width={268}
            height={385}
            sizes="100vw"
            alt=""
            src="/image-7@2x.png"
          />
          <div className="w-[274px] h-[120px] flex flex-col items-end justify-start gap-[26px]">
            <h3 className="m-0 w-[267px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center">
              Josh Elkins
            </h3>
            <i className="w-[274px] h-16 relative leading-[30px] flex font-open-sans items-center justify-center">
              Director of Operational Excellence
            </i>
          </div>
        </section>
        <Chris
          chrisHeight="497px"
          chrisJuneman="Charlie Short"
          directorOfEngineering="Director of Risk"
          image="/image-8@2x.png"
          imageIconWidth="268px"
          frameDivPadding4="0px 0px 0px 1px"
          frameDivPadding5="0px 0px 0px 3px"
        />
        <Chris
          chrisHeight="497px"
          chrisJuneman="Brandon Roundy"
          directorOfEngineering="Controller"
          image="/image-9@2x.png"
          imageIconWidth="271.5px"
          frameDivPadding4="0px 0px 0px 3px"
          frameDivPadding5="0px 0px 0px 3px"
        />
      </div>
    </section>
  );
};

export default AboutUsSection2;