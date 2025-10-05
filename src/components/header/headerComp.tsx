"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

import { useState } from "react";
const components: { title: string; href: string; description: string }[] = [
  {
    title: "About Us",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "FAQ",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Our Teams",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Style Guide",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Pricing Plan",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Licensing",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Projects",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Changelog",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const HeaderComp = (props: {props:{bgColor: string, color:string, isBlack:boolean}}) => {
    const {bgColor, color, isBlack} = props.props
    const logoPath = isBlack? "/logo-black.svg" : "logo.svg"

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleBlog = () => setIsBlogOpen(!isBlogOpen);
  const togglePages = () => setIsPagesOpen(!isPagesOpen);

  const blogItems = [
    { id: "blog1", label: "Blog 1", href: "/blog/blog-1" },
    { id: "blog2", label: "Blog 2", href: "/blog/blog-2" },
  ];
  const pagesItems = [
    { id: "page1", label: "About Us", href: "/page/page-1" },
    { id: "page2", label: "FAQ", href: "/page/page-2" },
    { id: "page3", label: "Our Team", href: "/page/page-1" },
    { id: "page4", label: "Style Guide", href: "/page/page-2" },
    { id: "page5", label: "Pricing Plan", href: "/page/page-1" },
    { id: "page6", label: "Licensing", href: "/page/page-2" },
    { id: "page7", label: "Projects", href: "/page/page-1" },
    { id: "page8", label: "Chnagelog", href: "/page/page-2" },
  ];
  return (
    <header className={`${color}`}>
      <div className="  mx-auto flex justify-between items-center ">
        <div className="flex items-center">
          <a className="flex title-font font-medium items-center md:justify-start justify-center ">
            <Image
              src={logoPath}
              width={56}
              height={56}
              alt="logo"
              className="h-[56px]! w-full"
            />
            {/* <span className="ml-3 text-xl">Tailblocks</span> */}
          </a>
          {/* bg-[#fff6] */}
          <div className={` ${bgColor} rounded-[30px] ml-[50px] px-[10px] py-[10px] max-[991px]:hidden  `}>
            <NavigationMenu viewport={false}>
              <NavigationMenuList className={`${color}`}>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    // className={navigationMenuTriggerStyle()}
                    className="bg-transparent! text-[16px] font-be-vietnam-pro font-medium text-inherit "
                  >
                    <Link href="/docs" className="bg-none">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent! text-[16px] font-be-vietnam-pro font-medium text-inherit ">
                    Pages
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-0 md:w-[200px] md:grid-cols-2 lg:w-[250px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                          className="hover:text-btn-icon-color"
                        ></ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    // className={navigationMenuTriggerStyle()}
                    className="bg-transparent! text-[16px] font-be-vietnam-pro font-medium text-inherit "
                  >
                    <Link href="/services">Services</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent! text-[16px] font-be-vietnam-pro font-medium text-inherit ">
                    Blog
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-4 font-medium font-be-vietnam-pro">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="#">Blog 1</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#">Blog 2</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    // className={navigationMenuTriggerStyle()}
                    className="bg-transparent! text-[16px] font-be-vietnam-pro font-medium text-inherit "
                  >
                    <Link href="/docs" className="bg-none">
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex items-center max-[991px]:hidden">
          <div className="mr-[30px] box-border  items-center hidden xl:flex">
            <div className="min-w-[50px] w-[50px] h-[50px] rounded-full mr-[8px] flex items-center justify-center bg-white">
              <Image
                src={"/phone-call-icon.svg"}
                width={22}
                height={22}
                alt="phone-call-icon"
                className="w-[22px] h-[22px]"
              />
            </div>
            <p className={`text-[16px] font-be-vietnam-pro font-[700] ${color} `}>
              + 1(212) 255-511
            </p>
          </div>
          <div>
            <Button
              variant={"customTwo"}
              className="bg-btn-icon-color! text-white! hover:bg-dark-color! "
            >
              Get In Touch
              <div className="flex justify-center items-center w-[44px] h-[44px] rounded-[6px] bg-white group-hover:bg-btn-icon-color black ">
                <Image
                  src={"/arrow-right-up-1.svg"}
                  width={35}
                  height={35}
                  alt="arrow-right-up-1"
                  className="w-[12px] h-[12px] group-hover:invert "
                />
              </div>
            </Button>
          </div>
        </div>
        <div
          className="max-[991px]:block hidden text-white"
          onClick={toggleMenu}
        >
          <HiOutlineBars3 size={40} />
        </div>
        {isMenuOpen && (
          <div
            className={`h-[600px] absolute top-[100%] rounded-[10px] overflow-hidden w-full  transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <aside className="rounded-[10px]   pr-[38px]  w-full ">
              <div className="bg-white rounded-[10px] border-t-[3px] border-solid border-dark-color  px-[10px] py-[10px] min-[991px]:hidden transition-all duration-300 ease-in-out ">
                <ul className="p-[20px] font-be-vietnam-pro text-dark-color text-[16px] font-medium space-y-4">
                  <li>Home</li>
                  <div className="">
                    <button
                      className="flex justify-between items-center p-0 w-full"
                      onClick={() => {
                          togglePages();
                        setIsBlogOpen(false)
                      }}
                    >
                      <li>Pages</li>
                      <ChevronDown size={18} />
                    </button>
                    <div
                      className={`grid grid-cols-2 overflow-hidden transition-all duration-300 ease-in-out ${
                        isPagesOpen
                          ? "max-h-40 opacity-100 mt-1"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {pagesItems.map(({ id, label, href }) => (
                        <a
                          key={`pages-menu-${id}`}
                          href={href}
                          className="flex items-center px-2 py-[6px] ml-8 text-dark-color hover:bg-white hover:text-blue-600 rounded-lg transition-all duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="font-medium">{label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  <li>Service</li>
                  <div className="">
                    <button
                      className="flex justify-between items-center p-0 w-full"
                      onClick={() => {
                        toggleBlog();
                        setIsPagesOpen(false)
                      }}
                    >
                      <li>Blog</li>
                      <ChevronDown size={18} />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isBlogOpen
                          ? "max-h-40 opacity-100 mt-1"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {blogItems.map(({ id, label, href }) => (
                        <a
                          key={`blog-menu-${id}`}
                          href={href}
                          className="flex items-center px-2 py-[6px] ml-8 text-dark-color hover:bg-white hover:text-blue-600 rounded-lg transition-all duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="font-medium">{label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  <li>Contact</li>
                </ul>
              </div>
            </aside>
          </div>
        )}
      </div>
    </header>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium font-be-vietnam-pro">
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
