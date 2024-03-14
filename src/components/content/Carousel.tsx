"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import StaggerText from "../Animations/StaggerText";

export default function Carousel({
  children,
  id,
  icon,
}: {
  children: Readonly<React.ReactNode>;
  id: "Front-End" | "AR" | "Skills" | "Certificates";
  icon: JSX.Element;
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
      className="overflow-hidden flex items-center justify-center flex-col gap-10"
      role="carousel"
      ref={carouselRef}
    >
      <StaggerText text={id} icon={icon} />
      <motion.ul
        className="cursor-grab flex items-center justify-center gap-10"
        role="inner-carousel"
        drag={"x"}
        dragConstraints={{ right: width, left: -width }}
        whileTap={{ cursor: "grabbing" }}
      >
        {children}
      </motion.ul>
    </div>
  );
}
