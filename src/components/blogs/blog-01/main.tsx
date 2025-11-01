import React from 'react'
import {ResuseHeroComponent} from "@/components/reuseComponents/herocomponent";
import {Blogs} from "./blogs";
export const Main = () => {
  const position = { base: "bg-[position:75%]", sm: "sm:bg-[position:70%]", md: "md:bg-[position:60%]", lg: "lg:bg-[position:45%]", xl: "xl:bg-[position:45%]" };
  const bgImage = "bg-[url('/blogs/bg-image.jpg')]";
  const content = "Blogs";
  return (
    <div>
       <ResuseHeroComponent bgImage={bgImage} content={content} position={position}  />
       <Blogs />
    </div>
  )
}
