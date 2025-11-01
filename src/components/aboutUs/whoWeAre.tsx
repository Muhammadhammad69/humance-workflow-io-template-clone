"use client";
import React from "react";
import { Button } from "../ui/button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./animateProgressProvider";
import { easeQuadInOut } from "d3-ease";
import { useInView } from "react-intersection-observer";
import { CircleCheckBig } from "lucide-react";
export const WhoWeAre = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // div 30% visible hone par trigger kare
    triggerOnce: false, // har bar scroll hone par check kare
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.3, // div 30% visible hone par trigger kare
    triggerOnce: false, // har bar scroll hone par check kare
  });
  
  return (
    <section className="pt-[50px] xs:pt-[70px] sm:pt-[80px] md:pt-[100px] lg:px-[20px] grid grid-cols-1 lg:grid-cols-2 gap-9">
      <div className="">
        <div className="bg-[url('/about-one/about-bg-img01.jpg')] bg-cover w-full bg-[position:50%] lg:h-full rounded-4xl h-[480px] "></div>
      </div>
      <div className="p-[10px_0px_10px_0px] xs:p-[20px_0px_40px_0px] lg:p-[45px_0px_40px_10px] xl:p-[45px_0px_40px_40px]">
        <div>
          <div className="flex flex-col ">
            <div className="mb-[10px]">
              <Button
                variant={"customOne"}
                className="uppercase"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="h-[8px] w-[8px] rounded-full bg-btn-icon-color"></div>
                Who we are
              </Button>
            </div>
            <div
              className="box-border mb-12 "
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h1 className="text-[30px] sm:text-[36px] lg:text-[60px] xl:text-[68px] font-medium  leading-[38px] sm:leading-[46px] lg:leading-[65px] xl:leading-[70px] tracking-[-2.04px] text-dark-color font-be-vietnam-pro  text-start">
                Why choose HR consulting services
              </h1>
              <p className="text-[17px] font-dm-sans text-text-color-gray leading-[26px] mt-6 ">
                We’re finding ways to bring energy to more people in more ways
                every day, so that all of us can be part of the changing energy
                system. Because Power ring Progress means providing more energy
                across the country.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row mb-6 xs:mb-10 border-solid border-b pb-6 gap-4 sm:gap-0">
              <div className="sm:w-1/2">
                <div ref={ref}>
                  <div className="text-[18px] xs:text-[20px]  font-be-vietnam-pro font-medium flex xs:flex-row flex-col items-center gap-2 xs:gap-6">
                    <div className="w-[100px] h-[100px] flex">
                      <ProgressBarComp inView={inView} value={80} />
                    </div>
                    <div>
                      <h4 className="text-center">Satisfied Customer</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:w-1/2">
                <div ref={ref2}>
                  <div className="text-[18px] xs:text-[20px] font-be-vietnam-pro font-medium flex xs:flex-row flex-col items-center gap-2 xs:gap-6">
                    <div className="w-[100px] h-[100px] flex">
                      <ProgressBarComp inView={inView2} value={90} />
                    </div>
                    <div>
                      <h4 className="text-center">Satisfied Customer</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="space-y-6">
                <h2 className="text-xl font-be-vietnam-pro text-black font-medium">
                  Certified And Experienced Coaching Professionals
                </h2>
                <div className="space-y-4 font-dm-sans text-base font-normal text-black">
                  <div className="flex items-center gap-4">
                    <CircleCheckBig
                      size={28}
                      className="text-btn-icon-color"
                      strokeWidth={2.5}
                    />
                    <p>Dui parturient pharetra massa potenti nec consectetur.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <CircleCheckBig
                      size={28}
                      strokeWidth={2.5}
                      className="text-btn-icon-color"
                    />
                    <p>We offer round-the-clock customer support always met.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProgressBarComp = ({
  inView,
  value,
}: {
  inView: boolean;
  value: number;
}) => {
  return (
    <>
      <AnimatedProgressProvider
        valueStart={inView && 0}
        valueEnd={inView && value}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat={false}
      >
        {(value: number) => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({
                pathTransition: "none",
                pathColor: "var(--color-btn-icon-color)",
                textColor: "black",
              })}
              strokeWidth={6}
            />
          );
        }}
      </AnimatedProgressProvider>
    </>
  );
};
