import React from "react";
import Project from "../project/Project";

const projects = [
  {
    number: "01",
    title: "Project Alpha",
    description:
      "A full-stack SaaS platform with real-time collaboration features, built to scale to thousands of users.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    link: "#",
    repo: "#",
    featured: true,
    year: "2024",
  },
  {
    number: "02",
    title: "Design System",
    description:
      "A comprehensive component library and design system used across multiple products, with full Storybook docs.",
    tags: ["React", "Tailwind", "Storybook", "Radix UI"],
    link: "#",
    repo: "#",
    featured: true,
    year: "2024",
  },
  {
    number: "03",
    title: "API Gateway",
    description:
      "High-performance REST & GraphQL API gateway with rate limiting, auth middleware, and observability.",
    tags: ["Node.js", "GraphQL", "Redis", "Docker"],
    link: "#",
    repo: "#",
    featured: false,
    year: "2023",
  },
];

const Projects = () => {
  return (
    <div
      id="work"
      className="flex flex-1 w-full flex-col gap-10 items-center justify-between pb-32 px-16 bg-white dark:bg-black sm:items-start"
    >
      <div className="flex flex-col justify-between mb-20 gap-10">
        <div>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            Work
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            Projects<span className="text-accent">.</span>
          </h2>
        </div>
        <div className="">
            {projects.map((item: any, index: number) => (
                <Project project={item} key={index}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
