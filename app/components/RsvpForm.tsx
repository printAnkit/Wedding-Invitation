"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IMG } from "./assets";
import { TypingText } from "./TypingText";

type Attendance = "yes" | "no";

export function RsvpForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState<Attendance | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    attendance?: string;
  }>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function validate() {
    const newErrors: typeof errors = {};
    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const cleanPhone = phone.trim();
    if (!cleanPhone) {
      newErrors.phone = "Please enter your mobile number.";
    } else if (!/^[0-9\s+-]{10,15}$/.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid mobile number (10 to 15 digits).";
    }

    if (!attendance) {
      newErrors.attendance = "Please specify if you will be joining us.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");

    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          attendance,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit RSVP");
      }

      setSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
      id="rsvp"
    >
      <Image
        src={IMG.mainBg}
        alt=""
        fill
        sizes="100vw"
        className="hidden lg:block object-cover"
      />

      <Image
        src={IMG.rsvpBg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover lg:object-contain"
      />

      <div className="pointer-events-none absolute right-0 top-2 z-10 h-46 w-46 -rotate-52">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full drop-shadow-lg"
        >
          <Image
            src={IMG.fan}
            alt=""
            fill
            sizes="300px"
            className="object-contain object-top"
          />
        </motion.div>
      </div>

      <div className="relative mx-auto flex max-w-md flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-symphony text-5xl text-sage sm:text-6xl"
        >
          Rsvp
        </motion.h2>

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
                  <TypingText text="Please enter your name" delay={0.5} />
                </label>
                <motion.input
                  id="guest-name"
                  type="text"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    if (errors.name)
                      setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-2 w-full border-b-2 border-sage bg-transparent px-1 py-2 font-serif text-lg text-sage-dark focus:border-gold focus:outline-none"
                />
                {errors.name && (
                  <p className="mt-1 font-serif text-sm italic text-rose-dark">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="w-full text-left">
                <label
                  htmlFor="guest-phone"
                  className="font-serif text-lg italic text-sage"
                >
                  <TypingText
                    text="Please enter your mobile number"
                    delay={1.6}
                  />
                </label>
                <motion.input
                  id="guest-phone"
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                    if (errors.phone)
                      setErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{
                    duration: 1,
                    delay: 2.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-2 w-full border-b-2 border-sage bg-transparent px-1 py-2 font-serif text-lg text-sage-dark focus:border-gold focus:outline-none"
                />
                {errors.phone && (
                  <p className="mt-1 font-serif text-sm italic text-rose-dark">
                    {errors.phone}
                  </p>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 1, delay: 3, ease: [0.22, 1, 0.36, 1] }}
                className="w-full text-left"
              >
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
                        onChange={() => {
                          setAttendance(option.value);
                          if (errors.attendance) {
                            setErrors((prev) => ({
                              ...prev,
                              attendance: undefined,
                            }));
                          }
                        }}
                        className="sr-only"
                      />
                      <span className="font-serif text-lg italic text-sage-dark">
                        {option.label}
                      </span>
                    </motion.label>
                  ))}
                </div>
                {errors.attendance && (
                  <p className="mt-2 font-serif text-sm italic text-rose-dark">
                    {errors.attendance}
                  </p>
                )}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{
                  duration: 1,
                  delay: 2.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-sm italic text-sage"
              >
                For any further information, please feel free to contact us.
                <br />
                98115 88250, 8796771418
              </motion.p>

              {submitError && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-serif text-sm italic text-rose-dark bg-rose/10 px-4 py-2 rounded-md border border-rose/20 text-center w-full"
                >
                  {submitError}
                </motion.p>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                whileHover={loading ? {} : { scale: 1.05 }}
                whileTap={loading ? {} : { scale: 0.95 }}
                transition={{
                  duration: 1,
                  delay: 2.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`mt-2 rounded-full bg-slate px-12 py-3 font-script text-xl italic text-gold-light underline decoration-gold-light underline-offset-4 transition-colors hover:bg-slate-dark ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
