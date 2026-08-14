"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IMG } from "./assets";
import { Sway } from "./Sway";

export function EnvelopeIntro() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => setExpanded(true), 3000);
    return () => clearTimeout(timer);
  }, [open]);

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

      {/* Top-right flower, slides in right to left */}
      <div className="pointer-events-none absolute -right-8 -top-0 z-10 w-56">
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
      <div className="pointer-events-none absolute -bottom-0 -left-8 z-10 w-56 scale-x-[-1] scale-y-[-1]">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Sway rotate={-3} duration={6.5}>
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

      <div className="relative z-10 flex w-full max-w-md flex-col items-center md:max-w-lg lg:max-w-xl">
        <motion.p
          animate={{ opacity: open ? 0 : 1, y: 0 }}
          initial={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.8 }}
          className={`font-label text-xs uppercase tracking-widest-lg text-ink-soft lg:text-sm ${open ? "pointer-events-none" : ""}`}
        >
          You are cordially invited
        </motion.p>

        <div className="relative mt-10 flex w-full items-center justify-center gap-2">
          <Sway
            className={`hidden w-16 sm:block ${open ? "pointer-events-none" : ""}`}
            rotate={6}
            duration={4.5}
            y={6}
          >
            <motion.div
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-40 w-16"
            >
              <Image
                src={IMG.pinkTassel}
                alt=""
                fill
                sizes="80px"
                className="object-contain object-top"
              />
            </motion.div>
          </Sway>

          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={
                expanded
                  ? { y: 0, scale: 2.2 }
                  : !open
                    ? { y: [0, -10, 0], scale: 1 }
                    : { y: 0, scale: 1 }
              }
              transition={
                expanded
                  ? { duration: 1.6, ease: [0.22, 1, 0.36, 1] }
                  : !open
                    ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0.5 }
              }
              className="relative aspect-[1366/1394] w-64 overflow-hidden sm:w-72 md:w-80 lg:w-96"
            >
              {/* Envelope base, crossfades closed -> open, removed once the card expands */}
              {!expanded && (
                <AnimatePresence>
                  <motion.div
                    key={open ? "open" : "closed"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={open ? IMG.openEnvelope : IMG.closeEnvelope}
                      alt={
                        open
                          ? "Open invitation envelope"
                          : "Sealed invitation envelope"
                      }
                      fill
                      priority
                      sizes="300px"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              )}

              {/* Invitation card, slides up from behind the envelope */}
              {open && (
                <motion.div
                  initial={{ y: "15%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 3,
                    delay: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 z-10"
                >
                  <Image
                    src={IMG.envelopePage}
                    alt="Wedding invitation"
                    fill
                    priority
                    sizes="600px"
                    className="object-contain"
                  />
                </motion.div>
              )}

              {/* Envelope flap, layered on top so the card appears to emerge from inside it */}
              {open && !expanded && (
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0 }}
                  className="absolute inset-x-3 top-14 lg:top-18 z-18 aspect-[1366/1204] w-full"
                >
                  <Image
                    src={IMG.envelopeFlap}
                    alt=""
                    fill
                    sizes="300px"
                    className="object-contain object-top"
                  />
                </motion.div>
              )}

              {!open && (
                <motion.button
                  type="button"
                  onClick={() => setOpen(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Open the invitation"
                  className="absolute inset-0 cursor-pointer"
                />
              )}
            </motion.div>
          </motion.div>

          <Sway
            className={`hidden w-16 sm:block ${open ? "pointer-events-none" : ""}`}
            rotate={-6}
            duration={5}
            delay={0.4}
            y={6}
          >
            <motion.div
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-40 w-16"
            >
              <Image
                src={IMG.blueTassel}
                alt=""
                fill
                sizes="80px"
                className="object-contain object-top"
              />
            </motion.div>
          </Sway>
        </div>

        <motion.p
          animate={{ opacity: open ? 0 : 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={`mt-8 font-symphony text-5xl text-gold-dark lg:text-6xl xl:text-7xl ${open ? "pointer-events-none" : ""}`}
        >
          Tap to Open
        </motion.p>
      </div>
    </section>
  );
}
