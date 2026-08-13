"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./assets";
import { Reveal } from "./Reveal";

const MAP_QUERY = encodeURIComponent(
  "Spara Boutique Resort, G-1, Pushpanjali Farms, Dwarka Expressway, Bijwasan, New Delhi, Delhi 110037",
);

export function VenueDetails() {
  return (
    <section
      className="flex flex-col items-center justify-center py-10 text-center"
      id="venue"
    >
      <Reveal className="flex flex-col items-center">
        <h2 className="font-symphony text-6xl text-sage">Venue Details</h2>

        <div className="relative mt-10 aspect-[1536/1024] w-full max-w-xl">
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
        </div>

        <h3 className="mt-8 font-serif text-2xl uppercase tracking-wide text-slate sm:text-3xl">
          Spara Boutique Resort
        </h3>
        <p className="mt-3 max-w-sm font-serif text-sm uppercase tracking-wide text-sage">
          G-1, Pushpanjali Farms, Dwarka Expressway,
          <br />
          Bijwasan, New Delhi, Delhi 110037
        </p>

        <motion.a
          href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex items-center gap-2 border-b border-gold font-script text-2xl italic text-gold underline decoration-gold underline-offset-4 transition-colors hover:text-gold-dark"
        >
          View On Map
        </motion.a>
      </Reveal>
    </section>
  );
}
