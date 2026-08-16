"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./assets";
import { Sway } from "./Sway";
import { HaldiSection } from "./HaldiSection";
import { SufiNightSection } from "./SufiNightSection";
import { AnandKarajSection } from "./AnandKarajSection";

const E = [0.22, 1, 0.36, 1] as const;

export function FunctionDetails() {
  return (
    <>
      <section
        id="functions"
        className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-15 text-center"
      >
        <Image
          src={IMG.mainBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* ── Top-right flower: slides in from right ── */}
        <div className="pointer-events-none absolute -right-8 -top-0 z-10 w-46">
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 2.8, ease: E }}
          >
            <Sway rotate={3} duration={6}>
              <div className="relative aspect-[1536/1024] w-full">
                <Image
                  src={IMG.pinkFlower}
                  alt=""
                  fill
                  sizes="320px"
                  className="object-contain object-top"
                />
              </div>
            </Sway>
          </motion.div>
        </div>

        {/* ── Bottom-left flower: slides in from left ── */}
        <div className="pointer-events-none absolute z-10 scale-x-[-1] scale-y-[-1] -bottom-0 -left-8 w-46">
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 2.8, delay: 0.5, ease: E }}
          >
            <Sway rotate={-3} duration={6.5} delay={0.3}>
              <div className="relative aspect-[1536/1024] w-full">
                <Image
                  src={IMG.pinkFlower}
                  alt=""
                  fill
                  sizes="320px"
                  className="object-contain object-top"
                />
              </div>
            </Sway>
          </motion.div>
        </div>

        {/* ── "Function Details" heading: scales in ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.35, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 3.5, delay: 0.3, ease: E }}
          className="relative z-10 flex flex-col items-center"
        >
          <h2 className="-translate-x-6 font-symphony text-6xl leading-tight text-sage sm:-translate-x-10 lg:text-7xl xl:text-8xl">
            Function
          </h2>
          <h2 className="translate-x-6 font-symphony text-6xl leading-tight text-sage sm:translate-x-10 lg:text-7xl xl:text-8xl">
            Details
          </h2>
        </motion.div>
      </section>

      <HaldiSection />
      <SufiNightSection />
      <AnandKarajSection />
    </>
  );
}
