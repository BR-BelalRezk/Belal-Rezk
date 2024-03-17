import Link from "next/link";
import Section from "../common/Section";
import { TbExternalLink } from "react-icons/tb";
import { certificates, skills } from "@/constants";
import { PiCertificateFill } from "react-icons/pi";
import { SiReactos } from "react-icons/si";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("./Carousel"), { ssr: false });

export default function Abouts({ id }: { id: "certificates" | "skills" }) {
  return (
    <Section id={id}>
      <Carousel
        id={id === "certificates" ? "Certificates" : "Skills"}
        icon={id === "certificates" ? <PiCertificateFill /> : <SiReactos />}
      >
        {id === "certificates"
          ? certificates.map((certificate) => (
              <li
                key={certificate.label}
                role="carousel-item"
                className="w-40 h-40 border-2 border-gray-500 rounded-lg flex flex-col items-center justify-center gap-5"
              >
                <Link
                  href={certificate.link}
                  className="flex items-center justify-center gap-10 group text-gray-300"
                  target="_blank"
                >
                  <certificate.icon className="text-5xl" />
                  <TbExternalLink className="text-3xl group-hover:translate-x-1 group-hover:-translate-y-1 duration-500" />
                </Link>
                <h3 className="text-center text-sm text-gray-100">
                  {certificate.label}
                </h3>
              </li>
            ))
          : skills.map((skill) => (
              <li
                key={skill.label}
                role="carousel-item"
                className="w-40 h-40 border-2 border-gray-500 rounded-lg flex flex-col items-center justify-center gap-5"
              >
                <h3 className="text-gray-300 px-0.5 text-center font-semibold">
                  {skill.label}
                </h3>
                <skill.icon className="text-5xl text-gray-100" />
              </li>
            ))}
      </Carousel>
    </Section>
  );
}
