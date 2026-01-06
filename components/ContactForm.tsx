'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { content } from '@/data/content';
import Link from 'next/link';
import { Mail, MessageCircle, Twitter, Linkedin, Github, Link as LinkIcon } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Twitter,
  Linkedin,
  Github,
  MessageCircle,
};

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to send message');

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[var(--color-deep-black)] to-black relative overflow-hidden">
        {/* Sacred Geometry Background for Contact */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
           <div className="w-[800px] h-[800px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
           <div className="absolute w-[600px] h-[600px] border border-[var(--color-gold)]/10 rotate-45"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Initialize Contact</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">Let&apos;s build something extraordinary together. Reach out via the form or connect directly.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Form */}
                <motion.div
                    className="lg:col-span-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-white/[0.02] p-8 md:p-10 rounded-3xl border border-white/5 backdrop-blur-sm shadow-2xl"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm text-[var(--color-gold)] uppercase tracking-wider font-semibold">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cosmic-purple)] transition-all duration-300"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm text-[var(--color-gold)] uppercase tracking-wider font-semibold">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cosmic-purple)] transition-all duration-300"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm text-[var(--color-gold)] uppercase tracking-wider font-semibold">Subject</label>
                            <select
                                id="subject"
                                name="subject"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cosmic-purple)] transition-all duration-300 appearance-none"
                            >
                                <option>Project Inquiry</option>
                                <option>Collaboration</option>
                                <option>General Question</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm text-[var(--color-gold)] uppercase tracking-wider font-semibold">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cosmic-purple)] transition-all duration-300 resize-none"
                                placeholder="Tell me about your vision..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-[var(--color-gold)] hover:scale-[1.01] transition-all duration-300 disabled:opacity-50 disabled:hover:bg-white disabled:hover:scale-100 shadow-lg"
                        >
                            {status === 'loading' ? 'Transmitting...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                                <p className="text-green-400 text-center text-sm">Message received. I will be in touch shortly.</p>
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                                <p className="text-red-400 text-center text-sm">{errorMessage}</p>
                            </div>
                        )}
                    </form>
                </motion.div>

                {/* Direct Contact Info */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Email Card */}
                    <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/5 backdrop-blur-sm hover:border-[var(--color-gold)]/30 transition-colors duration-300 group">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-white/5 rounded-xl text-[var(--color-gold)] group-hover:bg-[var(--color-gold)] group-hover:text-black transition-colors duration-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                                <p className="text-gray-400 text-sm mb-3">For detailed inquiries and official business.</p>
                                <a href={`mailto:${content.contact.email}`} className="text-[var(--color-cosmic-purple-light)] hover:text-white transition-colors">
                                    {content.contact.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Socials & WhatsApp */}
                    <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
                        <h3 className="text-lg font-bold text-white mb-6">Connect Directly</h3>
                        <div className="space-y-6">
                             {content.contact.socials.map((social) => {
                                const IconComponent = iconMap[social.icon] || LinkIcon;
                                return (
                                    <Link
                                        key={social.platform}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-4 group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                                    >
                                        <div className={`p-2 rounded-lg ${social.platform === 'WhatsApp' ? 'text-green-400 bg-green-400/10' : 'text-gray-400 bg-white/5'} group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent size={20} />
                                        </div>
                                        <div>
                                            <span className="block text-white font-medium group-hover:text-[var(--color-gold)] transition-colors">{social.platform}</span>
                                            <span className="text-xs text-gray-500">Connect on {social.platform}</span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Location / Info (Optional extra card) */}
                    <div className="bg-gradient-to-br from-[var(--color-cosmic-purple)]/20 to-black p-8 rounded-3xl border border-[var(--color-cosmic-purple)]/30 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">Based in the Cloud</h3>
                            <p className="text-gray-300 text-sm">Available for global collaborations. Working across time zones to deliver excellence.</p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    </section>
  );
}
