"use client";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export type FooterType = {
  className?: string;
  logo: string;
};

const Footer: NextPage<FooterType> = ({ className = "", logo }) => {
  const router = useRouter();

  // Custom navigation function to handle scrolling to sections
  const navigateToSection = useCallback(
    (page: string, section: string) => {
      // Check if we're already on the target page
      const currentPath = window.location.pathname;
      const isOnPage = currentPath.includes(page);

      if (isOnPage) {
        // If already on the page, scroll directly to section
        const element = document.querySelector(`[data-scroll-to='${section}']`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // If not on the page, navigate to the page with hash
        router.push(`${page}#${section}`);
      }
    },
    [router]
  );

  return (
    <footer
      className={`self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-[50px] px-0 pb-0 text-left text-base text-black font-open-sans md:pt-10 sm:pt-8 xs:pt-6 md:hidden ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between flex-wrap content-start py-0 px-[60px] gap-x-0 gap-y-[40px] md:px-6 sm:px-4 sm:gap-y-[30px]">
        <Image
          className="w-[304px] relative max-h-full object-cover md:w-[250px] sm:w-[200px] xs:mx-auto"
          loading="lazy"
          width={304}
          height={241.1}
          sizes="(max-width: 767px) 250px, (max-width: 639px) 200px, 304px"
          alt="Armorock Logo"
          src={logo}
        />
        <div className="flex-1 flex flex-row items-start justify-end flex-wrap content-start gap-x-[90px] gap-y-[35px] min-w-[406px] md:justify-center md:gap-x-[45px] sm:gap-x-[25px] xs:min-w-full xs:gap-y-[25px]">
          <div className="h-[154px] w-[132px] flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <Link
                href="/connect-with-us-page"
                className="no-underline text-black"
              >
                <b className="w-[132px] relative leading-10 inline-block hover:text-blue-600">
                  Connect With Us
                </b>
              </Link>
              <Link
                href="/connect-with-us-page"
                className="no-underline text-black"
              >
                <div className="w-[121px] relative leading-10 inline-block mt-[-6px] hover:text-blue-600">
                  General Contact
                </div>
              </Link>
            </div>
            <Link
              href="/connect-with-us-page#plant-locations"
              className="no-underline text-black"
            >
              <div className="w-[114px] h-10 relative leading-10 inline-block hover:text-blue-600">
                Plant Locations
              </div>
            </Link>
            <Link
              href="/connect-with-us-page#our-socials"
              className="no-underline text-black"
            >
              <div className="w-[121px] h-10 relative leading-10 inline-block hover:text-blue-600">
                Social Media
              </div>
            </Link>
          </div>
          <div className="h-[154px] w-[143px] flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <Link
                href="/locofy-about-us-page"
                className="no-underline text-black"
              >
                <b className="w-[73px] relative leading-10 inline-block hover:text-blue-600">
                  About Us
                </b>
              </Link>
              <Link
                href="/locofy-about-us-page#meet-our-team"
                className="no-underline text-black"
              >
                <div className="w-[117px] relative leading-10 inline-block mt-[-6px] hover:text-blue-600">
                  Meet Our Team
                </div>
              </Link>
            </div>
            <Link
              href="/locofy-about-us-page#founding-story"
              className="no-underline text-black"
            >
              <div className="w-[143px] h-10 relative leading-10 inline-block hover:text-blue-600">
                Founding Story
              </div>
            </Link>
            <Link
              href="/locofy-about-us-page#mission-and-values"
              className="no-underline text-black"
            >
              <div className="w-[143px] h-10 relative leading-10 inline-block hover:text-blue-600">
                Mission and Values
              </div>
            </Link>
          </div>
          <div className="h-[234px] w-[139px] flex flex-col items-start justify-start">
            <Link
              href="/locofy-our-products-page"
              className="no-underline text-black"
            >
              <b className="w-[106px] relative leading-10 inline-block shrink-0 hover:text-blue-600">
                Our Products
              </b>
            </Link>
            <div className="flex flex-col items-start justify-start shrink-0 mt-[-6px] relative">
              <div
                className="w-[74px] relative leading-10 inline-block hover:text-blue-600 cursor-pointer"
                onClick={() =>
                  navigateToSection("/locofy-our-products-page", "manholesSection")
                }
              >
                Manholes
              </div>
              <div
                className="w-[139px] h-10 relative leading-10 inline-block hover:text-blue-600 cursor-pointer"
                onClick={() =>
                  navigateToSection("/locofy-our-products-page", "rehabsSection")
                }
              >
                Rehabs
              </div>
              <div
                className="w-[139px] h-10 relative leading-10 inline-block hover:text-blue-600 cursor-pointer"
                onClick={() =>
                  navigateToSection("/locofy-our-products-page", "liftStationsSection")
                }
              >
                Lift Stations
              </div>
              <div
                className="w-[139px] h-10 relative leading-10 inline-block hover:text-blue-600 cursor-pointer"
                onClick={() =>
                  navigateToSection(
                    "/locofy-our-products-page",
                    "customStructuresSection"
                  )
                }
              >
                Custom Structures
              </div>
            </div>
          </div>
          <div className="h-[154px] w-[146px] flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <Link
                href="/get-a-quote-page"
                className="no-underline text-black"
              >
                <b className="w-[97px] relative leading-10 inline-block hover:text-blue-600">
                  Get A Quote
                </b>
              </Link>
              <Link
                href="/l-c-c-a-tool-page"
                className="no-underline text-black"
              >
                <b className="w-[146px] relative leading-10 inline-block mt-[-6px] hover:text-blue-600">
                  Life Cycle Analysis
                </b>
              </Link>
            </div>
            <Link href="/careers" className="no-underline text-black">
              <b className="w-[62px] relative leading-10 inline-block hover:text-blue-600">
                Careers
              </b>
            </Link>
            <Link
              href="/frequently-asked-questions-page"
              className="no-underline text-black"
            >
              <b className="w-[33px] relative leading-10 inline-block hover:text-blue-600">
                FAQ
              </b>
            </Link>
          </div>
        </div>
        <div className="w-full relative leading-6 text-center mt-6 py-4 border-t border-gray-100">
          Copyright © 2025 Armorock. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
