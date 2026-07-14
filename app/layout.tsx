import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Sheromi Paramanathan | Backend Systems & AI SaaS Engineer",
  description:
    "Senior backend engineer open to backend SaaS roles, specializing in Laravel systems, MySQL optimization, and production-grade AI orchestration.",
  keywords: [
    "Backend Architect",
    "AI Orchestration",
    "Data Pipelines",
    "SaaS Engineering",
    "Laravel",
    "MySQL",
    "OpenAI",
  ],
  authors: [{ name: "Sheromi Paramanathan" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sheromi Paramanathan | Backend Systems & AI SaaS Engineer",
    description:
      "Backend Software Engineer specializing in resilient Laravel systems, MySQL optimization, and production-grade LLM orchestration layers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className="relative">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var migrated=localStorage.getItem('theme_migrated');if(s && !migrated){var newTheme=(s==='dark'?'light':'dark');localStorage.setItem('theme',newTheme);localStorage.setItem('theme_migrated','1');s=newTheme;}if(!s){document.documentElement.classList.add('light');document.documentElement.classList.remove('dark');}else{if(s==='light'){document.documentElement.classList.add('light');document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');}}}catch(e){}})();`,
          }}
        />
        <ThemeProvider>
          <CustomCursor />
          <div className="grain-overlay" aria-hidden="true" />
          <div className="mesh-bg" aria-hidden="true">
            <div className="mesh-grid" />
            <div className="mesh-orb" />
          </div>
          <Navbar />
          <main className="relative z-10 transition-all duration-700">
             <PageTransition>
               {children}
             </PageTransition>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
