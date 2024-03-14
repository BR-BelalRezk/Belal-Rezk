import dynamic from "next/dynamic";
import Section from "../common/Section";
import { SiReactos } from "react-icons/si";
import { skills } from "@/constants";

const Carousel = dynamic(() => import("./Carousel"), { ssr: false });

export default function Skills() {
  return (
    <Section id="skills">
      <Carousel id="Skills" icon={<SiReactos />}>
        {skills.map((skill) => (
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
