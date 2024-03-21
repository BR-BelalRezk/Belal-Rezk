"use client";
import { motion } from "framer-motion";

export default function Hamburger({ toggle }: { toggle?: boolean }) {
  return (
    <>
      {Array.from({ length: 2 }, (_, index) => index).map((index) => (
        <motion.span
          key={index}
          className={`bg-zinc-50 rounded-full w-10 h-0.5`}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: index * 0.1 + 0.4,
              type: "spring",
              stiffness: 150,
              damping: 15,
            },
          }}
          animate={
            toggle && index === 0
              ? { translateY: 5, rotate: 45 }
              : toggle && index === 1
              ? { translateY: -5, rotate: -45 }
              : {}
          }
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        />
      ))}
    </>
  );
}
