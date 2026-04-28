import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects — Sheromi Paramanathan",
  description:
    "All projects by Sheromi Paramanathan — production systems, AI integrations, and research work.",
};

export default function ProjectsPage() {
  return (
    <SectionWrapper className="pt-32 md:pt-36 pb-28">
      <div className="mb-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-10 group"
        >
          <ArrowLeft size={14} strokeWidth={1.75} className="group-hover:-translate-x-1 transition-transform" />
          Back to home
        </Link>

        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 rounded-full bg-gradient-to-r from-transparent to-[var(--accent)] opacity-80" />
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-[var(--accent)]">All work</p>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[var(--foreground)] leading-[1.08] mb-6">
          Projects
        </h1>
        <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-[var(--muted)]">
          A complete record of production systems, AI integrations, and research projects. Click any project to see the
          full engineering breakdown.
        </p>
      </div>

      <div className="glow-line mb-14" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
