import type { NextPage } from "next";
import Image from "next/image";

export type PlantsAndAddressesType = {
  className?: string;
};

const PlantsAndAddresses: NextPage<PlantsAndAddressesType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-[21px] text-center text-[50px] text-firebrick font-oswald ${className}`}
    >
      <div className="h-[624.2px] w-[401px] flex flex-col items-end justify-start pt-0 px-0 pb-[212.2px] box-border gap-[26.3px]">
        <div className="w-[350.5px] h-[412px] flex flex-row items-start justify-end py-0 pl-0 pr-[50.3px] box-border">
          <Image
            className="w-full relative max-h-full h-auto"
            loading="lazy"
            width={300.2}
            height={412}
            sizes="100vw"
            alt=""
            src="/nevada.svg"
          />
        </div>
        <div className="w-[401px] h-[185.9px] flex flex-col items-start justify-start">
          <div className="w-[343.5px] h-[100px] flex flex-row items-start justify-start py-0 pl-[56.5px] pr-0 box-border">
            <h2 className="m-0 w-[287px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block">
              nevada plant
            </h2>
          </div>
          <div className="w-[401px] relative text-[35px] leading-[45px] uppercase font-medium text-gray-100 inline-block mt-[-4.1px]">
            <p className="[margin-block-start:0] [margin-block-end:50px]">
              14555 Spring Canyon Road
            </p>
            <p className="m-0">Boulder City, NV 89006</p>
          </div>
        </div>
      </div>
      <div className="h-[690px] w-[460px] flex flex-col items-start justify-start">
        <Image
          className="w-[460px] relative max-h-full"
          width={460}
          height={460}
          sizes="100vw"
          alt=""
          src="/texas.png"
        />
        <div className="w-[327.5px] h-[88.7px] flex flex-row items-start justify-start py-0 pl-[74.5px] pr-0 box-border">
          <h2 className="m-0 w-[253px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block">
            texas plant
          </h2>
        </div>
        <div className="w-[402px] relative text-[35px] leading-[45px] uppercase font-medium text-gray-100 inline-block">
          <p className="[margin-block-start:0] [margin-block-end:50px]">
            207 Heritage Court
          </p>
          <p className="m-0">Sulphur Springs, TX 75482</p>
        </div>
      </div>
      <div className="h-[633px] w-[425px] flex flex-col items-start justify-start gap-[18px]">
        <Image
          className="w-[425px] h-[425px] relative"
          loading="lazy"
          width={425}
          height={425}
          sizes="100vw"
          alt=""
          src="/florida.svg"
        />
        <div className="w-[392px] h-[190px] flex flex-row items-start justify-start py-0 pl-[33px] pr-0 box-border">
          <div className="h-[190px] w-[359px] flex flex-col items-end justify-start">
            <div className="w-[329px] h-[100px] flex flex-row items-start justify-end py-0 pl-0 pr-[29px] box-border">
              <h2 className="m-0 w-[300px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block">
                florida plant
              </h2>
            </div>
            <div className="w-[359px] relative text-[35px] leading-[45px] uppercase font-medium text-gray-100 inline-block">
              <p className="[margin-block-start:0] [margin-block-end:50px]">
                1708 Turkey Creek Road
              </p>
              <p className="m-0">Plant City, FL 33566</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsAndAddresses;