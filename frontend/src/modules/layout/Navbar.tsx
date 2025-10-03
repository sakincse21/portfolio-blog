import { MenuIcon, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";

type NavigationItem = {
  title: string;
  href: string;
}[];

const navigationData: NavigationItem = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6">

        <div>
          <h1 className="text-3xl font-bold">Saleheen</h1>
        </div>

        <div className="text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16">
          <Link href="/" className="hover:text-primary max-md:hidden">
            Home
          </Link>
          <Link href="/blogs" className="hover:text-primary max-md:hidden">
            Blogs
          </Link>
          <Link href="/projects" className="hover:text-primary max-md:hidden">
            Projects
          </Link>
          <Link href="/about" className="hover:text-primary max-md:hidden">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary max-md:hidden">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-6">
          {/* <Button variant='ghost' size='icon'> */}
          {/* <SearchIcon />
            <span className='sr-only'>Search</span> */}
          {/* </Button> */}
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden" asChild>
              <Button variant="outline" size="icon">
                <MenuIcon />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href={item.href}>{item.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
