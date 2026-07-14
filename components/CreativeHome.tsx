"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Database, Server, Brain, Cpu, GraduationCap, Award, Hexagon } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { certifications } from "@/data/skills";

export function CreativeHome() {
   return (
      <div className="bg-[var(--background)] min-h-screen text-[var(--foreground)] font-body selection:bg-[var(--accent)] selection:text-[var(--background)]">
         {/* 1. PORTFOLIO HERO */}
         <section className="relative overflow-hidden border-b border-[var(--border)] px-6 pb-24 pt-32 md:pt-36 lg:pt-40 scroll-mt-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,var(--foreground)_0.12,transparent),radial-gradient(circle_at_bottom_right,color-mix(in_srgb,var(--foreground)_0.06,transparent))]" />
            <div className="relative mx-auto max-w-6xl">
               <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                  <motion.div
                     initial={{ opacity: 0, y: 24 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                     className="max-w-2xl"
                  >
                     <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)]/80 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--muted)] backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                        Available for select product engineering roles
                     </div>

                     <h1 className="text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl lg:text-7xl">
                        Building resilient backend systems and AI-native products that ship.
                     </h1>

                     <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                        I’m a software engineer focused on production SaaS, backend architecture, and LLM-integrated systems that turn complex requirements into reliable products.
                     </p>

                     <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a href="mailto:sheromi19@gmail.com?subject=Resume%20Request" className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[var(--background)] shadow-[0_10px_30px_-10px_color-mix(in_srgb,var(--foreground)_0.18,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_color-mix(in_srgb,var(--foreground)_0.24,transparent)]">
                           Download Resume
                        </a>
                        <a href="https://github.com/SheromiParamanathan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--foreground)_0.10,transparent)] px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[color-mix(in_srgb,var(--foreground)_0.26,transparent)] hover:bg-[color-mix(in_srgb,var(--foreground)_0.18,transparent)]">
                           GitHub
                        </a>
                        <a href="https://linkedin.com/in/sheromi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--foreground)_0.10,transparent)] px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[color-mix(in_srgb,var(--foreground)_0.26,transparent)] hover:bg-[color-mix(in_srgb,var(--foreground)_0.18,transparent)]">
                           LinkedIn
                        </a>
                     </div>

                     <div className="mt-8 flex flex-wrap gap-2">
                        {['Laravel', 'Python', 'React', 'Next.js', 'OpenAI', 'REST APIs', 'RBAC', 'MySQL'].map((tag) => (
                           <span key={tag} className="rounded-full border border-[var(--border)] bg-[var(--card)]/70 px-3 py-2 text-[11px] font-medium tracking-[0.2em] text-[var(--muted)] uppercase">
                              {tag}
                           </span>
                        ))}
                     </div>

                     <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        {[
                           { label: 'Users Served', value: '500+' },
                           { label: 'Manual Effort Reduced', value: '70%' },
                           { label: 'API Improvement', value: '40%' },
                        ].map((stat) => (
                           <div key={stat.label} className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/70 p-4 backdrop-blur">
                              <div className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">{stat.value}</div>
                              <div className="mt-1 text-sm text-[var(--muted)]">{stat.label}</div>
                           </div>
                        ))}
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: 24 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                     className="relative"
                  >
                     <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)]/80 p-4 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-6">
                        <div className="relative aspect-square overflow-hidden rounded-[24px] border border-[var(--border)] bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--foreground)_0.12,transparent),transparent_55%)]">
                           <Image
                              src="/images/profile-avatar.svg"
                              alt="Portrait illustration of Sheromi Paramanathan"
                              fill
                              priority
                              sizes="(max-width: 768px) 100vw, 40vw"
                              className="object-cover"
                           />
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                           <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)]/90 p-4">
                              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">Focus</div>
                              <div className="mt-2 text-sm font-medium text-[var(--foreground)]">Production SaaS • AI systems • Backend architecture</div>
                           </div>
                           <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)]/90 p-4">
                              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">Location</div>
                              <div className="mt-2 text-sm font-medium text-[var(--foreground)]">Colombo, Sri Lanka</div>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>


         {/* 2. STRICT BENTO GRID (Projects) */}
         <section id="projects" className="py-24 px-6 border-b border-[var(--border)] scroll-mt-28">
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
                  <div className="col-span-12 lg:col-span-8 lg:row-span-2 bento-card group flex flex-col justify-between min-h-[420px] border border-[color-mix(in_srgb,var(--foreground)_0.12,transparent)] bg-[var(--card-hover)] shadow-[0_30px_80px_-40px_color-mix(in_srgb,var(--foreground)_0.12,transparent)] hover:border-[color-mix(in_srgb,var(--foreground)_0.24,transparent)] transition-all duration-500">
                     <div className="flex justify-between items-start mb-12">
                        <div>
                           <div className="flex items-center gap-4 mb-8">
                              <div className="flex items-center gap-2 px-2 py-1 rounded border border-[var(--border)] bg-[var(--background)]">
                                 <Database size={14} className="text-[var(--muted)]" />
                                 <span className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest">Core Infrastructure</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--foreground)]/70">
                                 <div className="w-1 h-1 rounded-full bg-[var(--foreground)]/70 animate-pulse" />
                                 System Active
                              </div>
                           </div>
                           <div className="inline-flex items-center gap-2 mb-4 text-[10px] uppercase tracking-[0.3em] font-mono text-[var(--accent-secondary)]">
                              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                              Featured work
                           </div>
                           <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 group-hover:text-[var(--foreground)] transition-colors">{projects[0].title}</h3>
                           <p className="text-[var(--muted)] max-w-xl leading-relaxed text-sm md:text-base">{projects[0].description}</p>
                        </div>
                        <Link
                           href={`/projects/${projects[0].slug}`}
                           className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-[var(--accent)] border border-[var(--border)] rounded-full px-5 py-3 hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
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
                              <div className="w-1.5 h-1.5 rounded-full bg-[var(--border)] group-hover:bg-[var(--foreground)] transition-colors" />
                              <h3 className="text-lg font-bold tracking-tight group-hover:text-[var(--foreground)] transition-colors">AI News Aggregation</h3>
                           </div>
                           <Link
                              href={`/projects/${projects[1].slug}`}
                              className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--accent)] group-hover:text-[var(--foreground)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
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
                              <div className="w-1.5 h-1.5 rounded-full bg-[var(--border)] group-hover:bg-[var(--foreground)] transition-colors" />
                              <h3 className="text-lg font-bold tracking-tight group-hover:text-[var(--foreground)] transition-colors">LMS Intelligence</h3>
                           </div>
                           <Link
                              href={`/projects/${projects[2].slug}`}
                              className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--accent)] group-hover:text-[var(--foreground)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
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

                  {projects.slice(3, 5).map((p) => (
                     <div key={p.slug} className="col-span-12 md:col-span-6 bento-card group hover:border-[var(--muted)] transition-all duration-500">
                        <div className="flex justify-between items-start mb-10">
                           <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[var(--border)] group-hover:bg-[var(--foreground)] transition-colors" />
                              <h4 className="text-lg font-bold tracking-tight group-hover:text-[var(--foreground)] transition-colors">{p.title}</h4>
                           </div>
                           <Link
                              href={`/projects/${p.slug}`}
                              className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--accent)] group-hover:text-[var(--foreground)] transition-all duration-300"
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
         <section id="experience" className="py-24 px-6 border-b border-[var(--border)] scroll-mt-28">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
               {/* Experience Log */}
               <div>
                  <div className="flex items-center gap-3 mb-12">
                     <div className="w-12 h-px bg-[color-mix(in_srgb,var(--foreground)_0.18,transparent)]" />
                     <h3 className="text-sm font-mono text-[var(--muted)] uppercase tracking-[0.3em]">Engineering Tenure & Impact</h3>
                  </div>

                  <div className="relative space-y-12 pl-8 border-l border-[var(--border)]">
                     {/* Role 1: Software Engineer */}
                     <div className="relative">
                        <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--background)] bg-[var(--border)]" />
                        <div className="mb-6">
                           <span className="text-xs font-mono text-[var(--muted)] mb-2 block">Mar 2026 — May 2026</span>
                           <h4 className="text-2xl font-bold tracking-tight mb-1">Software Engineer</h4>
                           <div className="text-sm font-medium text-[var(--foreground)]/60">Balanita Pvt Ltd, Colombo</div>
                        </div>

                        <div className="space-y-4">
                           <div className="text-sm text-[var(--muted)] leading-relaxed max-w-lg">
                              <p className="mb-3 font-semibold">Core Mandate: Led the design and development of a multi-tenant LMS Intelligence Platform, unifying multiple WordPress LMS environments through custom ETL pipelines and REST APIs to enable centralized cross-organization analytics.</p>
                              <ul className="list-disc list-inside space-y-2">
                                 <li>Led design and development of a multi-tenant LMS Intelligence Platform, unifying multiple WordPress LMS environments through custom ETL pipelines and REST APIs to enable centralized cross-organization analytics.</li>
                                 <li>Built a compliance monitoring engine that flagged at-risk learners and surfaced completion trends via real-time dashboards, giving stakeholders organization-wide visibility into performance for the first time.</li>
                                 <li>Engineered the ETL pipeline architecture (extract, transform, load) for ingesting data from multiple external LMS platforms, enforcing data consistency checks that made downstream analytics reliable.</li>
                              </ul>
                           </div>

                           <div className="flex flex-wrap gap-2">
                              {['Laravel', 'ETL Pipelines', 'REST APIs', 'Dashboards', 'Data Engineering'].map(tag => (
                                 <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded border border-[var(--border)] bg-[var(--card)] text-[var(--muted)]">{tag}</span>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* Role 2: Associate Software Engineer */}
                     <div className="relative">
                        <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--background)] bg-[var(--border)]" />
                        <div className="mb-6">
                           <span className="text-xs font-mono text-[var(--muted)] mb-2 block">Jul 2025 — Mar 2026</span>
                           <h4 className="text-2xl font-bold tracking-tight mb-1">Associate Software Engineer</h4>
                           <div className="text-sm font-medium text-[var(--foreground)]/60">Balanita Pvt Ltd, Colombo</div>
                        </div>

                        <div className="space-y-4">
                           <div className="text-sm text-[var(--muted)] leading-relaxed max-w-lg">
                              <p className="mb-3 font-semibold">Core Mandate: Owned backend architecture for an AI-powered Applicant Tracking System serving 500+ users, designing the LLM-based resume evaluation pipeline and re-architecting core APIs for performance and reliability.</p>
                              <ul className="list-disc list-inside space-y-2">
                                 <li>Owned backend architecture for an AI-powered Applicant Tracking System serving 500+ users; designed the LLM-based resume evaluation pipeline that cut manual screening effort by 70%.</li>
                                 <li>Re-architected core REST APIs applying SOLID principles, targeted database indexing, query optimization, Laravel Queue Workers, and caching - reducing average response time 40% (800ms → 480ms).</li>
                                 <li>Built a news aggregation and content-intelligence system that turned raw web data into structured feeds, using embedding-based semantic deduplication and a multi-LLM orchestration pipeline spanning Perplexity, GPT, Gemini, and Claude.</li>
                                 <li>Developed an LMS pricing calculator that cut quotation preparation time from 30 minutes to 2 minutes, letting Business Analysts and Sales generate accurate cost estimates on demand.</li>
                                 <li>Designed a three-tier RBAC and secure authentication layer underpinning an MVP AI-powered recruitment platform, including a dynamic form engine and automated candidate-ranking model.</li>
                                 <li>Partnered with product and design to compress the feature-delivery cycle from 4 weeks to 2 weeks, shipping production features on a recurring release schedule.</li>
                              </ul>
                           </div>

                           <div className="flex flex-wrap gap-2">
                              {['Laravel', 'MySQL', 'Queue Workers', 'Caching', 'LLM Orchestration'].map(tag => (
                                 <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded border border-[var(--border)] bg-[var(--card)] text-[var(--muted)]">{tag}</span>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* Role 3: Software Engineer Intern */}
                     <div className="relative">
                        <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--background)] bg-[var(--border)]" />
                        <div className="mb-6">
                           <span className="text-xs font-mono text-[var(--muted)] mb-2 block">Jan 2025 — Jul 2025</span>
                           <h4 className="text-2xl font-bold tracking-tight mb-1">Software Engineer Intern</h4>
                           <div className="text-sm font-medium text-[var(--foreground)]/60">Balanita Pvt Ltd, Colombo</div>
                        </div>

                        <div className="space-y-4">
                           <div className="text-sm text-[var(--muted)] leading-relaxed max-w-lg">
                              <p className="mb-3 font-semibold">Core Mandate: Built the MVP of an AI-powered ATS Intelligence System from scratch, covering resume scoring, CV generation, and order workflow, later adopted as the foundation for a platform now serving 500+ users.</p>
                              <ul className="list-disc list-inside space-y-2">
                                 <li>Built the MVP of an AI-powered ATS Intelligence System from scratch - resume scoring, CV generator, and order workflow - later adopted as the foundation for a platform now serving 500+ users.</li>
                                 <li>Diagnosed and fixed critical data-integrity and UI-responsiveness defects in a survey platform, preventing loss of 10,000+ responses and cutting page load time from 8s to 2s.</li>
                                 <li>Triaged and resolved 15+ production issues, improving system stability and reducing user-reported errors.</li>
                              </ul>
                           </div>

                           <div className="flex flex-wrap gap-2">
                              {['PHP', 'Laravel', 'ATS', 'UI Responsiveness', 'Production Support'].map(tag => (
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
                     <div className="w-10 h-px bg-[color-mix(in_srgb,var(--foreground)_0.16,transparent)]" />
                     <h3 className="text-sm font-mono text-[var(--muted)] uppercase tracking-[0.2em]">Validated Credentials</h3>
                  </div>

                  {/* Education: Degree Transcript Style */}
                  <div className="space-y-6 mb-16">
                     <div className="group relative bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 hover:border-[var(--foreground)] transition-colors">
                        <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
                           <div className="flex gap-5">
                              <div className="w-12 h-12 rounded-lg border border-[var(--border)] bg-[var(--background)] flex items-center justify-center shrink-0">
                                 <GraduationCap size={24} className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors" />
                              </div>
                              <div>
                                 <h4 className="text-xl font-bold tracking-tight mb-1">BSc in Computer Science</h4>
                                 <p className="text-sm text-[var(--muted)] mb-4">Eastern University of Sri Lanka</p>
                                 <div className="flex flex-wrap gap-3">
                                    <span className="text-[10px] font-mono px-2 py-1 bg-[var(--background)] border border-[var(--border)] rounded text-[var(--muted)]">Aug 2021 — Dec 2024</span>
                                    <span className="text-[10px] font-mono px-2 py-1 bg-[var(--card)] text-[var(--foreground)] rounded font-bold">GPA: 3.60 / 4.00</span>
                                 </div>
                              </div>
                           </div>
                           <div className="md:text-right">
                              <div className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-1"></div>
                              <div className="text-sm font-bold text-[var(--foreground)]">Second Class Upper</div>
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
                                 <Award size={16} className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors" />
                              </div>
                              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--foreground)]/70">
                                 <div className="w-1 h-1 rounded-full bg-[var(--foreground)]/70" />
                                 Verified
                              </div>
                           </div>
                           <h5 className="text-sm font-bold leading-snug mb-2 group-hover:text-[var(--foreground)] transition-colors">{cert.title}</h5>
                           <p className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-wider">{cert.issuer}</p>
                        </div>
                     ))}
                  </div>
               </div>

            </div>
         </section>

         {/* 4. TECHNICAL INFRASTRUCTURE (RE-DESIGNED) */}
         <section id="skills" className="py-24 px-6 border-b border-[var(--border)] bg-[var(--card)] scroll-mt-28">
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
                     <div className="flex items-center gap-2 text-[var(--foreground)]/70 font-bold">
                        <div className="w-2 h-2 rounded-full bg-[var(--foreground)]/70 animate-pulse" />
                        Nominal
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
                  {/* Systems Infrastructure */}
                  <div className="bg-[var(--background)] p-8 group">
                     <div className="w-10 h-10 rounded-lg border border-[var(--border)] bg-[var(--card)] flex items-center justify-center mb-8 group-hover:border-[var(--foreground)] transition-colors">
                        <Server size={20} className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors" />
                     </div>
                     <h4 className="font-bold mb-6 text-lg tracking-tight">Backend & Systems</h4>
                     <div className="space-y-3">
                        {['PHP', 'Laravel', 'Flask', 'Node.js', 'RESTful API Development', 'Authentication & Authorization (RBAC)', 'MVC Architecture', 'Service-Oriented Architecture (SOA)', 'Repository Pattern', 'Laravel Queue Workers', 'SOLID Principles', 'Scalable Backend Systems'].map(skill => (
                           <div key={skill} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                              <div className="w-1 h-1 rounded-full bg-[var(--border)] group-hover:bg-[var(--foreground)] transition-colors" />
                              {skill}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Data Layer */}
                  <div className="bg-[var(--background)] p-8 group">
                     <div className="w-10 h-10 rounded-lg border border-[var(--border)] bg-[var(--card)] flex items-center justify-center mb-8 group-hover:border-[var(--foreground)] transition-colors">
                        <Database size={20} className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors" />
                     </div>
                     <h4 className="font-bold mb-6 text-lg tracking-tight">Data & Databases</h4>
                     <div className="space-y-3">
                        {['MySQL', 'Schema Design', 'Query Optimization', 'Indexing', 'Relational & Multi-tenant Schema Design', 'ETL Pipelines', 'Data Normalization', 'Caching Strategies', 'Workflow Orchestration'].map(skill => (
                           <div key={skill} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                              <div className="w-1 h-1 rounded-full bg-[var(--border)] group-hover:bg-[var(--foreground)] transition-colors" />
                              {skill}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Intelligence */}
                  <div className="bg-[var(--background)] p-8 group">
                     <div className="w-10 h-10 rounded-lg border border-[var(--border)] bg-[var(--card)] flex items-center justify-center mb-8 group-hover:border-[var(--foreground)] transition-colors">
                        <Brain size={20} className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors" />
                     </div>
                     <h4 className="font-bold mb-6 text-lg tracking-tight">AI & ML</h4>
                     <div className="space-y-3">
                        {['LLM Integration', 'OpenAI API', 'Embeddings', 'Vector Search', 'Semantic Similarity', 'Multi-LLM Orchestration', 'Prompt Engineering', 'OCR Processing'].map(skill => (
                           <div key={skill} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                              <div className="w-1 h-1 rounded-full bg-[var(--border)] group-hover:bg-[var(--foreground)] transition-colors" />
                              {skill}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Frontend & Ops */}
                  <div className="bg-[var(--background)] p-8 group">
                     <div className="w-10 h-10 rounded-lg border border-[var(--border)] bg-[var(--card)] flex items-center justify-center mb-8 group-hover:border-[var(--foreground)] transition-colors">
                        <Cpu size={20} className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors" />
                     </div>
                     <h4 className="font-bold mb-6 text-lg tracking-tight">Frontend, Tools & Delivery</h4>
                     <div className="space-y-3">
                        {['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'HTML/CSS/JS (Strong)', 'Vue.js (Foundational)', 'Git/GitHub', 'Postman', 'Apache JMeter', 'API Testing', 'Unit Testing', 'Integration Testing', 'Agile/Scrum', 'Code Reviews', 'cPanel', 'xCloud'].map(skill => (
                           <div key={skill} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                              <div className="w-1 h-1 rounded-full bg-[var(--border)] group-hover:bg-[var(--foreground)] transition-colors" />
                              {skill}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 5. FINAL CTA & FOOTER */}
         <footer id="contact" className="pt-24 pb-12 px-6 border-t border-[var(--border)] scroll-mt-28">
            <div className="max-w-7xl mx-auto">
               {/* Bold CTA Part */}
               <div className="mb-24">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-4xl leading-none">
                     Ready to engineer the <br />
                     next production system?
                  </h2>
                  <div className="flex flex-wrap gap-4">
                     <a href="mailto:sheromi19@gmail.com" className="bg-[var(--card)] text-[var(--foreground)] px-8 py-4 rounded-md font-bold text-sm hover:bg-[var(--card-hover)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
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
                        <li><a href="#projects" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Deployments</a></li>
                        <li><a href="#experience" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Career Log</a></li>
                        <li><a href="#skills" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Infrastructure</a></li>
                     </ul>
                  </div>

                  <div>
                     <div className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-6">Social Nodes</div>
                     <ul className="space-y-3 text-sm">
                        <li><a href="https://github.com/SheromiParamanathan" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">GitHub Repository</a></li>
                        <li><a href="https://linkedin.com/in/sheromi" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">LinkedIn Profile</a></li>
                        <li><a href="mailto:sheromi19@gmail.com" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Email</a></li>
                     </ul>
                  </div>

                  <div>
                     <div className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-6">System Info</div>
                     <ul className="space-y-3 text-sm text-[var(--muted)]">
                        <li className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/70" />
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

