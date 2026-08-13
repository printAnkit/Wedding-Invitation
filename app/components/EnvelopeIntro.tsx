"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IMG } from "./assets";
import { Sway } from "./Sway";

export function EnvelopeIntro() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="envelope"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
    >
      <Image
        src={IMG.envelopeBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ivory/55" />

      <div className="relative flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-label text-xs uppercase tracking-widest-lg text-ink-soft"
        >
          You are cordially invited
        </motion.p>

        <div className="relative mt-10 flex items-center gap-2">
          <Sway
            className="hidden w-16 sm:block"
            rotate={6}
            duration={4.5}
            y={6}
          >
            <div className="relative h-40 w-16">
              <Image
                src={IMG.pinkTassel}
                alt=""
                fill
                sizes="80px"
                className="object-contain object-top"
              />
            </div>
          </Sway>

          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            whileHover={!open ? { scale: 1.04 } : undefined}
            whileTap={!open ? { scale: 0.97 } : undefined}
            animate={
              !open
                ? { y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] }
                : { y: 0, rotate: 0 }
            }
            transition={
              !open
                ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.6 }
            }
            aria-label="Open the invitation"
            className="relative h-56 w-64 cursor-pointer sm:h-64 sm:w-72"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={IMG.openEnvelope}
                    alt="Open invitation envelope"
                    fill
                    sizes="300px"
                    className="object-contain"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="closed"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={IMG.closeEnvelope}
                    alt="Sealed invitation envelope"
                    fill
                    sizes="300px"
                    className="object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <Sway
            className="hidden w-16 sm:block"
            rotate={-6}
            duration={5}
            delay={0.4}
            y={6}
          >
            <div className="relative h-40 w-16">
              <Image
                src={IMG.blueTassel}
                alt=""
                fill
                sizes="80px"
                className="object-contain object-top"
              />
            </div>
          </Sway>
        </div>

        <AnimatePresence>
          {!open && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 font-script text-2xl text-gold-dark"
            >
              tap to open
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col items-center"
            >
              <Sway rotate={2} y={5} duration={4.5} className="h-16 w-16">
                <Image
                  src={IMG.waxSeal}
                  alt="Meharvan and Snjyot monogram"
                  width={200}
                  height={200}
                  className="h-16 w-16 object-contain"
                />
              </Sway>
              <p className="mt-4 font-script text-3xl text-rose sm:text-4xl">
                Meharvan &amp; Snjyot
              </p>
              <p className="mt-2 font-label text-[11px] uppercase tracking-widest-lg text-ink-soft">
                are getting married
              </p>

              <motion.a
                href="#hero"
                aria-label="Scroll to the invitation"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="mt-12 text-xl text-gold"
              >
                &#8595;
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
