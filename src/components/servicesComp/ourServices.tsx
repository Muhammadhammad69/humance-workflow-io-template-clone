import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {servicesDataInfo, slug} from "@/components/contentData"
import Link from "next/link";
export const OurServices = () => {
  // const servicesInfo = [
  //   {
  //     id: 1,
  //     t1: "Leadership",
  //     t2: "Hr Consulting",
  //     image: "/our-services/bg-2.jpg",
  //     alt: "Hr Consulting",
  //     href: "/services/hr-consulting",
  //   },
  //   {
  //     id: 2,
  //     t1: "Entrepreneurs",
  //     t2: "Job Analysis",
  //     image: "/our-services/bg-3.jpg",
  //     alt: "Job Analysis",
  //     href: "/services/job-analysis",
  //   },
  //   {
  //     id: 3,
  //     t1: "Entrepreneurs",
  //     t2: "Reference Checks",
  //     image: "/our-services/bg-4.jpg",
  //     alt: "Reference Checks",
  //     href: "/services/reference-checks",
  //   },
  //   {
  //     id: 4,
  //     t1: "Adviser",
  //     t2: "HR Outsourcing",
  //     image: "/our-services/bg-5.jpg",
  //     alt: "HR Outsourcing",
  //     href: "/services/hr-outsourcing",
  //   },
  //   {
  //     id: 5,
  //     t1: "Assessment",
  //     t2: "Consultation",
  //     image: "/our-services/bg-6.jpg",
  //     alt: "Consultation",
  //     href: "/services/consultation",
  //   },
  //   {
  //     id: 6,
  //     t1: "Adviser",
  //     t2: "Improving Resource",
  //     image: "/our-services/bg-7.jpg",
  //     alt: "Improving Resource",
  //     href: "/services/improving-resource",
  //   },
  // ];
  
  return (
    <section className="py-[40px] sm:py-[60px] md:py-[100px]">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-[10px]">
          <Button
            variant={"customOne"}
            className="uppercase"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="h-[8px] w-[8px] rounded-full bg-btn-icon-color"></div>
            our services
          </Button>
        </div>
        <div
          className="box-border mb-[50px] "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h1 className="text-[30px] sm:text-[36px] lg:text-[60px] xl:text-[68px] font-medium  leading-[38px] sm:leading-[46px] lg:leading-[65px] xl:leading-[70px] tracking-[-2.04px] text-dark-color font-be-vietnam-pro  text-center">
            We offer great number
            <br />
            of finance services
          </h1>
        </div>
      </div>
      <div className="box-border">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
          {servicesDataInfo.map((item) => (
            <Link href={`/services/${slug(item.t2)}`} className=" box-border" key={`services-page-${item.id}`}>
              {/* ya per link tag add hoga */}
              <div className="box border rounded-[20px] p-[16px_16px_35px] relative w-full bg-white">
                <div className="rounded-[25px] h-[370px] relative overflow-hidden ">
                  <Image
                    src={item.image}
                    width={500}
                    height={500}
                    alt="img"
                    className="w-full h-full object-cover rounded-[25px] transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                {/* content */}
                <div className="pt-[20px] px-[24px] ">
                  <p className="text-btn-icon-color uppercase font-be-vietnam-pro text-[13px] font-[400] leading-[28px] tracking-[0.65px] ">
                    {item.t1}
                  </p>
                  <h2 className="text-dark-color tracking-[-0.28px] mt-[2px] text-[22px] sm:text-[28px] leading-[34px] font-be-vietnam-pro font-[600] ">
                    {item.t2}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
