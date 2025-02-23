"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { Section } from "./Section";
import Divider from "@/components/Divider";
import FeaturedBlogs from "./_components/featured-blogs";
import FeaturedProjects from "./_components/featured-projects";
import { HobbyChart } from "./_components/bar-chart";
import { getProjects } from "@/lib/project";
import { Loader } from "@/components/ui/loader";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const fetchedProjects = await getProjects();
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

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
        <FeaturedProjects projects={projects} />
      </Section>
    </div>
  );
}
