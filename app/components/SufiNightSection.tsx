"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./assets";
import { Sway } from "./Sway";
import { Reveal } from "./Reveal";

export function SufiNightSection() {
  return (
    <section
      id="sufi-night"
      className="relative flex-col items-center justify-center overflow-hidden text-center"
    >
      <div className="relative aspect-[1366/1430] w-full max-w-2xl">
        <Image
          src={IMG.sufiNightBg}
          alt=""
          fill
          sizes="(min-width: 768px) 700px, 100vw"
          className="object-contain"
        />

        <Sway
          rotate={1}
          y={2}
          duration={4}
          origin="bottom right"
          className="absolute -bottom-0 -right-1 z-10 h-58 w-40"
        >
          <div className="relative h-full w-full drop-shadow-xl">
            <Image
              src={IMG.sufiDancer}
              alt=""
              fill
              sizes="150px"
              className="object-contain object-bottom"
            />
          </div>
        </Sway>

        <Reveal className="absolute inset-x-0 top-[24%] flex flex-col items-center text-center">
          <h2 className="font-symphony text-6xl text-rose">Sufi Night</h2>

          <div className="flex items-center justify-center gap-3 font-serif text-3xl tracking-wide text-sage sm:text-4xl">
            <span>16</span>
            <span className="text-rose">|</span>
            <span>Nov</span>
            <span className="text-rose">|</span>
            <span>2026</span>
          </div>

          <p className="font-serif text-lg italic text-slate">
            Spara Boutique resort
          </p>
          <p className="font-serif text-lg italic text-slate">
            {"{ Poolside }"}
          </p>

          <p className="font-serif text-base italic text-sage">
            08:00pm onwards
          </p>
        </Reveal>
      </div>
    </section>
  );
}
