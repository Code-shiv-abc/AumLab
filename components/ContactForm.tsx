'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

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

        <div className="container mx-auto px-6 relative z-10 max-w-2xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Initialize Contact</h2>
                <p className="text-gray-400">Let&apos;s build something extraordinary together.</p>
            </div>

            <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-6 bg-white/[0.02] p-8 rounded-2xl border border-white/5 backdrop-blur-sm"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm text-gray-400 uppercase tracking-wider">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cosmic-purple)] transition-colors"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm text-gray-400 uppercase tracking-wider">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cosmic-purple)] transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-gray-400 uppercase tracking-wider">Subject</label>
                    <select
                        id="subject"
                        name="subject"
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cosmic-purple)] transition-colors appearance-none"
                    >
                        <option>Project Inquiry</option>
                        <option>Collaboration</option>
                        <option>General Question</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-400 uppercase tracking-wider">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cosmic-purple)] transition-colors resize-none"
                        placeholder="Tell me about your vision..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-[var(--color-gold)] hover:scale-[1.01] transition-all duration-300 disabled:opacity-50 disabled:hover:bg-white disabled:hover:scale-100"
                >
                    {status === 'loading' ? 'Transmitting...' : 'Send Message'}
                </button>

                {status === 'success' && (
                    <p className="text-green-400 text-center text-sm mt-4">Message received. I will be in touch shortly.</p>
                )}
                {status === 'error' && (
                    <p className="text-red-400 text-center text-sm mt-4">{errorMessage}</p>
                )}
            </motion.form>
        </div>
    </section>
  );
}
