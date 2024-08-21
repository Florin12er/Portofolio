// data/projects.ts

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  livePreviewUrl: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
  tags: string[];
}

export const projectsData: Project[] = [
  {
    id: "1",
    name: "NextJS Portfolio",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS.",
    longDescription: "Lorem ipsum dolor sit amet...",
    imageUrl: "/images/rock-paper.png",
    livePreviewUrl: "https://rock-paper-scrissor-2.vercel.app",
    liveUrl: "https://rock-paper-scrissor-2.vercel.app",
    githubUrl: "https://github.com/Florin12er/Rock-paper-scrissor_2",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  // Add more projects...
];
