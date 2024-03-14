import Hero from "@/components/common/Hero";
import Certificates from "@/components/content/Certificates";
import Skills from "@/components/content/Skills";
export default function AboutPage() {
  return (
    <>
      <Hero id="about" textOne="About" textTwo="Me" />
      <Skills />
      <Certificates />
    </>
  );
}
