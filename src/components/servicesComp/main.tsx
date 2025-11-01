import React from 'react'
import {OurServices} from "./ourServices"
import {ResuseHeroComponent} from "@/components/reuseComponents/herocomponent"
export const ServicesMain = () => {
  
  const position = { base: "bg-[position:25%]", sm: "sm:bg-[position:20%]", md: "md:bg-[position:45%]", lg: "lg:bg-[position:45%]", xl: "xl:bg-[position:45%]" };
  const bgImage = "bg-[url('/services/bg-hero.jpg')]";
  const content = "Services";
  return (
    <div>
        <ResuseHeroComponent bgImage={bgImage} content={content} position={position}  />
        <OurServices />
    </div>
  )
}
