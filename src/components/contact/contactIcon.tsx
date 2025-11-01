import React from "react";
import Image from "next/image";
export const ContactIcons = () => {
  const contactIconsData = [
    {
      id: 1,
      title: "Mail Us 24/7",
      description: "pbminfotech@gmail.com & support@pbminfotech.com",
      image: "/contact/contact-email.png",
      alt: "contact-email",
    },
    {
      id: 2,
      title: "Our Location",
      description: "85 Preston, Inglewood, FR 98380, Hoofddorp Noord- 2132",
      image: "/contact/contact-location.png",
      alt: "contact-location",
    },
    {
      id: 3,
      title: "Call US 24/7",
      description: "Phone: +001 236-895-4732 Mobile: +9123 895-4732-236",
      image: "/contact/contact-call.png",
      alt: "contact-call",
    },
    {
      id: 4,
      title: "Working Days",
      description:
        "Mon to Fri - 09:00am To 06:00pm Saturday to Sunday - Closed",
      image: "/contact/contact-schedule.png",
      alt: "contact-schedule",
    },
  ];
  return (
    <>
      <section className="py-[40px] sm:py-[60px] md:py-[100px]">
        <div className="w-full">
          <div className="grid grids-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[50px] pb-[10px] sm:pb-[60px] md:pb-[75px] sm:border-b-[1px] border-solid border-[#0003] ">
            {contactIconsData.map((item) => (
              <div
                key={`our-process-${item.id}`}
                className="mb-[20px] lg:mb-0 "
                data-aos="fade-up"
                data-aos-delay={100 * item.id}
              >
                <div className="w-[90px] h-[90px]  sm:w-[80px] sm:lg:w-[90px] sm:h-[80px] lg:h-[90px] mb-[25px] lg:mb-[40px] rounded-[10px] bg-btn-icon-color p-[15px] flex items-center justify-center ">
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt={item.alt}
                    className="h-[50px] w-auto"
                  />
                </div>
                <div className="  box-border ">
                  <h1 className="text-[20px] leading-[28px] min-[400px]:text-[28px] min-[400px]:leading-[34px] font-[600] text-dark-color font-be-vietnam-pro tracking-[-0.28px] pb-[30px] border-b-[1px] border-solid border-[#00000026]">
                    {item.title}
                  </h1>
                  <p className="pt-[20px] text-text-color-gray font-dm-sans text-[17px] font-medium ">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
