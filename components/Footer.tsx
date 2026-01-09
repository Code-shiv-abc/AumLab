"use client";

import { content } from "@/data/content";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold tracking-tighter mb-2 block">
              Aum<span className="text-[var(--color-cosmic-purple)]">Lab</span>.
            </Link>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} AumLabs. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {content.contact.socials.map((social) => {
                const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[social.icon];

                return (
                <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors"
                    aria-label={social.platform}
                >
                    {IconComponent ? <IconComponent className="w-5 h-5" /> : null}
                </a>
                );
            })}
          </div>

        </div>
      </div>
    </footer>
  );
}
