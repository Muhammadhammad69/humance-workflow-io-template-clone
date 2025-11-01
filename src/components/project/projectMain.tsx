import React from "react";
import { ResuseHeroComponent } from "../reuseComponents/herocomponent";
import { ProjectsComp } from "./projects";

export const ProjectMainComp = () => {
  const position = {
    base: "bg-[position:75%]",
    sm: "sm:bg-[position:70%]",
    md: "md:bg-[position:60%]",
    lg: "lg:bg-[position:45%]",
    xl: "xl:bg-[position:45%]",
  };
  const bgImage = "bg-[url('/blogs/bg-image.jpg')]";
  const content = "Projects";
  return (
    <div>
      <div>
        <ResuseHeroComponent
          bgImage={bgImage}
          content={content}
          position={position}
        />
      </div>
      <div>
        <ProjectsComp />
      </div>
    </div>
  );
};
