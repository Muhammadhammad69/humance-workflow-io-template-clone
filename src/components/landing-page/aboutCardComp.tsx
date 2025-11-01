import React from "react";
import Image from "next/image";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
const AboutCardComp = () => {
  const aboutCardInfo = [
    {
      title: "Planning and Analytics",
      content:
        "Metus torquent platea aenean orci ridiculus potenti feugiat ultricies.",
      icons: "/about-icons/1.svg",
    },
    {
      title: "Recruitment & Staffing",
      content:
        "Metus torquent platea aenean orci ridiculus potenti feugiat ultricies.",
      icons: "/about-icons/2.svg",
    },
    {
      title: "Employee Engagement",
      content:
        "Metus torquent platea aenean orci ridiculus potenti feugiat ultricies.",
      icons: "/about-icons/3.svg",
    },
    {
      title: "Policy Management",
      content:
        "Metus torquent platea aenean orci ridiculus potenti feugiat ultricies.",
      icons: "/about-icons/4.svg",
    },
  ];
  useEffect(() => {
    Aos.init({ once: true, delay: 300, duration: 1000 });
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-[40px] xs:mt-[60px] sm:mt-[80px] md:mt-[90px]">
      {aboutCardInfo.map((card, index) => {
        return (
          <div
            className=" bg-white rounded-3xl shadow-lg py-[45px] px-[25px] hover:shadow-xl transform translate-y-0 
         transition-transform duration-500 ease-in-out 
         hover:-translate-y-2"
            key={`card-${index}`}
            data-aos="fade-up"
          >
            {/* Header with Icon */}
            <div className="flex  justify-between mb-[100px] items-center ">
              <h2 className="text-[22px] md:text-[22px] font-[600] text-[#032024] leading-[28px] font-dm-sans mr-[10px]">
                {card.title}
              </h2>

              {/* Lightbulb Icon */}
              <div className="flex-shrink-0 w-[auto] h-[50px]">
                <Image
                  src={card.icons}
                  height={50}
                  width={0} // Next.js ko integer dena zaroori hai
                  style={{ width: "auto", height: "50px" }}
                  alt={card.title}
                />
              </div>
            </div>

            {/* Divider Line */}
            <div className=" w-full h-px bg-gray-200 mb-6"></div>

            {/* Description Text */}
            <p className="text-text-color-gray font-dm-sans text-base font-medium leading-relaxed">
              {card.content}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export { AboutCardComp };
