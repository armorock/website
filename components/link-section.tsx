import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

export type LinkSectionType = {
  className?: string;
};

const LinkSection: NextPage<LinkSectionType> = ({ className = "" }) => {
  // Placeholder URLs - replace these with your actual URLs
  const articleLinks = [
    "https://hrg-inc.com/polymer-concrete-manholes-offer-longer-life-and-less-disruptive-construction-process/", // sustainable solution article
    "https://www.sancon.com/armorock-polymer-concrete/", // Sancon Technologies article
    "https://romtecutilities.com/vendor-spotlight-armorock-polymer-concrete", // Romtec Utilities article
    "https://acschultesnc.com/portfolio/armorock-rehab-insert-install/", // rehabilitation insert article
    "https://www.ketr.org/news/2017-02-21/sulphur-springs-wins-new-industry-armorock", // Sulphur Springs article
    "https://romtecutilities.com/implementing-polymer-concrete", // comparison article
  ];

  return (
    <section
      className={`self-stretch h-[498px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-16 px-[72px] box-border bg-[url('/link-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-6xl text-white font-oswald mq675:py-[42px] mq675:px-9 mq675:box-border ${className}`}
      id="our-socials"
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
        <a
          href={articleLinks[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-white"
        >
          <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit] mq450:text-lg mq450:leading-10 cursor-pointer hover:text-blue-200">
            Armorock Polymer Concrete Offers a Sustianable Solution in Wastewater
            Systems
          </h3>
        </a>

        <a
          href={articleLinks[1]}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-white"
        >
          <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit] mq450:text-lg mq450:leading-10 cursor-pointer hover:text-blue-200">
            Armorock Polymer Concrete – Sancon Technologies
          </h3>
        </a>

        <a
          href={articleLinks[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-white"
        >
          <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit] mq450:text-lg mq450:leading-10 cursor-pointer hover:text-blue-200">
            Armorock and Romtec Utilities: Partners in Corrosion Resistant Pump
            Stations
          </h3>
        </a>

        <a
          href={articleLinks[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-white"
        >
          <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit] mq450:text-lg mq450:leading-10 cursor-pointer hover:text-blue-200">
            Armorock Polymer Concrete Rehabilitation Insert Install
          </h3>
        </a>

        <a
          href={articleLinks[4]}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-white"
        >
          <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit] mq450:text-lg mq450:leading-10 cursor-pointer hover:text-blue-200">
            Armorock Polymer Concrete Creates Jobs in Sulphur Springs, TX
          </h3>
        </a>

        <a
          href={articleLinks[5]}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-white"
        >
          <h3 className="m-0 relative text-[length:inherit] [text-decoration:underline] leading-[50px] font-normal font-[inherit] mq450:text-lg mq450:leading-10 cursor-pointer hover:text-blue-200">
            Armorock Polymer Concrete vs. Fiberglass and Traditional Concrete Wet
            Wells
          </h3>
        </a>
      </div>
    </section>
  );
};

export default LinkSection;
