"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { label: "Deployments", href: "#projects" },
  { label: "Career", href: "#experience" },
  { label: "Infrastructure", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="hidden lg:inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[10px] font-mono font-black uppercase tracking-widest text-[var(--foreground)] hover:bg-[var(--card-hover)] transition-all duration-300"
    >
      {isLight ? <Moon size={14} /> : <Sun size={14} />}
      {isLight ? "Dark" : "Light"}
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["projects", "experience", "skills", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      setActive(current ? `#${current}` : "");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6",
          scrolled ? "pt-4" : "pt-8"
        )}
      >
        <div 
          className={clsx(
            "max-w-5xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4 h-14 md:h-16 rounded-2xl transition-all duration-500 border backdrop-blur-xl",
            scrolled 
              ? "bg-[var(--header-bg)] border-[var(--header-border)] shadow-2xl scale-[0.98] md:scale-100" 
              : "bg-transparent border-transparent"
          )}
        >
          {/* Technical Signature Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
               <span className="text-[var(--background)] font-black text-xs tracking-tighter">SP</span>
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
               <div className="text-[10px] font-mono font-bold text-[var(--foreground)] tracking-widest">Sheromi Paramanathan</div>
               <div className="text-[8px] uppercase tracking-[0.3em] text-[var(--muted)]">Backend Software Engineer</div>
            </div>
          </Link>

          {/* Floating Nav Nodes */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace("/#", "#");
              const isActive = active === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "relative text-[11px] font-mono font-bold uppercase tracking-widest px-4 py-2 transition-all duration-300",
                    isActive
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 border-b-2 border-[var(--foreground)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          <ThemeToggle />
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg border border-[var(--border)] bg-white/5"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>

            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 bg-[var(--accent)] text-[var(--background)] text-[10px] font-mono font-black uppercase tracking-widest px-5 py-2.5 rounded hover:opacity-90 transition-all duration-300"
            >
              Hire Me <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Command Center Overlay */}
      {open && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          className="fixed inset-0 z-40 md:hidden bg-[var(--background)]/90 flex flex-col items-center justify-center p-8"
        >
          <div className="w-full max-w-xs space-y-2">
             <div className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-[0.3em] mb-8 text-center">System Navigation</div>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-3xl font-bold tracking-tighter text-[var(--foreground)] hover:text-[var(--muted)] transition-colors py-4 border-b border-[var(--border)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full mt-12 bg-[var(--accent)] text-[var(--background)] font-black uppercase tracking-widest py-5 rounded-xl hover:opacity-90 transition-all"
            >
              Hire Me <ArrowUpRight size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
