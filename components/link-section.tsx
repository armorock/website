import type { NextPage } from "next";
import Image from "next/image";

export type LinkSectionType = {
  className?: string;
};

const LinkSection: NextPage<LinkSectionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[498px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-16 px-[72px] box-border bg-[url('/link-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-6xl text-white font-oswald mq675:py-[42px] mq675:px-9 mq675:box-border ${className}`}
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
        <h2 className="m-0 relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
          armorock community engagement
        </h2>
      </div>
      <div className="self-stretch h-[300px] flex flex-col items-start justify-start text-[22px] font-open-sans">
        <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit] mq450:text-lg mq450:leading-10">
          Armorock Polymer Concrete Offers a Sustianable Solution in Wastewater
          Systems
        </h3>
        <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit] mq450:text-lg mq450:leading-10">
          Armorock Polymer Concrete – Sancon Technologies
        </h3>
        <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit] mq450:text-lg mq450:leading-10">
          Armorock and Romtec Utilities: Partners in Corrosion Resistant Pump
          Stations
        </h3>
        <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit] mq450:text-lg mq450:leading-10">
          Armorock Polymer Concrete Rehabilitation Insert Install
        </h3>
        <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit] mq450:text-lg mq450:leading-10">
          Armorock Polymer Concrete Creates Jobs in Sulphur Springs, TX
        </h3>
        <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit] mq450:text-lg mq450:leading-10">
          Armorock Polymer Concrete vs. Fiberglass and Traditional Concrete Wet
          Wells
        </h3>
      </div>
    </section>
  );
};

export default LinkSection;
