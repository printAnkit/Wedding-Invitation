"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
};

/** Slides content up from below and fades it in as it enters the viewport while scrolling. */
export function Reveal({ children, delay = 0, className = "", y = 48 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
