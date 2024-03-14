import { ar, fr } from "@/constants";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

export default function ProjectCard({
  project,
}: {
  project: (typeof fr)[number] | (typeof ar)[number];
}) {
  return (
    <div
      role="carousel-item"
      className="min-w-60 min-h-60 border-2 border-gray-500 rounded-lg flex flex-col items-center justify-center gap-5"
    >
      <h3 className="text-gray-300 font-semibold text-2xl">{project.label}</h3>
      <h4 className="text-xs text-center px-5 text-gray-200 font-medium">
        {project.desc}
      </h4>
      <ul className="flex items-center justify-center gap-5 text-2xl text-gray-100">
        {Array.from({ length: 2 }, (_, index) => index).map((index) => (
          <li key={index} className="hover:scale-125 duration-500">
            <Link
              href={index === 0 ? project.github : project.demo}
              target="_blank"
            >
              {index === 0 ? <FaGithub /> : <FaLink />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
