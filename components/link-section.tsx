import type { NextPage } from "next";
import Image from "next/image";

export type LinkSectionType = {
  className?: string;
};

const LinkSection: NextPage<LinkSectionType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] h-[498px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-16 px-[72px] box-border bg-[url('/link-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-6xl text-white font-oswald ${className}`}
    >
      <div className="w-[1334px] h-[100px] flex flex-row items-center justify-start">
        <Image
          className="w-[90px] relative max-h-full object-cover"
          loading="lazy"
          width={90}
          height={77}
          sizes="100vw"
          alt=""
          src="/logo--white@2x.png"
        />
        <h2 className="m-0 relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit]">
          armorock community engagement
        </h2>
      </div>
      <div className="w-[759px] h-[300px] flex flex-col items-start justify-start text-[22px] font-open-sans">
        <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit]">
          Armorock Polymer Concrete Offers a Sustianable Solution in Wastewater
          Systems
        </h3>
        <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit]">
          Armorock Polymer Concrete – Sancon Technologies
        </h3>
        <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit]">
          Armorock and Romtec Utilities: Partners in Corrosion Resistant Pump
          Stations
        </h3>
        <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit]">
          Armorock Polymer Concrete Rehabilitation Insert Install
        </h3>
        <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit]">
          Armorock Polymer Concrete Creates Jobs in Sulphur Springs, TX
        </h3>
        <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit]">
          Armorock Polymer Concrete vs. Fiberglass and Traditional Concrete Wet
          Wells
        </h3>
      </div>
    </section>
  );
};

export default LinkSection;