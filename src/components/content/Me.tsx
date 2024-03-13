import dynamic from "next/dynamic";
import Section from "../common/Section";
import { RiUserSettingsFill } from "react-icons/ri";
const StaggerText = dynamic(() => import("../Animations/StaggerText"), {
  ssr: false,
});

export default function Me() {
  return (
    <Section id="me">
      <StaggerText text="Me" icon={<RiUserSettingsFill />} />
    </Section>
  );
}
