import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
export const MarqueeSection = () => {
    
  return (
    <section className= "pt-[30px] pb-[40px] sm:pt-[40px] sm:pb-[50px] lg:pt-[70px] lg:pb-[80px]">
      <Marquee speed={150}>
        <div className="flex">
          {Array.from({ length: 2 }).map((_, index) => {
            return ( <div className="flex items-center " key={`marquee-one-${index}`}>
              <h1 className="uppercase font-be-vietnam-pro text-[45px] sm:text-[60px] lg:text-[80px] font-[900]  lg:leading-[70px]">
                turbine technology
              </h1>
              <Image
                src={"/marquee/1.png"}
                alt="trubine"
                width={60}
                height={60}
                className="mx-[40px] w-[40] h-[40] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px]"
              />
              <h1
                className="uppercase text-transparent font-be-vietnam-pro text-[45px] sm:text-[60px] lg:text-[80px] font-[900]
             [-webkit-text-stroke:1px_black]"
              >
                Sustainable
              </h1>
              <Image
                src={"/marquee/1.png"}
                alt="trubine"
                width={60}
                height={60}
                className="mx-[40px] w-[40] h-[40] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px]"
              />
            </div>)
          })}
        </div>
      </Marquee>
    </section>
  );
};
