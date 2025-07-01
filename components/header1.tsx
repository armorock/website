"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export type Header1Type = {
  className?: string;
  logoImage: string;

  /** Style props */
  headerPadding?: CSSProperties["padding"];
  mainNavigationBarMargin?: CSSProperties["margin"];

  /** Action props */
  onOurProductsTextClick?: () => void;
  onConnectWithUsClick?: () => void;
};

const Header1: NextPage<Header1Type> = ({
  className = "",
  headerPadding,
  logoImage,
  mainNavigationBarMargin,
  onOurProductsTextClick,
  onConnectWithUsClick,
}) => {
  const header1Style: CSSProperties = useMemo(() => {
    return {
      padding: headerPadding,
    };
  }, [headerPadding]);

  const mainNavigationBarStyle: CSSProperties = useMemo(() => {
    return {
      margin: mainNavigationBarMargin,
    };
  }, [mainNavigationBarMargin]);

  const router = useRouter();

  const onLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/locofy-about-us-page");
  }, [router]);

  const onOurProductsTextClick1 = useCallback(() => {
    router.push("/locofy-our-products-page");
  }, [router]);

  const onLifeCycleCostClick = useCallback(() => {
    router.push("/l-c-c-a-tool-page");
  }, [router]);

  const onConnectWithUsClick1 = useCallback(() => {
    router.push("/connect-with-us-page");
  }, [router]);

  const onCareersTextClick = useCallback(() => {
    window.open(
      "https://paycomonline.net/v4/ats/web.php/jobs?clientkey=FA5DC105028F0075FCBC55C96E060882"
    );
  }, []);

  const onFAQTextClick = useCallback(() => {
    router.push("/frequently-asked-questions-page");
  }, [router]);

  const onGetAQuoteButtonClick = useCallback(() => {
    router.push("/get-a-quote-page");
  }, [router]);

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-between py-[15px] px-0 z-[0] text-left text-[40px] text-gray-100 font-oswald ${className}`}
      style={header1Style}
    >
      <div className="flex-1 flex flex-row items-center justify-between flex-wrap content-center gap-x-0 gap-y-5">
        <div
          className="h-20 w-[263px] flex flex-row items-end justify-start gap-[5px] cursor-pointer"
          onClick={onLogoContainerClick}
        >
          <Image
            className="w-[77px] relative max-h-full object-cover"
            loading="lazy"
            width={77}
            height={72}
            sizes="100vw"
            alt=""
            src={logoImage}
          />
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
            <div className="flex flex-col items-start justify-start">
              <h1 className="m-0 w-[181px] h-12 relative text-[length:inherit] leading-[48px] uppercase font-medium font-[inherit] inline-block">
                Armorock
              </h1>
              <h3 className="m-0 w-[181px] h-[27px] relative text-[23px] leading-[27px] uppercase font-medium font-[inherit] text-black text-justify inline-block">
                polymer concrete
              </h3>
            </div>
          </div>
        </div>
        <nav
          className="m-0 flex-1 flex flex-row items-center justify-end flex-wrap content-center gap-[42px] text-right text-xl text-black font-oswald mq675:gap-[21px]"
          style={mainNavigationBarStyle}
        >
          <h3
            className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer"
            onClick={onAboutUsTextClick}
          >
            About Us
          </h3>
          <h3
            className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer"
            onClick={onOurProductsTextClick}
          >
            Our Products
          </h3>
          <h3
            className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer"
            onClick={onLifeCycleCostClick}
          >
            Life Cycle Cost Analysis
          </h3>
          <h3
            className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer"
            onClick={onConnectWithUsClick}
          >
            Connect With Us
          </h3>
          <h3
            className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer"
            onClick={onCareersTextClick}
          >
            Careers
          </h3>
          <h3
            className="m-0 relative text-[length:inherit] leading-6 font-normal font-[inherit] cursor-pointer"
            onClick={onFAQTextClick}
          >
            FAQ
          </h3>
          <button
            className="cursor-pointer border-gray-100 border-solid border-[3px] py-[9px] px-[22px] bg-gray-200 h-[50px] w-[146px] box-border flex flex-row items-center justify-center hover:bg-gainsboro-300 hover:border-dimgray hover:border-solid hover:hover:border-[3px] hover:box-border"
            onClick={onGetAQuoteButtonClick}
          >
            <div className="relative text-xl leading-6 font-oswald text-black text-right">
              GET A QUOTE
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header1;
