import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppFloatingButton() {
  const message = encodeURIComponent(
    "Hola, quiero información sobre RESET INSIDE 2027.",
  );

  return (
    <a
      href={`https://wa.me/584242849237?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 items-center gap-3 rounded-full border border-primary-container/30 bg-green-500 px-4 text-white shadow-[0_10px_28px_rgba(80,74,50,0.22)] backdrop-blur-md transition-transform hover:-translate-y-1 sm:bottom-6 sm:right-6"
    >
      <FaWhatsapp size={24} />
      <span className="hidden text-sm font-semibold sm:inline uppercase">
        Reservar
      </span>
    </a>
  );
}
