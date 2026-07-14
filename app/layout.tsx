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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="relative">
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
