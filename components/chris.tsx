"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type ChrisType = {
  className?: string;
  chrisJuneman?: string;
  directorOfEngineering?: string;
  image: string;

  /** Style props */
  chrisHeight?: CSSProperties["height"];
  frameDivPadding?: CSSProperties["padding"];
  frameDivPadding1?: CSSProperties["padding"];
  imageIconWidth?: CSSProperties["width"];
  frameDivPadding2?: CSSProperties["padding"];
  frameDivPadding3?: CSSProperties["padding"];
};

const Chris: NextPage<ChrisType> = ({
  className = "",
  chrisHeight,
  frameDivPadding,
  frameDivPadding1,
  chrisJuneman,
  directorOfEngineering,
  image,
  imageIconWidth,
  frameDivPadding2,
  frameDivPadding3,
}) => {
  const chrisStyle: CSSProperties = useMemo(() => {
    return {
      height: chrisHeight,
    };
  }, [chrisHeight]);

  const imageIconStyle: CSSProperties = useMemo(() => {
    return {
      width: imageIconWidth,
    };
  }, [imageIconWidth]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding2,
    };
  }, [frameDivPadding2]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding3,
    };
  }, [frameDivPadding3]);

  return (
    <section
      className={`h-[503px] w-[275px] flex flex-col items-start justify-start gap-3.5 text-center text-xl text-gray-100 font-oswald ${className}`}
      style={chrisStyle}
    >
      <Image
        className="w-[268px] h-[385px] relative object-cover"
        width={268}
        height={385}
        sizes="100vw"
        alt=""
        src={image}
        style={imageIconStyle}
      />
      <div
        className="flex flex-row items-start justify-start py-0 pl-px pr-0"
        style={frameDiv3Style}
      >
        <div className="flex flex-col items-start justify-start gap-[9px]">
          <div
            className="flex flex-row items-start justify-start py-0 pl-[3px] pr-1"
            style={frameDiv4Style}
          >
            <h3 className="m-0 h-[30px] w-[267px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq450:text-base mq450:leading-6">
              {chrisJuneman}
            </h3>
          </div>
          <i className="w-[274px] h-[65px] relative leading-[30px] flex font-open-sans items-center justify-center mq450:text-base mq450:leading-6">
            {directorOfEngineering}
          </i>
        </div>
      </div>
    </section>
  );
};

export default Chris;
