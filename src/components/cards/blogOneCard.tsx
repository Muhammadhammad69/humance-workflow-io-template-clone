import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {BlogType} from "@/components/types";
import {parseDateString} from "@/components/contentData";
export const BlogCardOne = ({blog}: {blog:BlogType}) => {
  return (
        <div className="rounded-[25px] w-full">
          <div className="rounded-[20px_20px_20px_0] h-[310px] relative overflow-hidden">
            <Image
              src={blog.image}
              width={400}
              height={400}
              alt={blog.alt}
              className="w-full h-full object-cover  transform transition-transform duration-500 hover:scale-110"
            />
            <div className="bg-background-color rounded-tr-[20px] pt-[8px] pb-[2px] absolute inset-[auto_auto_0%_0%] box-border pr-[20px] ">
              <div className="flex max-[460px]:flex-col">
                <div className="flex items-center text-[13px] lg:text-[11px] leading-[26px] font-be-vietnam-pro text-dark-color uppercase tracking-[0.65px] ">
                  <p className="tracking-[0.65px]">{parseDateString(blog.date, "day")}</p>
                  <p className="pl-[5px]  tracking-[0.65px] ">
                    {parseDateString(blog.date, "month")} {parseDateString(blog.date, "year")}
                  </p>
                  <div className="w-[4px] h-[4px] bg-btn-icon-color rounded-full flex items-center justify-center mx-[4px] "></div>
                </div>
                <div className="flex items-center text-[13px] lg:text-[11px] leading-[26px] font-be-vietnam-pro text-dark-color uppercase ">
                  <p className="tracking-[0.65px]">{blog.category}</p>
                  <div className="max-[460px]:hidden w-[4px] h-[4px] bg-btn-icon-color rounded-full flex items-center justify-center mx-[4px] "></div>
                </div>
                <div className="text-[13px] lg:text-[11px] leading-[26px] font-be-vietnam-pro text-dark-color uppercase ">
                  <p className="tracking-[0.65px]">{blog.department}</p>
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
          <div className="mt-[30px]">
            <h3 className="max-[460px]:text-[20px] text-[24px] md:text-[28px] leading-[34px] font-[600] max-[460px]:mb-[5px] mb-[12px] md:mb-[22px] tracking-[--0.28px] text-dark-color font-be-vietnam-pro ">
              {blog.title}
            </h3>
            <div className="box-border flex items-center cursor-pointer">
              <Button
                variant={"link"}
                className="text-dark-color! text-[16px] leading0[28px] cursor-pointer px-0! underline"
              >
                Read More
              </Button>
              <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[10px] box-border bg-btn-icon-color ml-[5px]">
                <Image
                  src={"/arrow-right-up-1.svg"}
                  width={12}
                  height={12}
                  className="w-[12px] h-[12px] "
                  alt="arrow-right-up-1"
                />
              </div>
            </div>
          </div>
        </div>
  );
};
