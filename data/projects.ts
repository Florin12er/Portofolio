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
      de: "Visualisierung des Sortieralgorithmus",
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
  {
    id: "4",
    name: {
      en: "Blog Platform",
      de: "Blog Plattform",
    },
    description: {
      en: "An Blog platform build with React, NodeJS, express and MongoDB",
      de: "Eine Blog-Plattform gebaut mit React, NodeJS, express und MongoDB",
    },
    longDescription: {
      en: "This full-stack project showcases a modern and responsive blogging platform. The frontend is built with React, leveraging its component-based architecture for a dynamic user interface, while Tailwind CSS provides sleek and customizable styling. On the backend, Node.js and Express power a robust API, handling data management and server-side logic. MongoDB serves as the database, offering flexible document storage for blog posts and user information. The application features user authentication, allowing readers to create accounts and authors to manage their content. With a clean design and intuitive navigation, this project demonstrates proficiency in both frontend and backend technologies, creating a seamless blogging experience",
      de: "Dieses Full-Stack-Projekt stellt eine moderne und reaktionsfähige Blogging-Plattform vor. Das Frontend wurde mit React erstellt und nutzt dessen komponentenbasierte Architektur für eine dynamische Benutzeroberfläche, während Tailwind CSS für ein elegantes und anpassbares Styling sorgt. Im Backend sorgen Node.js und Express für eine robuste API, die das Datenmanagement und die serverseitige Logik übernimmt. MongoDB dient als Datenbank und bietet einen flexiblen Dokumentenspeicher für Blogbeiträge und Benutzerinformationen. Die Anwendung verfügt über eine Benutzerauthentifizierung, die es Lesern ermöglicht, Konten zu erstellen und Autoren, ihre Inhalte zu verwalten. Mit einem sauberen Design und einer intuitiven Navigation demonstriert dieses Projekt die Beherrschung sowohl der Frontend- als auch der Backend-Technologien und schafft ein nahtloses Blogging-Erlebnis.",
    },
    imageUrl: "/images/BlogPlatform.png",
    livePreviewUrl: "https://blogs-nine-steel.vercel.app",
    liveUrl: "https://blogs-nine-steel.vercel.app",
    githubUrl: "https://github.com/Florin12er/ShowBlogs",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    tags: ["React", "NodeJS", "Express", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "5",
    name: {
      en: "Blog Platform Maker",
      de: "Blog Plattform-Maker",
    },
    description: {
      en: "An editor for blog platforms build with React, NodeJS, express and MongoDB",
      de: "Ein Editor für Blog-Plattformen gebaut mit React, NodeJS, express und MongoDB",
    },
    longDescription: {
      en: "This project demonstrates a sophisticated blog creation platform, showcasing the developer's ability to integrate complex features and reuse APIs across different applications. Built with React and Tailwind CSS on the frontend, and Node.js, Express, and MongoDB on the backend, it features a robust user authentication system. The standout feature is the incorporation of the TinyMCE editor, providing users with a powerful, rich-text editing experience. By leveraging the same authentication API as the previous project, the developer exhibits proficiency in creating cohesive, interconnected web applications. This blog maker exemplifies full-stack expertise and the ability to create feature-rich, user-friendly web platforms.",
      de: "Dieses Projekt demonstriert eine hochentwickelte Plattform zur Erstellung von Blogs und zeigt die Fähigkeit des Entwicklers, komplexe Funktionen zu integrieren und APIs über verschiedene Anwendungen hinweg wiederzuverwenden. Es wurde mit React und Tailwind CSS auf dem Frontend und Node.js, Express und MongoDB auf dem Backend gebaut und verfügt über ein robustes Benutzerauthentifizierungssystem. Das herausragende Merkmal ist die Integration des TinyMCE-Editors, der den Nutzern eine leistungsstarke Rich-Text-Editing-Erfahrung bietet. Durch die Nutzung der gleichen Authentifizierungs-API wie beim vorherigen Projekt zeigt der Entwickler seine Kompetenz bei der Erstellung zusammenhängender, miteinander verbundener Webanwendungen. Dieser Blog-Maker ist ein Beispiel für umfassende Fachkenntnisse und die Fähigkeit, funktionsreiche, benutzerfreundliche Webplattformen zu erstellen.",
    },
    imageUrl: "/images/blogMaker.png",
    livePreviewUrl: "https://blog-maker-two.vercel.app",
    liveUrl: "https://blog-maker-two.vercel.app",
    githubUrl: "https://github.com/Florin12er/BlogMaker",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    tags: ["React", "NodeJS", "Express", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "6",
    name: {
      en: "Notes app inspired by notion",
      de: "Notizen-App inspiriert von notion",
    },
    description: {
      en: "This is an advanced notes app inspired by notion build with nextJs, tailwind and convex.",
      de: "Dies ist eine erweiterte Notizen-App inspiriert von notion gebaut mit nextJs, tailwind und convex.",
    },
    longDescription: {
      en: "This sophisticated note-taking application showcases the developer's proficiency in modern web technologies and sleek design implementation. Built with Next.js for a robust frontend, Convex for real-time backend functionality, shadcn/ui for polished UI components, and Clerk for secure authentication, the project exemplifies cutting-edge web development practices. The standout feature is the innovative recursive delete and restore functionality for notes, demonstrating advanced data management capabilities. Users can effortlessly organize their thoughts with a clean, intuitive interface that supports real-time updates. This project, inspired by a tutorial from the YouTube channel @codewithantonio, reflects the developer's ability to learn from and expand upon existing resources, creating a professional-grade application that combines functionality with aesthetic appeal.",
      de: "Diese ausgefeilte Anwendung zur Erstellung von Notizen zeigt die Kompetenz des Entwicklers in modernen Webtechnologien und schlanker Designimplementierung. Das Projekt wurde mit Next.js für ein robustes Frontend, Convex für Echtzeit-Backend-Funktionen, shadcn/ui für ausgefeilte UI-Komponenten und Clerk für eine sichere Authentifizierung entwickelt und ist ein Beispiel für modernste Webentwicklungsverfahren. Das herausragende Merkmal ist die innovative rekursive Lösch- und Wiederherstellungsfunktion für Notizen, die fortschrittliche Datenverwaltungsfunktionen demonstriert. Die Benutzer können ihre Gedanken mühelos mit einer übersichtlichen, intuitiven Oberfläche organisieren, die Echtzeit-Updates unterstützt. Dieses Projekt, das von einem Tutorial des YouTube-Kanals @codewithantonio inspiriert wurde, spiegelt die Fähigkeit des Entwicklers wider, von bestehenden Ressourcen zu lernen und diese zu erweitern, um eine professionelle Anwendung zu erstellen, die Funktionalität mit Ästhetik verbindet.",
    },
    imageUrl: "/images/Jotion.png",
    livePreviewUrl: "https://note-taking-app-one-tau.vercel.app",
    liveUrl: "https://note-taking-app-one-tau.vercel.app",
    githubUrl: "https://github.com/Florin12er/NotionClone",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    tags: ["React", "TypeScript", "Tailwind CSS", "Convex"],
  },
  {
    id: "7",
    name: {
      en: "Fake store app",
      de: "Fake Einkaufen-App",
    },
    description: {
      en: "This is an fake store app build with html , css and javascript.",
      de: "Dies ist eine Fake Einkaufen-App gebaut mit html, css und javascript.",
    },
    longDescription: {
      en: "This simple yet effective project demonstrates my ability to fetch and display data using APIs. Built with HTML, CSS, and JavaScript, the application utilizes the Fake Store API to retrieve a variety of products, creating a simulated online store experience. The clean design and straightforward functionality showcase essential web development skills, making it an excellent example of my capability to integrate APIs into web applications. ",
      de: "Dieses einfache, aber effektive Projekt demonstriert meine Fähigkeit, Daten mithilfe von APIs abzurufen und anzuzeigen. Die mit HTML, CSS und JavaScript erstellte Anwendung nutzt die Fake Store API, um eine Vielzahl von Produkten abzurufen und ein simuliertes Online-Geschäft zu erstellen. Das saubere Design und die unkomplizierte Funktionalität zeigen wesentliche Webentwicklungsfähigkeiten und sind ein hervorragendes Beispiel für meine Fähigkeit, APIs in Webanwendungen zu integrieren. ",
    },
    imageUrl: "/images/fakestore.png",
    livePreviewUrl: "https://fake-store-app-seven.vercel.app",
    liveUrl: "https://fake-store-app-seven.vercel.app",
    githubUrl: "https://github.com/Florin12er/FakeStoreApp",
    technologies: ["JavaScript", "CSS", "HTML"],
    tags: ["Javascript", "CSS", "HTML", "Fake Store API"],
  },
  {
    id: "8",
    name: {
      en: "Library app",
      de: "Bibliotheksapp",
    },
    description: {
      en: "This is a library app build with Nodejs, Express, EJS and MongoDB.",
      de: "Dies ist eine Bibliotheksapp gebaut mit Nodejs, Express, EJS und MongoDB.",
    },
    longDescription: {
      en: "This elegant library management application showcases proficiency in server-side development using Node.js, MongoDB, and EJS templating. The project features a clean, user-friendly interface for browsing, adding, and managing books. Users can easily search for titles, view book details, and perform basic CRUD operations. The responsive design ensures a seamless experience across devices. By leveraging Node.js and MongoDB, the application demonstrates efficient data handling and server-side rendering capabilities, making it a solid example of full-stack development skills in a practical, real-world context.",
      de: "Diese elegante Bibliotheksverwaltungsanwendung zeigt, wie gut die serverseitige Entwicklung mit Node.js, MongoDB und EJS-Templating funktioniert. Das Projekt bietet eine übersichtliche, benutzerfreundliche Oberfläche zum Durchsuchen, Hinzufügen und Verwalten von Büchern. Die Benutzer können einfach nach Titeln suchen, Buchdetails anzeigen und grundlegende CRUD-Operationen durchführen. Das responsive Design sorgt für ein nahtloses Erlebnis auf allen Geräten. Durch den Einsatz von Node.js und MongoDB demonstriert die Anwendung eine effiziente Datenverarbeitung und serverseitige Rendering-Fähigkeiten, was sie zu einem soliden Beispiel für Full-Stack-Entwicklungsfähigkeiten in einem praktischen, realen Kontext macht.",
    },
    imageUrl: "/images/library.png",
    livePreviewUrl: "https://nodeproject-0ag3.onrender.com",
    liveUrl: "https://nodeproject-0ag3.onrender.com",
    githubUrl: "https://github.com/Florin12er/NodeProject",
    technologies: ["JavaScript", "NodeJS", "Express", "EJS", "MongoDB"],
    tags: ["Javascript", "NodeJS", "Express", "EJS", "MongoDB"],
  },
  {
    id: "9",
    name: {
      en: "Simple Calculator",
      de: "Einfache Rechner",
    },
    description: {
      en: "This is a very simple calculator built with HTML, CSS and JavaScript.",
      de: "Dies ist eine sehr einfache Rechner gebaut mit HTML, CSS und JavaScript.",
    },
    longDescription: {
      en: "This project is a sleek, web-based calculator application that performs basic arithmetic operations. Built with HTML, CSS, and JavaScript, it features a clean, user-friendly interface with responsive design. The calculator handles standard calculations, includes error handling for division by zero, and offers a clear function for ease of use. It demonstrates fundamental web development skills and attention to user experience.",
      de: "Dieses Projekt ist eine elegante, webbasierte Rechneranwendung, die grundlegende arithmetische Operationen durchführt. Es wurde mit HTML, CSS und JavaScript erstellt und verfügt über eine saubere, benutzerfreundliche Oberfläche mit responsivem Design. Der Rechner führt Standardberechnungen durch, enthält eine Fehlerbehandlung für die Division durch Null und bietet eine übersichtliche Funktion für eine einfache Bedienung. Er demonstriert grundlegende Webentwicklungsfähigkeiten und Aufmerksamkeit für die Benutzererfahrung.",
    },
    imageUrl: "/images/calculator.png",
    livePreviewUrl: "https://sebastian-calculator.netlify.app",
    liveUrl: "https://sebastian-calculator.netlify.app",
    githubUrl: "https://github.com/Florin12er/calculator2",
    technologies: ["JavaScript", "HTML", "CSS"],
    tags: ["Javascript", "HTML", "CSS"],
  },
  {
    id: "10",
    name: {
      en: "Authentication system for web apps",
      de: "Authentifizierungssystem für Web-Apps",
    },
    description: {
      en: "Authentication system with good security",
      de: "Authentifizierungssystem mit guter Sicherheit",
    },
    longDescription: {
      en: "This project is authenticatin system with good security build for web apps with NextAuth, it has the ability to login , register, Oauth authentication, email verfication, 2 factor authentication and settings",
      de: "Dieses Projekt ist ein Authentifizierungssystem mit guter Sicherheit für Web-Apps mit NextAuth, es hat die Fähigkeit, sich anzumelden, zu registrieren, OAuth-Authentifizierung zu ermöglichen, E-Mail-Bestätigung, 2-Faktor-Authentifizierung und Einstellungen",
    },
    imageUrl: "/images/authentication.png",
    livePreviewUrl: "https://nextauth-pi-six.vercel.app",
    liveUrl: "https://nextauth-pi-six.vercel.app",
    githubUrl: "https://github.com/Florin12er/nextauth",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
  },
  {
    id: "3",
    name: {
      en: "Draw App",
      de: "Zeichen-App",
    },
    description: {
      en: "An simple board where you can draw and insert geometric shapes",
      de: "Eine einfache Tafel, auf der Sie geometrische Formen zeichnen und einfügen können",
    },
    longDescription: {
      en: "An simple board where you can draw with an pen and insert geometric shapes, Build with Next.js and CodeBlocks and also with the help of an Youtuber called Code with antonio",
      de: "Ein einfaches Board, auf dem man mit einem Stift zeichnen und geometrische Formen einfügen kann, gebaut mit Next.js und CodeBlocks und auch mit Hilfe eines Youtubers namens Code with antonio",
    },
    imageUrl: "/images/Draw.png",
    livePreviewUrl: "",
    liveUrl: "https://drawapp-alpha.vercel.app",
    githubUrl: "https://github.com/Florin12er/drawapp",
    technologies: ["React", "Next.js", "Typescript", "Prisma"],
    tags: ["Next.js", "React", "Typescript", "Prisma"],
  },
];
