"use client";
import { motion } from "framer-motion";
import { FaX, FaCircle } from "react-icons/fa6";

export default function Circle({ toggle }: { toggle?: boolean }) {
  const span_0 = toggle ? { translateY: -50 } : { translateY: 0 };
  const span_1 = toggle ? { translateY: 5 } : { translateY: 50 };
  return (
    <>
      {Array.from({ length: 2 }, (_, index) => index).map((index) => (
        <motion.span
          key={index}
          className="absolute"
          initial={false}
          animate={index === 0 ? span_0 : span_1}
        >
          {index === 0 ? <FaCircle className="text-lg" /> : <FaX />}
        </motion.span>
      ))}
    </>
  );
}
