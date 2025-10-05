import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsTwitterX,BsFacebook,BsInstagram,BsYoutube } from "react-icons/bs";
export const PreHeader = () => {
  return (
    <div className="min-[991px]:pb-[15px]">
      <div className=" hidden lg:flex justify-between">
        <div className="flex gap-5">
          <div className="flex gap-2 items-center">
            <div>
              <FaLocationDot className="text-btn-icon-color" size={18} />
            </div>
            <div className="text-text-color-gray font-family-main">
              <p>Los Angeles Gournadi, 1230 Bariasl</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <MdEmail className="text-btn-icon-color" size={18} />
            </div>
            <div className="text-text-color-gray font-family-main">
              <p>noreply@pbminfotech.com</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <FaPhoneVolume className="text-btn-icon-color" size={18} />
            </div>
            <div className="text-text-color-gray font-family-main">
              <p>+(123) 1234-567-8901</p>
            </div>
          </div>
        </div>
        <div className="flex  sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
          <div className="w-[35px] h-[35px]  hover:bg-btn-icon-color flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-300">
            <BsFacebook size={14} />
          </div>
          <div className="w-[35px] h-[35px]  hover:bg-btn-icon-color flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-300">
            <BsTwitterX size={14} />
          </div>
          <div className="w-[35px] h-[35px]  hover:bg-btn-icon-color flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-300">
            <BsInstagram size={14} />
          </div>
          <div className="w-[35px] h-[35px]  hover:bg-btn-icon-color flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-300">
            <BsYoutube size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};
