import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
export const OurProcess = () => {
  const ourProcessData = [
    {
      id: 1,
      title: "01. Research",
      description:
        "One on one sessions to achieve personal goals and enhance self awareness our clients in maximizing",
      image: "/our-process-icons/1.svg",
      alt: "research",
    },
    {
      id: 2,
      title: "02. Analysis",
      description:
        "One on one sessions to achieve personal goals and enhance self awareness our clients in maximizing",
      image: "/our-process-icons/2.svg",
      alt: "analysis",
    },
    {
      id: 3,
      title: "03. Planning",
      description:
        "One on one sessions to achieve personal goals and enhance self awareness our clients in maximizing",
      image: "/our-process-icons/3.svg",
      alt: "planning",
    },
    {
      id: 4,
      title: "04. Execution",
      description:
        "One on one sessions to achieve personal goals and enhance self awareness our clients in maximizing",
      image: "/our-process-icons/4.svg",
      alt: "execution",
    },
  ];
  useEffect(() => {
    Aos.init({ once: true, delay: 300, duration: 1000 });
  }, []);
  return (
    <section className="pt-[100px] box-border">
      <div className="flex flex-col lg:flex-row">
        <div className="w-[25%] box-border">
          <div>
            <Button variant={"customOne"} className="text-[12px]! uppercase " data-aos = "fade-up">
              <div className="h-[8px] w-[8px] rounded-full bg-btn-icon-color "></div>
              our process
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-[75%] mt-[10px] lg:pl-[90px] box-border">
          <div>
            <h2 className="font-be-vietnam-pro text-dark-color text-[30px] sm:text-[36px] lg:text-[60px] xl:text-[68px] font-medium  leading-[38px] sm:leading-[46px] lg:leading-[65px] xl:leading-[70px] " data-aos = "fade-up">
              <span className="max-[355px]:block hidden">
                Learn more about our working process.
              </span>
              <span className="hidden min-[355px]:block">
                Learn more about our
                <br />
                working process.
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full mt-[100px]">
        <div className="grid grids-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px] lg:gap-0">
          {ourProcessData.map((item) => (
            <div key={`our-process-${item.id}`} className="mb-[20px] lg:mb-0 " data-aos = "fade-up" data-aos-delay={100 * item.id}>
              <div className="w-[65px] h-[65px] sm:w-[80px] sm:lg:w-[90px] sm:h-[80px] lg:h-[90px] mb-[25px] lg:mb-[40px] rounded-[10px] bg-btn-icon-color p-[15px] ">
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt={item.alt}
                  className="filter-[invert()]"
                />
              </div>
              <div className="border-t-[1px] border-solid border-[#00000026] pt-[15px] sm:pt-[20px] md:pt-[32px] sm:pr-[20px] box-border ">
                <h1 className="text-[20px] leading-[28px] min-[400px]:text-[28px] min-[400px]:leading-[34px] font-[600] text-dark-color font-be-vietnam-pro tracking-[-0.28px] ">
                  {item.title}
                </h1>
                <p className="pt-[20px] text-text-color-gray font-dm-sans text-[17px] font-medium ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
