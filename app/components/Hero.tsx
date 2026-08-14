"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./assets";
import { Sway } from "./Sway";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-visible px-13 py-20"
    >
      <Image
        src={IMG.mainBg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
        className="lace-frame relative z-10 mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
      >
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -right-6 -top-16 z-10 h-36 w-40 sm:-right-8 sm:-top-20 sm:h-44 sm:w-48"
        >
          <Sway
            rotate={3}
            y={6}
            duration={5.5}
            className="absolute left-20 top-8 h-38 w-26 sm:h-40 sm:w-28"
          >
            <div className="relative h-full w-full drop-shadow-md">
              <Image
                src={IMG.jhoomer}
                alt=""
                fill
                sizes="120px"
                className="object-contain object-top"
              />
            </div>
          </Sway>
          <Sway
            rotate={-3}
            y={5}
            duration={4.8}
            delay={0.3}
            className="absolute right-[-30px] top-8 h-30 w-18 sm:top-6 sm:h-34 sm:w-24"
          >
            <div className="relative h-full w-full drop-shadow-md">
              <Image
                src={IMG.jhoomer}
                alt=""
                fill
                sizes="100px"
                className="object-contain object-top"
              />
            </div>
          </Sway>
        </motion.div>

        <div className="absolute -bottom-18 -left-25 z-10 h-56 w-56 sm:-bottom-8 sm:-left-10 sm:h-36 sm:w-36">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Sway rotate={1} y={2} duration={6} origin="bottom left">
              <div className="relative h-56 w-56 drop-shadow-md">
                <Image
                  src={IMG.fountain}
                  alt=""
                  fill
                  sizes="150px"
                  className="object-contain object-bottom"
                />
              </div>
            </Sway>
          </motion.div>
        </div>

        <div className="relative flex flex-col items-center px-2 pb-10 pt-2 text-center sm:pb-12">
          <Sway
            rotate={0}
            y={0}
            duration={0}
            className="h-9 w-9 sm:h-11 sm:w-11"
          >
            <Image
              src={IMG.monogramM}
              alt=""
              width={120}
              height={120}
              className="h-full w-full object-contain"
            />
          </Sway>

          <div className="mt-1">
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 2.2,
                delay: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-xs italic text-sage lg:text-sm xl:text-base"
            >
              With immense joy and grateful hearts,
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 2.2,
                delay: 2.0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-xs italic text-sage lg:text-sm xl:text-base"
            >
              we invite you to
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 2.2,
                delay: 2.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-xs italic text-sage lg:text-sm xl:text-base"
            >
              The Wedding Celebrations of
            </motion.p>
          </div>

          <Reveal delay={1.5}>
            <h1 className="mt-4 font-symphony text-5xl leading-tight text-rose sm:text-6xl lg:text-7xl xl:text-8xl">
              Meharvan
            </h1>
          </Reveal>
          <Reveal delay={1.7}>
            <span className="block font-label text-xs uppercase tracking-widest-lg text-sage">
              and
            </span>
          </Reveal>
          <Reveal delay={1.9}>
            <h1 className="font-symphony text-5xl leading-tight text-rose sm:text-6xl lg:text-7xl xl:text-8xl">
              Snjyot
            </h1>
          </Reveal>

          <div className="mt-4">
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 2.2,
                delay: 3.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-xs italic text-sage lg:text-sm xl:text-base"
            >
              Celebrate love, laughter, and
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 2.2,
                delay: 4.0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-xs italic text-sage lg:text-sm xl:text-base"
            >
              cherished moments with us.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
