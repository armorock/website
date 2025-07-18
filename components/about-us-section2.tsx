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
      id="meet-our-team"
      className={`self-stretch bg-white overflow-hidden flex flex-col items-center justify-center py-16 px-[53px] gap-[25px] text-left text-[65px] text-gray-100 font-oswald lg:pt-[42px] lg:pb-[42px] lg:box-border mq675:py-5 mq675:px-[26px] mq675:box-border mq825:pt-[27px] mq825:pb-[27px] mq825:box-border ${className}`}
    >
      <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-[39px] mq450:leading-[60px] mq825:text-[52px] mq825:leading-[80px]">
        meet our team
      </h2>
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[65px] mq450:gap-4 mq675:gap-8">
        <Ian
          ianAbernathy="Ian Abernathy"
          chiefExecutiveOfficer="Chief Executive Officer"
          image="/ian.png"
        />
        <Ian
          ianWidth="283px"
          ianAbernathy="Thomas Liffrig, PE"
          chiefExecutiveOfficer="Chief Operating Officer"
          image="/thomas.png"
          frameDivPadding1="0px 1px 0px 0px"
          memberRolesPadding="0px 8px 0px 0px"
        />
        <section className="h-[505px] w-[281px] flex flex-col items-end justify-start gap-5 text-center text-xl text-gray-100 font-oswald">
          <Image
            className="w-[268px] h-[385px] relative object-cover"
            width={268}
            height={385}
            sizes="100vw"
            alt=""
            src="/brad.png"
          />
          <div className="flex flex-col items-end justify-start gap-1.5">
            <h3 className="m-0 w-[268px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq450:text-base mq450:leading-6">
              Brad Brei
            </h3>
            <div className="flex flex-row items-start justify-end py-0 pl-0 pr-[7px] font-open-sans">
              <i className="h-16 w-[274px] relative leading-[30px] flex items-center justify-center mq450:text-base mq450:leading-6">
                Chief Financial Officer
              </i>
            </div>
          </div>
        </section>
        <section className="h-[523px] w-[273px] flex flex-col items-end justify-start gap-[21.5px] text-center text-xl text-gray-100 font-oswald">
          <div className="flex flex-row items-start justify-end py-0 pl-[3px] pr-0.5">
            <Image
              className="h-[385px] w-full relative object-cover"
              width={268}
              height={385}
              sizes="100vw"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
          <div className="flex flex-row items-start justify-end py-0 pl-1 pr-0.5">
            <h3 className="m-0 h-[30px] w-[267px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq450:text-base mq450:leading-6">
              Lake O’Donnell
            </h3>
          </div>
          <i className="w-[273px] h-[65px] relative leading-[30px] flex font-open-sans items-center justify-center mq450:text-base mq450:leading-6">
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
          <div className="flex flex-row items-start justify-end py-0 pl-0 pr-[7px]">
            <div className="flex flex-col items-start justify-start gap-[25px]">
              <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-1">
                <h3 className="m-0 h-[30px] w-[267px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq450:text-base mq450:leading-6">
                  Nichole Caldwell
                </h3>
              </div>
              <i className="w-[274px] h-16 relative leading-[30px] flex font-open-sans items-center justify-center mq450:text-base mq450:leading-6">
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
          <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
            <div className="flex flex-col items-start justify-start gap-[9px]">
              <h3 className="m-0 w-[267px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq450:text-base mq450:leading-6">
                Dyanna Serrano
              </h3>
              <div className="flex flex-row items-start justify-start py-0 pl-px pr-0 font-open-sans">
                <i className="h-[65px] w-[274px] relative leading-[30px] flex items-center justify-center mq450:text-base mq450:leading-6">
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
          <div className="flex flex-col items-end justify-start gap-[26px]">
            <h3 className="m-0 w-[267px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq450:text-base mq450:leading-6">
              Josh Elkins
            </h3>
            <i className="w-[274px] h-16 relative leading-[30px] flex font-open-sans items-center justify-center mq450:text-base mq450:leading-6">
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
          frameDivPadding2="0px 0px 0px 1px"
          frameDivPadding3="0px 3px"
        />
        <Chris
          chrisHeight="497px"
          chrisJuneman="Brandon Roundy"
          directorOfEngineering="Controller"
          image="/image-9@2x.png"
          imageIconWidth="271.5px"
          frameDivPadding2="0px 0px 0px 3px"
          frameDivPadding3="0px 3px"
        />
      </div>
    </section>
  );
};

export default AboutUsSection2;
