import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Zap, AlertCircle } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { SectionWrapper } from "@/components/SectionWrapper";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Sheromi Paramanathan`,
    description: project.description,
  };
}

const statusColors: Record<string, string> = {
  production: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "in-progress": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  archived: "text-slate-400 bg-slate-400/10 border-slate-400/20",
};

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <SectionWrapper className="pt-32 md:pt-36 pb-28">
      {/* Back nav */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-mono text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-12 md:mb-14 group"
      >
        <ArrowLeft size={14} strokeWidth={1.75} className="group-hover:-translate-x-1 transition-transform" />
        All projects
      </Link>

      {/* Header */}
      <div className="mb-16">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span
            className={`text-xs font-mono px-3 py-1 rounded-full border ${statusColors[project.status]}`}
          >
            {project.status}
          </span>
          {project.featured && (
            <span
              className="text-xs font-mono px-3 py-1 rounded-full border"
              style={{
                color: "var(--accent)",
                borderColor: "var(--border)",
                backgroundColor: "rgba(124, 106, 247, 0.08)",
              }}
            >
              Featured
            </span>
          )}
        </div>

        <h1
          className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
          style={{ color: "var(--foreground)" }}
        >
          {project.title}
        </h1>

        <p className="text-xl max-w-2xl leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-3 py-1.5 rounded-md border"
              style={{
                color: "var(--foreground)",
                borderColor: "var(--border)",
                backgroundColor: "var(--card)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA links */}
        <div className="flex flex-wrap gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2.5 !px-6"
            >
              <ExternalLink size={15} strokeWidth={1.75} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-2.5 !px-6"
            >
              <Github size={15} strokeWidth={1.75} />
              Source Code
            </a>
          )}
        </div>
      </div>

      <div className="glow-line mb-16" />

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-16">
          {/* Overview */}
          <section>
            <h2
              className="text-xl font-display font-semibold mb-6 flex items-center gap-3"
              style={{ color: "var(--foreground)" }}
            >
              <span
                className="w-6 h-6 rounded flex items-center justify-center text-xs font-mono"
                style={{
                  backgroundColor: "rgba(124, 106, 247, 0.15)",
                  color: "var(--accent)",
                }}
              >
                01
              </span>
              Overview
            </h2>
            <p className="leading-relaxed text-lg" style={{ color: "var(--muted)" }}>
              {project.overview}
            </p>
          </section>

          {/* Features */}
          <section>
            <h2
              className="text-xl font-display font-semibold mb-6 flex items-center gap-3"
              style={{ color: "var(--foreground)" }}
            >
              <span
                className="w-6 h-6 rounded flex items-center justify-center text-xs font-mono"
                style={{
                  backgroundColor: "rgba(124, 106, 247, 0.15)",
                  color: "var(--accent)",
                }}
              >
                02
              </span>
              Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2
                    size={16}
                    className="mt-1 shrink-0"
                    style={{ color: "var(--accent-secondary)" }}
                  />
                  <span style={{ color: "var(--muted)" }}>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Engineering Decisions */}
          <section>
            <h2
              className="text-xl font-display font-semibold mb-6 flex items-center gap-3"
              style={{ color: "var(--foreground)" }}
            >
              <span
                className="w-6 h-6 rounded flex items-center justify-center text-xs font-mono"
                style={{
                  backgroundColor: "rgba(124, 106, 247, 0.15)",
                  color: "var(--accent)",
                }}
              >
                03
              </span>
              Engineering Decisions
            </h2>
            <div className="space-y-4">
              {project.engineeringDecisions.map((decision, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl border"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--card)",
                  }}
                >
                  <Zap
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--accent)" }}
                  />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {decision}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges */}
          <section>
            <h2
              className="text-xl font-display font-semibold mb-6 flex items-center gap-3"
              style={{ color: "var(--foreground)" }}
            >
              <span
                className="w-6 h-6 rounded flex items-center justify-center text-xs font-mono"
                style={{
                  backgroundColor: "rgba(124, 106, 247, 0.15)",
                  color: "var(--accent)",
                }}
              >
                04
              </span>
              Challenges & Solutions
            </h2>
            <div className="space-y-6">
              {project.challenges.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border overflow-hidden"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="p-4 border-b flex gap-3 items-start"
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: "rgba(239, 68, 68, 0.04)",
                    }}
                  >
                    <AlertCircle
                      size={15}
                      className="mt-0.5 shrink-0 text-rose-400"
                    />
                    <div>
                      <p
                        className="text-xs font-mono uppercase tracking-wider mb-1 text-rose-400"
                      >
                        Challenge
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                        {item.challenge}
                      </p>
                    </div>
                  </div>
                  <div
                    className="p-4 flex gap-3 items-start"
                    style={{ backgroundColor: "rgba(79, 209, 197, 0.04)" }}
                  >
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--accent-secondary)" }}
                    />
                    <div>
                      <p
                        className="text-xs font-mono uppercase tracking-wider mb-1"
                        style={{ color: "var(--accent-secondary)" }}
                      >
                        Solution
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="p-6 sm:p-7 sticky top-28 surface-card">
            <h3
              className="text-sm font-mono uppercase tracking-widest mb-6"
              style={{ color: "var(--muted)" }}
            >
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded-md border"
                  style={{
                    color: "var(--foreground)",
                    borderColor: "var(--border)",
                    backgroundColor: "rgba(124, 106, 247, 0.06)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="glow-line my-6" />

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full text-sm py-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--foreground)" }}
              >
                <span>Live Demo</span>
                <ExternalLink size={13} style={{ color: "var(--accent)" }} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full text-sm py-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--foreground)" }}
              >
                <span>Source Code</span>
                <Github size={13} style={{ color: "var(--accent)" }} />
              </a>
            )}
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
}
