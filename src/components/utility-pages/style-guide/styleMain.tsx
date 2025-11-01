import React from "react";
import { ResuseHeroComponent } from "../../reuseComponents/herocomponent";
import { StyleGuideComp } from "./styleGuideComp";

export const StyleMainComp = () => {
  const position = {
    base: "bg-[position:75%]",
    sm: "sm:bg-[position:70%]",
    md: "md:bg-[position:60%]",
    lg: "lg:bg-[position:45%]",
    xl: "xl:bg-[position:45%]",
  };
  const bgImage = "bg-[url('/blogs/bg-blog-page-02.jpg')]";
  const content = "Style Guide";
  return (
    <div>
      <div>
        <ResuseHeroComponent
          bgImage={bgImage}
          content={content}
          position={position}
        />
      </div>
      <StyleGuideComp />
    </div>
  );
};
