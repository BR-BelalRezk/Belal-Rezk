"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import StaggerText from "../Animations/StaggerText";
import { FaCode } from "react-icons/fa";
import { TbAugmentedReality } from "react-icons/tb";
export default function Carousel({
  children,
  id,
}: {
  children: Readonly<React.ReactNode>;
  id: "fr" | "ar";
}) {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const carouselWidth = carouselRef.current?.scrollWidth ?? 0;
    const innerCarouselWidth = carouselRef.current?.offsetWidth ?? 0;
    setWidth(carouselWidth - innerCarouselWidth);
  }, []);
  return (
    <div
      className=" overflow-hidden cursor-grab flex items-center justify-center flex-col gap-10"
      role="carousel"
      ref={carouselRef}
      id="projects"
    >
      <StaggerText
        text={id === "fr" ? "Front-End" : "AR"}
        icon={id === "fr" ? <FaCode /> : <TbAugmentedReality />}
      />
      <motion.div
        className="flex items-center justify-center gap-10"
        role="inner-carousel"
        drag={"x"}
        dragConstraints={{ right: width, left: -width }}
        whileTap={{ cursor: "grabbing" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
