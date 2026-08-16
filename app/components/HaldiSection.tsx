"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./assets";

const E = [0.22, 1, 0.36, 1] as const;

export function HaldiSection() {
  return (
    <section
      id="haldi"
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

        {/* ── Card / background image: rises from below ── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 3.5, ease: E }}
          className="absolute inset-0"
        >
          <Image
            src={IMG.haldiBg}
            alt=""
            fill
            sizes="100vw"
            className="object-contain"
          />
        </motion.div>

        {/* ── Text overlay ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pl-[20%] pr-[4%] text-center">

          {/* 1. Heading — drops from top */}
          <motion.h2
            initial={{ opacity: 0, y: -55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.5, delay: 0.5, ease: E }}
            className="font-symphony text-5xl text-gold"
          >
            Tikka &amp; Haldi
          </motion.h2>

          {/* 2. Date — scales in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.8, delay: 1.2, ease: E }}
            className="flex items-center justify-center gap-3 font-serif text-3xl tracking-wide text-sage sm:text-4xl"
          >
            <span>16</span>
            <span className="text-sage">|</span>
            <span>Nov</span>
            <span className="text-sage">|</span>
            <span>2026</span>
          </motion.div>

          {/* 3. Venue name — slides from right */}
          <motion.p
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.5, delay: 2.0, ease: E }}
            className="font-serif text-md italic text-rose"
          >
            Spara Boutique resort
          </motion.p>

          {/* 4. Hall — slides from right */}
          <motion.p
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.5, delay: 2.7, ease: E }}
            className="font-serif text-md italic text-rose"
          >
            {"{ Round Hall & Poolside }"}
          </motion.p>

          {/* 5. Time — slides from left */}
          <motion.p
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.5, delay: 3.4, ease: E }}
            className="font-serif text-base italic text-sage"
          >
            11:00am Followed by lunch
          </motion.p>
        </div>

        {/* ── Haldi bowls image: rises from bottom ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 3.8, delay: 4.0, ease: E }}
          className="absolute bottom-0 right-0 w-48"
        >
          <div className="relative aspect-[1536/1024] w-full opacity-90">
            <Image
              src={IMG.haldiBowls}
              alt=""
              fill
              sizes="220px"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
