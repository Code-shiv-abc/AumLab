'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import clsx from 'clsx';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: 'init-1',
  text: "Greetings. I am Aum, your digital assistant. How can I help you elevate your project today?",
  sender: 'bot',
  timestamp: new Date(),
};

const FAQ_SUGGESTIONS = [
  "What services do you offer?",
  "How can I contact you?",
  "Tell me about your pricing.",
  "Do you work with AI?",
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
    }, 1000 + Math.random() * 1000);
  };

  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("service") || lowerInput.includes("offer") || lowerInput.includes("do")) {
      return "We offer a range of premium services including Custom AI Agents, Web & App Development (Next.js/React), Branding & Design, and AI Automation Workflows.";
    }
    if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("reach")) {
      return "You can reach us directly via the contact form on this page, or email us at cvamtiwari73@gmail.com.";
    }
    if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("rate")) {
      return "Our pricing is project-dependent. We offer bespoke solutions tailored to your specific needs. Please fill out the contact form for a custom quote.";
    }
    if (lowerInput.includes("ai") || lowerInput.includes("intelligence")) {
      return "Yes, AI is at our core. We specialize in LLM fine-tuning, RAG integration, and building autonomous agents to automate complex reasoning tasks.";
    }
    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return "Hello! How can I assist you in your digital journey today?";
    }

    return "Thank you for your inquiry. While I am a fine-tuned bot, I may need a human to answer that specific question. Please use the contact form below for a detailed response.";
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[var(--color-cosmic-purple)] text-white rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(90,26,255,0.6)] hover:scale-110 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            role="dialog"
            aria-label="Chat Assistant"
            aria-modal="false"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[var(--color-cosmic-purple)] to-black flex items-center justify-center border border-white/20">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">Aum Assistant</h3>
                  <p className="text-[10px] text-gray-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
              role="log"
              aria-live="polite"
              aria-atomic="false"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={clsx(
                    "flex gap-2 max-w-[85%]",
                    msg.sender === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  <div className={clsx(
                    "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border border-white/10",
                    msg.sender === 'user' ? "bg-white/10" : "bg-[var(--color-cosmic-purple)]/20"
                  )}>
                    {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={clsx(
                    "p-3 rounded-2xl text-sm leading-relaxed",
                    msg.sender === 'user'
                      ? "bg-[var(--color-cosmic-purple)] text-white rounded-tr-sm"
                      : "bg-white/10 text-gray-200 rounded-tl-sm"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2 mr-auto max-w-[85%]">
                   <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border border-white/10 bg-[var(--color-cosmic-purple)]/20">
                      <Bot size={14} />
                   </div>
                   <div className="bg-white/10 p-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions (only show if few messages) */}
            {messages.length < 3 && !isTyping && (
                <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-none">
                    {FAQ_SUGGESTIONS.map((suggestion, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleSendMessage(suggestion)}
                            className="flex-shrink-0 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs text-gray-300 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cosmic-purple)]"
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-full px-4 py-2 focus-within:border-[var(--color-cosmic-purple)] transition-colors focus-within:ring-1 focus-within:ring-[var(--color-cosmic-purple)]/50">
                <label htmlFor="chat-input" className="sr-only">Type your message</label>
                <input
                  id="chat-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Ask anything..."
                  className="flex-1 bg-transparent text-white text-sm focus:outline-none placeholder-gray-400"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="p-1.5 bg-[var(--color-cosmic-purple)] text-white rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
