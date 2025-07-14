import type { NextPage } from "next";
import Image from "next/image";

export type AwardsCertsSectionType = {
  className?: string;
};

const AwardsCertsSection: NextPage<AwardsCertsSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start py-16 px-[49px] bg-[url('/awards-certs-section@3x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-0">
        <Image
          className="w-[417.8px] relative max-h-full object-cover"
          width={417.8}
          height={326}
          sizes="100vw"
          alt=""
          src="/hs-20@2x.png"
        />
        <Image
          className="w-[291px] relative max-h-full object-cover"
          width={291}
          height={291}
          sizes="100vw"
          alt=""
          src="/iso-9001@2x.png"
        />
        <Image
          className="w-[445px] relative max-h-full hidden"
          width={445}
          height={371}
          sizes="100vw"
          alt=""
          src="/MADE-IN-USA.svg"
        />
      </div>
    </section>
  );
};

export default AwardsCertsSection;
