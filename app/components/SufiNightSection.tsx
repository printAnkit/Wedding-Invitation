"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./assets";
import { Sway } from "./Sway";

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
        <Image
          src={IMG.sufiNightBg}
          alt=""
          fill
          sizes="(min-width: 768px) 700px, 100vw"
          className="object-contain"
        />

        <div className="absolute -bottom-0 -right-1 z-10 h-58 w-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
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

        <div className="absolute inset-x-0 top-[29%] flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-symphony text-5xl text-rose"
          >
            Sufi Night
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 font-serif text-3xl tracking-wide text-sage sm:text-4xl"
          >
            <span>16</span>
            <span className="text-rose">|</span>
            <span>Nov</span>
            <span className="text-rose">|</span>
            <span>2026</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-md italic text-slate"
          >
            Spara Boutique resort
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="pt-0 mt-0 font-serif text-md italic text-slate"
          >
            {"{ Poolside }"}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.7, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-base italic text-sage"
          >
            08:00pm onwards
          </motion.p>
        </div>
      </div>
    </section>
  );
}
