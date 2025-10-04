import { envVars } from "@/configs/env";
import BlogDetailPage from "@/modules/blog/BlogDetail";
import Image from "next/image";

export default async function SingleBlogPage({params}:{ params: Promise<{ blogId: string }>;}) {
    const {blogId} = await params;
    const res=await fetch(`${envVars.backend_base_url}/blogs/${blogId}`);
    const resData=await res.json();
    const blog=resData?.data;
    console.log(blog)
    return (
        <div>
            <BlogDetailPage {...blog} />
        </div>
    );
}