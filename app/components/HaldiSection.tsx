"use client";

import Image from "next/image";
import { IMG } from "./assets";
import { Reveal } from "./Reveal";

export function HaldiSection() {
  return (
    <section
      id="haldi"
      className="relative flex flex-col items-center justify-center overflow-hidden text-center"
    >
      <div className="relative aspect-[1366/1430] w-full">
        <Image
          src={IMG.haldiBg}
          alt=""
          fill
          sizes="100vw"
          className="object-contain"
        />

        <Reveal className="absolute inset-0 flex flex-col items-center justify-center pl-[20%] pr-[4%] text-center">
          <h2 className="font-symphony text-6xl text-gold">
            Tikka &amp; Haldi
          </h2>

          <div className="flex items-center justify-center gap-3 font-serif text-3xl tracking-wide text-sage sm:text-4xl">
            <span>16</span>
            <span className="text-sage">|</span>
            <span>Nov</span>
            <span className="text-sage">|</span>
            <span>2026</span>
          </div>

          <p className="font-serif text-lg italic text-rose">
            Spara Boutique resort
          </p>
          <p className="font-serif text-lg italic text-rose">
            {"{ Round Hall & Poolside }"}
          </p>

          <p className="font-serif text-base italic text-sage">
            11:00am Followed by lunch
          </p>
        </Reveal>

        <Reveal delay={0.2} className="absolute bottom-0 right-0 w-48">
          <div className="relative aspect-[1536/1024] w-full opacity-90">
            <Image
              src={IMG.haldiBowls}
              alt=""
              fill
              sizes="220px"
              className="object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
