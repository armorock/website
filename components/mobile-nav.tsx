"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onLogoContainerClick = useCallback(() => {
    router.push("/");
    setIsMenuOpen(false);
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/locofy-about-us-page");
    setIsMenuOpen(false);
  }, [router]);

  const onOurProductsTextClick = useCallback(() => {
    router.push("/locofy-our-products-page");
    setIsMenuOpen(false);
  }, [router]);

  const onLifeCycleCostClick = useCallback(() => {
    router.push("/l-c-c-a-tool-page");
    setIsMenuOpen(false);
  }, [router]);

  const onConnectWithUsClick = useCallback(() => {
    router.push("/connect-with-us-page");
    setIsMenuOpen(false);
  }, [router]);

  const onCareersTextClick = useCallback(() => {
    router.push("/careers");
    setIsMenuOpen(false);
  }, [router]);

  const onFAQTextClick = useCallback(() => {
    router.push("/frequently-asked-questions-page");
    setIsMenuOpen(false);
  }, [router]);

  const onGetAQuoteButtonClick = useCallback(() => {
    router.push("/get-a-quote-page");
    setIsMenuOpen(false);
  }, [router]);

  return (
    <div className="relative">
      {/* Mobile header with hamburger */}
      <header className="self-stretch flex flex-row items-center justify-between py-4 px-5 bg-white z-50 sticky top-0">
        <div 
          className="flex flex-row items-center justify-start gap-1 cursor-pointer"
          onClick={onLogoContainerClick}
        >
          <Image
            className="w-[60px] relative max-h-full object-cover"
            width={60}
            height={56}
            alt="Armorock Logo"
            src="/logo-image@2x.png"
          />
          <div className="flex flex-col items-start justify-end">
            <div className="flex flex-col items-start justify-start">
              <h2 className="m-0 relative text-2xl leading-7 uppercase font-medium font-oswald text-gray-100">
                Armorock
              </h2>
              <h3 className="m-0 relative text-sm leading-5 uppercase font-medium font-oswald text-black text-justify">
                polymer concrete
              </h3>
            </div>
          </div>
        </div>
        
        {/* Hamburger button */}
        <button 
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-100 transition-all duration-300 mb-1.5 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-100 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-100 transition-all duration-300 mt-1.5 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-gray-100 bg-opacity-95 z-40 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-20`}
        style={{ top: '80px', height: 'calc(100vh - 80px)' }}
      >
        <div className="flex flex-col items-center justify-start gap-6 p-4 h-full">
          <h3
            className="m-0 relative text-2xl leading-8 font-normal font-oswald text-white cursor-pointer"
            onClick={onAboutUsTextClick}
          >
            About Us
          </h3>
          <h3
            className="m-0 relative text-2xl leading-8 font-normal font-oswald text-white cursor-pointer"
            onClick={onOurProductsTextClick}
          >
            Our Products
          </h3>
          <h3
            className="m-0 relative text-2xl leading-8 font-normal font-oswald text-white cursor-pointer"
            onClick={onLifeCycleCostClick}
          >
            Life Cycle Cost Analysis
          </h3>
          <h3
            className="m-0 relative text-2xl leading-8 font-normal font-oswald text-white cursor-pointer"
            onClick={onConnectWithUsClick}
          >
            Connect With Us
          </h3>
          <h3
            className="m-0 relative text-2xl leading-8 font-normal font-oswald text-white cursor-pointer"
            onClick={onCareersTextClick}
          >
            Careers
          </h3>
          <h3
            className="m-0 relative text-2xl leading-8 font-normal font-oswald text-white cursor-pointer"
            onClick={onFAQTextClick}
          >
            FAQ
          </h3>
          <div className="flex flex-col items-center mt-8 gap-4">
            <button
              className="cursor-pointer border-white border-solid border-[3px] py-[9px] px-[22px] bg-transparent h-[50px] w-full box-border flex flex-row items-center justify-center"
              onClick={onGetAQuoteButtonClick}
            >
              <div className="relative text-xl leading-6 font-oswald text-white text-center">
                GET A QUOTE
              </div>
            </button>
            <button
              className="cursor-pointer border-white border-solid border-[3px] py-[9px] px-[22px] bg-transparent h-[50px] w-full box-border flex flex-row items-center justify-center"
              onClick={onConnectWithUsClick}
            >
              <div className="relative text-xl leading-6 font-oswald text-white text-center">
                CONNECT WITH US
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
