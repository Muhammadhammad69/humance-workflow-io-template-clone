import React from "react";
import { ResuseHeroComponent } from "../reuseComponents/herocomponent";
import { WhoWeAre } from "@/components/aboutUs/whoWeAre";
import { MarqueeSection } from "../landing-page/marqueeSection";
import { OurProcess } from "../landing-page/ourProcess";
import { CounterOne } from "../landing-page/counterOne";
import { OurTeam } from "./ourTeam";
import { ClientLogoMarquee } from "../landing-page/clientLogoMarquee";
export const Main = () => {
  const position = {
    base: "bg-[position:25%]",
    sm: "sm:bg-[position:20%]",
    md: "md:bg-[position:45%]",
    lg: "lg:bg-[position:45%]",
    xl: "xl:bg-[position:45%]",
  };
  const bgImage = "bg-[url('/services/bg-hero.jpg')]";
  const content = "About Us";
  return (
    <div>
      <ResuseHeroComponent
        bgImage={bgImage}
        content={content}
        position={position}
      />
      <WhoWeAre />
      <MarqueeSection />
      <div className="xs:bg-white lg:mx-10 p-0 xs:p-6 rounded-3xl">
        <OurProcess />
      </div>
      <CounterOne />
      <div className="lg:mx-10 ">
        <OurTeam />
      </div>
      {/* <div className='mx-10'> */}
      
      <div className="lg:mx-10 ">
        <ClientLogoMarquee isAbout={true} />
      </div>
      {/* </div> */}
    </div>
  );
};
