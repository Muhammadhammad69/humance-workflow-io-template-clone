import { Button } from "@/components/ui/button";
import { BlogCardOne } from "@/components/cards/blogOneCard";
import { blogData, slug } from "@/components/contentData";
import Link from "next/link";
export const Blogs = () => {
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
            Latest News
          </Button>
        </div>
        <div
          className="box-border mb-[50px] "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h1 className="text-[30px] sm:text-[36px] lg:text-[60px] xl:text-[68px] font-medium  leading-[38px] sm:leading-[46px] lg:leading-[65px] xl:leading-[70px] tracking-[-2.04px] text-dark-color font-be-vietnam-pro  text-center">
            Check Our
            <br />
            Recent Articles
          </h1>
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[40px]"
        data-aos="fade-up"
      >
        {blogData.map((blog) => (
          <Link
            href={`/post/${slug(blog.title)}`}
            key={`blog-page-one-${blog.title}-${blog.id}`}
          >
            <BlogCardOne blog={blog} />
          </Link>
        ))}
      </div>
    </section>
  );
};
