"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
export const ClientLogoMarquee = ({ isAbout }: { isAbout?: boolean }) => {
  const globalClientLogo = [
    {
      id: 1,
      image: "/global-client-logo/client-global-01.png",
      alt: "global-client-logo",
    },
    {
      id: 2,
      image: "/global-client-logo/client-global-02.png",
      alt: "global-client-logo",
    },
    {
      id: 3,
      image: "/global-client-logo/client-global-03.png",
      alt: "global-client-logo",
    },
    {
      id: 4,
      image: "/global-client-logo/client-global-04.png",
      alt: "global-client-logo",
    },
    {
      id: 5,
      image: "/global-client-logo/client-global-05.png",
      alt: "global-client-logo",
    },
    {
      id: 6,
      image: "/global-client-logo/client-global-06.png",
      alt: "global-client-logo",
    },
    {
      id: 7,
      image: "/global-client-logo/client-global-07.png",
      alt: "global-client-logo",
    },
    {
      id: 8,
      image: "/global-client-logo/client-global-08.png",
      alt: "global-client-logo",
    },
  ];
  useEffect(() => {
    Aos.init({ once: true, delay: 300, duration: 1000 });
  }, []);
  return (
    <section
      className={`py-[30px] sm:py-[55px] border-b-[1px] border-solid  box-border mb-[20px] flex
    ${isAbout ? "border-background-color" : "border-[#052b311a]"}
    `}
    >
      <div className={`w-full  px-[10px] min-h-[1px] relative box-border
        ${!isAbout && "lg:w-[75%]"}
        `}>
        <Marquee speed={100}>
          {globalClientLogo.map((item) => (
            <Image
              key={`global-client-logo-${item.id}`}
              src={item.image}
              width={160}
              height={160}
              alt={item.alt}
              className="mx-[40px] "
            />
          ))}
        </Marquee>
      </div>
      {!isAbout && (
        <div
          className="hidden lg:block w-[25%] px-[10px] min-h-[1px] relative box-border"
          data-aos="fade-up"
        >
          <div className="box-border">
            <div className="font-be-vietnam-pro text-[18px] text-black font-medium text-right ">
              Trusted and funded by more
              <br />
              then 800 companies
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
