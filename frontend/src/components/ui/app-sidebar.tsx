import {
  BookOpenIcon,
  BrainIcon,
  LayoutDashboardIcon,
  Undo2Icon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Blogs",
    url: "/dashboard/blogs",
    icon: BookOpenIcon,
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
    icon: BrainIcon,
  },
  {
    title: "Return to Portfolio",
    url: "/",
    icon: Undo2Icon,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Portfolio Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2 mt-5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span >{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
