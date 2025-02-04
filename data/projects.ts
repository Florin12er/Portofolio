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
      en: "Full-stack ToDo App with real-time updates",
      de: "Fullstack-ToDo-App mit Echtzeit-Updates",
    },
    longDescription: {
      en: "This modern task management application is built with Next.js and provides a clean and intuitive user interface. It allows users to create, manage, and prioritize tasks seamlessly, leveraging real-time updates and smooth navigation for an enhanced productivity experience. Whether for personal or team use, this app makes task management more efficient and enjoyable.",
      de: "Diese moderne Aufgabenverwaltungsanwendung wurde mit Next.js entwickelt und bietet eine saubere und intuitive Benutzeroberfläche. Benutzer können Aufgaben mühelos erstellen, verwalten und priorisieren, wobei Echtzeit-Updates und eine reibungslose Navigation für eine verbesserte Produktivität sorgen. Ob für den persönlichen oder Teamgebrauch, diese App macht das Aufgabenmanagement effizienter und angenehmer.",
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
      en: "Sort Algorithm Visualizer",
      de: "Visualisierung des Sortieralgorithmus",
    },
    description: {
      en: "Visualize sorting algorithms with dynamic animations",
      de: "Visualisierung von Sortieralgorithmen mit dynamischen Animationen",
    },
    longDescription: {
      en: "This interactive web app visualizes various sorting algorithms like Bubble Sort, Quick Sort, and Merge Sort with engaging, real-time animations. Users can explore the step-by-step process of sorting data, helping them grasp the mechanics behind each algorithm. It's a perfect tool for both students learning algorithms and developers looking to deepen their understanding of sorting methods, all within an easy-to-use interface.",
      de: "Diese interaktive Webanwendung visualisiert verschiedene Sortieralgorithmen wie Bubble Sort, Quick Sort und Merge Sort mit ansprechenden, Echtzeit-Animationen. Benutzer können den schrittweisen Prozess des Sortierens von Daten erkunden und so das Verständnis der Mechanismen hinter jedem Algorithmus vertiefen. Es ist ein ideales Werkzeug für Studenten, die Algorithmen lernen, und Entwickler, die ihr Verständnis von Sortiermethoden erweitern möchten – alles innerhalb einer benutzerfreundlichen Oberfläche.",
    },
    imageUrl: "/images/sort.png",
    livePreviewUrl: "https://sort-algorithms-visualizer-nt5w.vercel.app",
    liveUrl: "https://sort-algorithms-visualizer-nt5w.vercel.app",
    githubUrl: "https://github.com/Florin12er/sort-algorithms-visualizer",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "3",
    name: {
      en: "Notes App Inspired by Notion",
      de: "Notizen-App inspiriert von Notion",
    },
    description: {
      en: "Advanced note-taking app with real-time sync",
      de: "Erweiterte Notizen-App mit Echtzeit-Synchronisierung",
    },
    longDescription: {
      en: "This sophisticated note-taking app combines modern web technologies with a sleek design, inspired by Notion. Using Next.js for the frontend, Convex for real-time backend, and Clerk for secure authentication, the app enables users to manage notes effectively. One standout feature is the recursive delete and restore functionality, showcasing advanced data management. The user-friendly interface is optimized for smooth, real-time updates, allowing effortless organization of thoughts.",
      de: "Diese ausgefeilte Notizen-App kombiniert moderne Webtechnologien mit einem eleganten Design, inspiriert von Notion. Mit Next.js für das Frontend, Convex für das Echtzeit-Backend und Clerk für sichere Authentifizierung ermöglicht die App den Benutzern, Notizen effektiv zu verwalten. Ein herausragendes Merkmal ist die rekursive Lösch- und Wiederherstellungsfunktion, die fortschrittliches Datenmanagement demonstriert. Die benutzerfreundliche Oberfläche ist für reibungslose, Echtzeit-Updates optimiert und ermöglicht eine mühelose Organisation der Gedanken.",
    },
    imageUrl: "/images/Jotion.png",
    livePreviewUrl: "https://note-taking-app-one-tau.vercel.app",
    liveUrl: "https://note-taking-app-one-tau.vercel.app",
    githubUrl: "https://github.com/Florin12er/NotionClone",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    tags: ["React", "TypeScript", "Tailwind CSS", "Convex"],
  },
  {
    id: "4",
    name: {
      en: "Fake Store App",
      de: "Fake Einkaufen-App",
    },
    description: {
      en: "Simulated e-commerce site using fake product data",
      de: "Simulierte E-Commerce-Seite mit gefälschten Produktdaten",
    },
    longDescription: {
      en: "This simple yet powerful app demonstrates how to fetch and display data from an API. Using the Fake Store API, it pulls product information and presents it in a clean, user-friendly online store layout. The app features sorting and filtering options for a realistic e-commerce experience. It’s an excellent example of API integration and demonstrates fundamental web development skills.",
      de: "Diese einfache, aber leistungsstarke App zeigt, wie man Daten aus einer API abruft und anzeigt. Mithilfe der Fake Store API werden Produktinformationen abgerufen und in einem sauberen, benutzerfreundlichen Online-Shop-Layout präsentiert. Die App bietet Sortier- und Filteroptionen für ein realistisches E-Commerce-Erlebnis. Sie ist ein ausgezeichnetes Beispiel für die Integration von APIs und demonstriert grundlegende Webentwicklungsfähigkeiten.",
    },
    imageUrl: "/images/fakestore.png",
    livePreviewUrl: "https://fake-store-app-seven.vercel.app",
    liveUrl: "https://fake-store-app-seven.vercel.app",
    githubUrl: "https://github.com/Florin12er/FakeStoreApp",
    technologies: ["JavaScript", "CSS", "HTML"],
    tags: ["Javascript", "CSS", "HTML", "Fake Store API"],
  },
  {
    id: "5",
    name: {
      en: "Library App",
      de: "Bibliotheksapp",
    },
    description: {
      en: "Comprehensive library management system",
      de: "Umfassendes Bibliotheksverwaltungssystem",
    },
    longDescription: {
      en: "This full-stack library management app showcases proficiency with Node.js, MongoDB, and EJS. The app allows users to browse, add, and manage books with ease. It features a searchable catalog, detailed book info, and CRUD operations for managing inventory. The design is responsive and user-friendly, ensuring a smooth experience across all devices. This project highlights skills in backend development, API integration, and efficient data handling.",
      de: "Diese Full-Stack-Bibliotheksverwaltungs-App zeigt die Kompetenz in Node.js, MongoDB und EJS. Die App ermöglicht es den Benutzern, Bücher einfach zu durchsuchen, hinzuzufügen und zu verwalten. Sie bietet einen durchsuchbaren Katalog, detaillierte Buchinformationen und CRUD-Operationen für die Verwaltung des Bestands. Das Design ist reaktionsschnell und benutzerfreundlich, was ein reibungsloses Erlebnis auf allen Geräten gewährleistet. Dieses Projekt hebt Fähigkeiten in der Backend-Entwicklung, API-Integration und effizienter Datenverarbeitung hervor.",
    },
    imageUrl: "/images/library.png",
    livePreviewUrl: "https://nodeproject-0ag3.onrender.com",
    liveUrl: "https://nodeproject-0ag3.onrender.com",
    githubUrl: "https://github.com/Florin12er/NodeProject",
    technologies: ["JavaScript", "NodeJS", "Express", "EJS", "MongoDB"],
    tags: ["Javascript", "NodeJS", "Express", "EJS", "MongoDB"],
  },
  {
    id: "6",
    name: {
      en: "Simple Calculator",
      de: "Einfache Rechner",
    },
    description: {
      en: "Basic calculator with error handling and responsive design",
      de: "Einfacher Rechner mit Fehlerbehandlung und responsivem Design",
    },
    longDescription: {
      en: "This web-based calculator app performs basic arithmetic operations with a clean and responsive interface. Built with HTML, CSS, and JavaScript, it includes error handling for invalid inputs and division by zero. It's a great example of fundamental front-end skills, ensuring ease of use and accessibility across devices.",
      de: "Diese webbasierte Rechner-App führt grundlegende arithmetische Operationen mit einer sauberen und responsiven Benutzeroberfläche durch. Sie wurde mit HTML, CSS und JavaScript erstellt und umfasst eine Fehlerbehandlung für ungültige Eingaben und Division durch Null. Es ist ein großartiges Beispiel für grundlegende Front-End-Fähigkeiten und gewährleistet Benutzerfreundlichkeit und Zugänglichkeit auf allen Geräten.",
    },
    imageUrl: "/images/calculator.png",
    livePreviewUrl: "https://sebastian-calculator.netlify.app",
    liveUrl: "https://sebastian-calculator.netlify.app",
    githubUrl: "https://github.com/Florin12er/calculator2",
    technologies: ["JavaScript", "HTML", "CSS"],
    tags: ["Javascript", "HTML", "CSS"],
  },
  {
    id: "7",
    name: {
      en: "Authentication System for Web Apps",
      de: "Authentifizierungssystem für Web-Apps",
    },
    description: {
      en: "Secure and robust authentication system for web apps",
      de: "Sicheres und robustes Authentifizierungssystem für Web-Apps",
    },
    longDescription: {
      en: "This project implements a comprehensive authentication system for web apps using NextAuth. It includes features like login, registration, OAuth authentication, email verification, and two-factor authentication, ensuring secure user management. It is an ideal solution for developers who need a reliable, flexible authentication system with modern security practices.",
      de: "Dieses Projekt implementiert ein umfassendes Authentifizierungssystem für Web-Apps mit NextAuth. Es umfasst Funktionen wie Login, Registrierung, OAuth-Authentifizierung, E-Mail-Verifizierung und Zwei-Faktor-Authentifizierung und sorgt so für eine sichere Benutzerverwaltung. Es ist eine ideale Lösung für Entwickler, die ein zuverlässiges und flexibles Authentifizierungssystem mit modernen Sicherheitspraktiken benötigen.",
    },
    imageUrl: "/images/authentication.png",
    livePreviewUrl: "https://nextauth-pi-six.vercel.app",
    liveUrl: "https://nextauth-pi-six.vercel.app",
    githubUrl: "https://github.com/Florin12er/nextauth",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
  },
  {
    id: "8",
    name: {
      en: "Draw App",
      de: "Zeichen-App",
    },
    description: {
      en: "Interactive drawing board with geometric shapes",
      de: "Interaktive Zeichenfläche mit geometrischen Formen",
    },
    longDescription: {
      en: "This simple yet engaging drawing board allows users to sketch freehand or insert geometric shapes. Built with Next.js, CodeBlocks, and inspired by the YouTube channel 'Code with Antonio', this app demonstrates core front-end development skills while offering a creative tool for users to express their ideas visually.",
      de: "Diese einfache, aber ansprechende Zeichenfläche ermöglicht es den Benutzern, freihändig zu skizzieren oder geometrische Formen einzufügen. Mit Next.js, CodeBlocks und inspiriert vom YouTube-Kanal 'Code with Antonio' zeigt diese App grundlegende Front-End-Entwicklungsfähigkeiten und bietet gleichzeitig ein kreatives Werkzeug, mit dem Benutzer ihre Ideen visuell ausdrücken können.",
    },
    imageUrl: "/images/Draw.png",
    livePreviewUrl: "",
    liveUrl: "https://drawapp-alpha.vercel.app",
    githubUrl: "https://github.com/Florin12er/drawapp",
    technologies: ["React", "Next.js", "Typescript", "Prisma"],
    tags: ["Next.js", "React", "Typescript", "Prisma"],
  },
  {
    id: "11",
    name: {
      en: "Fullstack Document Editing App",
      de: "Vollständige Dokumentenbearbeitungs-App",
    },
    description: {
      en: "Collaborative document editing platform",
      de: "Kollaborative Dokumentenbearbeitungsplattform",
    },
    longDescription: {
      en: "This powerful full-stack document editing application, built with Next.js, React, Tailwind, and Convex, allows users to create, edit, and collaborate on documents in real-time. The platform includes features like organizations, comment systems, and a sleek, user-friendly interface that enables seamless collaboration. Whether you're working on a team project or writing solo, this app provides all the tools needed for an efficient and enjoyable document editing experience.",
      de: "Diese leistungsstarke Full-Stack-Dokumentenbearbeitungsanwendung, die mit Next.js, React, Tailwind und Convex erstellt wurde, ermöglicht es Benutzern, Dokumente in Echtzeit zu erstellen, zu bearbeiten und zusammenzuarbeiten. Die Plattform umfasst Funktionen wie Organisationen, Kommentarsysteme und eine elegante, benutzerfreundliche Oberfläche, die eine nahtlose Zusammenarbeit ermöglicht. Ob Sie an einem Teamprojekt arbeiten oder alleine schreiben, diese App bietet alle notwendigen Werkzeuge für eine effiziente und angenehme Dokumentenbearbeitung.",
    },
    imageUrl: "/images/document-editor.png",
    livePreviewUrl: "",
    liveUrl: "https://googledocx-tawny.vercel.app/",
    githubUrl: "https://github.com/Florin12er/googledocx",
    technologies: ["Next.js", "React", "Tailwind CSS", "Convex"],
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Convex",
      "Collaborative Editing",
    ],
  },
];
