import type { NextPage } from "next";
import Image from "next/image";
import LandingPageSection1 from "../components/landing-page-section1";
import LandingPageSection2 from "../components/landing-page-section2";
import LandingPageSection3 from "../components/landing-page-section3";
import DifferenceSection from "../components/difference-section";
import LandingPageSection5 from "../components/landing-page-section5";
import Footer from "../components/footer";

const LocofyLandingPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-y-auto flex flex-col items-start justify-start leading-[normal] tracking-[normal] max-w-full">
      <LandingPageSection1 />
      <LandingPageSection2 />
      <section className="self-stretch overflow-hidden shrink-0 flex flex-col items-start justify-start pt-16 pb-[57px] pl-[72px] pr-5 box-border bg-[url('/problem-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-6xl text-white font-oswald md:min-w-full md:pl-6 md:pr-6 sm:pl-4 sm:pr-4 sm:pt-10 sm:pb-10">
        <h2 className="m-0 relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] md:text-4xl md:leading-tight sm:text-3xl mb-6 md:mb-8 sm:mb-4">
          the problem
        </h2>
        <div className="w-full md:flex md:flex-row">
          <p className="m-0 w-[526px] relative text-[22px] leading-[30px] font-open-sans text-left flex items-center md:w-1/2 md:text-lg md:leading-relaxed sm:text-base xs:text-sm">
            <span className="w-full">
              Corrosion in wastewater systems results from a combination of H
              <sub>2</sub>S (Hydrogen Sulfide) gas and thiobacillus bacteria in
              structures, which creates sulfuric acid. Traditional precast
              concrete structures corrode when exposed to sulfuric acid, a common
              issue in the waste water industry. Corrosion increases
              rehabilitation of traditional concrete structures, increasing costs
              for municipalities over time.
            </span>
          </p>
          <div className="hidden md:block md:w-1/2"></div>
        </div>
      </section>
      <LandingPageSection3 />
      <DifferenceSection />
      <section className="self-stretch bg-whitesmoke overflow-hidden shrink-0 flex flex-row items-center justify-between flex-wrap content-center py-16 px-[118px] gap-x-0 gap-y-[70px] text-center text-6xl text-gray-100 font-oswald lg:px-[59px] md:px-6 md:py-12 sm:px-4 sm:py-8 xs:py-6">
        <div className="w-[557px] flex flex-col items-center justify-start gap-[22px] md:w-full">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] md:text-4xl md:leading-tight sm:text-3xl sm:leading-normal">
            the problem
          </h2>
          <div className="w-[550px] h-[400px] relative overflow-hidden flex items-center justify-center md:w-full md:h-[350px] sm:h-[300px] xs:h-[250px]">
            <Image
              className="w-full h-full object-cover absolute left-[10px] top-[10px] [transform:scale(1.035)]"
              loading="lazy"
              width={550}
              height={400}
              sizes="(max-width: 767px) 100vw, 550px"
              alt="Corrosion in wastewater systems"
              src="/corrosion-image@2x.png"
            />
          </div>
        </div>
        <div className="w-[557px] flex flex-col items-center justify-start gap-[22px] md:w-full md:mt-8">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] md:text-4xl md:leading-tight sm:text-3xl sm:leading-normal">
            The Solution
          </h2>
          <div className="w-[550px] h-[400px] relative overflow-hidden flex items-center justify-center md:w-full md:h-[350px] sm:h-[300px] xs:h-[250px]">
            <Image
              className="w-full h-full object-cover absolute left-[10px] top-[10px] [transform:scale(1.035)]"
              loading="lazy"
              width={550}
              height={400}
              sizes="(max-width: 767px) 100vw, 550px"
              alt="Armorock polymer concrete solution"
              src="/product-image@2x.png"
            />
          </div>
        </div>
      </section>
      <LandingPageSection5 />
      <Footer logo="/logo-2@2x.png" />
    </div>
  );
};

export default LocofyLandingPage;
