import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { envVars } from "@/configs/env";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const token = (await cookieStore).get("accessToken");

  if (!token) {
    redirect("/login");
  } else {
    const res = await fetch(`${envVars.backend_base_url}/user/me`, {
      headers: {
        Cookie: `accessToken=${token.value}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      toast.error("Something went wrong. Please log in again.");
      redirect("/login");
    }

    const user = await res.json();
    if (!user?.email) {
      toast.error("Something went wrong. Please log in again.");
      redirect("/login");
    }
    // console.log(user);
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className=" w-full min-h-screen h-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
