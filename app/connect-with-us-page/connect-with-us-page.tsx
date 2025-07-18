"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "../../components/header";
import ConnectWithUsSection from "../../components/connect-with-us-section";
import PlanLocationsSection from "../../components/plan-locations-section";
import LinkSection from "../../components/link-section";
import Footer from "../../components/footer";

const ConnectWithUsPage: NextPage = () => {
  const router = useRouter();

  const onFAQTextClick = useCallback(() => {
    router.push("/frequently-asked-questions-page");
  }, [router]);

  const onLinkedInIconImageClick = useCallback(() => {
    window.open(
      "https://www.linkedin.com/company/armorock-polymer-concrete/posts/?feedView=all"
    );
  }, []);

  const onYouTubeIconImageClick = useCallback(() => {
    window.open("https://www.youtube.com/@Armorock-Polymer-Concrete");
  }, []);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-px leading-[normal] tracking-[normal]">
      <Header
        headerFlexWrap="unset"
        headerAlignContent="unset"
        headerTop="unset"
        headerPosition="unset"
        onFAQTextClick={onFAQTextClick}
      />
      <ConnectWithUsSection />
      <PlanLocationsSection />
      <LinkSection />
      <section id="our-socials" className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-16 px-[63px] text-center text-6xl text-gray-100 font-oswald lg:pl-[31px] lg:pr-[31px] lg:box-border mq675:pt-[42px] mq675:pb-[42px] mq675:box-border">
        <h2 className="m-0 w-[1226px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
          our socials
        </h2>
        <div className="w-[1008px] h-[307px] flex flex-row items-center justify-center gap-[83px] mq450:gap-[21px] mq675:gap-[41px]">
          <Image
            className="w-[228px] relative max-h-full object-cover cursor-pointer"
            loading="lazy"
            width={228}
            height={228}
            sizes="100vw"
            alt=""
            src="/linkedin-icon@2x.png"
            onClick={onLinkedInIconImageClick}
          />
          <Image
            className="w-[305px] relative max-h-full object-cover cursor-pointer"
            loading="lazy"
            width={305}
            height={228}
            sizes="100vw"
            alt=""
            src="/youtube-icon@2x.png"
            onClick={onYouTubeIconImageClick}
          />
        </div>
      </section>
      <Footer logo="/logo-2@2x.png"/>
    </div>
  );
};

export default ConnectWithUsPage;
