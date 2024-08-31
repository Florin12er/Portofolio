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
      en: "Todo App",
      de: "Todo App",
    },
    description: {
      en: "Fullstack-ToDo-App",
      de: "Fullstack-ToDo-App",
    },
    longDescription: {
      en: "The site is a modern task management application built with Next.js, showcasing a clean and intuitive user interface. It allows users to create, manage, and organize tasks efficiently, utilizing features like real-time updates and seamless navigation, making productivity easier and more enjoyable.",
      de: "Die Website ist eine moderne Aufgabenverwaltungsanwendung, die mit Next.js erstellt wurde und eine saubere und intuitive Benutzeroberfläche aufweist. Sie ermöglicht es den Nutzern, Aufgaben effizient zu erstellen, zu verwalten und zu organisieren. Dabei werden Funktionen wie Echtzeit-Updates und nahtlose Navigation genutzt, was die Produktivität einfacher und angenehmer macht.",
    },
    imageUrl: "/images/todo.png",
    livePreviewUrl: "",
    liveUrl: "https://todonextjs-pi.vercel.app",
    githubUrl: "https://github.com/Florin12er/todonextjs",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
  },
  {
    id: "2",
    name: {
      en: "Sort algorithm visualizer",
      de: "Visualisierung des Sortieralgorithmuss",
    },
    description: {
      en: "Sort algorithm visualizer",
      de: "Visualisierung des Sortieralgorithmus",
    },
    longDescription: {
      en: "The Sorting Algorithms Visualizer is an interactive web application designed to enhance understanding of sorting algorithms through engaging visual demonstrations. Users can explore a variety of sorting techniques, including bubble sort, quick sort, merge sort, and more. Each algorithm is illustrated with dynamic animations that show the step-by-step process of sorting data, making it easier to grasp the underlying concepts.This tool is not only educational but also provides a hands-on experience, allowing users to adjust parameters and observe how different algorithms perform under various conditions. Whether you're a student learning about algorithms or a developer looking to refine your knowledge, this visualizer serves as an invaluable resource for comprehending the intricacies of sorting methods.",
      de: "Der Sorting Algorithms Visualizer ist eine interaktive Webanwendung, die das Verständnis von Sortieralgorithmen durch ansprechende visuelle Demonstrationen verbessern soll. Benutzer können eine Vielzahl von Sortierverfahren erkunden, darunter Bubble Sort, Quick Sort, Merge Sort und andere. Jeder Algorithmus wird mit dynamischen Animationen veranschaulicht, die den schrittweisen Prozess des Sortierens von Daten zeigen und so das Verständnis der zugrunde liegenden Konzepte erleichtern.Dieses Tool ist nicht nur lehrreich, sondern bietet auch eine praktische Erfahrung, die es den Benutzern ermöglicht, Parameter anzupassen und zu beobachten, wie verschiedene Algorithmen unter verschiedenen Bedingungen funktionieren. Ob Sie nun ein Student sind, der etwas über Algorithmen lernt, oder ein Entwickler, der sein Wissen verfeinern möchte, dieser Visualizer ist eine unschätzbare Ressource, um die Feinheiten von Sortiermethoden zu verstehen.",
    },
    imageUrl: "/images/sort.png",
    livePreviewUrl: "https://sort-algorithms-visualizer-nt5w.vercel.app",
    liveUrl: "https://sort-algorithms-visualizer-nt5w.vercel.app",
    githubUrl: "https://github.com/Florin12er/sort-algorithms-visualizer",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];
