// data/projects.ts

export interface Project {
  id: string;
  name: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  longDescription: {
    en: string;
    de: string;
  };
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
    name: {
      en: "NextJS Portfolio",
      de: "NextJS Portfolio",
    },
    description: {
      en: "A personal portfolio website built with Next.js and Tailwind CSS.",
      de: "Eine persönliche Portfolio-Website, erstellt mit Next.js und Tailwind CSS.",
    },
    longDescription: {
      en: "Lorem ipsum dolor sit amet...",
      de: "Lorem ipsum dolor sit amet...",
    },
    imageUrl: "/images/rock-paper.png",
    livePreviewUrl: "",
    liveUrl: "",
    githubUrl: "https://github.com/Florin12er/Rock-paper-scrissor_2",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  // Add more projects...
];
