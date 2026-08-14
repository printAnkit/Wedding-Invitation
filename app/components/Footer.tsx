"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./assets";
import { Sway } from "./Sway";
import { Reveal } from "./Reveal";
import { TypingText } from "./TypingText";

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

      {/* Top flower, slides in left to right (x is inverted here since the parent is mirrored with scale-x-[-1]) */}
      <div className="pointer-events-none absolute -left-8 -top-0 z-10 w-56 scale-x-[-1]">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
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

      {/* Bottom flower, slides in right to left */}
      <div className="pointer-events-none absolute right-8 -bottom-20 z-10 w-36 scale-y-[-1]">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
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

      <Reveal className="relative z-10 mx-auto mb-12 flex max-w-md flex-col items-center">
        <div className="h-62 w-92">
          <Image
            src={IMG.watermark}
            alt="Meharvan and Snjyot monogram"
            width={600}
            height={600}
            className="h-full w-full object-contain"
          />
        </div>

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
