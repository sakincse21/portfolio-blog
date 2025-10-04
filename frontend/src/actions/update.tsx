"use server";

import { envVars } from "@/configs/env";
import { BlogFormValues } from "@/schemas/blogZodSchema";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ProjectFormValues } from "@/schemas/projectZodSchema";

export const updateBlog = async (
  blogId: string,
  data: BlogFormValues,
  endpoint: string
) => {
  const modifiedData = {
    ...data,
    tags: data.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    isFeatured: data.isFeatured === "true",
  };

  const cookieStore = cookies();
  const token = (await cookieStore).get("accessToken")?.value;

  if (!token) {
    redirect("/login");
  }

  const res = await fetch(`${envVars.backend_base_url}/${endpoint}/${blogId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${token}`,
    },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();

  console.log(result)
  if (result?.success) {
    revalidateTag(endpoint);
    revalidatePath(`/dashboard/${endpoint}`);
    revalidatePath(`/${endpoint}/${blogId}`);
        revalidatePath(`/`);

  }

  return result;
};

export const updateProject = async (
  projectId: string,
  data: ProjectFormValues,
  endpoint: string
) => {
  const modifiedData = {
    ...data,
    technologies: data.technologies
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    isFeatured: data.isFeatured === "true",
  };

  const cookieStore = cookies();
  const token = (await cookieStore).get("accessToken")?.value;

  if (!token) {
    redirect("/login");
  }

  const res = await fetch(`${envVars.backend_base_url}/${endpoint}/${projectId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${token}`,
    },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();

  console.log(result)
  if (result?.success) {
    revalidateTag(endpoint);
    revalidatePath(`/dashboard/${endpoint}`);
    revalidatePath(`/${endpoint}/${projectId}`);
        revalidatePath(`/`);

  }

  return result;
};
