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
    <div className="w-full relative bg-white overflow-y-auto flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <LandingPageSection1 />
      <LandingPageSection2 />
      <section className="self-stretch overflow-hidden shrink-0 flex flex-col items-start justify-start pt-16 pb-[57px] pl-[72px] pr-5 box-border bg-[url('/problem-section@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[1440px] text-center text-6xl text-white font-oswald mq675:pl-9 mq675:pt-[42px] mq675:pb-[37px] mq675:box-border">
        <h2 className="m-0 relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
          the problem
        </h2>
        <p className="m-0 w-[526px] relative text-[22px] leading-[30px] font-open-sans text-left flex items-center mq450:text-lg mq450:leading-6">
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
      </section>
      <LandingPageSection3 />
      <DifferenceSection />
      <section className="self-stretch bg-whitesmoke overflow-hidden shrink-0 flex flex-row items-center justify-between flex-wrap content-center py-16 px-[118px] gap-x-0 gap-y-[70px] text-center text-6xl text-gray-100 font-oswald lg:pl-[59px] lg:pr-[59px] lg:box-border mq675:py-[42px] mq675:px-[29px] mq675:box-border">
        <div className="w-[557px] flex flex-col items-center justify-start gap-[22px]">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
            the problem
          </h2>
          <div className="w-[550px] h-[400px] relative overflow-hidden flex items-center justify-center">
            <Image
              className="w-full h-full object-cover absolute left-[10px] top-[10px] [transform:scale(1.035)]"
              loading="lazy"
              width={550}
              height={400}
              sizes="100vw"
              alt=""
              src="/corrosion-image@2x.png"
            />
          </div>
        </div>
        <div className="w-[557px] flex flex-col items-center justify-start gap-[22px]">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
            The Solution
          </h2>
          <div className="w-[550px] h-[400px] relative overflow-hidden flex items-center justify-center">
            <Image
              className="w-full h-full object-cover absolute left-[10px] top-[10px] [transform:scale(1.035)]"
              loading="lazy"
              width={550}
              height={400}
              sizes="100vw"
              alt=""
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
