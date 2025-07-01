import type { NextPage } from "next";
import HeroSection from "../../components/hero-section";
import Footer from "../../components/footer";

const FrequentlyAskedQuestionsPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <HeroSection />
      <main
        className="self-stretch bg-gray-100 overflow-hidden flex flex-col items-start justify-start py-16 px-[72px] box-border gap-[27px] max-w-full text-left text-3xl text-white font-open-sans mq675:py-[27px] mq675:px-9 mq675:box-border mq750:pt-[42px] mq750:pb-[42px] mq750:box-border"
        data-scroll-to="ourProductSection"
      >
        <h2 className="m-0 self-stretch relative text-6xl leading-[100px] uppercase font-medium font-oswald mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
          Our Product
        </h2>
        <div className="self-stretch h-[70px] flex flex-row items-start justify-start max-w-full">
          <div className="w-[1296px] flex flex-col items-start justify-start max-w-full">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[35px] font-bold font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              What are Armorock Polymer Concrete manholes and structures made
              of?
            </h2>
            <h3 className="m-0 self-stretch relative text-[22px] leading-[35px] font-normal font-[inherit] mq450:text-lg mq450:leading-7">
              Armorock Polymer Concrete consists of four ingredients: resin,
              sand, aggregate, and FRP rebar. 
            </h3>
          </div>
        </div>
        <section className="self-stretch h-[115px] flex flex-row items-start justify-start max-w-full text-left text-3xl text-white font-open-sans">
          <div className="w-[1296px] flex flex-col items-start justify-start gap-2.5 max-w-full">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[35px] font-bold font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              What does the 50-year corrosion warranty cover?
            </h2>
            <h3 className="m-0 self-stretch relative text-[22px] leading-[35px] font-normal font-[inherit] mq450:text-lg mq450:leading-7">
              Armorock’s 50-year corrosion warranty guarantees resistance to H2S
              gas and corrosive environments. To date, no customer has ever
              needed to use the warranty—proving the long-term reliability of
              our material.
            </h3>
          </div>
        </section>
        <section className="self-stretch h-[115px] flex flex-row items-start justify-start max-w-full text-left text-3xl text-white font-open-sans">
          <div className="w-[1296px] flex flex-col items-start justify-start gap-2.5 max-w-full">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[35px] font-bold font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              Is your product truly 100% corrosion proof?
            </h2>
            <h3 className="m-0 self-stretch relative text-[22px] leading-[35px] font-normal font-[inherit] mq450:text-lg mq450:leading-7">
              Yes. Armorock uses FRP rebar, which is completely
              corrosion-resistant. Other manufacturers often use steel rebar
              reinforcement, which is not corrosion-proof and becomes exposed
              during coring. 
            </h3>
          </div>
        </section>
        <section className="self-stretch h-[220px] flex flex-row items-start justify-start max-w-full text-left text-3xl text-white font-open-sans">
          <div className="w-[1296px] flex flex-col items-start justify-start gap-2.5 max-w-full">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[35px] font-bold font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              What makes Armorock different from traditional concrete
              structures?
            </h2>
            <h3 className="m-0 self-stretch relative text-[22px] leading-[35px] font-normal font-[inherit] mq450:text-lg mq450:leading-7">
              Armorock structures are 100% corrosion-proof, engineered with over
              twice the compressive and flexural strength of traditional
              concrete, and designed to be lighter, reducing the need for heavy
              lifting equipment during installation. Unlike traditional
              concrete, Armorock requires no coatings, liners, admixtures, or
              ongoing maintenance. This results in less rehabilitation, reduced
              labor, and significantly lower life-cycle costs. Choosing Armorock
              is not just a product decision, it is an investment in the future
              of your infrastructure. 
            </h3>
          </div>
        </section>
        <div className="self-stretch h-[70px] flex flex-row items-start justify-start max-w-full">
          <div className="w-[1296px] flex flex-col items-start justify-start max-w-full">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[35px] font-bold font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              Do Armorock structures require coatings, liners, or admixtures?
            </h2>
            <h3 className="m-0 self-stretch relative text-[22px] leading-[35px] font-normal font-[inherit] mq450:text-lg mq450:leading-7">
              No. Armorock is not a coating, liner, or admixture. It is a fully
              corrosion-proof material from the inside out. 
            </h3>
          </div>
        </div>
        <section className="self-stretch h-[105px] flex flex-row items-start justify-start max-w-full text-left text-3xl text-white font-open-sans">
          <div className="w-[1296px] flex flex-col items-start justify-start max-w-full">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[35px] font-bold font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              What sizes are available for Armorock structures?
            </h2>
            <h3 className="m-0 self-stretch relative text-[22px] leading-[35px] font-normal font-[inherit] mq450:text-lg mq450:leading-7">
              Armorock structures are available in standard diameters ranging
              from 48 inches to 192 inches. Custom sizes and configurations are
              also available to meet specific project requirements. 
            </h3>
          </div>
        </section>
      </main>
      <section
        className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start py-16 px-[72px] box-border gap-8 max-w-full text-left text-6xl text-gray-100 font-oswald mq450:pt-[27px] mq450:pb-[27px] mq450:box-border mq675:gap-4 mq675:pl-9 mq675:pr-9 mq675:box-border mq825:pt-[42px] mq825:pb-[42px] mq825:box-border"
        data-scroll-to="installationSection"
      >
        <div className="self-stretch h-[100px] flex flex-row items-start justify-start">
          <h2 className="m-0 w-[1296px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block shrink-0 mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
            installation
          </h2>
        </div>
        <section className="self-stretch h-[105px] flex flex-row items-start justify-start max-w-full text-left text-3xl text-gray-100 font-open-sans">
          <div className="w-[1296px] flex flex-col items-start justify-start max-w-full">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[35px] font-bold font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              Why are Armorock structures lighter?
            </h2>
            <h3 className="m-0 self-stretch relative text-[22px] leading-[35px] font-normal font-[inherit] mq450:text-lg mq450:leading-7">
              While polymer concrete itself weighs similar to concrete, Armorock
              structures are lighter due to their thinner walls. Thanks to a
              compressive strength of 11,000 psi, we do not require the extra
              thickness of traditional concrete. 
            </h3>
          </div>
        </section>
        <section className="self-stretch h-[105px] flex flex-row items-start justify-start max-w-full text-left text-3xl text-gray-100 font-open-sans">
          <div className="w-[1296px] flex flex-col items-start justify-start max-w-full">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[35px] font-bold font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              Are Armorock structures difficult to install?
            </h2>
            <h3 className="m-0 self-stretch relative text-[22px] leading-[35px] font-normal font-[inherit] mq450:text-lg mq450:leading-7">
              Not at all. They install just like traditional precast concrete
              only lighter, saving money on lifting equipment and installation
              time. 
            </h3>
          </div>
        </section>
        <section className="self-stretch h-[105px] flex flex-row items-start justify-start max-w-full text-left text-3xl text-gray-100 font-open-sans">
          <div className="w-[1296px] flex flex-col items-start justify-start max-w-full">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[35px] font-bold font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              Can I core into an Armorock structure in the field? Does this void
              the warranty?
            </h2>
            <h3 className="m-0 self-stretch relative text-[22px] leading-[35px] font-normal font-[inherit] mq450:text-lg mq450:leading-7">
              Yes, Armorock structures can be field-cored using a diamond
              masonry bit. No, coring does not void the warranty. Our structures
              are engineered to maintain their integrity even when modified
              on-site. 
            </h3>
          </div>
        </section>
        <section className="self-stretch h-[105px] flex flex-row items-start justify-start max-w-full text-left text-3xl text-gray-100 font-open-sans">
          <div className="w-[1296px] flex flex-col items-start justify-start max-w-full">
            <h2 className="m-0 self-stretch h-[35px] relative text-[length:inherit] leading-[35px] font-bold font-[inherit] inline-block mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              <p className="[margin-block-start:0] [margin-block-end:50px]">
                Is Armorock onsite during installation? 
              </p>
            </h2>
            <h3 className="m-0 self-stretch relative text-[22px] leading-[35px] font-normal font-[inherit] mq450:text-lg mq450:leading-7">
              Yes. Our Sales Managers, Account Managers, and Project Managers
              frequently attend job sites to assist contractors and ensure
              successful installations. It is part of our white glove service
              commitment.
            </h3>
          </div>
        </section>
      </section>
      <section
        className="self-stretch bg-firebrick overflow-hidden flex flex-col items-start justify-start py-16 px-[72px] box-border gap-8 max-w-full text-left text-3xl text-white font-open-sans mq450:pt-[27px] mq450:pb-[27px] mq450:box-border mq675:gap-4 mq675:pl-9 mq675:pr-9 mq675:box-border mq825:pt-[42px] mq825:pb-[42px] mq825:box-border"
        data-scroll-to="industryStandardsSection"
      >
        <div className="self-stretch h-[100px] flex flex-row items-start justify-start text-6xl font-oswald">
          <h2 className="m-0 w-[1296px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block shrink-0 mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
            industry standards
          </h2>
        </div>
        <section className="self-stretch h-[105px] flex flex-row items-start justify-start max-w-full text-left text-3xl text-white font-open-sans">
          <div className="w-[1296px] flex flex-col items-start justify-start max-w-full">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[35px] font-bold font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              How long has polymer concrete been around?
            </h2>
            <h3 className="m-0 self-stretch relative text-[22px] leading-[35px] font-normal font-[inherit] mq450:text-lg mq450:leading-7">
              Polymer concrete has been manufactured since the 1960s, primarily
              in Europe. In the U.S., it has been used since the 1980s, most
              commonly in large-diameter sewer interceptor pipes and other
              infrastructure applications. 
            </h3>
          </div>
        </section>
        <section className="self-stretch h-[105px] flex flex-row items-start justify-start max-w-full text-left text-3xl text-white font-open-sans">
          <div className="w-[1296px] flex flex-col items-start justify-start max-w-full">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[35px] font-bold font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              Are Armorock structures traffic-load rated?
            </h2>
            <h3 className="m-0 self-stretch relative text-[22px] leading-[35px] font-normal font-[inherit] mq450:text-lg mq450:leading-7">
              Yes. All Armorock structures are HS-20 load rated. There are no
              special bedding requirements or top/bottom loading slabs needed. 
            </h3>
          </div>
        </section>
        <div className="self-stretch h-[70px] flex flex-row items-start justify-start max-w-full">
          <div className="w-[1296px] flex flex-col items-start justify-start max-w-full">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[35px] font-bold font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              Can Armorock withstand high groundwater or buoyancy conditions?
            </h2>
            <h3 className="m-0 self-stretch relative text-[22px] leading-[35px] font-normal font-[inherit] mq450:text-lg mq450:leading-7">
              Yes. We provide buoyancy calculations and flotation collars as
              needed for installations in high groundwater areas. 
            </h3>
          </div>
        </div>
        <section className="self-stretch h-[140px] flex flex-row items-start justify-start max-w-full text-left text-3xl text-white font-open-sans">
          <div className="w-[1296px] flex flex-col items-start justify-start max-w-full">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[35px] font-bold font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              Is there an ASTM standard for polymer concrete?
            </h2>
            <h3 className="m-0 self-stretch relative text-[22px] leading-[35px] font-normal font-[inherit] mq450:text-lg mq450:leading-7">
              Currently, no ASTM standard exists specifically for polymer
              concrete structures. However, Armorock uses ASTM D6783 (rigid
              polymer concrete pipe) and ASTM C478 (precast concrete manholes)
              as benchmarks for mix design and load criteria. Armorock is also
              ISO 9001:2015 certified, ensuring consistent quality and
              compliance with internal operating standards. 
            </h3>
          </div>
        </section>
        <div className="self-stretch h-[70px] flex flex-row items-start justify-start max-w-full">
          <div className="w-[1296px] flex flex-col items-start justify-start max-w-full">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[35px] font-bold font-[inherit] mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7">
              Is Armorock polymer concrete manufactured in the United States? 
            </h2>
            <h3 className="m-0 self-stretch relative text-[22px] leading-[35px] font-normal font-[inherit] mq450:text-lg mq450:leading-7">
              Yes. Armorock is proudly American-made.
            </h3>
          </div>
        </div>
      </section>
      <Footer logo="/logo-2@2x.png" />
    </div>
  );
};

export default FrequentlyAskedQuestionsPage;
