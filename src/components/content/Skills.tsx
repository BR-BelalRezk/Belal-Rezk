import dynamic from "next/dynamic";
import Section from "../common/Section";
import { SiReactos } from "react-icons/si";
const StaggerText = dynamic(() => import("../Animations/StaggerText"), {
  ssr: false,
});

export default function Skills() {
  return (
    <Section id="skills">
      <StaggerText text="Skills" icon={<SiReactos />} />
    </Section>
  );
}
