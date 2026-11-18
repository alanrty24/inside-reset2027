"use client";

import Image from "next/image";
import { useState } from "react";
import {
  RiBookOpenLine,
  RiGiftLine,
  RiLeafLine,
  RiMentalHealthLine,
  RiPlayFill,
  RiSnowyLine,
  RiUserLocationLine,
} from "react-icons/ri";
import { pillars } from "@/data/landingData";
import { ArchFrame, FadeInUp } from "@/components/ui/MotionPrimitives";
import VideoExperienceModal from "@/components/modals/VideoExperienceModal";

const icons = [
  RiUserLocationLine,
  RiMentalHealthLine,
  RiBookOpenLine,
  RiLeafLine,
  RiSnowyLine,
  RiGiftLine,
];

export default function ExperienceSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <>
      <section
        id="experiencia"
        className="bg-surface-container-low px-5 py-20 md:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <FadeInUp className="lg:col-span-6">
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                aria-label="Reproducir video de la experiencia"
                className="w-full max-w-115"
              >
                <ArchFrame className="bg-surface shadow-[0_20px_48px_-12px_rgba(80,74,50,0.12)]">
                  <div className="relative aspect-4/5 overflow-hidden rounded-t-full rounded-b-2xl">
                    <Image
                      src="/images/experence_img1.jpeg"
                      alt="Círculo sagrado de cuencos y proyecciones inmersivas"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <span className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-surface/90 text-primary shadow-xl">
                      <RiPlayFill size={36} />
                    </span>
                  </div>
                </ArchFrame>
              </button>
            </FadeInUp>
            <FadeInUp className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                El viaje hacia el silencio exterior
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                Experiencia Inside
              </h2>
              <p className="mt-5 text-lg leading-8 text-on-surface-variant">
                INSIDE nace para silenciar el ruido constante del mundo moderno.
                Una inmersión transformadora diseñada para revitalizar cuerpo,
                mente y hábitos cotidianos en un santuario protegido.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-surface px-5 py-3 text-sm">
                  Interior & Contención
                </span>
                <span className="rounded-full bg-surface px-5 py-3 text-sm">
                  Espacio Seguro
                </span>
                <span className="rounded-full bg-surface px-5 py-3 text-sm">
                  Proceso en Movimiento
                </span>
              </div>
            </FadeInUp>
          </div>
          <FadeInUp className="mt-16">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Qué incluye tu entrada
              </p>
              <h3 className="mt-2 font-serif text-3xl">
                Los 6 pilares de la experiencia
              </h3>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = icons[index];
                return (
                  <article
                    key={pillar.title}
                    className="rounded-2xl border border-primary-container/20 bg-surface p-5 shadow-sm transition-transform hover:-translate-y-1"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary">
                        <Icon size={24} />
                      </span>
                      {pillar.optional && (
                        <span className="rounded-full bg-secondary-fixed px-3 py-1 text-xs font-semibold uppercase text-on-secondary-fixed">
                          Opcional
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {pillar.number} • {pillar.title}
                    </p>
                    <h4 className="mt-2 font-serif text-xl">{pillar.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                      {pillar.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </FadeInUp>
        </div>
      </section>
      <VideoExperienceModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </>
  );
}
