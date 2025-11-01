import { ResuseHeroComponent } from "@/components/reuseComponents/herocomponent";
import Link from "next/link";
import React from "react";
import Image from "next/image";
export const LicenseMainComp = () => {
  const licenseImages = [
    {
      id: 1,
      image: "/license/license-img-01.jpg",
      alt: "license-img-01",
    },
    {
      id: 2,
      image: "/license/license-img-02.jpg",
      alt: "license-img-02",
    },
    {
      id: 3,
      image: "/license/license-img-03.jpg",
      alt: "license-img-03",
    },
    {
      id: 4,
      image: "/license/license-img-04.jpg",
      alt: "license-img-04",
    },
  ];

  const position = {
    base: "bg-[position:25%]",
    sm: "sm:bg-[position:20%]",
    md: "md:bg-[position:45%]",
    lg: "lg:bg-[position:45%]",
    xl: "xl:bg-[position:45%]",
  };
  const bgImage = "bg-[url('/services/bg-hero.jpg')]";
  const content = "Licensing";
  return (
    <div>
      <div>
        <ResuseHeroComponent
          bgImage={bgImage}
          content={content}
          position={position}
        />
      </div>
      <section className="py-[50px] xs:py-[70px] sm:py-[80px] md:py-[100px]">
        <div>
          <h3 className="text-dark-color font-medium text-xl mb-10">
            All graphical assets in this template are licensed for personal and
            commercial use. If you&apos;d like to use a specific asset, please check
            the license below.
          </h3>
          <div>
            <h3 className="py-1 px-5 bg-white font-be-vietnam-pro text-dark-color text-[24px] leading-[36px] inline-block font-medium mb-8 ">
              Images
            </h3>
            <p className="text-base font-dm-sans text-text-color-gray ">
              All images in this template are taken from{" "}
              <Link
                href={"https://unsplash.com/"}
                target="_blank"
               className="font-medium underline underline-offset-3 text-dark-color"
              >
                Unsplash
              </Link>{" "}
              ,{" "}
              <Link
                href={"https://www.freepik.com/"}
                target="_blank"
               className="font-medium underline underline-offset-3 text-dark-color"
              >
                Freepik
              </Link>{" "}
              and{" "}
              <Link
                href={"https://www.pexels.com/"}
                target="_blank"
               className="font-medium underline underline-offset-3 text-dark-color"
              >
                Pexels
              </Link>{" "}
              are free for commercial use.
            </p>
            <div className="mt-6 flex max-[768px]:items-center md:flex-row flex-col gap-4">
              {licenseImages.map((image) => (
                <div className="md:w-1/4" key={`license-img-${image.id}`}>
                  <Image
                    src={image.image}
                    width={220}
                    height={220}
                    alt={image.alt}
                    className="hidden md:block"
                  />
                  <Image
                    src={image.image}
                    width={550}
                    height={550}
                    alt={image.alt}
                    className="block md:hidden"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* line break */}
          <div className="bg-[#76879d2e] h-[1px] my-8 xs:my-10 sm:my-12 md:my-15"></div>
          <div>
            <h3 className="py-1 px-5 bg-white font-be-vietnam-pro text-dark-color text-[24px] leading-[36px] inline-block font-medium mb-8 ">
              Icons & Graphics
            </h3>
           <p className="text-base font-dm-sans text-text-color-gray ">
              The iconography and All graphical assets used in this Template are licensed for free personal and commercial use. If you&apos;d like to use any specific Icon, you can check the licenses and download the images for free on{" "}
              <Link
                href={"https://fonts.google.com/icons"}
                target="_blank"
                className="font-medium underline underline-offset-3 text-dark-color "
              >
                Google Icons
              </Link>{" "}
              and{" "}
              <Link
                href={"https://www.freepik.com/"}
                target="_blank"
                className="font-medium underline underline-offset-3 text-dark-color"
              >
                Freepik
              </Link>
             
            </p>
          </div>
          <div className="bg-[#76879d2e] h-[1px] my-8 xs:my-10 sm:my-12 md:my-15"></div>
          <div>
            <h3 className="py-1 px-5 bg-white font-be-vietnam-pro text-dark-color text-[24px] leading-[36px] inline-block font-medium mb-8 ">
              Typography
            </h3>
             <p className="text-base font-dm-sans text-text-color-gray ">
              All fonts used in this template are available to use freely under the Google fonts license, Check out the license for{" "}
              <Link
                href={"https://fonts.google.com/specimen/Be+Vietnam+Pro"}
                target="_blank"
                className="font-medium underline underline-offset-3 text-dark-color "
              >
                Be Vietnam Pro fonts license
              </Link>{" "}
              and{" "}
              <Link
                href={"https://fonts.google.com/specimen/DM+Sans"}
                target="_blank"
                className="font-medium underline underline-offset-3 text-dark-color"
              >
                DM Sans fonts license
              </Link>
             
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
