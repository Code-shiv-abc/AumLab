export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface ExpertiseItem {
  title: string;
  icon: string; // Lucide icon name
  description: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  imagePlaceholder: string; // CSS gradient or ID
  link?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  priceRange?: string;
  features: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  avatarPlaceholder: string;
}

export const content = {
  meta: {
    title: "AumLabs | Spirituality Meets Intelligent Creation",
    description: "Premium profile for AumLabs - Developer, Creator, AI Specialist. Blending spirituality, advanced technology, and creative professionalism.",
    siteUrl: "https://aumlabs.vercel.app", // Placeholder
  },
  hero: {
    headline: "Where Spirituality Meets Intelligent Creation",
    subHeadline: ["Developer", "Creator", "Designer", "AI Expert"],
    cta: {
      primary: "Explore Work",
      secondary: "Get in Touch",
    },
  },
  about: {
    bio: "I build powerful digital experiences with consciousness, precision, and design intelligence. My work bridges the gap between the ethereal and the executable, crafting systems that are as soulful as they are smart.",
    mission: "To harmonize technology and spirit, creating tools that elevate human potential.",
  },
  expertise: [
    {
      title: "Developer",
      icon: "Code",
      description: "Full-stack engineering with modern frameworks (React, Next.js, Node).",
    },
    {
      title: "Content Creator",
      icon: "Sparkles",
      description: "Engaging digital narratives that resonate and convert.",
    },
    {
      title: "Graphic Designer",
      icon: "Palette",
      description: "Visual identity systems, UI/UX, and brand aesthetics.",
    },
    {
      title: "AI Tools Specialist",
      icon: "Zap",
      description: "Leveraging LLMs and diffusion models for enhanced workflows.",
    },
    {
      title: "Prompt Engineer",
      icon: "Terminal",
      description: "Crafting precise inputs for optimal AI generation outputs.",
    },
    {
      title: "AI Agent Builder",
      icon: "Bot",
      description: "Designing autonomous agents for automation and logic.",
    },
  ] as ExpertiseItem[],
  portfolio: [
    {
      title: "Nebula OS",
      category: "UI/UX System",
      description: "A futuristic operating system concept designed for spatial computing.",
      imagePlaceholder: "bg-gradient-to-br from-purple-900 to-black",
    },
    {
      title: "Zenith AI",
      category: "AI Automation",
      description: "Automated content workflow engine for high-volume publishers.",
      imagePlaceholder: "bg-gradient-to-bl from-blue-900 to-black",
    },
    {
      title: "Sacred Geometry Generator",
      category: "Web App",
      description: "Procedural generation tool for spiritual vector art.",
      imagePlaceholder: "bg-gradient-to-tr from-gold to-black",
    },
    {
      title: "Ether Brand",
      category: "Branding",
      description: "Complete identity package for a wellness tech startup.",
      imagePlaceholder: "bg-gradient-to-r from-slate-900 to-slate-800",
    },
    {
      title: "Quantum Flow",
      category: "System Architecture",
      description: "Scalable backend architecture for real-time meditation apps.",
      imagePlaceholder: "bg-gradient-to-b from-indigo-950 to-black",
    },
    {
      title: "Aum Chat",
      category: "AI Agent",
      description: "Personalized spiritual guidance bot fine-tuned on ancient texts for deep, contextual wisdom.",
      imagePlaceholder: "bg-gradient-to-t from-purple-950 to-black",
    },
  ] as ProjectItem[],
  services: [
    {
      title: "Custom AI Agents",
      description: "Tailored AI solutions that automate complex tasks and reasoning.",
      features: ["Custom LLM Fine-tuning", "RAG Integration", "Autonomous Workflows"],
    },
    {
      title: "Web & App Development",
      description: "High-performance digital products built with cutting-edge tech.",
      features: ["Next.js / React", "Scalable Backend", "Premium UI/UX"],
    },
    {
      title: "Branding & Design",
      description: "Visual identities that capture the essence of your mission.",
      features: ["Logo Design", "Design Systems", "Marketing Assets"],
    },
    {
      title: "AI Automation Workflows",
      description: "Streamline your business with intelligent, self-healing pipelines.",
      features: ["Zapier/Make Automation", "Custom Scripts", "Data Processing"],
    },
  ] as ServiceItem[],
  testimonials: [
    {
      name: "Sarah J.",
      role: "Tech Founder",
      quote: "AumLabs brought a level of depth and intuition to our project that I didn't think was possible with code. Truly visionary.",
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
    socials: [
      { platform: "WhatsApp", url: "https://wa.me/1234567890", icon: "MessageCircle" },
      { platform: "Twitter", url: "#", icon: "Twitter" },
      { platform: "LinkedIn", url: "#", icon: "Linkedin" },
      { platform: "GitHub", url: "#", icon: "Github" },
    ] as SocialLink[],
  },
};
