import type { NextPage } from "next";
import Image from "next/image";

export type PlantsAndAddressesType = {
  className?: string;
};

const PlantsAndAddresses: NextPage<PlantsAndAddressesType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-[21px] ${className}`}
    >
      <section className="h-[624.2px] w-[401px] flex flex-col items-end justify-start pt-0 px-0 pb-[212.2px] box-border gap-[26.3px] text-center text-[50px] text-firebrick font-oswald mq450:pb-[90px] mq450:box-border mq825:pb-[138px] mq825:box-border">
        <div className="flex flex-row items-start justify-end py-0 px-[50px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <Image
            className="w-full relative max-h-full h-auto object-cover"
            loading="lazy"
            width={300.2}
            height={412}
            sizes="100vw"
            alt=""
            src="/nevada@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start py-0 pl-14 pr-[57px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h2 className="m-0 w-[287px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block mq450:text-3xl mq450:leading-[60px] mq825:text-[40px] mq825:leading-[80px]">
              nevada plant
            </h2>
          </div>
          <div className="w-[401px] relative text-[35px] leading-[45px] uppercase font-medium text-gray-100 inline-block mt-[-4.1px] mq450:text-[21px] mq450:leading-[27px] mq825:text-[28px] mq825:leading-9">
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              14555 Spring Canyon Road
            </p>
            <p className="m-0">Boulder City, NV 89006</p>
          </div>
        </div>
      </section>
      <section className="h-[690px] w-[460px] flex flex-col items-start justify-start pt-8 text-center text-[50px] text-firebrick font-oswald mq675:pt-72 mq675:box-border">
        <Image
          className="w-[460px] relative max-h-full"
          width={460}
          height={460}
          sizes="100vw"
          alt=""
          src="/texas.png"
        />
        <div className="h-[88.7px] flex flex-row items-start justify-start py-0 pl-[74px] pr-[76px] box-border mt-[-20px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <h2 className="m-0 w-[253px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block mq450:text-3xl mq450:leading-[60px] mq825:text-[40px] mq825:leading-[80px]">
            texas plant
          </h2>
        </div>
        <h1 className="m-0 w-[402px] relative text-[35px] leading-[45px] uppercase font-medium font-[inherit] text-gray-100 inline-block mq450:text-[21px] mq450:leading-[27px] mq825:text-[28px] mq825:leading-9">
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            207 Heritage Court
          </p>
          <p className="m-0">Sulphur Springs, TX 75482</p>
        </h1>
      </section>
      <section className="h-[633px] w-[425px] flex flex-col items-start justify-start gap-[18px] text-center text-[50px] text-firebrick font-oswald">
        <Image
          className="w-[425px] h-[425px] relative object-cover"
          loading="lazy"
          width={425}
          height={425}
          sizes="100vw"
          alt=""
          src="/florida@2x.png"
        />
        <div className="flex flex-row items-start justify-start py-0 px-[33px]">
          <div className="flex flex-col items-end justify-start">
            <div className="flex flex-row items-start justify-end py-0 pl-[30px] pr-[29px]">
              <h2 className="m-0 w-[300px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block mq450:text-3xl mq450:leading-[60px] mq825:text-[40px] mq825:leading-[80px]">
                florida plant
              </h2>
            </div>
            <div className="w-[359px] relative text-[35px] leading-[45px] uppercase font-medium text-gray-100 inline-block mq450:text-[21px] mq450:leading-[27px] mq825:text-[28px] mq825:leading-9">
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                1708 Turkey Creek Road
              </p>
              <p className="m-0">Plant City, FL 33566</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PlantsAndAddresses;
