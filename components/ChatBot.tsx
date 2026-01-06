'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import clsx from 'clsx';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: 'init-1',
  text: "Greetings. I am Aum, your digital architect.\n\nI can assist you with:\n• Project Estimates & Pricing\n• Technical Capabilities\n• Development Process\n\nHow can I elevate your vision today?",
  sender: 'bot',
  timestamp: new Date(),
};

const FAQ_SUGGESTIONS = [
  "What is your process?",
  "Tell me about pricing.",
  "What tech stack do you use?",
  "Do you build AI Agents?",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot processing delay
    setTimeout(() => {
      const responseText = generateResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200 + Math.random() * 1000);
  };

  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    // Prioritize specific keywords first

    // Pricing & Cost
    if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("rate") || lowerInput.includes("budget")) {
      return "Our engagement models are tailored to value, not just hours.\n\n• Minimum Engagement: $2,500\n• AI Integration: Custom quoted based on complexity\n• Full Product Build: Starting at $5,000\n\nPlease submit a project inquiry for a detailed proposal.";
    }

    // AI & Tech Stack
    if (lowerInput.includes("ai") || lowerInput.includes("tech") || lowerInput.includes("stack") || lowerInput.includes("react") || lowerInput.includes("next")) {
      return "We deploy an industry-leading technical stack:\n\n• Frontend: Next.js 16, React 19, Tailwind v4\n• AI/ML: OpenAI API, LangChain, Custom RAG Pipelines\n• Infrastructure: Vercel Edge, Supabase/PostgreSQL\n\nThis ensures your product is future-proof and performant.";
    }

    // Process & Timeline
    if (lowerInput.includes("process") || lowerInput.includes("timeline") || lowerInput.includes("long") || lowerInput.includes("steps")) {
      return "Our development methodology is agile and transparent:\n\n1. Discovery & Strategy (1 week)\n2. Design & Architecture (1-2 weeks)\n3. Core Development (2-4 weeks)\n4. Testing & Deployment (1 week)\n\nMost MVPs are launched within 4-6 weeks.";
    }

    // Contact & Communication
    if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("reach") || lowerInput.includes("call")) {
      return "Direct communication is prioritized.\n\nYou can reach our lead engineers via the contact form on this page, or email us directly at cvamtiwari73@gmail.com.\n\nWe typically respond within 24 hours.";
    }

    // Portfolio
    if (lowerInput.includes("portfolio") || lowerInput.includes("work") || lowerInput.includes("example") || lowerInput.includes("case")) {
        return "You can view selected works in the 'Portfolio' section of this page. Highlights include:\n\n• Nebula OS (Spatial UI)\n• Zenith AI (Automation Engine)\n• Aum Chat (This very agent)\n\nWould you like a walkthrough of a specific project?";
    }

    // Services & Offerings (General fallback for "service", "offer", "help")
    if (lowerInput.includes("service") || lowerInput.includes("offer") || lowerInput.includes("what do you do")) {
      return "We specialize in crafting high-performance digital ecosystems:\n\n• Custom AI Agents & LLM Fine-tuning\n• Modern Web Applications (Next.js / React)\n• Scalable Backend Architecture\n• Brand Identity & Design Systems\n\nWhich area aligns with your current needs?";
    }

    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return "Hello. I am ready to assist you. What specific challenge are you looking to solve today?";
    }

    return "That is an interesting query. While my knowledge base covers our core services and operations, I recommend connecting with a human specialist for this specific topic.\n\nPlease use the contact form to provide more details.";
  };

  const formatMessage = (text: string) => {
      return text.split('\n').map((str, i) => (
          <span key={i} className="block min-h-[1.2em]">
              {str}
          </span>
      ));
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-tr from-[var(--color-cosmic-purple)] to-black border border-white/10 text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(90,26,255,0.6)] hover:scale-110 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label="Open chat assistant"
      >
        <MessageSquare size={24} className="group-hover:animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            role="dialog"
            aria-label="Chat Assistant"
            aria-modal="false"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--color-cosmic-purple)] to-black flex items-center justify-center border border-white/20 shadow-inner">
                        <Sparkles size={18} className="text-white animate-pulse" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm tracking-wide">Aum Intelligence</h3>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                    Operational
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded p-1 hover:bg-white/10"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent bg-gradient-to-b from-transparent to-black/40"
              role="log"
              aria-live="polite"
              aria-atomic="false"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={clsx(
                    "flex gap-3 max-w-[90%]",
                    msg.sender === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  <div className={clsx(
                    "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border border-white/10 shadow-sm",
                    msg.sender === 'user' ? "bg-white/10" : "bg-[var(--color-cosmic-purple)]/20"
                  )}>
                    {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={clsx(
                    "p-4 rounded-2xl text-sm leading-relaxed shadow-md backdrop-blur-sm border",
                    msg.sender === 'user'
                      ? "bg-[var(--color-cosmic-purple)]/90 border-[var(--color-cosmic-purple)] text-white rounded-tr-sm"
                      : "bg-[#111] border-white/10 text-gray-200 rounded-tl-sm"
                  )}>
                    {formatMessage(msg.text)}
                    {msg.sender === 'bot' && (
                        <div className="mt-2 text-[10px] text-white/20 text-right uppercase tracking-wider">Aum AI</div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 mr-auto max-w-[85%]">
                   <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border border-white/10 bg-[var(--color-cosmic-purple)]/20">
                      <Bot size={14} />
                   </div>
                   <div className="bg-[#111] border border-white/10 p-4 rounded-2xl rounded-tl-sm flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full animate-bounce"></span>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions (only show if few messages) */}
            {messages.length < 3 && !isTyping && (
                <div className="px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-none mask-linear-fade">
                    {FAQ_SUGGESTIONS.map((suggestion, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleSendMessage(suggestion)}
                            className="flex-shrink-0 px-4 py-2 bg-white/5 hover:bg-[var(--color-cosmic-purple)]/20 hover:border-[var(--color-cosmic-purple)]/50 border border-white/10 rounded-full text-xs font-medium text-gray-300 hover:text-white transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cosmic-purple)]"
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-black/60 backdrop-blur-md border-t border-white/10">
              <div className="flex items-center gap-2 bg-[#111] border border-white/10 rounded-full px-4 py-2 focus-within:border-[var(--color-cosmic-purple)] focus-within:ring-1 focus-within:ring-[var(--color-cosmic-purple)]/50 transition-all shadow-inner">
                <label htmlFor="chat-input" className="sr-only">Type your message</label>
                <input
                  id="chat-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-white text-sm focus:outline-none placeholder-gray-500 font-light"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="p-2 bg-[var(--color-cosmic-purple)] text-white rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-lg"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </div>
              <div className="text-center mt-3">
                  <p className="text-[9px] text-gray-600 uppercase tracking-widest">Powered by Aum Intelligence</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
