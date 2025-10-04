"use server";

import { envVars } from "@/configs/env";
import { BlogFormValues } from "@/schemas/blogZodSchema";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import toast from "react-hot-toast";
import { ProjectFormValues } from "@/schemas/projectZodSchema";

export const createBlog = async (data: BlogFormValues) => {
  const modifiedData = {
    ...data,
    tags: data.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    authorId: 1,
    isFeatured: Boolean(data.isFeatured),
  };

  const cookieStore = cookies();
  const token = (await cookieStore).get("accessToken")?.value;

  if (!token) {
    toast.error("Please log in first.")
    redirect('/login')
  }

  const res = await fetch(`${envVars.backend_base_url}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${token}`,
    },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();

  if (result?.success) {
    revalidateTag("BLOGS");
    revalidatePath("/dashboard/blogs");
    revalidatePath("/blogs");
        revalidatePath(`/`);

  }
  return result;
};

export const createProject = async (data: ProjectFormValues) => {
  const modifiedData = {
    ...data,
    technologies: data.technologies
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    authorId: 1,
    isFeatured: Boolean(data.isFeatured),
  };

  const cookieStore = cookies();
  const token = (await cookieStore).get("accessToken")?.value;

  if (!token) {
    toast.error("Please log in first.")
    redirect('/login')
  }

  const res = await fetch(`${envVars.backend_base_url}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${token}`,
    },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();

  if (result?.success) {
    revalidateTag("projects");
    revalidatePath("/projects");
    revalidatePath("/dashboard/projects");
        revalidatePath(`/`);

  }
  return result;
};