import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import {
  blogData,
  slug,
  getRecentBlogs,
  parseDateString,
} from "@/components/contentData";
import { BlogType } from "@/components/types";
export const BlogDetailPage = ({ blog }: { blog: BlogType }) => {
  const uniqueCategories = [...new Set(blogData.map((blog) => blog.category))];
  const recentBlogs = getRecentBlogs(blogData);

  return (
    <section className="py-[40px] sm:py-[60px] md:py-[100px] flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/3">
        <div className="mb-[30px] relative">
          <Image
            src={blog.image}
            width={1000}
            height={1000}
            alt={blog.alt}
            className="rounded-[15px] object-cover aspect-[3/2]"
          />
          <div className="bg-background-color rounded-tr-[20px] pt-[8px] pb-[2px] absolute inset-[auto_auto_0%_0%] box-border pr-[20px] ">
            <div className="flex max-[460px]:flex-col">
              <div className="flex items-center text-[13px] lg:text-[11px] leading-[26px] font-be-vietnam-pro text-dark-color uppercase tracking-[0.65px] font-[400] ">
                <p className="tracking-[0.65px] text-[13px] font-[400]">{parseDateString(blog.date, "day")}</p>
                <p className="pl-[5px]  tracking-[0.65px] text-[13px] font-[400]">
                  {parseDateString(blog.date, "month")}
                  {" "}
                  {parseDateString(blog.date, "year")}
                </p>
              </div>
            </div>
            <div
              className="w-[20px] h-[20px] absolute bottom-[-1px] right-[-18px] "
              style={{
                backgroundImage:
                  "radial-gradient(circle farthest-side at 100% 0%, #0000 100%, var(--color-background-color))",
              }}
            ></div>
            <div
              className="w-[25px] h-[25px] absolute top-[-25px] left-[0px] "
              style={{
                backgroundImage:
                  "radial-gradient(circle farthest-side at 100% 0%, #0000 100%, var(--color-background-color)",
              }}
            ></div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-[6px] h-[6px] bg-btn-icon-color rounded-full flex items-center justify-center mx-[8px] "></div>
          <div className="flex items-center text-[13px] lg:text-[11px] leading-[26px] font-be-vietnam-pro text-dark-color uppercase ">
            <p className="tracking-[0.65px]">{blog.category}</p>
            <div className=" w-[6px] h-[6px] bg-btn-icon-color rounded-full flex items-center justify-center mx-[8px] "></div>
          </div>
          <div className="text-[13px] lg:text-[11px] leading-[26px] font-be-vietnam-pro text-dark-color uppercase ">
            <p className="tracking-[0.65px]"> {blog.department} </p>
          </div>
        </div>
        <h2 className="text-[26px] xs:text-[38px] font-[600] leading-[28px] xs:leading-[44px] font-be-vietnam-pro text-dark-color mb-[20px] ">
          {blog.title}?
        </h2>
        <p className="text-[17px] font-dm-sans mb-[20px] text-text-color-gray ">
          There are full service engage company is to provide a solution for
          employees needs training manage the entire HR work department for
          companies. We offer comprehensive employment services such a
          assistance with employer able are compliance. Our company is your
          strategic HR partner as instead of HR.
        </p>
        <blockquote className="bg-[url('/blogs/quote.svg')] bg-no-repeat bg-[position:5px_0] xs:bg-[position:0%_20%] pt-[50px] pb-[20px]  xs:p-[20px_0px_20px_95px] text-[24px] leading-[30px] font-be-vietnam-pro text-dark-color font-medium ">
          “The only way a company can grow, stay true to its soul, and remain
          consistently successful is to attract, hire, and keep great people.”
        </blockquote>
        <p className="text-[17px] font-dm-sans mb-[20px] text-text-color-gray ">
          Many small companies assign employment and HR issues to operation
          executive or other employee who may not have the specialized training
          to navigate these operational areas
          <Link href={"#"} className="text-dark-color">
            <strong> correctly & compliance with state regulations. </strong>
          </Link>
          Company may consultant administrator, HR is ideal solutions. About the
          our at hire company a affected business significantly as our best
          employees to improvements. And Advisors can provides service needs
          from providing.
        </p>
        <h2 className="text-[26px] xs:text-[38px] font-[600] leading-[28px] xs:leading-[40px] font-be-vietnam-pro text-dark-color mt-[10px] mb-[20px] ">
          The Traditional HR Landscape
        </h2>
        <p className="text-[17px] font-dm-sans mb-[20px] text-text-color-gray  ">
          If you want to find practical information on holidays in different US
          states, reads interviews with HR practitioners, or get how-to guides
          one differents HR processes, the Factorial HR blog it was excellent
          resource for you. It also has as handy search function to help you
          find topic you&apos;re interested in.
        </p>
        <ul className="mb-[40px] pl-[50px] text-dark-color list-disc">
          <li>Recruitment Finding a hiring candidates, including sourcing,</li>
          <li>Training and development Providing training a development</li>
          <li>Safety and compliance Ensuring the workplace is safe</li>
          <li>Talent management Identifying developing the best talent</li>
        </ul>
        <p className="text-[17px] font-dm-sans  text-text-color-gray  ">
          Function evaluation helps the HR department ensure that the company is
          successful at both are strategic level to with service delivery and
          support. That way, the company is able to deliver of the level of
          services required while operating strategically. Create, publish, and
          promote engaging content to generate.
        </p>
        <div className="mt-[40px] p-[15px] xs:p-[30px] bg-dark-color rounded-[15px] flex flex-col sm:flex-row items-start relative">
          {/* <div className="flex  "> */}
          <Image
            src={"/blogs/author-profile.jpg"}
            width={145}
            height={145}
            alt="author"
            className="w-[145px]! h-[145px] rounded-full border-[4px] border-solid border-btn-icon-color sm:mr-[40px] max-w-none self-center sm:self-start"
          />
          {/* </div> */}
          <div className="box-border">
            <h2 className="mt-[20px] sm:mt-0 mb-[10px] text-[22px] leading-[24px] tracking-[0.2px] text-white font-be-vietnam-pro font-[600] text-center sm:text-start">
              Anais Emmerich
            </h2>
            <p className="text-[17px] font-dm-sans text-white leading-[24px] mb-[20px] ">
              Iusto eos dolores omnis nesciunt cumque at velit. Voluptatibus
              eius porro aut. Quis sequi et voluptas rerum. Accusantium
              voluptatem voluptatem aut et. Voluptate reprehenderit et ratione
              tempore.
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
              <div className="w-[40px] h-[40px] bg-white hover:bg-btn-icon-color flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-300">
                <BsFacebook size={16} />
              </div>
              <div className="w-[40px] h-[40px] bg-white hover:bg-btn-icon-color flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-300">
                <BsTwitterX size={16} />
              </div>
              <div className="w-[40px] h-[40px] bg-white hover:bg-btn-icon-color flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-300">
                <BsInstagram size={16} />
              </div>
              <div className="w-[40px] h-[40px] bg-white hover:bg-btn-icon-color flex items-center justify-center rounded-full cursor-pointer transition ease-in-out duration-300">
                <BsYoutube size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 mt-[50px] lg:mt-0 lg:px-[10px] relative box-border ">
        <div className="bg-white rounded-[30px] lg:ml-[20px] mb-[40px]  p-[25px]  xs:p-[35px] box-border ">
          <div className="flex items-center  mb-[20px]">
            <Image
              src={"/our-services/solar-energy-green-icon.png"}
              width={20}
              height={20}
              alt="solar-energy-green-icon  "
              className="w-[20px] h-[20px] object-cover"
            />
            <h2 className="text-[24px] leading-[30px] font-[500] text-dark-color ml-[10px] font-be-vietnam-pro ">
              Categories
            </h2>
          </div>
          <div className="">
            {uniqueCategories.map((category) => (
              <Link
                key={`blog-one-detail-page-unique-category-${category} `}
                href={`/blog-category/${slug(category)}`}
                className={` flex font-medium text-[13px] uppercase font-be-vietnam-pro py-[15px] border-b-[1px] border-solid border-[#07180f1a] `}
              >
                <span>{category}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-[30px] lg:ml-[20px] mb-[40px] p-[30px_20px_10px]   xs:p-[35px_35px_15px] box-border ">
          <div className="flex items-center mb-[20px]">
            <Image
              src={"/our-services/solar-energy-green-icon.png"}
              width={20}
              height={20}
              alt="solar-energy-green-icon  "
              className="w-[20px] h-[20px] object-cover"
            />
            <h2 className="text-[24px] leading-[30px] font-[500] text-dark-color ml-[10px] font-be-vietnam-pro ">
              Recent Post
            </h2>
          </div>
          <div>
            <div className=" ">
              {recentBlogs.map((blog, index) => (
                <Link
                  key={`blog-one-detail-page-recent-blogs-${blog.title}-${index}`}
                  href={`/post/${slug(blog.title)}`}
                  className="mb-[30px] flex flex-col xs:flex-row lg:flex-col xl:flex-row xs:items-center lg:items-start xl:items-center"
                >
                  <Image
                    src={blog.image}
                    width={100}
                    height={100}
                    alt=""
                    className="w-[90px] h-[90px] rounded-[20px] object-cover mr-[20px] lg:mr-[0px] xl:mb-[0px] xl:mr-[20px]  "
                  />
                  <div className="mt-[10px] xs:mt-0 lg:mt-[15px] xl:mt-0">
                    <p className="text-[13px] leading-[28px] font-[400] text-btn-icon-color font-be-vietnam-pro uppercase">
                      {parseDateString(blog.date, "month")}{" "}
                      {parseDateString(blog.date, "day")},{""}
                      {parseDateString(blog.date, "year")}
                    </p>
                    <h4 className="text-[17px] leading-[22px] font-[600] font-be-vietnam-pro text-dark-color  ">
                      {blog.title.length > 40
                        ? `${blog.title.slice(0, 40)}...?`
                        : `${blog.title}?`}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
        </div>
        <div
            className="bg-[url('/our-services/service-ads-img.jpg')] bg-[position:50%] bg-cover rounded-[30px] mb-[40px] pt-[217px] relative overflow-hidden text-center lg:ml-[20px]"
            // style={{ backgroundImage: path }}
          >
            <div
              className="pb-[40px] px-[30px] "
              style={{
                backgroundImage:
                  "linear-gradient(0deg, var(--color-dark-color), var(--color-dark-color) 40%, var(--color-dark-color) 59%, #0000 81%)",
              }}
            >
              <div className="w-[66px] h-[66px] flex items-center justify-center mx-auto bg-white rounded-full ">
                <Image
                  src={"/our-services/customer-support-1.png"}
                  width={50}
                  height={50}
                  alt="solar-energy-green-icon  "
                  className="w-[35px] h-[35px] object-cover"
                />
              </div>
              <h2 className="mt-[15px] mb-[25px] text-[18px] font-medium  leading-[24px] text-white font-be-vietnam-pro ">
                If you Need any Helps, Please
                <br />
                Feel Free to Contact us
              </h2>
              <h2 className="text-[30px] font-[600] text-btn-icon-color mb-[10px] leading-[30px] ">
                +0(123)456-789
              </h2>
            </div>
          </div>
      </div>
    </section>
  );
};
