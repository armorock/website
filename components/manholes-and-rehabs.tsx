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
  frameDivPadding1?: CSSProperties["padding"];

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
  frameDivPadding1,
}) => {
  const liftStationsStyle: CSSProperties = useMemo(() => {
    return {
      width: manholesRehabsWidth,
    };
  }, [manholesRehabsWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding1,
    };
  }, [frameDivPadding1]);

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
      className={`h-[398px] w-[406px] flex flex-col items-start justify-start gap-8 cursor-pointer text-left text-3xl text-white font-oswald mq450:gap-4 ${className}`}
      onClick={onManholesAndRehabsClick}
    >
      <Image
        className="w-[406px] h-[331px] relative"
        loading="lazy"
        width={406}
        height={331}
        sizes="100vw"
        alt=""
        src={manholes}
      />
      <div
        className="flex flex-row items-start justify-start py-0 pl-[121px] pr-[120px] mq450:pl-5 mq450:pr-5 mq450:box-border"
        style={frameDivStyle}
      >
        <h2
          className="m-0 w-[164px] relative text-[length:inherit] leading-[35px] uppercase font-medium font-[inherit] inline-block mq450:text-lg mq450:leading-[21px] mq825:text-2xl mq825:leading-7"
          style={liftStationsStyle}
        >
          {manholesRehabs}
        </h2>
      </div>
    </section>
  );
};

export default ManholesAndRehabs;