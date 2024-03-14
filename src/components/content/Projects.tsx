import { FaCode } from "react-icons/fa";
import { TbAugmentedReality } from "react-icons/tb";
import Section from "../common/Section";
import dynamic from "next/dynamic";
import { ar, fr } from "@/constants";
import ProjectCard from "./ProjectCard";

const Carousel = dynamic(() => import("./Carousel"), { ssr: false });

export default function Projects({ id }: { id: "fr" | "ar" }) {
  const projects = id === "fr" ? fr : ar;
  return (
    <Section id={id}>
      <Carousel
        id={id === "fr" ? "Front-End" : "AR"}
        icon={id === "fr" ? <FaCode /> : <TbAugmentedReality />}
      >
        {projects.map((project) => (
          <ProjectCard key={project.label} project={project} />
        ))}
      </Carousel>
    </Section>
  );
}
