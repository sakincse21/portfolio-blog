import { envVars } from "@/configs/env";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("accessToken")?.value;

  if (!token) {
    redirect("/login");
  }

  const resPost = await fetch(`${envVars.backend_base_url}/blogs/stat`, {
    cache: "no-cache",
    headers: {
      Cookie: `accessToken=${token}`,
    },
  });
  const postJson = await resPost.json();
  const totalPosts = postJson?.data?.stats?.totalPosts;

  const resProject = await fetch(`${envVars.backend_base_url}/projects/stat`, {
    cache: "no-cache",
    headers: {
      Cookie: `accessToken=${token}`,
    },
  });
  console.log(resProject)
  const projectJson = await resProject.json();
  const totalProjects = projectJson?.data?.stats?.totalProjects;
  console.log(projectJson)
  return (
    <div className="container mx-auto p-8 flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl font-bold text-center mb-12">Dashboard</h1>
      <div className="h-full w-full flex flex-col sm:flex-row justify-center items-center gap-5">
        <div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-xl w-64 h-64 flex flex-col justify-center items-center text-center p-6">
          <p className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
            Total Blogs
          </p>
          <p className="text-6xl font-bold text-gray-900 dark:text-white mt-2">
            {totalPosts || 0}
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-xl w-64 h-64 flex flex-col justify-center items-center text-center p-6">
          <p className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
            Total Projects
          </p>
          <p className="text-6xl font-bold text-gray-900 dark:text-white mt-2">
            {totalProjects || 0}
          </p>
        </div>
      </div>
      <div className="h-full w-full flex flex-col sm:flex-row justify-center items-center gap-5">
        <Link href="/dashboard/blogs">
          <div className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg rounded-xl w-64 h-64 flex flex-col justify-center items-center text-center p-6 transition-transform transform hover:scale-105">
            <p className="text-3xl font-bold">Manage Blogs</p>
          </div>
        </Link>
        <Link href="/dashboard/projects">
          <div className="bg-green-500 hover:bg-green-600 text-white shadow-lg rounded-xl w-64 h-64 flex flex-col justify-center items-center text-center p-6 transition-transform transform hover:scale-105">
            <p className="text-3xl font-bold">Manage Projects</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
