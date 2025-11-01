import React from "react";
import { ResuseHeroComponent } from "../reuseComponents/herocomponent";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { IOurTeam } from "../types";
export const MainTeamDetailedComp = ({teamData}: {teamData: IOurTeam}) => {
  const position = {
    base: "bg-[position:75%]",
    sm: "sm:bg-[position:70%]",
    md: "md:bg-[position:60%]",
    lg: "lg:bg-[position:45%]",
    xl: "xl:bg-[position:45%]",
  };
  const bgImage = "bg-[url('/blogs/bg-blog-page-02.jpg')]";
  const content = "Team Details";
  return (
    <div>
      <ResuseHeroComponent
        bgImage={bgImage}
        content={content}
        position={position}
      />
      <div>
        <TeamDetailedProfile teamData={teamData}/>
      </div>
    </div>
  );
};

export const TeamDetailedProfile = ({teamData}: {teamData: IOurTeam}) => {
  const contactInfo = [
    {
      id: 1,
      title: "Email",
      value: teamData.email,
    },
    {
      id: 2,
      title: "Phone",
      value: "+ (123) 1800-567-8990",
    },
    {
      id: 3,
      title: "Experience",
      value: "6 Years",
    },
  ];

  return (
    <section className="py-[50px] xs:py-[70px] sm:py-[80px] md:py-[100px]">
      <div className="bg-dark-color p-2.5 rounded-2xl bg-[url('/team-detail-bg-pattern.png')] bg-no-repeat bg-[position:100%_110%] xs:bg-[position:100%_100%] bg-auto ">
        <div className="flex md:flex-row flex-col md:items-center md:gap-6">
          <div className="h-[340px] xs:h-[400px] md:h-[540px] ">
            <Image
              src={teamData.image}
              alt={teamData.alt}
              width={580}
              height={580}
              className="rounded-2xl w-full h-full object-cover "
            />
          </div>
          <div className="lg:ml-20 max-w-[460px] px-4 py-8  md:px-0 md:py-0">
            <div className="font-be-vietnam-pro mb-4 xs:mb-6 md:mb-9.5">
              <h2 className="text-white text-2xl xs:text-3xl font-semibold ">
                {teamData.name}
              </h2>
              <p className=" text-btn-icon-color text-[13px] xs:text-sm ">
                {teamData.designation}
              </p>
            </div>
            <p className="mb-4 xs:mb-5 text-base text-[#fffc] font-dm-sans leading-[26px] ">
              I believe that successful organizations are built on a foundation
              of strong HR practices.
            </p>
            <div className="font-be-vietnam-pro text-btn-icon-color space-y-1">
              {contactInfo.map((contact) => (
                <div className="flex gap-1.5" key={contact.id}>
                  <h6 className=" text-base font-medium leading-6 ">
                    {contact.title} :
                  </h6>
                  <p className="text-base text-[#fffc] font-dm-sans leading-[26px] ">
                    {contact.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-1.5 mt-6 xs:mt-8">
              <Link
                href="/#"
                className="w-11.5 h-11.5 rounded-full flex items-center justify-center text-btn-icon-color border border-[#fffc] hover:bg-btn-icon-color hover:text-white hover:border-none transition-colors ease-in-out duration-500 "
              >
                <BsFacebook size={22} />
              </Link>
              <Link
                href="/#"
                className="w-11.5 h-11.5 rounded-full flex items-center justify-center text-btn-icon-color border border-[#fffc] hover:bg-btn-icon-color hover:text-white hover:border-none transition-colors ease-in-out duration-500 "
              >
                <BsYoutube size={22} />
              </Link>
              <Link
                href="/#"
                className="w-11.5 h-11.5 rounded-full flex items-center justify-center text-btn-icon-color border border-[#fffc] hover:bg-btn-icon-color hover:text-white hover:border-none transition-colors ease-in-out duration-500 "
              >
                <BsTwitterX size={22} />
              </Link>
              <Link
                href="/#"
                className="w-11.5 h-11.5 rounded-full flex items-center justify-center text-btn-icon-color border border-[#fffc] hover:bg-btn-icon-color hover:text-white hover:border-none transition-colors ease-in-out duration-500 "
              >
                <BsLinkedin size={22} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-7.5">
        <div>
          <h2 className="font-be-vietnam-pro text-2xl xs:text-3xl text-dark-color font-bold mt-2.5 mb-5">
            Personal Information
          </h2>
          <p className="font-dm-sans text-base text-text-color-gray mb-5 ">
            Team members need to have excellent customer service and
            communication skills, as well as the ability actively listen a
            employees. They also need to a discreet able to approach sensitive
            matters with care In some companies,{" "}
            <Link href="/#" className="text-dark-color font-bold">
              HR also administers compensation benefits
            </Link>{" "}
            HR departments exist to add value to organizations by providing
            objective guidance to managers and employees on people-related
            matters. This work is done through day-to-day support for employees,
            project work, and long term strategic planning. Train people quickly
            well with e-business. So they highly efficient manufactured
            products. We feel that this special functions is part of HR its
            piece of the success business.
          </p>
          <p className="font-dm-sans text-base text-text-color-gray mb-5 ">
            Our advisers provides a broad menu service that identifies the{" "}
            <Link href="/#" className="text-dark-color font-bold">
              task requirements in the organization job
            </Link>{" "}
            and designs the with skill requirement for the task We believe in
            the ask most value that our functions added to a business. Our
            strategic partner that specialist role for HR is success of a
            business. We feel that this specialist part of HR is unrecognized
            for a its contribution to the profitability and success of a
            business growth & marketing. We believe in success of our business
            in the world.
          </p>
        </div>
        <div>
          <h2 className="font-be-vietnam-pro text-2xl xs:text-3xl text-dark-color font-bold mt-2.5 mb-5">
            Professional Skills and Experience
          </h2>
          <p className="font-dm-sans text-base text-text-color-gray mb-5 ">
            Human resources (HR) team members are responsible for managing a
            company’s employees lifecycle, including recruitment, hiring,
            onboarding, training, envelopment, offboarding HR team members also
            handle employee relations, compensation and benefits, and legal
            compliance This work is done through day-to-day support for
            employees.
          </p>
          <div>
            <p className="font-dm-sans text-base text-text-color-gray mb-5 ">
              <strong>Training and development :</strong> Providing training and
              development opportunities for employees
            </p>
            <p className="font-dm-sans text-base text-text-color-gray mb-5 ">
              <strong>Performance management :</strong> Setting goals,
              monitoring progress, and providing feedback for employees
            </p>
            <p className="font-dm-sans text-base text-text-color-gray mb-5 ">
              <strong>Employee relations :</strong> Maintaining positive
              relationships with employees
            </p>
            <p className="font-dm-sans text-base text-text-color-gray ">
              <strong>Talent management :</strong> Identifying and developing
              the best talent for the company
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
