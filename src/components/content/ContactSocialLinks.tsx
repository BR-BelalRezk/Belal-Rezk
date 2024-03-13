"use client";
import { motion } from "framer-motion";

export default function ContactSocialLinks({
  className,
  children,
}: {
  children: Readonly<React.ReactNode>;
  className: string;
}) {
  return (
    <motion.ul
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 3.5, duration: 1 }}
    >
      {children}
    </motion.ul>
  );
}
