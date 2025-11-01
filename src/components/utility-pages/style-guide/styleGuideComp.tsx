import React from "react";
import { Button } from "../../ui/button";
import Image from "next/image";
export const StyleGuideComp = () => {
  return (
    <section className="py-[50px] xs:py-[70px] sm:py-[80px] md:py-[100px]">
      <div>
        <div>
          <h3 className="py-1 px-5 bg-white font-be-vietnam-pro text-dark-color text-[24px] leading-[36px] inline-block font-medium mb-8 ">
            Color
          </h3>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="sm:w-1/4">
              <div className=" h-36 bg-global-color mb-4"></div>
              <p className="font-dm-sans text-[17px] text-text-color-gray leading-[26px]">
                Global Color
              </p>
            </div>
            <div className="sm:w-1/4">
              <div className=" h-36 bg-dark-color mb-4"></div>
              <p className="font-dm-sans text-[17px] text-text-color-gray leading-[26px]">
                Dark Color
              </p>
            </div>
            <div className="sm:w-1/4">
              <div className=" h-36 bg-background-color mb-4"></div>
              <p className="font-dm-sans text-[17px] text-text-color-gray leading-[26px]">
                Light Color
              </p>
            </div>
          </div>
        </div>
        {/* line break */}
        <div className="bg-[#76879d2e] h-[1px] my-8 xs:my-10 sm:my-12 md:my-15"></div>
        <div>
          <h3 className="py-1 px-5 bg-white font-be-vietnam-pro text-dark-color text-[24px] leading-[36px] inline-block font-medium mb-8 ">
            Button
          </h3>
          <div
            className="grid grid-cols-1 
          max-[370px]:justify-items-center min-[370px]:grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-4  md:gap-0"
          >
            <CustomButton
              buttonProps={{
                buttonText: "Button 1",
                textColor: "text-dark-color!",
                hoverTextColor: "group-hover:text-dark-color!",
                bgButtonColor: "bg-white!",
                bgButtonHoverColor: "group-hover:bg-btn-icon-color!",
                bgIconColor: "bg-btn-icon-color!",
                bgIconHoverColor: "group-hover:bg-dark-color!",
                iconColor: "invert-0!",
                iconHoverColor: "group-hover:invert!",
              }}
            />
            <CustomButton
              buttonProps={{
                buttonText: "Button 2",
                textColor: "text-white!",
                hoverTextColor: "group-hover:text-white!",
                bgButtonColor: "bg-dark-color!",
                bgButtonHoverColor: "group-hover:bg-btn-icon-color!",
                bgIconColor: "bg-btn-icon-color!",
                bgIconHoverColor: "group-hover:bg-white!",
                iconColor: "invert-0!",
                iconHoverColor: "group-hover:invert-0!",
              }}
            />
            <CustomButton
              buttonProps={{
                buttonText: "Button 3",
                textColor: "text-white!",
                hoverTextColor: "group-hover:text-white!",
                bgButtonColor: "bg-dark-color!",
                bgButtonHoverColor: "group-hover:bg-btn-icon-color!",
                bgIconColor: "bg-btn-icon-color!",
                bgIconHoverColor: "group-hover:bg-dark-color!",
                iconColor: "invert-0!",
                iconHoverColor: "group-hover:invert!",
              }}
            />
            <CustomButton
              buttonProps={{
                buttonText: "Button 4",
                textColor: "text-white!",
                hoverTextColor: "group-hover:text-white!",
                bgButtonColor: "bg-btn-icon-color!",
                bgButtonHoverColor: "group-hover:bg-global-color!",
                bgIconColor: "bg-white!",
                bgIconHoverColor: "group-hover:bg-btn-icon-color!",
                iconColor: "invert-0!",
                iconHoverColor: "group-hover:invert-0!",
              }}
            />
          </div>
        </div>
        {/* line break */}
        <div className="bg-[#76879d2e] h-[1px] my-8 xs:my-10 sm:my-12 md:my-15"></div>
        <div>
          <h3 className="py-1 px-5 bg-white font-be-vietnam-pro text-dark-color text-[24px] leading-[36px] inline-block font-medium mb-8 ">
            Typography
          </h3>
          <div className="font-be-vietnam-pro text-dark-color font-semibold space-y-5 break-words">
            <h1 className="text-[55px] leading-[62px]">Heading 1</h1>
            <h2 className="text-[48px] leading-[54px]">Heading 2</h2>
            <h3 className="text-[42px] leading-[52px]">Heading 3</h3>
            <h4 className="text-[38px] leading-[44px]">Heading 4</h4>
            <h5 className="text-[32px] leading-[40px]">Heading 5</h5>
            <h6 className="text-[28px]  leading-[34px]">Heading 6</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

interface CustomButtonProps {
  buttonText: string;
  textColor: string;
  hoverTextColor: string;
  bgButtonColor: string;
  bgButtonHoverColor: string;
  bgIconColor: string;
  bgIconHoverColor: string;
  iconColor: string;
  iconHoverColor: string;
}
export const CustomButton = ({
  buttonProps,
}: {
  buttonProps: CustomButtonProps;
}) => {
  return (
    <div className="group">
      <Button
        variant={"customTwo"}
        className={`
                ${buttonProps.bgButtonColor}
                ${buttonProps.bgButtonHoverColor}
                ${buttonProps.textColor}
                ${buttonProps.hoverTextColor}
                `}
      >
        {buttonProps.buttonText}
        <div
          className={`flex justify-center items-center w-[44px] h-[44px] rounded-[6px]   black transition-all ease-in-out duration-500 transform
                  ${buttonProps.bgIconColor}
                  ${buttonProps.bgIconHoverColor}  
                    `}
        >
          <Image
            src={"/arrow-right-up-1.svg"}
            width={35}
            height={35}
            alt="arrow-right-up-1"
            className={`w-[12px] h-[12px]  transition-all ease-in-out duration-500 transform
                        ${buttonProps.iconColor}
                        ${buttonProps.iconHoverColor}
                        `}
          />
        </div>
      </Button>
    </div>
  );
};
