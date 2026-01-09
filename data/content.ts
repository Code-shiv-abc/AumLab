import { type LucideIcon } from 'lucide-react';

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  imagePlaceholder: string; // CSS gradient or ID
  techStack: string[];
  link?: string;
}

export interface ServiceItem {
  title: string;
  icon: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  avatarPlaceholder: string;
}

export interface WhyItem {
  title: string;
  description: string;
  icon: string;
}

export const content = {
  meta: {
    title: "AumLabs | Premium Web & AI Solutions",
    description: "World-class web development and AI integration for premium brands. AumLabs converts visitors into clients with intelligent design.",
    siteUrl: "https://aumlabs.vercel.app",
  },
  hero: {
    headline: "Transforming Ideas into Intelligent Digital Reality",
    subHeadline: "Helping founders and brands build premium, high-conversion web experiences.",
    cta: {
      primary: "Contact Me",
      secondary: "Book a Call",
    },
  },
  services: [
    {
      title: "Web Design & Development",
      icon: "Layout",
      description: "Premium, responsive, and pixel-perfect websites built with Next.js.",
    },
    {
      title: "UX/UI & Experience Design",
      icon: "PenTool",
      description: "User-centric interfaces that drive engagement and retention.",
    },
    {
      title: "AI Tool Integration",
      icon: "Cpu",
      description: "Seamless integration of LLMs and automation into your workflow.",
    },
    {
      title: "Performance & SEO Optimization",
      icon: "Zap",
      description: "Blazing fast load times and top-tier search engine ranking.",
    },
  ] as ServiceItem[],
  portfolio: [
    {
      title: "Nebula OS",
      category: "UI/UX System",
      description: "A futuristic operating system concept designed for spatial computing.",
      imagePlaceholder: "bg-gradient-to-br from-purple-900 to-black",
      techStack: ["React", "Three.js", "Tailwind"],
      link: "#",
    },
    {
      title: "Zenith AI",
      category: "AI Automation",
      description: "Automated content workflow engine for high-volume publishers.",
      imagePlaceholder: "bg-gradient-to-bl from-blue-900 to-black",
      techStack: ["Next.js", "OpenAI API", "Node.js"],
      link: "#",
    },
    {
      title: "Ether Brand",
      category: "Branding",
      description: "Complete identity package for a wellness tech startup.",
      imagePlaceholder: "bg-gradient-to-r from-slate-900 to-slate-800",
      techStack: ["Figma", "Design Systems"],
      link: "#",
    },
    {
      title: "Aum Chat",
      category: "AI Agent",
      description: "Personalized spiritual guidance bot fine-tuned on ancient texts.",
      imagePlaceholder: "bg-gradient-to-t from-purple-950 to-black",
      techStack: ["Python", "LangChain", "Vector DB"],
      link: "#",
    },
  ] as ProjectItem[],
  whyAumLab: [
    {
      title: "Human-Centered Design",
      description: "Prioritizing the user experience at every step to ensure intuitive and impactful products.",
      icon: "Heart",
    },
    {
      title: "Clean, Scalable Code",
      description: "Built on modern standards ensuring maintainability, speed, and future-proofing.",
      icon: "Code2",
    },
    {
      title: "Modern AI Workflows",
      description: "Leveraging the latest in AI to accelerate development and enhance functionality.",
      icon: "Bot",
    },
  ] as WhyItem[],
  testimonials: [
    {
      name: "Sarah J.",
      role: "Tech Founder",
      quote: "AumLabs brought a level of depth and intuition to our project that I didn't think was possible. Truly visionary.",
      avatarPlaceholder: "SJ",
    },
    {
      name: "David K.",
      role: "Creative Director",
      quote: "The blend of aesthetic perfection and technical rigor is unmatched. Highly recommended for premium builds.",
      avatarPlaceholder: "DK",
    },
    {
      name: "Elena R.",
      role: "Wellness Coach",
      quote: "Finally, a developer who understands the soul of a project. The result was magical and effective.",
      avatarPlaceholder: "ER",
    },
  ] as TestimonialItem[],
  contact: {
    email: "cvamtiwari73@gmail.com",
    bookCallUrl: "https://calendly.com/", // Placeholder
    socials: [
      { platform: "WhatsApp", url: "https://wa.me/1234567890", icon: "MessageCircle" },
      { platform: "Twitter", url: "#", icon: "Twitter" },
      { platform: "LinkedIn", url: "#", icon: "Linkedin" },
      { platform: "GitHub", url: "#", icon: "Github" },
    ] as SocialLink[],
  },
};
