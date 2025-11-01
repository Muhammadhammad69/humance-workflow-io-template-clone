import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { servicesDataInfo, slug } from "@/components/contentData";
import { Service } from "@/components/types";
import Link from "next/link";
export const OurServices = () => {
  useEffect(() => {
    Aos.init({ once: true, delay: 300, duration: 1000 });
  }, []);
  return (
    <section className="mt-[40px] xs:mt-[60px] sm:mt-[80px] md:mt-[100px] ">
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
          <ServicesShowCase key={"services-showcase"}/>
        </div>
      </div>
    </section>
  );
};

export const ServicesShowCase = () => {
  const defaultService = [
    {
      id: 0,
      t1: "",
      t2: "",
      description: "Strategic human resource solutions",
      image: "/our-services/bg-1.png",
      alt: "human resource",
      isClicked: false,
    },
  ];
  const services: Service[] = [...servicesDataInfo, ...defaultService];

  const [activeService, setActiveService] = useState<Service>(
    defaultService[0]
  );
  return (
    <>
      <div className="flex">
        {/* for desktop */}
        <div className="relative w-[40%] hidden md:block">
          <div className="w-full inset-0 overflow-hidden">
            {services.map((service) => (
              <div
                key={`service-${service.description}-${service.t2}-${service.id}`}
                className={`absolute w-full inset-0 transition-opacity duration-500 ease-in-out ${
                  activeService.id === service.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.t2}
                  width={2000}
                  height={2000}
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
              <React.Fragment key={`service-home-page-link-${service.t2}-${service.id}`}>
                {service.id !== 0 && (
                  <Link
                    href = {`/services/${slug(service.t2)}`}
                    
                    onMouseEnter={() => setActiveService(service)}
                    onMouseLeave={() => setActiveService(defaultService[0])}
                    className="group cursor-pointer transition-all duration-300 pt-[30px] pb-[28px] border-b-[1px] border-solid border-[#0000004d] mb-0 leading-[40px] flex justify-between hover:border-black"
                  >
                    <h3 className="text-[25px] lg:text-[34px] font-be-vietnam-pro font-semibold text-[#0000004d] mb-1 group-hover:text-black">
                      {service.t2}
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
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* for mobile */}
        <div className="w-full  md:hidden">
          {services.map((service) => {
            return (
              <div key={`service-home-mobile-${service.t2}-${service.id}`}>
                {service.id !== 0 && (
                  <>
                    <div className="w-full max-[500px]:h-[300px] h-[380px] bg-cover object-cover">
                      <Image
                        src={service.image}
                        alt={service.t2}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover rounded-[25px]"
                      />
                    </div>
                    <Link href={`/services/${slug(service.t2)}`} className="flex items-center justify-between py-[20px] border-b-[1px] border-solid border-[#0000004d]">
                      <h3 className="text-[20px] font-be-vietnam-pro  text-dark-color font-[600] mb-1 ">
                        {service.t2}
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
                    </Link>
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
