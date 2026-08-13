"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SwayProps = {
  children: ReactNode;
  className?: string;
  rotate?: number;
  y?: number;
  duration?: number;
  delay?: number;
  origin?: string;
};

/** Wraps decorative art (florals, tassels, lanterns) in a gentle, endless breeze-like sway. */
export function Sway({
  children,
  className = "",
  rotate = 5,
  y = 8,
  duration = 5,
  delay = 0,
  origin = "top center",
}: SwayProps) {
  return (
    <motion.div
      className={className}
      style={{ transformOrigin: origin }}
      animate={{ rotate: [-rotate, rotate, -rotate], y: [0, -y, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}
