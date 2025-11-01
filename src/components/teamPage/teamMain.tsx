import React from "react";
import { ResuseHeroComponent } from "../reuseComponents/herocomponent";
import { TeamPageContent } from "./teamPageContent";

export const TeamPageComp = () => {
  const position = {
    base: "bg-[position:80%]",
    sm: "sm:bg-[position:70%]",
    md: "md:bg-[position:65%]",
    lg: "lg:bg-[position:45%]",
    xl: "xl:bg-[position:45%]",
  };
  const bgImage = "bg-[url('/our-team/our-team-hero.jpg')]";
  const content = "Our Team";
  return (
    <div>
      <div>
        <ResuseHeroComponent
          bgImage={bgImage}
          content={content}
          position={position}
        />
      </div>
      <TeamPageContent />
    </div>
  );
};
