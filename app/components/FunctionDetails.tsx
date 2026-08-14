"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./assets";
import { Sway } from "./Sway";
import { HaldiSection } from "./HaldiSection";
import { SufiNightSection } from "./SufiNightSection";
import { AnandKarajSection } from "./AnandKarajSection";

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

        {/* Top-right flower, slides in right to left */}
        <div className="pointer-events-none absolute -right-8 -top-0 z-10 w-46">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
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

        {/* Bottom-left flower, slides in left to right (x is inverted here since the parent is mirrored with scale-x-[-1]) */}
        <div className="pointer-events-none absolute z-10 scale-x-[-1] scale-y-[-1] -bottom-0 -left-8 w-46">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
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

        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
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
