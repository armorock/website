"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type StandardsManualType = {
  className?: string;
  standardsManual?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
  standardsManualWidth?: CSSProperties["width"];
};

const StandardsManual: NextPage<StandardsManualType> = ({
  className = "",
  frameDivPadding,
  standardsManual,
  standardsManualWidth,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const standardsManualStyle: CSSProperties = useMemo(() => {
    return {
      width: standardsManualWidth,
    };
  }, [standardsManualWidth]);

  return (
    <section
      className={`h-[400px] w-[275px] flex flex-col items-end justify-start text-center text-[25px] text-white font-oswald ${className}`}
    >
      <div className="w-[275px] h-[300px] relative bg-gainsboro-200" />
      <div
        className="flex flex-row items-start justify-end py-0 pl-9 pr-[35px]"
        style={frameDiv1Style}
      >
        <h3
          className="m-0 w-[204px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block mq450:text-xl mq450:leading-[80px]"
          style={standardsManualStyle}
        >
          {standardsManual}
        </h3>
      </div>
    </section>
  );
};

export default StandardsManual;
