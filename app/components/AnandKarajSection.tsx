"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./assets";
import { Sway } from "./Sway";

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

      {/* Top-right flower, slides in left to right (x is inverted here since the parent is mirrored with scale-x-[-1]) */}
      <div className="pointer-events-none absolute -left-1 -top-0 z-20 w-36 scale-x-[-1]">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
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

      {/* Bottom-left flower, slides left to right then settles back left */}
      <div className="pointer-events-none absolute z-20 scale-x-[1] scale-y-[-1] -bottom-0 -right-1 w-36">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: [40, 0, 0] }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
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
        <Image
          src={IMG.anandKarajBg}
          alt=""
          fill
          sizes="(min-width: 768px) 700px, 100vw"
          className="object-contain"
        />

        <div className="absolute inset-x-0 top-[40%] flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.0, ease: [0.22, 1, 0.36, 1] }}
            className="font-symphony text-5xl text-slate"
          >
            Anand Karaj
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{
              duration: 3.2,
              delay: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center justify-center gap-3 font-serif text-3xl tracking-wide text-sage sm:text-4xl"
          >
            <span>18</span>
            <span className="text-gold">|</span>
            <span>Nov</span>
            <span className="text-gold">|</span>
            <span>2026</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.0, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-md italic text-rose"
          >
            Spara Boutique Resort
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{
              duration: 3.0,
              delay: 2.0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-md italic text-rose"
          >
            {"{Glasshouse & Big hall}"}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 3.0, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-base italic text-sage"
          >
            11:00am onwards
          </motion.p>
        </div>
      </div>
    </section>
  );
}
