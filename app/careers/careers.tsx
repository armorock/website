"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/header";
import CompanyCulture from "../../components/company-culture";
import Footer from "../../components/footer";

const CareersPage: NextPage = () => {
  const router = useRouter();

  const onFAQTextClick = useCallback(() => {
    router.push("/frequently-asked-questions-page");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-center justify-start bg-[url('/hero-section12@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-6xl text-gray-100 font-oswald">
        <Header
          headerFlexWrap="unset"
          headerAlignContent="unset"
          headerTop="0"
          headerPosition="sticky"
          onFAQTextClick={onFAQTextClick}
        />
        <div className="self-stretch flex flex-col items-end justify-start pt-0 px-[45px] pb-[38px] gap-[15px] mq825:pl-[22px] mq825:pr-[22px] mq825:box-border">
          <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
            armorock careers
          </h1>
          <h1 className="m-0 w-[781px] relative text-[length:inherit] leading-[75px] uppercase font-medium font-[inherit] text-right flex items-center mq450:text-4xl mq450:leading-[45px] mq825:text-5xl mq825:leading-[60px]">
            <span className="w-full">
              <span>take part in the</span>
              <span className="text-firebrick"> future</span>
              <span>{` of `}</span>
              <span className="text-firebrick">corrosion-resistant,</span>
              <span>{` `}</span>
              <span className="text-firebrick">sustainable</span>
              <span className="whitespace-pre-wrap">{` infrastructure.  `}</span>
            </span>
          </h1>
        </div>
      </section>
      <CompanyCulture />
      <Footer logo="/logo-image@2x.png" />
    </div>
  );
};

export default CareersPage;
