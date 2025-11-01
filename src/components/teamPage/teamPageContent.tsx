import React from "react";
import { Button } from "../ui/button";
import { Share2 } from "lucide-react";
import { BsFacebook, BsTwitterX, BsYoutube } from "react-icons/bs";
import Image from "next/image";
import { ourTeamsInfo, slug } from "@/components/contentData";
import Link from "next/link";
export const TeamPageContent = () => {
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
            Our Team
          </Button>
        </div>
        <div>
          <h1 className="text-[30px] sm:text-[36px] lg:text-[60px] xl:text-[68px] font-medium  leading-[38px] sm:leading-[46px] lg:leading-[65px] xl:leading-[70px] tracking-[-2.04px] text-dark-color font-be-vietnam-pro  text-center">
            The benefits of forming
            <br />
            work teams.
          </h1>
        </div>
      </div>
      <div className="mt-8 xs:mt-10 md:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourTeamsInfo.map((team) => (
            <div key={team.id}>
              <div className="relative overflow-hidden ">
                <Link href={`/team/${slug(team.name)}`}>
                  <div className="h-[350px] xs:h-[480px] overflow-hidden rounded-t-[20px] rounded-bl-[20px] z-[1] relative group">
                    <Image
                      src={team.image}
                      alt={team.alt}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out  "
                    />
                    <div
                      className="absolute inset-0 "
                      style={{
                        backgroundImage:
                          "linear-gradient(#fff0 63.5%, #000000b3 90%)",
                      }}
                    ></div>
                  </div>
                  <div className="font-be-vietnam-pro absolute inset-[auto_0%_0%_0%] pb-5 pl-7 pr-18 z-[2]">
                    <h1 className="text-white text-2xl font-bold mb-0.5 leading-[1.2] tracking-[-0.28px] ">
                      {team.name}
                    </h1>
                    <p className="text-btn-icon-color text-sm font-normal uppercase ">
                      {team.designation}
                    </p>
                  </div>
                </Link>
                <div className="pt-3.5 pl-3.5 absolute bottom-[-1px] right-[-1px] border border-solid rounded-tl-[20px] bg-background-color border-background-color z-[2]">
                  <div
                    className="w-[30px] h-[30px] absolute top-[-30px] right-[-1px]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle farthest-side at 0% 0%, #0000 100%, var(--color-background-color))",
                    }}
                  ></div>
                  <div
                    className="absolute w-[25px] h-[25px] bottom-[-1px] left-[-25px] "
                    style={{
                      backgroundImage:
                        "radial-gradient(circle farthest-side at 0% 0%, #0000 100%, var(--color-background-color))",
                    }}
                  ></div>
                  <div className="group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white hover:bg-btn-icon-color transition-colors ease-in-out duration-300">
                      <Share2 />
                    </div>
                    <div
                      className={`absolute bottom-0  space-y-2 right-0 px-1 pb-2 transform  -translate-y-15 transition-all ease-in-out duration-300
                    opacity-0 group-hover:opacity-100 
                    `}
                    >
                      <Link
                        href={"/#"}
                        className="w-[45px] h-[45px] text-dark-color hover:text-white bg-white hover:bg-dark-color flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-300"
                      >
                        <BsFacebook size={18} />
                      </Link>
                      <Link
                        href={"/#"}
                        className="w-[45px] h-[45px] text-dark-color hover:text-white bg-white hover:bg-dark-color flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-300"
                      >
                        <BsTwitterX size={18} />
                      </Link>

                      <Link
                        href={"/#"}
                        className="w-[45px] h-[45px] text-dark-color hover:text-white bg-white hover:bg-dark-color flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-300"
                      >
                        <BsYoutube size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
