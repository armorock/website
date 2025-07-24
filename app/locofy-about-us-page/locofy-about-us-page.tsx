import type { NextPage } from "next";
import Image from "next/image";
import AboutUsSection from "../../components/about-us-section";
import AboutUsSection2 from "../../components/about-us-section2";
import AboutUsSection1 from "../../components/about-us-section1";
import Footer from "../../components/footer";

const LocofyAboutUsPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <AboutUsSection />
      <section id="founding-story" className="self-stretch bg-gray-100 overflow-hidden flex flex-col items-start justify-start py-16 px-[107px] text-center text-6xl text-white font-oswald mq450:pl-5 mq450:pr-5 mq450:box-border mq675:py-[42px] mq675:px-[53px] mq675:box-border">
        <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-1.5">
          <div className="h-[211px] w-[1226px] relative">
            <h2 className="m-0 absolute top-[111px] left-[calc(50%_-_613px)] text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block w-[1226px] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
              {`our `}founding story
            </h2>
            <Image
              className="absolute top-[0px] left-[calc(50%_-_59px)] w-[117.8px] h-[124px] object-cover"
              loading="lazy"
              width={117.8}
              height={124}
              sizes="100vw"
              alt=""
              src="/logo1@2x.png"
            />
          </div>
          <div className="flex-1 relative text-[22px] leading-[30px] font-open-sans inline-block min-w-[490px] mq825:text-xl mq825:leading-7 mq825:max-w-[95%] mq675:text-lg mq675:leading-6 mq675:max-w-[95%] mq450:text-lg mq450:leading-6 mq675:min-w-full">
            Before we were Armorock, our team operated as Geneva Pipe, a precast manufacturer that utilized alternative solutions such as liners, coatings, and admixtures in our solutions to corrosive environments. We saw firsthand how liners would delaminate, coatings would crack, and the underlying concrete would continue to corrode. After years of seeing these failures repeated, Vince Bussio, the founder of Armorock, decided the industry needed a better solution. He created the company with a vision: a fully corrosion-proof structure that solves the root of the problem. Since 2010, Armorock has been innovating in the wastewater industry, providing corrosion-resistant and sustainable solutions for municipalities across the United States.
          </div>
        </div>
      </section>
      <AboutUsSection2 />
      <AboutUsSection1 />
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-start py-16 px-[49px] bg-[url('/awards-certs-section@3x.png')] bg-cover bg-no-repeat bg-[top] mq675:py-[42px] mq675:px-6 mq675:box-border">
        <div className="self-stretch flex flex-row items-center justify-center flex-nowrap content-center gap-0 mq450:flex-nowrap">
          <Image
            className="w-[417px] relative max-h-full object-cover mq1200:w-[340px] mq825:w-[220px] mq675:w-[160px] mq450:w-[125px]"
            width={417}
            height={326}
            sizes="100vw"
            alt=""
            src="/hs-20@2x.png"
          />
          <Image
            className="w-[291px] relative max-h-full object-cover mq1200:w-[210px] mq825:w-[140px] mq675:w-[100px] mq450:w-[100px]"
            width={291}
            height={291}
            sizes="100vw"
            alt=""
            src="/iso-9001@2x.png"
          />
          <Image
            className="w-[445px] relative max-h-full object-cover mq1200:w-[360px] mq825:w-[230px] mq675:w-[170px] mq450:w-[130px]"
            width={445}
            height={371}
            sizes="100vw"
            alt=""
            src="/made-usa.png"
          />
        </div>
      </section>
      <Footer logo="/logo-2@2x.png" />
    </div>
  );
};

export default LocofyAboutUsPage;
