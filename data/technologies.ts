// data/technologies.ts
import { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaGitAlt, FaLinux } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGo,
  SiGnubash,
  SiPrisma,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  animation: string;
}
export const skills: Skill[] = [
  {
    name: "React",
    icon: FaReact,
    color: "text-blue-500",
    animation: "hover:rotate-180 hover:scale-110",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-600",
    animation: "hover:rotate-12 hover:scale-110",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black dark:text-white",
    animation: "hover:scale-125 hover:rotate-12",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
    animation: "hover:bounce hover:scale-110",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-600",
    animation: "hover:rotate-45 hover:scale-110",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "text-gray-700 dark:text-gray-300",
    animation: "hover:scale-110 hover:translate-y-[-5px]",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
    animation: "hover:rotate-12 hover:scale-110",
  },
  {
    name: "MySQL",
    icon: DiMysql,
    color: "text-blue-700",
    animation: "hover:translate-y-[-5px] hover:scale-110",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-teal-400",
    animation: "hover:skew-y-3 hover:scale-110",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-600",
    animation: "hover:rotate-[-12deg] hover:scale-110",
  },
  {
    name: "Go",
    icon: SiGo,
    color: "text-blue-400",
    animation: "hover:go-fast",
  },
  {
    name: "Linux",
    icon: FaLinux,
    color: "text-black",
    animation: "hover:rotate-360 hover:scale-110",
  },
  {
    name: "Bash",
    icon: SiGnubash,
    color: "text-black",
    animation: "hover:scale-125 hover:-translate-y-1",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "text-black",
    animation: "hover:scale-125 hover:-translate-y-1",
  },
];
