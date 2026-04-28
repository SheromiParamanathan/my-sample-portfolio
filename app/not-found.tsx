"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[var(--background)]">
      <div className="max-w-4xl text-center relative">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none pointer-events-none">
            <h1 className="font-display font-extrabold text-[clamp(10rem,30vw,24rem)] leading-none text-outline opacity-10">
              404
            </h1>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Lost in the <span className="gradient-text italic">Architecture?</span>
            </h2>
            <p className="text-xl text-[var(--muted)] mb-14 max-w-lg mx-auto font-light leading-relaxed">
              The system could not locate the module you requested. Let&apos;s reconstruct your path back to the core hub.
            </p>
            
            <div className="flex justify-center">
              <Link href="/" className="btn-primary flex items-center gap-3 !px-10 !py-5 text-base shadow-2xl">
                <ArrowLeft size={20} />
                Return to Safety
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative pulse */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-[var(--accent)]/5 rounded-full blur-[100px] animate-pulse" />
         <div className="absolute bottom-1/4 right-1/4 w-[20vw] h-[20vw] bg-[var(--accent-secondary)]/5 rounded-full blur-[80px] animate-pulse delay-700" />
      </div>
    </div>
  );
}
