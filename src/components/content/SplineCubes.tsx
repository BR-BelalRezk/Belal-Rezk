"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});
export default function SplineCubes({ scene }: { scene: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 5 }}
    >
      <Spline scene={scene} />
    </motion.div>
  );
}
