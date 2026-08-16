"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./assets";
import { Sway } from "./Sway";
import { Reveal } from "./Reveal";
import { TypingText } from "./TypingText";

const E = [0.22, 1, 0.36, 1] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-0 py-20 text-center">
      <Image
        src={IMG.mainBg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* ── Top-left flower: slides in from left ── */}
      <div className="pointer-events-none absolute -left-8 -top-0 z-10 w-56 scale-x-[-1]">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 3.0, ease: E }}
        >
          <Sway rotate={4} duration={6}>
            <div className="relative h-56 w-56">
              <Image
                src={IMG.pinkFlower}
                alt=""
                fill
                sizes="140px"
                className="object-contain object-top"
              />
            </div>
          </Sway>
        </motion.div>
      </div>

      {/* ── Bottom-right flower: slides in from right, delayed ── */}
      <div className="pointer-events-none absolute right-8 -bottom-20 z-10 w-36 scale-y-[-1]">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 3.0, delay: 0.6, ease: E }}
        >
          <Sway rotate={-4} duration={6.5} origin="bottom center">
            <div className="relative h-56 w-56">
              <Image
                src={IMG.pinkFlower}
                alt=""
                fill
                sizes="140px"
                className="object-contain object-bottom"
              />
            </div>
          </Sway>
        </motion.div>
      </div>

      {/* ── Watermark + names: rises from below ── */}
      <Reveal delay={0.4} className="relative z-10 mx-auto mb-12 flex max-w-md flex-col items-center">
        {/* Watermark image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 3.5, delay: 0.6, ease: E }}
          className="h-62 w-92"
        >
          <Image
            src={IMG.watermark}
            alt="Meharvan and Snjyot monogram"
            width={600}
            height={600}
            className="h-full w-full object-contain"
          />
        </motion.div>

        <h2 className="mt-0 font-symphony text-5xl text-rose sm:text-6xl">
          <TypingText text="Meharvan" />{" "}
          <span className="font-symphony text-3xl not-italic text-sage sm:text-4xl">
            &amp;
          </span>{" "}
          <TypingText text="Snjyot" delay={1} />
        </h2>
      </Reveal>
    </footer>
  );
}
