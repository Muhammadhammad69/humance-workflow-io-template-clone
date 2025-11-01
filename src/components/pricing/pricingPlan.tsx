"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Check } from "lucide-react";
export const PricingPlan = () => {
  // const [isClickId, setIsClickId] = useState(1);
  const includedFeatures = [
    "24/7 Customer support",
    "Complete recruiting",
    "Customized benefits",
    "Access to advanced HRIS",
    "Legal support for conflicts",
  ];

  const notIncludedFeatures = [
    "Leadership training programs",
    "Customized benefits",
    "Access to advanced HRIS",
  ];
  const [pricingPlans, setPricingPlans] = useState([
    {
      id: 1,
      name: "Basic Plan",
      price: "199",
      includedFeatures: [...includedFeatures],
      notIncludedFeatures: [...notIncludedFeatures],
      isClicked: false,
    },
    {
      id: 2,
      name: "Premium Plan",
      price: "249",
      includedFeatures: [...includedFeatures],
      notIncludedFeatures: [...notIncludedFeatures],
      isClicked: true,
    },
    {
      id: 3,
      name: "Standard Plan",
      price: "350",
      includedFeatures: [...includedFeatures],
      notIncludedFeatures: [...notIncludedFeatures],
      isClicked: false,
    },
  ]);
  const isClickedHandler = (id: number) => {
    const updatedPricingPlans = pricingPlans.map((plan) => ({
      ...plan,
      isClicked: plan.id === id,
    }));
    setPricingPlans(updatedPricingPlans);
  };

  return (
    <div className="py-[50px] xs:py-[70px] sm:py-[80px] md:py-[100px] ">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-[35%]">
          <div className="mb-4">
            <Button
              variant={"customOne"}
              className="uppercase"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-[8px] w-[8px] rounded-full bg-btn-icon-color"></div>
              Pricing Plan
            </Button>
          </div>
          <div>
            <h1 className="text-[30px] sm:text-[36px] lg:text-[60px] xl:text-[68px] font-medium  leading-[38px] sm:leading-[46px] lg:leading-[65px] xl:leading-[70px] tracking-[-2.04px] text-dark-color font-be-vietnam-pro  ">
              Pick the best pricing plan
              {/* <br />
              work teams. */}
            </h1>
          </div>
        </div>
        <div className="lg:w-[65%] pt-10 xl:space-y-7.5 grid grid-cols-1 md:grid-cols-2 gap-5  xl:gap-0 xl:block">
          {pricingPlans.map((plan) => (
            <div
              className={`border border-solid px-6 py-11 rounded-xl flex flex-col xl:flex-row transition-all ease-in-out duration-300 transform cursor-pointer
            ${plan.isClicked ? "bg-dark-color text-white" : "text-dark-color"}
            `}
              onClick={() => {
                isClickedHandler(plan.id);
              }}
              key={plan.id}
            >
              <div className="font-be-vietnam-pro max-[1280px]:border-none border-r xl:pr-5 border-solid border-[#052b3133] flex flex-col items-center justify-center ">
                <p className="text-[18px] font-normal tracking-tight text-center  ">
                  {plan.name}
                </p>
                <h1 className="text-[50px] xs:text-[60px] leading-[60px] xs:leading-[70px] tracking-[-3.2px] font-bold mt-2.5 mb-5 xs:mb-6.5 ">
                  <sup className="text-[32px] top-[-25px] mr-1.5 ">$</sup>
                  {plan.price}
                </h1>
                <div className="group">
                <Button
                  variant={"customTwo"}
                  className={` transition-all ease-in-out duration-300 transform text-white!
                    ${
                      plan.isClicked
                        ? "bg-btn-icon-color! "
                        : "bg-dark-color! group-hover:bg-btn-icon-color!"
                    }
                    `}
                >
                  Purchase Now
                  <div
                    className={`flex justify-center items-center w-[44px] h-[44px] rounded-[6px]   black transition-all ease-in-out duration-300 transform 
                  ${
                    plan.isClicked
                      ? "bg-dark-color! group-hover:bg-white!"
                      : "bg-btn-icon-color! group-hover:bg-dark-color!"
                  }
                    `}
                  >
                    <Image
                      src={"/arrow-right-up-1.svg"}
                      width={35}
                      height={35}
                      alt="arrow-right-up-1"
                      className={`w-[12px] h-[12px]  transition-all ease-in-out duration-300 transform 
                       ${plan.isClicked ? "invert group-hover:invert-0" : "group-hover:invert"}
                        `}
                    />
                  </div>
                </Button>
                 </div>
              </div>
              <div>
                <div
                  className={`grid grid-cols-1 xl:grid-cols-2 gap-x-2 gap-y-4 mt-7.5 xl:ml-5 text-[15px] font-dm-sans font-normal 
                  ${plan.isClicked ? "text-white" : "text-text-color-gray"}
                  `}
                >
                  {/* Included features */}

                  {includedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="">{feature}</span>
                    </div>
                  ))}

                  {/* Not included features */}

                  {notIncludedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
