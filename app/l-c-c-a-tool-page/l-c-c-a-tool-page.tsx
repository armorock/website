import type { NextPage } from "next";
import GetAQuoteSection from "../../components/get-a-quote-section";
import CTASection from "../../components/c-t-a-section";
import ToolSection from "../../components/tool-section";
import Footer from "../../components/footer";

const LCCAToolPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <GetAQuoteSection
        heroSectionHeight="515px"
        heroSectionBackgroundImage="url('/hero-section2@3x.png')"
      />
      <CTASection />
      <ToolSection />
      <Footer logo="/logo-2@2x.png" />
    </div>
  );
};

export default LCCAToolPage;
