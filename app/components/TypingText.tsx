"use client";

import { motion } from "framer-motion";

type TypingTextProps = {
  text: string;
  delay?: number;
  step?: number;
};

/** Reveals text one character at a time, like it's being typed, as it scrolls into view. */
export function TypingText({ text, delay = 0, step = 0.03 }: TypingTextProps) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.05, delay: delay + i * step }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </>
  );
}
