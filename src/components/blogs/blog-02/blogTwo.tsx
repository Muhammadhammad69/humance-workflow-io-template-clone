import { Button } from "@/components/ui/button";
import React from "react";
import { BlogTwoCard } from "@/components/cards/blogTwoCard";
import {blogData, slug} from "@/components/contentData"
import Link from "next/link";

export const BlogsTwo = () => {
  return (
    <section className="py-[40px] sm:py-[60px] md:py-[100px]">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-[10px]">
          <Button
            variant={"customOne"}
            className="uppercase"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="h-[8px] w-[8px] rounded-full bg-btn-icon-color"></div>
            Latest Blogs
          </Button>
        </div>
        <div
          className="box-border mb-[50px] "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h1 className="text-[30px] sm:text-[36px] lg:text-[60px] xl:text-[68px] font-medium  leading-[38px] sm:leading-[46px] lg:leading-[65px] xl:leading-[70px] tracking-[-2.04px] text-dark-color font-be-vietnam-pro  text-center">
            Latest Articles &
            <br />
            News from the Blog
          </h1>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[40px]">
            {blogData.map((blog) => (
            <Link
            href={`/post/${slug(blog.title)}`}
             key={`blog-display-page-2-${blog.id}`}>
              <BlogTwoCard  blog={blog} />
            </Link>
            ))}

        </div>
      </div>
    </section>
  );
};
