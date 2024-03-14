import Link from "next/link";
import { aside } from "@/constants";
import {
  MenuAnimation,
  MenuAnimationList,
  MenuAnimationListItem,
  MenuAnimationParent,
  MenuAnimationToggleButton,
} from "../Animations/MenuAnimation";
import Circle from "./Circle";

export default function Aside() {
  return (
    <MenuAnimation id="aside">
      <MenuAnimationParent className="relative">
        <MenuAnimationToggleButton className="h-8 w-8 overflow-hidden relative flex items-center justify-center">
          <Circle />
        </MenuAnimationToggleButton>
        <MenuAnimationList
          insetOpen="inset(0% 0% 0% 0% round 15px)"
          insetClose="inset(0% 87% 90% 1% round 15px)"
          className="py-10 px-5 w-60 bg-gray-500 absolute top-0.5 -z-10 flex flex-col items-center justify-center gap-5"
        >
          {aside.map((item) => (
            <MenuAnimationListItem
              key={item.label}
              className="w-full text-gray-400"
            >
              <Link
                href={`${item.path}${item.hash}`}
                className="flex items-center justify-between hover:scale-105 duration-500 hover:text-gray-50"
              >
                <span className="uppercase font-semibold text-sm">
                  {item.label}
                </span>
                <item.icon className="text-2xl" />
              </Link>
            </MenuAnimationListItem>
          ))}
        </MenuAnimationList>
      </MenuAnimationParent>
    </MenuAnimation>
  );
}
