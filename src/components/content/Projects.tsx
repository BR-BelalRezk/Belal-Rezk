import { FaCode } from "react-icons/fa";
import { TbAugmentedReality, TbExternalLink } from "react-icons/tb";
import Section from "../common/Section";
import dynamic from "next/dynamic";
import { ar, fr } from "@/constants";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

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
          <li
            key={project.label}
            role="carousel-item"
            className="w-60 h-60 border-2 border-gray-500 rounded-lg flex flex-col items-center justify-center gap-5"
          >
            <h3 className="text-gray-300 font-semibold text-2xl">
              {project.label}
            </h3>
            <h4 className="text-xs text-center px-5 text-gray-200 font-medium">
              {project.desc}
            </h4>
            <ul className="flex items-center justify-center gap-5 text-2xl text-gray-100">
              {Array.from({ length: 2 }, (_, index) => index).map((index) => (
                <li
                  key={index}
                  className={`duration-500 ${
                    index === 0
                      ? "hover:scale-125"
                      : "hover:translate-x-1 hover:-translate-y-1"
                  }`}
                >
                  <Link
                    href={index === 0 ? project.github : project.demo}
                    target="_blank"
                  >
                    {index === 0 ? <FaGithub /> : <TbExternalLink />}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </Carousel>
    </Section>
  );
}
