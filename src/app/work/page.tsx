import Projects from "@/components/content/Projects";
import Hero from "@/components/common/Hero";
export default function WorkPage() {
  return (
    <>
      <Hero id="work" textOne="Work" textTwo="Projects" />
      <Projects id="fr" />
      <Projects id="ar" />
    </>
  );
}
