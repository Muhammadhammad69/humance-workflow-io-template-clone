import React from 'react'
import {Main} from "@/components/blogs/blog-01/dynamicBlogComp/main"
import {blogData, slug} from "@/components/contentData"
const Blog = async ({ params }: { params: Promise<{ blog: string }> }) => {
    
    const { blog } = await params;
    const getBlog = blogData.filter((item)=>{
      if(slug(item.title).toLowerCase() === blog.toLowerCase()){
        return true
      }
      return false
    });
    
  return (
    <div>
      <Main blog={getBlog[0]} />
    </div>
  )
}

export default Blog