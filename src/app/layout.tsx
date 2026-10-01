import type { Metadata, Viewport } from "next";
import "./globals.css";

// DEPLOYMENT ASSET NOTE:
// 1. OG Image: Add /og-image.png (1200x630px) following the Swiss editorial / scientific visual identity:
//    "TECHSPACE BUILDLAB ’26 — LEARN BY BUILDING" with the spectrum gradient and warm paper tone (#F4F4E8).
// 2. Favicon / App Icon: Add /favicon.ico and /icon.svg using the official TechSpace branding.
// Per Phase 7 instructions, placeholder/fake graphics should NOT be fabricated automatically.

export const metadata: Metadata = {
  title: "TechSpace BuildLab ’26 — Learn by Building",
  description:
    "TechSpace BuildLab ’26 is a three-week project-based learning competition by TechSpace, SRM University, Sonepat, running from 5 October to 23 October 2026.",
  keywords: [
    "TechSpace",
    "BuildLab",
    "BuildLab ’26",
    "SRM University Sonepat",
    "Project-based learning",
    "Software engineering",
    "Open source competition",
    "GitHub",
    "Discord",
  ],
  authors: [{ name: "TechSpace, SRM University, Sonepat" }],
  creator: "TechSpace",
  publisher: "TechSpace, SRM University, Sonepat",
  openGraph: {
    title: "TechSpace BuildLab ’26 — Learn by Building",
    description:
      "TechSpace BuildLab ’26 is a three-week project-based learning competition by TechSpace, SRM University, Sonepat, running from 5 October to 23 October 2026.",
    siteName: "TechSpace BuildLab ’26",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSpace BuildLab ’26 — Learn by Building",
    description:
      "TechSpace BuildLab ’26 is a three-week project-based learning competition by TechSpace, SRM University, Sonepat, running from 5 October to 23 October 2026.",
  },
  robots: {
    index: true,
    follow: true,
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
