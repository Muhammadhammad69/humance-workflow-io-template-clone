import React from "react";
import Image from "next/image";
import {BlogType} from "@/components/types"
import {parseDateString} from "@/components/contentData"
export const BlogTwoCard = ({blog}: {blog:BlogType}) => {
  
  return (
    <div className="p-[25px_20px_20px_25px] border-[1px] border-solid border-[#052b3133] rounded-[25px] bg-[#f6f6f6] relative flex flex-col md:flex-row lg:flex-col  xl:flex-row  ">
      <div className=" rounded-t-[20px] rounded-br-[20px] object-cover relative md:mr-[30px] lg:mr-0 xl:mr-[30px]">
        <Image
          src={blog.image}
          alt={blog.alt}
          width={1000}
          height={1000}
          className=" h-full w-full md:w-[240px] lg:w-full xl:min-w-[290px] xl:w-[290px] lg:h-[250px] xl:h-[auto] object-cover rounded-[25px]"
        />
        <div className="bg-background-color rounded-tr-[20px] pt-[8px] pb-[2px] absolute inset-[auto_auto_0%_0%] box-border pr-[20px] ">
          <div className="flex max-[460px]:flex-col">
            <div className="flex items-center leading-[26px] font-be-vietnam-pro text-dark-color uppercase tracking-[0.65px] ">
              <p className="tracking-[0.65px] text-[13px]">{parseDateString(blog.date, "day")}</p>
              <p className="pl-[5px]  tracking-[0.65px] text-[13px] ">
                {parseDateString(blog.date, "month")}
                {" "}
                {parseDateString(blog.date, "year")}
              </p>
            </div>
          </div>
          <div
            className="w-[20px] h-[20px] absolute bottom-[-1px] right-[-18px] "
            style={{
              backgroundImage:
                "radial-gradient(circle farthest-side at 100% 0%, #0000 100%, var(--color-background-color))",
            }}
          ></div>
          <div
            className="w-[25px] h-[25px] absolute top-[-25px] left-[0px] "
            style={{
              backgroundImage:
                "radial-gradient(circle farthest-side at 100% 0%, #0000 100%, var(--color-background-color)",
            }}
          ></div>
        </div>
      </div>
      <div>
        <div className="flex pt-[20px] md:pt-0 lg:pt-[20px]">
          <div className="flex items-center text-[13px] lg:text-[11px] leading-[26px] font-be-vietnam-pro text-dark-color uppercase ">
            <p className="tracking-[0.65px] font-[400] text-[13px]">{blog.category}</p>
            <div className="max-[460px]:hidden w-[6px] h-[6px] bg-btn-icon-color rounded-full flex items-center justify-center mx-[6px] "></div>
          </div>
          <div className="text-[13px] lg:text-[11px] leading-[26px] font-be-vietnam-pro text-dark-color uppercase font-[400] ">
            <p className="tracking-[0.65px] font-[400] text-[13px]">{blog.department}</p>
          </div>
        </div>
        <h2 className="text-[20px] xs:text-[24px] sm:text-[28px] leading-[28px] xs:leading-[34px] font-be-vietnam-pro pt-[10px] mb-[20px] tracking-[0.28px] text-dark-color font-[600] " >{blog.title}?</h2>
        <div className="w-[44px] h-[44px] rounded-[6px] bg-btn-icon-color flex items-center justify-center p-[10px] box-border">
            <Image 
            src={"/arrow-right-up-1.svg"}
            width={20}
            height={20}
            alt="arrow-right-up-1"
            className="w-[15px] h-[15px]"
            />
             </div>
      </div>
    </div>
  );
};
