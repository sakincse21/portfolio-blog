import { envVars } from "@/configs/env";
import BlogDetailPage from "@/modules/blog/BlogDetail";
import { blogSchema } from "@/schemas/blogSchema";
import { redirect } from "next/navigation";

export const generateStaticParams = async () => {
  const res = await fetch(`${envVars.backend_base_url}/blogs`);
  const resData = await res.json();
  const blogs = resData?.data?.data;
//   console.log(blogs)

  return blogs.slice(0, 2).map((blog: blogSchema) => ({
    blogId: [String(blog.id)]
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(`${envVars.backend_base_url}/blogs/${blogId}`);
  const resData = await res.json();
  const blog = resData?.data;

  return {
    title: blog?.title,
    description: blog?.content,
  };
};

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const res = await fetch(`${envVars.backend_base_url}/blogs/${blogId}`);
  const resData = await res.json();
  const blog = resData?.data;
  if (!blog) {
    redirect("/blogs");
  }
  console.log(blog);
  return (
    <div>
      <BlogDetailPage {...blog} />
    </div>
  );
}
