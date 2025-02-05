"use client";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { Section } from "./Section";
import Divider from "@/components/Divider";
import FeaturedBlogs from "./_components/featured-blogs";
import FeaturedProjects from "./_components/featured-projects";
import { HobbyChart } from "./_components/bar-chart";
import { projectsData } from "@/data/projects";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <HeroSection />
      <FeaturedBlogs />
      <Divider />
      <AboutSection />
      <Divider />
      <SkillsSection />
      <Divider />
      <Section>
        <HobbyChart />
        <Divider />
        <FeaturedProjects projects={projectsData} />
      </Section>
    </div>
  );
}
