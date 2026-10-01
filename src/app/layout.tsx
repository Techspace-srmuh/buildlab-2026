import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechSpace BuildLab '26 — Learn by Building",
  description:
    "Official landing website for TechSpace BuildLab '26 — a two-week, mentor-supported, project-based learning program by TechSpace, SRM University, Sonepat. 1 October – 15 October 2026.",
  keywords: [
    "TechSpace",
    "BuildLab",
    "BuildLab 2026",
    "SRM University Sonepat",
    "Project-based learning",
    "Software engineering",
    "Open source",
  ],
  authors: [{ name: "TechSpace, SRM University, Sonepat" }],
  openGraph: {
    title: "TechSpace BuildLab '26 — Learn by Building",
    description:
      "A two-week, mentor-supported, project-based learning program by TechSpace, SRM University, Sonepat.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[var(--paper)] text-[var(--ink)] antialiased min-h-screen selection:bg-[var(--ink)] selection:text-[var(--paper)]">
        {children}
      </body>
    </html>
  );
}
