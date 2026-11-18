"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { RiExpandUpDownLine } from "react-icons/ri";
import { faqs, team } from "@/data/landingData";
import { FadeInUp } from "@/components/ui/MotionPrimitives";

export default function FaqAndTeamSection() {
  const [faqOpen, setFaqOpen] = useState(0);
  return (
    <section id="faq" className="px-5 py-20 md:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary">
            Claridad ante todo
          </p>
          <h2 className="mt-3 text-center font-serif text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-10 divide-y divide-primary-container/20">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="py-5">
                <button
                  type="button"
                  onClick={() => setFaqOpen(faqOpen === index ? -1 : index)}
                  className="flex w-full items-center justify-between text-left font-serif text-xl"
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: faqOpen === index ? 180 : 0 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container text-primary"
                  >
                    <RiExpandUpDownLine />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {faqOpen === index && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pr-12 pt-4 leading-7 text-on-surface-variant"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        <FadeInUp className="mt-24">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary">
            Guías & facilitadores
          </p>
          <h2 className="mt-3 text-center font-serif text-4xl">
            ¿Quién está detrás de Inside?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-3xl bg-surface-container-low p-4 text-center"
              >
                <div className="relative aspect-4/5 overflow-hidden rounded-t-full rounded-b-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">
                  {member.role}
                </p>
                <h3 className="mt-2 font-serif text-xl">{member.name}</h3>
                <p className="mt-2 text-sm text-on-surface-variant">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
