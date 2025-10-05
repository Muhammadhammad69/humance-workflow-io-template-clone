"use client";
import React from "react";
import { PreHeader } from "./preHeader";
import { HeroSection } from "./heroSection";
import { About } from "./about";
import { MarqueeSection } from "./marqueeSection";
import { AboutOne } from "./aboutOne";
import { OurServices } from "./ourServices";
import { CounterOne } from "./counterOne";
import { Testimonial } from "./testimonial";
import { ClientLogoMarquee } from "./clientLogoMarquee";
import { OurProcess } from "./ourProcess";
import { Contact } from "./contact";
import { LatestArticles } from "./latestArticles";

export const LandingPage = () => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto px-6 min-[1400px]:px-0">
        <PreHeader />
      </div>
      <div className="max-w-[1400px] mx-auto min-[991px]:px-6 min-[1400px]:px-0">
        <HeroSection />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 min-[1400px]:px-0">
        <About />
      </div>
      <MarqueeSection />
      <div className="max-w-[1400px] mx-auto px-0 xl:px-6 min-[1400px]:px-0">
        <AboutOne />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 min-[1400px]:px-0">
        <OurServices />
        <CounterOne />
      </div>
      <div className="max-w-[1400px] mx-auto min-[1095px]:px-6 min-[1400px]:px-0">
        <Testimonial />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 min-[1400px]:px-0">
        <ClientLogoMarquee />
        <OurProcess />
      </div>
      <div className="max-w-[1400px] mx-auto md:px-6 min-[1400px]:px-0">
        <Contact />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 min-[1400px]:px-0">
        <LatestArticles />
      </div>
      {/* <div className="max-w-[1400px] mx-auto  min-[1400px]:px-0">
        <Footer />
      </div> */}
    </>
  );
};
