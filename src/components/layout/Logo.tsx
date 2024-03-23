"use client";
import { Variants, motion } from "framer-motion";
const svgVarinats: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 3, ease: "easeInOut" },
  },
};
export default function BLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="500"
      version="1"
      viewBox="0 0 375 375"
      className="w-[50px] h-[50px]"
    >
      <defs>
        <clipPath id="79fcb53010">
          <motion.path
            variants={svgVarinats}
            initial="hidden"
            whileInView="visible"
            d="M55.078 0H283v228H55.078zm0 0"
          />
        </clipPath>
        <clipPath id="7a06f05e1a">
          <motion.path
            variants={svgVarinats}
            initial="hidden"
            whileInView="visible"
            d="M92 68h227.828v307H92zm0 0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#79fcb53010)">
        <motion.path
          variants={svgVarinats}
          initial="hidden"
          whileInView="visible"
          fill="#6b7280"
          d="M168.73 227.668c-62.644 0-113.652-51.008-113.652-113.652C55.078 51.37 106.008.363 168.73.363c62.723 0 113.653 51.008 113.653 113.653a5.715 5.715 0 01-5.738 5.738 5.715 5.715 0 01-5.739-5.738c0-56.266-45.828-102.094-102.097-102.094-56.266 0-102.176 45.828-102.176 102.094 0 56.27 45.828 102.097 102.097 102.097a5.715 5.715 0 015.739 5.739c0 3.265-2.551 5.816-5.739 5.816zm0 0"
        />
      </g>
      <g clipPath="url(#7a06f05e1a)">
        <motion.path
          variants={svgVarinats}
          initial="hidden"
          whileInView="visible"
          fill="#f9fafb"
          d="M319.922 260.984c0 62.645-51.008 113.653-113.652 113.653-62.645 0-113.653-51.008-113.653-113.653 0-3.187 2.63-5.82 5.817-5.82 3.187 0 5.82 2.633 5.82 5.82 0 56.266 45.828 102.094 102.094 102.094 56.27 0 102.097-45.828 102.097-102.094 0-54.355-42.718-98.91-96.36-101.937v192.555a5.715 5.715 0 01-5.737 5.738c-3.188 0-5.817-2.55-5.817-5.738V74.008c0-3.188 2.63-5.738 5.817-5.738a5.715 5.715 0 015.738 5.738v73.562c59.937 2.95 107.836 52.684 107.836 113.414zm0 0"
        />
      </g>
    </svg>
  );
}
