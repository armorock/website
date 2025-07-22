import type { NextPage } from "next";
import Image from "next/image";

export type LandingPageSection3Type = {
  className?: string;
};

const LandingPageSection3: NextPage<LandingPageSection3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-whitesmoke overflow-hidden shrink-0 flex flex-col items-center justify-start py-16 px-[72px] box-border gap-[3px] max-w-full text-center text-6xl font-oswald mq675:py-[42px] mq675:px-9 mq675:box-border ${className}`}
    >
      <h2 className="m-0 relative text-5xl leading-[80px] uppercase font-medium font-[inherit] mq450:text-3xl mq450:leading-[48px] mq825:text-4xl mq825:leading-[64px] mb-6 md:mb-8 sm:mb-4">
        {`The `}solution: polymer concrete
      </h2>
      <section className="self-stretch flex flex-row items-center justify-center flex-wrap content-center pt-0 px-0 pb-[50px] box-border gap-[15px] max-w-full text-left text-[22px] text-gray-100 font-open-sans mq450:pb-8 mq450:box-border">
        <p className="m-0 h-[276px] w-[557px] relative leading-[30px] flex items-center mq450:text-lg mq450:leading-6">
          Armorock polymer concrete is a sustainable, corrosion-resistant alternative to traditional precast concrete. With a mixture of resin, aggregate, sand, and FRP rebar for enhanced structure, our polymer concrete blend is 100% corrosion resistant. No matter the environment, our product will hold up against corrosion and keep wastewater systems strong over time.
        </p>
        <Image
          className="w-[723px] max-h-full max-w-full"
          width={723}
          height={306}
          sizes="100vw"
          alt="Polymer concrete solution"
          src="/Cross Section with Labels.svg"
        />
      </section>
    </section>
  );
};

export default LandingPageSection3;
