"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "../../components/header";
import ConnectWithUsSection from "../../components/connect-with-us-section";
import PlanLocationsSection from "../../components/plan-locations-section";
import LinkSection from "../../components/link-section";
import Footer1 from "../../components/footer11";

const ConnectWithUsPage: NextPage = () => {
  const router = useRouter();

  const onFAQTextClick = useCallback(() => {
    router.push("/frequently-asked-questions-page");
  }, [router]);

  const onCareersTextClick = useCallback(() => {
    router.push("/careers-page");
  }, [router]);

  const onLinkedInIconImageClick = useCallback(() => {
    window.open(
      "https://www.linkedin.com/company/armorock-polymer-concrete/posts/?feedView=all"
    );
  }, []);

  const onYouTubeIconImageClick = useCallback(() => {
    window.open("https://www.youtube.com/@ArmorockPolymerConcrete/featured");
  }, []);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-px">
      <Header
        headerFlexWrap="unset"
        headerAlignContent="unset"
        headerTop="unset"
        headerPosition="unset"
        onFAQTextClick={onFAQTextClick}
        onCareersTextClick={onCareersTextClick}
      />
      <ConnectWithUsSection />
      <PlanLocationsSection />
      <LinkSection />
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-16 px-[63px] text-center text-6xl text-gray-100 font-oswald">
        <h2 className="m-0 w-[1226px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block">
          our socials
        </h2>
        <div className="w-[1008px] h-[307px] flex flex-row items-center justify-center gap-[83px]">
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
      <Footer1 />
    </div>
  );
};

export default ConnectWithUsPage;