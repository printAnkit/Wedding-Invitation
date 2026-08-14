"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./assets";

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
        <h2 className="flex font-symphony text-6xl text-sage">
          {"Venue Details".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: i * 0.18 }}
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 3.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
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

        <motion.h3
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 3.0, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-serif text-2xl uppercase tracking-wide text-slate sm:text-3xl"
        >
          Spara Boutique Resort
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 3.0, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 max-w-sm font-serif text-sm uppercase tracking-wide text-sage"
        >
          G-1, Pushpanjali Farms, Dwarka Expressway,
          <br />
          Bijwasan, New Delhi, Delhi 110037
        </motion.p>

        <motion.a
          href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 2.2, delay: 3.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 inline-flex items-center gap-2 border-b border-gold font-script text-2xl italic text-gold underline decoration-gold underline-offset-4 transition-colors hover:text-gold-dark"
        >
          View On Map
        </motion.a>
      </div>
    </section>
  );
}
