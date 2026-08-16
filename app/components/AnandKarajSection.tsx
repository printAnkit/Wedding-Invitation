"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./assets";
import { Sway } from "./Sway";

const E = [0.22, 1, 0.36, 1] as const;

export function AnandKarajSection() {
  return (
    <section
      id="anand-karaj"
      className="relative flex flex-col items-center justify-center overflow-hidden text-center"
    >
      <Image
        src={IMG.mainBg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* ── Top-right flower: slides in from right ── */}
      <div className="pointer-events-none absolute -left-1 -top-0 z-20 w-36 scale-x-[-1]">
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 2.8, ease: E }}
        >
          <Sway rotate={3} duration={6}>
            <div className="relative aspect-[1536/1024] w-full">
              <Image
                src={IMG.blueFlower}
                alt=""
                fill
                sizes="320px"
                className="object-contain object-top"
              />
            </div>
          </Sway>
        </motion.div>
      </div>

      {/* ── Bottom-right flower: slides in from right, delayed ── */}
      <div className="pointer-events-none absolute z-20 scale-x-[1] scale-y-[-1] -bottom-0 -right-1 w-36">
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 2.8, delay: 0.5, ease: E }}
        >
          <Sway rotate={-3} duration={6.5} delay={0.3}>
            <div className="relative aspect-[1536/1024] w-full">
              <Image
                src={IMG.blueFlower}
                alt=""
                fill
                sizes="320px"
                className="object-contain object-top"
              />
            </div>
          </Sway>
        </motion.div>
      </div>

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
            src={IMG.anandKarajBg}
            alt=""
            fill
            sizes="(min-width: 768px) 700px, 100vw"
            className="object-contain"
          />
        </motion.div>

        {/* ── Text block ── */}
        <div className="absolute inset-x-0 top-[40%] flex flex-col items-center text-center">

          {/* 1. Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.5, delay: 0.5, ease: E }}
            className="font-symphony text-5xl text-slate"
          >
            Anand Karaj
          </motion.h2>

          {/* 2. Date */}
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.8, delay: 1.2, ease: E }}
            className="flex items-center justify-center gap-3 font-serif text-3xl tracking-wide text-sage sm:text-4xl"
          >
            <span>18</span>
            <span className="text-gold">|</span>
            <span>Nov</span>
            <span className="text-gold">|</span>
            <span>2026</span>
          </motion.div>

          {/* 3. Venue */}
          <motion.p
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.5, delay: 2.0, ease: E }}
            className="font-serif text-md italic text-rose"
          >
            Spara Boutique Resort
          </motion.p>

          {/* 4. Hall */}
          <motion.p
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.5, delay: 2.7, ease: E }}
            className="font-serif text-md italic text-rose"
          >
            {"{Glasshouse & Big hall}"}
          </motion.p>

          {/* 5. Time */}
          <motion.p
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.5, delay: 3.4, ease: E }}
            className="font-serif text-base italic text-sage"
          >
            11:00am onwards
          </motion.p>
        </div>
      </div>
    </section>
  );
}
