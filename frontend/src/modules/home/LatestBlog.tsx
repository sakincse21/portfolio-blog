import { envVars } from "@/configs/env";
import BlogCard from "../blog/BlogCard";
import { blogSchema } from "@/schemas/blogSchema";

export default async function LatestBlog() {

  const res=await fetch(`${envVars.backend_base_url}/blogs?limit=3`,{
    next:{
      revalidate: 3600
    }
  })
  const blogPosts = await res.json();

  console.log(blogPosts)

  return (
    <section className="py-16 max-w-7xl mx-auto lg:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Latest Blog Posts</h2>
            <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay up-to-date with latest technology updates.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 lg:grid-cols-3">
          {blogPosts?.data?.data?.map((post:blogSchema, index:number) => (
            <BlogCard post={post} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
