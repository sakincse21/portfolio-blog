"use server";

import { envVars } from "@/configs/env";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import toast from "react-hot-toast";

export const deleteEntity = async (endpoint:string,id:string) => {


  const cookieStore = cookies();
  const token = (await cookieStore).get("accessToken")?.value;

  if (!token) {
    toast.error("Please log in first.")
    redirect('/login')
  }

//   console.log(endpoint, id)
  const res = await fetch(`${envVars.backend_base_url}/${endpoint}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${token}`,
    },
  });

  const result = await res.json();

  if (result?.success) {
    revalidateTag(endpoint);
    revalidatePath(`/dashboard/${endpoint}`);
  }
  return result;
};