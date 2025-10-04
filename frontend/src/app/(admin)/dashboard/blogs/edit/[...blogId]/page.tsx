import { envVars } from "@/configs/env";
import EditBlogForm from "@/modules/blog/EditBlogForm";
import { notFound, redirect } from "next/navigation";

async function getBlog(blogId: string) {
  const res = await fetch(`${envVars.backend_base_url}/blogs/${blogId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();
  return data.data;
}

export default async function BlogEditPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const blog = await getBlog(blogId);
  if (!blog) {
    redirect("/blogs");
  }
  return (
    <div>
      <EditBlogForm blog={blog} />
    </div>
  );
}
