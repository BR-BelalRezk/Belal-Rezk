import Hero from "@/components/common/Hero";
import Abouts from "@/components/content/Abouts";
export default function AboutPage() {
  return (
    <>
      <Hero id="about" textOne="About" textTwo="Me" />
      <Abouts id="skills" />
      <Abouts id="certificates" />
    </>
  );
}
