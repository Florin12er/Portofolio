// app/page.tsx
import { allTechnologies } from "@/data/technologies";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Full-Stack Developer | Problem Solver | Tech Enthusiast
        </p>
      </section>

      {/* About Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a passionate Full-Stack Developer skilled in React, Next.js,
              and TypeScript for building dynamic front-end applications, while
              leveraging Node.js, Express, and databases like MongoDB and SQL
              for back-end development. Proficient in Linux and Bash for
              scripting and automation, I also have experience with Go, Java,
              and Spring, ensuring I can create high-performance applications. I
              thrive on collaboration and continuous learning, always eager to
              explore new technologies and contribute to innovative projects.
            </p>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {allTechnologies.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Link
                key={index}
                href={`/projects?search=${encodeURIComponent(skill.name)}`}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
              >
                <Icon
                  className={`text-4xl mb-2 mx-auto ${skill.color} transition-all duration-300 ${skill.animation}`}
                />
                <span className="text-lg font-medium">{skill.name}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
