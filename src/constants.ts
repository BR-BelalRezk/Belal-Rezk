import { BiLogoNetlify } from "react-icons/bi";
import { FaMeta } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
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
  SiPlaycanvas,
  SiReacthookform,
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
    label: "Lexaz",
    desc: "Internal hotel management web app for desktop, a small boutique hotel with 8 cabins.",
    github: "https://github.com/BR-BelalRezk/Lexaz",
    demo: "https://lexaz.vercel.app",
  },
  {
    label: "Little Lemon",
    desc: "A mediterranean restaurant, focused on traditional recipes served with a modern twist.",
    github: "https://github.com/BR-BelalRezk/Little-Lemon",
    demo: "https://meta-littlelemon.vercel.app",
  },
  {
    label: "Canvex",
    desc: "A dynamic real-time collaboration platform as Figma, facilitating teamwork and creativity.",
    github: "https://github.com/BR-BelalRezk/Canvex",
    demo: "https://canvex-figma.vercel.app",
  },
  {
    label: "Apple-iPhone",
    desc: "An animated landing page to represent iphone 15 in an elegant modern way in 3D models",
    github: "https://github.com/BR-BelalRezk/Apple-iPhone",
    demo: "https://appleiphone.vercel.app",
  },
  {
    label: "BrainWave",
    desc: "A modern landing page with stylish UI design, sleek parallax effects and bento box layouts",
    github: "https://github.com/BR-BelalRezk/BrainWave",
    demo: "https://brainwave-br.vercel.app",
  },
  {
    label: "Apple TV+",
    desc: "An animated landing page when scroll for apple tv+ home page to practice framer motion",
    github: "https://github.com/BR-BelalRezk/AppleTV",
    demo: "https://appletv-br.vercel.app",
  },
  {
    label: "Nike",
    desc: "A landing page for nike with a good ui/ux, elegant modern design",
    github: "https://github.com/BR-BelalRezk/Nike",
    demo: "https://nike-br.vercel.app",
  },
  {
    label: "HiLink",
    desc: "A landing page for a travel mobile app with a good elegant modern design",
    github: "https://github.com/BR-BelalRezk/HiLink",
    demo: "https://hilink-br.vercel.app/",
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
    label: "React Hook Form",
    icon: SiReacthookform,
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
    label: "PlayCanvas-AR",
    icon: SiPlaycanvas,
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
] as const;

export const certificates = [
  {
    label: "Meta Front-End Developer Specialization",
    icon: FaMeta,
    link: "https://www.coursera.org/account/accomplishments/specialization/Q3SSBSMFSWWP",
  },
  {
    label: "IBM Front-End Developer Specialization",
    icon: SiIbm,
    link: "https://www.coursera.org/account/accomplishments/specialization/CLX46DNUGBLU",
  },
  {
    label: "The Ultimate React Course 2024: Jonas Schmedtmann",
    icon: SiUdemy,
    link: "https://ude.my/UC-cfa9b3b2-7683-49a0-b685-70cb2d43b1f0/",
  },
] as const;
