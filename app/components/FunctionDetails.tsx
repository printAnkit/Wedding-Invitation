import Image from "next/image";
import { IMG } from "./assets";
import { Sway } from "./Sway";
import { HaldiSection } from "./HaldiSection";
import { SufiNightSection } from "./SufiNightSection";
import { AnandKarajSection } from "./AnandKarajSection";
import { Reveal } from "./Reveal";

export function FunctionDetails() {
  return (
    <>
      <section
        id="functions"
        className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-15 text-center"
      >
        {/* Top-right flower, hanging naturally */}
        <div className="pointer-events-none absolute -right-8 -top-0 w-46 scale-x-[1]">
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
        </div>

        {/* Bottom-left flower */}
        <div className="pointer-events-none absolute scale-x-[-1] scale-y-[-1] -bottom-0 -left-8 w-46">
          <Sway rotate={-3} duration={6.5} delay={0.3}>
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
        </div>

        <Reveal className="relative flex flex-col items-center">
          <h2 className="font-symphony text-6xl leading-tight text-sage">
            Function
          </h2>
          <h2 className="font-symphony text-6xl leading-tight text-sage">
            Details
          </h2>
        </Reveal>
      </section>

      <HaldiSection />
      <SufiNightSection />
      <AnandKarajSection />
    </>
  );
}
