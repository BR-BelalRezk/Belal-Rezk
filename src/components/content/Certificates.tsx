import dynamic from "next/dynamic";
import Section from "../common/Section";
import { PiCertificateFill } from "react-icons/pi";
const StaggerText = dynamic(() => import("../Animations/StaggerText"), {
  ssr: false,
});

export default function Certificates() {
  return (
    <Section id="certificates">
      <StaggerText text="Certificates" icon={<PiCertificateFill />} />
    </Section>
  );
}
