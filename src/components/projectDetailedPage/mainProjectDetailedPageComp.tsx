import React from "react";
import { ResuseHeroComponent } from "../reuseComponents/herocomponent";
import { IProjects } from "../types";
import Image from "next/image";
import { FaRegSun } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
export const MainProjectDetailedPageComp = ({
  project,
}: {
  project: IProjects;
}) => {
  const position = {
    base: "bg-[position:75%]",
    sm: "sm:bg-[position:70%]",
    md: "md:bg-[position:60%]",
    lg: "lg:bg-[position:45%]",
    xl: "xl:bg-[position:45%]",
  };
  const bgImage = "bg-[url('/blogs/bg-blog-page-02.jpg')]";
  const content = project.projectTitle;
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
        <ProjectDetailedPageContent project={project} />
      </div>
    </div>
  );
};

export const ProjectDetailedPageContent = ({
  project,
}: {
  project: IProjects;
}) => {
  const projectInfo = [
    {
      id: 1,
      title: "Client",
      value: project.clientName,
    },
    {
      id: 2,
      title: "Team",
      value: project.projectCategory,
    },
    {
      id: 3,
      title: "Service",
      value: "November 10 2025",
    },
    {
      id: 4,
      title: "Website",
      value: "www.example.com",
    },
  ];
  return (
    <section className="py-[50px] xs:py-[70px] sm:py-[80px] md:py-[100px] ">
      <div>
        <div className="min-h-12.5">
          <Image
            src={project.image}
            alt={project.alt}
            width={5000}
            height={5000}
            className="w-full h-full object-cover aspect-video overflow-hidden rounded-3xl"
          />
        </div>
        <div className=" mt-7.5 xs:mt-12.5 py-5 xs:py-7.5 grid grid-cols-1 xs:grid-cols-2  lg:grid-cols-4 text-center rounded-3xl bg-dark-color relative gap-4 xs:gap-0 ">
          {projectInfo.map((info, index) => (
            <div className="relative" key={info.id}>
              <h5 className="text-btn-icon-color text-[17px] font-semibold font-be-vietnam-pro ">
                {info.title} :
              </h5>
              <p className="text-[#fffc] text-base font-dm-sans ">
                {info.value}
              </p>
              {projectInfo.length - 1 !== index && (
                <FaRegSun
                  size={20}
                  className={`text-btn-icon-color absolute top-1/2 -right-2.5 transform-[translate(0,-50%)] max-[479px]:hidden
                    ${index === 1 && "hidden lg:block"}
                    `}
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="font-be-vietnam-pro text-2xl xs:text-3xl text-dark-color font-bold mt-2.5 mb-5">
            Leadership & Team building Training Program
          </h2>
          <p className="font-dm-sans text-base text-text-color-gray mb-5 ">
            When all roles within the project are clearly defined, the
            collaboration between team members becomes smoother and Who is
            responsible for particular tasks. This becomes of a critical with
            projects that require the collaboration of two or more department.
            For example, launching a new careers pages would involve HR IT. A
            recruitment campaign would be need HR as well as the marketing team.
            HR project management refers to using and applying project
            management skills and principles for HR purposes to the streamline
            works an achieve projects goal. One approach to project management
            is the agile HR method. It’s primarily an approach used in project
            and software development
          </p>
          <p className="font-dm-sans text-base text-text-color-gray mb-5 ">
            Surrounded by their possessions and a familiar environment, our
            clients receive the support they need to enjoy their regular
            training activities & continue living at our company of About the
            our company for affected businesses significantly as our best
            employees to improvements. And Advisers can provides service needs
            from providing.
          </p>
        </div>
        <div className="pb-4 sm:pb-7.5">
          <h2 className="font-be-vietnam-pro text-2xl xs:text-3xl text-dark-color font-bold mt-2.5 mb-5">
            Job Analysis Essential in HR
          </h2>
          <p className="font-dm-sans text-base text-text-color-gray mb-5 ">
            Implementing HR strategies help you to rank higher on the search
            engine&apos;s results page (SERP). This means that when your target
            customers search for products and service of as that your industry
            offers, they are likely to find your website. When you repeatedly
            appear on the SERP, users become aware of your site an your
            business. This increases the best chances of landing potential
            customers on your webpages. HR is less expensive than other online
            marketing approaches.
          </p>
          <ol className="font-dm-sans text-base text-dark-color  mb-5 list-disc pl-10 space-y-2">
            <li>
              Facebook advertising, How to advertise on Facebook and how to
              create Facebook ad campaigns
            </li>
            <li>
              Important workplace skills like: good communication skills,
              behaviour and positive attitude, business leadership skills
            </li>
            <li>
              About planning and conceptualizing of a website and how to create
              a blueprint of each page
            </li>
            <li>
              Implement Strategies Create dedicated We have a proven track
              record of success
            </li>
          </ol>
        </div>
        <div>
          <h2 className="font-be-vietnam-pro text-2xl xs:text-3xl text-dark-color font-bold mt-2.5 mb-5">
            Our Client Review
          </h2>
          <p className="font-dm-sans text-base text-text-color-gray mb-5 ">
            Large home renovation tasks can feel daunting and can quickly become
            overwhelming, leading you to put them off, sometimes for good.
            Fortunately, you can start by completing small, simple tasks and
            gradually work your way up to more time consuming ones. We&apos;ve put
            together a list of projects you can do in each room of your home.
          </p>
          <blockquote className="text-2xl font-medium font-be-vietnam-pro text-dark-color flex xs:flex-row flex-col py-6 gap-4
          ">
            <FaQuoteLeft size={60} className="text-btn-icon-color min-w-20  "/>
            “In the modern, networked, and symbiotic world we live in, people
            management is less about squeezing performance from the organized
            few and more about curating contribution from the limitless many.”
          </blockquote>
        </div>
      </div>
    </section>
  );
};
