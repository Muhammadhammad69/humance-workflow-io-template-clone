"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";

import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import "../swiper-css/style.css";
export const HeroSection = () => {
  const sliderData = [
    {
      id: 1,
      title: "The Future Is Bright",
      t1: "The Future",
      t2: "Is Bright",
      description:
        "Clearly define the goals and objectives of your HR department.",
      image: "bg-[url('/carousel-01/1.jpg')]",
      alt: "slider-img-01",
      imagePosition : "bg-[position:80%_10%]!"
    },
    {
      id: 2,
      title: "Happy to Help You",
      t1: "Happy to",
      t2: "Help You",
      description:
        "Clearly define the goals and objectives of your HR department.",
      image: "bg-[url('/carousel-01/2.jpg')]",
      alt: "slider-img-01",
      imagePosition : "bg-[position:60%_10%]!"
    },
    {
      id: 3,
      title: "Grow with Our Team",
      t1: "Grow with",
      t2: "Our Team",
      description:
        "Clearly define the goals and objectives of your HR department.",
      image: "bg-[url('/carousel-01/3.jpg')]",
      alt: "slider-img-01",
      imagePosition : "bg-[position:66%_10%]!"
    },
  ];
  return (
    <section className=" relative">
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: (_, className) =>
            // 👇 Important: CSS module classes manually concatenate in string
            `<span class="${className}"></span>`,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[400px] min-[490px]:h-[500px] md:h-[600px] min-[991px]:h-[850px] relative"
      >
        
        <>
          {sliderData.map((item) => (
            <SwiperSlide
              className="rounded-[25px] relative"
              key={`carousel-one-${item.id}`}
            >
              <div
                className={` ${item.image} ${item.imagePosition} w-full! h-full! bg-[size:auto,cover]! pt-[90px] px-[20px] rounded-br-[25px] rounded-bl-[25px] min-[991px]:rounded-[25px] bg-no-repeat opacity-[1] brightness-75 `}
              ></div>
              <div className="z-10 absolute top-[27%] left-[24px] ">
                <div className="text-white">
                  <h1 className="text-[35px] min-[490px]:text-[50px] md:text-[60px] leading-[40px] min-[490px]:leading-[50px] min:[991px]:text-[110px] md:leading-[70px] min:[991px]:leading-[110%] font-[700] tracking-[-3.3px] uppercase ">
                    {item.t1}
                  </h1>
                  <h1 className="text-[50px] min-[490px]:text-[70px] leading-[60px] md:text-[90px] min-[490px]:leading-[70px] min:[991px]:text-[140px] md:leading-[90px] min:[991px]:leading-[90%] font-[700] tracking-[-3.3px] uppercase ">
                    {item.t2}
                  </h1>
                </div>
                <div className="md:ml-[100px] mt-[35px] flex ">
                  <div className="bg-[#ffffff80] w-[100px] h-[1px] mt-[13px] hidden md:block"></div>
                  <div className="md:pl-[15px]">
                    <div className="mb-[30px] text-white text-[17px] sm:text-[20px] leading-[28px] font-dm-sans hidden min-[490px]:block ">
                      Clearly define the goals and objectives of your
                      <br />
                      HR department.
                    </div>
                    <div>
                      <Button variant={"customTwo"}>
                        Contact us
                        <div className="flex justify-center items-center w-[44px] h-[44px] rounded-[6px] bg-btn-icon-color group-hover:bg-dark-color black ">
                          <Image
                            src={"/arrow-right-up-1.svg"}
                            width={35}
                            height={35}
                            alt="arrow-right-up-1"
                            className="w-[12px] h-[12px] group-hover:invert "
                          />
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </section>
  );
}
