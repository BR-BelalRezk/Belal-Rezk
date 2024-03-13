import { ar, fr } from "@/constants";
import Image from "next/image";

export default function ProjectCard({
  project,
}: {
  project: (typeof fr)[number] | (typeof ar)[number];
}) {
  return (
    <div role="carousel-item" className="min-w-60 min-h-60  border rounded-lg">
      <Image src={project.img} alt={project.label} width={100} height={100} />
    </div>
  );
}
