"use client";
import { navbar } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MenuAnimation,
  MenuAnimationList,
  MenuAnimationListItem,
  MenuAnimationParent,
  MenuAnimationToggleButton,
} from "../Animations/MenuAnimation";
import Hamburger from "./Hamburger";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <MenuAnimation id="navbar">
      <MenuAnimationParent className="relative flex flex-col items-center justify-center sm:block">
        <MenuAnimationToggleButton className="flex items-center justify-center gap-1.5 flex-col sm:hidden">
          <Hamburger />
        </MenuAnimationToggleButton>
        <MenuAnimationList
          insetOpen="inset(0% 0% 0% 0%)"
          insetClose="inset(10% 50% 90% 50%)"
          className="md:gap-10 absolute top-10 bg-gray-50 rounded-full flex flex-col gap-5 px-1 py-5 sm:relative sm:p-0 sm:bg-transparent sm:rounded-none sm:top-auto sm:flex-row"
        >
          {navbar.map((item) => (
            <MenuAnimationListItem
              key={item.label}
              className={`${
                item.path === pathname
                  ? "text-gray-50"
                  : "text-gray-950 sm:text-gray-50"
              } p-1.5 sm:p-0 sm:pb-1.5 relative text-xl sm:uppercase sm:text-xs lg:text-sm`}
            >
              <Link href={item.path} aria-label={`${item.label} link`}>
                <item.icon className="sm:hidden" />
                <span className="hidden sm:block">{item.label}</span>
                {pathname === item.path && (
                  <motion.span
                    layoutId={"navbar"}
                    className="absolute inset-0 bg-gray-500 rounded-full -z-10 sm:bg-transparent sm:rounded-none sm:border-b-2 sm:border-gray-500"
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                    }}
                  />
                )}
              </Link>
            </MenuAnimationListItem>
          ))}
        </MenuAnimationList>
      </MenuAnimationParent>
    </MenuAnimation>
  );
}
