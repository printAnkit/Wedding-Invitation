"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./assets";
import { Sway } from "./Sway";

const E = [0.22, 1, 0.36, 1] as const;

export function SufiNightSection() {
  return (
    <section
      id="sufi-night"
      className="relative flex flex-col items-center justify-center overflow-hidden text-center"
    >
      <Image
        src={IMG.mainBg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative z-10 aspect-[1366/1430] w-full max-w-2xl">

        {/* ── Background card: rises from below ── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 3.5, ease: E }}
          className="absolute inset-0"
        >
          <Image
            src={IMG.sufiNightBg}
            alt=""
            fill
            sizes="(min-width: 768px) 700px, 100vw"
            className="object-contain"
          />
        </motion.div>

        {/* ── Sufi dancer image: slides up from bottom-right ── */}
        <div className="absolute -bottom-0 -right-1 z-10 h-58 w-40">
          <motion.div
            initial={{ opacity: 0, y: 70, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.8, delay: 0.8, ease: E }}
            className="h-full w-full"
          >
            <Sway
              rotate={1}
              y={2}
              duration={4}
              origin="bottom right"
              className="h-full w-full"
            >
              <div className="relative h-full w-full drop-shadow-xl">
                <Image
                  src={IMG.sufiDancer}
                  alt=""
                  fill
                  sizes="150px"
                  className="object-contain object-bottom"
                />
              </div>
            </Sway>
          </motion.div>
        </div>

        {/* ── Text block ── */}
        <div className="absolute inset-x-0 top-[29%] flex flex-col items-center text-center">

          {/* 1. Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.5, delay: 0.5, ease: E }}
            className="font-symphony text-5xl text-rose"
          >
            Sufi Night
          </motion.h2>

          {/* 2. Date */}
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.8, delay: 1.2, ease: E }}
            className="flex items-center justify-center gap-3 font-serif text-2xl tracking-wide text-sage sm:text-4xl"
          >
            <span>16</span>
            <span className="text-rose">|</span>
            <span>Nov</span>
            <span className="text-rose">|</span>
            <span>2026</span>
          </motion.div>

          {/* 3. Venue */}
          <motion.p
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.5, delay: 2.0, ease: E }}
            className="font-serif text-sm italic text-slate"
          >
            Spara Boutique resort
          </motion.p>

          {/* 4. Hall */}
          <motion.p
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.5, delay: 2.7, ease: E }}
            className="font-serif text-sm italic text-slate"
          >
            {"{ Poolside }"}
          </motion.p>

          {/* 5. Time */}
          <motion.p
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.5, delay: 3.4, ease: E }}
            className="font-serif text-base italic text-sage"
          >
            08:00pm onwards
          </motion.p>
        </div>
      </div>
    </section>
  );
}
