import type { NextPage } from "next";
import Image from "next/image";

export type AboutUsSection2Type = {
  className?: string;
};

const AboutUsSection2: NextPage<AboutUsSection2Type> = ({ className = "" }) => {
  return (
    <section
      id="meet-our-team"
      className={`self-stretch bg-white overflow-hidden flex flex-col items-center justify-center py-16 px-[53px] gap-[25px] text-left text-[65px] text-gray-100 font-oswald lg:pt-[42px] lg:pb-[42px] lg:box-border mq675:py-5 mq675:px-[26px] mq675:box-border mq825:pt-[27px] mq825:pb-[27px] mq825:box-border mq450:pt-5 mq450:gap-[4px] ${className}`}
    >
      <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-[39px] mq450:leading-[60px] mq825:text-[52px] mq825:leading-[80px]">
        meet our team
      </h2>
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[65px] mq675:gap-6 mq450:gap-3">
        <section className="h-[505px] w-[289px] flex flex-col items-end justify-start gap-5 text-center text-xl text-gray-100 font-oswald mq675:w-[240px] mq450:w-[110px] mq450:h-auto mq450:gap-2">
          <Image
            className="w-[268px] h-[385px] relative object-cover mq675:w-[220px] mq675:h-[320px] mq450:w-[95px] mq450:h-[160px] mq450:object-contain"
            loading="lazy"
            width={268}
            height={385}
            sizes="100vw"
            alt="Ian Abernathy"
            src="/ian.png"
          />
          <div className="flex flex-row items-start justify-end py-0 pl-0 pr-[11px] mq450:pr-0 mq450:w-full mq450:justify-center">
            <div className="flex flex-col items-end justify-start gap-1.5 mq450:items-center mq450:w-full">
              <h3 className="m-0 w-[267px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq675:w-[220px] mq450:text-sm mq450:leading-5 mq450:w-full mq450:h-auto mq450:text-center">
                Ian Abernathy
              </h3>
              <div className="flex flex-row items-start justify-end py-0 pl-0 pr-1 font-open-sans mq450:pr-0 mq450:w-full mq450:justify-center">
                <i className="h-16 w-[274px] relative leading-[30px] flex items-center justify-center mq675:w-[220px] mq450:text-xs mq450:leading-3 mq450:w-full mq450:h-auto mq450:text-center">
                  Chief Executive Officer
                </i>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[505px] w-[283px] flex flex-col items-end justify-start gap-5 text-center text-xl text-gray-100 font-oswald mq675:w-[240px] mq450:w-[110px] mq450:h-auto mq450:gap-2">
          <Image
            className="w-[268px] h-[385px] relative object-cover mq675:w-[220px] mq675:h-[320px] mq450:w-[95px] mq450:h-[160px] mq450:object-contain"
            loading="lazy"
            width={268}
            height={385}
            sizes="100vw"
            alt="Thomas Liffrig"
            src="/thomas.png"
          />
          <div className="flex flex-row items-start justify-end py-0 pl-0 pr-[11px] mq450:pr-0 mq450:w-full mq450:justify-center" style={{ padding: "0px 1px 0px 0px" }}>
            <div className="flex flex-col items-end justify-start gap-1.5 mq450:items-center mq450:w-full">
              <h3 className="m-0 w-[267px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq675:w-[220px] mq450:text-sm mq450:leading-5 mq450:w-full mq450:h-auto mq450:text-center">
                Thomas Liffrig, PE
              </h3>
              <div className="flex flex-row items-start justify-end py-0 pl-0 pr-1 font-open-sans mq450:pr-0 mq450:w-full mq450:justify-center" style={{ padding: "0px 8px 0px 0px" }}>
                <i className="h-16 w-[274px] relative leading-[30px] flex items-center justify-center mq675:w-[220px] mq450:text-xs mq450:leading-3 mq450:w-full mq450:h-auto mq450:text-center">
                  Chief Operating Officer
                </i>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[505px] w-[281px] flex flex-col items-end justify-start gap-5 text-center text-xl text-gray-100 font-oswald mq675:w-[240px] mq450:w-[110px] mq450:h-auto mq450:gap-2">
          <Image
            className="w-[268px] h-[385px] relative object-cover mq675:w-[220px] mq675:h-[320px] mq450:w-[95px] mq450:h-[160px] mq450:object-contain"
            width={268}
            height={385}
            sizes="100vw"
            alt=""
            src="/brad.png"
          />
          <div className="flex flex-col items-end justify-start gap-1.5 mq450:items-center mq450:w-full">
            <h3 className="m-0 w-[268px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq675:w-[220px] mq450:text-sm mq450:leading-5 mq450:w-full mq450:h-auto mq450:text-center">
              Brad Brei
            </h3>
            <div className="flex flex-row items-start justify-end py-0 pl-0 pr-[7px] font-open-sans mq450:pr-0 mq450:w-full mq450:justify-center">
              <i className="h-16 w-[274px] relative leading-[30px] flex items-center justify-center mq675:w-[220px] mq450:text-xs mq450:leading-3 mq450:w-full mq450:h-auto mq450:text-center">
                Chief Financial Officer
              </i>
            </div>
          </div>
        </section>
        <section className="h-[505px] w-[281px] flex flex-col items-end justify-start gap-5 text-center text-xl text-gray-100 font-oswald mq675:w-[240px] mq450:w-[110px] mq450:h-auto mq450:gap-2">
          <Image
            className="w-[268px] h-[385px] relative object-cover mq675:w-[220px] mq675:h-[320px] mq450:w-[95px] mq450:h-[160px] mq450:object-contain"
            width={268}
            height={385}
            sizes="100vw"
            alt="Robert Guptill"
            src="/robert.png"
          />
          <div className="flex flex-col items-end justify-start gap-1.5 mq450:items-center mq450:w-full">
            <h3 className="m-0 w-[268px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq675:w-[220px] mq450:text-sm mq450:leading-5 mq450:w-full mq450:h-auto mq450:text-center">
              Robert Guptill
            </h3>
            <div className="flex flex-row items-start justify-end py-0 pl-0 pr-[7px] font-open-sans mq450:pr-0 mq450:w-full mq450:justify-center">
              <i className="h-16 w-[274px] relative leading-[30px] flex flex-col items-center justify-center mq675:w-[220px] mq450:text-xs mq450:leading-3 mq450:w-full mq450:h-auto mq450:text-center">
                <span className="block">Plant Manager</span>
                <span className="block">Plant City, FL</span>
              </i>
            </div>
          </div>
        </section>
        <section className="h-[505px] w-[281px] flex flex-col items-end justify-start gap-5 text-center text-xl text-gray-100 font-oswald mq675:w-[240px] mq450:w-[110px] mq450:h-auto mq450:gap-2">
          <Image
            className="w-[268px] h-[385px] relative object-cover mq675:w-[220px] mq675:h-[320px] mq450:w-[95px] mq450:h-[160px] mq450:object-contain"
            width={268}
            height={385}
            sizes="100vw"
            alt="John Bilberry"
            src="/john.png"
          />
          <div className="flex flex-col items-end justify-start gap-1.5 mq450:items-center mq450:w-full">
            <h3 className="m-0 w-[268px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq675:w-[220px] mq450:text-sm mq450:leading-5 mq450:w-full mq450:h-auto mq450:text-center">
              John Bilberry
            </h3>
            <div className="flex flex-row items-start justify-end py-0 pl-0 pr-[7px] font-open-sans mq450:pr-0 mq450:w-full mq450:justify-center">
              <i className="h-16 w-[274px] relative leading-[30px] flex flex-col items-center justify-center mq675:w-[220px] mq450:text-xs mq450:leading-3 mq450:w-full mq450:h-auto mq450:text-center">
                <span className="block">Plant Manager</span>
                <span className="block">Boulder City, NV</span>
              </i>
            </div>
          </div>
        </section>
        <section className="h-[505px] w-[281px] flex flex-col items-end justify-start gap-5 text-center text-xl text-gray-100 font-oswald mq675:w-[240px] mq450:w-[110px] mq450:h-auto mq450:gap-2">
          <Image
            className="w-[268px] h-[385px] relative object-cover mq675:w-[220px] mq675:h-[320px] mq450:w-[95px] mq450:h-[160px] mq450:object-contain"
            width={268}
            height={385}
            sizes="100vw"
            alt="Brad Swearingen"
            src="/brads.png"
          />
          <div className="flex flex-col items-end justify-start gap-1.5 mq450:items-center mq450:w-full">
            <h3 className="m-0 w-[268px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq675:w-[220px] mq450:text-sm mq450:leading-5 mq450:w-full mq450:h-auto mq450:text-center">
              Brad Swearingen
            </h3>
            <div className="flex flex-row items-start justify-end py-0 pl-0 pr-[7px] font-open-sans mq450:pr-0 mq450:w-full mq450:justify-center">
              <i className="h-16 w-[274px] relative leading-[30px] flex flex-col items-center justify-center mq675:w-[220px] mq450:text-xs mq450:leading-3 mq450:w-full mq450:h-auto mq450:text-center">
                <span className="block">Plant Manager</span>
                <span className="block">Sulphur Springs, TX</span>
              </i>
            </div>
          </div>
        </section>
        <section className="h-[505px] w-[283px] flex flex-col items-end justify-start gap-5 text-center text-xl text-gray-100 font-oswald mq675:w-[240px] mq450:w-[110px] mq450:h-auto mq450:gap-2">
          <Image
            className="w-[268px] h-[385px] relative object-cover mq675:w-[220px] mq675:h-[320px] mq450:w-[95px] mq450:h-[160px] mq450:object-contain"
            width={268}
            height={385}
            sizes="100vw"
            alt=""
            src="/nicole.png"
          />
          <div className="flex flex-row items-start justify-end py-0 pl-0 pr-[7px] mq450:pr-0 mq450:w-full mq450:items-center">
            <div className="flex flex-col items-end justify-start gap-1.5 mq450:items-center mq450:w-full">
                <h3 className="m-0 h-[30px] w-[267px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq675:w-[220px] mq450:text-sm mq450:leading-5 mq450:w-full mq450:h-auto mq450:text-center">
                  Nicole Caldwell
                </h3>
              <i className="w-[274px] h-16 relative leading-[30px] flex font-open-sans items-center justify-center mq675:w-[220px] mq450:text-xs mq450:leading-3 mq450:w-full mq450:h-auto mq450:text-center">
                Director of Business Operations
              </i>
            </div>
          </div>
        </section>
        <section className="h-[505px] w-[273px] flex flex-col items-end justify-start gap-5 text-center text-xl text-gray-100 font-oswald mq675:w-[240px] mq450:w-[110px] mq450:h-auto mq450:gap-2">
          <div className="flex flex-row items-start justify-end py-0 pl-[3px] pr-0.5">
            <Image
              className="h-[385px] w-full relative object-cover mq675:w-[220px] mq675:h-[320px] mq450:w-[95px] mq450:h-[160px] mq450:object-contain"
              width={268}
              height={385}
              sizes="100vw"
              alt=""
              src="/lake.png"
            />
          </div>
          <div className="flex flex-col items-end justify-start gap-[13px] mq450:gap-1">
            <h3 className="m-0 h-[30px] w-[267px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq675:w-[220px] mq450:text-sm mq450:leading-5 mq450:w-full mq450:h-auto mq450:text-center">
              Lake O'Donnell
            </h3>
            <i className="w-[273px] h-16 relative leading-[30px] flex font-open-sans items-center justify-center mq675:w-[220px] mq450:text-xs mq450:leading-3 mq450:w-full mq450:h-auto mq450:text-center">
              Director of Project Management
            </i>
          </div>
        </section>
        <section className="h-[503px] w-[277px] flex flex-col items-start justify-start gap-3.5 text-center text-xl text-gray-100 font-oswald mq675:w-[240px] mq450:w-[110px] mq450:h-auto mq450:gap-2">
          <Image
            className="w-[268px] h-[385px] relative object-cover mq675:w-[220px] mq675:h-[320px] mq450:w-[95px] mq450:h-[160px] mq450:object-contain"
            width={268}
            height={385}
            sizes="100vw"
            alt=""
            src="/dyanna.png"
          />
          <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0 mq450:items-center mq450:w-full mq450:pl-0">
            <div className="flex flex-col items-start justify-start gap-[9px] mq450:items-center mq450:w-full">
              <h3 className="m-0 w-[267px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq675:w-[220px] mq450:text-sm mq450:leading-5 mq450:w-full mq450:h-auto mq450:text-center">
                Dyanna Serrano
              </h3>
              <div className="flex flex-row items-start justify-start py-0 pl-px pr-0 font-open-sans mq450:pl-0 mq450:w-full mq450:justify-center">
                <i className="h-[65px] w-[274px] relative leading-[30px] flex items-center justify-center mq675:w-[220px] mq450:text-xs mq450:leading-3 mq450:w-full mq450:h-auto mq450:text-center">
                  Director of Human Resources
                </i>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[505px] w-[274px] flex flex-col items-end justify-start gap-5 text-center text-xl text-gray-100 font-oswald mq675:w-[240px] mq450:w-[110px] mq450:h-auto mq450:gap-2">
          <Image
            className="w-[268px] h-[385px] relative object-cover mq675:w-[220px] mq675:h-[320px] mq450:w-[95px] mq450:h-[160px] mq450:object-contain"
            width={268}
            height={385}
            sizes="100vw"
            alt=""
            src="/josh.png"
          />
          <div className="flex flex-col items-end justify-start gap-1.5 mq450:items-center mq450:w-full">
            <h3 className="m-0 w-[267px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq675:w-[220px] mq450:text-sm mq450:leading-5 mq450:w-full mq450:h-auto mq450:text-center">
              Josh Elkins
            </h3>
            <div className="flex flex-row items-start justify-end py-0 pl-0 pr-[7px] font-open-sans mq450:pr-0 mq450:w-full mq450:justify-center">
              <i className="h-16 w-[274px] relative leading-[30px] flex items-center justify-center mq675:w-[220px] mq450:text-xs mq450:leading-3 mq450:w-full mq450:h-auto mq450:text-center">
                Director of Operational Excellence
              </i>
            </div>
          </div>
        </section>
        <section className="h-[505px] w-[281px] flex flex-col items-end justify-start gap-5 text-center text-xl text-gray-100 font-oswald mq675:w-[240px] mq450:w-[110px] mq450:h-auto mq450:gap-2">
          <Image
            className="w-[268px] h-[385px] relative object-cover mq675:w-[220px] mq675:h-[320px] mq450:w-[95px] mq450:h-[160px] mq450:object-contain"
            width={268}
            height={385}
            sizes="100vw"
            alt="Charlie Short"
            src="/charlie.png"
          />
          <div className="flex flex-col items-end justify-start gap-1.5 mq450:items-center mq450:w-full">
            <h3 className="m-0 w-[267px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq675:w-[220px] mq450:text-sm mq450:leading-5 mq450:w-full mq450:h-auto mq450:text-center">
              Charlie Short
            </h3>
            <div className="flex flex-row items-start justify-end py-0 pl-0 pr-[7px] font-open-sans mq450:pr-0 mq450:w-full mq450:justify-center">
              <i className="w-[273px] h-16 relative leading-[30px] flex items-center justify-center mq675:w-[220px] mq450:text-xs mq450:leading-3 mq450:w-full mq450:h-auto mq450:text-center">
                Director of Risk/IT
              </i>
            </div>
          </div>
        </section>
        <section className="h-[505px] w-[281px] flex flex-col items-end justify-start gap-5 text-center text-xl text-gray-100 font-oswald mq675:w-[240px] mq450:w-[110px] mq450:h-auto mq450:gap-2">
          <Image
            className="w-[268px] h-[385px] relative object-cover mq675:w-[220px] mq675:h-[320px] mq450:w-[95px] mq450:h-[160px] mq450:object-contain"
            width={268}
            height={385}
            sizes="100vw"
            alt="Brandon Roundy"
            src="/brandon.png"
          />
          <div className="flex flex-col items-end justify-start gap-1.5 mq450:items-center mq450:w-full">
            <h3 className="m-0 w-[267px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq675:w-[220px] mq450:text-sm mq450:leading-5 mq450:w-full mq450:h-auto mq450:text-center">
              Brandon Roundy
            </h3>
            <div className="flex flex-row items-start justify-end py-0 pl-0 pr-[7px] font-open-sans mq450:pr-0 mq450:w-full mq450:justify-center">
              <i className="w-[273px] h-16 relative leading-[30px] flex items-center justify-center mq675:w-[220px] mq450:text-xs mq450:leading-3 mq450:w-full mq450:h-auto mq450:text-center">
                Controller
              </i>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUsSection2;
