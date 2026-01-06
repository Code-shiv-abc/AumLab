import { content } from '@/data/content';
import Link from 'next/link';
import { Twitter, Linkedin, Github, MessageCircle, Link as LinkIcon } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Twitter,
  Linkedin,
  Github,
  MessageCircle,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12 md:py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tighter mb-2">
            <span className="text-white">Aum</span><span className="text-[var(--color-cosmic-purple-light)]">Labs</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Consciousness. Precision. Intelligence.
          </p>
        </div>

        <div className="flex space-x-6">
          {content.contact.socials.map((social) => {
            const IconComponent = iconMap[social.icon] || LinkIcon;
            return (
              <Link
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--color-gold)] transition-colors duration-300 transform hover:scale-110"
                aria-label={social.platform}
              >
                <IconComponent size={24} strokeWidth={1.5} />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center md:flex md:justify-between text-xs text-gray-600">
        <p>&copy; {currentYear} AumLabs. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Built with Next.js</p>
      </div>
    </footer>
  );
}
