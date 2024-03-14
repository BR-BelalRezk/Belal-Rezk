import { BiLogoNetlify } from "react-icons/bi";
import { FaMeta } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { RiUserSettingsFill } from "react-icons/ri";
import { TbAugmentedReality, TbBrandFramerMotion } from "react-icons/tb";
import {
  FaUser,
  FaCode,
  FaTelegramPlane,
  FaGithub,
  FaLinkedinIn,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaSass,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiIbm,
  SiJavascript,
  SiNextdotjs,
  SiNextui,
  SiReactos,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTask,
  SiTypescript,
  SiUdemy,
  SiVercel,
} from "react-icons/si";

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

export const skills = [
  {
    label: "HTML",
    icon: FaHtml5,
  },
  {
    label: "CSS",
    icon: FaCss3Alt,
  },
  {
    label: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    label: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    label: "Styled Components",
    icon: SiStyledcomponents,
  },
  {
    label: "Sass",
    icon: FaSass,
  },
  {
    label: "Javascript",
    icon: SiJavascript,
  },
  {
    label: "Typescript",
    icon: SiTypescript,
  },
  {
    label: "React.js",
    icon: FaReact,
  },
  {
    label: "React Router",
    icon: SiReactrouter,
  },
  {
    label: "Redux / RTK",
    icon: SiRedux,
  },
  {
    label: "React Query",
    icon: SiReactquery,
  },
  {
    label: "Next.js",
    icon: SiNextdotjs,
  },
  {
    label: "Next / UI",
    icon: SiNextui,
  },
  {
    label: "Framer Motion",
    icon: TbBrandFramerMotion,
  },
  {
    label: "Git",
    icon: FaGitAlt,
  },
  {
    label: "Github",
    icon: FaGithub,
  },
  {
    label: "Netlify",
    icon: BiLogoNetlify,
  },
  {
    label: "Vercel",
    icon: SiVercel,
  },
];

export const certificates = [
  {
    label: "Meta Front-End Developer Specialization",
    icon: FaMeta,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/Q3SSBSMFSWWP",
  },
  {
    label: "IBM Front-End Developer Specialization",
    icon: SiIbm,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/CLX46DNUGBLU",
  },
  {
    label: "The Ultimate React Course 2024: Jonas Schmedtmann",
    icon: SiUdemy,
    link: "https://ude.my/UC-cfa9b3b2-7683-49a0-b685-70cb2d43b1f0/",
  },
];
