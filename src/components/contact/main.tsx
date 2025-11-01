import React from "react";
import { ResuseHeroComponent } from "@/components/reuseComponents/herocomponent";
import { ContactIcons } from "./contactIcon";
import { ContactFormSection } from "@/components/contact/contactFormSection";
import { ClientLogoMarquee } from "@/components/landing-page/clientLogoMarquee";
import {Map} from "@/components/contact/map"
export const Main = () => {
  const position = {
    base: "bg-[position:75%]",
    sm: "sm:bg-[position:70%]",
    md: "md:bg-[position:60%]",
    lg: "lg:bg-[position:45%]",
    xl: "xl:bg-[position:45%]",
  };
  const bgImage = "bg-[url('/contact/bg-contact-page.jpg')]";
  const content = "Contact Us";
  return (
    <>
      <ResuseHeroComponent
        bgImage={bgImage}
        content={content}
        position={position}
      />
      <ContactIcons />
      <ContactFormSection />
      <div>
        <ClientLogoMarquee />
      </div>
      <Map />
    </>
  );
};
