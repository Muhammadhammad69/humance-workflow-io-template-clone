"use client";
import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import { AboutCardComp } from "./aboutCardComp";
export const About = () => {
  useEffect(() => {
    Aos.init({ once: true, delay: 300, duration: 1000 });
  }, []);

  return (
    <div className="mt-[40px] xs:mt-[60px] sm:mt-[80px] md:mt-[100px] md:px-[50px]">
      <div className="flex flex-col md:flex-row">
        <div className="w-[30%]" data-aos="fade-up">
          <Button variant="customOne" className="font-dm-sans">
            <div className="h-[8px] w-[8px] rounded-full bg-btn-icon-color"></div>
            ABOUT US
          </Button>
        </div>
        <div className="w-full md:w-[70%]">
          <div data-aos="fade-up">
            <h1 className="text-[30px] sm:text-[36px] md:text-[45px] lg:text-[68px] font-[500] leading-[48px] lg:leading-[70px] text-[#032024] mt-[12px] md:mt-0 font-be-vietnam-pro">
              Empowering organizations to thrive through cutting-edge HR
              technology
            </h1>
          </div>
          <div data-aos="fade-up">
            <p
              className="mt-6 sm:mt-8 md:mt-10 text-text-color-gray font-dm-sans leading-[26px] text-[17px] font-[500]"
              data-aos="fade-up"
            >
              Where the future of energy is not just a concept it&apos;s our mission.
              Born from the vision of pioneering sustainable world, we are more
              than just a company. We provide you the best service quality with
              best rate all the time no matter.
            </p>
          </div>
        </div>
      </div>
      <div>
        <AboutCardComp />
      </div>
    </div>
  );
};
