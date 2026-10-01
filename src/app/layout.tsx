import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechSpace BuildLab '26 — Learn by Building",
  description:
    "Official website for TechSpace BuildLab '26 — a three-week, mentor-supported, project-based learning competition by TechSpace, SRM University, Sonepat. 5 October – 23 October 2026.",
  keywords: [
    "TechSpace",
    "BuildLab",
    "BuildLab 2026",
    "SRM University Sonepat",
    "Project-based learning",
    "Software engineering",
    "Open source competition",
  ],
  authors: [{ name: "TechSpace, SRM University, Sonepat" }],
  openGraph: {
    title: "TechSpace BuildLab '26 — Learn by Building",
    description:
      "A three-week, mentor-supported, project-based learning competition by TechSpace, SRM University, Sonepat. 5 October – 23 October 2026.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F4E8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-[var(--paper)] text-[var(--ink)] antialiased min-h-screen selection:bg-[var(--ink)] selection:text-[var(--paper)]">
        {children}
      </body>
    </html>
  );
}
