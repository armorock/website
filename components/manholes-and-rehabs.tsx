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
      className={`h-[clamp(220px,30vw,398px)] w-[clamp(180px,28vw,406px)] flex flex-col items-center justify-start gap-4 cursor-pointer text-center text-3xl text-white font-oswald transition-all duration-300 ${className}`}
      onClick={onManholesAndRehabsClick}
    >
      <Image
        className="w-full h-[clamp(120px,25vw,331px)] object-contain"
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
        {manholesRehabs}
      </h2>
    </section>
  );
};

export default ManholesAndRehabs;
