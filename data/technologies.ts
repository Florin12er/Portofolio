// data/technologies.ts
import { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaGitAlt, FaLinux } from "react-icons/fa";
import {
    SiNextdotjs,
    SiNuxtdotjs,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
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
}
export const skills: Skill[] = [
    {
        name: "React",
        icon: FaReact,
        color: "text-blue-500",
    },
    {
        name: "HTML",
        icon: SiHtml5,
        color: "text-orange-500",
    },
    {
        name: "CSS",
        icon: SiCss3,
        color: "text-blue-500",
    },
    {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-500",
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-blue-600",
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-black dark:text-white",
    },
    {
        name: "NuxtJs",
        icon: SiNuxtdotjs,
        color: "text-green-600",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-600",
    },
    {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-600",
    },
    {
        name: "Express",
        icon: SiExpress,
        color: "text-gray-700 dark:text-gray-300",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
    },
    {
        name: "MySQL",
        icon: DiMysql,
        color: "text-blue-700",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-teal-400",
    },
    {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-600",
    },
    {
        name: "Go",
        icon: SiGo,
        color: "text-blue-400",
    },
    {
        name: "Linux",
        icon: FaLinux,
        color: "text-black",
    },
    {
        name: "Bash",
        icon: SiGnubash,
        color: "text-black",
    },
    {
        name: "Prisma",
        icon: SiPrisma,
        color: "text-black",
    },
];
