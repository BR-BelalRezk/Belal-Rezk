import {
  FaUser,
  FaCode,
  FaTelegramPlane,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { RiUserSettingsFill } from "react-icons/ri";
import { SiReactos, SiTask } from "react-icons/si";
import { TbAugmentedReality } from "react-icons/tb";

export const navbar = [
  {
    label: "about",
    icon: FaUser,
    path: "/about",
  },
  {
    label: "work",
    icon: SiTask,
    path: "/work",
  },
  {
    label: "contact",
    icon: FaTelegramPlane,
    path: "/contact",
  },
] as const;

export const aside = [
  {
    label: "me",
    icon: RiUserSettingsFill,
    path: "/about",
    hash: "#me",
  },
  {
    label: "skills",
    icon: SiReactos,
    path: "/about",
    hash: "#skills",
  },
  {
    label: "certificates",
    icon: PiCertificateFill,
    path: "/about",
    hash: "#certificates",
  },
  {
    label: "Front-End",
    icon: FaCode,
    path: "/work",
    hash: "#fr",
  },
  {
    label: "AR",
    icon: TbAugmentedReality,
    path: "/work",
    hash: "#ar",
  },
] as const;

export const contact = [
  {
    label: "github",
    icon: FaGithub,
    url: "https://github.com/BR-BelalRezk",
  },
  {
    label: "linkedin",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/belalrezk/",
  },
] as const;

export const fr = [
  {
    label: "Little Lemon",
    desc: "A mediterranean restaurant, focused on traditional recipes served with a modern twist.",
    github: "https://github.com/BR-BelalRezk/Little-Lemon",
    demo: "https://meta-littlelemon.vercel.app",
  },
  {
    label: "Lexaz",
    desc: "Internal hotel management web app for desktop, a small boutique hotel with 8 cabins.",
    github: "https://github.com/BR-BelalRezk/Lexaz",
    demo: "https://lexaz.vercel.app",
  },
  {
    label: "Zexai",
    desc: "An AI SaaS app, specializing in advanced image generation and enhancement technologies.",
    github: "https://github.com/BR-BelalRezk/Zexai",
    demo: "https://zexai.vercel.app",
  },
  {
    label: "Canvex",
    desc: "A dynamic real-time collaboration platform as Figma, facilitating teamwork and creativity.",
    github: "https://github.com/BR-BelalRezk/Canvex",
    demo: "https://canvex-figma.vercel.app",
  },
  {
    label: "Nexa",
    desc: "A social media platform fostering connections and interactions among users.",
    github: "https://github.com/BR-BelalRezk/Nexa",
    demo: "",
  },
] as const;

export const ar = [
  {
    label: "",
    desc: "",
    github: "",
    demo: "",
  },
] as const;
