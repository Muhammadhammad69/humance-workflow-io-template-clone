import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "../ui/label";
import { ArrowUpRight } from "lucide-react";
export const ContactFormSection = () => {
  const inputClassName =
    "focus-visible:ring-0 border-[1px] border-solid border-[#15141c1a] rounded-[10px] h-[60px] text-[15px] leading-[28px] py-[10px] xl:pl-[30px]  text-black font-dm-sans font-medium";
  return (
    <section className="md:bg-[url('/contact/Frame-5.png')] bg-no-repeat bg-auto bg-[position:0%_90%] flex flex-col md:flex-row gap-[20px] md:gap-[70px] ">
      <div className="md:w-[45%]">
        <div className=" box-border">
          <div>
            <Button
              variant={"customOne"}
              className="text-[12px]! uppercase "
              data-aos="fade-up"
            >
              <div className="h-[8px] w-[8px] rounded-full bg-btn-icon-color "></div>
              Why Choose Us
            </Button>
          </div>
        </div>
        <div className=" mt-[10px] box-border">
          <h2
            className="font-be-vietnam-pro text-dark-color text-[30px] sm:text-[36px] lg:text-[60px] xl:text-[68px] font-medium  leading-[38px] sm:leading-[46px] lg:leading-[65px] xl:leading-[70px] mb-[30px] "
            data-aos="fade-up"
          >
            {/* <span className="max-[355px]:block hidden">
                Learn more about our working process.
              </span> */}
            <span className="">
              Feel free to
              <br />
              contact with us
            </span>
          </h2>
          <p className="text-[17px] font-dm-sans text-text-color-gray leading-[26px]  ">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labo et dolo cupidatat non proident, sunt in culpa qui officia
            deserunt anim id est laborum.
          </p>
        </div>
      </div>
      <div className="md:w-[55%] ">
        <div className="p-[40px_20px_60px] lg:p-[40px_60px_60px] relative bg-white rounded-[20px] ">
          <div>
            <h2
              className="text-[22px] xs:text-[28px] leading-[28px] xs:leading-[34px] text-dark-color tracking-[0.3px] mt-0 font-be-vietnam-pro mb-[20px] font-medium "
              data-aos="fade-left"
            >
              Send a message to a staff
            </h2>
            <p className="text-[17px] font-dm-sans text-text-color-gray leading-[26px] mb-[20px]  ">
              Your email address will not be published. Required fields are
              marked
            </p>
          </div>
          <div
            className="grid max-[480px]:grid-cols-1 grid-cols-2 gap-x-[20px] gap-y-[20px] "
            data-aos="fade-left"
          >
            <Input
              type="text"
              className={`focus-visible:ring-0 border-[1px] border-solid border-[#15141c1a] rounded-[10px] h-[60px] text-[15px] leading-[28px] py-[10px] xl:pl-[30px]  text-black font-dm-sans font-medium `}
              placeholder="Full Name"
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
            <Input
              type="text"
              className={`${inputClassName}`}
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="mt-[20px]">
            <div className="relative">
              <Textarea
                placeholder="Your Message"
                name="message"
                className="font-dm-sans focus-visible:ring-0 h-[125px] pt-[22px] pl-[22px] rounded-[10px] text-[14px]  "
              />
              <div className="flex items-start gap-2 mt-[30px] mb-[25px] ">
                <Checkbox id="save-info" />
                <Label
                  htmlFor="save-info"
                  className="text-[14px] font-dm-sans text-text-color-gray "
                >
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </Label>
              </div>
              <div className="relative w-auto flex">
                <button className="group relative bg-dark-color text-white px-4 xs:px-8 py-2 xs:py-4 rounded-2xl  text-lg flex items-center gap-3 hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-be-vietnam-pro font-medium text-[15px]">
                  Submit Now
                  <ArrowUpRight />
                  
                </button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
