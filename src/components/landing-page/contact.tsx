import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
export const Contact = () => {
  const inputClassName =
    "focus-visible:ring-0 border-[1px] border-solid border-[#f6f6f633] rounded-[10px] h-[60px] text-[15px] leading-[28px] py-[10px] xl:pl-[30px] focus-visible:border-btn-icon-color text-white font-dm-sans font-medium";
  useEffect(() => {
    Aos.init({ once: true, delay: 300, duration: 1000 });
  }, []);
  return (
    <section className="py-[40px] xs:py-[60px] sm:py-[80px] md:py-[100px] xl:mx-[50px] box-border">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 min-h-[1px] lg:pl-[10px] lg:pr-[20px] box-border  max-[1024px]:mb-[20px]">
          <div className="box-border bg-white bg-[url('/contact/bg-one.png')] bg-no-repeat max-[480px]:bg-[size:auto_220px] bg-[size:auto_350px] lg:bg-auto rounded-[20px] z-[1] pt-[40px] sm:pt-[60px] md:pt-[70px] pb-[45px] pl-[30px] max-[480px]:bg-[position:100%_100%] bg-[position:100%_0%] lg:bg-[position:190%_100%] relative overflow-hidden" >
            <div className="box-border mb-[40px]">
              <div className="mb-[15px]">
                <Button variant={"customOne"} className="uppercase" data-aos ="fade-up">
                  <div className="h-[8px] w-[8px] rounded-full bg-btn-icon-color"></div>
                  Why Choose us
                </Button>
              </div>
              <h1 className="text-[32px] sm:text-[36px] lg:text-[60px] xl:text-[70px] font-medium leading-[44px] sm:leading-[46px] lg:leading-[65px] xl:leading-[70px] text-dark-color tracking-[-2.04px]  font-be-vietnam-pro" data-aos ="fade-up">
                Join 500+
                <br />
                companies
                <br />
                trusting us
              </h1>
            </div>
            <div>
              <Button
                variant={"customTwo"}
                className="pl-[30px]! py-[6px]! pr-[6px]! border-[1px]! border-solid! border-dark-color bg-[#0000] hover:bg-dark-color! hover:text-white! gap-3! " data-aos ="fade-up"
              >
                Get Started
                <div className="flex justify-center items-center w-[44px] h-[44px] rounded-[6px] bg-btn-icon-color ">
                  {/* <GoArrowUpRight className="text-white" /> */}
                  <Image
                    src={"/arrow.svg"}
                    width={44}
                    height={44}
                    alt="arrow"
                    className="w-[24px] h-[24px]  rotate-[-45deg]  invert "
                  />
                </div>
              </Button>
            </div>
            <div className="absolute inset-0 bg-[url('/contact/bg-shadow.png')] bg-no-repeat bg-auto bg-[position:100%_100%] z-[-1]"></div>
          </div>
        </div>
        <div className="box-border w-full lg:w-1/2 lg:px-[10px] min-h-[1px] " >
          <div className="max-[480px]:p-[40px_20px_30px_20px] pt-[70px] pb-[55px] px-[60px] xl:px-[80px] bg-dark-color rounded-[20px] h-full " >
            <h2 className=" text-[28px] leading-[34px] text-white tracking-[0.3px] mt-0 font-be-vietnam-pro mb-[30px] font-medium " data-aos = "fade-up">
              Get Free Consulting
            </h2>
            <div className="grid max-[480px]:grid-cols-1 grid-cols-2 gap-x-[20px] gap-y-[30px] " data-aos = "fade-up">
              <Input
                type="text"
                className={`${inputClassName}`}
                placeholder="Your Name"
                name="name"
              />
              <Input
                type="email"
                className={`${inputClassName}`}
                placeholder="Your Email Address"
                name="email"
              />
              <Input
                type="number"
                className={`${inputClassName}`}
                placeholder="Phone Number"
                name="number"
              />
              <Select>
                <SelectTrigger
                  className={`${inputClassName} h-full! w-full focus:border-btn-icon-color `}
                >
                  <SelectValue
                    placeholder="Select a Service"
                    className="text-white"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="first">First Chocie</SelectItem>
                    <SelectItem value="second">Second Choice</SelectItem>
                    <SelectItem value="third">Third Choice</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="relative">

              <Input type="submit" value="Send Message"
               className="focus-visible:ring-0 border-none bg-white font-be-vietnam-pro rounded-[15px] py-[17px] h-[60px] pb-[17px] px-[25px] min-[1120px]:px-[35px] font-medium text-left cursor-pointer hover:bg-btn-icon-color " />
               <div className="absolute inset-0 bg-[url('/arrow.svg')] bg-no-repeat bg-[position:90%] bg-[size:24px_24px] rotate-[-45deg] w-[24px] h-[24px] right-[10px] min-[1120px]:right-[20px] top-[18px] ml-auto"></div>
              </div>
              {/* <button>Send Message</button> */}
              {/* <button
                
                className="bg-white py-[17px]!   text-black  rounded-[20px]! text-[15px]!  font-be-vietnam-pro hover:bg-btn-icon-color cursor-pointer  "
              >
                Send Message
                
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
