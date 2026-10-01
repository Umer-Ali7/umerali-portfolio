import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://umerali-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Umer Ali — AI Engineer & Full-Stack Developer",
  description:
    "Umer Ali builds production-ready AI systems, agentic workflows, automations, and full-stack web applications using Next.js, Python, and FastAPI.",
  applicationName: "Umer Ali — Portfolio",
  authors: [{ name: "Umer Ali" }],
  creator: "Umer Ali",
  keywords: [
    "Umer Ali",
    "AI Engineer",
    "Full-Stack Developer",
    "Agentic AI",
    "Next.js",
    "FastAPI",
    "Python",
    "Codizzz",
    "RAG",
    "Automation",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Umer Ali",
    title: "Umer Ali — AI Engineer & Full-Stack Developer",
    description:
      "Production-ready AI systems, agentic workflows, and full-stack products. Built with Next.js, Python, FastAPI.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umer Ali — AI Engineer & Full-Stack Developer",
    description:
      "Production-ready AI systems, agentic workflows, and full-stack products. Built with Next.js, Python, FastAPI.",
    creator: "@umerali",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d10" },
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
    <html
      lang="en"
      className={`${interTight.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
