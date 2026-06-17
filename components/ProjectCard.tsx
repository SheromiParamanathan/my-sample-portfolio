"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusDotClasses: Record<string, string> = {
  production: "bg-emerald-400",
  "in-progress": "bg-amber-300",
  archived: "bg-slate-400",
};

const statusBadgeClasses: Record<string, string> = {
  production: "text-emerald-400 border-emerald-400/20",
  "in-progress": "text-amber-400 border-amber-400/20",
  archived: "text-slate-400 border-slate-400/20",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="group relative flex flex-col rounded-[var(--radius-lg)] surface-card border border-[var(--border)] bg-[var(--card)] overflow-hidden cursor-pointer"
        onMouseMove={(e) => {
          const el = e.currentTarget;
          const r = el.getBoundingClientRect();
          const mx = ((e.clientX - r.left) / r.width) * 100;
          const my = ((e.clientY - r.top) / r.height) * 100;
          el.style.setProperty("--mx", `${mx}%`);
          el.style.setProperty("--my", `${my}%`);
        }}
      >
        <div className="relative h-28 sm:h-32 overflow-hidden border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_90%,var(--card))]">
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 project-card-glow"
            aria-hidden
          />

          <div className="absolute inset-0 flex">
            <div className="w-2/3 p-3 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-[9px] font-mono text-[var(--muted)] mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[color-mix(in_srgb,var(--accent)_30%,transparent)]" />
                <span className="uppercase tracking-[0.18em]">{project.slug}</span>
              </div>
              <div className="space-y-1">
                <div className="h-1 rounded-full bg-[color-mix(in_srgb,var(--accent)_16%,var(--background))] w-4/5" />
                <div className="h-1 rounded-full bg-[color-mix(in_srgb,var(--accent-secondary)_22%,var(--background))] w-3/5" />
                <div className="h-1 rounded-full bg-[color-mix(in_srgb,var(--accent)_10%,var(--background))] w-2/5" />
              </div>
              <div className="mt-1 flex gap-1.5">
                {(project.tech || []).slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-1.5 py-0.5 rounded-md bg-[color-mix(in_srgb,var(--background)_92%,var(--card))] border border-[var(--border)] text-[9px] font-mono text-[var(--muted)] truncate"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-1/3 border-l border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_94%,var(--card))] flex flex-col justify-between p-2.5 text-[9px] font-mono text-[var(--muted)]">
              <div className="flex items-center justify-between mb-1">
                <span>Status</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full border border-[color-mix(in_srgb,var(--accent)_24%,transparent)] text-[8px] capitalize ${statusBadgeClasses[project.status]}`}
                >
                  {project.status}
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-1">
                <div className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  <span className="truncate">deploy: ok</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-amber-300" />
                  <span className="truncate">tests: ~95%</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-sky-400" />
                  <span className="truncate">ai: enabled</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[8px] mt-1">
                <span>view case study</span>
                <ArrowUpRight size={11} className="text-[var(--accent)]" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col h-full p-6 sm:p-7 gap-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <span
                className={`w-2 h-2 rounded-full ring-2 ring-[color-mix(in_srgb,var(--foreground)_12%,transparent)] ${statusDotClasses[project.status]}`}
              />
              <span className="text-xs font-mono capitalize text-[var(--muted)]">{project.status}</span>
            </div>
          </div>

          <h3 className="font-display font-semibold text-xl text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-200">
            <Link
              href={`/projects/${project.slug}`}
              className="relative inline-flex items-center gap-2 after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              aria-label={`View case study for ${project.title}`}
            >
              {project.title}
            </Link>
          </h3>

          <p className="text-sm leading-relaxed flex-1 text-[var(--muted)] line-clamp-3 sm:line-clamp-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg border border-[var(--border)] bg-[color-mix(in_srgb,var(--accent)_6%,var(--background))] text-[var(--muted)]"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-[11px] font-mono px-2.5 py-1 text-[var(--muted)]">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--border)] relative z-10">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent)] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              aria-label={`View full project case study for ${project.title}`}
            >
              Case study
              <ArrowUpRight size={12} />
            </Link>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-mono transition-opacity hover:opacity-80 text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                aria-label={`Open live demo for ${project.title}`}
              >
                <ExternalLink size={12} strokeWidth={1.75} />
                Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-mono transition-opacity hover:opacity-80 text-[var(--muted)] hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                aria-label={`Open source code for ${project.title}`}
              >
                <Github size={12} strokeWidth={1.75} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
