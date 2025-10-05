"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
export const AboutOne = () => {
  useEffect(() => {
    Aos.init({ once: true, delay: 300, duration: 1000 });
  }, []);
  return (
    <section
      className="mx-0  xl:mx-[50px] px-[30px] lg:px-[50px] bg-dark-color xl:rounded-[25px] py-[100px] bg-no-repeat bg-auto bg-[position:100%_3%] max-[768px]:bg-none! "
      style={{ backgroundImage: "url(/about-one/background-image.png)" }}
    >
      <div className=" ">
        <div className="w-full lg:w-[66%]">
          <Button
            variant={"customOne"}
            className="uppercase border-[#ffffff80] text-white py-1!"
            data-aos="fade-up"
          >
            <div className="h-[8px] w-[8px] rounded-full bg-btn-icon-color"></div>
            who we are
          </Button>
          <h1 className="text-[32px] md:text-[36px] lg:text-[60px] font-[500] leading-[40px] md:leading-[46px]  lg:leading-[70px] text-[#ffffff] font-be-vietnam-pro mt-[15px]" data-aos="fade-up">
            Your business goals are our priority
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row box-border mt-[70px]">
          <div className="w-full lg:w-[58%] min-h-[1px]  relative box-border">
            <div
              style={{
                backgroundImage: "url(/about-one/background-image-2.png)",
              }}
              className="h-[450px] sm:h-[550px] lg:h-full  bg-cover bg-no-repeat bg-[position:60%] sm:bg-[position:50%] relative rounded-[30px]"
              data-aos="fade-right"
            >
              <div className="hidden text-white bg-dark-color absolute bottom-[-1px] lg:bottom-0 left-0 md:flex justify-center items-center pt-[20px] pb-[10px] pr-[25px] rounded-tr-[25px] box-border gap-2 "
              data-aos="fade-right"
              >
                <div className="flex">
                  <h1 className="text-btn-icon-color text-[70px] relative my-0 leading-[70px] font-be-vietnam-pro font-[500]">
                    25
                  </h1>
                  <h1 className="text-btn-icon-color text-[64px] leading-[40px] font-be-vietnam-pro font-[500] mt-0 box-border">
                    +
                  </h1>
                </div>
                <div className="box-border relative">
                  <h4 className="text-white text-[20px] font-[500] leading-[120%]">
                    Years of <br />
                    experience
                  </h4>
                </div>
                <div
                  className="absolute bottom-[-1px] right-[-18px] w-[20px] h-[20px]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle farthest-side at 100% 0%, #0000 100%, var(--color-dark-color))",
                  }}
                ></div>
                <div
                  className="absolute top-[-25px] left-0 w-[25px] h-[25px]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle farthest-side at 100% 0%, #0000 100%, var(--color-dark-color))",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[42%] box-border px-0 lg:pr-[10px] lg:pl-[30px] min-h-[1px]">
            <div className="pt-[50px] pb-[28px] box-border">
              <div className="mb-[20px]">
                <p className="text-[#fffc] text-text-size font-dm-sans font-[500]"
                data-aos="fade-up">
                  The Candidate Experience process is simple and our research
                  team guide you along the way, then receive full access to all
                  their data and the data in each region where they participate
                  via secure login access to our technology.
                </p>
              </div>
              {Array.from({ length: 3 }).map((_, index) => {
                return (
                  <div
                    className="border-b-[1px] border-solid border-[#fff3] flex justify-start mt-[15px] pb-[40px] box-border mb-[35px]"
                    key={`who-we-are-${index}`}
                  >
                    <div className="w-[36%]">
                      <h5 className="text-btn-icon-color font-be-vietnam-pro text-[22px] pr-[10px] font-[600]" data-aos="fade-up">
                        Company Mission
                      </h5>
                    </div>
                    <div className="w-[55%] pl-[25px] box-border">
                      <p className="text-[#fffc] font-dm-sans font-[500] text-text-size" data-aos="fade-up">
                        We believe in the value that our functions added to a
                        business.
                      </p>
                    </div>
                  </div>
                );
              })}
              <div>
                <Button variant="customTwo">
                  Know More
                  <div className="flex justify-center items-center p-3 rounded-[6px] bg-btn-icon-color group-hover:bg-dark-color black group-hover:text-white">
                    <GoArrowUpRight  />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
