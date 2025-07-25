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