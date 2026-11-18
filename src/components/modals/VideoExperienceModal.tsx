"use client";

import { AnimatePresence, motion } from "motion/react";
import { RiCloseLine } from "react-icons/ri";
import { useEffect } from "react";

export default function VideoExperienceModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Mantiene el visor inmersivo sin permitir scroll detrás del modal.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeWithEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-on-surface/60 p-3 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Ritual inmersivo INSIDE"
            className="relative w-[min(92vw,390px)] overflow-hidden rounded-[2.25rem] border-4 border-on-surface/10 bg-on-surface p-1.5 shadow-[0_24px_80px_rgba(28,28,21,0.38)]"
            initial={{ scale: 0.94, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.94, y: 24, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-on-surface" />

            {/* <button
              aria-label="Cerrar video"
              onClick={onClose}
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-on-surface/70 text-white shadow-lg backdrop-blur-md"
            >
              <RiCloseLine size={22} />
            </button> */}

            <div className="relative aspect-9/16 w-full max-h-[82vh] overflow-hidden rounded-[1.85rem] bg-on-surface">
              <video
                src="/video/experence_video.mp4"
                controls
                playsInline
                autoPlay
                loop
                muted
                preload="metadata"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-on-surface/35 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
