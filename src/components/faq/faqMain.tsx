import React from "react";
import { ResuseHeroComponent } from "../reuseComponents/herocomponent";
import { FaqQuestionComp } from "./faqQuestion";

export const FaqMainComp = () => {
  const imagePosition = {
    base: "bg-[position:80%]",
    sm: "sm:bg-[position:70%]",
    md: "md:bg-[position:45%]",
    lg: "lg:bg-[position:45%]",
    xl: "xl:bg-[position:45%]",
  };
  const bgImage = "bg-[url('/our-services/titlebar-image-04.jpg')]";
  const content = "Faq Page";
  return (
    <div>
      <div>
        <ResuseHeroComponent
          bgImage={bgImage}
          content={content}
          position={imagePosition}
        />
      </div>
      <div>
        <FaqQuestionComp />
      </div>
    </div>
  );
};
