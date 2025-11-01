import { ResuseHeroComponent } from '@/components/reuseComponents/herocomponent';
import React from 'react'

export const MainChanglogPageComp = () => {
    const position = { base: "bg-[position:75%]", sm: "sm:bg-[position:70%]", md: "md:bg-[position:60%]", lg: "lg:bg-[position:45%]", xl: "xl:bg-[position:45%]" };
  const bgImage = "bg-[url('/blogs/bg-image.jpg')]";
  const content = "Changelog";
  return (
    <div>
        <div>
            <ResuseHeroComponent bgImage={bgImage} content={content} position={position}  />
        </div>
        <div  className="py-[50px] xs:py-[70px] sm:py-[80px] md:py-[100px]">
            <h3 className="py-1 px-5 bg-white font-be-vietnam-pro text-dark-color text-[24px] leading-[36px] inline-block font-medium mb-8 ">
            Template Version 1.0
          </h3>
          <p className="font-dm-sans text-text-color-gray text-base leading-[26px]"> The Template Has Been Released!</p>
        </div>
    </div>
  )
}
