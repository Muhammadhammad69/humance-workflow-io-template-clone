import React from "react";
import { BlogDetailPage } from "./blogDetailPage";
import { ResuseHeroComponent } from "@/components/reuseComponents/herocomponent";
import {BlogType} from "@/components/types"
export const Main = ({ blog }: { blog: BlogType }) => {
  const position = {
    base: "bg-[position:75%]",
    sm: "sm:bg-[position:70%]",
    md: "md:bg-[position:60%]",
    lg: "lg:bg-[position:45%]",
    xl: "xl:bg-[position:45%]",
  };
  const bgImage = "bg-[url('/blogs/bg-image.jpg')]";
  const content = "Blogs";
  return (
    <>
      <ResuseHeroComponent
        bgImage={bgImage}
        content={content}
        position={position}
      />
      <BlogDetailPage  blog={blog}/>
    </>
  );
};
