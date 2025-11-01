import React from "react";
import Image from "next/image";
import { BsTwitterX, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { ChevronRight } from "lucide-react";
import { Input } from "../ui/input";
import Link from "next/link";
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
                <Link href="/our-team" className="text-[#ffffffd9] font-[400] text-[16px] leading-[28px] font-dm-sans hover:text-white cursor-pointer ">
                  Our Team
                </Link>
              </div>
              <div className="flex items-center gap-1">
                <ChevronRight color="white" size={18} strokeWidth={3} />
                <Link href="/utility-pages/license" className="text-[#ffffffd9] font-[400] text-[16px] leading-[28px] font-dm-sans hover:text-white cursor-pointer ">
                  Licenses
                </Link>
              </div>
            </div>
            <div>
                <div className="flex items-center gap-1">
                <ChevronRight color="white" size={18} strokeWidth={3} />
                <Link href="/utility-pages/style-guide"  className="text-[#ffffffd9] font-[400] text-[16px] leading-[28px] font-dm-sans hover:text-white cursor-pointer ">
                  Style Guide
                </Link>
              </div>
              <div className="flex items-center gap-1">
                <ChevronRight color="white" size={18} strokeWidth={3} />
                <Link href="/utility-pages/changelog" className="text-[#ffffffd9] font-[400] text-[16px] leading-[28px] font-dm-sans hover:text-white cursor-pointer ">
                  Change Log
                </Link>
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
                <p className="text-text-color-gray underline text-[15px] font-dm-sans ">Privacy Policy</p>
            </div>
            <div>
                <p className="text-text-color-gray underline text-[15px] font-dm-sans ">Terms & Conditions</p>
            </div>
        </div>
      </div>
    </footer>
    </div>
  );
};
