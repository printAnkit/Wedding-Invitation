"use client";

import Image from "next/image";
import { IMG } from "./assets";
import { Sway } from "./Sway";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-0 py-20 text-center">
      <Sway
        className="pointer-events-none absolute -left-8 -top-0 w-56 scale-x-[-1]"
        rotate={4}
        duration={6}
      >
        <div className="relative h-56 w-56">
          <Image
            src={IMG.pinkFlower}
            alt=""
            fill
            sizes="140px"
            className="object-contain object-top"
          />
        </div>
      </Sway>
      <Sway
        className="pointer-events-none absolute right-8 bottom-30 z-10 w-36 scale-y-[-1]"
        rotate={-4}
        duration={6.5}
        delay={0.3}
        origin="bottom center"
      >
        <div className="relative h-56 w-56">
          <Image
            src={IMG.pinkFlower}
            alt=""
            fill
            sizes="140px"
            className="object-contain object-bottom"
          />
        </div>
      </Sway>

      <Reveal className="relative mx-auto mb-12 flex max-w-md flex-col items-center">
        <div className="h-62 w-92">
          <Image
            src={IMG.watermark}
            alt="Meharvan and Snjyot monogram"
            width={600}
            height={600}
            className="h-full w-full object-contain"
          />
        </div>

        <h2 className="mt-0 font-symphony text-5xl text-rose sm:text-6xl">
          Meharvan{" "}
          <span className="font-symphony text-3xl not-italic text-sage sm:text-4xl">
            &amp;
          </span>{" "}
          Snjyot
        </h2>
      </Reveal>
    </footer>
  );
}
