import type { NextPage } from "next";
import GetAQuoteSection from "../../components/get-a-quote-section";
import SubmitYourProject from "../../components/submit-your-project";
import ContactInformation from "../../components/contact-information";
import Footer from "../../components/footer";

const GetAQuotePage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-2.5 leading-[normal] tracking-[normal]">
      <GetAQuoteSection logoImage="/logo-image@2x.png" />
      <SubmitYourProject />
      <ContactInformation />
      <Footer logo="/logo-2@2x.png" />
    </div>
  );
};

export default GetAQuotePage;
