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
    img: "/little-lemon.svg",
  },
  {
    label: "Lexaz",
    img: "/lexaz.jpeg",
  },
  {
    label: "Zexai",
    img: "/zexai.jpeg",
  },
  {
    label: "Canvex",
    img: "/canvex.jpeg",
  },
  {
    label: "Nexa",
    img: "",
  },
];

export const ar = [
  {
    label: "Little Lemon",
    img: "/littlelemon.jpeg",
  },
  {
    label: "Lexaz",
    img: "/lexaz.jpeg",
  },
  {
    label: "Zexai",
    img: "/zexai.jpeg",
  },
  {
    label: "Canvex",
    img: "/canvex.jpeg",
  },
  {
    label: "Nexa",
    img: "",
  },
];
