"use client";

import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  icon,
  external = false
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95 text-sm md:text-base cursor-pointer";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 border border-transparent shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]",
    secondary: "bg-[var(--color-cosmic-purple)] text-white hover:bg-[var(--color-cosmic-purple-light)] border border-transparent shadow-[0_0_15px_rgba(90,26,255,0.3)] hover:shadow-[0_0_30px_rgba(90,26,255,0.6)]",
    outline: "bg-transparent text-white border border-white/20 hover:border-white/50 hover:bg-white/5",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
  };

  const content = (
    <>
      {children}
      {icon && <span className="w-4 h-4">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} ${variants[variant]} ${className}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
};
