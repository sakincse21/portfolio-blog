import { envVars } from "@/configs/env";
import BlogCard from "@/modules/blog/BlogCard";
import { blogSchema } from "@/schemas/blogSchema";

export default async function BlogsPage() {
  const res = await fetch(`${envVars.backend_base_url}/blogs`, {
    next: {
      revalidate: 3600,
    },
  });
  const blogPosts = await res.json();

  return (
    <div>
      <h1>All Blogs</h1>
      <div className="flex flex-col lg:flex-row flex-wrap gap-5 items-center justify-center">
        {blogPosts?.data?.data?.map((post:blogSchema, index:number) => (
          <BlogCard post={post} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
