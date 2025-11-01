import React from "react";
import { Button } from "../ui/button";
import { projectsInfo, slug } from "../contentData";
import Image from "next/image";
import Link from "next/link";
export const ProjectsComp = () => {
  return (
    <div className="py-[50px] xs:py-[70px] sm:py-[80px] md:py-[100px] ">
      <div>
        <div className="flex items-center justify-center mb-4">
          <Button
            variant={"customOne"}
            className="uppercase"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="h-[8px] w-[8px] rounded-full bg-btn-icon-color"></div>
            Why choose us
          </Button>
        </div>
        <div>
          <h1 className="text-[30px] sm:text-[36px] lg:text-[60px] xl:text-[68px] font-medium  leading-[38px] sm:leading-[46px] lg:leading-[65px] xl:leading-[70px] tracking-[-2.04px] text-dark-color font-be-vietnam-pro  text-center">
            We Provide Experts to
            <br />
            For Your Business
          </h1>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-12">
          {projectsInfo.map((project) => (
            <div key={project.id} className="overflow-hidden">
              <Link href={`/projects/${slug(project.projectTitle)}`} className="group">
                <div className="h-[380px] xs:h-[560px] overflow-hidden rounded-2xl relative">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />

                  <div className="sm:-translate-x-[100%] sm:group-hover:translate-x-0 transition-all ease-in-out duration-700 absolute  bottom-0 left-0 right-0 pb-7 px-2 xs:px-6 lg:px-2 xl:px-6  z-[2]">
                    <div className="font-be-vietnam-pro flex flex-col flex-start ">
                      <div className="z-[2] relative inline-block">
                        <p className="text-sm tracking-tight font-medium bg-white inline p-[16px_20px_0px_20px]  text-btn-icon-color rounded-t-[12px]">
                          {project.projectCategory}
                        </p>
                        <div
                          className="absolute bottom-[2px]  w-3 h-3 z-[4] inline"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle farthest-side at 100% 0%, #0000 100%, var(--color-background-color))",
                          }}
                        ></div>
                      </div>
                      <div className="max-[300px]:-mt-1 mt-1 ">
                        <p className=" tracking-tight text-[18px] xs:text-[20px] xl:text-[26px]  bg-white inline py-3 px-5 xs:px-5.5 text-dark-color font-medium  xl:font-bold rounded-b-[12px] rounded-tr-[12px] max-[300px]:block ">
                          {project.projectTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
