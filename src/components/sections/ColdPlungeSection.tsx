import Image from "next/image";
import { RiCheckLine } from "react-icons/ri";
import { FadeInUp } from "@/components/ui/MotionPrimitives";
import {  GALLERY as gallery } from "@/data/landingData";

export default function ColdPlungeSection() {
  return (
    <section
      id="cold-plunge"
      className="overflow-hidden bg-surface-container px-5 py-20 md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl text-center">
        <FadeInUp className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Terapia de frío & regulación nerviosa
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            El Despertar del Frío: Experiencia Cold Plunge
          </h2>
          <p className="mt-5 text-lg leading-8 text-on-surface-variant">
            <strong className="text-on-surface">
              Una experiencia totalmente opcional y libre de elegir:
            </strong>{" "}
            tú decides si deseas sumergirte en el hielo o acompañar el ritual
            desde la presencia y la respiración somática.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-surface-container-low px-4 py-2 text-sm text-tertiary">
            <RiCheckLine />
            Participación libre, respetuosa y a tu propio ritmo
          </div>
        </FadeInUp>
        <div className="marquee mt-14 overflow-hidden">
          <div className="marquee-track flex w-max gap-5 py-2">
            {[...gallery, ...gallery].map(({ src, title, description }, index) => (
              <article
                key={`${title}-${index}`}
                className="w-70 shrink-0 rounded-xl bg-surface-container-low p-2.5 shadow-sm"
              >
                <div className="relative aspect-4/5 overflow-hidden rounded-xl">
                  <Image src={src} alt={title} fill className="object-cover" />
                </div>
                <div className="p-3">
                  <p className="font-serif text-lg">{title}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
