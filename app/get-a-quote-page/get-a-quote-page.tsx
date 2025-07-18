"use client";

import type { NextPage } from "next";
import Image from "next/image";
import GetAQuoteSection from "../../components/get-a-quote-section";
import SubmitYourProject from "../../components/submit-your-project";
import ContactInformation from "../../components/contact-information";
import Footer from "../../components/footer";
import { QuoteFormProvider } from "../../contexts/QuoteFormContext";

const GetAQuotePage: NextPage = () => {
  return (
    <QuoteFormProvider>
      <div className="w-full h-[2479.1px] relative bg-white overflow-hidden flex flex-col items-start justify-start gap-2.5 leading-[normal] tracking-[normal]">
        <GetAQuoteSection />
        <SubmitYourProject />
        <ContactInformation />
        <section className="self-stretch bg-gray-100 flex flex-col items-start justify-center py-8 px-[72px] text-center text-3xl text-firebrick font-oswald mq450:gap-6 mq750:gap-12 mq750:pl-9 mq750:pr-9 mq750:box-border">
        <div className="self-stretch h-[83px] flex flex-row items-center justify-center flex-wrap content-center gap-8 mq750:gap-4">
          <div className="h-[73px] w-[366px] flex flex-row items-start justify-start text-[35px] text-white">
            <Image
              className="w-[69px] relative max-h-full object-cover shrink-0 z-[1]"
              loading="lazy"
              width={69}
              height={73}
              sizes="100vw"
              alt=""
              src="/logo1@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-9 px-0 pb-0 ml-[-34px] relative">
              <h2 className="m-0 w-[331px] h-px relative text-[length:inherit] leading-[5px] uppercase font-medium font-[inherit] flex items-center justify-center shrink-0 mq450:text-[21px] mq450:leading-[3px] mq1025:text-[28px] mq1025:leading-[4px]">
                connect with us
              </h2>
            </div>
          </div>
          <h2 className="m-0 h-px w-[331px] relative text-[length:inherit] leading-[5px] uppercase font-medium font-[inherit] flex items-center mq450:text-lg mq450:leading-[3px] mq1025:text-2xl mq1025:leading-[4px]">
            <span className="w-full">
              <span className="whitespace-pre-wrap">{`phone:  `}</span>
              <span className="text-white">(702) 824-9702</span>
            </span>
          </h2>
          <h2 className="m-0 h-px w-[431px] relative text-[length:inherit] leading-[5px] uppercase font-medium font-[inherit] flex items-center mq450:text-lg mq450:leading-[3px] mq1025:text-2xl mq1025:leading-[4px]">
            <span className="w-full">
              <span className="whitespace-pre-wrap">{`email:  `}</span>
              <span className="text-white">info@armorock.com</span>
            </span>
          </h2>
        </div>
      </section>
      <Footer logo="/logo2@2x.png" />
    </div>
    </QuoteFormProvider>
  );
};

export default GetAQuotePage;
