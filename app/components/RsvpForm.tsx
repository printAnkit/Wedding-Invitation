"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IMG } from "./assets";
import { Sway } from "./Sway";
import { Reveal } from "./Reveal";

type Attendance = "yes" | "no";

export function RsvpForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState<Attendance | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !attendance) return;
    setSubmitted(true);
  }

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
      id="rsvp"
    >
      <Image
        src={IMG.rsvpBg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      <Sway
        rotate={5}
        y={18}
        duration={5}
        origin="top right"
        className="pointer-events-none absolute right-0 top-10 z-10 hidden h-40 w-56 sm:block md:h-56 md:w-72"
      >
        <div className="relative h-full w-full drop-shadow-lg">
          <Image
            src={IMG.fan}
            alt=""
            fill
            sizes="300px"
            className="object-contain object-top"
          />
        </div>
      </Sway>

      <Reveal className="relative mx-auto flex max-w-md flex-col items-center">
        <h2 className="font-symphony text-5xl text-sage sm:text-6xl">Rsvp</h2>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col items-center gap-3"
            >
              <span className="text-3xl">
                {attendance === "yes" ? "\u{1F492}" : "\u{1F64F}"}
              </span>
              <p className="font-serif text-xl italic text-sage">
                {attendance === "yes"
                  ? `Thank you, ${name}! We can’t wait to celebrate with you.`
                  : `Thank you, ${name}. You’ll be missed — with love from us.`}
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="mt-8 flex w-full flex-col items-center gap-8"
            >
              <div className="w-full text-left">
                <label
                  htmlFor="guest-name"
                  className="font-serif text-lg italic text-sage"
                >
                  Please enter your name
                </label>
                <input
                  id="guest-name"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-2 w-full border-b-2 border-sage bg-transparent px-1 py-2 font-serif text-lg text-sage-dark focus:border-gold focus:outline-none"
                />
              </div>

              <div className="w-full text-left">
                <label
                  htmlFor="guest-phone"
                  className="font-serif text-lg italic text-sage"
                >
                  Please enter your mobile number
                </label>
                <input
                  id="guest-phone"
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="mt-2 w-full border-b-2 border-sage bg-transparent px-1 py-2 font-serif text-lg text-sage-dark focus:border-gold focus:outline-none"
                />
              </div>

              <div className="w-full text-left">
                <p className="font-serif text-lg italic text-sage">
                  Will you be joining us for the wedding celebrations?
                </p>

                <div className="mt-4 flex flex-col gap-4">
                  {(
                    [
                      { value: "yes", label: "Yes, I’ll be there!" },
                      {
                        value: "no",
                        label: "Sadly, I won’t be able to make it",
                      },
                    ] as const
                  ).map((option) => (
                    <motion.label
                      key={option.value}
                      whileTap={{ scale: 0.97 }}
                      className="flex cursor-pointer items-center gap-3"
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 border-rose transition-colors ${
                          attendance === option.value
                            ? "bg-rose"
                            : "bg-transparent"
                        }`}
                      >
                        {attendance === option.value && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-sm text-paper"
                          >
                            &#10003;
                          </motion.span>
                        )}
                      </span>
                      <input
                        type="checkbox"
                        name="attendance"
                        value={option.value}
                        checked={attendance === option.value}
                        onChange={() => setAttendance(option.value)}
                        className="sr-only"
                      />
                      <span className="font-serif text-lg italic text-sage-dark">
                        {option.label}
                      </span>
                    </motion.label>
                  ))}
                </div>
              </div>

              <p className="font-serif text-sm italic text-sage">
                For any further information, please feel free to contact us.
                <br />
                98115 88250, 8796771418
              </p>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 rounded-full bg-slate px-12 py-3 font-script text-xl italic text-gold-light underline decoration-gold-light underline-offset-4 transition-colors hover:bg-slate-dark"
              >
                Submit
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </Reveal>
    </section>
  );
}
