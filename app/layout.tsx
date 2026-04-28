import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Sheromi Paramanathan — Software Engineer",
  description:
    "Associate Software Engineer specialising in Laravel ecosystems, AI/LLM integration, and scalable full-stack web applications. Based in Colombo, Sri Lanka.",
  keywords: [
    "Software Engineer",
    "Laravel",
    "MySQL",
    "OpenAI",
    "Full Stack",
    "Sri Lanka",
    "Sheromi Paramanathan",
  ],
  authors: [{ name: "Sheromi Paramanathan" }],
  openGraph: {
    title: "Sheromi Paramanathan — Software Engineer",
    description:
      "Associate Software Engineer specialising in Laravel, AI/LLM integration, and production-grade web systems.",
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
