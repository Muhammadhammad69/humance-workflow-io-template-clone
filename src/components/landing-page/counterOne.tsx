import React from "react";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
export const CounterOne = () => {
     useEffect(() => {
        Aos.init({ once: true, delay: 300, duration: 1000 });
      }, []);
  const counterOneInfo = [
    {
      title: "Years of Experience Working",
      t1: "Years of Experience",
      t2: "Working",
      number: "35+",
      delay: 100,
    },
    {
      title: "Satisfied Customers",
      t1: "Satisfied",
      t2: "Customers",
      number: "10m",
      delay: 200,
    },
    {
      title: "Projects Completed",
      t1: "Projects",
      t2: "Completed",
      number: "28K",
      delay: 300,
    },
    {
      title: "Team Members",
      t1: "Team",
      t2: "Members",
      number: "425",
      delay: 350,
    },
  ];
  return (
    <section className="pt-[110px] pb-[100px]">
      <div className="grid  max-[460px]:grid-cols-1 grid-cols-2  lg:grid-cols-4 gap-[35px]">
        {counterOneInfo.map((item, index) => (
          <div className="box-border items-center" key={`counter-one-${index}`} data-aos="fade-up" data-aos-delay={item.delay}>
            <div className="flex box-border relative">
              <div className="h-[10px] w-[10px] rounded-full bg-btn-icon-color absolute top-[12px]"></div>
              <h1 className="pl-[28px] text-[17px] xl:text-[20px] leading-[28px] xl:leading-[30px] text-dark-color font-be-vietnam-pro font-[400] mb-0 tracking-[-0.2px]">
                {item.t1} <br />
                {item.t2}
              </h1>
            </div>
            <h1 className={`text-[50px] leading-[50px] sm:text-[75px] sm:leading-[85%] xl:text-[90px] xl:leading-[100%] text-black font-be-vietnam-pro font-medium mb-0 pl-5 sm:pl-0 mt-[30px]`}>
              {item.number}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};
