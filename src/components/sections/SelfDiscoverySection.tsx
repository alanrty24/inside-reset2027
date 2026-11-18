import { FadeInUp } from "@/components/ui/MotionPrimitives";
import { FORMY } from "@/data/landingData";

export default function SelfDiscoverySection() {
  return (
    <section id="es-para-mi" className="px-5 py-20 md:px-10 lg:px-16 lg:py-28">
      <FadeInUp className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Autodescubrimiento & sintonía
          </p>
          <h2 className="mt-3 font-serif text-4xl">
            ¿Cómo sé si esto es para mí?
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {FORMY.map(({title, description, Icon}) => (
            <article
              key={title}
              className="rounded-3xl bg-surface-container-low p-8"
            >
              <Icon size={34} className="text-primary" />
              <h3 className="mt-5 font-serif text-2xl">{title}</h3>
              <p className="mt-3 leading-7 text-on-surface-variant">{description}</p>
            </article>
          ))}
        </div>
      </FadeInUp>
    </section>
  );
}
