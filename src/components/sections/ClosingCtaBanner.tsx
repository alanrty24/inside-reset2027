import Image from "next/image";
import { RiCalendarLine, RiGroupLine, RiMapPinLine } from "react-icons/ri";
import ButtonCta from "@/components/ui/ButtonCta";
import type { PolicyKey } from "@/components/modals/LegalPolicyModal";

const logo = "/images/logo_white.png";

export default function ClosingCtaBanner({
  openPolicy,
}: {
  openPolicy: (key: PolicyKey) => void;
}) {
  return (
    <section id="entradas" className="px-5 py-12 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-tertiary px-6 py-16 text-center text-on-tertiary shadow-2xl md:px-16">
        <div className="pointer-events-none absolute h-0 opacity-10" />
        <Image
          src={logo}
          alt="INSIDE"
          width={118}
          height={118}
          className="mx-auto h-12 w-auto"
        />
        <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-primary-fixed">
          INSIDE: RESET 2027
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
          Apaga el ruido. Expande tu Luz.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-surface-bright/80">
          Cupos limitados para vivir Reset 2027. Reserva hoy tu lugar y comienza
          el año con balance genuino.
        </p>
        <ButtonCta  
        href={`https://wa.me/584242849237?text=Hola!%20Quiero%20reservar%20mi%20entrada%20para%20INSIDE:%20RESET%202027.%20Gracias!`}
        className="mt-8" />

        <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-surface-bright/70">
          <span className="flex items-center gap-2">
            <RiCalendarLine />
            12 de diciembre, 2026
          </span>
          <span className="flex items-center gap-2">
            <RiMapPinLine />
            Valle Sereno
          </span>
          <span className="flex items-center gap-2">
            <RiGroupLine />
            30 cupos
          </span>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-surface-bright/70 sm:flex-row">
          <span>© 2027 INSIDE. Todos los derechos reservados.</span>
          <div className="flex gap-5">
            <button onClick={() => openPolicy("navegacion")}>Navegación</button>
            <button onClick={() => openPolicy("acceso")}>Acceso</button>
            <button onClick={() => openPolicy("cookies")}>Cookies</button>
          </div>
        </div>
      </div>
    </section>
  );
}
