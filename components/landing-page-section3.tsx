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
      className={`self-stretch bg-whitesmoke overflow-hidden shrink-0 flex flex-col items-center justify-start py-16 px-[72px] box-border gap-[3px] max-w-full text-center text-6xl font-oswald md:py-[42px] md:px-6 sm:px-4 xs:px-3 ${className}`}
    >
      <h2 className="m-0 relative text-6xl leading-[80px] uppercase font-medium font-[inherit] md:text-4xl md:leading-tight sm:text-4xl xs:text-3xl mb-6 md:mb-8 sm:mb-4">
        {`The `}solution: polymer concrete
      </h2>
      <section className="self-stretch flex flex-row items-center justify-center flex-wrap content-center pt-0 px-0 pb-[50px] box-border gap-[15px] max-w-full text-left text-[22px] text-gray-100 font-open-sans md:pb-8 sm:pb-6 xs:pb-4">
        <p className="m-0 h-[276px] w-[557px] relative leading-[30px] flex items-center md:text-xl md:leading-relaxed sm:text-xl xs:text-lg">
          Armorock polymer concrete is a sustainable, corrosion-resistant alternative to traditional precast concrete. With a mixture of resin, aggregate, sand, and FRP rebar for enhanced structure, our polymer concrete blend is 100% corrosion resistant. No matter the environment, our product will hold up against corrosion and keep wastewater systems strong over time.
        </p>
        <Image
          className="w-[723px] max-h-full max-w-full md:w-full"
          width={723}
          height={306}
          sizes="(max-width: 767px) 100vw, 723px"
          alt="Polymer concrete solution"
          src="/Cross Section with Labels.svg"
        />
      </section>
    </section>
  );
};

export default LandingPageSection3;
