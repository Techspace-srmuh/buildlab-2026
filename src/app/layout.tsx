import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

// DEPLOYMENT ASSET NOTE:
// 1. OG Image: Add /og-image.png (1200x630px) following the Swiss editorial / scientific visual identity:
//    "TECHSPACE BUILDLAB ’26 — LEARN BY BUILDING" with the spectrum gradient and warm paper tone (#F4F4E8).
// 2. Favicon / App Icon: Add /favicon.ico and /icon.svg using the official TechSpace branding.
// Per Phase 7 instructions, placeholder/fake graphics should NOT be fabricated automatically.

export const metadata: Metadata = {
  metadataBase: new URL("https://techspacesrmuniversity.vercel.app"),
  title: "TechSpace BuildLab ’26 — Learn by Building",
  description:
    "TechSpace BuildLab ’26 is a three-week project-based learning competition by TechSpace, SRM University, Sonepat, running from 6 October to 23 October 2026.",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "TechSpace BuildLab ’26 — Learn by Building",
    description:
      "TechSpace BuildLab ’26 is a three-week project-based learning competition by TechSpace, SRM University, Sonepat, running from 6 October to 23 October 2026.",
    siteName: "TechSpace BuildLab ’26",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 535,
        alt: "TechSpace BuildLab ’26 — Learn by Building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSpace BuildLab ’26 — Learn by Building",
    description:
      "TechSpace BuildLab ’26 is a three-week project-based learning competition by TechSpace, SRM University, Sonepat, running from 6 October to 23 October 2026.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F4E8" },
    { media: "(prefers-color-scheme: dark)", color: "#090A0A" },
  ],
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
      <body className="font-sans bg-[var(--background)] text-[var(--foreground)] antialiased min-h-screen selection:bg-[var(--foreground)] selection:text-[var(--background)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
