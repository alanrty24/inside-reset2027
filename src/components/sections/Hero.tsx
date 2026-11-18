"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { RiArrowDownLine, RiStarFill } from "react-icons/ri";
import ButtonCta from "@/components/ui/ButtonCta";
import { ArchFrame, FadeInUp } from "@/components/ui/MotionPrimitives";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBgGRRx73wrKmqUjKlauznlseJoBp4OFMxkIkL2IK_U8n6wTACanw_df8SoRw4OIqYgFBoszY5k0gcV8NV-4VZFBnbYaswtUAd_60Huzz7ZvK939NYTjn3QhkkckZUDVSB5ZaAn793fQzkPwk1otn46zWL3jqjIqr3KrHL3OHNx6Zn86db5O5teURfv0ByvJiuw5weG1QGDBHpUbphKNr-4KVJiUPnFI3jrl3wG_ADfHOVpu4nXkIRY";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-5 py-14 md:px-10 lg:px-16 lg:py-8">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="h-225 w-225"
          fill="none"
          viewBox="0 0 800 800"
        >
          <circle
            cx="400"
            cy="400"
            r="360"
            stroke="#969964"
            strokeDasharray="6 10"
            strokeOpacity=".25"
          />
          <circle
            cx="400"
            cy="400"
            r="280"
            stroke="#969964"
            strokeOpacity=".2"
          />
          <circle
            cx="400"
            cy="400"
            r="190"
            stroke="#969964"
            strokeDasharray="4 8"
            strokeOpacity=".3"
          />
        </motion.svg>
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12">
        <FadeInUp className="lg:col-span-7">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-container/15 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Experiencia inmersiva • Edición 2027
          </div>
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.03] text-on-surface md:text-6xl">
            RESET INSIDE 2027 —<br />
            <em className="font-light text-tertiary">Yoga inmersiva</em> +
            Hábitos sostenibles en solo 3 pasos
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-on-surface-variant">
            Apaga el ruido. Expande tu Luz. Un refugio de silencio absoluto
            donde la tecnología inmersiva y el yoga meditativo transforman la
            saturación exterior en claridad mental.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <ButtonCta />
            <a
              href="#experiencia"
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-on-surface"
            >
              Descubrir la experiencia
              <RiArrowDownLine />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-5">
            <div className="flex -space-x-3">
              {["EM", "JA", "VS"].map((initial, i) => (
                <span
                  key={initial}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-surface text-xs ${i === 1 ? "bg-primary-fixed" : i === 2 ? "bg-secondary-fixed" : "bg-surface-container-high"}`}
                >
                  {initial}
                </span>
              ))}
            </div>
            <div>
              <div className="flex text-secondary">
                {[0, 1, 2, 3, 4].map((i) => (
                  <RiStarFill key={i} size={14} />
                ))}
              </div>
              <p className="mt-1 text-sm text-on-surface-variant">
                Santuario reservado al 85% de capacidad
              </p>
            </div>
          </div>
        </FadeInUp>
        <FadeInUp className="flex justify-center lg:col-span-5">
          <ArchFrame className="w-full max-w-105 bg-surface-container-low shadow-[0_24px_50px_rgba(80,74,50,0.14)]">
            <div className="relative aspect-4/5.5 overflow-hidden rounded-t-full rounded-b-2xl">
              <Image
                src="/images/hero_img1.jpeg"
                alt="Meditación y yoga inmersivo en sala abovedada"
                fill
                sizes="(max-width:1024px) 90vw, 420px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-on-surface/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-surface/90 p-4 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Santuario Somático
                </p>
                <p className="mt-1 font-serif text-lg">
                  Arquitectura de luz, silencio y presencia plena.
                </p>
              </div>
            </div>
          </ArchFrame>
        </FadeInUp>
      </div>
    </section>
  );
}
