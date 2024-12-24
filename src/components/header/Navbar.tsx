"use client";
import Link from "../links";
import { Pages, Routes } from "@/constants/enums";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import { Menu, XIcon } from "lucide-react";
function Navbar() {
  const pathname = usePathname();
  const links = [
    { id: crypto.randomUUID(), title: "Menu", href: Routes.ROOT },
    { id: crypto.randomUUID(), title: "About", href: Routes.ABOUT },
    { id: crypto.randomUUID(), title: "Contact", href: Routes.CONTACT },
    {
      id: crypto.randomUUID(),
      title: "Login",
      href: `${Routes.AUTH}/ ${Pages.LOGIN}`,
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav>
      <div className={`${openMenu ? "!" : "flex"} mt-5`}>
        <Button
          className={`absolute top-6 right-10 z-50 lg:hidden`}
          onClick={toggleMenu}
        >
          {openMenu ? <XIcon /> : <Menu />}
        </Button>
        <ul
          className={`relative lg:static ${
            openMenu ? "left-0 z-10" : "-left-full"
          } top-0 pt-10 py-0 lg:p-0 bg-background lg: transition-all  duration-200 h-[calc(100vh-105px)] lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-center gap-10 `}
        >
          {links.map((item) => (
            <li
              key={item.id}
              className={`block relative font-rufina font-bold text-2xl uppercase transition-colors hover:text-primary ${
                item.onlyMobile ? "lg:hidden" : ""
              }  ${
                item.url === pathname.hash
                  ? "z-2 lg:text-black"
                  : "lg:text-primary"
              } lg:leading-5 lg:hover:text-primary xl:px-12`}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
