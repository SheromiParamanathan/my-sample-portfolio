"use client";

import Link from "next/link";
import { useRef, useState, useEffect, useMemo } from "react";
import { ArrowUpRight, Mail, Linkedin, Github, Server, Brain, Monitor, Wrench, Award, GraduationCap, Briefcase, Plus, Copy, Check, Hexagon, Cpu, Database, Activity } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { projects } from "@/data/projects";
import { skills, certifications } from "@/data/skills";
import { Magnetic } from "./Magnetic";
import { SectionWrapper } from "./SectionWrapper";

const colorBands = [
   { bg: "#111111", ink: "#ffffff" }, // Dark
   { bg: "#222222", ink: "#ffffff" }, // Charcoal
   { bg: "#2f2f2f", ink: "#ffffff" }, // Slate
   { bg: "#3f3f3f", ink: "#ffffff" }, // Graphite
   { bg: "#4f4f4f", ink: "#ffffff" }, // Smoke
];

const iconMap: Record<string, React.ReactNode> = {
   server: <Server size={22} strokeWidth={1.5} />,
   brain: <Brain size={22} strokeWidth={1.5} />,
   monitor: <Monitor size={22} strokeWidth={1.5} />,
   wrench: <Wrench size={22} strokeWidth={1.5} />,
};

const categoryStyles: Record<string, { accent: string; bg: string; ring: string }> = {
   Backend: {
      accent: "var(--accent)",
      bg: "color-mix(in srgb, var(--accent) 8%, transparent)",
      ring: "color-mix(in srgb, var(--accent) 20%, transparent)",
   },
   "AI & LLM": {
      accent: "#c084fc", // Purple
      bg: "rgba(192, 132, 252, 0.08)",
      ring: "rgba(192, 132, 252, 0.2)",
   },
   Frontend: {
      accent: "#38bdf8", // Sky
      bg: "rgba(56, 189, 248, 0.08)",
      ring: "rgba(56, 189, 248, 0.2)",
   },
   "Tools & DevOps": {
      accent: "#fbbf24", // Amber
      bg: "rgba(251, 191, 36, 0.08)",
      ring: "rgba(251, 191, 36, 0.2)",
   },
};

const timeline = [
   {
      icon: <Briefcase size={16} strokeWidth={1.5} />,
      period: "Jul 2025 — Present",
      role: "Associate Software Engineer",
      org: "Balanita Pvt Ltd",
      color: "var(--accent)",
   },
   {
      icon: <Briefcase size={16} strokeWidth={1.5} />,
      period: "Jan 2025 — Jul 2025",
      role: "Intern Software Engineer",
      org: "Balanita Pvt Ltd",
      color: "var(--accent-secondary)",
   },
   {
      icon: <GraduationCap size={16} strokeWidth={1.5} />,
      period: "Aug 2021 — Dec 2024",
      role: "BSc in Computer Science",
      org: "Eastern University of Sri Lanka",
      color: "#a78bfa",
   },
];

export function CreativeHome() {
   const reduceMotion = useReducedMotion();
   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

   const [copied, setCopied] = useState(false);
   const featured = projects.slice(0, 4);

   const copyEmail = () => {
      navigator.clipboard.writeText("sheromi19@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
   };

   return (
      <div className="bg-[var(--background)] min-h-screen text-[var(--foreground)] font-body selection:bg-white selection:text-black">
         {/* 1. ENGINEERING HUB HERO (RE-DESIGNED & OPTIMIZED) */}
         <section className="relative pt-32 pb-24 px-6 border-b border-[var(--border)] overflow-hidden min-h-[90vh] flex flex-col justify-center">
            <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none opacity-30">
               <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_55%)]" />
            </div>
            <div className="absolute right-[-12%] top-20 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-white/15 via-transparent to-slate-500/0 blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10 w-full">
               <div className="grid lg:grid-cols-12 gap-12 items-center">
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                     className="lg:col-span-7"
                  >
                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
                           <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.35)]" />
                           SaaS-grade systems engineering
                        </div>
                        <div className="text-[10px] font-mono uppercase tracking-[0.26em] text-[var(--muted)]">Trusted by mission-critical platforms</div>
                     </div>

                     <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                        Enterprise-grade backend infrastructure for <span className="text-white/90">AI-first platforms</span>
                     </h1>

                     <p className="text-xl text-slate-300 max-w-2xl mt-6 leading-9">
                        I design, deploy, and operate resilient production systems with automated AI orchestration, real-time event workflows, and observability built for scale, compliance, and low-latency operations.
                     </p>

                     <div className="mt-10 flex flex-wrap items-center gap-4">
                        <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-[0_24px_80px_-40px_rgba(255,255,255,0.55)] transition duration-300 hover:bg-slate-100 hover:-translate-y-0.5">
                           Explore Deployments
                        </a>
                        <a href="/resume.pdf" target="_blank" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white/30 hover:bg-white/10">
                           Download Resume
                        </a>
                     </div>

                     <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {[
                           { label: "Uptime", value: "99.99%", detail: "Production SLA-ready" },
                           { label: "Events", value: "100M+", detail: "Processed daily" },
                           { label: "Orchestration", value: "AI + ETL", detail: "Automated workflows" }
                        ].map((item) => (
                           <div key={item.label} className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-4">
                              <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">{item.label}</div>
                              <div className="mt-3 text-2xl font-semibold text-white">{item.value}</div>
                              <div className="mt-1 text-sm text-[var(--muted)]">{item.detail}</div>
                           </div>
                        ))}
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="hidden lg:block lg:col-span-5"
                  >
                     <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[rgba(255,255,255,0.05)] p-8 shadow-[0_40px_100px_-50px_rgba(16,185,129,0.35)] backdrop-blur-xl">
                        <div className="absolute -top-10 -right-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                        <div className="relative space-y-8">
                           <div className="flex items-center gap-4">
                              <div className="grid h-12 w-12 place-items-center rounded-3xl bg-white/5 border border-white/10">
                                 <Activity size={20} className="text-white/60" />
                              </div>
                              <div>
                                 <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">Live platform overview</p>
                                 <h3 className="text-xl font-semibold text-white">Production operations</h3>
                              </div>
                           </div>

                           <div className="rounded-[32px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
                              <div className="flex justify-between items-center text-[var(--muted)] text-xs uppercase tracking-[0.28em] mb-5">
                                 <span>System health</span>
                                 <span>Realtime</span>
                              </div>
                              <div className="space-y-4">
                                 {[
                                    { label: "Uptime", value: "99.99%" },
                                    { label: "Latency", value: "< 85ms" },
                                    { label: "Active flows", value: "24" }
                                 ].map((item) => (
                                    <div key={item.label} className="flex items-center justify-between text-sm">
                                       <span className="text-[var(--muted)]">{item.label}</span>
                                       <span className="font-semibold text-white">{item.value}</span>
                                    </div>
                                 ))}
                              </div>
                           </div>

                           <div className="rounded-[32px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
                              <div className="text-[13px] font-medium text-white mb-4">Platform capabilities</div>
                              <div className="grid gap-3">
                                 {[
                                    "AI Orchestration",
                                    "Distributed APIs",
                                    "Event-driven ETL"
                                 ].map((label) => (
                                    <div key={label} className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-[var(--muted)]">
                                       <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
                                       {label}
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>


         {/* 2. STRICT BENTO GRID (Projects) */}
         <section id="projects" className="py-24 px-6 border-b border-[var(--border)]">
            <div className="max-w-7xl mx-auto">
               <div className="flex items-end justify-between mb-12">
                  <div>
                     <h2 className="text-3xl font-bold tracking-tight mb-2">Production Deployments</h2>
                     <p className="text-[var(--muted)]">High-impact systems engineered for scale.</p>
                  </div>
                  <Link href="/projects" className="text-sm border-b border-transparent hover:border-[var(--muted)] text-[var(--muted)] transition-colors pb-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
                     View all deployments →
                  </Link>
               </div>

               <div className="bento-grid">
                  {/* Main Project (Hero) */}
                  <div className="col-span-12 lg:col-span-8 lg:row-span-2 bento-card group flex flex-col justify-between min-h-[420px] border border-white/10 bg-[var(--card-hover)] shadow-[0_30px_80px_-40px_rgba(255,255,255,0.25)] hover:border-white transition-all duration-500">
                     <div className="flex justify-between items-start mb-12">
                        <div>
                           <div className="flex items-center gap-4 mb-8">
                              <div className="flex items-center gap-2 px-2 py-1 rounded border border-[var(--border)] bg-[var(--background)]">
                                 <Database size={14} className="text-[var(--muted)]" />
                                 <span className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest">Core Infrastructure</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/70">
                                 <div className="w-1 h-1 rounded-full bg-white/70 animate-pulse" />
                                 System Active
                              </div>
                           </div>
                           <div className="inline-flex items-center gap-2 mb-4 text-[10px] uppercase tracking-[0.3em] font-mono text-[var(--accent-secondary)]">
                              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                              Featured work
                           </div>
                           <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 group-hover:text-white transition-colors">{projects[0].title}</h3>
                           <p className="text-[var(--muted)] max-w-xl leading-relaxed text-sm md:text-base">{projects[0].description}</p>
                        </div>
                        <Link
                           href={`/projects/${projects[0].slug}`}
                           className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-[var(--accent)] border border-[var(--border)] rounded-full px-5 py-3 hover:bg-[var(--accent)] hover:text-black transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                           aria-label={`View case study for ${projects[0].title}`}
                        >
                           Case study
                           <ArrowUpRight size={18} />
                        </Link>
                     </div>

                     <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden mt-auto">
                        {[
                           { label: "EFFORT REDUCTION", val: "70%" },
                           { label: "API PERFORMANCE", val: "+40%" },
                           { label: "AVAILABILITY", val: "99.9%" },
                           { label: "ARCHITECTURE", val: "N-Tier" }
                        ].map(stat => (
                           <div key={stat.label} className="bg-[var(--background)] p-5">
                              <div className="text-[9px] font-mono text-[var(--muted)] mb-3 uppercase tracking-widest">{stat.label}</div>
                              <div className="text-xl font-bold tracking-tight">{stat.val}</div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Secondary Project (AI News) */}
                  <div className="col-span-12 lg:col-span-4 bento-card group flex flex-col justify-between hover:border-[var(--muted)] transition-all duration-500">
                     <div>
                        <div className="flex justify-between items-start mb-6">
                           <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[var(--border)] group-hover:bg-white transition-colors" />
                              <h3 className="text-lg font-bold tracking-tight group-hover:text-white transition-colors">AI News Aggregation</h3>
                           </div>
                           <Link
                              href={`/projects/${projects[1].slug}`}
                              className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--accent)] group-hover:text-white transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                              aria-label={`View case study for ${projects[1].title}`}
                           >
                              View project
                              <ArrowUpRight size={14} />
                           </Link>
                        </div>
                        <p className="text-[var(--muted)] text-xs leading-relaxed mb-6 line-clamp-3">{projects[1].description}</p>
                     </div>
                     <div className="flex flex-wrap gap-2">
                        {projects[1].tech?.slice(0, 2).map(t => (
                           <span key={t} className="text-[9px] font-mono text-[var(--muted)] flex items-center gap-1.5 italic">
                              <span className="text-[var(--border)]">/</span>{t}
                           </span>
                        ))}
                     </div>
                  </div>

                  {/* LMS Intelligence Project (NEW) */}
                  <div className="col-span-12 lg:col-span-4 bento-card group flex flex-col justify-between hover:border-[var(--muted)] transition-all duration-500">
                     <div>
                        <div className="flex justify-between items-start mb-6">
                           <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[var(--border)] group-hover:bg-white transition-colors" />
                              <h3 className="text-lg font-bold tracking-tight group-hover:text-white transition-colors">LMS Intelligence</h3>
                           </div>
                           <Link
                              href={`/projects/${projects[2].slug}`}
                              className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--accent)] group-hover:text-white transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                              aria-label={`View case study for ${projects[2].title}`}
                           >
                              View project
                              <ArrowUpRight size={14} />
                           </Link>
                        </div>
                        <p className="text-[var(--muted)] text-xs leading-relaxed mb-6 line-clamp-3">{projects[2].description}</p>
                     </div>
                     <div className="flex flex-wrap gap-2">
                        {projects[2].tech?.slice(0, 2).map(t => (
                           <span key={t} className="text-[9px] font-mono text-[var(--muted)] flex items-center gap-1.5 italic">
                              <span className="text-[var(--border)]">/</span>{t}
                           </span>
                        ))}
                     </div>
                  </div>

                  {/* Additional Projects (Yoga & ESS) */}
                  {projects.slice(3, 5).map((p, i) => (
                     <div key={p.slug} className="col-span-12 md:col-span-6 bento-card group hover:border-[var(--muted)] transition-all duration-500">
                        <div className="flex justify-between items-start mb-10">
                           <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[var(--border)] group-hover:bg-white transition-colors" />
                              <h4 className="text-lg font-bold tracking-tight group-hover:text-white transition-colors">{p.title}</h4>
                           </div>
                           <Link
                              href={`/projects/${p.slug}`}
                              className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--accent)] group-hover:text-white transition-all duration-300"
                              aria-label={`View case study for ${p.title}`}
                           >
                              View project
                              <ArrowUpRight size={16} />
                           </Link>
                        </div>
                        <p className="text-[var(--muted)] text-sm leading-relaxed mb-8 line-clamp-2">{p.description}</p>
                        <div className="flex flex-wrap gap-3">
                           {p.tech?.slice(0, 3).map(t => (
                              <span key={t} className="text-[10px] font-mono text-[var(--muted)] flex items-center gap-1.5 italic">
                                 <span className="text-[var(--border)]">/</span>{t}
                              </span>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>


            </div>
         </section>

         {/* 3. CAREER LOG (RE-DESIGNED) */}
         <section id="experience" className="py-24 px-6 border-b border-[var(--border)]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
               {/* Experience Log */}
               <div>
                  <div className="flex items-center gap-3 mb-12">
                     <div className="w-12 h-px bg-white/20" />
                     <h3 className="text-sm font-mono text-white/80 uppercase tracking-[0.3em]">Engineering Tenure & Impact</h3>
                  </div>

                  <div className="relative space-y-12 pl-8 border-l border-[var(--border)]">
                     {/* Role 1: Software Engineer */}
                     <div className="relative">
                        <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--background)] bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                        <div className="mb-6">
                           <span className="text-xs font-mono text-[var(--muted)] mb-2 block">Mar 2026 — Present</span>
                           <h4 className="text-2xl font-bold tracking-tight mb-1">Software Engineer</h4>
                           <div className="text-sm font-medium text-white/60">Balanita Pvt Ltd, Colombo</div>
                        </div>

                        <div className="space-y-4">
                           <div className="text-sm text-[var(--muted)] leading-relaxed max-w-lg">
                              <p className="mb-3 font-semibold">Core Mandate: Owning the architectural design of scaling analytics reporting engines and integrating high-throughput LLM pipelines into core SaaS layers.</p>
                              <ul className="list-disc list-inside space-y-2">
                                 <li>Accelerated data insight processing speeds by <strong>55%</strong> via query plan optimization, targeted Redis indexing, and decoupled payload workers.</li>
                                 <li>Raised localized system data precision parameters by <strong>34%</strong> through formal automation validation scripts.</li>
                              </ul>
                           </div>

                           <div className="flex flex-wrap gap-2">
                              {['Laravel', 'MySQL', 'OpenAI Core', 'Redis Queues', 'Enterprise Design Patterns'].map(tag => (
                                 <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded border border-[var(--border)] bg-[var(--card)] text-[var(--muted)]">{tag}</span>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* Role 2: Associate */}
                     <div className="relative">
                        <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--background)] bg-[var(--border)]" />
                        <div className="mb-6">
                           <span className="text-xs font-mono text-[var(--muted)] mb-2 block">Jul 2025 — Mar 2026</span>
                           <h4 className="text-2xl font-bold tracking-tight mb-1">Associate Software Engineer</h4>
                           <div className="text-sm font-medium text-white/60">Balanita Pvt Ltd, Colombo</div>
                        </div>

                        <div className="space-y-4">
                           <div className="text-sm text-[var(--muted)] leading-relaxed max-w-lg">
                              <p className="mb-3 font-semibold">Core Mandate: Spearheaded feature delivery modules for enterprise AI-assisted recruitment ecosystems and handled automated data ingestion layers.</p>
                              <ul className="list-disc list-inside space-y-2">
                                 <li>Scaled core API backend handling to improve response throughput by <strong>40%</strong> during peak application surges.</li>
                                 <li>Directed platform refactoring to isolate asynchronous tasks, preserving an aggregate <strong>99.9% uptime metric</strong>.</li>
                              </ul>
                           </div>

                           <div className="flex flex-wrap gap-2">
                              {['Distributed PHP', 'AI Orchestration', 'Vector Ops', 'Database Tuning'].map(tag => (
                                 <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded border border-[var(--border)] bg-[var(--card)] text-[var(--muted)]">{tag}</span>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* Role 3: Intern */}
                     <div className="relative">
                        <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--background)] bg-[var(--border)]" />
                        <div className="mb-6">
                           <span className="text-xs font-mono text-[var(--muted)] mb-2 block">Jan 2025 — Jul 2025</span>
                           <h4 className="text-2xl font-bold tracking-tight mb-1">Intern Software Engineer</h4>
                           <div className="text-sm font-medium text-white/60">Balanita Pvt Ltd, Colombo</div>
                        </div>

                        <div className="space-y-4">
                           <div className="text-sm text-[var(--muted)] leading-relaxed max-w-lg">
                              <p className="mb-3 font-semibold">Core Mandate: Implemented isolated multi-tenant architecture logic and Role-Based Access Control (RBAC) layers for corporate applicant tracking engines.</p>
                              <ul className="list-disc list-inside space-y-2">
                                 <li>Shipped functional backend validation code and security protocols with minimal senior engineering overhead.</li>
                                 <li>Formulated baseline normalized database schemas to handle multi-client separation logic natively.</li>
                              </ul>
                           </div>

                           <div className="flex flex-wrap gap-2">
                              {['PHP Core', 'Laravel Blade', 'RBAC Mechanics', 'Relational Database Design'].map(tag => (
                                 <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded border border-[var(--border)] bg-[var(--card)] text-[var(--muted)]">{tag}</span>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Validated Credentials Log */}
               <div className="lg:pt-0 pt-20">
                  <div className="flex items-center gap-3 mb-12">
                     <div className="w-10 h-px bg-[var(--border)]" />
                     <h3 className="text-sm font-mono text-[var(--muted)] uppercase tracking-[0.2em]">Validated Credentials</h3>
                  </div>

                  {/* Education: Degree Transcript Style */}
                  <div className="space-y-6 mb-16">
                     <div className="group relative bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 hover:border-white transition-colors">
                        <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
                           <div className="flex gap-5">
                              <div className="w-12 h-12 rounded-lg border border-[var(--border)] bg-[var(--background)] flex items-center justify-center shrink-0">
                                 <GraduationCap size={24} className="text-[var(--muted)] group-hover:text-white transition-colors" />
                              </div>
                              <div>
                                 <h4 className="text-xl font-bold tracking-tight mb-1">BSc in Computer Science</h4>
                                 <p className="text-sm text-[var(--muted)] mb-4">Eastern University of Sri Lanka</p>
                                 <div className="flex flex-wrap gap-3">
                                    <span className="text-[10px] font-mono px-2 py-1 bg-[var(--background)] border border-[var(--border)] rounded text-[var(--muted)]">Aug 2021 — Dec 2024</span>
                                    <span className="text-[10px] font-mono px-2 py-1 bg-white text-black rounded font-bold">GPA: 3.60 / 4.00</span>
                                 </div>
                              </div>
                           </div>
                           <div className="md:text-right">
                              <div className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-1"></div>
                              <div className="text-sm font-bold text-white">Second Class Upper</div>
                           </div>
                        </div>
                     </div>

                     <div className="group relative bg-[var(--background)] border border-[var(--border)] rounded-xl p-8 hover:border-[var(--muted)] transition-colors border-dashed">
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                           <div className="flex gap-5">
                              <div className="w-12 h-12 rounded-lg border border-[var(--border)] bg-[var(--card)] flex items-center justify-center shrink-0">
                                 <Hexagon size={24} className="text-[var(--muted)]" />
                              </div>
                              <div>
                                 <h4 className="text-lg font-bold tracking-tight mb-1">Advanced Level - Physical Science</h4>
                                 <p className="text-sm text-[var(--muted)]">Vincent Girls High School, Batticaloa</p>
                                 <p className="text-xs text-[var(--muted)] mt-2">Combined Mathematics . Physics</p>
                              </div>
                           </div>
                           <div className="md:text-right">
                              <span className="text-[10px] font-mono px-2 py-1 bg-[var(--card)] border border-[var(--border)] rounded text-[var(--muted)]">2010 — 2018</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Certifications: Credential Badge Style */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {certifications.map(cert => (
                        <div key={cert.title} className="p-5 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:bg-[var(--card)] transition-colors group">
                           <div className="flex items-start justify-between mb-4">
                              <div className="p-2 border border-[var(--border)] rounded-md bg-[var(--card)] group-hover:bg-[var(--background)] transition-colors">
                                 <Award size={16} className="text-[var(--muted)] group-hover:text-white transition-colors" />
                              </div>
                              <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/70">
                                 <div className="w-1 h-1 rounded-full bg-white/70" />
                                 Verified
                              </div>
                           </div>
                           <h5 className="text-sm font-bold leading-snug mb-2 group-hover:text-white transition-colors">{cert.title}</h5>
                           <p className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-wider">{cert.issuer}</p>
                        </div>
                     ))}
                  </div>
               </div>

            </div>
         </section>

         {/* 4. TECHNICAL INFRASTRUCTURE (RE-DESIGNED) */}
         <section id="skills" className="py-24 px-6 border-b border-[var(--border)] bg-[var(--card)]">
            <div className="max-w-7xl mx-auto">
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                  <div className="max-w-2xl">
                     <h3 className="text-3xl font-bold tracking-tight mb-4">Technical Infrastructure</h3>
                     <p className="text-[var(--muted)] leading-relaxed">
                        A comprehensive audit of the core systems, data layers, and intelligence models engineered for production-grade reliability and performance.
                     </p>
                  </div>
                  <div className="text-right hidden md:block">
                     <div className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-2">System Health</div>
                     <div className="flex items-center gap-2 text-white/70 font-bold">
                        <div className="w-2 h-2 rounded-full bg-white/70 animate-pulse" />
                        Nominal
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
                  {/* Systems Infrastructure */}
                  <div className="bg-[var(--background)] p-8 group">
                     <div className="w-10 h-10 rounded-lg border border-[var(--border)] bg-[var(--card)] flex items-center justify-center mb-8 group-hover:border-white transition-colors">
                        <Server size={20} className="text-[var(--muted)] group-hover:text-white transition-colors" />
                     </div>
                     <h4 className="font-bold mb-6 text-lg tracking-tight">Systems & Infra</h4>
                     <div className="space-y-3">
                        {["Distributed PHP (Laravel)", "RESTful Architecture", "Scalable System Design", "Asynchronous Queues", "RBAC & Security"].map(skill => (
                           <div key={skill} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                              <div className="w-1 h-1 rounded-full bg-[var(--border)] group-hover:bg-white transition-colors" />
                              {skill}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Data Layer */}
                  <div className="bg-[var(--background)] p-8 group">
                     <div className="w-10 h-10 rounded-lg border border-[var(--border)] bg-[var(--card)] flex items-center justify-center mb-8 group-hover:border-white transition-colors">
                        <Database size={20} className="text-[var(--muted)] group-hover:text-white transition-colors" />
                     </div>
                     <h4 className="font-bold mb-6 text-lg tracking-tight">Data Persistence</h4>
                     <div className="space-y-3">
                        {["MySQL Optimization", "Schema Engineering", "Database Indexing", "ETL Pipelines", "Data Normalization"].map(skill => (
                           <div key={skill} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                              <div className="w-1 h-1 rounded-full bg-[var(--border)] group-hover:bg-white transition-colors" />
                              {skill}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Intelligence */}
                  <div className="bg-[var(--background)] p-8 group">
                     <div className="w-10 h-10 rounded-lg border border-[var(--border)] bg-[var(--card)] flex items-center justify-center mb-8 group-hover:border-white transition-colors">
                        <Brain size={20} className="text-[var(--muted)] group-hover:text-white transition-colors" />
                     </div>
                     <h4 className="font-bold mb-6 text-lg tracking-tight">Intelligence</h4>
                     <div className="space-y-3">
                        {["LLM Orchestration", "Vector Embeddings", "Semantic Similarity", "Pose Estimation", "TensorFlow/Keras"].map(skill => (
                           <div key={skill} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                              <div className="w-1 h-1 rounded-full bg-[var(--border)] group-hover:bg-white transition-colors" />
                              {skill}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Frontend & Ops */}
                  <div className="bg-[var(--background)] p-8 group">
                     <div className="w-10 h-10 rounded-lg border border-[var(--border)] bg-[var(--card)] flex items-center justify-center mb-8 group-hover:border-white transition-colors">
                        <Cpu size={20} className="text-[var(--muted)] group-hover:text-white transition-colors" />
                     </div>
                     <h4 className="font-bold mb-6 text-lg tracking-tight">Interface & Ops</h4>
                     <div className="space-y-3">
                        {["React / Next.js", "Tailwind Design Sys", "Containerization (Docker)", "CI/CD Implementation", "JMeter Performance"].map(skill => (
                           <div key={skill} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                              <div className="w-1 h-1 rounded-full bg-[var(--border)] group-hover:bg-white transition-colors" />
                              {skill}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 5. FINAL CTA & FOOTER */}
         <footer id="contact" className="pt-24 pb-12 px-6 border-t border-[var(--border)]">
            <div className="max-w-7xl mx-auto">
               {/* Bold CTA Part */}
               <div className="mb-24">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-4xl leading-none">
                     Ready to engineer the <br />
                     next production system?
                  </h2>
                  <div className="flex flex-wrap gap-4">
                     <a href="mailto:sheromi19@gmail.com" className="bg-white text-black px-8 py-4 rounded-md font-bold text-sm hover:bg-neutral-200 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
                        Send Message
                     </a>
                     <a href="https://linkedin.com/in/sheromi" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-md font-bold text-sm border border-[var(--border)] hover:bg-[var(--card-hover)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
                        Professional Network
                     </a>
                  </div>
               </div>

               {/* Footer Grid */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-[var(--border)] pt-16 mb-16">
                  <div className="col-span-2 md:col-span-1">
                     <div className="font-bold text-xl tracking-tighter mb-4">Sheromi Paramanathan<span className="text-[var(--muted)]">.</span></div>
                     <p className="text-xs text-[var(--muted)] leading-relaxed">
                        Software Engineer<br />
                        Backend Systems | AI-Integrated SaaS Systems | Data Intelligence Platforms
                     </p>
                  </div>

                  <div>
                     <div className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-6">Navigation</div>
                     <ul className="space-y-3 text-sm">
                        <li><a href="#projects" className="text-[var(--muted)] hover:text-white transition-colors">Deployments</a></li>
                        <li><a href="#experience" className="text-[var(--muted)] hover:text-white transition-colors">Career Log</a></li>
                        <li><a href="#skills" className="text-[var(--muted)] hover:text-white transition-colors">Infrastructure</a></li>
                     </ul>
                  </div>

                  <div>
                     <div className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-6">Social Nodes</div>
                     <ul className="space-y-3 text-sm">
                        <li><a href="https://github.com/SheromiParamanathan" className="text-[var(--muted)] hover:text-white transition-colors">GitHub Repository</a></li>
                        <li><a href="https://linkedin.com/in/sheromi" className="text-[var(--muted)] hover:text-white transition-colors">LinkedIn Profile</a></li>
                        <li><a href="mailto:sheromi19@gmail.com" className="text-[var(--muted)] hover:text-white transition-colors">Email</a></li>
                     </ul>
                  </div>

                  <div>
                     <div className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-6">System Info</div>
                     <ul className="space-y-3 text-sm text-[var(--muted)]">
                        <li className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                           Colombo, Sri Lanka
                        </li>
                        <li>UTC +05:30</li>
                        <li className="font-mono text-[10px]">PRODUCTION STATUS: NOMINAL</li>
                     </ul>
                  </div>
               </div>

               {/* Bottom Bar */}
               <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[var(--border)] text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest">
                  <div>© 2026 Sheromi Paramanathan. All Rights Reserved.</div>
                  <div className="flex items-center gap-4">
                     <span>Systems Architecture</span>
                     <div className="w-1 h-1 rounded-full bg-[var(--border)]" />
                     <span>Production Deployment</span>
                  </div>
               </div>
            </div>
         </footer>

      </div>
   );
}

