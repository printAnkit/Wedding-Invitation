"use client";

import Image from "next/image";
import { IMG } from "./assets";
import { Sway } from "./Sway";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-visible px-10 py-20 sm:py-28"
    >
      <div className="lace-frame relative mx-auto w-full max-w-md">
        <div className="absolute -right-4 -top-16 z-10 h-36 w-40 sm:-right-8 sm:-top-20 sm:h-44 sm:w-48">
          <Sway
            rotate={3}
            y={6}
            duration={5.5}
            className="absolute left-20 top-8 h-40 w-28 sm:h-40 sm:w-28"
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
            className="absolute right-[-30px] top-8 h-32 w-20 sm:top-9 sm:h-34 sm:w-24"
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
        </div>

        <Sway
          rotate={1}
          y={2}
          duration={6}
          origin="bottom left"
          className="absolute -bottom-18 -left-30 z-10 h-66 w-66 sm:-bottom-8 sm:-left-10 sm:h-36 sm:w-36"
        >
          <div className="relative h-full w-full drop-shadow-md">
            <Image
              src={IMG.fountain}
              alt=""
              fill
              sizes="150px"
              className="object-contain object-bottom"
            />
          </div>
        </Sway>

        <div className="relative flex flex-col items-center px-2 pb-10 pt-2 text-center sm:pb-12">
          <Sway
            rotate={4}
            y={4}
            duration={4.5}
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

          <Reveal delay={0.15}>
            <p className="mt-3 font-serif text-sm italic text-sage sm:text-lg">
              With immense joy and grateful hearts,
              <br />
              we invite you to
              <br />
              The Wedding Celebrations of
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <h1 className="mt-5 font-symphony text-5xl leading-tight text-rose sm:text-6xl">
              Meharvan
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <span className="my-1 block font-label text-xs uppercase tracking-widest-lg text-sage">
              and
            </span>
          </Reveal>
          <Reveal delay={0.45}>
            <h1 className="font-symphony text-5xl leading-tight text-rose sm:text-6xl">
              Snjyot
            </h1>
          </Reveal>

          <Reveal delay={0.6}>
            <p className="mt-5 max-w-xs font-serif text-lg italic text-sage">
              Celebrate love, laughter, and cherished moments with us.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
