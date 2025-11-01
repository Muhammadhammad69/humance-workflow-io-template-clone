import React from "react";
import { ResuseHeroComponent } from "@/components/reuseComponents/herocomponent";
import { SingleService } from "./singleService";
import { Service } from "@/components/types";

export const Main = ({ service }: { service: Service }) => {
 const imagePosition = { base: "bg-[position:80%]", sm: "sm:bg-[position:70%]", md: "md:bg-[position:45%]", lg: "lg:bg-[position:45%]", xl: "xl:bg-[position:45%]" };
  const bgImage = "bg-[url('/our-services/titlebar-image-04.jpg')]";
  const content = "Services Details";
  return (
    <div>
      <ResuseHeroComponent bgImage={bgImage} content={content} position={imagePosition} />
      <SingleService service={service} />
    </div>
  );
};
