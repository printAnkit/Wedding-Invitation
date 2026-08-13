"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./assets";
import { Reveal } from "./Reveal";
import { Sway } from "./Sway";

export function AnandKarajSection() {
  return (
    <section
      id="anand-karaj"
      className="relative flex flex-col items-center justify-center overflow-hidden text-center"
    >
      {/* Top-right flower, hanging naturally */}
      <div className="pointer-events-none absolute right-65 -top-0 z-10 w-36 scale-x-[-1]">
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
      </div>

      {/* Bottom-left flower */}
      <div className="pointer-events-none absolute z-10 scale-x-[1] scale-y-[-1] -bottom-0 left-65 w-36">
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
      </div>

      <div className="relative aspect-[1366/1430] w-full max-w-2xl">
        <Image
          src={IMG.anandKarajBg}
          alt=""
          fill
          sizes="(min-width: 768px) 700px, 100vw"
          className="object-contain"
        />

        <Reveal className="absolute inset-x-0 top-[40%] flex flex-col items-center text-center">
          <h2 className="font-symphony text-6xl text-slate">Anand Karaj</h2>

          <div className="flex items-center justify-center gap-3 font-serif text-3xl tracking-wide text-sage sm:text-4xl">
            <span>18</span>
            <span className="text-gold">|</span>
            <span>Nov</span>
            <span className="text-gold">|</span>
            <span>2026</span>
          </div>

          <p className="font-serif text-lg italic text-rose">
            Spara Boutique Resort
          </p>
          <p className="font-serif text-lg italic text-rose">
            {"{Glasshouse & Big hall}"}
          </p>

          <p className="font-serif text-base italic text-sage">
            11:00am onwards
          </p>
        </Reveal>
      </div>
    </section>
  );
}
