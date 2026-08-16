"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./assets";

const E = [0.22, 1, 0.36, 1] as const;

const MAP_QUERY = encodeURIComponent(
  "Spara Boutique Resort, G-1, Pushpanjali Farms, Dwarka Expressway, Bijwasan, New Delhi, Delhi 110037",
);

export function VenueDetails() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden py-10 text-center"
      id="venue"
    >
      <Image
        src={IMG.mainBg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative z-10 flex flex-col items-center">

        {/* 1. Title — character-by-character, slower */}
        <h2 className="flex font-symphony text-6xl text-sage">
          {"Venue Details".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: i * 0.22, ease: E }}
            >
              {char === " " ? "\u00a0" : char}
            </motion.span>
          ))}
        </h2>

        {/* 2. Venue image: scales in after title finishes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.2, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 3.8, delay: 1.6, ease: E }}
          className="relative mt-10 aspect-[1536/1024] w-full max-w-xl"
        >
          <Image
            src={IMG.rsvpBg}
            alt=""
            fill
            sizes="(min-width: 640px) 600px, 100vw"
            className="object-cover"
          />
          <Image
            src={IMG.venue}
            alt="Spara Boutique Resort"
            fill
            sizes="(min-width: 640px) 600px, 100vw"
            className="z-10 object-contain"
          />
        </motion.div>

        {/* 3. Resort name — slides from right */}
        <motion.h3
          initial={{ opacity: 0, x: 55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 3.5, delay: 2.6, ease: E }}
          className="mt-8 font-serif text-2xl uppercase tracking-wide text-slate sm:text-3xl"
        >
          Spara Boutique Resort
        </motion.h3>

        {/* 4. Address — slides from left */}
        <motion.p
          initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 3.5, delay: 3.3, ease: E }}
          className="mt-3 max-w-sm font-serif text-sm uppercase tracking-wide text-sage"
        >
          G-1, Pushpanjali Farms, Dwarka Expressway,
          <br />
          Bijwasan, New Delhi, Delhi 110037
        </motion.p>

        {/* 5. Map link — fades & scales in last */}
        <motion.a
          href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 2.8, delay: 4.0, ease: E }}
          className="mt-8 inline-flex items-center gap-2 border-b border-gold font-script text-2xl italic text-gold underline decoration-gold underline-offset-4 transition-colors hover:text-gold-dark"
        >
          View On Map
        </motion.a>
      </div>
    </section>
  );
}
