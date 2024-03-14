import dynamic from "next/dynamic";
import Section from "../common/Section";
import { PiCertificateFill } from "react-icons/pi";
import { certificates } from "@/constants";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

const Carousel = dynamic(() => import("./Carousel"), {
  ssr: false,
});

export default function Certificates() {
  return (
    <Section id="certificates">
      <Carousel id="Certificates" icon={<PiCertificateFill />}>
        {certificates.map((certificate) => (
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
        ))}
      </Carousel>
    </Section>
  );
}
