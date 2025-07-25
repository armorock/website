"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import Image from "next/image";

export type ManholesAndRehabsType = {
  className?: string;
  manholes: string;
  manholesRehabs?: string;

  /** Style props */
  categoryLabelsPadding?: CSSProperties["padding"];
  manholesRehabsWidth?: CSSProperties["width"];
  frameDivPadding?: CSSProperties["padding"];

  /** Action props */
  onManholesAndRehabsClick?: () => void;
};

const ManholesAndRehabs: NextPage<ManholesAndRehabsType> = ({
  className = "",
  manholes,
  categoryLabelsPadding,
  manholesRehabs,
  manholesRehabsWidth,
  onManholesAndRehabsClick,
  frameDivPadding,
}) => {
  const liftStationsStyle: CSSProperties = useMemo(() => {
    return {
      width: manholesRehabsWidth,
    };
  }, [manholesRehabsWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const onManholesAndRehabsClick1 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='liftStationsSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className={`h-[clamp(240px,30vw,398px)] w-[clamp(180px,28vw,406px)] flex flex-col items-center justify-start gap-4 cursor-pointer text-center text-3xl text-white font-oswald transition-all duration-300
      sm:h-[clamp(145px,32vw,195px)] sm:w-[clamp(110px,30vw,155px)]
      xs:h-[clamp(115px,40vw,145px)] xs:w-[clamp(90px,36vw,115px)]
      ${className}`}
      onClick={onManholesAndRehabsClick}
    >
      <Image
        className="w-full h-[clamp(140px,25vw,331px)] object-contain sm:h-[clamp(70px,24vw,105px)] xs:h-[clamp(55px,32vw,85px)]"
        loading="lazy"
        width={406}
        height={331}
        sizes="100vw"
        alt=""
        src={manholes}
      />
      <h2
        className="m-0 w-full text-[clamp(1rem,2vw,1.5rem)] leading-[clamp(21px,2vw,35px)] uppercase font-medium font-[inherit] inline-block text-center"
        style={liftStationsStyle}
      >
        {manholesRehabs === 'rehabilitation inserts' ? (
          <>
            <span className="hidden xs:inline">rehabilitation<br />inserts</span>
            <span className="xs:hidden">rehabilitation inserts</span>
          </>
        ) : manholesRehabs}
      </h2>
    </section>
  );
};

export default ManholesAndRehabs;