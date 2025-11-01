import React from "react";
import { Button } from "@/components/ui/button";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { BlogCardOne } from "@/components/cards/blogOneCard";
import { blogData, slug } from "@/components/contentData";
import Link from "next/link";
export const LatestArticles = () => {
 
  useEffect(() => {
    Aos.init({ once: true, delay: 300, duration: 1000 });
  }, []);
  return (
    <section className="pb-[40px] xs:pb-[60px] sm:pb-[80px] md:pb-[100px]">
      <div className="box-border">
        <div className="box-border flex flex-col items-center justify-center mb-[15px]">
          <div className="mb-[10px]">
            <Button
              variant={"customOne"}
              className="uppercase"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-[8px] w-[8px] rounded-full bg-btn-icon-color"></div>
              Latest Articles
            </Button>
          </div>
          <div
            className="box-border mb-[50px] "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h1 className="text-[30px] sm:text-[36px] lg:text-[60px] xl:text-[68px] font-medium leading-[38px] sm:leading-[46px] lg:leading-[65px] xl:leading-[70px] tracking-[-2.04px] text-dark-color font-be-vietnam-pro text-center ">
              Explore our articles
            </h1>
          </div>
        </div>
        <div className="box-border">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[40px]"
            data-aos="fade-up"
          >
            {blogData.map((blog, index) => (
              <React.Fragment key={`blog-one-${blog.title}-${blog.id}`}>
                {index < 3 && (
                  <Link href={`/post/${slug(blog.title)}`} >
                    <BlogCardOne
                      blog={blog}
                    />
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
