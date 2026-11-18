import ButtonCta from "@/components/ui/ButtonCta";
import { FadeInUp } from "@/components/ui/MotionPrimitives";
import { STEPS as steps } from "@/data/landingData"; 


export default function StepsSection() {
  return (
    <section
      id="pasos"
      className="relative overflow-hidden bg-surface-container-high/60 px-5 py-20 md:px-10 lg:px-16 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
        <svg
          className="h-48 w-full max-w-6xl"
          fill="none"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 C300 180 500 20 800 100 C950 140 1100 60 1200 100"
            stroke="#969964"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeInUp className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Metodología integral
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Pasos para tu nuevo YO
          </h2>
        </FadeInUp>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({id, title,description}) => (
            <FadeInUp
              key={id}
              className={`rounded-3xl bg-surface p-7 shadow-sm hover:-translate-y-4 transition-all duration-300`}
            >
              <span className="font-serif text-6xl text-primary">{id}</span>
              <h3 className="mt-4 font-serif text-2xl">{title}</h3>
              <p className="mt-3 leading-7 text-on-surface-variant">{description}</p>
            </FadeInUp>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonCta />
        </div>
      </div>
    </section>
  );
}
