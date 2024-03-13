"use client";
import { motion } from "framer-motion";

export default function H1({
  children,
  className,
  id,
}: {
  children: Readonly<React.ReactNode>;
  className: string;
  id: "home" | "about" | "work" | "contact";
}) {
  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: id === "home" || id === "work" ? 2.5 : 0.5,
      }}
    >
      {children}
    </motion.h1>
  );
}
