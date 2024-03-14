import { ar, fr } from "@/constants";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

export default function ProjectCard({
  project,
}: {
  project: (typeof fr)[number] | (typeof ar)[number];
}) {
  return (
    <li
      role="carousel-item"
      className="w-60 h-60 border-2 border-gray-500 rounded-lg flex flex-col items-center justify-center gap-5"
    >
      <h3 className="text-gray-300 font-semibold text-2xl">{project.label}</h3>
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
  );
}
