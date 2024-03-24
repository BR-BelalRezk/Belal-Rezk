import Section from "./Section";
import { contact } from "@/constants";
import Link from "next/link";
import dynamic from "next/dynamic";

const H1 = dynamic(() => import("./H1"), { ssr: false });
const SplineCubes = dynamic(() => import("../content/SplineCubes"), {
  ssr: false,
});
const ContactForm = dynamic(() => import("../content/ContactForm"), {
  ssr: false,
});

export default function Hero({
  textOne,
  textTwo,
  id,
}: {
  textOne: string;
  textTwo: string;
  id: "home" | "about" | "work" | "contact";
}) {
  return (
    <Section id={id}>
      <div
        className={`flex items-center justify-center w-full gap-10 sm:justify-between ${
          id === "contact"
            ? "flex-col lg:flex-row"
            : "flex-col-reverse sm:flex-row sm:gap-0"
        }`}
      >
        <div
          className={
            id === "about"
              ? "flex items-center justify-center sm:justify-start sm:items-start sm:w-1/2 flex-col gap-5"
              : ""
          }
        >
          <H1
            id={id}
            className={`flex items-center justify-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 ${
              id === "work" ? "pb-5" : ""
            } ${
              id === "home" || id === "work"
                ? "text-4xl md:text-5xl"
                : "text-5xl"
            }`}
          >
            {textOne} <span className="w-1 rounded-full h-10 bg-gray-50" />
            {textTwo}
          </H1>
          <p className="text-xs text-center sm:text-left">
            Hi there, {"I'm"} Belal Rezk, a Developer from Beni-Suef, Egypt,
            currently specializing in Agriculture at Beni-Suef University.{" "}
            {"I've"} cultivated my skills in Front-End and Augmented Reality
            development through platforms like Coursera and Udemy, backed by
            professional certificates from Meta and IBM, showcased on Credly.
            Passionate about merging technology with agriculture, I aim to
            innovate and create impactful solutions.
          </p>
        </div>

        {(id === "home" || id === "work") && (
          <SplineCubes
            scene={id === "home" ? "/scene1.splinecode" : "/scene2.splinecode"}
          />
        )}
        {id === "contact" && (
          <ContactForm>
            <ul className="flex items-center justify-center gap-5">
              {contact.map((item) => (
                <li
                  key={item.label}
                  className={`hover:scale-125 duration-500 ${
                    item.label === "github"
                      ? "text-4xl"
                      : "text-2xl p-1.5 bg-gray-50 text-black rounded-full"
                  }`}
                >
                  <Link target="_blank" href={item.url}>
                    <item.icon />
                  </Link>
                </li>
              ))}
            </ul>
          </ContactForm>
        )}
        {id === "about" && <p>About</p>}
      </div>
    </Section>
  );
}
