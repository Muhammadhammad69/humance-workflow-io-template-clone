import React from "react";
import Image from "next/image";
import { BsTwitterX, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { ChevronRight } from "lucide-react";
import { Input } from "../ui/input";
export const Footer = () => {
  return (
    <div className="max-w-[1400px] mx-auto  min-[1400px]:px-0">
    <footer className="box-border bg-dark-color bg-[url('/footer/footer-bg-pattern.png')] bg-[position:100%_100%] bg-no-repeat bg-auto pt-[72px] pb-[28px] px-6">
      <div className="mx-auto flex justify-between items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image
            src="/logo.svg"
            width={56}
            height={56}
            alt="logo"
            className="h-[56px]! w-full"
          />
          {/* <span className="ml-3 text-xl">Tailblocks</span> */}
        </a>
        <div className="ml-[7px] mr-[20px] relative flex-1">
          <div className="bg-[#ffffff26] h-[1px] absolute top-[50%] left-0 right-0 "></div>
        </div>

        <div className="flex  sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
          <div className="w-[35px] h-[35px] bg-white hover:bg-btn-icon-color flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-300">
            <BsFacebook size={14} />
          </div>
          <div className="w-[35px] h-[35px] bg-white hover:bg-btn-icon-color flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-300">
            <BsTwitterX size={14} />
          </div>
          <div className="w-[35px] h-[35px] bg-white hover:bg-btn-icon-color flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-300">
            <BsInstagram size={14} />
          </div>
          <div className="w-[35px] h-[35px] bg-white hover:bg-btn-icon-color flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-300">
            <BsYoutube size={14} />
          </div>
        </div>
        {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex mt-[70px] mb-[38px] box-border  gap-[20px]">
        <div className="box-border lg:w-[20%]">
          <div className="font-be-vietnam-pro text-btn-icon-color mb-[20px] text-[20px] tracking-[0.2px] font-medium leading-[34px] ">
            Our Location
          </div>
          <div className="text-[#ffffffd9] font-[400] text-[16px] leading-[28px] mb-[10px] hover:text-white ">
            2972 Westheimer Rd. Santa
            <br />
            Ana, Illinois 85486
          </div>
        </div>
        <div className="box-border lg:w-[20%]">
          <h2 className="font-be-vietnam-pro text-btn-icon-color mb-[20px] text-[20px] tracking-[0.2px] font-medium leading-[34px] ">
            Say Hello
          </h2>
          <p className="text-[#ffffffd9] font-[400] text-[16px] leading-[28px] mb-[10px] hover:text-white cursor-pointer underline">
            contact@pbmit.com
          </p>
          <h2 className="text-white font-[700] text-[24px] leading-[28px] mb-[10px]">
            +181 234 5678
          </h2>
        </div>
        <div className="box-border lg:w-[39%]">
          <h2 className="font-be-vietnam-pro text-btn-icon-color mb-[20px] text-[20px] tracking-[0.2px] font-medium leading-[34px] ">
            Our Company
          </h2>
          <div className="flex gap-[55px]">
            <div>
              <div className="flex items-center gap-1">
                <ChevronRight color="white" size={18} strokeWidth={3} />
                <p className="text-[#ffffffd9] font-[400] text-[16px] leading-[28px] font-dm-sans hover:text-white cursor-pointer ">
                  Our Team
                </p>
              </div>
              <div className="flex items-center gap-1">
                <ChevronRight color="white" size={18} strokeWidth={3} />
                <p className="text-[#ffffffd9] font-[400] text-[16px] leading-[28px] font-dm-sans hover:text-white cursor-pointer ">
                  Licenses
                </p>
              </div>
            </div>
            <div>
                <div className="flex items-center gap-1">
                <ChevronRight color="white" size={18} strokeWidth={3} />
                <p className="text-[#ffffffd9] font-[400] text-[16px] leading-[28px] font-dm-sans hover:text-white cursor-pointer ">
                  Style Guide
                </p>
              </div>
              <div className="flex items-center gap-1">
                <ChevronRight color="white" size={18} strokeWidth={3} />
                <p className="text-[#ffffffd9] font-[400] text-[16px] leading-[28px] font-dm-sans hover:text-white cursor-pointer ">
                  Change Log
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border lg:w-[25%]">
            <h2 className="font-be-vietnam-pro text-btn-icon-color mb-[20px] text-[20px] tracking-[0.2px] font-medium leading-[34px] ">
            Subscribe Newsletter
          </h2>
          <div className="relative">
            <Input type="text" className="focus-visible:ring-0 border-[1px] border-solid border-[#f6f6f633] rounded-[10px] h-[60px] text-[15px] leading-[28px] py-[10px] xl:pl-[30px]  focus-visible:border-btn-icon-color text-white font-dm-sans font-medium" placeholder="Your Email Address"/>
            <Input type="submit" className = "bg-btn-icon-color text-dark-color rounded-[10px] h-[54px] text-[15px] font-[600] absolute top-[3px] right-[3px] bottom-[3px] max-[400px]:w-[30%] w-[20%] sm:w-[30%] focus-visible:ring-0 border-none! cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col gap-2 lg:flex-row lg:gap-0 justify-between rounded-[10px] items-center p-[17px_25px]">
        <div>
            <h4 className="text-[16px] text-text-color-gray font-dm-sans leading-[26px] text-center" >Copyright © 2025 Humace, All Rights Reserved.</h4>
        </div>
        <div className="flex max-[450px]:flex-col items-center ">
            <div className="border-r-[1px] max-[450px]:border-none border-solid border-[#052b3180] min-[450px]:mr-[8px] min-[450px]:pr-[10px] box-border">
                <text className="text-text-color-gray underline text-[15px] font-dm-sans ">Privacy Policy</text>
            </div>
            <div>
                <text className="text-text-color-gray underline text-[15px] font-dm-sans ">Terms & Conditions</text>
            </div>
        </div>
      </div>
    </footer>
    </div>
  );
};
