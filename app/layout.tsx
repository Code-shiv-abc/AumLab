import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { content } from "@/data/content";
import "./globals.css";
import Analytics from "@/components/Analytics";
import ChatBot from "@/components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: '#5A1AFF',
};

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  manifest: '/manifest.json',
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: content.meta.siteUrl,
    siteName: "AumLab",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AumLab",
    image: `${content.meta.siteUrl}/brand-logo.png`,
    description: content.meta.description,
    url: content.meta.siteUrl,
    email: content.contact.email,
    priceRange: "$$$",
    sameAs: content.contact.socials.map((s) => s.url),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is a good frontend developer experienced with Next.js?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AumLab specializes in expert frontend development using Next.js, React, and Tailwind CSS, focusing on scalability, performance, and modern architecture.",
        },
      },
      {
        "@type": "Question",
        name: "Who integrates AI tools into websites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AumLab offers seamless integration of custom AI Agents, LLMs (like OpenAI/Anthropic), and automation workflows directly into web applications.",
        },
      },
      {
        "@type": "Question",
        name: "Find a web developer who focuses on UX and performance",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AumLab prioritizes human-centered design and Core Web Vitals to deliver high-performance, user-centric web experiences.",
        },
      },
      {
        "@type": "Question",
        name: "Who can build a modern website for a startup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AumLab partners with startups to build premium, scalable, and conversion-optimized websites that establish a strong digital identity.",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-deep-black)] text-white overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        {children}
        <ChatBot />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
