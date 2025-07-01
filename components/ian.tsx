"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type IanType = {
  className?: string;
  ianAbernathy?: string;
  chiefExecutiveOfficer?: string;
  image: string;

  /** Style props */
  ianWidth?: CSSProperties["width"];
  frameDivPadding?: CSSProperties["padding"];
  roleTitlesPadding?: CSSProperties["padding"];
  frameDivPadding1?: CSSProperties["padding"];
  memberRolesPadding?: CSSProperties["padding"];
};

const Ian: NextPage<IanType> = ({
  className = "",
  ianWidth,
  frameDivPadding,
  ianAbernathy,
  roleTitlesPadding,
  chiefExecutiveOfficer,
  image,
  frameDivPadding1,
  memberRolesPadding,
}) => {
  const ianStyle: CSSProperties = useMemo(() => {
    return {
      width: ianWidth,
    };
  }, [ianWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding1,
    };
  }, [frameDivPadding1]);

  const memberRolesStyle: CSSProperties = useMemo(() => {
    return {
      padding: memberRolesPadding,
    };
  }, [memberRolesPadding]);

  return (
    <section
      className={`h-[505px] w-[289px] flex flex-col items-end justify-start gap-5 text-center text-xl text-gray-100 font-oswald ${className}`}
      style={ianStyle}
    >
      <Image
        className="w-[268px] h-[385px] relative object-cover"
        loading="lazy"
        width={268}
        height={385}
        sizes="100vw"
        alt=""
        src={image}
      />
      <div
        className="flex flex-row items-start justify-end py-0 pl-0 pr-[11px]"
        style={frameDiv2Style}
      >
        <div className="flex flex-col items-end justify-start gap-1.5">
          <h3 className="m-0 w-[267px] h-[30px] relative text-[length:inherit] leading-[30px] font-medium font-[inherit] flex items-center justify-center mq450:text-base mq450:leading-6">
            {ianAbernathy}
          </h3>
          <div
            className="flex flex-row items-start justify-end py-0 pl-0 pr-1 font-open-sans"
            style={memberRolesStyle}
          >
            <i className="h-16 w-[274px] relative leading-[30px] flex items-center justify-center mq450:text-base mq450:leading-6">
              {chiefExecutiveOfficer}
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ian;
