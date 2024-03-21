"use client";
import { Variants, motion } from "framer-motion";
const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function StaggerText({
  text,
  icon,
}: {
  text: string;
  icon: JSX.Element;
}) {
  return (
    <h2 className="flex items-center justify-center gap-5 text-3xl">
      {icon}
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.5, duration: 0.5 }}
        className="text-zinc-500 font-semibold"
      >
        {text.split("").map((letter) => (
          <motion.span key={letter} variants={variants}>
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </h2>
  );
}
