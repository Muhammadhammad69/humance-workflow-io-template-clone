import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Aos from "aos";
import { useEffect, useState } from "react";

import "aos/dist/aos.css";
export const OurServices = () => {
  useEffect(() => {
    Aos.init({ once: true, delay: 300, duration: 1000 });
  }, []);
  return (
    <section className="mt-[100px] ">
      <div className="flex flex-col lg:flex-row ">
        <div className="w-[17%]">
          <Button
            variant={"customOne"}
            className="uppercase"
            data-aos="fade-up"
          >
            <div className="h-[8px] w-[8px] rounded-full bg-btn-icon-color"></div>
            our services
          </Button>
        </div>
        <div className="w-[83%] lg:pl-[100px] mt-[20px] lg:mt-0">
          <h1
            className="text-[30px] sm:text-[36px] lg:text-[60px] xl:text-[68px] font-be-vietnam-pro font-medium leading-[38px] sm:leading-[46px] lg:leading-[65px] xl:leading-[70px] text-dark-color"
            data-aos="fade-up"
          >
            We develop and create
            <br />
            digital future.
          </h1>
        </div>
      </div>
      <div className="flex ">
        <div className="hidden lg:block w-[17%] pt-[100px] pl-[30px] ">
          <Image
            src={"/our-services/1.png"}
            alt="our-services"
            width={170}
            height={170}
            className=" "
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <Image
            src={"/our-services/2.png"}
            alt="our-services"
            width={170}
            height={170}
            className=" mt-[-90px]"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <Image
            src={"/our-services/3.png"}
            alt="our-services"
            width={170}
            height={170}
            className=" mt-[-90px]"
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>
        <div
          className="w-full lg:w-[83%] relative lg:pl-[100px] mt-[50px]"
          data-aos="fade-up"
        >
          <ServicesShowCase />
        </div>
      </div>
    </section>
  );
};

export const ServicesShowCase = () => {
  const services = [
    {
      id: 1,
      name: "",
      image: "/our-services/bg-1.png",
      description: "Strategic human resource solutions",
    },
    {
      id: 2,
      name: "HR Consulting",
      image: "/our-services/bg-2.jpg",
      description: "Personalized career matching",
    },
    {
      id: 3,
      name: "Job Analysis",
      image: "/our-services/bg-3.jpg",
      description: "Professional development courses",
    },
    {
      id: 4,
      name: "Reference Checks",
      image: "/our-services/bg-4.jpg",
      description: "Finding the right candidates",
    },
    {
      id: 5,
      name: "HR Outsourcing",
      image: "/our-services/bg-5.jpg",
      description: "Optimize team productivity",
    },
    {
      id: 6,
      name: "Assessment",
      image: "/our-services/bg-6.jpg",
      description: "Optimize team productivity",
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);
  return (
    <>
      <div className="flex">
        {/* for desktop */}
        <div className="relative w-[40%] hidden md:block">
          <div className="w-full inset-0 overflow-hidden">
            {services.map((service) => (
              <div
                key={`service-${service.description}-${service.id}`}
                className={`absolute w-full inset-0 transition-opacity duration-500 ease-in-out ${
                  activeService.id === service.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-[25px]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[60%] box-border pb-[50px] hidden md:block">
          <div className="flex flex-col justify-center space-y-2 pl-[50px]">
            {/* <h2 className="text-3xl font-bold text-white mb-8">Our Services</h2> */}
            {services.map((service) => (
              <div
                key={`service-${service.id}`}
                onMouseEnter={() => setActiveService(service)}
                onMouseLeave={() => setActiveService(services[0])}
                className={` ${
                  service.id !== 1 &&
                  "group cursor-pointer transition-all duration-300 pt-[30px] pb-[28px] border-b-[1px] border-solid border-[#0000004d] mb-0 leading-[40px] flex justify-between hover:border-black"
                }`}
              >
                <h3 className="text-[25px] lg:text-[34px] font-be-vietnam-pro font-semibold text-[#0000004d] mb-1 group-hover:text-black">
                  {service.name}
                </h3>
                {service.id !== 1 && (
                  <div className="flex justify-center items-center w-[44px] h-[44px] bg-white rounded-[6px] box-border group-hover:bg-btn-icon-color">
                    <Image
                      src={"/arrow.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] transform rotate-[-45deg] "
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* for mobile */}
        <div className="w-full  md:hidden">
          {services.map((service) => {
            return (
              <div key={`service-${service.name}-${service.id}`}>
                {service.id !== 1 && (
                  <>
                    <div className="w-full max-[500px]:h-[300px] h-[380px] bg-cover object-cover">
                      <Image
                        src={service.image}
                        alt={service.name}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover rounded-[25px]"
                      />
                    </div>
                    <div className="flex items-center justify-between py-[20px] border-b-[1px] border-solid border-[#0000004d]">
                      <h3 className="text-[20px] font-be-vietnam-pro  text-dark-color font-[600] mb-1 ">
                        {service.name}
                      </h3>
                      <div className="flex justify-center items-center w-[44px] h-[44px] bg-white rounded-[6px] box-border group-hover:bg-btn-icon-color">
                        <Image
                          src={"/arrow.svg"}
                          alt="arrow"
                          width={24}
                          height={24}
                          className="w-[24px] h-[24px] transform rotate-[-45deg] "
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
