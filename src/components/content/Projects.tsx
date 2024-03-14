import React from "react";
import Section from "../common/Section";
import dynamic from "next/dynamic";
import { ar, fr } from "@/constants";
import ProjectCard from "./ProjectCard";
const Carousel = dynamic(() => import("./Carousel"), { ssr: false });
export default function Projects({ id }: { id: "fr" | "ar" }) {
  const projects = id === "fr" ? fr : ar;
  return (
    <Section id={id}>
      <Carousel id={id}>
        {projects.map((project) => (
          <ProjectCard key={project.label} project={project} />
        ))}
      </Carousel>
    </Section>
  );
}
