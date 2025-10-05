import React from "react";
import Image from "next/image";
import { MoveRight, MoveLeft } from "lucide-react";
import { useState } from "react";
import Aos from "aos";
import { useEffect, useRef } from "react";
import "aos/dist/aos.css";

export const Testimonial = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const testimonials = [
    {
      id: 1,
      title: "Highly Professional.",
      content:
        "“Were a growth equity firm empower new generation of extraordinary visionaries. Bolstering brands and tech-enabled solutions that make our lives healthier, happier and more convenient”",
      image: "/more/client-1.jpg",
      name: "Stephen Welch",
      designation: "Satisfied Client",
    },
    {
      id: 2,
      title: "Highly Professional.",
      content:
        "“Were a growth equity firm empower new generation of extraordinary visionaries. Bolstering brands and tech-enabled solutions that make our lives healthier, happier and more convenient”",
      image: "/more/client-1.jpg",
      name: "Martin Bailey",
      designation: "Chief Finance",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

 
    const el = divRef.current

    if (el) {
      el.classList.remove("animate__animated", "animate__fadeInLeft");
      
      void el.offsetWidth; // 👈 reflow same element pe hona chahiye

      el.classList.add("animate__animated", "animate__fadeInLeft");
    }
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  useEffect(() => {
    Aos.init({ once: true, delay: 300, duration: 1000 });
  }, []);
  const current = testimonials[currentIndex];
  return (
    <section
      className=" lbx:mx-[50px] position relative rounded-[20px] overflow-hidden box-border  lbx:h-[800px]
    "
    >
      <div
        className="bg-[position:20%] sm:bg-[position:0%] lbx:bg-[position:50%] bg-cover bg-no-repeat lbx:h-full relative box-border inset-0 pt-[220px] pb-[80px] px-[20px] lbx:p-0"
        style={{ backgroundImage: "url(/more/2.jpg)" }}
      >
        <div className="flex lbx:h-full box-border lbx:items-center ">
          <div className="hidden lbx:block w-1/2 h-[50%]  "></div>
          <div className=" w-full lbx:w-1/2  lbx:h-[50%] flex lbx:pr-[20px]   ">
            <div
              className="box-border  bg-[#0000] bg-[position:100%_100%] bg-no-repeat bg-auto  lbx:w-[95%] rounded-[20px] py-[30px] sm:py-[60px] lbx:pt-[35px] lbx:pb-[60px] xl:py-[60px]  px-[45px] h-full relative max-[640px]:bg-white"
              style={{ backgroundImage: "url(/more/1.png)" }}
            >
              <div className=" overflow-hidden ">
                <div
                  className="font-be-vietnam-pro text-black text-[18px] sm:text-[26px] font-medium "
                  key={`title-${current.id}`}
                  ref = {divRef}
                >
                  {current.title}
                </div>
                <div
                  className=" mt-[15px] sm:mt-[25px] lbx:mt-[10px] xl:mt-[20px] box-border animate__animated 
"
                >
                  <div
                    className="font-be-vietnam-pro text-[16px] sm:text-[18px] text-text-color-gray "
                    key={`content-${current.id}`}
                  >
                    {current.content}
                  </div>
                  <div
                    className="mt-[25px] sm:mt-[40px] lbx:mt-[15px] xl:mt-[30px] border-t-[1px] border-solid border-[#00000026] pt-[20px] flex max-[450px]:flex-col items-center  "
                    key={`profile-${current.id}`}
                    style={{ animationDelay: "200ms" }}
                  >
                    <Image
                      src={current.image}
                      width={100}
                      height={100}
                      alt={current.name}
                      className="w-[70px] h-[70px] rounded-full"
                    />
                    <div className="box-border max-[450px]:mt-[10px] min-[450px]:pl-[20px] ">
                      <h1
                        className="font-be-vietnam-pro text-black mt-0 text-[18px] sm:text-[20px] mb-[2px] font-medium "
                        key={`name-${current.id}`}
                      >
                        {current.name}
                      </h1>
                      <p className="uppercase font-be-vietnam-pro text-dark-color text-[13px] font-[400] box-border ">
                        {current.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute right-[130px] bottom-[0px] cursor-pointer "
                onClick={prevSlide}
              >
                <MoveLeft size={25} color="white" />
                <MoveLeft size={50} color="white" className="hidden sm:block" />
              </div>
              <div
                className="absolute right-[70px] bottom-[0px] cursor-pointer "
                onClick={nextSlide}
              >
                <MoveRight size={25} color="white" />
                <MoveRight
                  size={50}
                  color="white"
                  className="hidden sm:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
