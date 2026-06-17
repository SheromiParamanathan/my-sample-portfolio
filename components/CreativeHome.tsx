"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useMemo } from "react";
import { ArrowUpRight, Mail, Linkedin, Github, Server, Brain, Monitor, Wrench, Award, GraduationCap, Briefcase, Plus, Copy, Check, Hexagon, Cpu, Database, Activity } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { projects } from "@/data/projects";
import { skills, certifications } from "@/data/skills";
import { Magnetic } from "./Magnetic";
import { SectionWrapper } from "./SectionWrapper";

const colorBands = [
   { bg: "#6366f1", ink: "#ffffff" }, // Indigo
   { bg: "#E8E2D3", ink: "#111111" }, // Parchment
   { bg: "#10b981", ink: "#ffffff" }, // Emerald 
   { bg: "#f43f5e", ink: "#ffffff" }, // Rose
   { bg: "#3b82f6", ink: "#ffffff" }, // Blue
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
         <section className="relative pt-32 pb-24 px-6 border-b border-[var(--border)] overflow-hidden min-h-[85vh] flex flex-col justify-center">
            {/* Expert Visual: Light Beam/Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full pointer-events-none opacity-40">
               <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[120%] bg-[radial-gradient(ellipse_at_top,var(--glow-color)_0%,transparent_70%)]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
               <div className="grid lg:grid-cols-12 gap-12 items-center">
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                     className="lg:col-span-8"
                  >
                     <div className="flex items-center gap-3 mb-8">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-glass)] text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--foreground)]">
                           <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                           Software Engineer
                        </div>
                        <div className="h-px w-8 bg-[var(--border)]" />
                        <span className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest">Colombo Instance / UTC +05:30</span>
                     </div>

                     <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-[var(--foreground)] gradient-text">
                        Engineering <br />
                        High-Integrity <br />
                        Intelligence Systems.
                     </h1>

                     <p className="text-[var(--muted)] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light">
                        Software Engineer specializing in <span className="text-[var(--foreground)] font-medium">Distributed Laravel Ecosystems</span> and <span className="text-[var(--foreground)] font-medium">Production-Grade AI Orchestration</span>. Focused on high-performance infrastructure and automated intelligence.
                     </p>

                     <div className="flex flex-wrap items-center gap-5">
                        <a href="#projects" className="bg-white text-black px-8 py-4 rounded-md font-bold text-sm hover:bg-neutral-200 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                           View Deployments
                        </a>
                        <a href="/resume.pdf" target="_blank" className="px-8 py-4 rounded-md font-bold text-sm border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--card-hover)] transition-all duration-300 flex items-center gap-2 group">
                           Resume <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                     </div>
                  </motion.div>

                  {/* Desktop Only: System Meta Card */}
                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="hidden lg:block lg:col-span-4"
                  >
                     <div className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--surface-glass)] backdrop-blur-md relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-5">
                           <Activity size={14} className="text-[var(--muted)] opacity-30 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="space-y-8">
                           <div>
                              <div className="text-[9px] font-mono text-[var(--muted)] uppercase tracking-[0.2em] mb-4">Core Competencies</div>
                              <div className="flex flex-wrap gap-2.5">
                                 {["Distributed PHP", "AI Orchestration", "Vector Ops", "ETL Systems"].map(t => (
                                    <span key={t} className="text-[10px] font-mono px-2.5 py-1 border border-[var(--border)] rounded bg-white/5 text-white/90">{t}</span>
                                 ))}
                              </div>
                           </div>
                           <div>
                              <div className="text-[9px] font-mono text-[var(--muted)] uppercase tracking-[0.2em] mb-3">Operational Status</div>
                              <div className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                 <div className="text-sm font-bold text-[var(--foreground)]">Available for High-Impact Projects</div>
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
                  <Link href="/projects" className="text-sm border-b border-transparent hover:border-[var(--muted)] text-[var(--muted)] transition-colors pb-1">
                     View all deployments →
                  </Link>
               </div>

               <div className="bento-grid">
                  {/* Main Project (Hero) */}
                  <div className="col-span-12 lg:col-span-8 lg:row-span-2 bento-card group flex flex-col justify-between min-h-[420px] hover:border-white transition-all duration-500">
                     <div className="flex justify-between items-start mb-12">
                        <div>
                           <div className="flex items-center gap-4 mb-8">
                              <div className="flex items-center gap-2 px-2 py-1 rounded border border-[var(--border)] bg-[var(--background)]">
                                 <Database size={14} className="text-[var(--muted)]" />
                                 <span className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest">Core Infrastructure</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                                 <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                                 System Active
                              </div>
                           </div>
                           <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 group-hover:text-white transition-colors">{projects[0].title}</h3>
                           <p className="text-[var(--muted)] max-w-xl leading-relaxed text-sm md:text-base">{projects[0].description}</p>
                        </div>
                        <Link
                           href={`/projects/${projects[0].slug}`}
                           className="p-4 border border-[var(--border)] rounded-full hover:bg-white hover:text-black transition-all duration-300"
                           aria-label={`View case study for ${projects[0].title}`}
                        >
                           <ArrowUpRight size={22} />
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
                              className="text-[var(--muted)] group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                              aria-label={`View case study for ${projects[1].title}`}
                           >
                              <ArrowUpRight size={18} />
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
                              className="text-[var(--muted)] group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                              aria-label={`View case study for ${projects[2].title}`}
                           >
                              <ArrowUpRight size={18} />
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
                              className="text-[var(--muted)] group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                              aria-label={`View case study for ${p.title}`}
                           >
                              <ArrowUpRight size={20} />
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
                           <span className="text-xs font-mono text-[var(--muted)] mb-2 block">Mar 2025 — Present</span>
                           <h4 className="text-2xl font-bold tracking-tight mb-1">Software Engineer</h4>
                           <div className="text-sm font-medium text-white/60">Balanita Pvt Ltd, Colombo</div>
                        </div>

                        <div className="space-y-4">
                           <p className="text-[var(--muted)] text-sm leading-relaxed max-w-lg">
                              Driving the LMS analytics and reporting project while supporting production-grade AI recruitment ecosystems and scalable Laravel infrastructure.
                           </p>
                           <div className="grid grid-cols-2 gap-4 py-4">
                              <div className="p-4 rounded-lg bg-[var(--card)] border border-[var(--border)]">
                                 <div className="text-[10px] font-mono text-[var(--muted)] mb-1 uppercase">Reporting Automation</div>
                                 <div className="text-lg font-bold text-emerald-400">+55% Insight Velocity</div>
                              </div>
                              <div className="p-4 rounded-lg bg-[var(--card)] border border-[var(--border)]">
                                 <div className="text-[10px] font-mono text-[var(--muted)] mb-1 uppercase">Data Accuracy</div>
                                 <div className="text-lg font-bold text-blue-400">+34% Quality</div>
                              </div>
                           </div>
                           <div className="flex flex-wrap gap-2">
                              {["LMS Analytics", "Laravel", "Reporting", "OpenAI"].map(tag => (
                                 <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--border)] text-[var(--muted)]">{tag}</span>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* Role 2: Associate */}
                     <div className="relative">
                        <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--background)] bg-[var(--border)]" />
                        <div className="mb-6">
                           <span className="text-xs font-mono text-[var(--muted)] mb-2 block">Jul 2025 — Mar 2025</span>
                           <h4 className="text-2xl font-bold tracking-tight mb-1">Associate Software Engineer</h4>
                           <div className="text-sm font-medium text-white/60">Balanita Pvt Ltd, Colombo</div>
                        </div>

                        <div className="space-y-4">
                           <p className="text-[var(--muted)] text-sm leading-relaxed max-w-lg">
                              Led the delivery of production-grade AI recruitment ecosystems, architected new platform modules, and streamlined enterprise workflows for faster feature rollout.
                           </p>
                           <div className="flex flex-wrap gap-2">
                              {["Laravel", "AI Orchestration", "Platform Design", "MySQL Tuning"].map(tag => (
                                 <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--border)] text-[var(--muted)]">{tag}</span>
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
                           <p className="text-[var(--muted)] text-sm leading-relaxed max-w-lg">
                              Implemented core multi-tenant modules and RBAC security for ATS recruitment systems. Delivered production-grade features with minimal supervision.
                           </p>
                           <div className="flex flex-wrap gap-2">
                              {["PHP", "Blade", "RBAC", "ATS Development"].map(tag => (
                                 <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--border)] text-[var(--muted)]">{tag}</span>
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
                                    <span className="text-[10px] font-mono px-2 py-1 bg-white text-black rounded font-bold">GPA: 3.6 / 4.00</span>
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
                              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                                 <div className="w-1 h-1 rounded-full bg-emerald-400" />
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
                     <div className="flex items-center gap-2 text-emerald-400 font-bold">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
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
                     <a href="mailto:sheromi19@gmail.com" className="bg-white text-black px-8 py-4 rounded-md font-bold text-sm hover:bg-neutral-200 transition-colors">
                        Send Message
                     </a>
                     <a href="https://linkedin.com/in/sheromi" target="_blank" className="px-8 py-4 rounded-md font-bold text-sm border border-[var(--border)] hover:bg-[var(--card-hover)] transition-colors">
                        Professional Network
                     </a>
                  </div>
               </div>

               {/* Footer Grid */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-[var(--border)] pt-16 mb-16">
                  <div className="col-span-2 md:col-span-1">
                     <div className="font-bold text-xl tracking-tighter mb-4">Sheromi Paramanathan<span className="text-[var(--muted)]">.</span></div>
                     <p className="text-xs text-[var(--muted)] leading-relaxed">
                        Backend & AI Systems Engineer. <br />
                        Building scalable, high-integrity infrastructure for the next generation of SaaS.
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
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
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

