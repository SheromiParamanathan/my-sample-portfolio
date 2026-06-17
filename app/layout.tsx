import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Sheromi Paramanathan — Software Engineer",
  description:
    "I engineer resilient backend architectures, optimize scaling data pipelines, and deploy high-throughput AI orchestration layers for mission-critical SaaS platforms.",
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
    title: "Sheromi Paramanathan — Backend Systems Engineer",
    description:
      "I engineer resilient backend architectures, optimize scaling data pipelines, and deploy high-throughput AI orchestration layers for mission-critical SaaS platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
