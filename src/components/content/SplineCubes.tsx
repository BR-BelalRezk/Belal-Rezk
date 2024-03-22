"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { memo } from "react";
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});
function SplineCubes({ scene }: { scene: string }) {
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

export default memo(SplineCubes);
